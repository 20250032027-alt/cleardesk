"use client";
import { useState } from "react";
import type { Metadata } from "next";

const REASONS = [
  { key: "bug", title: "Bug report", desc: "Something isn't working right" },
  { key: "idea", title: "Tool idea", desc: "I have a suggestion" },
  { key: "content", title: "Article feedback", desc: "Something's wrong or missing" },
  { key: "other", title: "Something else", desc: "Just want to say hi" },
];

export default function ContactPage() {
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !msg.trim()) { alert("Please fill in both fields."); return; }
    // In production: connect to Formspree or Netlify Forms
    setSent(true);
  };

  return (
    <main className="contact-page">
      <h1>Get in touch</h1>
      <p className="contact-lead">
        Found something broken? Have an idea for a tool? Just want to say something? We read
        everything, even if replies take a while.
      </p>

      <div className="reasons" role="group" aria-label="Reason for contact">
        {REASONS.map((r) => (
          <div
            key={r.key}
            className={`reason-chip${reason === r.key ? " active" : ""}`}
            tabIndex={0}
            role="button"
            aria-pressed={reason === r.key}
            onClick={() => setReason(r.key)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setReason(r.key); }}
          >
            <div className="reason-chip-title">{r.title}</div>
            <div className="reason-chip-desc">{r.desc}</div>
          </div>
        ))}
      </div>

      <div className="form-card">
        {!sent ? (
          <>
            <div className="field">
              <label htmlFor="contactEmail">Your email</label>
              <input
                type="email"
                id="contactEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="contactMsg">Message</label>
              <textarea
                id="contactMsg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button className="btn-submit" onClick={handleSubmit}>Send message</button>
          </>
        ) : (
          <div className="success-msg show">
            <div className="success-icon" aria-hidden="true">✓</div>
            <div className="success-title">Got it, thank you</div>
            <p className="success-text">
              We'll get back to you if a reply makes sense. Either way, it's been read.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
