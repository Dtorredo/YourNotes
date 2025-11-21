/* unique identifier */
let database;
let currentUser = null;
let currentCollaborativeNote = null;

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
firebase.initializeApp(firebaseConfig);
console.log("store.js loaded v3");

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Set auth persistence to local (survives page reloads) if supported by this Firebase version
try {
  const auth = firebase.auth && firebase.auth();
  if (auth && typeof auth.setPersistence === "function") {
    const persistence =
      auth.Auth && auth.Auth.Persistence && auth.Auth.Persistence.LOCAL;
    if (persistence) {
      auth.setPersistence(persistence);
    }
  }
} catch (e) {
  console.warn("Auth persistence not supported, continuing without it:", e);
}

/* Authenticate with Google */
firebase.auth().onAuthStateChanged((user) => {
  currentUser = user || null;
  if (user) {
    initDatabase(user.uid);
    updateUserProfileUI(user);
  } else {
    updateUserProfileUI(null);
  }
});

// Update user profile UI in sidebar
const updateUserProfileUI = (user) => {
  // Wait for DOM to be ready
  let retries = 0;
  const maxRetries = 50; // 5 seconds max

  const tryUpdate = () => {
    const profileContainer = document.getElementById("user-profile-floating");
    const profilePic = document.getElementById("user-profile-pic");
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
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (currentUser) {
        updateUserProfileUI(currentUser);
      }
    }, 1000);
  });
}

// Logout function (also handles login if not authenticated)
const logoutUser = async () => {
  if (!currentUser) {
    // Not logged in, trigger login
    try {
      await firebase.auth().signInWithPopup(googleProvider);
    } catch (error) {
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
    if (typeof textarea !== "undefined") {
      textarea.value = "";
    }
    // Reload to reset state
    window.location.reload();
  } catch (error) {
    console.error("Logout error:", error);
    alert("Failed to logout: " + error.message);
  }
};

const initDatabase = (uid) => {
  database = firebase.database().ref(`/${uid}`);
  initNotes();
};

const mergeNotes = (notes, data) => {
  let newNotes = Object.assign({}, emptyNotes);
  let keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    let title = keys[i];
    if (!notes[title]) newNotes[title] = data[title];
    else if (notes[title].modified > data[title].modified)
      newNotes[title] = notes[title];
    else newNotes[title] = data[title];
  }
  return newNotes;
};

const initNotes = () => {
  getNotes().then((data) => {
    notes = mergeNotes(notes, data);
    renderSidebar(notes);
    saveLocally(notes);

    /* Start sync */
    sync((data) => {
      notes = mergeNotes(notes, data);
      renderSidebar(notes);
      saveLocally(notes);
      // Don't persist here - it creates an infinite loop!
      // persist(notes);
      /* Syncs notes between devices as long as the title doesn't change */
      if (notes[activeNote.title]) renderNote(activeNote.title);
    });
  });
};

const persist = (notes) => {
  if (!database) return;
  database.set({ notes });
};

// Expose global helpers so other scripts (like interface.js / index.html) can call them safely
if (typeof window !== "undefined") {
  window.persist = persist;
  window.logoutUser = logoutUser;
}

const getNotes = () => {
  return database.once("value").then((snapshot) => {
    if (snapshot.val()) return snapshot.val().notes;
    else return {};
  });
};

const sync = (callback) => {
  database.on("value", (snapshot) => {
    if (snapshot.val()) callback(snapshot.val().notes);
  });
};

/* Collaborative notes management */
const collaborativeNotes = new Map();

// Create or load a collaborative note
const loadCollaborativeNote = async (noteId, textarea) => {
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
const createCollaborativeNote = async (textarea, initialContent = "") => {
  const noteId = generateNoteId();
  const collabNote = await loadCollaborativeNote(noteId, textarea);

  if (initialContent) {
    collabNote.yText.insert(0, initialContent);
  }

  // Add to sidebar
  addCollaborativeNoteToSidebar(
    noteId,
    getTitle(initialContent || "_new collaborative note")
  );

  return noteId;
};

// Convert legacy note to collaborative
const convertToCollaborative = async (legacyTitle, textarea) => {
  const legacyNote = notes[legacyTitle];
  if (!legacyNote) return null;

  const noteId = await createCollaborativeNote(textarea, legacyNote.content);

  // Optionally delete legacy note
  // delete notes[legacyTitle]
  // saveNotes()

  return noteId;
};

// Add collaborative note to sidebar
const addCollaborativeNoteToSidebar = (noteId, title) => {
  const noteRef = firebase
    .database()
    .ref(`collaborative-notes/${noteId}/metadata`);
  noteRef.update({
    title: title,
    modified: Date.now(),
  });
};

// Get all collaborative notes for current user
const getCollaborativeNotes = async () => {
  if (!currentUser) return {};

  const snapshot = await firebase
    .database()
    .ref("collaborative-notes")
    .once("value");
  const allNotes = snapshot.val() || {};
  const userNotes = {};

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

if (typeof window !== "undefined") {
  window.logoutUser = logoutUser;
}
