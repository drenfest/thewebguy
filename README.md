# The Web Guy

SvelteKit site for `thewebguy.app`, positioning The Web Guy as contract web development, WordPress, technical SEO, website fixes, tracking, ecommerce, and support help at `$55/hr`.

This README covers setup, deployment, environment variables, and the project map. Directory-level READMEs explain the files in each folder, common patterns, how each area is used, and suggested next steps.

## Quick Start

```bash
npm install
npm run dev
```

Local dev runs Vite on `127.0.0.1`. Production output is built with the SvelteKit Node adapter.
The site is configured as SSR-first: routes render HTML from the server, and internal links use full document navigation instead of SvelteKit SPA-style client routing.

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
- `PUBLIC_SITE_URL`: canonical site origin used by robots, sitemap, schema, and LLM routes. Use `https://thewebguy.app`; the app normalizes a bare `thewebguy.app` value, but the full origin is preferred.
- `PUBLIC_GA_MEASUREMENT_ID`: public GA4 measurement ID, such as `G-XXXXXXXXXX`. Leave blank to disable analytics. Restart/redeploy the Render service after changing it so the Node app reads the new runtime value.
- `CONTACT_EMAIL_PROVIDER`: set to `gmail` on Render free hosting. Use `smtp` only on hosts that allow outbound SMTP.
- `CONTACT_TO_EMAIL`: private contact form destination address. Set this in Render; do not commit the real value.
- `CONTACT_FROM_EMAIL`: sender address, for example `The Web Guy <sender@example.com>`. For Gmail API delivery, this must be the Gmail account or an approved Gmail send-as alias.
- `GMAIL_CLIENT_ID`: OAuth client ID for a Google Cloud project with Gmail API enabled.
- `GMAIL_CLIENT_SECRET`: OAuth client secret for the same Google OAuth client.
- `GMAIL_REFRESH_TOKEN`: OAuth refresh token authorized with the `https://www.googleapis.com/auth/gmail.send` scope.
- `GMAIL_USER_ID`: Gmail API user ID. Use `me` unless you have a reason to target a specific mailbox.
- `SMTP_HOST`: SMTP server hostname. Use only for local dev, paid hosting, or hosts that allow outbound SMTP.
- `SMTP_PORT`: SMTP port. Use `587` for STARTTLS in most cases, or `465` for implicit TLS.
- `SMTP_SECURE`: `false` for port `587`, `true` for port `465`.
- `SMTP_USER`: SMTP username.
- `SMTP_PASSWORD`: SMTP password or app password.

Contact form behavior:

- On Render free hosting, set `CONTACT_EMAIL_PROVIDER=gmail` plus the Gmail API variables above. This sends over HTTPS instead of blocked SMTP ports.
- On hosts that allow SMTP, set `CONTACT_EMAIL_PROVIDER=smtp`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD`.
- The endpoint sends server-side. There is no paid email API service and no background worker process.
- Without email configuration, the endpoint returns a configuration error instead of exposing the private recipient address to the browser.
- The sender email from the form is used as the `reply_to` value so replies go back to the requester.

Local environment setup:

- Copy `.env.example` to `.env.local`.
- Put the real `CONTACT_TO_EMAIL` value in `.env.local`.
- Put your GA4 measurement ID in `PUBLIC_GA_MEASUREMENT_ID` only when you want local analytics enabled.
- Add Gmail API or SMTP values only on your local machine and in Render environment variables. `.env.local` is ignored by Git.
- For Gmail SMTP, use an app password, not the normal account password.

Gmail API setup:

- Enable the Gmail API in a Google Cloud project.
- Create OAuth credentials and authorize the sender mailbox with the `https://www.googleapis.com/auth/gmail.send` scope.
- Store the resulting client ID, client secret, and refresh token in Render.
- Keep `CONTACT_FROM_EMAIL` aligned with the Gmail account or an approved Gmail send-as alias.

Important email note: Render free web services block outbound SMTP ports, so Gmail SMTP on ports `465` or `587` can time out even with correct credentials. Use Gmail API delivery on Render free hosting.

## Analytics

GA4 is optional and controlled by `PUBLIC_GA_MEASUREMENT_ID`. When the variable is blank, no GA script is loaded and tracking helpers become no-ops. When configured, the standard `gtag.js` script is rendered into the page head and custom page interaction events are sent through the shared analytics helper.

On Render, set `PUBLIC_GA_MEASUREMENT_ID` and trigger a manual redeploy or service restart after changing it. The app reads the public value through SvelteKit runtime env and renders the tag into the page head.

Tracked interactions include:

- Manual `page_view` events for server-rendered page loads.
- Page context such as page type, content group, topic, route slug, and conversion stage.
- CTA, contact-intent, internal-link, outbound-link, and button clicks with link text, title, destination, and page area.
- FAQ opens and scroll-depth milestones at 25%, 50%, 75%, and 90%.
- Contact form submit, success, error, select changes, and first field-focus events.

Contact form analytics avoid private content. Names, emails, URLs, and message text are not sent to GA4; only category selections, booleans, and length/timeline buckets are tracked.

## AI And LLM Discovery

The site exposes AI-friendly discovery files at `/llms.txt` and `/llms-full.txt`. They are generated from `src/lib/data/llm-context.js`, which pulls from the same service, skill, blog, FAQ, and location content used by the public pages.

- `/llms.txt`: concise route map and positioning summary for AI assistants.
- `/llms-full.txt`: fuller Markdown context with service summaries, skill summaries, blog guide summaries, FAQs, location pages, and guardrails.
- `/robots.txt`: links to the LLM files, points to the sitemap, and blocks `/api/` from crawlers.

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
- `src/routes/+layout.js` keeps SSR enabled and `src/routes/+layout.svelte` applies a reload boundary so links request full server-rendered documents.
- Dynamic service, skill, location, and blog routes use slug maps plus `+page.js` load functions.
- SEO is handled per page with `Seo.svelte`.
- PWA install metadata lives in `static/site.webmanifest`, favicon/app icons live in `static/`, and the cache strategy lives in `src/service-worker.js`.
- GA4 analytics live in `src/lib/analytics.js` and are mounted globally through `GoogleAnalytics.svelte`.
- AI/LLM discovery files are route-backed endpoints generated by `src/lib/data/llm-context.js`.
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

- Add automated tests for `/api/contact` with mocked Gmail API and SMTP responses.
- Move contact form rate limiting to durable storage if the app scales beyond one Node process.
- Move very large content arrays into smaller domain-specific modules if `content.js` becomes hard to scan.
- Expand structured data if new page types are added.
- Add consent-mode support if ad platforms or stricter privacy requirements are introduced.
