# Search Console Reporting Playbook

This directory tracks Search Console page/query snapshots and the decisions made from them.

## Daily Snapshot

Refresh `reports/search-terms.json` from Search Console page-by-page when authenticated access is available. Preserve the date the metrics were collected and keep page rows grouped by canonical page path.

Each page entry should include:

- `url` and `path`
- collection date
- page-level clicks, impressions, CTR, and average position when available
- query-level clicks, impressions, CTR, and average position
- indexing status if inspected
- notes for pages with no query rows

## Comparison Windows

Each daily report should compare current metrics against:

- yesterday
- 7 days ago or the previous comparable week
- 30 days ago or the previous comparable month
- previous quarter or roughly 90 days ago
- previous year when available

If an exact comparison file is missing, use the nearest dated snapshot and state the gap.

## Report Output

Each report should produce:

- summary of pages gaining or losing impressions, clicks, CTR, and average position
- new queries by page
- queries with impressions but low CTR
- queries with average position 8-20 that may be close to click growth
- pages with impressions but no clicks
- pages with no query rows that still matter for the service architecture
- indexing issues and the next URLs worth submitting
- recommendations with rationale, confidence, and expected effect
- watched signals that explain what future reports should look for
- possible gaps where the current site lacks a strong answer

## Child Page Criteria

Create or recommend a child page only when the query has a distinct intent that the parent page cannot satisfy deeply without becoming unfocused.

Good child-page candidates usually have:

- recurring impressions or a clear buyer/problem intent
- a parent page already receiving related query impressions
- a meaningfully different searcher need
- enough substance for a useful page, not just a keyword swap
- a clear internal-link path from the parent
- a role in the cluster that still reinforces the parent page

Do not create thin pages for informational mismatches, resume/job-description queries, or terms that are already answered well by an existing page.

## Page Creation Rules

When a child page is created:

- make the content useful enough to stand alone
- link from the parent with descriptive anchor text
- link back to the parent and related sibling pages
- use the query language naturally in title, H1, meta, and body where it helps users
- include practical troubleshooting, decision criteria, handoff notes, and FAQs
- avoid private client names, account IDs, screenshots, addresses, emails, or identifying examples
- regenerate sitemap lastmod data and run validation

## Current Decision Signals

Priority signals from the July 8, 2026 snapshot:

- blog pages are earning the strongest early clicks and positions
- service pages have broader impressions but need richer intent matching and internal links
- generated keyword-service pages can work when they contain custom content, not generic boilerplate
- pages in positions 8-20 are the highest near-term CTR opportunity
- pages with many impressions and no clicks need title/meta and above-the-fold intent checks
- non-indexed service pages should be watched after inspection submission before judging query demand
