import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClearDesk - ADHD Tools and Guides That Actually Help",
    template: "%s | ClearDesk",
  },
  description:
    "Free ADHD tools and honest guides for work, daily life, and your brain. Body double timer, meds tracker, task unkicker. No login, no fluff.",
  metadataBase: new URL("https://cleardesk.co"),
  alternates: { canonical: "https://cleardesk.co" },
  openGraph: {
    siteName: "ClearDesk",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ClearDesk - ADHD tools and guides" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ClearDesk",
  "url": "https://cleardesk.co",
  "description": "Free ADHD tools and honest guides built from real experience",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cleardesk.co/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClearDesk",
  "url": "https://cleardesk.co",
  "description": "Free ADHD tools and honest guides",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://cleardesk.co/contact"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts via link tag - works on Vercel build servers */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

        {/* AdSense publisher ID - required for AdSense approval */}
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />

        {/* Google Analytics - replace G-XXXXXXXXXX with real ID after setup */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        {/* Skip to content - accessibility + AdSense requirement */}
        <a href="#main-content" className="skip-to-content">Skip to content</a>

        <nav className="site-nav" aria-label="Main navigation">
          <div className="nav-pill">
            <Link className="nav-logo" href="/">
              Clear<span>Desk</span>
            </Link>
            <ul className="nav-links">
              <li><Link href="/#tools">Tools</Link></li>
              <li><Link href="/#articles">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
            <Link className="nav-cta" href="/#tools">Try a tool</Link>
          </div>
        </nav>

        <div id="main-content">{children}</div>

        <footer className="site-footer">
          <div className="footer-inner">
            <Link className="footer-logo" href="/">
              Clear<span>Desk</span>
            </Link>
            <ul className="footer-links">
              <li><Link href="/#tools">Tools</Link></li>
              <li><Link href="/#articles">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-inner">
            <p className="footer-copy">
              2025 ClearDesk. Built from real questions, for real brains.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
