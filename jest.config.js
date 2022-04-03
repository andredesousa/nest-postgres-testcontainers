/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  rootDir: 'src',
  setupFiles: ['<rootDir>/test.ts'],
  testMatch: ['<rootDir>/app/**/*.spec.ts'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/app/**/*.(t|j)s'],
  coverageDirectory: '../reports/coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
