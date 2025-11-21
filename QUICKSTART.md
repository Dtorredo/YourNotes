# Quick Start Guide - Collaborative YourNote

## 🚀 Getting Started in 3 Steps

### Step 1: Start the App

```bash
npm start
```

The app will run on `http://localhost:7713`

### Step 2: Authenticate

- Open the app in your browser
- You'll be redirected to Twitter for authentication
- After authentication, you'll return to the app

### Step 3: Create Your First Collaborative Note

1. Click **"➕ New Collaborative Note"** in the sidebar
2. Start typing
3. Click **"🔗 Share"** to get a shareable link
4. Open the link in another browser/device to see real-time collaboration!

## 🧪 Testing Collaboration

### Test with Multiple Browser Windows

1. Create a collaborative note in Window 1
2. Copy the share link
3. Open the link in Window 2 (or incognito mode)
4. Type in both windows simultaneously
5. Watch the magic happen! ✨

### Test Offline Sync

1. Create a collaborative note
2. Disconnect from internet (or use DevTools offline mode)
3. Continue typing
4. Reconnect to internet
5. Changes sync automatically!

## 📱 Features to Try

### ✅ Real-time Editing

- Open same note in 2+ windows
- Type simultaneously
- See changes appear instantly

### ✅ Presence Indicators

- Colored avatars show active collaborators
- Hover to see names
- Updates every 2 seconds

### ✅ Share Links

- Click "🔗 Share" button
- Link copied to clipboard
- Share with anyone

### ✅ Migration

- If you have existing notes, click "🔄 Migrate"
- Converts legacy notes to collaborative
- Original notes preserved

## 🎯 Use Cases

### Personal Use

- Sync notes across devices
- Access from phone, tablet, desktop
- Offline editing with auto-sync

### Team Collaboration

- Brainstorming sessions
- Meeting notes
- Shared documentation
- Project planning

### Education

- Collaborative note-taking
- Study groups
- Teacher-student collaboration

## 🔍 What to Look For

### Visual Indicators

- **👥 Icon**: Collaborative notes in sidebar
- **Colored text**: Collaborative notes are highlighted
- **Avatars**: Active collaborators (top-right)
- **Share button**: Visible when viewing collaborative note

### Behavior

- **No save delay**: Changes sync immediately
- **Conflict-free**: Multiple edits merge automatically
- **Offline-first**: Works without internet
- **Real-time**: See others typing live

## 🐛 Common Issues

### "Please wait for authentication"

**Solution**: Wait 2-3 seconds after page load for Twitter auth to complete

### Share button not showing

**Solution**: Make sure you're viewing a collaborative note (marked with 👥)

### Changes not syncing

**Solution**:

- Check internet connection
- Verify Firebase is accessible
- Check browser console for errors

### Collaborators not appearing

**Solution**:

- Both users must be authenticated
- Both must have the note open
- Wait 2-3 seconds for presence to sync

## 💡 Pro Tips

### Tip 1: Use Descriptive First Lines

The first line becomes the note title in the sidebar

```
# Meeting Notes - Jan 2024
Content here...
```

### Tip 2: Test Locally First

Open multiple browser windows to test collaboration before sharing

### Tip 3: Bookmark Share Links

Save frequently used collaborative notes as bookmarks

### Tip 4: Use Night Mode

Toggle with 🌚/☀️ button for comfortable editing

## 🔧 Developer Tips

### View Y.js State

Open browser console and type:

```javascript
// View current collaborative note
currentCollaborativeNote;

// View Y.js document
currentCollaborativeNote.yDoc;

// View content
currentCollaborativeNote.getContent();

// View collaborators
currentCollaborativeNote.collaborators;
```

### Debug Firebase

```javascript
// View database reference
database;

// View current user
currentUser;

// View all collaborative notes
getCollaborativeNotes().then(console.log);
```

### Monitor Updates

```javascript
// Listen to Y.js updates
currentCollaborativeNote.yDoc.on("update", (update) => {
  console.log("Update:", update);
});
```

## 📊 Performance Monitoring

### Check IndexedDB

1. Open DevTools (F12)
2. Go to Application tab
3. Click IndexedDB
4. Look for note databases

### Check Firebase

1. Open DevTools Network tab
2. Filter by "firebase"
3. Watch real-time updates

### Check Service Worker

1. Open DevTools Application tab
2. Click Service Workers
3. Verify "notes-v2" is active

## 🎓 Next Steps

1. ✅ Create your first collaborative note
2. ✅ Test with multiple windows
3. ✅ Share with a friend
4. ✅ Try offline editing
5. ✅ Migrate existing notes
6. ✅ Explore the codebase

## 📚 Learn More

- Read `COLLABORATION.md` for technical details
- Check `collaboration.js` for Y.js implementation
- Review `store.js` for Firebase integration
- Explore `interface.js` for UI logic

## 🤝 Contributing

Found a bug? Have an idea?

1. Open an issue on GitHub
2. Submit a pull request
3. Share your feedback

---

**Happy Collaborating! 🎉**
