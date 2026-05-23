import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - ClearDesk",
  description: "ClearDesk is a small collection of free tools and honest guides for people with ADHD. Built from real experience, not a textbook.",
  alternates: { canonical: "https://cleardesk.co/about" },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="page-eyebrow eyebrow">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <circle cx="4" cy="4" r="3.5" fill="#4A7C59" />
        </svg>
        About
      </div>

      <h1 className="about-headline">
        Built from experience,
        <br />
        not a textbook
      </h1>

      <p className="about-lead">
        ClearDesk is a small collection of free tools and honest guides for people with ADHD. It
        started as a question: why does every ADHD resource online sound like it was written by
        someone who read about ADHD but never had it? We wanted to make something that sounds like
        the inside of the experience, not the outside.
      </p>

      <h2>What this site is</h2>
      <p>
        A set of practical tools you can open and use without creating an account, and a growing
        library of guides written around the specific questions people actually type into search
        engines at inconvenient hours.
      </p>
      <p>
        The tools are free. There are no premium tiers hiding the useful parts. The articles are
        written to be genuinely helpful rather than long enough to rank. We use ads to keep the
        lights on, but nothing is paywalled and nothing requires signing up.
      </p>

      <h2>How the content gets made</h2>
      <p>
        A lot of it starts with what people are actually asking. We looked through a large number of
        posts from ADHD communities and found the questions that kept coming up with no good answer
        on the first page of Google. Those gaps became the articles and tools you see here.
      </p>
      <p>
        That means the vocabulary, the framing, and the problems being addressed all come from
        people talking honestly about their own experience. Not from clinical literature summarized
        for general audiences.
      </p>

      <div className="values-grid" role="list">
        {[
          { icon: "🔓", title: "Always free to use", desc: "Every tool on this site works without an account, a subscription, or any kind of sign-up." },
          { icon: "🧠", title: "Written from inside", desc: "Content is built around what people with ADHD actually say, not clinical summaries of what they experience." },
          { icon: "📵", title: "No dark patterns", desc: "No pop-ups asking you to subscribe. No notifications you didn't ask for. No fake urgency." },
          { icon: "🔒", title: "Your data stays local", desc: "Tools that track anything store data in your browser only. Nothing is sent to a server." },
        ].map((v) => (
          <div className="value-card" role="listitem" key={v.title}>
            <div className="value-icon" aria-hidden="true">{v.icon}</div>
            <div className="value-title">{v.title}</div>
            <p className="value-desc">{v.desc}</p>
          </div>
        ))}
      </div>

      <h2>What this site is not</h2>
      <p>
        This is not a medical resource. Nothing here is a substitute for a diagnosis, a
        prescription, or a conversation with a psychiatrist. The medication articles describe what
        people report, not what a doctor would recommend. The tools are productivity aids, not
        clinical interventions.
      </p>
      <p>
        If you think you might have ADHD and haven't spoken to anyone about it yet, that's worth
        doing. This site can keep you company in the meantime.
      </p>

      <div className="contact-box">
        <h2>Get in touch</h2>
        <p>Found something wrong? Have a tool idea? Just want to say something? We read everything.</p>
        <a className="contact-link" href="/contact">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 3h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Contact us
        </a>
      </div>

      <div className="disclaimer">
        <p>
          ClearDesk is an independent website. We are not affiliated with any pharmaceutical
          company, medical provider, or ADHD organization. Content on this site is for
          informational purposes only and does not constitute medical advice.
        </p>
      </div>
    </main>
  );
}
