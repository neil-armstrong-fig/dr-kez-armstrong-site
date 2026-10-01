import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "astro/config";

// Production is served from the domain root. The GitHub Pages workflow sets SITE_BASE for the project-site preview.
const base = process.env.SITE_BASE || "/";

export default defineConfig({
  site: "https://kezarmstrong.com",
  base,
  output: "static",
  image: {
    layout: "constrained",
    breakpoints: [390, 640, 960, 1280, 1600],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {webp: {quality: 78}, avif: {quality: 58}},
    },
  },
  integrations: [
    sitemap({
      filter: (page): boolean => !page.endsWith("/projects/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
