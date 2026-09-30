# `static/images`

Public bitmap images used by the site.

## Files

- `technical-web-support-hero.png`: hero/workspace image used by `Hero.svelte` to give the homepage and hero panel a real technical visual anchor.
- `ai-services/`: responsive editorial WebP artwork and original technical SVG diagrams for the AI service family. Service diagrams have separate mobile compositions; meaningful alt text lives in the shared AI page data. The image-generation prompt and review evidence are recorded in `docs/ai-development-quote-first-implementation.md`.

## Common Patterns

- Images are referenced with root-relative URLs, for example `/images/technical-web-support-hero.png`.
- Current imagery supports the technical contractor positioning rather than generic agency visuals.

## How It Is Used

The hero component renders this image inside the contract queue/rate panel on major landing pages.

## How To Extend

- Add service-specific images only when they clarify the offer.
- Optimize large images before adding them.
- Prefer image dimensions that match the intended layout to avoid browser resizing waste.

## Suggested Improvements

- Add WebP/AVIF versions and a responsive `<picture>` pattern if more images are introduced.
- Add alt text guidance beside each image if the image library grows.
