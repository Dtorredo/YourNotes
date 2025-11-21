![YourNote](https://github.com/siddharthkp/notella/blob/master/art/banner.png?raw=true?raw=true)

### YourNote – simple notes with real-time collabs

YourNote is a lightly customised notes app, focused on **collaborative notes ("collabs")**, offline-first sync, and a few AI helpers on top.

<p align="center"><a href="https://siddharthkp.github.io/notella">siddharthkp.github.io/notella (original Notella project)</a></p>

![screenshot](https://github.com/siddharthkp/notella/blob/master/art/screen.png?raw=true?raw=true)

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

built with [firebase](https://firebase.google.com) and [Y.js](https://github.com/yjs/yjs)

### 🚀 Quick Start

```bash
npm install
npm run dev   # runs UI + AI helper server
```

Open `http://localhost:7713` in your browser (UI) and `http://localhost:4000` hosts the Gemini helper API.

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

### Like it?

:star: this repo

### Found a bug?

Raise an issue!

### License

MIT © [siddharthkp](https://github.com/siddharthkp)
