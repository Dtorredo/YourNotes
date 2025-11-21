"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const ws_1 = __importStar(require("ws"));
const generative_ai_1 = require("@google/generative-ai");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Use 4000 by default to match Vite proxy and frontend WebSocket URL.
const PORT = process.env.PORT || 4000;
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.warn("⚠️  GEMINI_API_KEY is not set. AI endpoints will return errors until you configure it.");
}
const genAI = apiKey ? new generative_ai_1.GoogleGenerativeAI(apiKey) : null;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const buildEditPrompt = (selection, instructions, context) => {
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
const buildSummaryPrompt = (content) => {
    return `
Read the following note content and return a VERY short summary (MAXIMUM 4-5 words).
This summary will be used as a sidebar title, so it must be concise.
Do not use quotes or punctuation.
Examples: "Meeting with team", "Grocery list", "Project Alpha Plan".

Content:
${content}
`;
};
app.post("/api/ai", async (req, res) => {
    if (!genAI) {
        return res.status(500).send("GEMINI_API_KEY is missing on the server.");
    }
    try {
        const { type, content = "", selection = "", prompt = "" } = req.body || {};
        if (!type) {
            return res.status(400).json({ error: "Request type is required." });
        }
        // Debugging: Log the key (masked) and model
        console.log("Using API Key:", apiKey ? apiKey.substring(0, 8) + "..." : "NONE");
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
            aiPrompt = buildEditPrompt(selection, prompt || "Improve clarity.", content);
        }
        else if (type === "summary") {
            if (!content) {
                return res
                    .status(400)
                    .json({ error: "Content is required for summaries." });
            }
            aiPrompt = buildSummaryPrompt(content);
        }
        else {
            return res.status(400).json({ error: "Unknown AI request type." });
        }
        const result = await model.generateContent(aiPrompt);
        const text = result?.response?.text()?.trim();
        if (!text) {
            return res.status(500).json({ error: "AI response was empty." });
        }
        res.json({ result: text });
    }
    catch (error) {
        console.error("AI service error:", error);
        res.status(500).json({ error: error.message || "AI request failed." });
    }
});
// HTTP server shared by Express and WebSocket
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
// Simple broadcast relay: any collab update from one client goes to all others.
wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        for (const client of wss.clients) {
            if (client !== ws && client.readyState === ws_1.default.OPEN) {
                // Ensure data is sent as string, not Buffer
                client.send(data.toString());
            }
        }
    });
});
server.listen(PORT, () => {
    console.log(`AI helper + collab WS running on http://localhost:${PORT}`);
});
