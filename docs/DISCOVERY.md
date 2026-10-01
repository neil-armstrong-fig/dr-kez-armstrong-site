# Discovery and migration record

Research completed on 1 October 2026 before implementation.

## Legacy-site audit

The WordPress sitemap index at `https://kezarmstrong.com/wp-sitemap.xml` exposed one page sitemap and no
post sitemap with content. The page sitemap contained four public URLs:

| Legacy URL      | WordPress ID | Migration destination            |
| --------------- | -----------: | -------------------------------- |
| `/`             |           10 | `/`                              |
| `/projects/`    |           14 | `/about/` with a legacy redirect |
| `/kestrels-ni/` |           20 | `/kestrels-ni/`                  |
| `/cv/`          |           78 | `/cv/`                           |

All four pages appeared in the site's navigation. Cross-checking the public WordPress REST API found no
additional published pages or posts, so there was no orphaned editorial page content hidden from the
navigation. The public media API exposed 27 records.

The migration archive under ignored `private-source/wordpress/` contains:

- HTML snapshots for all four public pages;
- the sitemap index, page sitemap and robots file;
- the page, post and media API responses;
- all 27 original media files.

This archive is migration evidence, not deployable site content. It remains excluded by `.gitignore` because
it contains original media, duplicated assets, stock imagery of uncertain provenance, and metadata that does
not belong in a public repository.

## Content decisions

- Preserve the original meaning and first-person voice with light grammar and punctuation cleanup.
- Correct the malformed BBC News link, “Charted” to “Chartered”, “licenced” to “licensed”, and the British
  Ornithologists' Union name.
- Keep date-sensitive kestrel statistics in their original context rather than presenting them as a new 2026
  population assessment.
- Give the kestrel infographic a complete text transcript.
- Publish Kez's fieldwork photography and the original project infographic after metadata-stripping
  re-encoding. Do not publish the old theme's unverified stock kestrel photography.
- Use LinkedIn and direct email for version-one contact. A Cloudflare Worker, Turnstile and Email Routing form
  can follow the adjacent personal-site pattern later.

## Visual reference review

Three useful patterns emerged from reviewing ornithologist and ecological-consultancy sites:

- Vitek Jirinec's academic/fieldwork presentation demonstrates the value of authentic field photography and
  a personal research voice. This informed the portrait-led home page and documentary image captions.
- Carney Ecology demonstrates clear service grouping, confident spacing and a professional consultancy
  hierarchy. This informed the dedicated services route and numbered service rows.
- Ecology Consulting demonstrates the importance of a direct proposition and an obvious enquiry path. This
  informed the home-page lead, repeated project calls to action and isolated contact route.

The design intentionally avoids the category's common full-screen green overlay, crowded navigation and
generic leaf iconography. It uses an editorial field-journal character: Newsreader display typography, Inter
for practical reading, fine rules, generous space, restrained captions and an original hovering-kestrel line
mark.

## Colour direction

The palette restores teal as the dominant brand colour from the original website, then supports it with
colours drawn from the existing photographs and the ecology/raptor subject:

| Token         | Hex       | Role                                         |
| ------------- | --------- | -------------------------------------------- |
| Paper         | `#F5F2E9` | Main ground and light text                   |
| Ink           | `#202A30` | Primary text and footer                      |
| Slate         | `#354156` | Secondary text                               |
| Original teal | `#0C8384` | Primary brand identity and decoration        |
| Bright teal   | `#15B6B8` | Marks and highlights on dark grounds         |
| Deep teal     | `#086B70` | Accessible links, labels and large fields    |
| Lichen        | `#59613E` | Supporting field/ecology accent              |
| Rust          | `#9A5235` | Supporting kestrel-derived accent            |
| Sky           | `#7EA5BF` | Supporting visual accent                     |
| Ochre         | `#D49A32` | Secondary highlight and warm image reference |

Contrast-sensitive small text uses deep teal on light grounds and white on deep teal fields to preserve the
original character while meeting WCAG AA.

## Resulting information architecture

- `/` — positioning, proof, services and kestrel research focus
- `/services/` — specialist ornithology, reporting, GIS/data and bird-ringing support
- `/about/` — biography and the original ringing-project content
- `/kestrels-ni/` — research, reporting routes, population context and infographic transcript
- `/cv/` — skills, education, honours, media, publications, memberships and conferences
- `/contact/` — email and LinkedIn contact routes
- `/projects/` — noindex static redirect to `/about/`

The sitemap contains the six canonical routes only.
