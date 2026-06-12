# `src/routes/api`

Server-only API route namespace.

## Directories

- `contact/`: receives contact form submissions and handles delivery.

## Common Patterns

- Endpoints live in nested folders with `+server.js`.
- Server routes can access private env vars through `$env/dynamic/private`.
- Client pages call these routes with `fetch`.

## How It Is Used

The contact page posts form data to `/api/contact`, which validates the request and sends email through the configured server-side SMTP settings.

## How To Extend

- Add a new endpoint in its own folder.
- Keep secrets on the server only.
- Return small JSON responses with clear user-facing error messages.

## Suggested Improvements

- Add rate limiting or spam protection for public endpoints.
- Add tests that mock SMTP success and failure cases.
