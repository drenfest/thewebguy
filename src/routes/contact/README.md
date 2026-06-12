# `src/routes/contact`

Contact/request form page at `/contact/`.

## Files

- `+page.svelte`: renders the contact hero, rate callout, request form, selects from services/skills/locations, and posts submissions to `/api/contact`.

## Common Patterns

- Uses `contactState.draft` for reactive form values.
- Form submission is handled with client-side `fetch`.
- Success and error messages are rendered in-page.
- The hero CTA points to `#request-form` so users can jump directly to the form.
- Contact form analytics use `trackEvent` for submit, success, error, and select-change events.

## How It Is Used

This page is the main conversion endpoint for website requests. The form collects URL, issue details, timeline, work type, and approximate hours.

GA4 events on this route avoid raw private values. The page tracks selected categories, timeline/detail buckets, booleans such as whether a URL was provided, and delivery outcome.

## How To Extend

- Add new fields to `contact-state.svelte.js`, the form markup, and `/api/contact`.
- Keep destination email and provider secrets out of this page.
- Update select options by changing source content data, not hardcoding duplicates.
- If adding analytics for a new field, track a category or boolean rather than the raw value when the field may contain private details.

## Suggested Improvements

- Add client-side validation messages for URL and required details.
- Add a honeypot or challenge-free spam control.
- Clear the draft after successful server-side delivery if preferred.
