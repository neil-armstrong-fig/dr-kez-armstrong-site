import * as astroPlugin from "prettier-plugin-astro";

/** @type {import("prettier").Config} */
export default {
  plugins: [astroPlugin],
  printWidth: 110,
  bracketSpacing: false,
  trailingComma: "all",
  overrides: [
    {
      files: "*.astro",
      options: {parser: "astro"},
    },
  ],
};
