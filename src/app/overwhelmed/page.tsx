"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GROUNDING_STEPS = [
  "Name 5 things you can see right now",
  "Name 4 things you can physically feel",
  "Name 3 things you can hear",
  "Name 2 things you can smell",
  "Name 1 thing you can taste",
];

export default function OverwhelmedPage() {
  const [phase, setPhase] = useState<"landing" | "grounding" | "timer" | "task">("landing");
  const [groundStep, setGroundStep] = useState(0);
  const [seconds, setSeconds] = useState(5 * 60);
  const [running, setRunning] = useState(false);
  const [task, setTask] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.title = "I Am Overwhelmed Right Now | ClearDesk";
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => {
          if (s <= 1) { clearInterval(intervalRef.current!); setRunning(false); return 0; }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <main className="overwhelm-page">
      {phase === "landing" && (
        <div className="overwhelm-landing">
          <div className="overwhelm-dot" aria-hidden="true" />
          <h1 className="overwhelm-title">You are okay right now.</h1>
          <p className="overwhelm-sub">
            This moment is survivable. Pick what you need.
          </p>
          <div className="overwhelm-options">
            <button className="overwhelm-option" onClick={() => setPhase("grounding")}>
              <span className="overwhelm-option-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="overwhelm-option-title">I need to calm down first</div>
                <div className="overwhelm-option-desc">A 60-second grounding exercise</div>
              </div>
            </button>
            <button className="overwhelm-option" onClick={() => { setSeconds(5 * 60); setPhase("timer"); setRunning(true); }}>
              <span className="overwhelm-option-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="overwhelm-option-title">I need to work but I can not start</div>
                <div className="overwhelm-option-desc">5 minutes. Just sit with the work open.</div>
              </div>
            </button>
            <button className="overwhelm-option" onClick={() => setPhase("task")}>
              <span className="overwhelm-option-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className="overwhelm-option-title">There is one specific thing I am avoiding</div>
                <div className="overwhelm-option-desc">Break it into steps small enough to start</div>
              </div>
            </button>
          </div>
          <p className="overwhelm-footer-note">
            If you are in crisis and need to talk to someone, the{" "}
            <a href="https://www.crisistextline.org" target="_blank" rel="noopener">Crisis Text Line</a>{" "}
            is free. Text HOME to 741741.
          </p>
        </div>
      )}

      {phase === "grounding" && (
        <div className="overwhelm-grounding">
          <p className="overwhelm-phase-label">Grounding: 5-4-3-2-1</p>
          <h2 className="overwhelm-ground-step">{GROUNDING_STEPS[groundStep]}</h2>
          <p className="overwhelm-ground-sub">Take your time. Say them out loud if you can.</p>
          <div className="overwhelm-ground-dots">
            {GROUNDING_STEPS.map((_, i) => (
              <div key={i} className={`overwhelm-gdot${i <= groundStep ? " active" : ""}`} aria-hidden="true" />
            ))}
          </div>
          {groundStep < GROUNDING_STEPS.length - 1 ? (
            <button className="btn-primary" onClick={() => setGroundStep(s => s + 1)}>
              Done <span className="icon-wrap" aria-hidden="true">→</span>
            </button>
          ) : (
            <div className="overwhelm-ground-done">
              <p>You just slowed your nervous system down. That was real.</p>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <button className="btn-ghost" onClick={() => setPhase("landing")}>Back</button>
                <button className="btn-primary" onClick={() => { setSeconds(5 * 60); setPhase("timer"); setRunning(true); }}>
                  Now try 5 minutes of work <span className="icon-wrap" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
          <button className="overwhelm-back-link" onClick={() => setPhase("landing")}>
            Go back
          </button>
        </div>
      )}

      {phase === "timer" && (
        <div className="overwhelm-timer">
          <p className="overwhelm-phase-label">5-minute body double</p>
          <p className="overwhelm-timer-instruction">
            Open whatever you need to work on. Stay in the same room as this timer.
            You do not have to do anything. Just be near it.
          </p>
          <div className="overwhelm-clock" aria-live="polite" aria-label={`${fmt(seconds)} remaining`}>
            {fmt(seconds)}
          </div>
          <div className="overwhelm-clock-bar">
            <div className="overwhelm-clock-fill" style={{ width: `${(seconds / (5 * 60)) * 100}%` }} />
          </div>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "2rem" }}>
            <button className="btn-ghost" onClick={() => setRunning(r => !r)}>
              {running ? "Pause" : "Resume"}
            </button>
            <button className="btn-ghost" onClick={() => { setSeconds(5 * 60); setRunning(true); }}>
              Reset
            </button>
          </div>
          {seconds === 0 && (
            <div className="overwhelm-done-msg">
              <p>You did it. Five minutes. That is how it starts.</p>
              <button className="btn-primary" style={{ marginTop: "1rem" }} onClick={() => { setSeconds(25 * 60); setRunning(true); }}>
                Keep going. 25 more minutes <span className="icon-wrap" aria-hidden="true">→</span>
              </button>
            </div>
          )}
          <Link href="/body-double-timer" className="overwhelm-back-link">
            Open the full timer
          </Link>
        </div>
      )}

      {phase === "task" && (
        <div className="overwhelm-task">
          <p className="overwhelm-phase-label">Task unkicker</p>
          <p className="overwhelm-task-instruction">
            Type the one thing you are most avoiding. Be specific.
          </p>
          <textarea
            className="task-input"
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="e.g. reply to the email I have been ignoring for three days"
            rows={3}
            autoFocus
          />
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "0.75rem" }}>
            <button className="btn-ghost" onClick={() => setPhase("landing")}>Back</button>
            <Link
              href={`/task-unkicker?task=${encodeURIComponent(task)}`}
              className="btn-primary"
              style={{ pointerEvents: task.trim().length < 3 ? "none" : "auto", opacity: task.trim().length < 3 ? 0.4 : 1 }}
            >
              Break it down <span className="icon-wrap" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
