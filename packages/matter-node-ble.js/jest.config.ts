import type { Config } from "jest";

const config: Config = {
    testMatch: ["<rootDir>/test/**/*Test.ts"],
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.dist.json",
            },
        ],
    },
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "out/coverage",
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.[jt]s$": "$1",
    },
    maxWorkers: "25%", // to make sure jest is not using all available resources
};

export default config;
