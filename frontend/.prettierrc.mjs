/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        arrowParens: 'always',
        printWidth: 80,
        trailingComma: 'all',
      },
    },
  ],
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  arrowParens: 'always',
  printWidth: 80,
  trailingComma: 'all',
};