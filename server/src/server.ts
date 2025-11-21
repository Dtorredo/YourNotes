import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";

dotenv.config();

const app = express();
// Use 4000 by default to match Vite proxy and frontend WebSocket URL.
const PORT = process.env.PORT || 4000;
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn(
    "⚠️  GEMINI_API_KEY is not set. AI endpoints will return errors until you configure it."
  );
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

app.use(cors());
app.use(express.json());

// Serve static files from the built client
const clientDistPath = path.join(__dirname, "../../dist/client");
app.use(express.static(clientDistPath));

const buildEditPrompt = (
  selection: string,
  instructions: string,
  context: string
) => {
  return `
You are an assistant that rewrites text selections exactly as requested.
Keep the output concise and return only the rewritten text with no explanations.

Instructions: ${instructions}

Full note context:
${context}

Selected text to transform:
${selection}
`;
};

const buildSummaryPrompt = (content: string) => {
  return `
Read the following note content and return a VERY short summary (MAXIMUM 4-5 words).
This summary will be used as a sidebar title, so it must be concise.
Do not use quotes or punctuation.
Examples: "Meeting with team", "Grocery list", "Project Alpha Plan".

Content:
${content}
`;
};

app.post("/api/ai", async (req: Request, res: Response): Promise<any> => {
  if (!genAI) {
    return res.status(500).send("GEMINI_API_KEY is missing on the server.");
  }

  try {
    const { type, content = "", selection = "", prompt = "" } = req.body || {};
    if (!type) {
      return res.status(400).json({ error: "Request type is required." });
    }

    // Debugging: Log the key (masked) and model
    console.log(
      "Using API Key:",
      apiKey ? apiKey.substring(0, 8) + "..." : "NONE"
    );
    console.log("Using Model: gemini-2.5-flash-lite");

    // Use Gemini 2.5 Flash Lite (User Requested)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    let aiPrompt = "";

    if (type === "edit") {
      if (!selection) {
        return res
          .status(400)
          .json({ error: "Selection text is required for edits." });
      }
      aiPrompt = buildEditPrompt(
        selection,
        prompt || "Improve clarity.",
        content
      );
    } else if (type === "summary") {
      if (!content) {
        return res
          .status(400)
          .json({ error: "Content is required for summaries." });
      }
      aiPrompt = buildSummaryPrompt(content);
    } else {
      return res.status(400).json({ error: "Unknown AI request type." });
    }

    const result = await model.generateContent(aiPrompt);
    const text = result?.response?.text()?.trim();

    if (!text) {
      return res.status(500).json({ error: "AI response was empty." });
    }

    res.json({ result: text });
  } catch (error: any) {
    console.error("AI service error:", error);
    res.status(500).json({ error: error.message || "AI request failed." });
  }
});

// Catch-all route to serve index.html for client-side routing
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

// HTTP server shared by Express and WebSocket
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Room management
const rooms = new Map<string, Set<WebSocket>>();

wss.on("connection", (ws: WebSocket, req: http.IncomingMessage) => {
  // Extract noteId from URL parameters
  // Expected URL: ws://localhost:4000/noteId
  // or ws://localhost:4000?note=noteId
  const url = new URL(req.url || "", `http://${req.headers.host}`);
  const noteId = url.searchParams.get("note") || url.pathname.replace("/", "");

  if (!noteId) {
    ws.close();
    return;
  }

  console.log(`Client connected to room: ${noteId}`);

  if (!rooms.has(noteId)) {
    rooms.set(noteId, new Set());
  }
  rooms.get(noteId)?.add(ws);

  ws.on("message", (data: any) => {
    // Broadcast to all other clients in the SAME room
    const room = rooms.get(noteId);
    if (room) {
      for (const client of room) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      }
    }
  });

  ws.on("close", () => {
    const room = rooms.get(noteId);
    if (room) {
      room.delete(ws);
      if (room.size === 0) {
        rooms.delete(noteId);
      }
    }
    console.log(`Client disconnected from room: ${noteId}`);
  });
});

server.listen(PORT, () => {
  console.log(`AI helper + collab WS running on http://localhost:${PORT}`);
});
