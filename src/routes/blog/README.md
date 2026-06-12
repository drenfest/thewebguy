# `src/routes/blog`

Blog index and article route namespace.

## Files

- `+page.svelte`: blog landing page at `/blog/`. Highlights start-here troubleshooting posts, specific broken-site topics, and all posts.

## Directories

- `[slug]/`: dynamic blog article route.

## Common Patterns

- Blog cards are generated from `blogPosts` and `somethingBrokePosts` in `content.js`.
- Internal links route readers toward services, skills, and contact.
- CTAs appear before the final FAQ on article pages, keeping FAQs last.

## How It Is Used

The blog index supports topical relevance and helps visitors identify common problems before requesting help.

## How To Extend

- Add post records to `content.js`.
- Add related links and FAQs in the post object.
- Link posts from service pages when they support search intent.

## Suggested Improvements

- Add categories or filters if the blog grows beyond a single scanning page.
- Add article schema and FAQ schema.
