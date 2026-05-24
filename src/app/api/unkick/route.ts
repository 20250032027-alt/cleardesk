import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Use env variable if set, otherwise fall back to hardcoded key
    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyD648DbvTQ827fd7sSXmZ_BrF2k_MlqrbY";

    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{
            text: `You are helping someone with ADHD who cannot start a task due to executive dysfunction and task paralysis.

Their stuck task: "${task.trim()}"

Write exactly 6 small, concrete, physical steps to start and complete this task. Each step is one sentence. The first step must take under 30 seconds and require zero decisions.

Rules:
- Physical and specific (open your laptop, not start working)
- No motivation, no encouragement
- No numbering, no bullets, no dashes
- One step per line
- Nothing else before or after the steps`
          }]
        }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 250 }
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data?.error?.message || "Gemini error", debug: data }, { status: 500 });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 5);

    if (steps.length < 2) {
      return NextResponse.json({ error: "Bad response", raw: text }, { status: 500 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
