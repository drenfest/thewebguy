# `src/routes/sitemap.xml`

Dynamic XML sitemap endpoint.

## Files

- `+server.js`: imports service, blog, skill, and location data, generates all known URLs, and returns XML.

## Common Patterns

- Uses content arrays as the source of truth.
- Uses URL helper functions from `content.js`.
- Uses `PUBLIC_SITE_URL` with a production fallback.

## How It Is Used

Search engines use `/sitemap.xml` to discover static and dynamic pages.

## How To Extend

- Add new route groups to the `urls` array when a new public page type is introduced.
- Keep helper-generated URLs consistent with navigation and route folders.

## Suggested Improvements

- Add `lastmod` once content update dates exist.
- Add sitemap tests for missing dynamic pages.
