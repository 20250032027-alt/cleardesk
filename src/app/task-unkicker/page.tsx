"use client";
import { useState, useEffect, useRef } from "react";

const BREAKDOWN_MAP: Record<string, string[]> = {
  "reply to": ["Open your email app or inbox", "Find the specific email and read it fully", "Write just one sentence as a reply draft, anything", "Add a second sentence if you can", "Read it back once", "Hit send"],
  laundry: ["Pick up one item of clothing from the floor", "Find the laundry basket or bag", "Put that one item in it", "Collect any other items nearby while you're up", "Carry the basket to the machine", "Put it in and press start"],
  email: ["Open the email", "Read it once without doing anything", "Write: Hi [name], thanks for reaching out.", "Add one sentence addressing the main point", "Sign off and reread quickly", "Send it"],
  report: ["Open a blank document", "Type the title and your name", "Write two bullet points: what the report is about, what the main answer is", "Turn those bullets into two sentences of an intro", "Move to the next section"],
  dentist: ["Search your city dentist accepting new patients", "Pick the first result that looks reasonable", "Find their phone number or online booking link", "Book or call for the earliest available slot", "Put it in your calendar right now"],
  clean: ["Pick up one thing and put it away or throw it out", "Do that three more times", "Clear just the surface directly in front of you", "Wipe that surface with anything", "Step back and look at what's left"],
};

const EXAMPLES = [
  "Reply to that email",
  "Start the laundry",
  "Write that report",
  "Make a dentist appointment",
  "Clean my desk",
];

function generateSteps(task: string): string[] {
  const t = task.toLowerCase();
  for (const [key, steps] of Object.entries(BREAKDOWN_MAP)) {
    if (t.includes(key)) return steps;
  }
  return [
    `Open whatever you need to start "${task.split(" ").slice(0, 4).join(" ")}"`,
    "Do the smallest visible first action, one thing",
    "Stop and note what the next thing after that would be",
    "Do that next thing",
    "Check: is this actually still blocked, or is it moving now?",
    "Keep going in the same small-step way",
  ];
}

export default function TaskUnkickerPage() {
  const [task, setTask] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [done, setDone] = useState<boolean[]>([]);
  const [shown, setShown] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => { document.title = "Task Unkicker - Break ADHD Task Paralysis | ClearDesk"; }, []);

  const handleUnkick = () => {
    if (task.trim().length < 3) return;
    const s = generateSteps(task);
    setSteps(s);
    setDone(new Array(s.length).fill(false));
    setShown(true);
    setTimeout(() => stepsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 150);
  };

  const toggleDone = (i: number) => {
    setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));
  };

  const handleClear = () => {
    setTask("");
    setSteps([]);
    setDone([]);
    setShown(false);
  };

  return (
    <>
      <div className="unkicker-page">
        <div className="eyebrow eyebrow-teal">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3.5" fill="#2A7F7F" /></svg>
          Task tool
        </div>
        <h1 className="unkicker-title">Task unkicker</h1>
        <p className="unkicker-desc">
          Type the task you keep avoiding. This tool breaks it into steps so small your brain can't come up with a reason to refuse the first one.
        </p>

        <p style={{ fontSize: "0.75rem", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>Try an example:</p>
        <div className="examples-row">
          {EXAMPLES.map((ex) => (
            <button key={ex} className="example-chip" onClick={() => setTask(ex)}>
              {ex}
            </button>
          ))}
        </div>

        <div className="input-card">
          <label className="input-label" htmlFor="taskInput">What's the stuck task?</label>
          <span className="input-sublabel">Be as specific or vague as you want. This works either way.</span>
          <textarea
            className="task-input"
            id="taskInput"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g. reply to the email from my landlord that I've been ignoring for 5 days"
            rows={3}
            aria-label="Enter your stuck task"
          />
          <div className="input-footer">
            <span className="input-hint">{task.trim().length} characters</span>
            <button className="btn-unkick" onClick={handleUnkick} disabled={task.trim().length < 3}>
              Break it down
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={stepsRef}
          className={`steps-card${shown ? " show" : ""}`}
          aria-live="polite"
        >
          <p className="steps-heading">
            Breaking down: &ldquo;{task.length > 40 ? task.slice(0, 40) + "..." : task}&rdquo;
          </p>
          <p className="steps-subheading">Tap a step to mark it done</p>
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
            <button className="steps-reset" onClick={handleClear}>Start over</button>
          </div>
        </div>
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>Why task paralysis happens and what actually helps</h2>
        <p>Task paralysis isn't laziness. It's a mismatch between how much cognitive load a task looks like it requires and how much activation energy your brain has available right now. When those don't line up, the task just sits there.</p>
        <p>The problem is usually the starting point, not the task itself. Write the report is too big. There's no traction. Open a blank document is something a tired brain can do. That first tiny action is often enough to get the momentum going.</p>
        <h3>The initiation problem specifically</h3>
        <p>For people with ADHD, initiation is a specific bottleneck. The executive function system that fires the starting gun on tasks doesn't always respond well to importance or urgency the way it's supposed to. That's why something objectively easy can sit undone for weeks while something that barely matters gets done immediately.</p>
        <h3>Why you need to do the first step right now</h3>
        <p>If you read through the steps and think okay I'll start later, the window often closes. Task breakdown works best if you go directly from reading step one to doing step one. Even if step one takes ninety seconds. The goal is to get a little bit of momentum before your brain talks you out of it.</p>
      </article>
    </>
  );
}
