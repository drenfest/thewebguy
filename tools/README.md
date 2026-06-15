# The Web Guy Outreach Tools

This folder tracks legitimate places to list `https://thewebguy.app` so the site can earn relevant citations and referral links.

Use this as a manual submission workflow. Most directories require account access, email verification, business details, proof of ownership, and sometimes client reviews. Do not automate submissions or use irrelevant directories just for links.

## Files

- `directory-submissions.csv`: prioritized directory and profile targets.
- `free-signup-targets-50.csv`: 50 free/basic listing targets to work through in future sessions.
- `ping-targets.csv`: search and blog ping endpoints that can be used without creating a directory profile.
- `ping-indexnow.mjs`: IndexNow sitemap URL submission script.
- `profile-copy.md`: reusable business descriptions, anchors, and category choices.
- `read-gmail-codes.mjs`: local helper for reading recent signup verification codes when Gmail OAuth has read access.
- `submission-checklist.md`: repeatable process for consistent listings.

## Link Quality Rules

- Prefer relevant web development, WordPress, technical SEO, ecommerce, local business, and agency directories.
- Use the canonical URL: `https://thewebguy.app`.
- Keep business name consistent: `The Web Guy`.
- Use accurate categories and service areas.
- Avoid paid link schemes, auto-submitters, private blog networks, comment spam, and unrelated directories.
- Track every submission so duplicate profiles do not get created.

## Ping Workflow

The only broadly useful no-account ping flow here is IndexNow. It is for search discovery, not directory backlinks.

Before sending real pings, deploy the static key file so this URL works:

```text
https://thewebguy.app/thewebguy-indexnow-20260613.txt
```

Preview the payload:

```bash
node tools/ping-indexnow.mjs
```

Submit the sitemap URLs:

```bash
node tools/ping-indexnow.mjs --send
```
