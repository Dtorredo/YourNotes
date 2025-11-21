const textarea = document.getElementsByTagName("textarea")[0];
const sidebar = document.getElementsByTagName("sidebar")[0];
const list = document.getElementsByTagName("list")[0];
const toggle = document.getElementsByTagName("toggle")[0];
const night = document.getElementsByTagName("night")[0];
const aiSelectionToolbar = document.getElementById("ai-selection-toolbar");
const aiSelectionPrompt = document.getElementById("ai-selection-prompt");
const aiTitleButton = document.getElementById("ai-title-btn");
const aiEditToggle = document.getElementById("ai-edit-toggle");
let hasAutoTitle = false;
console.log("interface.js loaded v3");

const AI_API_BASE =
  window.AI_API_BASE ||
  (window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : window.location.origin);
let activeSelectionRange = null;

const emptyNotes = {
  "_new note": {
    content: "",
  },
};

const activeNote = {
  title: Object.keys(emptyNotes)[0],
  isCollaborative: false,
  noteId: null,
  lockedTitle: false,
};

const renderSidebar = (notes, collaborativeNotes = {}) => {
  let html = "";

  // Render legacy notes
  let titles = Object.keys(notes).sort();
  for (let title of titles) {
    html += `<div onclick="changeNote(event)" data-type="legacy">${title}</div>`;
  }

  // Render collaborative notes
  let collabIds = Object.keys(collaborativeNotes).sort((a, b) => {
    return (
      (collaborativeNotes[b].modified || 0) -
      (collaborativeNotes[a].modified || 0)
    );
  });

  for (let noteId of collabIds) {
    const note = collaborativeNotes[noteId];
    const title = note.title || "_untitled";
    const icon = "👥"; // Collaboration icon
    html += `<div onclick="changeCollaborativeNote(event)" data-note-id="${noteId}" data-type="collaborative">${icon} ${title}</div>`;
  }

  list.innerHTML = html;
};

const changeNote = (event) => {
  let title = event.target.innerHTML;
  renderNote(title);
};

const changeCollaborativeNote = async (event) => {
  const noteId = event.target.getAttribute("data-note-id");
  await renderCollaborativeNote(noteId);
};

// Show/hide share button based on active note
function updateShareButton() {
  const shareBtn = document.getElementById("share-btn");
  if (!shareBtn) return;
  if (activeNote.isCollaborative) {
    shareBtn.style.display = "block";
  } else {
    shareBtn.style.display = "none";
  }
}

const renderNote = (title) => {
  activeNote.title = title;
  activeNote.isCollaborative = false;
  activeNote.noteId = null;
  activeNote.lockedTitle = !!(notes[title] && notes[title].lockedTitle);
  hasAutoTitle = !!activeNote.lockedTitle;

  // Destroy collaborative note if switching from collaborative
  if (currentCollaborativeNote) {
    currentCollaborativeNote.destroy();
    currentCollaborativeNote = null;
  }

  textarea.value = notes[title].content;
  if (!textareaVisible) toggleSidebar();
  textarea.focus();

  // Re-enable auto-save for legacy notes
  textarea.removeEventListener("keyup", debouncedSave);
  textarea.addEventListener("keyup", debouncedSave);

  updateShareButton();
};

const renderCollaborativeNote = async (noteId) => {
  activeNote.isCollaborative = true;
  activeNote.noteId = noteId;
  activeNote.lockedTitle = false;
  hasAutoTitle = false;

  // Update URL to include note ID for sharing
  const newUrl = `${window.location.origin}${window.location.pathname}?note=${noteId}`;
  window.history.pushState({ noteId }, "", newUrl);

  // Disable auto-save for collaborative notes (Y.js handles it)
  textarea.removeEventListener("keyup", debouncedSave);

  // Load collaborative note
  try {
    await loadCollaborativeNote(noteId, textarea);
  } catch (error) {
    console.error("Error loading collaborative note:", error);
    alert("Failed to load collaborative note. Please try again.");
    return;
  }

  if (!textareaVisible) toggleSidebar();
  textarea.focus();

  updateShareButton();
};

const saveNote = () => {
  // Don't save if it's a collaborative note (Y.js handles it)
  if (activeNote.isCollaborative) return;

  const content = textarea.value;
  const currentNoteData = notes[activeNote.title];
  const isLocked =
    activeNote.lockedTitle || (currentNoteData && currentNoteData.lockedTitle);
  let title = isLocked
    ? activeNote.title
    : getTitle(content) || activeNote.title;

  if (activeNote.title !== "_new note" && notes[activeNote.title]) {
    delete notes[activeNote.title];
  }

  if (content.trim()) {
    activeNote.title = title || "_new note";
    const modified = new Date().getTime();
    notes[activeNote.title] = {
      content,
      modified,
      lockedTitle: isLocked,
    };
    activeNote.lockedTitle = isLocked;
  } else {
    activeNote.lockedTitle = false;
  }

  saveNotes();
};

const saveNotes = () => {
  saveLocally(notes);
  if (typeof persist === "function") {
    persist(notes);
  }
  renderSidebar(notes);
};

const saveLocally = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const getTitle = (content) => {
  return content.split("\n")[0].replace("#", "");
};

const debounce = (func) => {
  let timeout;
  return () => {
    let context = this;
    let later = () => {
      timeout = null;
      func.apply(context);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, 500);
  };
};

const reset = () => {
  notes = emptyNotes;
  saveNotes();
  location.reload(true);
};

let textareaVisible = true;
const toggleSidebar = () => {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
  textarea.style.display = textarea.style.display === "none" ? "block" : "none";
  textareaVisible = !textareaVisible;
  if (textareaVisible) {
    toggle.innerHTML = "☰☰";
    toggle.style.float = "left";
    toggle.style.top = -20;
    toggle.style.left = -7;
    textarea.focus();
  } else {
    toggle.innerHTML = "✕";
    toggle.style.top = -7;
    toggle.style.left = -20;
    toggle.style.float = "right";
  }
};

const setTheme = () => {
  let theme, icon;
  if (localStorage.night) {
    theme = {
      backgroundColor: "#778873",
      color: "#EFEFEF",
    };
    icon = "☀️";
  } else {
    theme = {
      backgroundColor: "#EFEFEF",
      color: "#333",
    };
    icon = "🌚";
  }

  Object.assign(document.body.style, theme);
  Object.assign(textarea.style, theme);
  night.innerHTML = icon;
};

const toggleTheme = () => {
  if (localStorage.night) delete localStorage.night;
  else localStorage.night = true;
  setTheme();
};

const debouncedSave = debounce(saveNote);
textarea.addEventListener("keyup", debouncedSave);
toggle.addEventListener("click", toggleSidebar);
night.addEventListener("click", toggleTheme);

/*
    Get local copy first
    Get's overwrite with remote copy (store.js)= source of truth
*/
let notes = Object.assign(
  {},
  emptyNotes,
  JSON.parse(localStorage.getItem("notes"))
);

// Load collaborative notes and render sidebar
let collabNotes = {};
if (typeof getCollaborativeNotes === "function") {
  getCollaborativeNotes().then((collabNotesData) => {
    collabNotes = collabNotesData;
    renderSidebar(notes, collabNotes);
  });
} else {
  renderSidebar(notes);
}

setTheme();

// Check if URL has a shared note ID (only if helper from collaboration.js is available)
let sharedNoteId = null;
if (typeof getNoteIdFromUrl === "function") {
  sharedNoteId = getNoteIdFromUrl();
}
if (sharedNoteId && typeof renderCollaborativeNote === "function") {
  // Wait for auth then load the shared note
  setTimeout(() => {
    if (currentUser) {
      renderCollaborativeNote(sharedNoteId);
    }
  }, 1000);
}

/* Service worker handling
 *
 * On localhost we aggressively UNREGISTER any existing service workers
 * for this origin to avoid stale-cache issues during development.
 * In production, we still support the service worker for offline/PWA.
 */

if ("serviceWorker" in navigator) {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    // Dev: nuke all registrations on this origin
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => regs.forEach((r) => r.unregister()))
      .catch((e) => console.warn("Failed to unregister service workers:", e));
  } else {
    // Prod: keep PWA/offline behavior
    navigator.serviceWorker.register("/sw.js", { scope: "/" });
  }
}

/* Collaboration helper functions */
const createNewCollaborativeNote = async () => {
  if (!currentUser) {
    alert("Please wait for authentication to complete");
    return;
  }

  try {
    console.log("Creating new collaborative note...");
    const noteId = await createCollaborativeNote(textarea, "");
    console.log("Note created with ID:", noteId);

    await renderCollaborativeNote(noteId);
    console.log("Note rendered successfully");

    // Show share button
    const shareBtn = document.getElementById("share-btn");
    if (shareBtn) {
      shareBtn.style.display = "block";
      console.log("Share button should now be visible");
    } else {
      console.error("Share button element not found!");
    }

    // Show success message with share link
    if (typeof getShareableLink === "function") {
      const shareLink = getShareableLink(noteId);
      console.log("Share link:", shareLink);
      // Optionally show a notification
      console.log(
        "✅ Collaborative note created! Click the Share button (🔗) to get the link."
      );
    } else {
      console.warn("getShareableLink function not available yet");
    }
  } catch (error) {
    console.error("Error creating collaborative note:", error);
    alert("Failed to create collaborative note: " + error.message);
  }
};

const shareCurrentNote = () => {
  if (!activeNote.isCollaborative || !activeNote.noteId) {
    alert("Please select a collaborative note to share");
    return;
  }

  // Generate share link
  let shareLink;
  if (typeof getShareableLink === "function") {
    shareLink = getShareableLink(activeNote.noteId);
  } else {
    // Fallback if function not available
    const baseUrl = window.location.origin + window.location.pathname;
    shareLink = `${baseUrl}?note=${activeNote.noteId}`;
  }

  // Copy to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        alert("✅ Share link copied to clipboard!\n\n" + shareLink);
      })
      .catch((err) => {
        console.error("Clipboard error:", err);
        // Fallback for older browsers or if clipboard fails
        prompt("Share this link with collaborators:", shareLink);
      });
  } else {
    // Fallback for older browsers
    prompt("Share this link with collaborators:", shareLink);
  }
};

/* ---------- AI helpers ---------- */
const handleSelectionChange = () => {
  if (!textarea) return;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start !== end) {
    activeSelectionRange = { start, end };
    if (aiEditToggle) {
      aiEditToggle.classList.remove("disabled");
    }
  } else {
    activeSelectionRange = null;
    if (aiEditToggle) {
      aiEditToggle.classList.add("disabled");
    }
    hideAiToolbar();
  }
};

const hideAiToolbar = () => {
  if (aiSelectionToolbar) {
    aiSelectionToolbar.classList.add("hidden");
  }
};

const toggleAiEditPrompt = () => {
  if (!aiEditToggle || !aiSelectionToolbar) return;

  if (
    !activeSelectionRange ||
    activeSelectionRange.start === activeSelectionRange.end
  ) {
    alert("Highlight some text first, then click the AI icon.");
    return;
  }

  if (aiSelectionToolbar.classList.contains("hidden")) {
    aiSelectionToolbar.classList.remove("hidden");
    if (aiSelectionPrompt && !aiSelectionPrompt.value) {
      aiSelectionPrompt.value = "Improve clarity but keep the meaning.";
    }
  } else {
    hideAiToolbar();
  }
};

if (aiEditToggle) {
  aiEditToggle.classList.add("disabled");
  aiEditToggle.addEventListener("click", toggleAiEditPrompt);
}

const callAiService = async (payload) => {
  const response = await fetch(`${AI_API_BASE}/api/ai`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "AI request failed");
  }

  return response.json();
};

const applyAiEdit = async () => {
  if (
    !activeSelectionRange ||
    activeSelectionRange.start === activeSelectionRange.end
  ) {
    alert("Please highlight the text you want to transform first.");
    return;
  }

  const { start, end } = activeSelectionRange;
  const selectionText = textarea.value.substring(start, end);
  const prompt =
    (aiSelectionPrompt && aiSelectionPrompt.value.trim()) ||
    "Rewrite the selected text to improve clarity.";

  if (!selectionText.trim()) {
    alert("Selected text is empty.");
    return;
  }

  try {
    if (aiSelectionToolbar) {
      aiSelectionToolbar.classList.add("loading");
    }

    const { result } = await callAiService({
      type: "edit",
      selection: selectionText,
      prompt,
      content: textarea.value,
    });

    if (!result) {
      alert("AI did not return any changes.");
      return;
    }

    const updatedText =
      textarea.value.substring(0, start) +
      result +
      textarea.value.substring(end);
    textarea.value = updatedText;
    hideAiToolbar();

    if (
      activeNote.isCollaborative &&
      typeof currentCollaborativeNote !== "undefined"
    ) {
      // Trigger Y.js binding update
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      saveNote();
    }
  } catch (error) {
    console.error("AI edit error:", error);
    alert("Failed to apply AI edit: " + error.message);
  } finally {
    if (aiSelectionToolbar) {
      aiSelectionToolbar.classList.remove("loading");
    }
  }
};

const generateAiTitle = async () => {
  if (hasAutoTitle) return;
  if (activeNote.isCollaborative) return;

  const content = textarea.value.trim();
  if (!content) return;

  try {
    const { result } = await callAiService({
      type: "summary",
      content,
    });

    if (!result) {
      return;
    }

    hasAutoTitle = true;
    renameActiveNote(result.trim());
  } catch (error) {
    console.error("AI title error:", error);
  }
};

const renameActiveNote = (newTitle) => {
  if (!newTitle) return;
  const sanitized = newTitle
    .replace(/\s+/g, " ")
    .replace(/[#/\\]/g, "")
    .trim();
  if (!sanitized) return;

  const truncated = sanitized.slice(0, 80);
  if (notes[truncated] && truncated !== activeNote.title) {
    let counter = 2;
    let candidate = `${truncated} (${counter})`;
    while (notes[candidate]) {
      counter += 1;
      candidate = `${truncated} (${counter})`;
    }
    return renameActiveNote(candidate);
  }

  if (!notes[activeNote.title]) return;

  const noteData = notes[activeNote.title];
  delete notes[activeNote.title];
  notes[truncated] = {
    ...noteData,
    lockedTitle: true,
  };
  activeNote.title = truncated;
  activeNote.lockedTitle = true;
  saveNotes();
  renderSidebar(notes, collabNotes);
  renderNote(truncated);
};

if (textarea) {
  textarea.addEventListener("mouseup", handleSelectionChange);
  textarea.addEventListener("keyup", handleSelectionChange);

  // Trigger automatic AI title once per note when user starts typing
  textarea.addEventListener("input", () => {
    const currentNoteData = notes[activeNote.title];
    const isLocked =
      activeNote.lockedTitle ||
      (currentNoteData && currentNoteData.lockedTitle);
    if (!isLocked && !hasAutoTitle && textarea.value.trim().length > 40) {
      generateAiTitle();
    }
  });
}

window.applyAiEdit = applyAiEdit;
window.hideAiToolbar = hideAiToolbar;
window.generateAiTitle = generateAiTitle;
window.createNewCollaborativeNote = createNewCollaborativeNote;
window.shareCurrentNote = shareCurrentNote;
