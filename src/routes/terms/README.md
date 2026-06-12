# `src/routes/terms`

Terms of Service route at `/terms/`.

## Files

- `+page.svelte`: renders the Terms of Service with SEO metadata, hero, breadcrumbs, informational-use language, contact request terms, hourly support scope, acceptable use, third-party platform notes, limitations, privacy link, and update language.

## Common Patterns

- Uses static page composition with shared layout components.
- Keeps the terms practical and aligned with contract website support rather than broad SaaS boilerplate.
- Links back to `/privacy/` and `/contact/` with descriptive titles.

## How It Is Used

Google OAuth configuration can use this route as the terms URL. The footer links to it after the page exists, and the sitemap includes it for discovery.

## How To Extend

- Update the effective date when terms materially change.
- Add sections if the site later supports accounts, payments, subscriptions, client portals, file uploads, or API access for visitors.
- Keep the public terms separate from any signed contractor agreement or statement of work.

## Suggested Improvements

- Have a qualified legal reviewer tighten the terms before adding paid checkout, stored client files, authenticated accounts, or recurring subscription features.
- Add an accessibility/contact path if the site later publishes a formal accessibility statement.

