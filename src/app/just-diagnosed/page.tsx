import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Just Got an ADHD Diagnosis? Start Here | ClearDesk",
  description: "A plain guide for people newly diagnosed with ADHD. What it means, what to expect from medication, what actually helps, and what to stop feeling guilty about.",
  alternates: { canonical: "https://cleardesk.co/just-diagnosed" },
};

export default function JustDiagnosedPage() {
  return (
    <main className="guide-page">
      <div className="guide-header">
        <div className="eyebrow">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <circle cx="4" cy="4" r="3.5" fill="#4A7C59" />
          </svg>
          Start here
        </div>
        <h1 className="guide-title">Just diagnosed. Now what?</h1>
        <p className="guide-intro">
          A plain guide for the first weeks after an ADHD diagnosis. No clinical
          distance. No "consult your doctor for everything." Just what is worth knowing.
        </p>
      </div>

      <nav className="guide-toc" aria-label="Contents">
        <p className="guide-toc-label">On this page</p>
        <ul>
          <li><a href="#what-it-means">What the diagnosis actually means</a></li>
          <li><a href="#grief">Why you might feel grief, not relief</a></li>
          <li><a href="#medication">What to expect from medication</a></li>
          <li><a href="#helps">What actually helps day to day</a></li>
          <li><a href="#stop">What to stop feeling guilty about</a></li>
          <li><a href="#tools">Tools to try right now</a></li>
        </ul>
      </nav>

      <div className="guide-body">

        <section id="what-it-means">
          <h2>What the diagnosis actually means</h2>
          <p>
            ADHD is a difference in how the brain regulates attention, impulse, and executive
            function. It is not about intelligence. It is not about effort. It is not about
            being too much or not enough of something.
          </p>
          <p>
            The attention part is misleading. Most people with ADHD can focus intensely on
            things that are interesting, novel, or urgent. The problem is not a lack of
            attention. It is inconsistent control over where attention goes. The brain fires
            at full capacity in some directions and cannot be aimed in others.
          </p>
          <p>
            Executive function is the set of skills that helps you start tasks, hold plans
            in working memory, regulate emotions, and transition between activities. These
            are the things that ADHD makes genuinely harder. Not impossible. Harder.
          </p>
          <div className="guide-callout">
            <p>
              A diagnosis is not an explanation for everything that has gone wrong. It is
              context for why certain things have been harder than they should have been.
              That is a useful distinction.
            </p>
          </div>
        </section>

        <section id="grief">
          <h2>Why you might feel grief, not relief</h2>
          <p>
            A lot of people expect a diagnosis to feel like relief. For some people it does.
            For many others the first feeling is grief. Sometimes immediate, sometimes weeks later.
          </p>
          <p>
            Grief about the years of being called lazy, disorganized, or not living up to
            potential. Grief about paths not taken, relationships damaged, opportunities
            missed. The diagnosis retroactively explains a lot of things, and some of those
            things are painful to look at directly.
          </p>
          <p>
            This is normal. It does not mean you are catastrophizing. It means you are
            processing something real. The people who describe adjusting well to a late
            diagnosis mostly did it by letting themselves feel that first rather than
            skipping to fixing mode immediately.
          </p>
        </section>

        <section id="medication">
          <h2>What to expect from medication</h2>
          <p>
            Medication works differently for everyone. The most accurate thing to say is that
            stimulant medication (Adderall, Vyvanse, Ritalin, Concerta) helps a lot of people
            with ADHD and does not help everyone. The only way to know is to try.
          </p>
          <p>
            What medication does not do: fix executive dysfunction entirely, make you
            organized, eliminate all symptoms, work the same way every day, work independently
            of sleep and food. What it often does do: lower the activation energy needed to
            start tasks, reduce the intensity of rejection sensitivity, make it easier to stay
            on something once you have started.
          </p>
          <p>
            The first dose is usually not the right dose. Most people adjust doses multiple
            times before finding something that works. This is expected and normal, not a
            sign that medication is not right for you.
          </p>
          <p>
            If you forget whether you took your medication, the meds tracker below is the
            simplest solution.
          </p>
        </section>

        <section id="helps">
          <h2>What actually helps day to day</h2>
          <p>
            The most consistently useful things are boring to read about and difficult to
            maintain. Sleep matters more than almost any other variable. Exercise has
            measurable effects on ADHD symptoms, particularly for focus and emotional
            regulation. Neither of these is a replacement for medication when medication is
            needed. Both make medication work better when it is used.
          </p>
          <p>
            External structure helps more than internal resolve. Timers work better than
            intentions. Written lists work better than mental ones. Accountability to another
            person works better than accountability to yourself. This is not a character flaw.
            It is how ADHD brains are wired.
          </p>
          <p>
            Body doubling works for a lot of people. Working near another person, even silently,
            provides external accountability that is difficult to generate internally. This is
            why libraries, coffee shops, and coworking spaces improve focus for many people
            with ADHD.
          </p>
          <div className="guide-callout">
            <p>
              The single most common mistake after a diagnosis is trying to build ten new
              systems at once. Pick one. Get it working. Add another.
            </p>
          </div>
        </section>

        <section id="stop">
          <h2>What to stop feeling guilty about</h2>
          <p>
            The things people with ADHD most commonly feel guilty about are almost entirely
            symptoms, not character failures.
          </p>
          <p>
            Forgetting things that matter to people you love. Starting many things and
            finishing few of them. Losing track of time. Being late despite trying not to
            be. Being messy despite wanting to be organized. Saying yes to things and then
            not doing them. Avoiding tasks until the deadline forces you. Struggling to
            feel consistently motivated by things you genuinely care about.
          </p>
          <p>
            These are not moral failures. They are executive function failures. The
            distinction matters because moral failures require character change and executive
            function failures require systems and sometimes medication.
          </p>
          <p>
            This does not mean nothing is your responsibility. It means you have been
            judging yourself by the wrong standard, which makes the self-judgment unhelpful
            as well as inaccurate.
          </p>
        </section>

        <section id="tools">
          <h2>Tools to try right now</h2>
          <p>These are the three most immediately useful things on this site for someone newly diagnosed.</p>
        </section>
      </div>

      <div className="guide-tools-grid">
        <Link href="/meds-tracker" className="guide-tool-card">
          <div className="guide-tool-icon" style={{ background: "var(--amber-light)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" stroke="#C4771B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="guide-tool-name">Meds tracker</div>
            <div className="guide-tool-desc">One tap. Did I take them today?</div>
          </div>
          <span className="guide-tool-arrow" aria-hidden="true">→</span>
        </Link>
        <Link href="/task-unkicker" className="guide-tool-card">
          <div className="guide-tool-icon" style={{ background: "var(--teal-light)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="#2A7F7F" strokeWidth="1.5"/>
              <path d="M8 11V7a4 4 0 0 1 8 0" stroke="#2A7F7F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="guide-tool-name">Task unkicker</div>
            <div className="guide-tool-desc">Break any stuck task into steps small enough to start</div>
          </div>
          <span className="guide-tool-arrow" aria-hidden="true">→</span>
        </Link>
        <Link href="/body-double-timer" className="guide-tool-card">
          <div className="guide-tool-icon" style={{ background: "var(--sage-light)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9.5" stroke="#4A7C59" strokeWidth="1.5"/>
              <path d="M12 7v5l3 3" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="guide-tool-name">Body double timer</div>
            <div className="guide-tool-desc">Work alongside a quiet presence. Your intervals.</div>
          </div>
          <span className="guide-tool-arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="guide-further">
        <p className="guide-further-label">Read next</p>
        <div className="guide-further-links">
          <Link href="/articles/adhd-friendly-jobs" className="guide-further-link">ADHD-friendly jobs: what people actually switched to</Link>
          <Link href="/articles/adhd-memory-relationships" className="guide-further-link">ADHD memory and relationships</Link>
          <Link href="/medication-comparison" className="guide-further-link">Medication comparison tool</Link>
        </div>
      </div>
    </main>
  );
}
