# `src/lib/state`

Client-side Svelte state shared across routes.

## Files

- `contact-state.svelte.js`: reactive contact form draft state, last submitted timestamp, and last selected service.

## Common Patterns

- Uses Svelte 5 `$state` for simple shared state.
- Stores form draft values so contact-page interactions can persist during navigation in the running app.
- Keeps state client-side only; final delivery happens through `/api/contact`.

## How It Is Used

`src/routes/contact/+page.svelte` binds form fields directly to `contactState.draft`, then sends a JSON copy to the contact endpoint.

## How To Extend

- Add fields here when the contact form gains new inputs.
- Keep sensitive delivery details out of client state.
- Reset draft values after successful submission if you want the form to clear.

## Suggested Improvements

- Add a `resetContactDraft()` helper for cleaner post-submit behavior.
- Add local storage persistence only if users are expected to draft longer requests.
- Add validation helpers if form rules become more complex.
