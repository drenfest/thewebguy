# `src/lib/config`

Small site-level constants.

## Files

- `site.js`: exports `site`, including name, domain, rate, title suffix, and default description.

## Common Patterns

- Keep stable brand/config values here rather than repeating strings across pages.
- Avoid secrets in this folder. Server-only secrets belong in Render environment variables and `$env/dynamic/private`.

## How It Is Used

This folder is available to route and component code through `$lib/config/site.js`.

## How To Extend

- Add reusable public constants like default location, public social handles, or common schema fields.
- Keep runtime-specific values in env vars instead of hardcoded config.

## Suggested Improvements

- Use `site.description` more consistently in SEO fallbacks.
- Add canonical origin fallback here only if it stays public and non-secret.
