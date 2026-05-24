import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Why the 2-Minute Rule Actually Works for ADHD Brains | ClearDesk",
  description: "The 2-minute rule shows up in every productivity system. Most ADHD brains ignore it. Here's why it actually works when bigger systems fall apart.",
  alternates: { canonical: "https://cleardesk.co/articles/two-minute-rule" },
};

const meta = {
  category: "Focus",
  title: "Why the 2-minute rule clicks for ADHD brains when nothing else does",
  description: "The 2-minute rule shows up in every productivity system. Most ADHD brains ignore it. Here's why it works when bigger systems don't.",
  readTime: "5 min read",
  slug: "two-minute-rule",
};

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        The 2-minute rule is not a new idea. David Allen put it in Getting Things Done in 2001.
        If something takes less than two minutes, do it now instead of scheduling it. Simple.
        Most people with ADHD read it, think okay, and move on to a more complicated system.
      </p>
      <p>
        The posts that keep surfacing in ADHD communities suggest something different though. For
        a specific subset of ADHD brains, the 2-minute rule is the only thing that has ever
        reliably cut through task paralysis. Not the full GTD system. Just that one rule.
      </p>
      <p>
        It is worth understanding why, because it is not the reason most people assume.
      </p>

      <h2>The real problem is not the task. It is the decision.</h2>
      <p>
        When you are staring at something you need to do and cannot start, most people assume the
        problem is motivation. Or energy. Or some character flaw adjacent to laziness. It is
        usually none of those things.
      </p>
      <p>
        The problem is that your brain is running a cost-benefit calculation it cannot finish.
        How long will this actually take? What do I need to do first? What if I start and
        something interrupts me? Is this even the right time? That loop runs until something
        external breaks it, or until the deadline gets close enough to force the issue.
      </p>
      <p>
        The 2-minute rule bypasses the loop by making the decision trivially small. If it takes
        less than two minutes, the question of when to do it disappears. There is no scheduling
        to do, no task manager to update, no energy to conserve. The overhead of deciding is
        larger than the task itself, so you just do it.
      </p>

      <h2>Why it works when bigger systems don't</h2>
      <p>
        Elaborate productivity systems have a specific failure mode with ADHD. They require
        consistent maintenance. You have to keep updating the system for the system to work. But
        consistent maintenance is exactly what ADHD makes hard. So you use the system intensely
        for two weeks, fall behind on maintenance, and then avoid the system because it no longer
        reflects reality, which makes the backlog worse.
      </p>
      <p>
        The 2-minute rule has no maintenance. You do not track anything. There is no inbox to
        process or list to review. You see a thing, you assess whether it takes less than two
        minutes, you either do it or you don't. The system lives in your head, which means it
        travels with you and doesn't get stale.
      </p>

      <h2>How ADHD brains actually use it</h2>
      <p>
        The posts that generated the most discussion weren't about using the rule as intended.
        They were about a slightly modified version: using the two-minute question as a way to
        start tasks that take much longer.
      </p>
      <p>
        The logic is: just do the first two minutes. Not the whole task. Open the document.
        Write one sentence. Find the phone number. Take one thing off the pile. The rest of the
        task doesn't have to happen right now. But starting something is fundamentally different
        from not having started it, and the first two minutes often pull the rest with them.
      </p>
      <p>
        This is not what Allen intended, but it is what actually works for a lot of people.
        The rule becomes less about task management and more about initiation. Getting the
        engine to turn over.
      </p>

      <h2>Where it falls apart</h2>
      <p>
        It doesn't work when you are in a full shutdown. When executive function is genuinely
        offline, two minutes feels as impossible as two hours. Pushing the rule on those days
        just adds guilt to an already bad situation.
      </p>
      <p>
        It also doesn't help with tasks that don't have a clear starting point. If you're not
        sure what the first step is, the two-minute question can't get traction. That's a
        different problem: task decomposition, which is its own thing. The task unkicker on this
        site is built specifically for that situation.
      </p>
      <p>
        But on ordinary days, when things are piling up and nothing is getting done, the
        two-minute question is worth running through the pile. Some of it will shrink immediately.
        Some of it will at least get started. The rest can wait.
      </p>
    </ArticleLayout>
  );
}
