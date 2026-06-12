# `src/routes/blog/[slug]`

Dynamic blog article route at `/blog/:slug/`.

## Files

- `+page.js`: loads a post from `blogMap` by `params.slug` and returns 404 when missing.
- `+page.svelte`: renders the article hero, table of contents, article body, checklists, callouts, internal links, CTA, related posts, and final FAQ.

## Common Patterns

- Article content is data-driven from `content.js`.
- Section IDs are generated from headings unless explicit IDs are provided.
- The table of contents is generated from `post.toc` or section headings.
- FAQs render last when present.

## How It Is Used

This route turns structured blog records into full article pages without needing one Svelte file per post.

## How To Extend

- Add new section types carefully in `+page.svelte` only if the data model needs them.
- Keep article content in `content.js` so sitemap, cards, and related links can use the same source.
- Use `iconForHref()` patterns when linking services/skills in related cards.

## Suggested Improvements

- Add estimated reading time.
- Add published/updated dates if editorial history becomes important.
- Add automated checks for duplicate generated section IDs.
