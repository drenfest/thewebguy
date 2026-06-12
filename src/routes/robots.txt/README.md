# `src/routes/robots.txt`

Dynamic robots.txt endpoint.

## Files

- `+server.js`: returns a plain-text robots file that allows public crawling, blocks `/api/`, points to the generated sitemap, and advertises the LLM discovery files in comments.

## Common Patterns

- Uses the shared site URL helpers from `src/lib/config/site.js`.
- Falls back to `https://thewebguy.app`.
- Keeps file-like URLs such as `sitemap.xml`, `llms.txt`, and `llms-full.txt` extension-based without trailing slashes.
- Returns an explicit text content type.

## How It Is Used

Search crawlers request `/robots.txt`. This endpoint keeps the sitemap URL aligned with the deployment origin, keeps crawlers away from the contact API, and gives AI/LLM services a discoverable path to the site summary files.

## How To Extend

- Add disallow rules only for real crawl-control needs.
- Keep sitemap URL absolute.
- Keep the LLM file comments aligned with the public endpoints if those routes change.

## Suggested Improvements

- Add environment-specific behavior if staging deployments should be noindexed or blocked.
