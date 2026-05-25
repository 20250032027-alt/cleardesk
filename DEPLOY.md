# ClearDesk — Deploy Steps

Every time you get a new tar from Claude, do this in order.

---

## Step 1 — Extract the tar

```bash
cd E:\garden\cleardesk
tar -xzf cleardesk.tar.gz
```

This overwrites existing files with the new versions. Your `.git` folder is not touched.

---

## Step 2 — Push to GitHub

```bash
git add .
git commit -m "describe what changed here"
git push
```

If git push is rejected (usually because you edited something on GitHub directly):

```bash
git pull --rebase origin main
git push
```

If that still fails (rare):

```bash
git push --force
```

Safe to use on a solo project with no collaborators.

---

## Step 3 — Vercel auto-deploys

Vercel watches your GitHub repo. Every push triggers a new build automatically. You do not need to do anything in Vercel after pushing.

Watch the build at: vercel.com > your project > Deployments

Build takes about 30 seconds. If it fails, the error is in the build logs.

---

## Step 4 — After deploy, verify

Open your live site and check:
- The page that changed looks right
- No console errors (F12 > Console)
- If you changed the API route: test the task unkicker

---

## Common errors and fixes

**"rejected — fetch first"**
Someone pushed to GitHub (maybe you via the browser) without pulling first.
Fix: `git pull --rebase origin main` then `git push`

**Build fails with TypeScript error**
Read the error line number. Usually a missing type or apostrophe in JSX text that needs to be `&apos;`.
Fix: edit the file, commit, push.

**Build fails "Cannot find module tailwindcss"**
The postcss.config.mjs file is back. Delete it from GitHub via the browser, commit.

**Vercel environment variable not picked up**
Add/update the variable in Vercel Settings > Environment Variables, then do a fresh deploy by pushing any small change (add a space to a comment, save, commit, push).

**Task unkicker still showing "General steps"**
The GEMINI_API_KEY env var isn't being read. Check: Vercel Settings > Env Variables, confirm key name is exactly `GEMINI_API_KEY` with no spaces, confirm the value is your current active key from aistudio.google.com.

---

## Things to do once (not every deploy)

These only need doing once total, not after each push.

**Google Search Console**
1. Go to search.google.com/search-console
2. Add property > URL prefix > https://cleardesk.co
3. Verify via HTML file method (download, add to public/, push)
4. Go to Sitemaps > enter `sitemap.xml` > Submit

**Google Analytics**
1. Go to analytics.google.com > create property
2. Get your Measurement ID (starts with G-)
3. In layout.tsx, replace both instances of `G-XXXXXXXXXX` with your real ID
4. Push

**AdSense**
1. Go to adsense.google.com
2. Submit cleardesk.co for review
3. The publisher ID meta tag is already in the site (ca-pub-7492388540350253)
4. After approval, create ad units and replace the AdUnit placeholder divs
5. AdUnit component is at src/components/AdUnit.tsx with instructions in comments

**Perplexity index submission**
Go to perplexity.ai/settings and submit cleardesk.co. Faster than waiting for a crawl.

---

## Current environment variables in Vercel

| Key | Value |
|-----|-------|
| GEMINI_API_KEY | your key from aistudio.google.com |

---

## File structure reference

```
cleardesk/
  src/app/
    layout.tsx              shared nav, footer, meta tags, schemas
    globals.css             all styles
    page.tsx                homepage
    not-found.tsx           404
    sitemap.ts              auto-generates /sitemap.xml
    about/page.tsx
    privacy/page.tsx
    terms/page.tsx
    contact/page.tsx
    body-double-timer/page.tsx
    meds-tracker/page.tsx
    task-unkicker/page.tsx
    adhd-job-fit/page.tsx
    medication-comparison/page.tsx
    api/unkick/route.ts     Gemini API server route (DO NOT touch)
    articles/
      ArticleLayout.tsx
      adhd-friendly-jobs/page.tsx
      two-minute-rule/page.tsx
      audHD-open-office/page.tsx
      email-paralysis/page.tsx
      vyvanse-vs-adderall/page.tsx
      adhd-memory-relationships/page.tsx
  src/components/
    AdUnit.tsx              swap placeholder for real ins tag after AdSense approval
  public/
    pill-amber.png
    robots.txt
    llms.txt
    og-image.png            1200x630 - commit this file manually
    og-image-source.html    source for regenerating og-image
```
