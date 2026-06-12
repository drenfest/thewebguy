# `src/routes/api/contact`

Contact form delivery endpoint at `/api/contact`.

## Files

- `+server.js`: handles POST requests from the contact form, validates required fields, normalizes submitted values, builds a plain-text/HTML email body, and sends the request to the private destination.

## Common Patterns

- Uses `$env/dynamic/private` so email provider secrets are never exposed to the browser.
- Requires `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD`.
- Sends through generic SMTP from the Node server process using built-in Node modules.
- Returns a configuration error when SMTP is missing instead of exposing the private recipient address.
- Uses submitted email as `reply_to`.

## How It Is Used

`src/routes/contact/+page.svelte` posts JSON form data here. The endpoint returns `mode: "smtp-email"` after server-side delivery.

## How To Extend

- Add SMTP-provider-specific tags or metadata if tracking request sources.
- Add a honeypot field and reject filled honeypot submissions.
- Add a CRM/database handoff after successful email delivery.

## Suggested Improvements

- Add tests for missing payload, missing required fields, SMTP success, SMTP failure, and missing configuration.
- Add idempotency protection if duplicate submissions become a problem.
- Consider moving email body construction into a helper if more notification types are added.
