import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig} from "eslint/config";

const contentRestriction = {
  group: ["@src/components/**", "@src/layouts/**", "@src/pages/**", "@src/scripts/**", "@src/site/**"],
  message: "Content must not depend on rendering, site configuration, or command-line code.",
};

const siteRestriction = {
  group: ["@src/components/**", "@src/layouts/**", "@src/pages/**", "@src/scripts/**"],
  message: "Site configuration must not depend on rendering or command-line code.",
};

const componentRestriction = {
  group: ["@src/layouts/**", "@src/pages/**", "@src/scripts/**"],
  message: "Shared components must not depend on layouts, routes, or command-line code.",
};

const layoutRestriction = {
  group: ["@src/pages/**", "@src/scripts/**"],
  message: "Layouts must not depend on routes or command-line code.",
};

export default defineConfig(
  {ignores: [".astro/**", "dist/**", "node_modules/**", "private-source/**"]},
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      globals: {...globals.browser, ...globals.node},
      parserOptions: {tsconfigRootDir: import.meta.dirname},
    },
    rules: {
      eqeqeq: ["error", "smart"],
      "no-multiple-empty-lines": ["error", {max: 1}],
      "@typescript-eslint/explicit-function-return-type": ["error", {allowExpressions: true}],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*", "../**"],
              message: "Import through @src/* rather than a parent-relative path.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/content/**/*.{ts,astro}"],
    rules: {"no-restricted-imports": ["error", {patterns: [contentRestriction]}]},
  },
  {
    files: ["src/site/**/*.{ts,astro}"],
    rules: {"no-restricted-imports": ["error", {patterns: [siteRestriction]}]},
  },
  {
    files: ["src/components/**/*.{ts,astro}"],
    rules: {"no-restricted-imports": ["error", {patterns: [componentRestriction]}]},
  },
  {
    files: ["src/layouts/**/*.{ts,astro}"],
    rules: {"no-restricted-imports": ["error", {patterns: [layoutRestriction]}]},
  },
  {
    files: ["src/**/*.astro"],
    languageOptions: {globals: {...globals.browser}},
  },
  {
    files: ["src/env.d.ts"],
    rules: {"@typescript-eslint/triple-slash-reference": "off"},
  },
);
