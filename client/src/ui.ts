import {
  notes,
  saveLocally,
  persist,
  currentUser,
  loadCollaborativeNote,
  createCollaborativeNote,
  getCollaborativeNotes,
  currentCollaborativeNote,
  updateCollaborativeNoteTitle,
} from "./store";
import { getNoteIdFromUrl, getShareableLink } from "./collaboration";

// We need to use 'any' for DOM elements initially because they might be null
// and we are not doing strict null checks to match the original loose logic
const textarea = document.getElementsByTagName(
  "textarea"
)[0] as HTMLTextAreaElement;
const sidebar = document.getElementsByTagName("sidebar")[0] as HTMLElement;
const list = document.getElementsByTagName("list")[0] as HTMLElement;
const toggle = document.getElementsByTagName("toggle")[0] as HTMLElement;
const night = document.getElementsByTagName("night")[0] as HTMLElement;
const aiSelectionToolbar = document.getElementById(
  "ai-selection-toolbar"
) as HTMLElement;
const aiSelectionPrompt = document.getElementById(
  "ai-selection-prompt"
) as HTMLInputElement;
const aiEditToggle = document.getElementById("ai-edit-toggle") as HTMLElement;
const newCollabBtn = document.getElementById("new-collab-btn") as HTMLElement;

console.log("ui.ts loaded");

const AI_API_BASE =
  (window as any).AI_API_BASE ||
  (window.location.hostname === "localhost"
    ? "/api" // Vite proxy maps /api → http://localhost:4000/api in dev
    : "/api"); // In prod, Express should serve API at /api

let activeSelectionRange: { start: number; end: number } | null = null;

export const renderSidebar = (notes: any, collaborativeNotes: any = {}) => {
  let html = "";

  // Render legacy notes
  let titles = Object.keys(notes).sort();
  for (let title of titles) {
    html += `<div class="note-item legacy" data-title="${title}" data-type="legacy">${title}</div>`;
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
    const title = note.summary || note.title || "_untitled";
    const icon = "👥"; // Collaboration icon
    html += `<div class="note-item collaborative" data-note-id="${noteId}" data-type="collaborative">${icon} ${title}</div>`;
  }

  list.innerHTML = html;

  // Add event listeners (since we are using innerHTML, inline onclicks are messy in modules)
  // We'll delegate or attach after render.
  // Delegating is better.
};

// Delegate click events on list
list.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement;
  // Handle direct clicks or clicks on children
  const noteItem = target.closest(".note-item");
  if (noteItem) {
    const type = noteItem.getAttribute("data-type");
    if (type === "legacy") {
      const title = noteItem.getAttribute("data-title");
      if (title) renderNote(title);
    } else if (type === "collaborative") {
      const noteId = noteItem.getAttribute("data-note-id");
      if (noteId) changeCollaborativeNote(noteId);
    }
  }
});

const changeCollaborativeNote = async (noteId: string) => {
  // Open collaborative note in a new tab
  const shareLink = getShareableLink(noteId);
  window.open(shareLink, "_blank");
};

// Show/hide share button based on active note
function updateShareButton() {
  const shareBtn = document.getElementById("share-btn");
  if (!shareBtn) return;
  // Need to access activeNote. Since we can't import it from store because of cycle, we check helper or export it
  // We can import activeNote from store, but only if store doesn't import us.
  // Currently store imports ui.ts.
  // So ui.ts cannot import store.ts.

  // But we already imported `notes`, `currentUser` etc from store.ts above!
  // The cycle is:
  // store.ts -> imports ui.ts (for renderSidebar)
  // ui.ts -> imports store.ts (for notes)

  // I broke the cycle in `main.ts` by using `setRenderCallbacks`.
  // So `store.ts` NO LONGER imports `ui.ts`.
  // Wait, I need to remove the import in `store.ts` as well.

  if (activeNote.isCollaborative) {
    shareBtn.style.display = "block";
  } else {
    shareBtn.style.display = "none";
  }
}

import { activeNote } from "./store";

export const renderNote = (title: string) => {
  activeNote.title = title;
  activeNote.isCollaborative = false;
  activeNote.noteId = null;
  activeNote.lockedTitle = !!(notes[title] && notes[title].lockedTitle);

  // Destroy collaborative note if switching from collaborative
  if (currentCollaborativeNote) {
    currentCollaborativeNote.destroy();
  }

  textarea.value = notes[title].content;
  if (!textareaVisible) toggleSidebar();
  textarea.focus();

  // Re-enable auto-save for legacy notes
  textarea.removeEventListener("keyup", debouncedSave);
  textarea.addEventListener("keyup", debouncedSave);

  updateShareButton();
};

export const renderCollaborativeNote = async (noteId: string) => {
  activeNote.isCollaborative = true;
  activeNote.noteId = noteId;
  activeNote.lockedTitle = false;
  // hasAutoTitle = false;

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

const getTitle = (content: string) => {
  // Extract first 4 words
  const words = content.trim().split(/\s+/);
  return words.slice(0, 4).join(" ");
};

const debounce = (func: Function) => {
  let timeout: any;
  return (...args: any[]) => {
    let context = this;
    let later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, 500);
  };
};

export const reset = () => {
  // Reset to a new local note
  activeNote.title = "_new note";
  activeNote.isCollaborative = false;
  activeNote.noteId = null;
  activeNote.lockedTitle = false;

  if (currentCollaborativeNote) {
    currentCollaborativeNote.destroy();
  }

  textarea.value = "";
  textarea.focus();

  // Re-enable auto-save
  textarea.removeEventListener("keyup", debouncedSave);
  textarea.addEventListener("keyup", debouncedSave);

  updateShareButton();
  renderSidebar(notes);
};

let textareaVisible = true;
const toggleSidebar = () => {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
  textarea.style.display = textarea.style.display === "none" ? "block" : "none";
  textareaVisible = !textareaVisible;
  if (textareaVisible) {
    toggle.innerHTML = "☰☰";
    toggle.style.float = "left";
    // toggle.style.top = -20; // Numbers not allowed
    toggle.style.top = "-20px";
    toggle.style.left = "-7px";
    textarea.focus();
  } else {
    toggle.innerHTML = "✕";
    toggle.style.top = "-7px";
    toggle.style.left = "-20px";
    toggle.style.float = "right";
  }
};

const setTheme = () => {
  let theme: any, icon;
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
  else localStorage.night = "true";
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
// Initial render happens in store.ts when data loads.
// But we need initial render of localstorage notes here?
// store.ts handles `notes` initialization.

// Load collaborative notes and render sidebar
// This logic is now in store.ts roughly, but the call to renderSidebar is needed.
// We should probably initialize this in main.ts to coordinate.

setTheme();

// Check if URL has a shared note ID
let sharedNoteId: string | null = null;
if (typeof getNoteIdFromUrl === "function") {
  sharedNoteId = getNoteIdFromUrl();
}
if (sharedNoteId) {
  // Wait for auth then load the shared note
  setTimeout(() => {
    if (currentUser) {
      renderCollaborativeNote(sharedNoteId!);
    }
  }, 1000);
}

/* Service worker handling */
if ("serviceWorker" in navigator) {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => regs.forEach((r) => r.unregister()))
      .catch((e) => console.warn("Failed to unregister service workers:", e));
  } else {
    navigator.serviceWorker.register("/sw.js", { scope: "/" });
  }
}

/* Collaboration helper functions */
export const createNewCollaborativeNoteUI = async () => {
  if (!currentUser) {
    alert("Please wait for authentication to complete");
    return;
  }

  try {
    console.log("Creating new collaborative note...");
    const noteId = await createCollaborativeNote(textarea, "");
    console.log("Note created with ID:", noteId);

    // Refresh sidebar to show the new note title immediately
    const collabNotes = await getCollaborativeNotes();
    renderSidebar(notes, collabNotes);

    // Open the collaborative note in a new tab
    if (typeof getShareableLink === "function") {
      const shareLink = getShareableLink(noteId);
      console.log("Opening collaborative note in new tab:", shareLink);
      window.open(shareLink, "_blank");
    }
  } catch (error: any) {
    console.error("Error creating collaborative note:", error);
    alert("Failed to create collaborative note: " + error.message);
  }
};

export const shareCurrentNote = () => {
  if (!activeNote.isCollaborative || !activeNote.noteId) {
    alert("Please select a collaborative note to share");
    return;
  }

  // Generate share link
  let shareLink;
  if (typeof getShareableLink === "function") {
    shareLink = getShareableLink(activeNote.noteId);
  } else {
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
        prompt("Share this link with collaborators:", shareLink);
      });
  } else {
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

export const hideAiToolbar = () => {
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
    // Keep input empty - user will use placeholder or type their own prompt
    if (aiSelectionPrompt) {
      aiSelectionPrompt.focus();
    }

    // Re-apply the selection to keep text highlighted
    if (activeSelectionRange && textarea) {
      setTimeout(() => {
        textarea.setSelectionRange(
          activeSelectionRange.start,
          activeSelectionRange.end
        );
        // Make textarea appear focused with selection visible
        textarea.focus();
        // Then immediately focus back to input so user can type
        setTimeout(() => {
          if (aiSelectionPrompt) {
            aiSelectionPrompt.focus();
          }
        }, 100);
      }, 50);
    }
  } else {
    hideAiToolbar();
  }
};

if (aiEditToggle) {
  aiEditToggle.classList.add("disabled");
  aiEditToggle.addEventListener("click", toggleAiEditPrompt);
}

const callAiService = async (payload: any) => {
  // Use relative path which Vite proxies to server
  const response = await fetch(`/api/ai`, {
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

export const applyAiEdit = async () => {
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
  } catch (error: any) {
    console.error("AI edit error:", error);
    alert("Failed to apply AI edit: " + error.message);
  } finally {
    if (aiSelectionToolbar) {
      aiSelectionToolbar.classList.remove("loading");
    }
  }
};

export const generateAiSummary = async () => {
  // Check if title is already locked for this note
  const currentNoteData = notes[activeNote.title];
  if (
    activeNote.lockedTitle ||
    (currentNoteData && currentNoteData.lockedTitle)
  ) {
    return;
  }

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

    if (activeNote.isCollaborative && activeNote.noteId) {
      updateCollaborativeNoteTitle(activeNote.noteId, result.trim());
    } else {
      renameActiveNote(result.trim());
    }
  } catch (error) {
    console.error("AI summary error:", error);
  }
};

const renameActiveNote = (newTitle: string) => {
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
  renderSidebar(notes);
  renderNote(truncated);
};

if (textarea) {
  textarea.addEventListener("mouseup", handleSelectionChange);
  textarea.addEventListener("keyup", handleSelectionChange);

  // Debounced AI summary trigger (20 seconds after typing stops)
  let aiSummaryTimeout: any = null;

  textarea.addEventListener("input", () => {
    const currentNoteData = notes[activeNote.title];
    const isLocked =
      activeNote.lockedTitle ||
      (currentNoteData && currentNoteData.lockedTitle);

    // Clear existing timeout
    if (aiSummaryTimeout) {
      clearTimeout(aiSummaryTimeout);
    }

    // Set new timeout for AI summary (20 seconds)
    if (!isLocked && textarea.value.trim().length > 10) {
      aiSummaryTimeout = setTimeout(() => {
        generateAiSummary();
      }, 20000); // 20 seconds
    }
  });
}

// Export globals for HTML
(window as any).applyAiEdit = applyAiEdit;
(window as any).hideAiToolbar = hideAiToolbar;
(window as any).generateAiSummary = generateAiSummary;
(window as any).createNewCollaborativeNote = createNewCollaborativeNoteUI;
(window as any).shareCurrentNote = shareCurrentNote;

// Attach event listeners after functions are defined
if (newCollabBtn) {
  newCollabBtn.addEventListener("click", createNewCollaborativeNoteUI);
}
