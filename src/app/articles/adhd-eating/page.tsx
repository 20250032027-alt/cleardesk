import type { Metadata } from "next";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Eating With ADHD When You Can't Make Yourself Cook | ClearDesk",
  description: "Appetite suppression from medication, executive dysfunction around cooking, and forgetting to eat. What people actually do about it.",
  alternates: { canonical: "https://cleardesk.co/articles/adhd-eating" },
};

const meta = {
  category: "Daily life",
  title: "Eating with ADHD when you can not make yourself cook",
  description: "Appetite suppression from medication, executive dysfunction around cooking, and forgetting to eat entirely. What people actually do about it.",
  readTime: "6 min read",
  slug: "adhd-eating",
};

export default function Page() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        The post that surfaced this topic asked simply: "How do you feed yourself when
        you don't feel like feeding yourself?" It got 257 upvotes and several hundred
        comments. The answers were not about nutrition. They were about getting food
        into your body on days when the executive function required to cook feels
        genuinely unavailable.
      </p>
      <p>
        This is a specific problem with specific causes and the standard advice about
        meal planning and batch cooking addresses a different version of it.
      </p>

      <h2>The three things that cause it</h2>
      <p>
        Appetite suppression from stimulant medication is the most direct cause.
        Adderall and Vyvanse reliably reduce hunger for most people during active
        hours. This is not a side effect that goes away. You have to eat when you
        are not hungry, which requires overriding a signal that your body uses to
        prompt eating. For people who already have difficulty initiating tasks,
        eating without hunger is a task with no internal trigger.
      </p>
      <p>
        Executive dysfunction around cooking is the second cause. Cooking is
        not one task. It is twenty tasks: deciding what to make, checking what
        you have, making a list, going to get what you need, preparing it in
        the right order, not walking away mid-process. Each of those is an
        initiation event. On a low executive function day, the whole sequence
        is effectively unavailable.
      </p>
      <p>
        Forgetting to eat entirely is the third. ADHD hyperfocus can block hunger
        signals entirely for hours. Some people report not eating until late
        evening on days when they got into a project, then eating large amounts
        because they are suddenly very hungry. The irregular pattern affects sleep,
        mood, and medication effectiveness.
      </p>

      <h2>What actually works</h2>

      <h3>Zero-decision food</h3>
      <p>
        The most consistently mentioned strategy is keeping food available that
        requires no decisions and minimal preparation. Not meal-prepped containers
        that require reheating and utensils. Things that can be eaten standing
        at the counter while doing something else. Cheese, nuts, fruit, crackers,
        peanut butter eaten off a spoon.
      </p>
      <p>
        This is not a nutritional strategy. It is a harm reduction strategy.
        Eating something requires no executive function. Eating something
        decent requires a little. Eating a well-balanced meal requires a lot.
        On low days, targeting the lowest bar that still results in food consumption
        is more realistic than targeting the highest.
      </p>

      <h3>Scheduled eating like a medication dose</h3>
      <p>
        A phone alarm at a fixed time that says "eat something" works better
        than relying on hunger signals that stimulant medication suppresses.
        This is not about mealtimes in the traditional sense. It is about
        treating eating as a scheduled event rather than a prompted one, because
        the prompt is not reliable.
      </p>
      <p>
        Some people set this for mid-morning and mid-afternoon rather than at
        conventional meal times, because those are the windows when they are
        most likely to actually eat something small before the appetite suppression
        fully kicks in.
      </p>

      <h3>Low-complexity default meals</h3>
      <p>
        Batch cooking and elaborate meal prep plans fail at the same point as
        most ADHD organizational systems: when executive function is low, which
        is exactly when they are most needed. A smaller, more sustainable version
        is having two or three meals that require almost no thought and can be
        made in under ten minutes.
      </p>
      <p>
        The specifics vary by person, but common examples from the community:
        scrambled eggs, instant oatmeal with something in it, a protein shake,
        rice with whatever is in the fridge, a wrap with whatever is in the
        fridge. The common thread is that the decision has been made in advance.
        When you cannot decide what to eat, you already know what you eat.
      </p>

      <h2>The medication timing question</h2>
      <p>
        Eating before taking stimulant medication matters more than most people
        realize. Taking medication on an empty stomach makes the appetite
        suppression worse and can make the medication itself feel more intense
        and less comfortable. A small amount of food before the dose, even
        something minimal, changes how the day goes.
      </p>
      <p>
        The practical problem is that ADHD brains often take medication first thing
        in the morning before they have eaten anything. Setting a rule about eating
        something before the first dose, even if small, is worth experimenting with.
      </p>

      <h2>When it becomes a bigger problem</h2>
      <p>
        ADHD and eating disorders co-occur at higher rates than the general population.
        Binge eating in particular is associated with ADHD, often linked to the same
        reward-seeking and impulse control patterns. If the eating difficulties feel
        less like logistics and more like a complicated relationship with food, that
        is worth discussing with a doctor rather than trying to manage with planning
        systems.
      </p>
    </ArticleLayout>
  );
}
