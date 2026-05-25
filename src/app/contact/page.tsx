"use client";
import { useState } from "react";

const REASONS = [
  { key: "bug", title: "Bug report", desc: "Something is not working right" },
  { key: "idea", title: "Tool idea", desc: "I have a suggestion" },
  { key: "content", title: "Article feedback", desc: "Something is wrong or missing" },
  { key: "other", title: "Something else", desc: "Just want to say hi" },
];

export default function ContactPage() {
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email.trim() || !msg.trim()) { setError("Please fill in both fields."); return; }
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xojrrrzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, message: msg, reason }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Try emailing us directly.");
      }
    } catch {
      setError("Could not send. Check your connection and try again.");
    }
    setSending(false);
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
                placeholder="Tell us what is on your mind..."
              />
            </div>
            {error && (
              <p style={{ fontSize: "0.82rem", color: "var(--rose)", marginBottom: "0.75rem" }}>
                {error}
              </p>
            )}
            <button
              className="btn-submit"
              onClick={handleSubmit}
              disabled={sending}
              style={{ opacity: sending ? 0.6 : 1 }}
            >
              {sending ? "Sending..." : "Send message"}
            </button>
          </>
        ) : (
          <div className="success-msg show">
            <div className="success-icon" aria-hidden="true">✓</div>
            <div className="success-title">Got it, thank you</div>
            <p className="success-text">
              We will get back to you if a reply makes sense. Either way, it has been read.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
