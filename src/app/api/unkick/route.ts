import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Read the API key securely from Vercel's environment variables
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    
    // Safety check so it fails gracefully if the key is missing
    if (!GEMINI_KEY) {
      console.error("Missing GEMINI_API_KEY environment variable.");
      return NextResponse.json({ error: "Server misconfiguration: API key missing." }, { status: 500 });
    }

    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    // 2. UPDATED: Using gemini-2.5-flash to match your Google Cloud account
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [{
              text: `Help someone with ADHD start this task: "${task.trim()}"

Write 6 concrete physical steps. First step under 30 seconds, zero decisions required.
One step per line. No numbers, bullets, or extra text. Just the steps.`
            }]
          }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 250 }
        }),
      }
    );

    const data = await res.json();

    // 3. Graceful Error Handling
    if (!res.ok) {
      console.error("Gemini API Error:", data?.error?.message);
      // Return 502 Bad Gateway to indicate the upstream Google server rejected it
      return NextResponse.json(
        { error: `Google API Error: ${data?.error?.message ?? "Unknown error"}` }, 
        { status: 502 }
      );
    }

    const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 5);

    if (steps.length < 2) {
      return NextResponse.json({ error: "Bad Gemini response", raw: text }, { status: 502 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}