import eslint from "@eslint/js";
import ts from "typescript";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      }
    },
    files: ["src/**/*.ts"],
    rules: {
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always",
        },
      ],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
    }
  },
  {
    ignores: ["node_modules", "dist"],
  }
]