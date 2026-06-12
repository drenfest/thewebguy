# `static`

Public asset directory. Files here are served directly from the site root and can be referenced with paths like `/images/example.png`.

## Directories

- `fonts/`: local web fonts used by the global design system.
- `icons/`: source/reference icon files plus PWA icon exports.
- `images/`: bitmap imagery used by the site.

## Files

- `apple-touch-icon.png`: iOS home screen icon.
- `favicon.ico`: legacy multi-size favicon.
- `favicon.svg`: source SVG favicon based on the site logo.
- `favicon-16x16.png` and `favicon-32x32.png`: small browser favicon PNGs.
- `site.webmanifest`: installable PWA manifest with app name, theme colors, icons, and shortcuts.

## Common Patterns

- Files in `static` should be optimized before committing because they are served as-is.
- Use stable, descriptive filenames because public URLs can be cached.
- Prefer local assets for performance and privacy when the asset is core to the site design.

## How It Is Used

The Svelte app references these assets directly from markup and CSS. For example, the hero image uses `/images/technical-web-support-hero.png`, font faces in `styles.css` use `/fonts/...`, and `src/app.html` links the favicon and PWA manifest assets.

## How To Extend

- Add images to `static/images`.
- Add SVG sources or public icon files to `static/icons`.
- Add local fonts to `static/fonts`, then update `@font-face` declarations in `styles.css`.
- Update `site.webmanifest` and regenerate PNG exports when the app icon changes.

## Suggested Improvements

- Add AVIF/WebP variants for large bitmap images.
- Add a small asset inventory if more hero/service images are added.
- Periodically audit unused public files because static assets are easy to forget.
