"use client";
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "cleardesk_meds_log";

type Log = Record<string, "yes" | "no">;

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getLog(): Log {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}

function saveLog(log: Log) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(log)); } catch {}
}

function calcStreak(log: Log): number {
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (log[key] === "yes") { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function MedsTrackerPage() {
  const [log, setLog] = useState<Log>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = "Did I Take My Meds? Free ADHD Tracker | ClearDesk";
    setLog(getLog());
    setMounted(true);
  }, []);

  const handleAnswer = (answer: "yes" | "no") => {
    const newLog = { ...log, [todayKey()]: answer };
    saveLog(newLog);
    setLog(newLog);
  };

  const handleClear = () => {
    if (confirm("Clear all logged data? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      setLog({});
    }
  };

  const streak = calcStreak(log);
  const todayVal = log[todayKey()];
  const today = new Date();

  const last28 = Array.from({ length: 28 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (27 - i));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return { key, day: d.getDate(), val: log[key] };
  });

  if (!mounted) return null;

  return (
    <>
      <div className="tracker-page">
        <div className="eyebrow eyebrow-amber">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3.5" fill="#C4771B" /></svg>
          Daily check-in
        </div>
        <h1 className="tracker-title">Did I take my meds?</h1>
        <p className="tracker-desc">
          Tap yes or no. That's all this does. Your history stays in your browser and nothing goes anywhere.
        </p>

        <div className="today-card">
          <p className="today-date">{formatDate(today)}</p>
          <p className="today-question">Did you take your medication today?</p>
          <div className="answer-row" role="group" aria-label="Medication taken today?">
            <button
              className={`answer-btn yes${todayVal === "yes" ? " selected-yes" : ""}`}
              onClick={() => handleAnswer("yes")}
            >
              Yes, I took them
            </button>
            <button
              className={`answer-btn no${todayVal === "no" ? " selected-no" : ""}`}
              onClick={() => handleAnswer("no")}
            >
              Not yet
            </button>
          </div>
          {todayVal && (
            <p className="today-note show">
              {todayVal === "yes" ? "Logged. Good to know." : "Logged as not yet. You can update this if you take them later."}
            </p>
          )}
        </div>

        <div className="streak-card" aria-live="polite">
          <div className="streak-num">{streak}</div>
          <div>
            <div className="streak-label">day streak</div>
            <div className="streak-sublabel">
              {streak > 0 ? `${streak} day${streak > 1 ? "s" : ""} in a row` : "Log today to start a streak"}
            </div>
          </div>
        </div>

        <div className="history-card">
          <p className="history-label">Last 28 days</p>
          <div className="history-grid" aria-label="28 day history">
            {last28.map(({ key, day, val }) => (
              <div
                key={key}
                className={`history-day${val === "yes" ? " took" : val === "no" ? " skipped" : ""}${key === todayKey() ? " today" : ""}`}
                title={`${key}${val ? ": " + val : ": no data"}`}
              >
                {day}
              </div>
            ))}
          </div>
          <button className="reset-link" onClick={handleClear}>Clear all data</button>
        </div>
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>Why forgetting your meds is so common with ADHD</h2>
        <p>Here's the part that gets a lot of people: forgetting to take your ADHD medication is itself an ADHD symptom. Working memory issues mean I'll take it after breakfast can evaporate between the kitchen and the bathroom. It's not carelessness. It's the condition doing what the condition does.</p>
        <p>The same thing happens at the other end of the day. Did I take them this morning? The question comes up and there's genuinely no reliable memory to check. Taking a double dose is a bad outcome. Not taking them is also a bad outcome. The uncertainty is its own stressor.</p>
        <h3>Why streaks help more than alarms</h3>
        <p>Alarm-based reminders work until they don't. You dismiss enough of them half-asleep and your brain learns to dismiss them before you're even awake. Streaks work differently. They tap into something slightly gamified about the ADHD brain. Missing a streak feels more concrete than missing an alarm.</p>
        <h3>Your data stays in your browser</h3>
        <p>Nothing here is sent anywhere. Your history lives in your browser's local storage, which means it's on your device and nowhere else. If you clear your browser data or switch devices, the history clears too. That's a known trade-off for not requiring an account.</p>
      </article>
    </>
  );
}
