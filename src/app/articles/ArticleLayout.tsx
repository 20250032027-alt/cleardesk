import type { Metadata } from "next";
import Link from "next/link";

interface ArticleLayoutProps {
  meta: {
    category: string;
    title: string;
    description: string;
    readTime: string;
    slug: string;
  };
  children: React.ReactNode;
}

export default function ArticleLayout({ meta, children }: ArticleLayoutProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.description,
    "url": `https://cleardesk.co/articles/${meta.slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "ClearDesk",
      "url": "https://cleardesk.co"
    }
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="article-page-inner">
        <div className="article-page-header">
          <Link href="/#articles" className="article-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All articles
          </Link>
          <div className="article-page-meta">
            <span className="article-page-cat">{meta.category}</span>
            <span className="article-page-time">{meta.readTime}</span>
          </div>
          <h1 className="article-page-title">{meta.title}</h1>
          <p className="article-page-desc">{meta.description}</p>
        </div>

        <div className="article-page-body">
          {children}
        </div>

        <div className="article-page-footer">
          <div className="article-disclaimer">
            <p>
              ClearDesk is not a medical resource. Nothing here is a substitute for a diagnosis or
              a conversation with a doctor. The patterns described come from community posts, not
              clinical studies.
            </p>
          </div>
          <div className="article-tools-cta">
            <p>Looking for something practical right now?</p>
            <div className="article-tools-row">
              <Link href="/body-double-timer" className="article-tool-link">Body double timer</Link>
              <Link href="/task-unkicker" className="article-tool-link">Task unkicker</Link>
              <Link href="/meds-tracker" className="article-tool-link">Meds tracker</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
