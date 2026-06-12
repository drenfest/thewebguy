# `static/icons`

Public icon source files and references.

## Files

- `apple-touch-icon.png`: copy of the 180px app icon kept with icon exports.
- `favicon-16x16.png` and `favicon-32x32.png`: small favicon PNG copies.
- `webguy-icon.svg`: source SVG for standard app icons.
- `webguy-icon-48.png`, `webguy-icon-96.png`, `webguy-icon-180.png`, `webguy-icon-192.png`, and `webguy-icon-512.png`: generated standard icon exports.
- `webguy-maskable.svg`: source SVG for maskable PWA icons with a full-bleed dark background and safe-zone logo.
- `webguy-maskable-192.png` and `webguy-maskable-512.png`: generated maskable icon exports referenced by `site.webmanifest`.
- `wordpress-logo-source.svg`: source WordPress mark used as the basis for the customized WordPress service icon in `ServiceIcon.svelte`.

## Common Patterns

- Source SVGs can live here, but most service icons are inline in Svelte so they can inherit theme colors and sizing.
- Generated PWA bitmap icons should be treated as build artifacts from the SVG sources in this folder.
- Keep third-party logo sources separate from custom inline SVG drawings.

## How It Is Used

The WordPress SVG source documents where the WordPress icon geometry came from. The rendered card icon is customized inline in `src/lib/components/ServiceIcon.svelte`. The Web Guy icon exports are linked from `src/app.html` and `static/site.webmanifest`.

## How To Extend

- Add source SVGs here when a real brand/platform logo is needed.
- Convert final themed icons to inline SVG if they need CSS styling or animation.
- Keep filenames clear about source and purpose.
- Regenerate the PNG exports from `webguy-icon.svg` and `webguy-maskable.svg` after changing the logo.

## Suggested Improvements

- Add attribution/license notes for any future third-party SVGs.
- Avoid adding large icon packs; use only assets needed by the site.
