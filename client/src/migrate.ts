/* Migration utility for converting legacy notes to collaborative format */

// Migrate a single legacy note to collaborative
const migrateLegacyNoteToCollaborative = async (legacyTitle) => {
  if (!currentUser) {
    console.error("User must be authenticated to migrate notes");
    return null;
  }

  const legacyNote = notes[legacyTitle];
  if (!legacyNote) {
    console.error(`Note "${legacyTitle}" not found`);
    return null;
  }

  console.log(`Migrating note: ${legacyTitle}`);

  // Create new collaborative note with same content
  const noteId = await createCollaborativeNote(textarea, legacyNote.content);

  // Update metadata with original title
  const noteRef = firebase
    .database()
    .ref(`collaborative-notes/${noteId}/metadata`);
  await noteRef.update({
    title: legacyTitle,
    migratedFrom: "legacy",
    migratedAt: Date.now(),
    originalModified: legacyNote.modified,
  });

  console.log(`✓ Migrated "${legacyTitle}" to collaborative note ${noteId}`);

  return noteId;
};

// Migrate all legacy notes to collaborative
const migrateAllLegacyNotes = async () => {
  if (!currentUser) {
    alert("Please wait for authentication to complete");
    return;
  }

  const legacyTitles = Object.keys(notes).filter(
    (title) => title !== "_new note"
  );

  if (legacyTitles.length === 0) {
    alert("No legacy notes to migrate");
    return;
  }

  const confirmed = confirm(
    `This will migrate ${legacyTitles.length} legacy note(s) to collaborative format.\n\nOriginal notes will be preserved.\n\nContinue?`
  );

  if (!confirmed) return;

  console.log(`Starting migration of ${legacyTitles.length} notes...`);

  const results = {
    success: [],
    failed: [],
  };

  for (const title of legacyTitles) {
    try {
      const noteId = await migrateLegacyNoteToCollaborative(title);
      if (noteId) {
        results.success.push({ title, noteId });
      } else {
        results.failed.push({ title, error: "Migration returned null" });
      }
    } catch (error) {
      console.error(`Failed to migrate "${title}":`, error);
      results.failed.push({ title, error: error.message });
    }
  }

  console.log("Migration complete:", results);

  // Reload collaborative notes
  const collabNotes = await getCollaborativeNotes();
  renderSidebar(notes, collabNotes);

  alert(
    `Migration complete!\n\n✓ Success: ${results.success.length}\n✗ Failed: ${results.failed.length}\n\nOriginal notes have been preserved.`
  );

  return results;
};

// Delete legacy notes after successful migration (optional)
const deleteLegacyNotesAfterMigration = (migrationResults) => {
  if (!migrationResults || !migrationResults.success) {
    console.error("Invalid migration results");
    return;
  }

  const confirmed = confirm(
    `This will DELETE ${migrationResults.success.length} legacy note(s).\n\nThis action cannot be undone!\n\nContinue?`
  );

  if (!confirmed) return;

  migrationResults.success.forEach(({ title }) => {
    delete notes[title];
    console.log(`Deleted legacy note: ${title}`);
  });

  saveNotes();
  alert(`Deleted ${migrationResults.success.length} legacy notes`);
};

// Export migration status
const getMigrationStatus = () => {
  const legacyCount = Object.keys(notes).filter(
    (title) => title !== "_new note"
  ).length;

  return {
    hasLegacyNotes: legacyCount > 0,
    legacyCount: legacyCount,
    authenticated: !!currentUser,
  };
};

// Add migration button to UI (call this after DOM is loaded)
const addMigrationButton = () => {
  const status = getMigrationStatus();

  // Only show if there are actual notes with content (not just the default empty note)
  const hasRealNotes = Object.keys(notes).some(title => {
    if (title === "_new note") return false;
    const note = notes[title];
    return note && note.content && note.content.trim().length > 0;
  });

  if (status.hasLegacyNotes && status.authenticated && hasRealNotes) {
    // Check if button already exists
    if (document.getElementById("migrate-btn")) {
      return; // Already added
    }

    const sidebar = document.getElementsByTagName("sidebar")[0];
    const migrateBtn = document.createElement("button");
    migrateBtn.id = "migrate-btn";
    migrateBtn.textContent = `🔄 Migrate ${status.legacyCount} Note(s)`;
    migrateBtn.style.cssText = `
            background-color: #FFA07A;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 10px;
            width: 100%;
            box-sizing: border-box;
            white-space: normal;
            word-break: break-word;
            text-align: center;
        `;
    migrateBtn.onclick = migrateAllLegacyNotes;
    
    sidebar.appendChild(migrateBtn);
  }
};

// Auto-add migration button when page loads
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    setTimeout(addMigrationButton, 2000); // Wait for auth
  });
}

