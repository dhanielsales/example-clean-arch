const { name } = require('./package.json');

export default {
  displayName: name,
  clearMocks: true,
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'jest.setup.ts',
    '<rootDir>/configs/',
    'jest.config.ts',
    '.json',
    '.snap'
  ],
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/src/**/*.spec.ts",
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};


process.env = Object.assign(process.env, {
  ANY_ENV_KEY: 'any_value',
})
