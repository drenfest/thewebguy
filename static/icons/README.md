# `static/icons`

Public icon source files and references.

## Files

- `apple-touch-icon.png`: copy of the 180px app icon kept with icon exports.
- `favicon-16x16.png` and `favicon-32x32.png`: small favicon PNG copies.
- `webguy-icon.svg`: generated copy of the modern Web Guy mark used for standard app icons.
- `webguy-icon-48.png`, `webguy-icon-96.png`, `webguy-icon-180.png`, `webguy-icon-192.png`, and `webguy-icon-512.png`: generated standard icon exports.
- `webguy-maskable.svg`: generated maskable source with a safe-zone modern Web Guy mark.
- `webguy-maskable-192.png` and `webguy-maskable-512.png`: generated maskable icon exports referenced by `site.webmanifest`.
- `wordpress-logo-source.svg`: source WordPress mark used as the basis for the customized WordPress service icon in `ServiceIcon.svelte`.
- `ai-tools/`: four SVG tool marks displayed beside their names on the AI Development Oversight hub. Source and license details are below.

## AI coding tool marks

These identify examples of tools used with the service. They are third-party marks, not endorsements or partnership badges. Retain their supplied colors and proportions; the adjacent visible names provide accessible labels, so the images use empty alt text.

| Asset | Source |
| --- | --- |
| `ai-tools/codex.svg` | [Lobe Icons Codex SVG](https://github.com/lobehub/lobe-icons/blob/329f378cbd1a88f45b60cd096b9111ce16f3ea39/packages/static-svg/icons/codex.svg), pinned to commit `329f378cbd1a88f45b60cd096b9111ce16f3ea39`. Community vector asset, not an official OpenAI download. MIT notice retained in `ai-tools/LOBE-ICONS-LICENSE.txt`; the Codex mark belongs to OpenAI. |
| `ai-tools/claude-code.svg` | Claude Spark – Clay, from the [Anthropic press kit](https://anthropic.com/press-kit), archive member `Anthropic media resources/Anthropic logos/Claude logos/3 Claude Spark/SVG/Claude Spark - Clay.svg`. |
| `ai-tools/cursor.svg` | Cube 2D Light, from the [Cursor brand assets](https://cursor.com/brand), archive member `General Logos/Cube/SVG/CUBE_2D_LIGHT.svg`. |
| `ai-tools/github-copilot.svg` | Copilot Icon Black, from the [GitHub logo assets](https://brand.github.com/foundations/logo), archive member `GitHub Logos/SVG/Copilot_Icon_Black.svg`. Paired with the visible name GitHub Copilot. |

Retrieved September 30, 2026. Original vector geometry is preserved; no icon package or runtime dependency is added.

## Common Patterns

- Source SVGs can live here, but most service icons are inline in Svelte so they can inherit theme colors and sizing.
- Generated PWA bitmap icons should be treated as build artifacts from the SVG sources in this folder.
- Keep third-party logo sources separate from custom inline SVG drawings.

## How It Is Used

The WordPress SVG source documents where the WordPress icon geometry came from. The rendered card icon is customized inline in `src/lib/components/ServiceIcon.svelte`. The Web Guy icon exports are generated from `static/brand/thewebguy-modern-icon.svg`, then linked from `src/app.html` and `static/site.webmanifest`.

## How To Extend

- Add source SVGs here when a real brand/platform logo is needed.
- Convert final themed icons to inline SVG if they need CSS styling or animation.
- Keep filenames clear about source and purpose.
- Regenerate the PNG exports from `static/brand/thewebguy-modern-icon.svg` after changing the logo.

## Suggested Improvements

- Add attribution/license notes for any future third-party SVGs.
- Avoid adding large icon packs; use only assets needed by the site.
