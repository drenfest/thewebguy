# Scripts

Build-time maintenance scripts for the site.

## Files

- `optimize-images.js`: generates responsive JPEG and WebP hero image assets from the source hero PNG before the SvelteKit production build runs.

## Patterns

- Scripts are written as Node ESM so they run on Windows locally and on Render during deployment.
- Generated image variants should stay deterministic and small enough for Lighthouse-friendly LCP.

## Extending

- Add new image jobs to `optimize-images.js` when a page starts using a large source image.
- Prefer generating referenced responsive assets instead of mutating original design/source files.
