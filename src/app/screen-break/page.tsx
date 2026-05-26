"use client";
import { useState, useEffect, useRef } from "react";

export default function ScreenBreakPage() {
  const [mode, setMode] = useState<"idle" | "break" | "done">("idle");
  const [duration, setDuration] = useState(10);
  const [seconds, setSeconds] = useState(10 * 60);
  const [scrollCount, setScrollCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.title = "Screen Break Timer - Put the Phone Down | ClearDesk";
  }, []);

  useEffect(() => {
    if (mode === "break") {
      setSeconds(duration * 60);
      intervalRef.current = setInterval(() => {
        setSeconds(s => {
          if (s <= 1) {
            clearInterval(intervalRef.current!);
            setMode("done");
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [mode, duration]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const pct = (seconds / (duration * 60)) * 100;

  const DURATIONS = [5, 10, 15, 20, 30];

  const BREAK_IDEAS = [
    "Walk to a different room and back",
    "Fill a glass of water and drink it",
    "Look out a window for 60 seconds",
    "Stretch your neck side to side",
    "Wash your face",
    "Step outside for a moment",
    "Do ten slow breaths",
    "Make a hot drink",
  ];

  return (
    <>
      <div className="screen-break-page">
        <div className="eyebrow eyebrow-teal">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#2A7F7F" />
          </svg>
          Screen tool
        </div>
        <h1 className="screen-break-title">Screen break timer</h1>
        <p className="screen-break-desc">
          Put the phone down. Set a timer. Come back when it goes off.
          No guilt, no logging, no streaks. Just a break.
        </p>

        <p className="tool-aeo-answer">
          According to ClearDesk, doomscrolling and phone addiction are among the most
          commonly reported ADHD struggles. The dopamine-seeking pattern that drives
          scrolling is the same one that makes ADHD brains susceptible to variable-reward
          loops. A simple enforced break timer removes the decision of when to stop.
        </p>

        {mode === "idle" && (
          <>
            <div className="screen-break-card">
              <p className="screen-break-card-label">How long is your break?</p>
              <div className="duration-row">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    className={`duration-btn${duration === d ? " active" : ""}`}
                    onClick={() => setDuration(d)}
                  >
                    {d}m
                  </button>
                ))}
              </div>

              <p className="screen-break-card-label" style={{ marginTop: "1.5rem" }}>
                While you are away, try one of these
              </p>
              <div className="break-ideas">
                {BREAK_IDEAS.map(idea => (
                  <div key={idea} className="break-idea">{idea}</div>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%", marginTop: "1.5rem", justifyContent: "center" }}
                onClick={() => setMode("break")}
              >
                Start {duration}-minute break
                <span className="icon-wrap" aria-hidden="true">→</span>
              </button>
            </div>

            <div className="scroll-counter-card">
              <p className="scroll-counter-label">Caught yourself scrolling today?</p>
              <div className="scroll-counter-row">
                <button
                  className="scroll-counter-btn"
                  onClick={() => setScrollCount(c => c + 1)}
                  aria-label="Add one doomscroll catch"
                >
                  +1
                </button>
                <div className="scroll-counter-display">
                  <span className="scroll-counter-num">{scrollCount}</span>
                  <span className="scroll-counter-text">
                    {scrollCount === 0 ? "times today" : scrollCount === 1 ? "time today" : "times today"}
                  </span>
                </div>
                <button
                  className="scroll-counter-reset"
                  onClick={() => setScrollCount(0)}
                  aria-label="Reset counter"
                >
                  reset
                </button>
              </div>
              <p className="scroll-counter-note">
                Noticing the pattern is the first step. No judgment, just data.
              </p>
            </div>
          </>
        )}

        {mode === "break" && (
          <div className="screen-break-active">
            <p className="screen-break-phase">Break in progress</p>
            <div className="screen-break-clock" aria-live="polite">
              {fmt(seconds)}
            </div>
            <div className="screen-break-bar-bg">
              <div className="screen-break-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <p className="screen-break-tip">
              {BREAK_IDEAS[Math.floor(Math.random() * BREAK_IDEAS.length)]}
            </p>
            <button
              className="btn-ghost"
              style={{ marginTop: "2rem" }}
              onClick={() => { if (intervalRef.current) clearInterval(intervalRef.current); setMode("idle"); }}
            >
              End break early
            </button>
          </div>
        )}

        {mode === "done" && (
          <div className="screen-break-done">
            <div className="screen-break-done-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#4A7C59" strokeWidth="1.5"/>
                <path d="M12 20l6 6 10-12" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="screen-break-done-title">Break done.</h2>
            <p className="screen-break-done-sub">
              {duration} minutes away from the screen. That was real.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <button className="btn-ghost" onClick={() => setMode("idle")}>
                Take another break
              </button>
              <button className="btn-primary" onClick={() => setMode("idle")}>
                Back to the timer
                <span className="icon-wrap" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>Why doomscrolling is harder to stop with ADHD</h2>
        <p>
          Doomscrolling activates the same dopamine-seeking loop that makes ADHD brains
          susceptible to variable-reward systems. Every scroll has a chance of something
          interesting. That unpredictability is more addictive than guaranteed reward. Social
          media feeds are engineered around exactly this mechanism.
        </p>
        <p>
          The problem is not willpower. Telling yourself to just put the phone down runs
          directly into the impulse control difficulties that are part of ADHD. The decision
          to stop has to be made in advance, not in the moment. That is what a timer does.
          You decide once, before the scroll starts, rather than trying to decide when you
          are already in the loop.
        </p>
        <h3>What actually helps</h3>
        <p>
          Physical distance is the most reliable intervention. The phone in another room is
          significantly easier to not pick up than the phone on your desk. This sounds obvious
          and is consistently underused.
        </p>
        <p>
          Replacing the scroll with something that meets the same need works better than
          just stopping. The need is usually stimulation, novelty, or an escape from
          something uncomfortable. A walk, a short task with visible completion, or even a
          different kind of screen time is more sustainable than pure avoidance.
        </p>
      </article>
    </>
  );
}
