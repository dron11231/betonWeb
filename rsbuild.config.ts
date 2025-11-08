/* eslint-disable @typescript-eslint/naming-convention */
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
        svgo: true,
      },
      exclude: [/\*.svg?inline/],
    }),
  ],
  output: {
    distPath: {
      root: path.join(__dirname, 'dist'),
      js: 'js',
      svg: 'images',
      font: 'fonts',
      image: 'images',
    },
    filename: {
      js: 'js/[name].[contenthash:8].js',
    },
    cleanDistPath: true,
    cssModules: {
      namedExport: false,
      exportLocalsConvention: 'camelCase',
      localIdentName: '[local]__[hash:base64:5]',
      auto: (resource) => resource.includes('.scss'),
    },
  },
  source: {
    decorators: {
      version: '2022-03',
    },
    preEntry: 'core-js/stable',
    entry: {
      index: './src/index.tsx',
    },
    define: {
      MSW_ACTIVE: JSON.stringify(process.env.MSW_ACTIVE || 'false'),
      IS_LOCAL: JSON.stringify(process.env.IS_LOCAL) || 'false',
    },
  },
  tools: {
    lightningcssLoader: true,
    htmlPlugin: {
      template: './public/index.html',
    },
  },
});
