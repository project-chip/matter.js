import type {Config} from 'jest';

const config: Config = {
  testMatch: [ "<rootDir>/test/**/*.ts" ],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: "out/coverage",
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
  },
};

export default config;
