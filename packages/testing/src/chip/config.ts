/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { env } from "node:process";

/**
 * Significant locations within the test container.
 *
 * The container generally adheres to file layout within connectedhomeip.  This avoids various obscure path
 * configuration options for build tooling and test frameworks, plus at least one place where the path is hard-coded.
 */
export namespace ContainerPaths {
    export const yamlRunner = `/scripts/tests/chipyaml/chiptool.py`;
    export const descriptorFile = `/lib/test-descriptor.json`;
    export const pythonCommissioner = `/src/python_testing/hello_test.py`;
    export const chipPics = "/src/app/tests/suites/certification/ci-pics-values";
    export const matterJsPics = "/matter-js-pics.properties";
    export const accessoryClient =
        "/scripts/py_matter_yamltests/matter_yamltests/pseudo_clusters/clusters/accessory_server_bridge.py";
}

export type ContainerPathsType = typeof ContainerPaths;
export interface ContainerPaths extends ContainerPathsType {}

/**
 * Specify the base filename to use for a test.  This specifies a "winner" in the case of conflicts.
 */
export interface TestConflictResolutions {
    [name: string]: string;
}

/**
 * Other misc configuration.
 */
export namespace Constants {
    /**
     * We only publish for x86.  This is appropriate for GH CI and runs fine under emulation on MacOS
     */
    export const platform = env.MATTER_CHIP_PLATFORM || "linux/amd64";

    export const networkName = "matter.js-chip";

    /**
     * We only have one container.  We use it both for MDNS (dbus + avahi) and CHIP
     */
    export const imageName = env.MATTER_CHIP_IMAGE || "ghcr.io/matter-js/chip:latest";
    export const mdnsVolumeName = env.MATTER_MDNS_VOLUME || "matter.js-mdns";

    export const initTimeout = 60_000;
    export const defaultTimeoutMs = 60_000;

    export const localPicsOverrideFile = "src/chip/matter-js-pics.properties";

    /**
     * We set the commissioning timeout value very low because this timeout is tested and waiting the default 180s.
     * sucks.  The timeout must be high enough for actual commissioning to succeed.
     */
    const subjectCommissioningTimeoutS = 3;

    /**
     * The test harness sits around a bit after opening commissioning window.  Doesn't mention why, but I reeeally hate
     * sitting around.  So aggressively tune from default 5s. to 500ms.
     */
    const delayAfterOpeningCommissioningWindowMs = 500;

    /**
     * Default arguments provided to the YAML runner.
     */
    export const YamlRunnerArgs = [
        "--PICS",
        ContainerPaths.matterJsPics,

        // This makes CHIP logs unconditional which would be nice if it intermingled with our logs but currently they
        // only appear once test is run; haven't tracked down how to stream them yet
        // "--show_adapter_logs",
        // "true",

        "--PIXIT.CADMIN.CwDuration",
        `${subjectCommissioningTimeoutS}`,

        "--waitAfterCommissioning",
        `${delayAfterOpeningCommissioningWindowMs}`,
    ];

    /**
     * Default arguments provided to the Python runner.
     */
    export const PythonRunnerArgs = [
        "--PICS",
        ContainerPaths.matterJsPics,

        // Our PID is meaningless within the container but Python uses in the name of the command pipe.  We pass in our
        // actual PID to ensure no collision if multiple instances run
        "--app-pid",
        process.pid.toString(),
    ];
}
