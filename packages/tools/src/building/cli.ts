/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Builder, Target } from "./builder.js";
import { Graph } from "./graph.js";
import { Project } from "./project.js";
import { syncAllTsconfigs } from "./tsconfig.js";

enum Mode {
    BuildProject,
    BuildProjectWithDependencies,
    BuildWorkspace,
    DisplayGraph,
    SyncTsconfigs,
}

export async function main(argv = process.argv) {
    const targets = Array<Target>();
    let mode = Mode.BuildProject;

    const args = await yargs(hideBin(argv))
        .usage("Builds packages adhering to matter.js standards.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify build directory" })
        .option("clean", { alias: "c", default: false, type: "boolean", describe: "clean before build" })
        .option("workspaces", { alias: "w", default: false, type: "boolean", describe: "build all workspace packages" })
        .option("dependencies", { alias: "d", default: false, type: "boolean", describe: "build dependencies" })
        .command("*", "build types and both JS files", () => {})
        .command("clean", "remove build and dist directories", () => targets.push(Target.clean))
        .command("types", "build type definitions", () => targets.push(Target.types))
        .command("esm", "build JS (ES6 modules)", () => targets.push(Target.esm))
        .command("cjs", "build JS (CommonJS modules)", () => targets.push(Target.cjs))
        .command("graph", "display the workspace graph", () => (mode = Mode.DisplayGraph))
        .command("tsconfigs", "sync all tsconfigs with package.json", () => (mode = Mode.SyncTsconfigs))
        .wrap(Math.min(process.stdout.columns, 80))
        .strict().argv;

    if (mode === Mode.BuildProject) {
        if (args.workspaces) {
            mode = Mode.BuildWorkspace;
        } else if (args.dependencies) {
            mode = Mode.BuildProjectWithDependencies;
        }
    }

    function builder(graph?: Graph) {
        return new Builder({ ...args, targets: [...targets], graph });
    }

    switch (mode as Mode) {
        case Mode.BuildProject:
            const project = new Project(args.prefix);
            await builder().build(project);
            break;

        case Mode.BuildProjectWithDependencies:
            {
                const graph = await Graph.forProject(args.prefix);
                if (graph === undefined) {
                    throw new Error(`Cannot build with dependencies because ${args.prefix} is not in a workspace`);
                }
                await graph.build(builder(graph));
            }
            break;

        case Mode.BuildWorkspace:
            {
                const graph = await Graph.load();
                await syncAllTsconfigs(graph);
                await graph.build(builder(graph));
            }
            break;

        case Mode.DisplayGraph:
            (await Graph.load()).display();
            break;

        case Mode.SyncTsconfigs:
            {
                const graph = await Graph.load();
                await syncAllTsconfigs(graph);
            }
            break;
    }
}
