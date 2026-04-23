/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^vscode$': '<rootDir>/__mocks__/vscode.ts',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
    }],
  },
  testMatch: [
    '**/client/src/**/*.test.ts',
    '**/client/src/**/*.spec.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  verbose: true,
  testTimeout: 30000
};
