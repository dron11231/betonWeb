import { createJsWithTsEsmPreset } from 'ts-jest';

const tsconfig = 'tsconfig.json';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/path-to-fileMock.js',
    '\\.svg\\?(url|inline)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/svgr.js',
    '\\.svg\\?svgr$': '<rootDir>/svg.js',
    '^konva': 'konva/konva',
  },
  transform: {
    ...createJsWithTsEsmPreset({
      tsconfig: `./${tsconfig}`,
      isolatedModules: true,
      diagnostics: false,
    }).transform,
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.tsx?$': '@swc/jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  unmockedModulePathPatterns: ['node_modules/react/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
