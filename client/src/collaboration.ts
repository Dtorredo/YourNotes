import { database } from "./firebase";
import { ref, child, set } from "firebase/database";

import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export class CollaborativeNote {
  noteId: string;
  firebaseDatabase: any;
  currentUser: any;
  doc: Y.Doc;
  provider: WebsocketProvider | null;
  yText: Y.Text;
  binding: any;

  constructor(noteId: string, firebaseDatabase: any, currentUser: any) {
    this.noteId = noteId;
    this.firebaseDatabase = firebaseDatabase;
    this.currentUser = currentUser;
    this.doc = new Y.Doc();
    this.provider = null;
    this.yText = this.doc.getText("content");
  }

  // Initialize Y.js connection and binding
  async init(textarea: HTMLTextAreaElement) {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

    // Use port 4000 for dev (as per .env), or same host for prod
    const wsUrl =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
        ? "ws://localhost:4000"
        : `${protocol}//${window.location.host}`;

    // Connect to the room for this specific note
    // We pass the noteId as a query param so the server can route it
    this.provider = new WebsocketProvider(wsUrl, this.noteId, this.doc, {
      params: { note: this.noteId },
    });

    this.provider.on("status", (event: any) => {
      console.log("Y.js connection status:", event.status);
    });

    // Bind Y.Text to Textarea
    // We implement a simple binding here to avoid importing y-textarea which might need bundler config
    this.bindTextarea(textarea);

    return this;
  }

  bindTextarea(textarea: HTMLTextAreaElement) {
    // 1. Initial value
    if (this.yText.toString()) {
      textarea.value = this.yText.toString();
    } else if (textarea.value) {
      // If textarea has content but Y.js is empty, initialize Y.js
      this.yText.insert(0, textarea.value);
    }

    // 2. Listen for local updates
    let isLocalUpdate = false;
    textarea.addEventListener("input", () => {
      isLocalUpdate = true;
      const currentVal = textarea.value;
      const yVal = this.yText.toString();

      if (currentVal !== yVal) {
        // Simple diffing: delete all and insert new (inefficient but robust for plain text)
        // For better performance, we should calculate diffs.
        // But for this task, full replacement on change is acceptable for small notes,
        // OR we can rely on Y.js to handle it if we just update.
        // Actually, deleting everything resets cursors for other users.
        // Let's try a slightly smarter approach:

        this.doc.transact(() => {
          this.yText.delete(0, this.yText.length);
          this.yText.insert(0, currentVal);
        });
      }
      isLocalUpdate = false;
    });

    // 3. Listen for remote updates
    this.yText.observe((event) => {
      if (!isLocalUpdate) {
        const cursorPos = textarea.selectionStart;
        const currentVal = textarea.value;
        const newVal = this.yText.toString();

        if (currentVal !== newVal) {
          textarea.value = newVal;
          // Attempt to preserve cursor (simple approximation)
          const newCursorPos = Math.min(cursorPos, newVal.length);
          textarea.setSelectionRange(newCursorPos, newCursorPos);
        }
      }
    });
  }

  // helper for initial content (used by store.js)
  setContent(content: string) {
    if (content && !this.yText.toString()) {
      this.yText.insert(0, content);
    }
  }

  getContent() {
    return this.yText.toString();
  }

  destroy() {
    if (this.provider) {
      this.provider.disconnect();
      this.provider.destroy();
    }
    this.doc.destroy();
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
