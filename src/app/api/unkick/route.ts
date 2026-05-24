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

    const prompt = `You are an expert productivity coach helping someone with ADHD. 
Break down the following task into exactly 6 concrete, physical steps.
Task: "${task.trim()}"

RULES:
- You MUST provide exactly 6 steps.
- The very first step must be a "micro-step" that takes under 30 seconds and requires zero decisions (e.g., "Stand up", "Grab a trash bag").
- Keep each step short, actionable, and physical.
- RETURN ONLY VALID JSON. Do not include markdown formatting like \`\`\`json.`;

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
          generationConfig: { 
            temperature: 0.4, 
            maxOutputTokens: 800, // Increased to prevent the AI from getting cut off
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                steps: {
                  type: "ARRAY",
                  description: "A list of exactly 6 physical steps to start the task.",
                  items: { type: "STRING" }
                }
              },
              required: ["steps"]
            }
          }
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

    const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
    let steps: string[] = [];
    
    try {
      // 1. Try standard JSON parsing
      let cleanText = text;
      const startIndex = cleanText.indexOf('{');
      const endIndex = cleanText.lastIndexOf('}');
      
      if (startIndex !== -1 && endIndex !== -1) {
        cleanText = cleanText.substring(startIndex, endIndex + 1);
      }
      
      const parsed = JSON.parse(cleanText);
      steps = parsed.steps || [];
    } catch (e) {
      console.warn("JSON parsing failed, running safety fallback parser...", e);
      
      // 2. SAFETY FALLBACK: If the JSON was cut off mid-response, 
      // we use a regex scanner to pull out whatever completed steps actually made it through!
      const matches = [...text.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)].map(m => m[1]);
      steps = matches.filter(m => 
        m !== "steps" && 
        m !== "error" && 
        m !== "raw" && 
        m.length > 5
      );
    }

    // Clean up spaces
    steps = steps.map(s => s.trim()).filter(s => s.length > 5);

    // Keep it strictly at 6 steps maximum
    if (steps.length > 6) {
      steps = steps.slice(0, 6);
    }

    // We'll accept anything down to 1 step if the connection was severely cut off
    if (steps.length < 1) {
      return NextResponse.json({ error: "Not enough steps generated", raw: text }, { status: 502 });
    }

    return NextResponse.json({ steps });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}