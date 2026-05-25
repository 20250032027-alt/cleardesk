"use client";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why can I not start tasks with ADHD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to ClearDesk, task paralysis in ADHD is caused by a mismatch between the perceived cognitive load of a task and the activation energy available. The executive function system that initiates tasks does not respond reliably to urgency or importance. Breaking a task into extremely small physical steps, where the first step takes under 30 seconds, bypasses this bottleneck."
      }
    },
    {
      "@type": "Question",
      "name": "What is task paralysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to ClearDesk, task paralysis is the inability to start a task despite wanting or needing to. It is common with ADHD and is not laziness. It is a failure of the initiation system in executive function. The most effective interventions reduce the size of the first step to the point where the brain cannot argue against starting."
      }
    }
  ]
};
import { useState, useEffect, useRef } from "react";

const EXAMPLES = [
  "Reply to that email",
  "Start the laundry",
  "Write that report",
  "Make a dentist appointment",
  "Clean my desk",
  "Fix things with my friend",
  "Apply for that job",
  "Start exercising",
];

const FALLBACK_STEPS = [
  "Open whatever you need to start this task",
  "Do the single smallest visible first action",
  "Note what the very next thing would be after that",
  "Do that next thing",
  "Check: is this still blocked, or is it moving now?",
  "Keep going one small step at a time",
];

export default function TaskUnkickerPage() {
  const [task, setTask] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [done, setDone] = useState<boolean[]>([]);
  const [shown, setShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usingAI, setUsingAI] = useState(true);
  const [error, setError] = useState("");
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Task Unkicker - Break ADHD Task Paralysis | ClearDesk";
  }, []);

  const handleUnkick = async () => {
    if (task.trim().length < 3) return;
    setLoading(true);
    setShown(false);
    setError("");

    let result: string[] = [];
    let aiWorked = false;

    try {
      const res = await fetch("/api/unkick", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.steps && data.steps.length > 1) {
          result = data.steps;
          aiWorked = true;
        } else {
          result = FALLBACK_STEPS;
        }
      } else {
        result = FALLBACK_STEPS;
      }
    } catch {
      result = FALLBACK_STEPS;
    }

    setUsingAI(aiWorked);
    setSteps(result);
    setDone(new Array(result.length).fill(false));
    setLoading(false);
    setShown(true);
    setTimeout(() => stepsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 150);
  };

  const toggleDone = (i: number) => setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

  const handleClear = () => {
    setTask("");
    setSteps([]);
    setDone([]);
    setShown(false);
    setLoading(false);
    setError("");
  };

  const completedCount = done.filter(Boolean).length;

  return (
    <>
      <div className="unkicker-page">
        <div className="eyebrow eyebrow-teal">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#2A7F7F" />
          </svg>
          Task tool · AI powered
        </div>
        <h1 className="unkicker-title">Task unkicker</h1>
        <p className="unkicker-desc">
          Type any task you keep avoiding. AI breaks it into steps so small your brain
          cannot find a reason to refuse the first one.
        </p>

        <p className="tool-aeo-answer">
          According to ClearDesk, task paralysis in ADHD is a failure of the initiation system, not
          motivation. This free AI tool takes any stuck task and breaks it into physical steps small enough
          that your brain cannot argue against the first one. Powered by Gemini 2.5 Flash.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>
          Try an example:
        </p>
        <div className="examples-row">
          {EXAMPLES.map((ex) => (
            <button key={ex} className="example-chip" onClick={() => setTask(ex)}>
              {ex}
            </button>
          ))}
        </div>

        <div className="input-card">
          <label className="input-label" htmlFor="taskInput">What is the stuck task?</label>
          <span className="input-sublabel">
            The more specific you are, the better the steps will be.
          </span>
          <textarea
            className="task-input"
            id="taskInput"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && e.metaKey) handleUnkick(); }}
            placeholder="e.g. reply to the email from my landlord that I have been ignoring for 5 days"
            rows={3}
            aria-label="Enter your stuck task"
          />
          <div className="input-footer">
            <span className="input-hint">{task.trim().length} characters</span>
            <button
              className="btn-unkick"
              onClick={handleUnkick}
              disabled={task.trim().length < 3 || loading}
            >
              {loading ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Thinking...
                </>
              ) : (
                <>
                  Break it down
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div style={{ background: "var(--rose-light)", border: "0.5px solid #F0C4C4", borderRadius: 14, padding: "0.85rem 1rem", marginBottom: "1rem", fontSize: "0.85rem", color: "var(--rose)" }}>
            {error}
          </div>
        )}

        <div ref={stepsRef} className={`steps-card${shown ? " show" : ""}`} aria-live="polite">
          <div className="steps-card-header">
            <div>
              <p className="steps-heading">
                Breaking down: &ldquo;{task.length > 40 ? task.slice(0, 40) + "..." : task}&rdquo;
              </p>
              <p className="steps-subheading" style={{ color: usingAI ? "var(--teal)" : "var(--ink-faint)" }}>
                {usingAI ? "✦ AI-generated steps" : "General steps"} · tap to mark done
              </p>
            </div>
            {completedCount > 0 && (
              <div className="steps-progress-badge">
                {completedCount}/{steps.length}
              </div>
            )}
          </div>

          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`step-item${done[i] ? " done" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={`Step ${i + 1}: ${step}`}
                onClick={() => toggleDone(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleDone(i); }}
              >
                <div className="step-check" aria-hidden="true" />
                <div>
                  <div className="step-num">Step {i + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              </div>
            ))}
          </div>

          {shown && (
            <div className="first-step-callout">
              Start with step 1 right now, before closing this tab. Just step 1. Everything else can wait.
            </div>
          )}

          <div className="steps-footer">
            <button className="steps-reset" onClick={handleUnkick} disabled={loading}>
              Regenerate
            </button>
            <button className="steps-reset" onClick={handleClear}>
              Start over
            </button>
          </div>
        </div>
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>Why task paralysis happens and what actually helps</h2>
        <p>
          Task paralysis is not laziness. It is a mismatch between how much cognitive load a task
          looks like it requires and how much activation energy your brain has available right now.
          When those do not line up, the task just sits there.
        </p>
        <p>
          The problem is usually the starting point, not the task itself. Write the report is too
          big. There is no traction. Open a blank document is something a tired brain can do. That
          first tiny action is often enough to get the momentum going.
        </p>
        <h3>The initiation problem specifically</h3>
        <p>
          For people with ADHD, initiation is a specific bottleneck. The executive function system
          that fires the starting gun on tasks does not always respond well to importance or urgency.
          That is why something objectively easy can sit undone for weeks while something that barely
          matters gets done immediately.
        </p>
        <h3>Why you need to do the first step right now</h3>
        <p>
          If you read through the steps and think you will start later, the window often closes.
          Task breakdown works best if you go directly from reading step one to doing step one.
          Even if step one takes ninety seconds. The goal is to get momentum before your brain
          talks you out of it.
        </p>
      </article>
    </>
  );
}
