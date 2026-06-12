# `src/routes/skills`

Skills index and dynamic skill-detail route namespace.

## Files

- `+page.svelte`: skills hub at `/skills/`. Groups capabilities into platforms, performance/reliability, SEO/measurement, integrations/tools, and content/search structure.

## Directories

- `[slug]/`: dynamic skill detail pages.

## Common Patterns

- Skills are technical capability pages, not separate service packages.
- Skill cards are generated from `skillPages`.
- Skill pages link back to relevant services through related service arrays.

## How It Is Used

The skills hub supports topical relevance and helps technical buyers recognize tools, platforms, and implementation areas.

## How To Extend

- Add new skill entries in `content.js`.
- Connect skills to services through `relatedServices` and `serviceSkillMap`.
- Add icon support in `ServiceIcon.svelte` when the skill appears in cards.

## Suggested Improvements

- Add a matrix showing which services use which skills.
- Add platform/tool examples if the resume/tooling content expands.
