# Firebase Setup Steps for YourNote

This guide walks you through configuring Firebase to enable all features in YourNote, including Google authentication and collaborative note editing.

## Prerequisites

- A Firebase account (sign up at https://firebase.google.com)
- Your Firebase project already created (`notes-uno`)
- Your Firebase config already added to `store.js`

## Step 1: Enable Google Sign-In

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **notes-uno**
3. Navigate to **Build** → **Authentication**
4. Click **Get started** (if first time) or go to **Sign-in method** tab
5. Click on **Google** provider
6. Toggle **Enable** to ON
7. Enter a **Project support email** (your email)
8. Click **Save**

### Add Authorized Domains

1. Still in Authentication, click the **Settings** tab
2. Scroll to **Authorized domains**
3. Make sure these domains are listed:
   - `localhost` (for development)
   - `notes-uno.firebaseapp.com` (your Firebase hosting domain)
   - Add your production domain when you deploy

## Step 2: Create Realtime Database

1. In Firebase Console, go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose a **location** (select closest to your users)
4. Choose **Start in test mode** (we'll add security rules next)
5. Click **Done**

### Get Your Database URL

1. After creating, you'll see your database URL
2. It should look like: `https://notes-uno-default-rtdb.firebaseio.com`
3. Verify this matches the `databaseURL` in your `store.js` file:
   ```javascript
   databaseURL: "https://notes-uno-default-rtdb.firebaseio.com";
   ```
4. If it's different, update `store.js` with the correct URL

## Step 3: Configure Security Rules

1. In **Realtime Database**, click the **Rules** tab
2. Replace the default rules with:

```json
{
  "rules": {
    "$uid": {
      ".read": "auth != null && auth.uid === $uid",
      ".write": "auth != null && auth.uid === $uid"
    },
    "collaborative-notes": {
      ".read": "auth != null",
      ".write": "auth != null",
      "$noteId": {
        "metadata": {
          ".validate": "newData.hasChildren(['title', 'modified']) || newData.hasChildren(['created', 'createdBy', 'title', 'collaborators'])"
        },
        "updates": {
          ".validate": "newData.hasChildren(['data', 'timestamp', 'userId'])"
        },
        "awareness": {
          "$userId": {
            ".validate": "newData.hasChildren(['user', 'lastSeen']) || newData.hasChildren(['cursor', 'lastSeen'])"
          }
        }
      }
    }
  }
}
```

3. Click **Publish**

### What These Rules Do

- **`$uid`**: Each user can only read/write their own notes (legacy notes)
- **`collaborative-notes`**: Authenticated users can read/write collaborative notes
- **`metadata`**: Validates note metadata structure
- **`updates`**: Validates Y.js CRDT update structure
- **`awareness`**: Validates presence/awareness data structure

## Step 4: Verify Configuration

### Check Your Config in `store.js`

Make sure your Firebase config includes all required fields:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBV-GHwBk1Bibx9xolT7IdvsQ8mjgO-fkU",
  authDomain: "notes-uno.firebaseapp.com",
  databaseURL: "https://notes-uno-default-rtdb.firebaseio.com", // ← Verify this!
  projectId: "notes-uno",
  storageBucket: "notes-uno.firebasestorage.app",
  messagingSenderId: "1025777646528",
  appId: "1:1025777646528:web:2f6bc79f92a5ca04256625",
  measurementId: "G-G17GF41EWB",
};
```

### Test the Setup

1. Start your app: `npm start`
2. Open `http://localhost:7713`
3. You should see a Google Sign-In popup
4. After signing in, you should be able to:
   - Create new collaborative notes
   - See your notes in the sidebar
   - Share notes with others

## Step 5: Optional - Enable Analytics

Analytics is already configured in your code. To view analytics:

1. Go to **Analytics** in Firebase Console
2. Wait 24-48 hours for data to appear
3. View user engagement, events, etc.

## Troubleshooting

### "Google auth error: popup-closed-by-user"

- User closed the popup - this is normal, just try again
- Make sure popup blockers aren't blocking the sign-in

### "Permission denied" errors

- Check that Realtime Database rules are published
- Verify you're signed in (check browser console for auth state)
- Make sure `databaseURL` matches your actual database URL

### "Database not found" errors

- Verify the database was created in Firebase Console
- Check that `databaseURL` in `store.js` matches exactly
- Make sure you're using Realtime Database, not Firestore

### Notes not syncing

- Check browser console for errors
- Verify you're authenticated (should see user object in console)
- Check Firebase Console → Realtime Database → Data tab to see if data is being written

### Service Worker Cache Issues

- Clear browser cache and service workers (see earlier in conversation)
- Use incognito mode to test fresh
- The service worker is disabled on localhost now, so new sessions should work

## What's Configured

✅ **Firebase Authentication** - Google Sign-In enabled  
✅ **Realtime Database** - Created and configured  
✅ **Security Rules** - Users can access their own notes + collaborative notes  
✅ **Authorized Domains** - localhost added for development

## Next Steps

Once everything is working:

1. **Test collaborative editing**: Open the same note in two browser windows
2. **Test sharing**: Create a note, click Share, open the link in another browser
3. **Test offline**: Disconnect internet, make changes, reconnect - changes should sync
4. **Deploy**: When ready, add your production domain to authorized domains

## How Collaborative Notes Work

### The Sharing Mechanism

Collaborative notes work through **URL-based sharing** with a unique note ID. Here's how it works:

#### Step 1: Creating a Note

1. You click "➕ New Collaborative Note"
2. The app generates a unique ID like: `note_1704123456789_abc123xyz`
3. This note is stored in Firebase at: `collaborative-notes/note_1704123456789_abc123xyz/`
4. The note appears in your sidebar

#### Step 2: Sharing the Note

1. You click the "🔗 Share" button
2. The app generates a shareable link like:
   ```
   http://localhost:7713?note=note_1704123456789_abc123xyz
   ```
3. This link is copied to your clipboard
4. You send this link to someone else (via email, chat, etc.)

#### Step 3: Someone Opens the Link

1. Person B opens the link in their browser
2. The app detects the `?note=` parameter in the URL
3. It extracts the note ID: `note_1704123456789_abc123xyz`
4. It loads that specific note from Firebase using that ID
5. Both you and Person B are now viewing/editing the **same note**

### How Both Users Access the Same Note

The key is the **noteId** - it's like a shared document ID:

```
Firebase Realtime Database Structure:
└── collaborative-notes/
    └── note_1704123456789_abc123xyz/  ← Both users access THIS path
        ├── metadata/
        │   ├── title: "My Shared Note"
        │   ├── collaborators: {...}
        │   └── created: 1704123456789
        ├── updates/  ← Y.js CRDT updates go here
        │   ├── update1: {data: [...], userId: "user1", timestamp: ...}
        │   ├── update2: {data: [...], userId: "user2", timestamp: ...}
        │   └── ...
        └── awareness/  ← Presence/online status
            ├── user1: {user: {...}, cursor: 42, lastSeen: ...}
            └── user2: {user: {...}, cursor: 15, lastSeen: ...}
```

### Real-Time Sync Flow

1. **You type something:**

   - Your typing creates a Y.js update
   - Update is sent to Firebase: `collaborative-notes/{noteId}/updates/`
   - Your local textarea updates immediately

2. **Person B sees your changes:**

   - Their app is listening to: `collaborative-notes/{noteId}/updates/`
   - When your update arrives, Y.js merges it automatically
   - Their textarea updates in real-time

3. **Person B types something:**
   - Same process in reverse
   - You see their changes appear automatically

### Visual Example

```
You (User A)                    Person B (User B)
     |                               |
     | Creates note                  |
     | noteId: "note_123"            |
     |                               |
     | Clicks "Share"                |
     | Gets link:                    |
     | ?note=note_123                |
     |                               |
     | Sends link ──────────────────>|
     |                               | Opens link
     |                               | ?note=note_123 detected
     |                               |
     | Both access:                  |
     | Firebase:                     |
     | collaborative-notes/note_123/ |
     |                               |
     | You type "Hello"              |
     | ─────────────────────────────>| Sees "Hello"
     |                               |
     |                               | Types " World"
     | Sees "Hello World" <──────────|
     |                               |
```

### Important Points

- **The noteId is the key**: It's what identifies which note both users are accessing
- **Firebase is the shared storage**: Both users read/write to the same Firebase path
- **Y.js handles conflicts**: If both users type at the same time, Y.js automatically merges the changes
- **No account needed for Person B**: They just need to sign in with Google (any Google account)
- **Works across devices**: Open the same link on your phone, tablet, etc.

### Testing Locally

To test collaboration on your own:

1. Create a collaborative note
2. Click "Share" and copy the link
3. Open the link in an **incognito/private window** (or different browser)
4. Sign in with a different Google account (or same account)
5. Type in one window - you'll see it appear in the other!

### Security Note

Currently, **anyone with the link can access the note** (as long as they're signed in with Google). The security rules allow any authenticated user to read/write collaborative notes. If you want to restrict access, you'd need to:

- Add permission checking in the metadata
- Modify the security rules to check collaborator lists
- Implement invite-only sharing

## Support

If you encounter issues:

- Check browser console for errors
- Check Firebase Console → Realtime Database → Data to see if writes are happening
- Verify all steps above are completed
- Make sure `databaseURL` in `store.js` matches your actual database URL
