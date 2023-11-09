/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Builder, Target } from "./builder.js";
import { Graph } from "./graph.js";
import { Project } from "./project.js";

enum Mode {
    BuildProject,
    BuildWorkspace,
    DisplayGraph,
}

export async function main(argv = process.argv) {
    const targets = Array<Target>();
    let mode = Mode.BuildProject;

    const args = await yargs(hideBin(argv))
        .usage("Builds packages adhering to matter.js standards.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify build directory" })
        .option("clean", { alias: "c", default: false, type: "boolean", describe: "clean before build" })
        .option("workspaces", { alias: "w", default: false, type: "boolean", describe: "build all workspace packages" })
        .command("*", "build types and both JS files", () => {})
        .command("clean", "remove build and dist directories", () => targets.push(Target.clean))
        .command("types", "build type definitions", () => targets.push(Target.types))
        .command("esm", "build JS (ES6 modules)", () => targets.push(Target.esm))
        .command("cjs", "build JS (CommonJS modules)", () => targets.push(Target.cjs))
        .command("graph", "display the workspace graph", () => (mode = Mode.DisplayGraph))
        .wrap(Math.min(process.stdout.columns, 80))
        .strict().argv;

    if (mode === Mode.BuildProject && args.workspaces) {
        mode = Mode.BuildWorkspace;
    }

    function builder() {
        return new Builder({ ...args, targets: [...targets] });
    }

    switch (mode as Mode) {
        case Mode.BuildProject:
            const project = new Project(args.prefix);
            await builder().build(project);
            break;

        case Mode.BuildWorkspace:
            await (await Graph.load()).build(builder());
            break;

        case Mode.DisplayGraph:
            (await Graph.load()).display();
            break;
    }
}
