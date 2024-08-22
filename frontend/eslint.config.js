import eslintPluginAstro, { rules } from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
];
