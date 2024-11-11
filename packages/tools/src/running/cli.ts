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
import { Package } from "../util/package.js";
import { executeNode } from "./execute.js";

/**
 * Execute a script in a package that conforms to matter.js conventions.  This is primarily useful within a matter.js
 * development environment but should also work when installed via NPM.
 *
 * First we translate source filenames to the transpiled *.js equivalent.
 *
 * If the target script is in a package not installed via NPM we build the package.  If the package is an NPM workspace
 * under a top-level package we also build dependencies.
 *
 * We then run the script in a child process so we can enable source maps using node --source-maps.  You can disable
 * this by setting the environment variable MATTER_DIRECT_EXEC.
 */
export async function main(argv = process.argv) {
    let script = argv[2];
    argv = argv.slice(3);

    if (script === undefined || script === "") {
        console.error("Error: Script name required");
        exit(1);
    }

    script = resolve(script);
    let dir;

    if (script.match(/[\\/]node_modules[\\/].bin[\\/]/)) {
        // When executing a script linked under node_modules, search for the project from cwd.  This occurs when running
        // tooling such as "matter-test"
        dir = process.cwd();
    } else {
        // When executing outside of node modules we want to build the project containing the script
        dir = dirname(script);
    }

    const pkg = Package.forPath(dir);

    let format: "esm" | "cjs" | "none";
    if (!pkg.hasSrc) {
        format = "none";
    } else if (pkg.supportsEsm) {
        format = "esm";
    } else if (pkg.supportsCjs) {
        format = "cjs";
    } else {
        console.error("Error: Could not identify project format");
        exit(2);
    }

    // In development we currently build package and dependencies unconditionally before running
    const isDevelopment = !dir.match(/[\\/]node_modules[\\/]/);
    if (isDevelopment && format !== "none") {
        const builder = new Builder();
        const dependencies = await Graph.forProject(dir);
        if (dependencies) {
            // Project is in a workspace; build along with dependencies from the same workspace
            await dependencies.build(builder, false);
        } else {
            // Project is not in a workspace; only build the project
            const project = new Project(pkg);
            await builder.build(project);
        }
    }

    // Determine the actual script to run
    if (format !== "none") {
        script = pkg.resolve(
            pkg
                .relative(script)
                .replace(/\.ts$/, ".js")
                .replace(/^src[\\/]/, `dist/${format}/`),
        );
    }

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
