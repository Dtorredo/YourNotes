# Notella

A modern, minimalist note-taking app with AI-powered features and real-time collaboration.

🔗 **Live Demo**: [https://notella.fly.dev/](https://notella.fly.dev/)

## Features

### ✨ Core Features

- **Smart Note Titles**: Automatically generates concise 4-5 word titles from your content using AI
- **Instant Notes**: First 4 words appear in sidebar immediately while typing
- **Auto-Save**: Notes sync to Firebase in real-time
- **AI-Powered Editing**: Select text and use AI to rewrite, improve, or transform it
- **Dark Mode**: Toggle between light and dark themes
- **Google Sign-In**: Secure authentication via Firebase

### 🎨 UI/UX

- Clean, distraction-free interface
- Premium color scheme with warm background (`#F1F3E0`)
- Responsive sidebar with note organization
- Custom login/logout icons
- Smooth animations and micro-interactions

### 🤖 AI Features

- **Auto-Titling**: AI generates smart titles after 20 seconds of inactivity
- **Text Editing**: Select any text and describe how you want it changed
- **Context-Aware**: AI considers the full note context when making edits

### 🔄 Collaborative Notes (Beta)

- Real-time collaborative editing powered by Y.js
- WebSocket-based synchronization
- Shareable links for collaboration
- _Note: Currently requires authentication and is being refined_

## Tech Stack

### Frontend

- **Framework**: Vanilla TypeScript + Vite
- **Styling**: CSS (no frameworks for maximum performance)
- **State**: Custom store with localStorage + Firebase sync
- **Real-time**: Y.js + y-websocket for collaboration

### Backend

- **Server**: Express.js (Node.js)
- **API**: Google Gemini AI (gemini-2.5-flash-lite)
- **Database**: Firebase Realtime Database
- **Auth**: Firebase Authentication
- **WebSockets**: ws library for real-time sync

### Deployment

- **Platform**: Fly.io
- **Container**: Docker (multi-stage build)
- **CI/CD**: Manual deployment via Fly CLI

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase project
- Google Gemini API key

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd notella
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file:

   ```
   GEMINI_API_KEY=your_gemini_api_key
   PORT=4000
   ```

4. **Configure Firebase**
   Update `client/src/firebase.ts` with your Firebase config.

5. **Run development server**

   ```bash
   npm run dev
   ```

   This runs both the client (Vite on port 5173) and server (Express on port 4000).

6. **Open in browser**
   Navigate to `http://localhost:5173`

### Production Build

```bash
npm run build
npm start
```

## Deployment

The app is deployed on Fly.io. See [Fly.io Deployment Guide](/.gemini/antigravity/brain/edb05c12-36aa-4bd8-b25f-b89ac129b84a/flyio_deployment_guide.md) for detailed instructions.

### Quick Deploy

```bash
flyctl deploy
```

## Project Structure

```
notella/
├── client/              # Frontend code
│   ├── src/
│   │   ├── main.ts     # Entry point
│   │   ├── ui.ts       # UI rendering & event handlers
│   │   ├── store.ts    # State management & Firebase
│   │   ├── firebase.ts # Firebase configuration
│   │   ├── collaboration.ts # Y.js collaborative editing
│   │   └── style.css   # Styles
│   └── index.html
├── server/             # Backend code
│   └── src/
│       └── server.ts   # Express server + WebSocket + AI
├── dist/               # Build output
├── Dockerfile          # Production container
├── fly.toml           # Fly.io configuration
└── package.json
```

## Scripts

- `npm run dev` - Start development servers (client + server)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run client:dev` - Client only (Vite)
- `npm run server:dev` - Server only (ts-node)
- `npm run client:build` - Build client
- `npm run server:build` - Build server

## Architecture Highlights

### Note Persistence Flow

1. User types → First 4 words show immediately in sidebar
2. After 20s of inactivity → AI generates smart title
3. All changes auto-save to localStorage (user-scoped)
4. Syncs to Firebase for cross-device access
5. Merge logic prevents data loss on refresh

### AI Integration

- Server-side API endpoints for security
- Gemini AI processes text transformations
- Prompt engineering for concise summaries and edits
- Error handling with graceful degradation

### User Data Isolation

- localStorage keys include user UID: `notes_${userID}`
- Each user's notes completely isolated
- Firebase rules enforce read/write permissions

## Known Issues & Roadmap

### Current Limitations

- Collaborative notes require authentication (being refined)
- Y.js WebSocket not fully tested in production
- No offline mode yet (planned)

### Planned Features

- [ ] Public collaborative notes (no auth required)
- [ ] Rich text formatting
- [ ] Note folders/tags
- [ ] Search functionality
- [ ] Export notes (Markdown/PDF)
- [ ] Mobile app (React Native/PWA)

## Contributing

This is a personal project, but suggestions and feedback are welcome! Open an issue or reach out.

## License

MIT License - feel free to use this code for your own projects!

## Acknowledgments

- Built with ❤️ using modern web technologies
- AI powered by Google Gemini
- Deployed on Fly.io
- Firebase for backend services
