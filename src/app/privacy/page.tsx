import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ClearDesk",
  description: "ClearDesk privacy policy. How we handle data, cookies, and advertising.",
  alternates: { canonical: "https://cleardesk.co/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <p className="updated">Last updated: January 2025</p>
      <h1>Privacy Policy</h1>

      <div className="highlight-box">
        <p>
          Short version: we collect very little. Your tool data (meds log, timer settings) stays in
          your browser and never leaves your device. We use Google AdSense to show ads, which uses
          cookies. That's the main thing worth knowing.
        </p>
      </div>

      <h2>Who we are</h2>
      <p>
        ClearDesk operates the website at cleardesk.co. We provide free ADHD tools and
        informational guides. To reach us: <a href="/contact">contact page</a>.
      </p>

      <h2>What data we collect</h2>
      <p>
        <strong>Data you store in tools:</strong> The meds tracker and any other tools that save
        state use your browser's localStorage. This data is stored entirely on your device. We
        cannot access it, it is not transmitted to our servers, and it is deleted if you clear your
        browser data or use the in-tool reset option.
      </p>
      <p>
        <strong>Basic analytics:</strong> We may use privacy-respecting analytics to understand how
        many people visit the site and which pages are most useful. This may include your
        approximate location (country/region), browser type, and pages visited. It does not include
        your name, email, or any personally identifying information unless you provide it.
      </p>
      <p>
        <strong>Contact form submissions:</strong> If you use our contact form, we receive your
        email address and message. We use this only to respond to you and do not share it with
        third parties.
      </p>
      <p>
        <strong>Newsletter signups:</strong> If you subscribe to our email list, we store your
        email address to send occasional updates. You can unsubscribe at any time.
      </p>

      <h2>Advertising and cookies (Google AdSense)</h2>
      <p>
        ClearDesk uses Google AdSense to display advertisements. Google AdSense uses cookies to
        serve ads based on your prior visits to this or other websites. These cookies are set by
        Google, not by ClearDesk.
      </p>
      <p>
        You can opt out of personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">
          Google Ads Settings
        </a>
        . For more information visit{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">
          Google's Privacy Policy
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>We use the following types of cookies:</p>
      <ul>
        <li><strong>Essential cookies:</strong> Required for the site to function.</li>
        <li><strong>Analytics cookies:</strong> Help us understand how visitors use the site.</li>
        <li><strong>Advertising cookies:</strong> Set by Google AdSense. See above for opt-out options.</li>
      </ul>

      <h2>Children's privacy</h2>
      <p>
        ClearDesk is not directed at children under 13. We do not knowingly collect personal
        information from children.
      </p>

      <h2>Your rights</h2>
      <p>
        Since we store very little personal data, most requests can be handled by clearing your
        browser's localStorage for this site. For anything else, contact us.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this privacy policy from time to time. When we do, we'll update the date at
        the top of this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us via our <a href="/contact">contact page</a>.
      </p>

      <hr />
      <p style={{ fontSize: "0.8rem", color: "var(--ink-faint)" }}>
        This privacy policy covers cleardesk.co only.
      </p>
    </main>
  );
}
