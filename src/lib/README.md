# `src/lib`

Shared application code imported with the `$lib` alias.

## Directories

- `components/`: reusable Svelte UI components for layout, navigation, cards, SEO, related links, FAQs, and animations.
- `config/`: small site-level constants.
- `data/`: content and navigation models that power the static and dynamic pages.
- `state/`: client-side Svelte state used across routes.
- `analytics.js`: GA4 client helper for page context, route-change pageviews, click tracking, FAQ opens, scroll depth, and privacy-conscious form events.

## Common Patterns

- Routes stay thin by importing data and shared components from `$lib`.
- Content arrays and slug maps live in data files rather than being duplicated across route components.
- UI components are intentionally practical and conversion-focused.
- Analytics helpers are no-ops unless `PUBLIC_GA_MEASUREMENT_ID` is configured.

## How It Is Used

Most pages import components such as `Hero`, `SectionHeading`, `CardGrid`, and `CtaBand`, then feed them content from `content.js` or local route arrays.

`analytics.js` is mounted once by `GoogleAnalytics.svelte` in the root layout. Route pages can import `trackEvent` for page-specific events, as the contact form does.

## How To Extend

- Put reusable UI in `components`.
- Put shared content structures in `data`.
- Put environment-independent constants in `config`.
- Put reactive client state in `state`.
- Add new custom analytics events through `trackEvent`, but avoid sending raw names, emails, URLs, message text, or other private form content.

## Suggested Improvements

- Split `content.js` into `services.js`, `skills.js`, `blog.js`, and `locations.js` if editing becomes slow.
- Add lightweight unit tests for URL helpers and slug maps.
- Add component usage examples if another developer starts contributing.
