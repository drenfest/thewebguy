# `src/routes/privacy`

Privacy Policy route at `/privacy/`.

## Files

- `+page.svelte`: renders the Privacy Policy with SEO metadata, hero, breadcrumbs, contact-form data handling, analytics disclosure, Gmail API disclosure, storage/retention notes, and user choices.

## Common Patterns

- Uses the same route composition as other static pages: `Seo`, `Hero`, `Breadcrumbs`, `SectionHeading`, and `InternalLinkCopy`.
- Keeps contact instructions routed through `/contact/` rather than publishing an email address.
- Includes a Google API Limited Use disclosure because the contact form can send notifications through Gmail API.

## How It Is Used

Google OAuth configuration can use this route as the privacy policy URL. The footer links to it after the page exists, and the sitemap includes it for discovery.

## How To Extend

- Update the effective date when making meaningful policy changes.
- Add new data-processing disclosures when adding features such as accounts, payments, CRM storage, file uploads, or public comments.
- Keep analytics and API disclosures aligned with the actual implementation.

## Suggested Improvements

- Have a qualified legal reviewer tighten the policy if the site starts handling payments, user accounts, client portals, sensitive files, or multi-user SaaS features.
- Add consent-mode or cookie preference controls if advertising tags or stricter privacy requirements are introduced.

