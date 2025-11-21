import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn(
    "⚠️  GEMINI_API_KEY is not set. AI endpoints will return errors until you configure it."
  );
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

app.use(cors());
app.use(express.json());

const buildEditPrompt = (selection: string, instructions: string, context: string) => {
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
Read the following note content and return a concise, human-friendly title (max 60 characters).
Do not add quotes or punctuation at the ends. Title-case the result if appropriate.

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

    // Use Gemini 2.5 Flash model (latest recommended fast model)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
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

// HTTP server shared by Express and WebSocket
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Simple broadcast relay: any collab update from one client goes to all others.
wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (data: any) => {
    for (const client of wss.clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`AI helper + collab WS running on http://localhost:${PORT}`);
});
