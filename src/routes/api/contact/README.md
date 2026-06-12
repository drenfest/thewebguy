# `src/routes/api/contact`

Contact form delivery endpoint at `/api/contact`.

## Files

- `+server.js`: handles POST requests from the contact form, validates required fields, normalizes submitted values, builds a plain-text/HTML email body, and sends the request to the private destination.

## Common Patterns

- Uses `$env/dynamic/private` so email provider secrets are never exposed to the browser.
- Supports Gmail API delivery with `CONTACT_EMAIL_PROVIDER=gmail`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `GMAIL_CLIENT_ID`, `GMAIL_CLIENT_SECRET`, and `GMAIL_REFRESH_TOKEN`.
- Supports generic SMTP delivery with `CONTACT_EMAIL_PROVIDER=smtp`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASSWORD`.
- Uses Gmail API over HTTPS for Render free hosting because outbound SMTP ports can time out there.
- Sends SMTP through built-in Node modules when SMTP is explicitly configured and reachable.
- Returns a configuration error when email delivery is missing instead of exposing the private recipient address.
- Uses submitted email as `reply_to`.

## How It Is Used

`src/routes/contact/+page.svelte` posts JSON form data here. The endpoint returns `mode: "gmail-api-email"` or `mode: "smtp-email"` after server-side delivery.

## How To Extend

- Add provider-specific tags or metadata if tracking request sources.
- Add a honeypot field and reject filled honeypot submissions.
- Add a CRM/database handoff after successful email delivery.

## Suggested Improvements

- Add tests for missing payload, missing required fields, Gmail API success/failure, SMTP success/failure, and missing configuration.
- Add idempotency protection if duplicate submissions become a problem.
- Consider moving email body construction into a helper if more notification types are added.
