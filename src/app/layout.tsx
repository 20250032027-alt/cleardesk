import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClearDesk - ADHD Tools and Guides That Actually Help",
    template: "%s | ClearDesk",
  },
  description:
    "Free ADHD tools and honest guides for work, daily life, and your brain. Body double timer, meds tracker, task unkicker — no login, no fluff.",
  metadataBase: new URL("https://cleardesk.co"),
  openGraph: {
    siteName: "ClearDesk",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="site-nav" aria-label="Main navigation">
          <div className="nav-pill">
            <a className="nav-logo" href="/">
              Clear<span>Desk</span>
            </a>
            <ul className="nav-links">
              <li><a href="/#tools">Tools</a></li>
              <li><a href="/#articles">Articles</a></li>
              <li><a href="/about">About</a></li>
            </ul>
            <a className="nav-cta" href="/#tools">Try a tool</a>
          </div>
        </nav>

        <div id="page-content">{children}</div>

        <footer className="site-footer">
          <div className="footer-inner">
            <a className="footer-logo" href="/">
              Clear<span>Desk</span>
            </a>
            <ul className="footer-links">
              <li><a href="/#tools">Tools</a></li>
              <li><a href="/#articles">Articles</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/contact">Contact</a></li>
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
