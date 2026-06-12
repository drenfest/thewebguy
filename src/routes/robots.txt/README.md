# `src/routes/robots.txt`

Dynamic robots.txt endpoint.

## Files

- `+server.js`: returns a plain-text robots file that allows crawling and points to the generated sitemap.

## Common Patterns

- Uses `PUBLIC_SITE_URL` when available.
- Falls back to `https://thewebguy.app`.
- Returns an explicit text content type.

## How It Is Used

Search crawlers request `/robots.txt`. This endpoint keeps the sitemap URL aligned with the deployment origin.

## How To Extend

- Add disallow rules only for real crawl-control needs.
- Keep sitemap URL absolute.

## Suggested Improvements

- Add environment-specific behavior if staging deployments should be noindexed or blocked.
