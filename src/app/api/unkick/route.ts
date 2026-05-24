import { NextRequest, NextResponse } from "next/server";

// Key is server-side only - never exposed to browser
const GEMINI_KEY = process.env.GEMINI_API_KEY ?? "AIzaSyD648DbvTQ827fd7sSXmZ_BrF2k_MlqrbY";

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
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

    if (!res.ok) {
      console.error("Gemini error:", data?.error?.message);
      return NextResponse.json({ error: data?.error?.message ?? "Gemini error" }, { status: 500 });
    }

    const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 5);

    if (steps.length < 2) {
      return NextResponse.json({ error: "Bad Gemini response", raw: text }, { status: 500 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
