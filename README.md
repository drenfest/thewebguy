# The Web Guy

SvelteKit site for `thewebguy.app`, positioning The Web Guy as contract web development, WordPress, technical SEO, website fixes, tracking, ecommerce, and support help at `$55/hr`.

This README covers setup, deployment, environment variables, and the project map. Directory-level READMEs explain the files in each folder, common patterns, how each area is used, and suggested next steps.

## Quick Start

```bash
npm install
npm run dev
```

Local dev runs Vite on `127.0.0.1`. Production output is built with the SvelteKit Node adapter.

Useful commands:

```bash
npm run check
npm run build
npm run preview
```

## Hosting On Render

This project is configured for Render with `render.yaml`.

Render settings:

- Runtime: Node
- Build command: `npm install && npm run build`
- Start command: `node build`
- Node version: `20`
- Public URL: `https://thewebguy.app`

Required Render environment variables:

- `NODE_VERSION`: `20`
- `PUBLIC_SITE_URL`: canonical site origin used by robots and sitemap routes.
- `PUBLIC_GA_MEASUREMENT_ID`: public GA4 measurement ID, such as `G-XXXXXXXXXX`. Leave blank to disable analytics.
- `CONTACT_TO_EMAIL`: private contact form destination address. Set this in Render; do not commit the real value.
- `CONTACT_FROM_EMAIL`: sender address used for SMTP delivery, for example `The Web Guy <sender@example.com>`.
- `SMTP_HOST`: SMTP server hostname, for example a Gmail or domain-mailbox SMTP host.
- `SMTP_PORT`: SMTP port. Use `587` for STARTTLS in most cases, or `465` for implicit TLS.
- `SMTP_SECURE`: `false` for port `587`, `true` for port `465`.
- `SMTP_USER`: SMTP username.
- `SMTP_PASSWORD`: SMTP password or app password.

Contact form behavior:

- In production, set `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD` so `/api/contact` sends requests server-side.
- The endpoint sends directly through SMTP from the Node app process. There is no paid email API service and no background worker process.
- Without SMTP configuration, the endpoint returns a configuration error instead of exposing the private recipient address to the browser.
- The sender email from the form is used as the `reply_to` value so replies go back to the requester.

Local environment setup:

- Copy `.env.example` to `.env.local`.
- Put the real `CONTACT_TO_EMAIL` value in `.env.local`.
- Put your GA4 measurement ID in `PUBLIC_GA_MEASUREMENT_ID` only when you want local analytics enabled.
- Add SMTP values only on your local machine and in Render environment variables. `.env.local` is ignored by Git.
- For Gmail SMTP, use an app password, not the normal account password.

Important email note: Render does not provide a built-in mail server. To deliver email without a paid provider, use a free SMTP mailbox/app-password setup or the SMTP settings from an existing domain mailbox.

## Analytics

GA4 is optional and controlled by `PUBLIC_GA_MEASUREMENT_ID`. When the variable is blank, no GA script is loaded and tracking helpers become no-ops.

Tracked interactions include:

- Manual `page_view` events for initial load and SvelteKit route changes.
- Page context such as page type, content group, topic, route slug, and conversion stage.
- CTA, contact-intent, internal-link, outbound-link, and button clicks with link text, title, destination, and page area.
- FAQ opens and scroll-depth milestones at 25%, 50%, 75%, and 90%.
- Contact form submit, success, error, select changes, and first field-focus events.

Contact form analytics avoid private content. Names, emails, URLs, and message text are not sent to GA4; only category selections, booleans, and length/timeline buckets are tracked.

## Project Structure

- `src/`: SvelteKit app shell, routes, shared components, content data, config, and client state.
- `static/`: assets served directly from the site root, including fonts, icons, favicon files, PWA manifest, and images.
- `styles.css`: global design system, layout primitives, card styles, route-specific polish, animation, and responsive behavior.
- `site-content.js`: exported content snapshot / helper data kept at the project root.
- `render.yaml`: Render Blueprint config for the Node web service.
- `svelte.config.js`: SvelteKit adapter and alias config.
- `vite.config.js`: Vite plugin setup for SvelteKit.
- `package.json`: scripts, dependencies, Node engine, and project metadata.
- `jsconfig.json`: editor and alias configuration for JavaScript/Svelte.

## Common Patterns

- Content-first routes pull from `src/lib/data/content.js` and render through shared components.
- Dynamic service, skill, location, and blog routes use slug maps plus `+page.js` load functions.
- SEO is handled per page with `Seo.svelte`.
- PWA install metadata lives in `static/site.webmanifest`, favicon/app icons live in `static/`, and the cache strategy lives in `src/service-worker.js`.
- GA4 analytics live in `src/lib/analytics.js` and are mounted globally through `GoogleAnalytics.svelte`.
- Conversion sections reuse `Hero.svelte`, `SectionHeading.svelte`, `CardGrid.svelte`, `CtaBand.svelte`, and `FaqList.svelte`.
- Global CSS favors reusable classes over component-scoped CSS so visual polish stays consistent across pages.

## How To Extend

- Add a new service in `src/lib/data/content.js`, then confirm it appears in `/services/`, the service nav, sitemap, footer, and relevant internal links.
- Add a new skill in `src/lib/data/content.js`, then connect it to service pages through `serviceSkillMap`.
- Add a new blog post in `blogPosts` or `somethingBrokePosts`, then link it from relevant services and troubleshooting cards.
- Add a new location in `locationPages`, including nearby locations and related services.
- For new visual card icons, extend `ServiceIcon.svelte` and add only the minimum CSS needed in `styles.css`.
- When updating the logo, regenerate the favicon and PWA PNG assets from `static/favicon.svg`, `static/icons/webguy-icon.svg`, and `static/icons/webguy-maskable.svg`.

## Suggested Improvements

- Add automated tests for `/api/contact` with mocked SMTP responses.
- Add a spam-control layer for the contact form, such as a honeypot field or rate limiting.
- Move very large content arrays into smaller domain-specific modules if `content.js` becomes hard to scan.
- Add structured data for services, FAQs, and local pages.
- Add consent-mode support if ad platforms or stricter privacy requirements are introduced.
