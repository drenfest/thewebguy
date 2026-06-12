# `src/routes`

SvelteKit route tree. Every directory here maps to a URL segment or server endpoint.

## Files

- `+layout.svelte`: global layout. Imports `Header`, `Footer`, `GoogleAnalytics`, `MotionObserver`, and `app.css`, then renders the active route through `<slot />`.
- `+layout.js`: root route options. Forces trailing slashes for page URLs while file endpoints and static assets keep their extensions.
- `+page.svelte`: homepage. Builds the main conversion path: hero, problem chooser, service clusters, featured services, technical depth, local/remote support, rate, process, FAQ, and internal links.

## Directories

- `about/`: about/positioning page.
- `api/`: server endpoints.
- `blog/`: blog index and dynamic article route.
- `contact/`: contact/request form page.
- `faq/`: global FAQ page.
- `locations/`: location index and dynamic local pages.
- `llms.txt/`: concise AI/LLM discovery endpoint.
- `llms-full.txt/`: full AI/LLM context endpoint with service, skill, blog, FAQ, and location summaries.
- `privacy/`: privacy policy for contact form data, analytics, Gmail API delivery, and site usage.
- `rate/`: rate/pricing page.
- `robots.txt/`: dynamic robots.txt endpoint.
- `services/`: services index and dynamic service pages.
- `sitemap.xml/`: dynamic sitemap endpoint.
- `skills/`: skills index and dynamic skill pages.
- `terms/`: terms of service for site usage, contact requests, and hourly support scope.

## Common Patterns

- Static route pages are usually single `+page.svelte` files.
- Dynamic pages use `+page.js` to load a record by slug, then `+page.svelte` renders that record.
- Server endpoints use `+server.js`.
- Shared components and content are imported from `$lib`.
- Global GA4 pageview and interaction tracking is mounted in the root layout and disabled unless `PUBLIC_GA_MEASUREMENT_ID` is set.
- Page URLs are canonicalized with trailing slashes. File-like endpoints such as `sitemap.xml`, images, fonts, and manifests keep their extensions without a slash.
- AI/LLM endpoints are generated from `src/lib/data/llm-context.js` so machine-readable guidance stays aligned with visible site content.

## How It Is Used

SvelteKit turns this tree into pages and endpoints. The global layout wraps every page with shared navigation and footer CTA.

The analytics layer reads each route path to classify page type, content group, topic, and conversion stage for GA4 reporting.

## How To Extend

- Add a new static page by creating a folder with `+page.svelte`.
- Add a new dynamic collection by pairing a data map with `[slug]/+page.js` and `[slug]/+page.svelte`.
- Add a server endpoint with `+server.js` under the target route folder.
- When adding a major page type, update the LLM context generator if AI assistants need new citation or usage guidance.

## Suggested Improvements

- Add route-specific metadata conventions if more page types are added.
- Add endpoint tests for `api/contact`, `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt`.
- Keep CTAs away from directly-above-footer positions unless the footer CTA is removed.
