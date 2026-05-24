import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - ClearDesk",
  description: "Terms of use for ClearDesk. How you may use this site and its tools.",
  alternates: { canonical: "https://cleardesk.co/terms" },
};

export default function TermsPage() {
  return (
    <main className="policy-page">
      <p className="updated">Last updated: January 2025</p>
      <h1>Terms of Use</h1>

      <p>
        By using ClearDesk you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Nothing on ClearDesk is medical advice. The tools, articles, and any other content on this
        site are for informational and productivity purposes only. They are not a substitute for
        diagnosis, treatment, or consultation with a qualified healthcare provider.
      </p>
      <p>
        The medication-related content on this site describes patterns reported by community members.
        It does not constitute a clinical recommendation. Always consult a doctor or psychiatrist
        before making decisions about medication.
      </p>

      <h2>Tools and data</h2>
      <p>
        The tools on ClearDesk (body double timer, meds tracker, task unkicker) store data locally
        in your browser only. ClearDesk does not collect, store, or transmit tool data. You are
        responsible for any data you choose to store or clear.
      </p>
      <p>
        The task unkicker sends your task description to a server-side API that calls Google
        Gemini to generate steps. This task text is processed by Google. Do not enter sensitive
        personal information into the task field.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The written content on ClearDesk is original work. You may share brief excerpts with
        attribution. You may not reproduce full articles or tools without permission.
      </p>

      <h2>Advertising</h2>
      <p>
        ClearDesk uses Google AdSense to display advertisements. Ads are served by Google based
        on your browsing history and other signals. ClearDesk does not control ad content.
        See the <a href="/privacy">privacy policy</a> for details on how Google uses data.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        ClearDesk is provided as-is. We make no warranties about accuracy, completeness, or
        fitness for any purpose. We are not liable for any damages arising from use of this site,
        including decisions made based on content found here.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms at any time. Continued use of the site after changes are posted
        constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Use the <a href="/contact">contact page</a>.
      </p>
    </main>
  );
}
