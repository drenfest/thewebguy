# `static/fonts`

Local font files used by the site.

## Files

- `oxanium-latin-400-800.woff2`: body/UI font range for paragraphs, forms, lists, and smaller interface text.
- `orbitron-latin-400-900.woff2`: compact printable-ASCII display font range for logo-adjacent typography, headings, nav, buttons, badges, and card titles.

## Common Patterns

- Fonts are loaded locally through `@font-face` in `styles.css`.
- `font-display: optional` is used so text remains visible and mobile LCP is not delayed by font swaps.
- `src/app.html` preloads Oxanium for first-view body/UI text plus the compact Orbitron display file so logo-adjacent text, nav, buttons, badges, cards, and headings do not double-fetch display fonts.
- Limited weight ranges keep font payloads smaller.

## How It Is Used

Global CSS maps these files to `--font-body` and `--font-display`, then shared components inherit those typography variables through classes and heading selectors.

## How To Extend

- Add another weight only if the design clearly needs it.
- Keep files in WOFF2 format for modern browser performance.
- Update `unicode-range` in `styles.css` if non-Latin text support becomes necessary.

## Suggested Improvements

- Document the original font source and license.
- Keep preloads limited to font files used in first-view content.
