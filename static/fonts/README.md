# `static/fonts`

Local font files used by the site.

## Files

- `inter-latin-400-600.woff2`: body font range for normal to medium text.
- `space-grotesk-latin-600-700.woff2`: display font range for headings, labels, and heavier UI text.

## Common Patterns

- Fonts are loaded locally through `@font-face` in `styles.css`.
- `font-display: swap` is used so text remains visible during loading.
- Limited weight ranges keep font payloads smaller.

## How It Is Used

Global CSS maps these files to `--font-body` and `--font-display`, then shared components inherit those typography variables through classes and heading selectors.

## How To Extend

- Add another weight only if the design clearly needs it.
- Keep files in WOFF2 format for modern browser performance.
- Update `unicode-range` in `styles.css` if non-Latin text support becomes necessary.

## Suggested Improvements

- Document the original font source and license.
- Add preloads in `app.html` if font loading becomes a measurable performance issue.
