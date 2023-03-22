import type { Config } from 'jest';

const config: Config = {
    testMatch: ["<rootDir>/test/**/*.ts"],
    preset: "ts-jest",
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.dist.json'
        }
    },
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: "out/coverage",
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
    },
};

export default config;
import * as console from "console"
global.console = console

