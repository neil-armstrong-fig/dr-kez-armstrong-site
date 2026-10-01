# Kez Armstrong

The source for [kezarmstrong.com](https://kezarmstrong.com): a static personal and consultancy site for
ornithologist and ecological consultant Kez Armstrong.

## Stack

- Astro 7 with static output
- TypeScript 6 in strict mode
- Tailwind CSS 4
- Sharp-backed responsive images
- Vitest, ESLint, Prettier, Astro Check, and Lighthouse CI
- GitHub Pages deployment through GitHub Actions

The site deliberately has no runtime framework, CMS, analytics, tracking, database, or server dependency.
Direct email and LinkedIn links are used for contact in version one.

## Local development

Use Node 24 and pnpm 12:

```sh
pnpm install
pnpm dev
```

Before opening a pull request:

```sh
pnpm build
```

That command runs linting, formatting checks, Astro type checks, metadata tests, a production build, and
validation of the generated pages and sitemap.

## Content migration

The previous WordPress site was audited from its sitemap and REST API. It exposed four public pages—home,
projects, Kestrels NI, and CV—and no posts or orphaned public pages. The new information architecture keeps
the original material while separating consultancy services, biography, kestrel research, CV, and contact.
The legacy `/projects/` route permanently redirects to `/about/`.

Raw HTML, API responses, and original WordPress media are kept locally under ignored `private-source/` for
migration traceability. They are never deployed. Only selected original fieldwork photography is published,
and every public raster source has been re-encoded to strip embedded metadata. Unverified stock photography
from the old theme is not published.

## Rights

Source code is MIT licensed. Editorial copy, branding, research material, and photography are separately
reserved; see [CONTENT-LICENSE.md](CONTENT-LICENSE.md).

## Deployment

The Pages workflow builds and uploads `dist/`. The repository is prepared for the custom domain
`kezarmstrong.com`, but repository creation, DNS changes, and production cutover are intentionally separate
operator actions.

The contact page is isolated so a later Cloudflare Worker, Turnstile, and Email Routing implementation can
reuse the pattern in the adjacent personal website without introducing a server into this repository.
