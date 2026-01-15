import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactPerf from "eslint-plugin-react-perf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // ---------------------------------------------
  // Base plugins
  // ---------------------------------------------
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-perf": reactPerf,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // ---------------------------------------------
  // Next.js + TypeScript
  // ---------------------------------------------
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ---------------------------------------------
  // TanStack Query
  // ---------------------------------------------
  ...compat.extends("plugin:@tanstack/eslint-plugin-query/recommended"),

  // ---------------------------------------------
  // Rules
  // ---------------------------------------------
  {
    rules: {
      // ---------- Overrides ----------
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",

      // ---------- Hooks (CRITICAL) ----------
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // ---------- Async / Data ----------
      "no-await-in-loop": "error",
      "no-promise-executor-return": "error",

      // ---------- React Performance ----------
      "react/jsx-no-bind": "error",
      "react/jsx-key": "error",

      "react-perf/jsx-no-new-object-as-prop": "error",
      "react-perf/jsx-no-new-function-as-prop": "error",
      "react-perf/jsx-no-jsx-as-prop": "error",

      // ---------- TanStack Query ----------
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/stable-query-client": "error",

      // ---------- Clean code ----------
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
