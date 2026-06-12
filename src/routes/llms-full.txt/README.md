# `src/routes/llms-full.txt`

Full AI/LLM context endpoint.

## Files

- `+server.js`: returns `/llms-full.txt` as Markdown/plain text using the shared generator in `src/lib/data/llm-context.js`.

## Purpose

Provides a richer site summary for AI assistants and answer engines. It includes canonical facts, positioning guardrails, service details, skill details, blog guide summaries, sitewide FAQs, local service-area notes, and preferred citation targets.

## Common Patterns

- The endpoint stays generated from the canonical content model.
- The output is Markdown because it is easy for humans, search systems, and LLM tools to parse.
- The route is file-like, so it should not receive the site's trailing slash behavior.

## How To Extend

Add new content in `src/lib/data/content.js`. Update `src/lib/data/llm-context.js` only when the output structure, usage guidance, or AI-specific guardrails need to change.

## Suggested Improvements

- Add a lightweight endpoint snapshot check so future content changes do not accidentally remove core guidance.
