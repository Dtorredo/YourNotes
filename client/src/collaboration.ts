import { database } from "./firebase";
import { ref, child, set } from "firebase/database";

export class CollaborativeNote {
  noteId: string;
  firebaseDatabase: any;
  currentUser: any;
  content: string;
  ws: WebSocket | null;

  constructor(noteId: string, firebaseDatabase: any, currentUser: any) {
    this.noteId = noteId;
    this.firebaseDatabase = database; // kept for metadata/share helpers
    this.currentUser = currentUser;
    this.content = "";
    this.ws = null;
  }

  // Initialize simple collaborative note and WebSocket connection
  async init(textarea: HTMLTextAreaElement) {
    let isLocalChange = false;
    const refreshTextarea = () => {
      if (isLocalChange) return;
      const cursorPos = textarea.selectionStart;
      textarea.value = this.content;
      textarea.setSelectionRange(cursorPos, cursorPos);
    };

    // Textarea → local content + broadcast
    textarea.addEventListener("input", () => {
      isLocalChange = true;
      const content = textarea.value;
      this.content = content;
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(
          JSON.stringify({
            type: "content",
            noteId: this.noteId,
            content,
            userId: this.currentUser && this.currentUser.uid,
          })
        );
      }
      isLocalChange = false;
    });

    // WebSocket connection to Node backend
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

    // Use port 4000 for dev (as per .env), or same host for prod
    // In a real setup, this should be an env var
    const wsUrl =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
        ? "ws://localhost:4000"
        : `${protocol}//${window.location.host}`;

    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      this.ws?.send(
        JSON.stringify({
          type: "join",
          noteId: this.noteId,
          userId: this.currentUser && this.currentUser.uid,
        })
      );
    };

    this.ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === "content" && msg.noteId === this.noteId) {
          // Simple last-writer-wins sync for now
          isLocalChange = true;
          this.content = msg.content || "";
          refreshTextarea();
          isLocalChange = false;
        }
      } catch (e) {
        console.error("WS collab message error:", e);
      }
    };

    return this;
  }

  // helper for initial content (used by store.js)
  setContent(content: string) {
    this.content = content || "";
  }

  getContent() {
    return this.content || "";
  }

  destroy() {
    if (this.ws) this.ws.close();
  }
}

// Share a note with other users
export const shareNote = async (
  noteId: string,
  userEmail: string,
  permission = "write"
) => {
  const noteRef = ref(
    database,
    `collaborative-notes/${noteId}/metadata/collaborators`
  );

  // In a real app, you'd look up the user by email
  // For now, we'll just add a placeholder
  const shareId = "shared_" + Date.now();
  const shareRef = child(noteRef, shareId);

  await set(shareRef, {
    email: userEmail,
    permission: permission,
    addedAt: Date.now(),
  });

  return shareId;
};

// Get shareable link for a note
export const getShareableLink = (noteId: string) => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?note=${noteId}`;
};

// Load note from URL parameter
export const getNoteIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("note");
};

// Expose globally for other scripts if needed
window.getNoteIdFromUrl = getNoteIdFromUrl;
window.getShareableLink = getShareableLink;
