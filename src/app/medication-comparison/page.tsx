"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const MEDS = [
  {
    id: "adderall-xr",
    name: "Adderall XR",
    type: "Amphetamine (mixed salts)",
    duration: "10-12 hours",
    onset: "30-60 min",
    generic: true,
    schedule: "Schedule II",
    tags: ["Long-acting", "Generic available", "Stimulant"],
    color: "teal",
    reports: {
      focus: 4.2,
      crash: 3.1,
      appetite: 2.8,
      sleep: 2.9,
      mood: 3.6,
      anxiety: 3.0,
    },
    summary: "One of the most prescribed. Works clearly and quickly for most people. The crash when it wears off and the appetite suppression are the most common complaints. Generic versions vary noticeably between brands.",
    bestFor: ["Clear onset/offset for predictable scheduling", "People who want a generic option", "When flexibility in timing matters"],
    watchOut: ["Late-afternoon rebound anxiety or irritability", "Noticeable appetite suppression during the day", "Sleep disruption if taken after noon"],
  },
  {
    id: "vyvanse",
    name: "Vyvanse",
    type: "Lisdexamfetamine",
    duration: "12-14 hours",
    onset: "1-2 hours",
    generic: false,
    schedule: "Schedule II",
    tags: ["Long-acting", "Smooth onset", "Stimulant"],
    color: "sage",
    reports: {
      focus: 4.0,
      crash: 4.2,
      appetite: 2.9,
      sleep: 3.1,
      mood: 3.9,
      anxiety: 3.4,
    },
    summary: "Consistently described as smoother than Adderall. Slower onset, gentler peak, gradual wear-off. People who found Adderall too intense often prefer this. More expensive, no generic in most markets.",
    bestFor: ["People who found Adderall too sharp or crash-heavy", "Consistent all-day coverage without peaks", "Better tolerated with emotional dysregulation"],
    watchOut: ["Slower morning onset can be frustrating early", "No generic means significantly higher cost", "Longer duration means a difficult day if dose is wrong"],
  },
  {
    id: "ritalin-la",
    name: "Ritalin LA",
    type: "Methylphenidate",
    duration: "6-10 hours",
    onset: "20-40 min",
    generic: true,
    schedule: "Schedule II",
    tags: ["Medium-acting", "Different mechanism", "Stimulant"],
    color: "amber",
    reports: {
      focus: 3.8,
      crash: 3.3,
      appetite: 3.1,
      sleep: 3.4,
      mood: 3.4,
      anxiety: 3.5,
    },
    summary: "Methylphenidate works differently from amphetamines at the neurochemical level. Some people who don't respond well to Adderall or Vyvanse do well on Ritalin and vice versa. Generally considered milder.",
    bestFor: ["People who don't respond well to amphetamines", "Shorter coverage needed", "Those with more anxiety on amphetamines"],
    watchOut: ["Shorter duration means more frequent dosing decisions", "Less consistent community reports than amphetamines", "Rebound can be more noticeable"],
  },
  {
    id: "strattera",
    name: "Strattera",
    type: "Atomoxetine (non-stimulant)",
    duration: "24 hours",
    onset: "2-4 weeks",
    generic: true,
    schedule: "Not scheduled",
    tags: ["Non-stimulant", "Full-day", "SNRI"],
    color: "rose",
    reports: {
      focus: 3.2,
      crash: 4.8,
      appetite: 3.8,
      sleep: 4.1,
      mood: 3.5,
      anxiety: 3.8,
    },
    summary: "Non-stimulant that builds up over weeks. No crash, no Schedule II classification, can be prescribed more freely. Takes much longer to feel effects. Community reports are more mixed on focus effectiveness but strong on consistency.",
    bestFor: ["People who cannot take stimulants", "Anxiety that worsens on stimulants", "When steady 24-hour coverage without highs/lows matters"],
    watchOut: ["Takes 2-4 weeks to feel any effect at all", "Lower ceiling on focus intensity vs stimulants", "Nausea is common early in treatment"],
  },
  {
    id: "concerta",
    name: "Concerta",
    type: "Methylphenidate (OROS)",
    duration: "10-12 hours",
    onset: "30-60 min",
    generic: false,
    schedule: "Schedule II",
    tags: ["Long-acting", "Smooth delivery", "Stimulant"],
    color: "teal",
    reports: {
      focus: 3.9,
      crash: 3.9,
      appetite: 3.2,
      sleep: 3.3,
      mood: 3.6,
      anxiety: 3.6,
    },
    summary: "Uses a special delivery system (OROS) for more consistent methylphenidate release. Often described as smoother than regular Ritalin. Generic versions use different delivery mechanisms and are often reported as less effective.",
    bestFor: ["Smooth all-day methylphenidate coverage", "People who tried IR Ritalin and liked it but wanted longer coverage"],
    watchOut: ["Generic Concerta is often reported significantly less effective than brand", "The OROS tablet cannot be split or crushed"],
  },
];

const SYMPTOMS = [
  { id: "focus", label: "Focus and concentration", icon: "🎯" },
  { id: "crash", label: "Low crash/wear-off", icon: "📉" },
  { id: "appetite", label: "Appetite preservation", icon: "🍽️" },
  { id: "sleep", label: "Sleep quality", icon: "🌙" },
  { id: "mood", label: "Mood stability", icon: "💭" },
  { id: "anxiety", label: "Low anxiety impact", icon: "🌊" },
];

function ScoreBar({ value, color }: { value: number; color: string }) {
  const pct = (value / 5) * 100;
  return (
    <div className="med-score-bar-bg">
      <div
        className={`med-score-bar med-bar-${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function MedicationComparisonPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>(MEDS[0].id);
  const [filterSymptom, setFilterSymptom] = useState<string>("focus");

  useEffect(() => { document.title = "ADHD Medication Comparison - What People Actually Report | ClearDesk"; }, []);

  const activeMed = MEDS.find(m => m.id === activeTab)!;
  const sorted = [...MEDS].sort((a, b) =>
    (b.reports[filterSymptom as keyof typeof b.reports] || 0) -
    (a.reports[filterSymptom as keyof typeof a.reports] || 0)
  );

  return (
    <>
      <div className="med-page">
        <div className="eyebrow eyebrow-amber">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#C4771B" />
          </svg>
          Medication reference
        </div>
        <h1 className="med-title">Medication comparison</h1>
        <p className="med-desc">
          What people actually report about the most common ADHD medications. No clinical
          language. Ratings reflect community patterns, not medical recommendations.
        </p>

        <div className="med-disclaimer">
          <p>
            This is not medical advice. Talk to your prescriber before making any medication
            decisions. Responses vary significantly between individuals.
          </p>
        </div>

        {/* Sort by symptom */}
        <div className="med-filter-section">
          <p className="med-filter-label">Sort by what matters most to you</p>
          <div className="med-filter-row">
            {SYMPTOMS.map(s => (
              <button
                key={s.id}
                className={`med-filter-chip${filterSymptom === s.id ? " active" : ""}`}
                onClick={() => setFilterSymptom(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ranked overview */}
        <div className="med-ranked-list">
          {sorted.map((med, i) => (
            <button
              key={med.id}
              className={`med-ranked-item${activeTab === med.id ? " active" : ""}`}
              onClick={() => setActiveTab(med.id)}
            >
              <span className="med-rank">{i + 1}</span>
              <div className="med-ranked-info">
                <span className="med-ranked-name">{med.name}</span>
                <span className="med-ranked-type">{med.type}</span>
              </div>
              <div className="med-ranked-score-wrap">
                <ScoreBar value={med.reports[filterSymptom as keyof typeof med.reports]} color={med.color} />
                <span className="med-ranked-score-val">
                  {med.reports[filterSymptom as keyof typeof med.reports].toFixed(1)}/5
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className="med-detail-card" aria-live="polite">
          <div className="med-detail-header">
            <div>
              <h2 className="med-detail-name">{activeMed.name}</h2>
              <p className="med-detail-type">{activeMed.type}</p>
            </div>
            <div className="med-detail-tags">
              {activeMed.tags.map(t => (
                <span key={t} className={`med-tag med-tag-${activeMed.color}`}>{t}</span>
              ))}
            </div>
          </div>

          <div className="med-detail-meta">
            <div className="med-meta-item">
              <span className="med-meta-label">Duration</span>
              <span className="med-meta-val">{activeMed.duration}</span>
            </div>
            <div className="med-meta-item">
              <span className="med-meta-label">Onset</span>
              <span className="med-meta-val">{activeMed.onset}</span>
            </div>
            <div className="med-meta-item">
              <span className="med-meta-label">Generic</span>
              <span className="med-meta-val">{activeMed.generic ? "Available" : "Brand only"}</span>
            </div>
            <div className="med-meta-item">
              <span className="med-meta-label">Schedule</span>
              <span className="med-meta-val">{activeMed.schedule}</span>
            </div>
          </div>

          <p className="med-detail-summary">{activeMed.summary}</p>

          <div className="med-scores-grid">
            {SYMPTOMS.map(s => (
              <div key={s.id} className="med-score-row">
                <span className="med-score-label">{s.label}</span>
                <ScoreBar value={activeMed.reports[s.id as keyof typeof activeMed.reports]} color={activeMed.color} />
                <span className="med-score-num">
                  {activeMed.reports[s.id as keyof typeof activeMed.reports].toFixed(1)}
                </span>
              </div>
            ))}
          </div>

          <div className="med-detail-two-col">
            <div className="med-best-for">
              <p className="med-col-label">People say it works well for</p>
              <ul>
                {activeMed.bestFor.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="med-watch-out">
              <p className="med-col-label">Common complaints</p>
              <ul>
                {activeMed.watchOut.map(w => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <article className="article-section">
        <hr className="article-divider" />
        <h2>How to read these ratings</h2>
        <p>
          The numbers here are not from clinical trials. They reflect the patterns that show up
          when you read a large number of posts from people who have been on these medications.
          Someone saying their crash is bad reads as a lower crash score. Someone saying their
          sleep improved reads as a higher sleep score.
        </p>
        <p>
          Individual variation in response to ADHD medication is large. The most useful thing
          these ratings can do is point you toward questions worth asking your prescriber, not
          decisions to make independently.
        </p>
        <h3>What actually predicts your response</h3>
        <p>
          Genetics play a role. Some people metabolize amphetamines faster or slower, which
          changes duration and intensity in ways no standard dose chart accounts for. If a
          medication is working poorly at a dose that should work, this is worth discussing.
        </p>
        <p>
          Sleep, food, and hydration affect how stimulants feel in ways that are significant
          enough to change your entire experience of a dose. A lot of people who report a
          medication stopping working are actually describing a change in their lifestyle.
        </p>
        <Link href="/articles/vyvanse-vs-adderall" className="article-tool-link" style={{ display: "inline-block", marginTop: "1rem" }}>
          Read: Vyvanse vs Adderall in depth →
        </Link>
      </article>
    </>
  );
}
