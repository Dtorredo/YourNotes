/* Collaborative editing with Y.js CRDT */

// Generate unique ID for notes
const generateNoteId = () => {
  return "note_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
};

// Generate unique ID for users (based on Firebase UID + session)
const generateUserId = () => {
  return "user_" + Math.random().toString(36).substr(2, 9);
};

// User colors for presence indicators
const USER_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E2",
];

class CollaborativeNote {
  constructor(noteId, firebaseDatabase, currentUser) {
    this.noteId = noteId;
    this.firebaseDatabase = firebaseDatabase;
    this.currentUser = currentUser;
    this.yDoc = null;
    this.yText = null;
    this.awareness = null;
    this.provider = null;
    this.binding = null;
    this.collaborators = new Map();
    this.userColor =
      USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)];
  }

  // Initialize Y.js document
  async init(textarea) {
    // Import Y.js dynamically (since we're using script tags)
    // Try multiple globals to be robust to different bundle styles.
    let GlobalY = null;
    if (typeof window !== "undefined" && window.Y) {
      GlobalY = window.Y;
    } else if (typeof globalThis !== "undefined" && globalThis.Y) {
      GlobalY = globalThis.Y;
    }

    if (!GlobalY) {
      console.error(
        "Failed to initialize collaborative note: Y.js is not available on any global (window.Y/globalThis.Y)"
      );
      throw new Error("Y.js library not loaded. Please refresh the page.");
    }

    const Y = GlobalY;

    // y-indexeddb may expose IndexeddbPersistence in different ways depending on the bundle.
    // We try several common globals and gracefully continue if none are available.
    const IndexeddbPersistence =
      // UMD bundles often attach directly to window
      window.IndexeddbPersistence ||
      // Some bundles namespace under yIndexeddb
      (window.yIndexeddb && window.yIndexeddb.IndexeddbPersistence) ||
      // Fallback in case it was attached to Y (older examples)
      Y.IndexeddbPersistence ||
      null;

    this.yDoc = new Y.Doc();
    this.yText = this.yDoc.getText("content");

    // Local persistence with IndexedDB (optional)
    if (IndexeddbPersistence) {
      try {
        const indexeddbProvider = new IndexeddbPersistence(
          this.noteId,
          this.yDoc
        );
        await indexeddbProvider.whenSynced;
      } catch (e) {
        console.warn(
          "IndexedDB persistence for collaborative notes failed; continuing without local persistence:",
          e
        );
      }
    } else {
      console.warn(
        "IndexeddbPersistence not found; collaborative notes will work without local IndexedDB persistence."
      );
    }

    // Set up Firebase sync
    this.setupFirebaseSync();

    // Bind to textarea
    this.setupTextareaBinding(textarea);

    // Set up awareness (presence)
    this.setupAwareness();

    return this;
  }

  setupFirebaseSync() {
    const noteRef = this.firebaseDatabase.ref(
      `collaborative-notes/${this.noteId}`
    );

    let isApplyingRemoteUpdate = false;

    // Listen for remote updates
    noteRef.child("updates").on("child_added", (snapshot) => {
      const update = snapshot.val();
      if (update && update.data && update.userId !== this.currentUser.uid) {
        try {
          isApplyingRemoteUpdate = true;
          const updateArray = Object.values(update.data);
          Y.applyUpdate(this.yDoc, new Uint8Array(updateArray));
          isApplyingRemoteUpdate = false;
        } catch (e) {
          console.error("Error applying update:", e);
          isApplyingRemoteUpdate = false;
        }
      }
    });

    // Send local updates to Firebase
    this.yDoc.on("update", (update) => {
      if (!isApplyingRemoteUpdate) {
        const updateData = Array.from(update);
        noteRef.child("updates").push({
          data: updateData,
          timestamp: Date.now(),
          userId: this.currentUser.uid,
        });
      }
    });

    // Sync metadata
    this.syncMetadata(noteRef);
  }

  syncMetadata(noteRef) {
    noteRef.child("metadata").once("value", (snapshot) => {
      if (!snapshot.exists()) {
        // Initialize metadata for new note
        noteRef.child("metadata").set({
          created: Date.now(),
          createdBy: this.currentUser.uid,
          title: "_new note",
          collaborators: {
            [this.currentUser.uid]: {
              name: this.currentUser.displayName || "Anonymous",
              permission: "write",
              color: this.userColor,
            },
          },
        });
      }
    });
  }

  setupTextareaBinding(textarea) {
    // Manual binding (simpler than y-textarea for our use case)
    let isLocalChange = false;

    // Update textarea when Y.js changes
    this.yText.observe(() => {
      if (!isLocalChange) {
        const cursorPos = textarea.selectionStart;
        const content = this.yText.toString();
        textarea.value = content;
        // Restore cursor position
        textarea.setSelectionRange(cursorPos, cursorPos);
      }
    });

    // Update Y.js when textarea changes
    textarea.addEventListener("input", (e) => {
      isLocalChange = true;
      const content = textarea.value;

      this.yDoc.transact(() => {
        const currentContent = this.yText.toString();
        if (currentContent !== content) {
          this.yText.delete(0, this.yText.length);
          this.yText.insert(0, content);
        }
      });

      isLocalChange = false;

      // Update cursor position in awareness
      this.updateCursorPosition(textarea.selectionStart);
    });

    // Track cursor/selection changes
    textarea.addEventListener("selectionchange", () => {
      this.updateCursorPosition(textarea.selectionStart);
    });

    textarea.addEventListener("click", () => {
      this.updateCursorPosition(textarea.selectionStart);
    });
  }

  setupAwareness() {
    // Create awareness instance
    this.awareness = new Map();

    // Set local user state
    this.setLocalAwareness({
      user: {
        name: this.currentUser.displayName || "Anonymous",
        color: this.userColor,
        uid: this.currentUser.uid,
      },
      cursor: null,
    });

    // Sync awareness through Firebase
    const awarenessRef = this.firebaseDatabase.ref(
      `collaborative-notes/${this.noteId}/awareness`
    );

    // Broadcast local awareness
    setInterval(() => {
      const localState = this.awareness.get("local");
      if (localState) {
        awarenessRef.child(this.currentUser.uid).set({
          ...localState,
          lastSeen: Date.now(),
        });
      }
    }, 2000);

    // Listen for remote awareness
    awarenessRef.on("value", (snapshot) => {
      const states = snapshot.val() || {};
      this.collaborators.clear();

      Object.keys(states).forEach((uid) => {
        if (uid !== this.currentUser.uid) {
          const state = states[uid];
          // Only show users active in last 10 seconds
          if (Date.now() - state.lastSeen < 10000) {
            this.collaborators.set(uid, state);
          }
        }
      });

      // Trigger UI update
      this.renderCollaborators();
    });

    // Clean up on disconnect
    const userAwarenessRef = awarenessRef.child(this.currentUser.uid);
    userAwarenessRef.onDisconnect().remove();
  }

  setLocalAwareness(state) {
    this.awareness.set("local", state);
  }

  updateCursorPosition(position) {
    const localState = this.awareness.get("local");
    if (localState) {
      localState.cursor = position;
      this.setLocalAwareness(localState);
    }
  }

  renderCollaborators() {
    const container = document.getElementById("collaborators-list");
    if (!container) return;

    let html = "";
    this.collaborators.forEach((state, uid) => {
      const user = state.user || {};
      const name = user.name || "Anonymous";
      const color = user.color || "#999";
      const initial = name.charAt(0).toUpperCase();

      html += `
                <div class="collaborator" title="${name}">
                    <div class="collaborator-avatar" style="background-color: ${color}">
                        ${initial}
                    </div>
                </div>
            `;
    });

    container.innerHTML = html;
  }

  getContent() {
    return this.yText ? this.yText.toString() : "";
  }

  destroy() {
    if (this.provider) {
      this.provider.destroy();
    }
    if (this.yDoc) {
      this.yDoc.destroy();
    }

    // Remove awareness
    const awarenessRef = this.firebaseDatabase.ref(
      `collaborative-notes/${this.noteId}/awareness/${this.currentUser.uid}`
    );
    awarenessRef.remove();
  }
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
