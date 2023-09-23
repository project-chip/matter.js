/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, resolve } from "path";
import { exit } from "process";
import { Project } from "../building/project.js";
import { executeNode } from "./execute.js";

/**
 * Build and execute a matter.js script.
 */
export async function main(argv = process.argv) {
    let script = argv[2];
    argv = argv.slice(3);

    if (script === undefined || script === "") {
        console.log("Error: Script name required");
        exit(1);
    }

    script = resolve(script);
    let dir;

    if (script.match(/[\\/]node_modules[\\/].bin[\\/]/)) {
        // When executing a script linked under node_modules, search for the
        // project from cwd.  This occurs when running tooling such as
        // "matter-test"
        dir = process.cwd();
    } else {
        // When executing outside of node modules we want to build the project
        // containing the script
        dir = dirname(script);
    }

    const project = new Project(dir);

    let format: "esm" | "cjs";
    if (project.pkg.esm) {
        format = "esm";
    } else if (project.pkg.cjs) {
        format = "cjs";
    } else {
        console.error("Error: Could not identify project format");
        exit(2);
    }

    await project.buildSource(format);

    script = project.pkg.resolve(
        project.pkg
            .relative(script)
            .replace(/\.ts$/, ".js")
            .replace(/^src\//, `dist/${format}/`),
    );

    await executeNode(script, argv);
}
