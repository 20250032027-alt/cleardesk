import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Email Paralysis With ADHD: What Actually Helps | ClearDesk",
  description: "Not unsubscribe from things. Real strategies from people who have had 4,000 unread messages and found ways out.",
  alternates: { canonical: "https://cleardesk.co/articles/email-paralysis" },
};

const meta = {
  category: "Daily life",
  title: "Email paralysis with ADHD: strategies that go past the obvious",
  description: "Not unsubscribe from things. Real approaches from people who have had 4,000 unread messages and found ways to stop dreading their inbox.",
  readTime: "6 min read",
  slug: "email-paralysis",
};

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        The inbox is one of those things that can be fine for years and then suddenly isn't.
        You miss a few, then a few more, and then the number is large enough that opening it
        feels like a physical threat. You know there are things in there that matter. You also
        know you cannot deal with all of it right now. So you don't deal with any of it.
      </p>
      <p>
        The standard advice is to unsubscribe from newsletters, use folders, do inbox zero.
        That advice assumes the problem is volume. For a lot of ADHD brains the problem is not
        volume. It is that every unread message is a decision that hasn't been made yet, and
        making decisions takes more out of you than it takes out of other people.
      </p>

      <h2>Why email specifically is hard</h2>
      <p>
        Email asks you to hold context across time. You read something, you need to do something
        about it, but not right now, so you leave it marked as a reminder. Except marking
        something as a reminder requires trusting your future self to come back to it, and ADHD
        makes that trust structurally unreliable.
      </p>
      <p>
        The result is an inbox that functions as an anxiety object more than a communication
        tool. You cannot fully close it in your head because you know things are in there. You
        also cannot bring yourself to open it because you know things are in there.
      </p>

      <h2>What actually helps</h2>

      <h3>The nuclear option: declare bankruptcy</h3>
      <p>
        Select all, archive. Every single unread email gets moved out of the inbox without being
        read. This sounds irresponsible. Sometimes important things get buried. But for a lot of
        people with ADHD, the accumulated weight of thousands of unread emails is actively
        preventing them from using email at all, which is worse.
      </p>
      <p>
        The things that actually mattered will resurface. People will follow up. Deadlines will
        make themselves known through other channels. The inbox is not the only place information
        lives, even if it feels that way.
      </p>
      <p>
        This is a one-time reset, not a strategy. What you do after the reset matters.
      </p>

      <h3>Two-window processing</h3>
      <p>
        Open email twice a day, at specific times you decide in advance. Not in the morning
        before you start work. Not last thing at night. Pick two times that are not the most
        cognitively demanding parts of your day. During those windows, respond to things that
        take under two minutes. Everything else gets deferred to a specific time you set then.
      </p>
      <p>
        The structure is less about efficiency and more about containment. Email stops being
        something that can interrupt any moment and becomes something that happens at known times.
        The anxiety doesn't go away completely but it gets bounded.
      </p>

      <h3>The body in the email trick</h3>
      <p>
        If you frequently send emails with no body because you forget to write it, or draft
        emails for days without sending them, try writing the body first. Don't fill in the To
        field until the email is ready to send. No subject line, no recipient. Just write what
        you need to say. Then address it. This removes the risk of accidental sends and makes
        the drafting feel less high-stakes.
      </p>

      <h3>One sentence replies</h3>
      <p>
        People with ADHD often have a backlog of emails they haven't responded to because they
        feel like they need to write a proper response. The proper response never gets written.
        The email sits there for months.
      </p>
      <p>
        A one-sentence reply is better than no reply. Thanks, will get back to you. Got this,
        working on it. Seeing this, can we talk instead? The person on the other end generally
        prefers a short reply to silence. Sending the imperfect thing is almost always the right
        call.
      </p>

      <h2>Tools that help vs tools that don't</h2>
      <p>
        Sophisticated email clients with snooze, scheduling, and priority filtering sound useful
        in theory. In practice, they add configuration overhead that takes the same executive
        function you were trying to save. The simpler the setup, the more likely it actually
        gets used.
      </p>
      <p>
        What tends to work better: turning off email notifications entirely, setting up a rule
        that filters obvious newsletters automatically, and using a separate email address for
        anything sign-up related so your main inbox only gets things that are actually addressed
        to you. Basic, but basic is what gets maintained.
      </p>
    </ArticleLayout>
  );
}
