# Kerri Site Working Agreement

This repository contains the static website for Kez Armstrong, ornithologist and ecological consultant. Treat this file as the implementation contract for humans and coding agents.

## Product goals

- Present Kez as a credible, approachable specialist available for ornithological consultancy, technical reporting, GIS work, bird-ringing training, and research collaboration.
- Preserve the substance and voice of the existing `kezarmstrong.com` website while improving its structure, accessibility, visual quality, and maintainability.
- Make kestrel research and practical field experience distinctive without making the site feel like a conservation charity or a generic environmental consultancy.
- Ship a fast, resilient static site suitable for GitHub Pages.

## Technology

- Astro 7, TypeScript 6, Tailwind CSS 4, pnpm 12, Node 24.
- Static output only. Do not add React, a CMS, a database, client-side routing, analytics, or a cookie banner without an explicit requirement.
- Use Astro components and semantic HTML. Client-side JavaScript must be a progressive enhancement and justified by a user need.
- Use Sharp in tests/build tooling for image metadata checks. Public raster images must not contain EXIF, XMP, IPTC, or ICC metadata.

## Commands

- `pnpm dev`: local development server.
- `pnpm checks`: lint, formatting check, Astro type/content checks, and unit tests.
- `pnpm build`: run all checks, create the static build, and validate the generated pages.
- `pnpm preview`: serve the production build locally.
- `pnpm lighthouse`: audit the preview deployment.

Do not weaken or skip checks to make a change pass. Fix the underlying issue.

## Structure and dependency direction

```text
src/
  assets/       Local fonts and processed public images
  components/   Reusable, page-independent UI
  content/      Typed editorial data and long-form copy
  layouts/      Page shells
  pages/        File-based routes; page-only UI belongs in nearby _components/
  scripts/      Build and test utilities; never imported by runtime site code
  site/         Navigation, metadata, and site-wide configuration
  styles/       Global tokens and styles
private-source/ Ignored snapshots and original media from the former WordPress site
```

Keep dependencies one-way:

- pages -> layouts, components, site, content
- layouts -> components, site, content
- components -> site, content
- site -> content
- content -> no higher layer
- scripts may inspect content/site/components, but runtime code must never import scripts

Put generic components in `src/components`. Put a page-specific component in a `_components` directory beside its route. Use one primary component per folder.

## Code style

- Import project files through `@src/*`; do not use `../` imports.
- Use PascalCase for component files and their primary named exports.
- Prefer named types. Do not use anonymous object types in function signatures.
- Add explicit return types to TypeScript functions.
- Keep functions below their callers unless hoisting materially harms readability.
- Use at most three positional parameters; use a named options object beyond that.
- In Astro templates, use `condition && <Element />` and `!condition && <Element />` for element branches rather than ternaries.
- Leave a blank line between sibling HTML/Astro elements.
- Keep components small, semantic, and understandable without framework-specific cleverness.
- Format with Prettier and lint with ESLint. Make targeted fixes; do not mechanically rewrite unrelated files.

## Content and assets

- The site owner retains rights to editorial copy and original photography. Code is MIT licensed; see `CONTENT-LICENSE.md` for the separate content terms.
- Do not publish the archived WordPress export or unused source media. `private-source/` is for local migration evidence and must remain ignored.
- Use only images with known provenance. Prefer Kez's fieldwork photography. Do not introduce unverified stock photography.
- Preserve factual wording from the source where practical, but fix clear spelling, grammar, link, and accessibility defects.
- Do not silently modernise date-sensitive claims. Attach a source or date where a statistic may age.
- Every informative image needs useful alt text. Decorative images use empty alt text.
- The kestrel infographic must have an accessible text transcript.

## Design and accessibility

- Visual direction: warm field-journal editorial design, generous whitespace, restrained line work, and nature-derived colour rather than generic corporate green.
- Teal is the principal brand colour, carried over from the original site: original teal `#0C8384`, bright teal `#15B6B8`, and accessible deep teal `#086B70`. Core supporting colours are paper `#F5F2E9`, ink `#202A30`, slate `#354156`, lichen `#59613E`, rust `#9A5235`, sky `#7EA5BF`, and ochre `#D49A32`.
- Use self-hosted Newsreader for display typography and Inter for UI/body text.
- Meet WCAG 2.2 AA. Keyboard focus must be visible, landmarks and heading order must be meaningful, and the site must remain useful without JavaScript.
- Respect reduced-motion preferences. Do not add autoplaying or decorative motion that obscures content.
- Target Lighthouse scores of at least 95 for accessibility, best practices, and SEO, and at least 90 for performance. Aim for LCP <= 2.5 seconds and CLS <= 0.1.

## Routes and search behaviour

Canonical routes are `/`, `/services/`, `/about/`, `/kestrels-ni/`, `/cv/`, and `/contact/`.

- Preserve `/kestrels-ni/` and `/cv/`.
- Preserve `/projects/` as a static redirect to `/about/`, but exclude it from the sitemap.
- Every canonical page needs a unique title and description, one H1, canonical metadata, Open Graph metadata, and a useful no-script experience.
- Keep internal links root-relative and compatible with GitHub Pages custom-domain hosting.
- Generate a sitemap and `robots.txt`. Include only canonical indexable pages.

## Contact and deployment

- Version one is static. Contact actions are email and LinkedIn; do not pretend a form submission works.
- A later form may reuse the Cloudflare Worker, Turnstile, and Email Routing approach from the adjacent personal website. Keep contact UI isolated so this can be added without restructuring the whole site.
- Deploy via GitHub Actions and GitHub Pages. The production canonical origin is `https://kezarmstrong.com`.
- Do not create remote repositories, push branches, change DNS, or perform a production cutover without explicit authorisation.

## Before handing off

- Run `pnpm build`.
- Check keyboard navigation and layouts at approximately 390 px and 1440 px.
- Confirm the sitemap excludes redirects and includes every canonical page.
- Confirm no WordPress scripts, trackers, broken internal links, or metadata-bearing public raster files remain.
