/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// In-Memory Database for demonstration of enterprise lead persistence
interface LeadInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  category: string;
  text: string;
  budget?: string;
  timestamp: string;
  status: 'Received' | 'Routing' | 'Assigned' | 'Contacted';
  assignedDept: string;
}

const leadInquiries: LeadInquiry[] = [
  {
    id: "lead-1",
    name: "Alex Thorne",
    email: "alex@sterlingwatches.com",
    company: "Sterling Luxury",
    category: "Technology",
    text: "Requesting executive architecture scoping for our international booking portal.",
    budget: "$50,000 - $100,000",
    timestamp: new Date().toISOString(),
    status: "Assigned",
    assignedDept: "Sikeisen Technology Unit"
  }
];

// Lazy Gemini API Client Initializer
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not defined. Please verify your Secrets menu.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// REST Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Retrieve inquiries (demonstrates lead tracking & investor board metrics)
app.get('/api/leads', (req, res) => {
  res.json({ success: true, count: leadInquiries.length, leads: leadInquiries });
});

// File high-converting lead
app.post('/api/inquire', (req, res) => {
  try {
    const { name, email, company, category, text, budget } = req.body;
    
    if (!name || !email || !category || !text) {
      res.status(400).json({ success: false, error: "Missing required fields: name, email, category, text" });
      return;
    }

    // Determine smart routing department
    let assignedDept = "General Operations";
    switch (category.toLowerCase()) {
      case 'production':
        assignedDept = "Sikeisen Pictures Studio (Director Yukinari Sase)";
        break;
      case 'technology':
        assignedDept = "Sikeisen Technology Division (Amara Kulkarni)";
        break;
      case 'publishing':
        assignedDept = "Sikeisen Global Publishing Unit";
        break;
      case 'careers':
        assignedDept = "Corporate Human Capital Group";
        break;
      case 'investors':
        assignedDept = "Investor Relations & Global Finance Committee";
        break;
      default:
        assignedDept = "Sikeisen Executive Counsel Service";
    }

    const newInquiry: LeadInquiry = {
      id: `lead-${Date.now()}`,
      name,
      email,
      company: company || "Independent Professional",
      category,
      text,
      budget: budget || "Not Disclosed",
      timestamp: new Date().toISOString(),
      status: "Received",
      assignedDept
    };

    leadInquiries.push(newInquiry);

    res.json({
      success: true,
      message: `Lead filed successfully under category: ${category}.`,
      assignedDept,
      inquiry: newInquiry
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Intelligent AI Chat Assistant Support Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ success: false, error: "Input must contain a valid messages array." });
      return;
    }

    // Capture the last message
    const lastUserMessage = messages[messages.length - 1]?.text;
    if (!lastUserMessage) {
      res.status(400).json({ success: false, error: "The last chat message cannot be empty." });
      return;
    }

    // Reconstruct prompt with previous context summary
    const conversationHistory = messages.slice(-6).map((msg: any) => {
      return `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`;
    }).join('\n');

    const prompt = `You are the automated chief relations counsel and strategic representative of Sikeisen Group Pvt. Ltd.
Your tone is high-end, premium, analytical, creative, welcoming, and deeply professional (comparable to strategic advisors at A24 or Netflix).

COMPANY STATS:
- Name: Sikeisen Group Pvt. Ltd. (Tagline: "Turning Imagination Into Reality")
- Core Verticals: Sikeisen Pictures (Cinematic features, short films, documentaries), Sikeisen Tech (Software, custom LLM solutions, databases), Additive Labs (3D Printing, rapid prototypes), Digital Publishing (EPUB, worldwide distribution, authors platform).
- Founder & Global Chief Creative Officer: Yukinari Sase (award-winning director).
- Head of Tech: Amara Kulkarni (IISc Cloud architect).
- Head of Additive Crafting: Hiroshi Vance (polymer additive expert).

OBJECTIVES:
- Assist the clients with enterprise inquiries.
- Direct talent opportunities to our Careers Board.
- Pitch our premium production pipelines or 3D printing capabilities.
- Answer user queries politely, matching their query exactly with Sikeisen capabilities.
- Encourage users to fill out the "Start Project" contact form.

RULES:
- Respond in well-structured, beautiful, clear markdown representation. Use lists and bold key phrases.
- Keep your description refined, concise, and focused on solutions.
- Never mention internal server architectures or AI API system credentials.

CONVERSATION LOG:
${conversationHistory}

Assistant:`;

    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text || "Thank you for reaching out. I'm processing your inquiry. How may I best assist you with Sikeisen Group's digital, cinematic, and engineering solutions?"
    });
  } catch (error: any) {
    console.error("Gemini Assistant Error: ", error);
    res.status(500).json({
      success: false,
      error: error.message || "An internal client routing error occurred.",
      reply: "Sikeisen's digital services are currently optimizing. Please proceed to use our general inquiry system directly or drop an email to executive@sikeisen.com."
    });
  }
});

// Configure Vite integration
async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Sikeisen Server] Enterprise core active on http://0.0.0.0:${PORT}`);
  });
}

main().catch(err => {
  console.error("Server startup aborted: ", err);
});
