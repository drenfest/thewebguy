# `src/routes/llms.txt`

Root LLM discovery endpoint.

## Files

- `+server.js`: returns `/llms.txt` as Markdown/plain text using the shared generator in `src/lib/data/llm-context.js`.

## Purpose

Provides a concise AI-friendly map of the site: positioning, rate, core pages, services, skills, blog guides, local service areas, and usage notes for AI assistants.

## Common Patterns

- Keep this endpoint generated from shared content instead of hand-maintaining route lists.
- Use root file-style routing so the public URL is `/llms.txt`, not a trailing-slash page.

## How To Extend

Update `src/lib/data/llm-context.js` when new AI-facing guidance is needed. Add new services, skills, posts, and locations in `content.js`; this endpoint will include them automatically.

## Suggested Improvements

- Add tests that assert the endpoint includes key routes, rate language, contact guidance, and no public email address.
