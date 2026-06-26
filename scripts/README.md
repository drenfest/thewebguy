# Scripts

Build-time maintenance scripts for the site.

## Files

- `optimize-images.js`: generates responsive JPEG and WebP hero image assets from the source hero PNG before the SvelteKit production build runs.
- `generate-sitemap-lastmod.js`: generates `src/lib/data/sitemap-lastmod.json` before build so sitemap `<lastmod>` values follow the source files that define each page.
- `verify-contact-email.js`: validates contact-form email environment variables during deploy. For Gmail API delivery, it refreshes the OAuth token without sending an email. If `GMAIL_REFRESH_TOKEN` is missing but `CONTACT_OAUTH_SETUP_KEY` exists, it logs the setup URL and lets the first OAuth setup deploy continue.

## Patterns

- Scripts are written as Node ESM so they run on Windows locally and on Render during deployment.
- Generated image variants should stay deterministic and small enough for Lighthouse-friendly LCP.
- Generated sitemap dates are based on source file modified times. Dynamic service, skill, blog, and location URLs use the shared content model plus their route templates.

## Extending

- Add new image jobs to `optimize-images.js` when a page starts using a large source image.
- Prefer generating referenced responsive assets instead of mutating original design/source files.
