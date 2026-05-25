"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const QUESTIONS = [
  {
    id: "structure",
    text: "How much structure does the role have day-to-day?",
    options: [
      { label: "Very loose: I set my own priorities each day", value: 2 },
      { label: "Some structure: regular meetings, flexible otherwise", value: 4 },
      { label: "High structure: set schedule and clear tasks", value: 3 },
      { label: "Rigid: same tasks on a fixed schedule", value: 1 },
    ],
  },
  {
    id: "environment",
    text: "What is the physical environment like?",
    options: [
      { label: "Open office, loud, lots of people", value: 1 },
      { label: "Hybrid: some open, some private", value: 3 },
      { label: "Private office or quiet space", value: 4 },
      { label: "Remote or work-from-anywhere", value: 4 },
    ],
  },
  {
    id: "tasks",
    text: "What does most of the work look like?",
    options: [
      { label: "Long projects with no clear end point", value: 1 },
      { label: "Mix of short tasks and longer projects", value: 4 },
      { label: "Mostly short tasks with visible completion", value: 5 },
      { label: "Highly repetitive, same thing every day", value: 1 },
    ],
  },
  {
    id: "feedback",
    text: "How often do you get feedback on your work?",
    options: [
      { label: "Rarely: maybe quarterly reviews", value: 1 },
      { label: "Monthly from a manager", value: 2 },
      { label: "Weekly or more often", value: 4 },
      { label: "Immediately: the work itself shows you", value: 5 },
    ],
  },
  {
    id: "interruptions",
    text: "How often are you expected to be interruptible?",
    options: [
      { label: "Constantly: always on Slack or email", value: 1 },
      { label: "Often, but I can batch my responses", value: 3 },
      { label: "I set my own availability", value: 5 },
      { label: "Rarely, mostly async communication", value: 4 },
    ],
  },
  {
    id: "movement",
    text: "How much physical movement is involved?",
    options: [
      { label: "Desk-bound all day", value: 1 },
      { label: "Some movement but mostly sitting", value: 2 },
      { label: "Mix of desk and moving around", value: 4 },
      { label: "Mostly physical: on my feet or moving", value: 5 },
    ],
  },
  {
    id: "variety",
    text: "How much variety is there day to day?",
    options: [
      { label: "Very little: same tasks, same routine", value: 1 },
      { label: "Some variety within a consistent role", value: 3 },
      { label: "Quite varied: different problems daily", value: 5 },
      { label: "Unpredictable: changes constantly", value: 3 },
    ],
  },
  {
    id: "deadlines",
    text: "What are the deadlines like?",
    options: [
      { label: "Vague: work expands to fill available time", value: 1 },
      { label: "Long-horizon: weeks or months out", value: 2 },
      { label: "Clear deadlines, reasonable timelines", value: 4 },
      { label: "Short and frequent: clear pressure points", value: 5 },
    ],
  },
];

function getResult(score: number) {
  const pct = Math.round((score / (QUESTIONS.length * 5)) * 100);
  if (pct >= 70) return {
    level: "Strong fit",
    color: "sage",
    summary: "This role has the structural features that tend to work well for ADHD brains. Short feedback loops, some physical variety, and clear task completion points are all present.",
    advice: "The main thing to watch: even good-fit roles have friction points. Figure out which meetings drain you most and see if any can become async. Build transitions between tasks into your schedule rather than back-to-back blocks.",
  };
  if (pct >= 45) return {
    level: "Workable",
    color: "amber",
    summary: "This role has some ADHD-compatible features but also some friction points. Whether it works depends a lot on your specific manager, team, and whether you can negotiate how you work.",
    advice: "Before accepting: ask specifically about remote flexibility, async communication norms, and what a typical week looks like at the task level, not the job description level. The job description and the day-to-day are often different things.",
  };
  return {
    level: "High friction",
    color: "rose",
    summary: "This role has several features that tend to create sustained difficulty for ADHD brains. That doesn't mean it's impossible, but you'd be working against the structure rather than with it.",
    advice: "If this is a role you want or need: identify the two or three most draining features and see if any are negotiable. Rigid schedules, open offices, and vague deadlines are the three most common deal-breakers. One of those being flexible can change the whole picture.",
  };
}

export default function ADHDJobFitPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => { document.title = "ADHD Job Fit Checker - Is This Role Right for Your Brain? | ClearDesk"; }, []);

  const allAnswered = QUESTIONS.every(q => answers[q.id] !== undefined);
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = submitted ? getResult(score) : null;
  const pct = Math.round((score / (QUESTIONS.length * 5)) * 100);

  return (
    <>
      <div className="fit-page">
        <div className="eyebrow eyebrow-rose">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#B85C5C" />
          </svg>
          Work tool
        </div>
        <h1 className="fit-title">ADHD job fit checker</h1>
        <p className="fit-desc">
          Eight questions about a role. Find out whether the structure, sensory environment, and
          pace are likely to work with your brain or quietly drain it.
        </p>

        {!submitted ? (
          <>
            <div className="fit-jobtitle-wrap">
              <label className="input-label" htmlFor="jobTitle">
                Role you are evaluating (optional)
              </label>
              <input
                id="jobTitle"
                className="fit-jobtitle-input"
                type="text"
                placeholder="e.g. Senior Account Manager at Acme Co"
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
              />
            </div>

            <div className="fit-questions">
              {QUESTIONS.map((q, qi) => (
                <div key={q.id} className="fit-question">
                  <p className="fit-q-num">Question {qi + 1} of {QUESTIONS.length}</p>
                  <p className="fit-q-text">{q.text}</p>
                  <div className="fit-options">
                    {q.options.map(opt => (
                      <button
                        key={opt.label}
                        className={`fit-option${answers[q.id] === opt.value && answers[q.id] !== undefined && Object.keys(answers).indexOf(q.id) >= 0 ? " selected" : ""}`}
                        onClick={() => setAnswers(a => ({ ...a, [q.id]: opt.value }))}
                        style={{
                          background: answers[q.id] === opt.value ? "var(--ink)" : "",
                          color: answers[q.id] === opt.value ? "var(--cream)" : "",
                          borderColor: answers[q.id] === opt.value ? "var(--ink)" : "",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="fit-footer">
              <span className="fit-progress">
                {Object.keys(answers).length} of {QUESTIONS.length} answered
              </span>
              <button
                className="btn-primary"
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                style={{ opacity: allAnswered ? 1 : 0.4 }}
              >
                See my result
                <span className="icon-wrap" aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : (
          <div className="fit-result" aria-live="polite">
            {jobTitle && <p className="fit-result-role">{jobTitle}</p>}

            <div className={`fit-result-badge fit-badge-${result!.color}`}>
              {result!.level}
            </div>

            <div className="fit-score-wrap">
              <div className="fit-score-bar-bg">
                <div
                  className={`fit-score-bar fit-bar-${result!.color}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="fit-score-label">{pct}% compatibility score</span>
            </div>

            <div className="fit-result-card">
              <p className="fit-result-summary">{result!.summary}</p>
            </div>

            <div className="fit-advice-card">
              <p className="fit-advice-label">What to do with this</p>
              <p className="fit-advice-text">{result!.advice}</p>
            </div>

            <div className="fit-breakdown">
              <p className="fit-breakdown-label">Your answers</p>
              {QUESTIONS.map(q => {
                const chosen = q.options.find(o => o.value === answers[q.id]);
                const val = answers[q.id];
                return (
                  <div key={q.id} className="fit-breakdown-row">
                    <span className="fit-breakdown-q">{q.text}</span>
                    <span className={`fit-breakdown-score fit-score-${val >= 4 ? "good" : val >= 3 ? "mid" : "low"}`}>
                      {chosen?.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="fit-actions">
              <button className="btn-ghost" onClick={() => { setSubmitted(false); setAnswers({}); }}>
                Start over
              </button>
              <Link href="/articles/adhd-friendly-jobs" className="btn-primary">
                Read: ADHD-friendly jobs
                <span className="icon-wrap" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>What makes a job ADHD-compatible</h2>
        <p>
          The job title matters less than the structural features. A bad-fit title in a good-fit
          environment often works better than a good-fit title in a bad-fit environment. What
          to look for: short feedback loops, visible task completion, some physical variety, and
          control over interruptions.
        </p>
        <h3>The three biggest friction points</h3>
        <p>
          Open offices are consistently the most cited problem. Not just noise but visual
          movement and the social obligation to seem available. Private space or remote work
          changes the picture significantly.
        </p>
        <p>
          Vague deadlines are second. When work can always be done more, ADHD brains struggle
          to know when to stop. Roles with clear deliverables and natural stopping points work
          better than roles where the inbox is always full.
        </p>
        <p>
          Rigid repetition is third. The same task sequence every day without variation is a
          reliable way to kill engagement. Some novelty is not a preference. For ADHD brains
          it is closer to a functional requirement.
        </p>
      </article>
    </>
  );
}
