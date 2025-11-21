# Collaborative Editing in YourNote

## 🎉 New Features

YourNote now supports **real-time collaborative editing** using CRDT (Conflict-free Replicated Data Types) technology!

### What's New

- ✅ **Real-time collaboration** - Multiple users can edit the same note simultaneously
- ✅ **Automatic conflict resolution** - No more "last write wins" - all edits are preserved
- ✅ **Offline support** - Continue editing offline, changes sync when back online
- ✅ **Presence indicators** - See who else is viewing/editing the note
- ✅ **Share links** - Easy sharing with a single click
- ✅ **Backward compatible** - Your existing notes still work!

## 🚀 How to Use

### Creating a Collaborative Note

1. Click the **"➕ New Collaborative Note"** button in the sidebar
2. Start typing - your changes are automatically synced
3. Click **"🔗 Share"** to get a shareable link
4. Send the link to collaborators

### Sharing an Existing Note

1. Select any collaborative note (marked with 👥)
2. Click the **"🔗 Share"** button in the top-right
3. The link is copied to your clipboard
4. Share it with anyone who has access to the app

### Migrating Legacy Notes

If you have existing notes, you can convert them to collaborative:

1. Wait for the **"🔄 Migrate X Note(s)"** button to appear in the sidebar
2. Click it to migrate all your notes at once
3. Original notes are preserved during migration
4. You can delete legacy notes after confirming migration success

## 🔧 Technical Details

### Architecture

- **CRDT Library**: Y.js v13.6.1
- **Persistence**: IndexedDB (local) + Firebase Realtime Database (sync)
- **Conflict Resolution**: Automatic via Y.js CRDT algorithm
- **Data Structure**: UUID-based notes with metadata

### How It Works

1. **Y.js Document**: Each collaborative note is a Y.js CRDT document
2. **Local-first**: Changes are saved locally first (IndexedDB)
3. **Firebase Sync**: Updates are broadcast to all collaborators via Firebase
4. **Automatic Merge**: Y.js automatically merges concurrent edits

### Data Structure

```javascript
collaborative-notes/
  {noteId}/
    metadata/
      title: "Note Title"
      created: timestamp
      modified: timestamp
      collaborators:
        {userId}:
          name: "User Name"
          permission: "write"
          color: "#FF6B6B"
    updates/
      {updateId}:
        data: [Uint8Array]
        timestamp: timestamp
        userId: "user123"
    awareness/
      {userId}:
        user: {...}
        cursor: position
        lastSeen: timestamp
```

## 🎨 UI Elements

### Sidebar

- **Legacy notes**: Plain text (original notes)
- **Collaborative notes**: Marked with 👥 icon and colored text
- **New Collaborative Note**: Button to create new collaborative notes
- **Migrate Notes**: Button to convert legacy notes (appears when applicable)

### Top Bar

- **Collaborators**: Circular avatars showing active users
- **Share Button**: Visible only when viewing a collaborative note

## 🔐 Permissions & Security

### Current Implementation

- All authenticated users can create collaborative notes
- Anyone with the link can access the note (if authenticated)
- All collaborators have write access by default

### Future Enhancements

- Read-only sharing
- Invite-only notes
- Permission management UI
- Email-based invitations

## 🐛 Troubleshooting

### "User not authenticated" error

- Wait a few seconds for Twitter authentication to complete
- Refresh the page if authentication seems stuck

### Changes not syncing

- Check your internet connection
- Open browser console (F12) and look for errors
- Verify Firebase is accessible (not blocked by firewall)

### Collaborators not showing

- Presence updates every 2 seconds
- Users are shown as "active" for 10 seconds after last activity
- Refresh the page if presence seems stuck

### Migration issues

- Make sure you're authenticated before migrating
- Check browser console for specific error messages
- Original notes are never deleted during migration

## 📊 Performance

- **Y.js overhead**: ~20KB gzipped
- **IndexedDB**: Unlimited local storage
- **Firebase**: Real-time updates with minimal latency
- **Offline**: Full functionality, syncs when reconnected

## 🔄 Backward Compatibility

- **Legacy notes** continue to work as before
- **No breaking changes** to existing functionality
- **Optional migration** - use collaborative features when ready
- **Side-by-side** - legacy and collaborative notes coexist

## 🛠️ Development

### Files Added

- `collaboration.js` - Y.js integration and presence
- `migrate.js` - Migration utilities
- Updated `store.js` - Collaborative note management
- Updated `interface.js` - UI for collaborative features
- Updated `style.css` - Collaboration UI styles
- Updated `index.html` - New UI elements and scripts

### Dependencies

- Y.js: CRDT library
- y-indexeddb: Local persistence
- Firebase: Real-time sync (existing)

## 📝 License

Same as the original Notella project - MIT © [siddharthkp](https://github.com/siddharthkp)
