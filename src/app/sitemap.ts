import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cleardesk.co";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/body-double-timer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/meds-tracker`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/task-unkicker`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/articles/adhd-friendly-jobs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/articles/two-minute-rule`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/articles/audHD-open-office`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/articles/email-paralysis`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/articles/vyvanse-vs-adderall`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/articles/adhd-memory-relationships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/adhd-job-fit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/medication-comparison`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];
}
