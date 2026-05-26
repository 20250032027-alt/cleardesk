import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClearDesk - ADHD Tools and Guides That Actually Help",
  description:
    "Practical tools and honest guides for ADHD at work, at home, and in your head. Written from inside the experience, not from a textbook.",
  alternates: { canonical: "https://cleardesk.co" },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
            {/* Crisis banner - serves user type 1 */}
      <div className="crisis-banner">
        <span className="crisis-banner-text">Feeling overwhelmed right now?</span>
        <a href="/overwhelmed" className="crisis-banner-link">Get immediate help →</a>
      </div>
<header className="hero">
        <div className="eyebrow">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#4A7C59" />
          </svg>
          Built from experience
        </div>
        <h1 className="hero-headline">
          Finally, a site that gets
          <br />
          how your <em>brain actually works</em>
        </h1>
        <p className="hero-sub">
          Practical tools and honest guides for ADHD at work, at home, and in your head.
          Written from inside the experience, not from a textbook.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#tools">
            Try a free tool
            <span className="icon-wrap" aria-hidden="true">↗</span>
          </a>
          <a className="btn-ghost" href="#articles">
            Read the guides
          </a>
        </div>

        <div className="hero-cards" role="list">
          <a className="hero-card" href="/body-double-timer" role="listitem">
            <div className="hero-card-icon" style={{ background: "var(--sage-light)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9.5" stroke="#4A7C59" strokeWidth="1.5" />
                <path d="M12 7v5l3 3" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="hero-card-title">Body double timer</div>
            <div className="hero-card-desc">A quiet presence to work alongside. ADHD-friendly intervals.</div>
          </a>
          <a className="hero-card" href="/meds-tracker" role="listitem">
            <div className="hero-card-icon" style={{ background: "var(--amber-light)" }}>
              <img src="/pill-amber.png" width={20} height={20} alt="pill icon" style={{ objectFit: "contain" }} />
            </div>
            <div className="hero-card-title">Meds tracker</div>
            <div className="hero-card-desc">Did I take them? One tap. No account needed.</div>
          </a>
          <a className="hero-card" href="/task-unkicker" role="listitem">
            <div className="hero-card-icon" style={{ background: "var(--teal-light)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="#2A7F7F" strokeWidth="1.5" />
                <path d="M8 11V7a4 4 0 0 1 8 0" stroke="#2A7F7F" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1.5" fill="#2A7F7F" />
              </svg>
            </div>
            <div className="hero-card-title">Task unkicker</div>
            <div className="hero-card-desc">Stuck on something? Break it into pieces small enough to start.</div>
          </a>
          <a className="hero-card" href="/adhd-job-fit" role="listitem">
            <div className="hero-card-icon" style={{ background: "var(--rose-light)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="#B85C5C" strokeWidth="1.5"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#B85C5C" strokeWidth="1.5"/>
                <path d="M12 12v4M10 14h4" stroke="#B85C5C" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="hero-card-title">Job fit checker</div>
            <div className="hero-card-desc">Eight questions. Find out if a role works with your brain.</div>
          </a>
          <a className="hero-card" href="/medication-comparison" role="listitem">
            <div className="hero-card-icon" style={{ background: "var(--amber-light)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" stroke="#C4771B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero-card-title">Medication compare</div>
            <div className="hero-card-desc">What people actually report about common ADHD meds.</div>
          </a>
        </div>
      </header>

      {/* ── TOOLS ── */}
      <section className="tools-section" id="tools" aria-labelledby="tools-heading">
        <div className="section-inner">
          <div className="tools-header">
            <div>
              <p className="section-label">Free tools</p>
              <h2 className="section-headline" id="tools-heading">
                Things that help
                <br />
                right now
              </h2>
            </div>
            <p className="section-sub">No login. No premium tier. Just open it and use it.</p>
          </div>
          <div className="tools-grid reveal">
            <a className="tool-card sage" href="/body-double-timer">
              <span className="tool-tag sage">Focus</span>
              <div className="tool-title">Body double timer</div>
              <p className="tool-desc">
                A quiet presence to work alongside. You pick the interval length. Pomodoro fans can do
                25 minutes. Everyone else can do whatever actually works for them.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
            <a className="tool-card amber" href="/meds-tracker">
              <span className="tool-tag amber">Daily</span>
              <div className="tool-title">Did I take my meds?</div>
              <p className="tool-desc">
                One tap. Keeps a streak. Works offline. No account, no permission to send notifications
                you didn't ask for. Just a straight answer to the question.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
            <a className="tool-card teal" href="/task-unkicker">
              <span className="tool-tag teal">Tasks</span>
              <div className="tool-title">Task unkicker</div>
              <p className="tool-desc">
                Type the task you've been avoiding. It gets broken into the smallest possible first
                step. Small enough that your brain can't find a reason to refuse it.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
            <a className="tool-card rose" href="/adhd-job-fit">
              <span className="tool-tag rose">Work</span>
              <div className="tool-title">ADHD job fit checker</div>
              <p className="tool-desc">
                Eight questions about a role. Find out whether the structure, sensory environment, and
                pace are likely to work with your brain or just quietly drain it.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
            <a className="tool-card neutral" href="/medication-comparison">
              <span className="tool-tag neutral">Meds</span>
              <div className="tool-title">Medication comparison</div>
              <p className="tool-desc">
                What people actually report about Adderall, Vyvanse, Ritalin, and Strattera. No
                clinical language. Just real patterns from real posts, sorted by symptom type.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
            <a className="tool-card teal" href="/screen-break">
              <span className="tool-tag teal">Focus</span>
              <div className="tool-title">Screen break timer</div>
              <p className="tool-desc">
                Put the phone down for a set time. A doomscroll counter to track how often you catch yourself. No judgment.
              </p>
              <div className="tool-arrow">Open tool <span aria-hidden="true">→</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="articles-section" id="articles" aria-labelledby="articles-heading">
        <div className="section-inner reveal">
          <p className="section-label">Guides and articles</p>
          <h2 className="section-headline" id="articles-heading">
            Written from inside
            <br />
            the experience
          </h2>
          <div className="articles-grid">
            {[
              { cat: "Work", title: "ADHD-friendly jobs: what people actually switched to", excerpt: "We went through hundreds of job-related posts looking for patterns. Here are the roles people with ADHD say they actually thrive in, and the reasons why they work.", time: "8 min read", href: "/articles/adhd-friendly-jobs" },
              { cat: "Focus", title: "Why the 2-minute rule clicks for ADHD brains when nothing else does", excerpt: "A post explaining it got 584 upvotes for a reason. Here's the full breakdown of why this particular trick cuts through task paralysis when bigger systems fall apart.", time: "5 min read", href: "/articles/two-minute-rule" },
              { cat: "Office", title: "Being AuDHD in an open office: what actually helps", excerpt: "Sensory overload, constant interruption, hot-desking. This covers what people who actually deal with it say helps, without the headphones advice.", time: "10 min read", href: "/articles/audHD-open-office" },
              { cat: "Daily life", title: "Email paralysis with ADHD: strategies that go past the obvious", excerpt: "Not just unsubscribe from things. Real approaches from people who have had 4,000 unread messages and found ways to stop dreading their inbox.", time: "6 min read", href: "/articles/email-paralysis" },
              { cat: "Meds", title: "Vyvanse vs Adderall: what people actually say after switching", excerpt: "No clinical comparisons. Just the honest patterns from people who have tried both, sorted by what they were trying to fix and how it went.", time: "12 min read", href: "/articles/vyvanse-vs-adderall" },
              { cat: "Relationships", title: "ADHD memory and relationships: what the clinical articles miss", excerpt: "A post about memory problems nearly costing someone their marriage got 889 upvotes. The comments said more than most research papers on the topic.", time: "9 min read", href: "/articles/adhd-memory-relationships" },
              { cat: "Daily life", title: "Why sleep is so hard with ADHD and what actually helps", excerpt: "ADHD sleep problems are different from regular insomnia. Here is why, and what people with ADHD actually report helping.", time: "7 min read", href: "/articles/adhd-sleep" },
              { cat: "Daily life", title: "Doomscrolling with ADHD: why it hits different and what helps", excerpt: "The phone loop is harder to break when your brain is wired for novelty and variable rewards.", time: "6 min read", href: "/articles/doomscrolling" },
              { cat: "Daily life", title: "Exercise and ADHD: why starting is the whole problem", excerpt: "Exercise is one of the most effective non-medication interventions for ADHD. Getting started is a different question.", time: "7 min read", href: "/articles/adhd-exercise" },
              { cat: "Daily life", title: "Eating with ADHD when you can not make yourself cook", excerpt: "Appetite suppression, executive dysfunction around cooking, and forgetting to eat entirely. What people actually do.", time: "6 min read", href: "/articles/adhd-eating" },
            ].map((a: { cat: string; title: string; excerpt: string; time: string; href: string }) => (
              <a className="article-item" href={a.href} key={a.title}>
                <div className="article-category">{a.cat}</div>
                <div className="article-title">{a.title}</div>
                <p className="article-excerpt">{a.excerpt}</p>
                <div className="article-footer">
                  <span className="article-read">{a.time}</span>
                  <span className="article-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section" id="about" aria-labelledby="how-heading">
        <div className="section-inner reveal">
          <p className="section-label">How ClearDesk works</p>
          <h2 className="section-headline" id="how-heading">
            Made from real questions,
            <br />
            not assumptions
          </h2>
          <p className="section-sub">
            Everything here started as something someone typed at 2am when they couldn't sleep and
            needed an actual answer.
          </p>
          <div className="how-steps">
            {[
              { n: "01", t: "We read a lot of ADHD posts", d: "Real questions, real frustrations, the exact language people use. Not clinical summaries. The stuff people type when they're not performing okay-ness." },
              { n: "02", t: "We find the gaps nobody covers", d: "The recurring pain points with no useful answer on the first page of Google. Those are the articles and tools we build." },
              { n: "03", t: "We write like a person, not a pamphlet", d: "No it's important to consult a professional. Just honest, specific, useful content that sounds like it was written by someone who gets it. Because it was." },
            ].map((s) => (
              <div className="how-step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.t}</div>
                <p className="step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <section className="quote-section" aria-labelledby="quotes-heading">
        <div className="section-inner reveal">
          <p className="section-label">From the community</p>
          <h2 className="section-headline" id="quotes-heading">
            The questions that
            <br />
            started all of this
          </h2>
          <div className="quote-grid">
            {[
              { q: "These memory issues are going to cost me my marriage.", src: "r/ADHD, 889 upvotes" },
              { q: "I only function for other people. Never for myself.", src: "r/ADHD, 3,958 upvotes" },
              { q: "How the hell are you supposed to live life with bad memory?", src: "r/ADHD, 89 upvotes" },
            ].map((c) => (
              <div className="quote-card" key={c.src}>
                <p className="quote-text">&ldquo;{c.q}&rdquo;</p>
                <div className="quote-source">
                  <span className="quote-dot" aria-hidden="true" />
                  {c.src}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section" aria-labelledby="newsletter-heading">
        <div className="section-inner">
          <div className="newsletter-box reveal">
            <p className="section-label" style={{ textAlign: "center" }}>Stay in the loop</p>
            <h2 className="section-headline" id="newsletter-heading">
              New tools and guides,
              <br />
              no noise
            </h2>
            <p className="section-sub" style={{ margin: "0 auto 2rem" }}>
              One email when something new goes up. No weekly digests, no tips you didn't ask for.
            </p>
            <div className="email-form" role="form" aria-label="Newsletter signup">
              <input className="email-input" type="email" placeholder="your@email.com" aria-label="Email address" />
              <button className="btn-primary" type="submit">
                Notify me
                <span className="icon-wrap" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const el = entry.target;
                  const children = el.querySelectorAll('.tool-card,.article-item,.how-step,.quote-card,.hero-card');
                  if (children.length) {
                    children.forEach((child, idx) => {
                      child.style.opacity = '0';
                      child.style.transform = 'translateY(18px)';
                      child.style.transition = 'opacity 0.6s cubic-bezier(0.22,1,0.36,1) ' + (idx*80) + 'ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ' + (idx*80) + 'ms';
                      requestAnimationFrame(() => setTimeout(() => { child.style.opacity='1'; child.style.transform='translateY(0)'; }, 10));
                    });
                  }
                  el.classList.add('visible');
                  observer.unobserve(el);
                }
              });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          `,
        }}
      />
    </>
  );
}
