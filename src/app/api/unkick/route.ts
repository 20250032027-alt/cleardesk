import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_KEY) {
      console.error("Missing GEMINI_API_KEY environment variable.");
      return NextResponse.json({ error: "Server misconfiguration: API key missing." }, { status: 500 });
    }

    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    // We make the prompt much stricter so it doesn't give lackluster/short answers
    const prompt = `You are an expert productivity coach helping someone with ADHD. 
Break down the following task into exactly 6 concrete, physical steps.
Task: "${task.trim()}"

CRITICAL FORMATTING RULES:
- You MUST provide exactly 6 steps.
- Provide ONE step per line.
- DO NOT use numbers (1., 2., etc.).
- DO NOT use bullet points (-, *, etc.).
- DO NOT include any conversational filler, intro, or outro text. Just the steps.
- The very first step must be a "micro-step" that takes under 30 seconds and requires zero decisions (e.g., "Stand up", "Grab a trash bag", "Open the laptop").`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{ text: prompt }]
          }],
          // I bumped the temperature slightly to 0.5 to make the steps a bit more creative/helpful
          generationConfig: { temperature: 0.5, maxOutputTokens: 300 }
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API Error:", data?.error?.message);
      return NextResponse.json(
        { error: `Google API Error: ${data?.error?.message ?? "Unknown error"}` }, 
        { status: 502 }
      );
    }

    const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    
    // Clean up the response to ensure no stray bullets or numbers made it through
    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 5); // Must be more than 5 characters to count as a step

    if (steps.length < 2) {
      return NextResponse.json({ error: "Bad Gemini response", raw: text }, { status: 502 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}