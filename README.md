### YourNote – simple notes with real-time collabs

YourNote is a lightly customised notes app, focused on **collaborative notes ("collabs")**, offline-first sync, and a few AI helpers on top.

### Features

- clean design
- progressive web app (PWA)
- sync between devices
- offline support
- add to home screen
- night mode 🌚
- **✨ NEW: Real-time collaborative editing**
- **✨ NEW: CRDT-based conflict resolution**
- **✨ NEW: Presence indicators**
- **✨ NEW: Share links for collaboration**

built with [Firebase](https://firebase.google.com) (auth + legacy notes)
and a small Node/WebSocket backend for real-time “collabs”.

### 🚀 Quick Start

```bash
npm install
npm run dev   # runs UI + AI helper server
```

Open `http://localhost:3001` in your browser (UI) and `http://localhost:4000` hosts the Gemini + collab WebSocket backend.

### 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 3 steps
- **[COLLABORATION.md](COLLABORATION.md)** - Technical details on collaborative editing
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Complete implementation overview

### 🎯 How to Collaborate

1. Click **"➕ New Collaborative Note"** in the sidebar
2. Start typing
3. Click **"🔗 Share"** to get a shareable link
4. Send the link to collaborators
5. Edit together in real-time!

### 🧠 AI Helpers (Gemini)

1. Duplicate `env.example` to `.env` and add your `GEMINI_API_KEY`
2. Run `npm run dev` (or `npm run server` in another terminal if you prefer separate processes)
3. Highlight text inside a note to reveal the **AI Edit** toolbar
4. Use **✨ Auto Title** in the sidebar to generate smart titles for legacy notes
