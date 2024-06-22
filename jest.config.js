export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/index.js', 'tests'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: {}
};