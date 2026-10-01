import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "astro/config";

export default defineConfig({
  site: "https://kezarmstrong.com",
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
