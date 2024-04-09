/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { dirname, resolve } from "path";
import { exit } from "process";
import { Builder } from "../building/builder.js";
import { Graph } from "../building/graph.js";
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

    // TODO - should we do a full build of dependencies unconditionally or
    // as an option?  Currently doing the former
    const builder = new Builder();
    const dependencies = await Graph.forProject(dir);
    await dependencies.build(builder, false);

    script = project.pkg.resolve(
        project.pkg
            .relative(script)
            .replace(/\.ts$/, ".js")
            .replace(/^src[\\/]/, `dist/${format}/`),
    );

    // If we run in the same process we cannot enable source maps so default mode is to fork.  However for development
    // purposes it can be useful to avoid the intermediary process.  In this case you can set "--enable-source-maps"
    // manually then set MATTER_DIRECT_EXEC
    if (process.env.MATTER_DIRECT_EXEC) {
        // This will not transpile properly to commonjs but we only use this module from ESM so that's OK
        await import(script);
    } else {
        // Our behavior in response to SIGINT should mirror the child process's.  So ignore the signal locally, only
        // quitting once the child process does
        process.on("SIGINT", () => {});
        process.on("SIGTERM", () => {});

        process.exitCode = await executeNode(script, argv);
    }
}
