import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import pluginCssModules from 'eslint-plugin-css-modules';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    plugins: {
      js,
      import: pluginImport,
      'css-modules': pluginCssModules,
      pluginReact,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        react: {
          version: 'detect',
        },
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        },
      },
    },
    rules: {
      'import/no-unresolved': ['error', { ignore: ['\\.svg\\?svgr$'] }],
      'import/no-duplicates': ['error', { considerQueryString: true }],
      'no-duplicate-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          prefix: ['I'],
          selector: 'interface',
          format: ['PascalCase'],
          filter: {
            regex: '^(Window)$',
            match: false,
          },
        },
        {
          prefix: ['E'],
          selector: 'enum',
          format: ['PascalCase'],
        },
        {
          prefix: ['T'],
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: './*.scss',
              group: 'sibling',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'css-modules/no-undef-class': 'error',
      'css-modules/no-unused-class': 'warn',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
]);
