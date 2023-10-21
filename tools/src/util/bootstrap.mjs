/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Bootstrap tooling code.  Libraries are unavailable here; we may only use 3rd
// party modules.
//
// Also do not use TS as it would require the code invoking bootstrap to do a
// meta-bootstrap. 🙄

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { platform } from "os";
import { stat } from "fs/promises";

const toolRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

const options = {
    stdio: "inherit",
    cwd: toolRoot,
};

if (platform() === "win32") {
    options.shell = true;
}

let esbuild = resolve(toolRoot, "../node_modules/.bin/esbuild");
if (!await stat(esbuild)) {
    esbuild = "esbuild";
}

await new Promise((resolve) => {
    const proc = spawn(
        esbuild,
        [
            "src/**/*.ts",
            "--outdir=dist/esm",
            "--format=esm",
            "--log-level=warning",
        ],
        options
    );

    proc.on("error", e => {
        if (e.code === "ENOENT") {
            console.error("Cannot bootstrap matter.js tooling because esbuild is not found.")
            console.error("You probably need to run \"npm install\" in the root of the repository.");
            process.exit(1);
        }
        console.error("Unable to bootstrap matter.js tooling.");
        console.error(e);
        process.exit(1);
    });

    proc.on("close", code => {
        if (code === 0) {
            resolve();
        } else {
            console.error("Unable to bootstrap matter.js tooling.");
            console.error(`Error: esbuild exited with code ${code}`);
            process.exit(1);
        }
    });
})
