import {access, readFile, readdir} from "node:fs/promises";
import {join} from "node:path";

type CanonicalRoute = {
  readonly route: string;
  readonly output: string;
};

const distDirectory = new URL("../../../dist/", import.meta.url);
const canonicalOrigin = "https://kezarmstrong.com";
const canonicalRoutes: readonly CanonicalRoute[] = [
  {route: "/", output: "index.html"},
  {route: "/services/", output: "services/index.html"},
  {route: "/about/", output: "about/index.html"},
  {route: "/kestrels-ni/", output: "kestrels-ni/index.html"},
  {route: "/cv/", output: "cv/index.html"},
  {route: "/contact/", output: "contact/index.html"},
];

const titles = new Set<string>();
const descriptions = new Set<string>();
const failures: string[] = [];

for (const page of canonicalRoutes) {
  const html = await readFile(new URL(page.output, distDirectory), "utf8");
  validatePage(page, html);
  await validateInternalLinks(page, html);
}

await validateRedirect();
await validateSitemap();

if (failures.length > 0) {
  console.error(`Build validation failed:\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${canonicalRoutes.length} canonical pages, the legacy redirect, and the sitemap.`);
}

function validatePage(page: CanonicalRoute, html: string): void {
  const title = capture(html, /<title>([^<]+)<\/title>/i);
  const description = capture(html, /<meta name="description" content="([^"]+)"/i);
  const expectedCanonical = `${canonicalOrigin}${page.route}`;
  const headingCount = [...html.matchAll(/<h1(?:\s|>)/gi)].length;

  check(Boolean(title), `${page.route} has no title`);
  check(Boolean(description), `${page.route} has no meta description`);
  check(headingCount === 1, `${page.route} has ${headingCount} h1 elements instead of one`);
  check(
    html.includes(`<link rel="canonical" href="${expectedCanonical}"`),
    `${page.route} has the wrong canonical URL`,
  );
  check(html.includes('property="og:title"'), `${page.route} is missing an Open Graph title`);
  check(html.includes('property="og:description"'), `${page.route} is missing an Open Graph description`);
  check(!/wp-content|wp-includes|wordpress/i.test(html), `${page.route} contains a WordPress dependency`);

  if (title) {
    check(!titles.has(title), `${page.route} duplicates the title '${title}'`);
    titles.add(title);
  }

  if (description) {
    check(!descriptions.has(description), `${page.route} duplicates a meta description`);
    descriptions.add(description);
  }
}

async function validateInternalLinks(page: CanonicalRoute, html: string): Promise<void> {
  const links = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1]);

  for (const link of links) {
    if (!link || link.startsWith("//") || link.startsWith("/#") || hasStaticExtension(link)) {
      continue;
    }

    const pathname = link.split("#")[0]?.split("?")[0];
    if (!pathname) {
      continue;
    }

    const output = pathname === "/" ? "index.html" : `${pathname.replace(/^\//, "")}index.html`;

    try {
      await access(new URL(output, distDirectory));
    } catch {
      failures.push(`${page.route} links to missing internal route ${pathname}`);
    }
  }
}

async function validateRedirect(): Promise<void> {
  const html = await readFile(new URL("projects/index.html", distDirectory), "utf8");

  check(html.includes("/about/"), "/projects/ does not redirect to /about/");
}

async function validateSitemap(): Promise<void> {
  const entries = await readdir(distDirectory);
  const sitemapFiles = entries.filter((entry) => entry.startsWith("sitemap") && entry.endsWith(".xml"));
  const sitemapParts = await Promise.all(
    sitemapFiles.map((entry) => readFile(join(distDirectory.pathname, entry), "utf8")),
  );
  const sitemap = sitemapParts.join("\n");

  check(sitemapFiles.length > 0, "No sitemap was generated");

  for (const page of canonicalRoutes) {
    check(sitemap.includes(`${canonicalOrigin}${page.route}`), `Sitemap is missing ${page.route}`);
  }

  check(!sitemap.includes(`${canonicalOrigin}/projects/`), "Sitemap includes the legacy /projects/ redirect");
}

function capture(value: string, pattern: RegExp): string | undefined {
  return pattern.exec(value)?.[1];
}

function hasStaticExtension(pathname: string): boolean {
  return /\.(?:avif|css|gif|ico|jpe?g|js|pdf|png|svg|webp|xml|txt)(?:[?#]|$)/i.test(pathname);
}

function check(condition: boolean, message: string): void {
  if (!condition) {
    failures.push(message);
  }
}
