import { fixupConfigRules } from '@eslint/compat';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier/flat';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Wrap Next.js configs with fixupConfigRules to support ESLint 10
  // (eslint-plugin-react uses removed APIs like context.getFilename)
  ...fixupConfigRules(nextCoreWebVitals),
  // Override the Next.js babel parser for JS files — its bundled eslint-scope
  // lacks the addGlobals() method required by ESLint 10.
  {
    name: 'custom/js-parser-fix',
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      parser: tsParser,
    },
  },
  prettierConfig,
  {
    name: 'custom/best-practices',
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
];
export default config;
