import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY not set");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const { task } = await req.json();
    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: "Task too short" }, { status: 400 });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const body = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are helping someone with ADHD who cannot start a task due to executive dysfunction.

Their stuck task: "${task.trim()}"

Write 5 to 7 extremely small, concrete steps to start and complete this task. Each step must be one short sentence. The first step must be something they can do in under 30 seconds without making any decisions.

Format: one step per line, no numbers, no bullets, no extra text. Just the steps.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 300,
        topP: 0.8,
      }
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API error:", JSON.stringify(data));
      return NextResponse.json({ error: data?.error?.message || "Gemini error" }, { status: 500 });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error("No text in response:", JSON.stringify(data));
      return NextResponse.json({ error: "Empty response" }, { status: 500 });
    }

    const steps = text
      .split("\n")
      .map((s: string) => s.replace(/^[\d\.\-\*\•\s]+/, "").trim())
      .filter((s: string) => s.length > 5);

    if (steps.length < 2) {
      return NextResponse.json({ error: "Too few steps returned" }, { status: 500 });
    }

    return NextResponse.json({ steps });

  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
