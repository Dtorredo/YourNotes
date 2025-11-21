// Collaborative editing with a simple WebSocket-based sync backend

// Generate unique ID for notes
const generateNoteId = () => {
  return "note_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
};

class CollaborativeNote {
  constructor(noteId, firebaseDatabase, currentUser) {
    this.noteId = noteId;
    this.firebaseDatabase = firebaseDatabase; // kept for metadata/share helpers
    this.currentUser = currentUser;
    this.content = "";
    this.ws = null;
  }

  // Initialize simple collaborative note and WebSocket connection
  async init(textarea) {
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
    this.ws = new WebSocket("ws://localhost:5001");

    this.ws.onopen = () => {
      this.ws.send(
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
  setContent(content) {
    this.content = content || "";
  }

  getContent() {
    return this.content || "";
  }

  destroy() {
    if (this.ws) this.ws.close();
  }
}

// Expose globals so existing non-module scripts (store.js, interface.js) can use them
if (typeof window !== "undefined") {
  window.CollaborativeNote = CollaborativeNote;
  window.generateNoteId = generateNoteId;
}

// Share a note with other users
const shareNote = async (noteId, userEmail, permission = "write") => {
  const noteRef = database.ref(
    `collaborative-notes/${noteId}/metadata/collaborators`
  );

  // In a real app, you'd look up the user by email
  // For now, we'll just add a placeholder
  const shareId = "shared_" + Date.now();

  await noteRef.child(shareId).set({
    email: userEmail,
    permission: permission,
    addedAt: Date.now(),
  });

  return shareId;
};

// Get shareable link for a note
const getShareableLink = (noteId) => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?note=${noteId}`;
};

// Load note from URL parameter
const getNoteIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("note");
};
