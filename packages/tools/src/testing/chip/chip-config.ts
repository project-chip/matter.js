/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Path to CHIP-related files files for Docker build, relative to tools/src
 */
export const DOCKER_BUILD_PATH = "chip";

/**
 * We use this as both the image and container name.
 */
export const DOCKER_NAME = "matterjs-chip-test";

/**
 * Tests we run by default.
 */
export const TESTS = [
    "Test_AddNewFabricFromExistingFabric",
    "Test_TC_BINFO*",
    "Test_TC_BRBINFO*",
    "Test_TC_CADMIN*",
    "Test_TC_CGEN*",
    "Test_TC_CNET*",
    "Test_TC_DESC*",
    "Test_TC_?LABEL*",
    "Test_TC_OO*",
    "Test_TC_OPCREDS*",
    "TestArmFailSafe",
    "TestBasicInformation",
    "TestCASERecovery",
    "TestCommandsById",
    "TestCommissioningWindow",
    "TestFabricRemovalWhileSubscribed",
    "TestGeneralCommissioning",
    "TestMultiAdmin",
    "TestOperationalCredentialsCluster",
    "TestSelfFabricRemoval",
    "TestSubscribe_*",
    "TestUserLabelCluster*",
    "TestDiscovery",
];

/**
 * Tests with unreasonably long runtime.  Not that the default set is reasonably fast.
 */
export const SLOW_TESTS = ["Test_TC_CC_*", "Test_TC_LVL_*", "Test_TC_WNCV_*"];

/**
 * Default applications run by the CHIP test harness.
 */
export const DEFAULT_APPS = {
    ALL_CLUSTERS: "/matter.js/chip-testing/dist/esm/AllClustersTestApp.js",
    BRIDGE: "/matter.js/chip-testing/dist/esm/BridgeTestApp.js",
};

/**
 * Legacy applications.
 */
export const LEGACY_APPS = {
    ALL_CLUSTERS: "/matter.js/chip-testing/dist/esm/AllClustersTestAppLegacy.js",
    BRIDGE: "/matter.js/chip-testing/dist/esm/BridgeTestAppLegacy.js",
};

/**
 * Environment variables expected by run-tests.sh.
 */
export interface TestEnvironmentVariables {
    TESTS: string[];
    ALL_CLUSTERS: string;
    BRIDGE: string;
}

/**
 * Predefined environment configurations selectable from command line.
 */
export const NamedEnvironments = {
    default: {
        TESTS,
        ...DEFAULT_APPS,
    },

    slow: {
        TESTS: SLOW_TESTS,
        ...DEFAULT_APPS,
    },

    legacy: {
        TESTS,
        ...LEGACY_APPS,
    },

    "legacy-slow": {
        TESTS: SLOW_TESTS,
        ...LEGACY_APPS,
    },
} satisfies Record<string, TestEnvironmentVariables>;

/**
 * Input definition of CHIP testing environment.
 */
export type TestEnvironment = TestEnvironmentVariables | keyof typeof NamedEnvironments;
