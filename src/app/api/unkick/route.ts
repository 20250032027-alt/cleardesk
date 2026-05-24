import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = "AIzaSyD648DbvTQ827fd7sSXmZ_BrF2k_MlqrbY";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    const prompt = `You are helping someone with ADHD who is stuck on a task due to executive dysfunction and task paralysis.

Their stuck task: "${task}"

Break this into 5-7 extremely small, concrete, physical steps. Each step should take under 2 minutes. The first step must be so small their brain cannot argue with it.

Rules:
- Be brutally specific and physical (e.g. "open your laptop" not "start working")
- No motivational language whatsoever
- No step should require decision-making
- Write in second person, present tense
- Each step on its own line
- No numbering, no bullets, no dashes, no extra text before or after
- Just the raw steps, nothing else`;

    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 400 },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Gemini error:", err);
      return NextResponse.json({ error: "Gemini API error" }, { status: 500 });
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 3);

    if (steps.length < 2) {
      return NextResponse.json({ error: "Bad response from Gemini" }, { status: 500 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
