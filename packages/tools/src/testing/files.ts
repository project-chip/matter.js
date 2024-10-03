/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, statSync } from "fs";
import { Package } from "../util/package.js";

export function listSupportFiles(format = "cjs") {
    const files = Array<string>();

    // Always load tooling code in ESM format as tooling globals load as ESM
    files.push(Package.tools.resolve("dist/esm/testing/global-definitions.js"));
    files.push(Package.tools.resolve("dist/esm/testing/mocks/index.js"));

    // Package code should load in the format being tested
    const config = new Package().resolve(`build/${format}/test/test.config.js`);
    if (existsSync(config)) {
        files.push(config);
    }

    return files;
}

export function maybeStatSync(path: string) {
    try {
        return statSync(path);
    } catch (e) {
        if (typeof e === "object" && e !== null && "code" in e && (e.code === "ENOENT" || e.code === "ENOTDIR")) {
            return;
        }
        throw e;
    }
}
