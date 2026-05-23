"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import type { Metadata } from "next";

// Note: metadata export only works in Server Components.
// For client pages, set it in a parent or use generateMetadata pattern.
// Title is set via document.title below.

function BackArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BodyDoubleTimerPage() {
  const [focusMins, setFocusMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);
  const [sessionsTarget, setSessionsTarget] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessionsDone, setSessionsDone] = useState(0);
  const [remainingSecs, setRemainingSecs] = useState(25 * 60);
  const [totalSecs, setTotalSecs] = useState(25 * 60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { document.title = "Body Double Timer for ADHD | ClearDesk"; }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const stopInterval = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  const handleReset = useCallback(() => {
    stopInterval();
    setIsRunning(false);
    setIsBreak(false);
    setSessionsDone(0);
    const secs = focusMins * 60;
    setTotalSecs(secs);
    setRemainingSecs(secs);
  }, [focusMins, stopInterval]);

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setRemainingSecs((prev) => {
        if (prev <= 1) {
          setIsBreak((b) => {
            const nextBreak = !b;
            setSessionsDone((sd) => {
              const next = nextBreak ? sd : sd + 1;
              const newSecs = nextBreak
                ? (next > 0 && next % sessionsTarget === 0 ? 15 : breakMins) * 60
                : focusMins * 60;
              setTotalSecs(newSecs);
              return next;
            });
            return nextBreak;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => stopInterval();
  }, [isRunning, focusMins, breakMins, sessionsTarget, stopInterval]);

  const handlePlayPause = () => {
    setIsRunning((r) => !r);
  };

  const handleSkip = () => {
    stopInterval();
    setIsBreak((b) => {
      const next = !b;
      setSessionsDone((sd) => {
        const nextSd = next ? sd : sd + 1;
        const secs = next
          ? (nextSd > 0 && nextSd % sessionsTarget === 0 ? 15 : breakMins) * 60
          : focusMins * 60;
        setTotalSecs(secs);
        setRemainingSecs(secs);
        return nextSd;
      });
      return next;
    });
    if (isRunning) {
      setTimeout(() => setIsRunning(true), 50);
    }
  };

  const pct = totalSecs > 0 ? (remainingSecs / totalSecs) * 100 : 100;
  const phaseLabel = isBreak
    ? sessionsDone > 0 && sessionsDone % sessionsTarget === 0 ? "Long break" : "Short break"
    : "Focus session";

  function Stepper({ label, sublabel, value, onMinus, onPlus, min, max }: { label: string; sublabel: string; value: number; onMinus: () => void; onPlus: () => void; min: number; max: number }) {
    return (
      <div className="settings-row">
        <div>
          <span className="settings-label">{label}</span>
          <span className="settings-sublabel">{sublabel}</span>
        </div>
        <div className="settings-stepper">
          <button className="step-btn" onClick={onMinus} disabled={value <= min} aria-label={`Decrease ${label}`}>-</button>
          <span className="step-val">{value}</span>
          <button className="step-btn" onClick={onPlus} disabled={value >= max} aria-label={`Increase ${label}`}>+</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="timer-page">
        <div className="eyebrow">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3.5" fill="#4A7C59" /></svg>
          Focus tool
        </div>
        <h1 className="timer-title">Body double timer</h1>
        <p className="timer-desc">
          Sometimes just knowing someone else is working nearby is enough. Pick your intervals and start.
        </p>

        <div className="timer-face" role="timer" aria-live="polite" aria-label="Timer display">
          <div className="timer-phase">{phaseLabel}</div>
          <div className={`timer-display${isBreak ? " break" : ""}`}>{formatTime(remainingSecs)}</div>
          <div className="timer-progress-wrap">
            <div className="timer-progress" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="session-count" id="sessionDots" aria-label="Session progress">
          {Array.from({ length: sessionsTarget }).map((_, i) => (
            <div
              key={i}
              className={`session-dot${i < sessionsDone ? " done" : ""}${i === sessionsDone && !isBreak && isRunning ? " active" : ""}`}
            />
          ))}
        </div>

        <div className="timer-controls" role="group" aria-label="Timer controls">
          <button className="btn-timer-sec" onClick={handleReset} aria-label="Reset timer">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 8a6 6 0 1 0 1.5-3.9"/><path d="M2 4v4h4"/>
            </svg>
          </button>
          <button className="btn-timer-main" onClick={handlePlayPause} aria-label={isRunning ? "Pause timer" : "Start timer"}>
            {isRunning ? (
              <svg viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
          <button className="btn-timer-sec" onClick={handleSkip} aria-label="Skip to next phase">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l8 4-8 4V4z"/><path d="M13 4v8"/>
            </svg>
          </button>
        </div>

        <div className="settings-wrap" role="group" aria-label="Timer settings">
          <p className="settings-title">Settings</p>
          <Stepper label="Focus length" sublabel="minutes per session" value={focusMins} onMinus={() => { setFocusMins(v => Math.max(1, v-1)); handleReset(); }} onPlus={() => { setFocusMins(v => Math.min(90, v+1)); handleReset(); }} min={1} max={90} />
          <Stepper label="Break length" sublabel="minutes between sessions" value={breakMins} onMinus={() => setBreakMins(v => Math.max(1, v-1))} onPlus={() => setBreakMins(v => Math.min(30, v+1))} min={1} max={30} />
          <Stepper label="Sessions before long break" sublabel="then a 15-minute rest" value={sessionsTarget} onMinus={() => setSessionsTarget(v => Math.max(1, v-1))} onPlus={() => setSessionsTarget(v => Math.min(8, v+1))} min={1} max={8} />
        </div>
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>What body doubling actually does for ADHD brains</h2>
        <p>Body doubling is one of those things that sounds too simple to work. You sit near another person, they do their thing, you do yours, and somehow it's easier to stay on task. No accountability check-ins, no collaboration. Just another human presence in the room.</p>
        <p>For a lot of people with ADHD, it genuinely helps. The going theory is that having someone else nearby activates a kind of external accountability that's harder to manufacture internally. Your brain registers there is someone here, this is work time, and that's enough to reduce the drift.</p>
        <h3>Why timers specifically help</h3>
        <p>Open-ended work sessions are rough with ADHD. When there's no clear stopping point, the session either collapses after ten minutes or stretches into hyperfocus for three hours. Neither is sustainable.</p>
        <p>Short, timed blocks with built-in breaks give your brain a deal it can accept. Just until the timer goes off is a lot easier to commit to than until you feel done. The break isn't a reward for finishing. It's a scheduled part of the session.</p>
        <h3>Why standard Pomodoro doesn't always fit</h3>
        <p>The classic 25-minute focus, 5-minute break format works for some people. A lot of ADHD brains find it too short to get into flow, or too long to sustain when executive function is low. That's why this timer lets you set your own intervals. Try 15 and 5. Try 45 and 10. The right length is whichever one you'll actually use.</p>
      </article>
    </>
  );
}
