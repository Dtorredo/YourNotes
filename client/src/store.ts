import { firebase } from './firebase';
import { CollaborativeNote } from './collaboration';
// Removing circular import from ui
// We will pass necessary functions as callbacks or move shared logic to a utils file
// or just duplicate simple helpers like getTitle if needed.
// renderSidebar is needed here.
// But ui depends on store for notes.
// This circular dependency is tricky.
// Best is to put state in store, and ui just renders.
// UI imports store to get data.
// Store imports UI to trigger updates.
// This pattern is common in vanilla JS but causes cycle in ESM.

// Solution: UI should expose a 'render' function, and Store calls it.
// Store should NOT import UI's internal state.
// UI imports Store's state.

// Let's see where the cycle is.
// store.ts imports { renderSidebar, renderNote } from './ui'
// ui.ts imports { notes, saveLocally, ... } from './store'

// We can break this by moving the 'renderSidebar' call out of store.ts?
// No, store needs to update UI when data changes (firebase callbacks).
// We can inject the render function into store?

export let renderSidebarCallback: ((notes: any, collabNotes?: any) => void) | null = null;
export let renderNoteCallback: ((title: string) => void) | null = null;

export const setRenderCallbacks = (
    renderSidebar: (notes: any, collabNotes?: any) => void,
    renderNote: (title: string) => void
) => {
    renderSidebarCallback = renderSidebar;
    renderNoteCallback = renderNote;
};

declare global {
  interface Window {
    generateNoteId: () => string;
    persist: (notes: any) => void;
    logoutUser: () => void;
    CollaborativeNote: any;
    getNoteIdFromUrl: () => string | null;
    getShareableLink: (noteId: string) => string;
  }
}

export let database: any;
export let currentUser: any = null;
export let currentCollaborativeNote: any = null;
export let notes: any = {};

export const emptyNotes = {
  "_new note": {
    content: "",
  },
};

export const activeNote: any = {
    title: Object.keys(emptyNotes)[0],
    isCollaborative: false,
    noteId: null,
    lockedTitle: false,
};

// Generate unique ID for collaborative notes
export const generateNoteId = () => {
  return "note_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
};
window.generateNoteId = generateNoteId;

/* initialize firebase */
const firebaseConfig = {
  apiKey: "AIzaSyBV-GHwBk1Bibx9xolT7IdvsQ8mjgO-fkU",
  authDomain: "notes-uno.firebaseapp.com",
  databaseURL: "https://notes-uno-default-rtdb.firebaseio.com",
  projectId: "notes-uno",
  storageBucket: "notes-uno.firebasestorage.app",
  messagingSenderId: "1025777646528",
  appId: "1:1025777646528:web:2f6bc79f92a5ca04256625",
  measurementId: "G-G17GF41EWB",
};

// Initialize if not already initialized
if (firebase && !firebase.apps?.length && !window.firebase?.apps?.length) {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (e) {
        // Ignore if already initialized
    }
}
console.log("store.ts loaded");

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Set auth persistence to local
try {
  const auth = firebase.auth();
  if (auth && typeof auth.setPersistence === "function") {
    auth.setPersistence('local').catch((e: any) => console.warn("Persistence error", e));
  }
} catch (e) {
  console.warn("Auth persistence not supported, continuing without it:", e);
}

/* Authenticate with Google */
firebase.auth().onAuthStateChanged((user: any) => {
  currentUser = user || null;
  if (user) {
    initDatabase(user.uid);
    updateUserProfileUI(user);
  } else {
    updateUserProfileUI(null);
  }
});

// Update user profile UI in sidebar
const updateUserProfileUI = (user: any) => {
  // Wait for DOM to be ready
  let retries = 0;
  const maxRetries = 50; // 5 seconds max

  const tryUpdate = () => {
    const profileContainer = document.getElementById("user-profile-floating");
    const profilePic = document.getElementById("user-profile-pic") as HTMLImageElement;
    const logoutBtn = document.getElementById("user-logout-btn");
    const nameEl = document.getElementById("user-name");

    if (!profileContainer || !profilePic || !logoutBtn || !nameEl) {
      // Elements not ready yet, retry after a short delay
      retries++;
      if (retries < maxRetries) {
        setTimeout(tryUpdate, 100);
      } else {
        console.warn("Profile UI elements not found after retries");
      }
      return;
    }

    if (user) {
      // Show profile picture
      if (user.photoURL) {
        profilePic.src = user.photoURL;
        profilePic.style.display = "block";
        profileContainer.removeAttribute("data-initial");
      } else {
        // Fallback to initial if no photo
        const initial = (user.displayName || user.email || "U")
          .charAt(0)
          .toUpperCase();
        profilePic.style.display = "none";
        profileContainer.setAttribute("data-initial", initial);
      }
      nameEl.textContent = user.displayName || user.email || "Signed in";
      logoutBtn.style.display = "block";
      logoutBtn.textContent = "🚪 Logout";
      logoutBtn.title = `Logout ${user.displayName || user.email}`;
      profileContainer.style.display = "flex";
    } else {
      // No user - show login button
      profilePic.style.display = "none";
      profileContainer.removeAttribute("data-initial");
      nameEl.textContent = "Not signed in";
      logoutBtn.style.display = "block";
      logoutBtn.textContent = "🔐 Login";
      logoutBtn.title = "Sign in with Google";
      profileContainer.removeAttribute("data-initial");
      profileContainer.style.display = "flex";
    }
  };

  tryUpdate();
};

// Also update on page load to ensure it shows
window.addEventListener("load", () => {
  setTimeout(() => {
    if (currentUser) {
      updateUserProfileUI(currentUser);
    }
  }, 1000);
});


// Logout function (also handles login if not authenticated)
export const logoutUser = async () => {
  if (!currentUser) {
    // Not logged in, trigger login
    try {
      await firebase.auth().signInWithPopup(googleProvider);
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.code !== "auth/popup-closed-by-user") {
        alert("Failed to login: " + error.message);
      }
    }
    return;
  }

  // Logout
  try {
    await firebase.auth().signOut();
    currentUser = null;
    // Clear the textarea
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.value = "";
    }
    // Reload to reset state
    window.location.reload();
  } catch (error: any) {
    console.error("Logout error:", error);
    alert("Failed to logout: " + error.message);
  }
};

const initDatabase = (uid: string) => {
  database = firebase.database().ref(`/${uid}`);
  initNotes();
};

const mergeNotes = (currentNotes: any, data: any) => {
  let newNotes = Object.assign({}, emptyNotes);
  let keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    let title = keys[i];
    if (!currentNotes[title]) newNotes[title] = data[title];
    else if (currentNotes[title].modified > data[title].modified)
      newNotes[title] = currentNotes[title];
    else newNotes[title] = data[title];
  }
  return newNotes;
};

const initNotes = () => {
  getNotes().then((data) => {
    notes = mergeNotes(notes, data);
    if (renderSidebarCallback) renderSidebarCallback(notes);
    saveLocally(notes);

    /* Start sync */
    sync((data: any) => {
      notes = mergeNotes(notes, data);
      if (renderSidebarCallback) renderSidebarCallback(notes);
      saveLocally(notes);
      /* Syncs notes between devices as long as the title doesn't change */
      if (notes[activeNote.title] && renderNoteCallback) renderNoteCallback(activeNote.title);
    });
  });
};

export const persist = (notesToPersist: any) => {
  if (!database) return;
  database.set({ notes: notesToPersist });
};

export const saveLocally = (notes: any) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};

// Expose global helpers so other scripts can call them safely
window.persist = persist;
window.logoutUser = logoutUser;

const getNotes = () => {
  return database.once("value").then((snapshot: any) => {
    if (snapshot.val()) return snapshot.val().notes;
    else return {};
  });
};

const sync = (callback: any) => {
  database.on("value", (snapshot: any) => {
    if (snapshot.val()) callback(snapshot.val().notes);
  });
};

/* Collaborative notes management */
const collaborativeNotes = new Map();

// Create or load a collaborative note
export const loadCollaborativeNote = async (noteId: string, textarea: HTMLTextAreaElement) => {
  if (!currentUser) {
    console.error("User not authenticated");
    return null;
  }

  // Destroy previous collaborative note if exists
  if (currentCollaborativeNote) {
    currentCollaborativeNote.destroy();
  }

  // Check if note already exists in cache
  if (collaborativeNotes.has(noteId)) {
    currentCollaborativeNote = collaborativeNotes.get(noteId);
    return currentCollaborativeNote;
  }

  // Create new collaborative note
  const collabNote = new CollaborativeNote(
    noteId,
    firebase.database(),
    currentUser
  );
  await collabNote.init(textarea);

  collaborativeNotes.set(noteId, collabNote);
  currentCollaborativeNote = collabNote;

  return collabNote;
};

// Create a new collaborative note
export const createCollaborativeNote = async (textarea: HTMLTextAreaElement, initialContent = "") => {
  const noteId = generateNoteId();
  const collabNote = await loadCollaborativeNote(noteId, textarea);

  if (initialContent && typeof collabNote.setContent === "function") {
    collabNote.setContent(initialContent);
  }

  // Add to sidebar
  addCollaborativeNoteToSidebar(
    noteId,
    getTitle(initialContent || "_new collaborative note")
  );

  return noteId;
};

// Add collaborative note to sidebar
const addCollaborativeNoteToSidebar = (noteId: string, title: string) => {
  const noteRef = firebase
    .database()
    .ref(`collaborative-notes/${noteId}/metadata`);
  noteRef.update({
    title: title,
    modified: Date.now(),
  });
};

// Get all collaborative notes for current user
export const getCollaborativeNotes = async () => {
  if (!currentUser) return {};

  const snapshot = await firebase
    .database()
    .ref("collaborative-notes")
    .once("value");
  const allNotes = snapshot.val() || {};
  const userNotes: any = {};

  // Filter notes where user is a collaborator
  Object.keys(allNotes).forEach((noteId) => {
    const note = allNotes[noteId];
    if (note.metadata && note.metadata.collaborators) {
      const collaborators = note.metadata.collaborators;
      if (collaborators[currentUser.uid] || collaborators[currentUser.email]) {
        userNotes[noteId] = {
          title: note.metadata.title || "_untitled",
          modified: note.metadata.modified || 0,
          isCollaborative: true,
        };
      }
    }
  });

  return userNotes;
};

// Helper to get title from content
const getTitle = (content: string) => {
  return content.split("\n")[0].replace("#", "");
};

// Set initial notes from localStorage
notes = Object.assign(
  {},
  emptyNotes,
  JSON.parse(localStorage.getItem("notes") || "null")
);
