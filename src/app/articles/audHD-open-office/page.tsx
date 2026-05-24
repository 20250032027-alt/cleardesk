import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Being AuDHD in an Open Office: What Actually Helps | ClearDesk",
  description: "Sensory overload, constant interruption, hot-desking. What people who actually deal with it say helps, without the obvious advice.",
  alternates: { canonical: "https://cleardesk.co/articles/audHD-open-office" },
};

const meta = {
  category: "Office",
  title: "Being AuDHD in an open office: what actually helps",
  description: "Sensory overload, constant interruption, hot-desking. What people who actually deal with it say helps, without the headphones advice.",
  readTime: "10 min read",
  slug: "audHD-open-office",
};

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        AuDHD refers to people who are both autistic and have ADHD. The combination is more
        common than most people realize and creates some specific workplace challenges that are
        different from either condition alone. The ADHD creates a pull toward stimulation and
        novelty. The autism creates a need for predictability and sensory control. Open offices
        tend to be bad for both, at the same time, in different ways.
      </p>
      <p>
        The posts that surfaced around this topic were among the most detailed in the data.
        People had clearly spent a lot of time thinking about this. What follows is a condensed
        version of what came up most.
      </p>

      <h2>The specific problem with open offices</h2>
      <p>
        Open offices were designed around the idea that proximity creates collaboration. Whether
        or not that is true, they were not designed with sensory processing in mind. The ambient
        noise is unpredictable (which is worse than consistent loud noise). The visual field is
        full of movement. There is no control over temperature, smell, or lighting. And the
        social expectation is that you are available, interruptible, and okay with all of this.
      </p>
      <p>
        For AuDHD people, this creates a specific exhaustion that doesn't always look like
        exhaustion. It looks like irritability, difficulty concentrating, shutting down, or
        needing unusually long recovery time after work. A lot of people go years without
        connecting those symptoms to their work environment.
      </p>

      <h2>What actually helps, from people who have figured it out</h2>

      <h3>Control what you can control, and stop apologizing for it</h3>
      <p>
        Noise-canceling headphones are obvious. What is less obvious is how many people feel
        guilty wearing them or take them off when someone approaches so they don't seem rude.
        The people who reported the best outcomes had mostly stopped doing that. The headphones
        are on unless there is a reason to take them off.
      </p>
      <p>
        The same applies to other environmental controls. A desk fan that creates consistent
        white noise. A small plant or object in your visual field to give your eyes somewhere
        to rest that isn't movement. A consistent seat, even in a hot-desk environment, even
        if you have to be slightly annoying about it.
      </p>

      <h3>Name the pattern before you need accommodations</h3>
      <p>
        A lot of people wait until they are in crisis to ask for accommodations. By that point
        they are usually not at their most articulate and the conversation is harder than it
        needed to be.
      </p>
      <p>
        The people who had better outcomes with accommodation requests had usually documented
        the pattern first. Not to build a legal case, just to be able to say specifically:
        when I am in the open office for more than three hours without a break, this happens,
        and it affects my work in these ways. Specific and observable is more persuasive than
        general and feeling-based.
      </p>

      <h3>The body doubling problem in open offices</h3>
      <p>
        Here's the contradiction: open offices can provide body doubling, which genuinely helps
        some ADHD brains stay on task. But the sensory environment can simultaneously make it
        impossible to use that effect because you are spending too much cognitive energy filtering
        out the noise to benefit from the presence.
      </p>
      <p>
        The people who found a workable middle ground tended to use physical separation within
        the office: a corner, a standing desk area, anywhere with a wall on at least one side.
        Not isolation, just enough boundary to reduce the peripheral sensory load.
      </p>

      <h3>Remote days as recovery, not avoidance</h3>
      <p>
        If you have any flexibility, using it strategically matters. Not random remote days when
        you feel like it, but scheduled remote days positioned to break up the most demanding
        office stretches. Tuesday and Thursday in-office means Wednesday is always a recovery
        day. That predictability helps more than the same number of remote days randomly
        distributed.
      </p>

      <h2>What to do when the environment isn't going to change</h2>
      <p>
        Some workplaces aren't going to accommodate anything. The job needs to be done, the
        office is what it is, and the only real question is whether the situation is sustainable.
      </p>
      <p>
        What people who stayed in those situations long-term had in common: they found ways to
        leave the office for meaningful stretches during the day (lunch walks, external
        meetings), they were very protective of their time outside work to recover, and they
        had a clear sense of how long they could stay before the situation became untenable.
        That last part is not pessimism. It is useful information that lets you plan.
      </p>
      <p>
        The people who ran into the most trouble were the ones who kept hoping the environment
        would become tolerable through willpower or adjustment. In most cases it didn't. The
        environment was the problem, not them.
      </p>
    </ArticleLayout>
  );
}
