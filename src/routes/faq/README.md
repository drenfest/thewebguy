# `src/routes/faq`

FAQ page route at `/faq/`.

## Files

- `+page.svelte`: renders global FAQs from `content.js` and supports broad pre-contact questions.

## Common Patterns

- Uses `FaqList.svelte` for consistent FAQ markup.
- FAQ pages and sections should stay last in the page flow when present.
- Answers link to relevant service/contact pages when useful.

## How It Is Used

The FAQ page supports visitors who need quick clarification on hourly work, platforms, timelines, and how to send requests.

## How To Extend

- Add questions to the global `faqs` array in `content.js`.
- Keep answers direct and practical.
- Link to relevant services instead of repeating long explanations.

## Suggested Improvements

- Add FAQ schema once structured data is implemented.
- Review FAQs against contact-form submissions to add real objections over time.
