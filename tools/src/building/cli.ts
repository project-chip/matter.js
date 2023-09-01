/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Project } from "./build.js";
import colors from "ansi-colors";

enum Target {
    clean = "clean",
    types = "types",
    esm = "esm",
    cjs = "cjs"
}

export async function main(argv = process.argv) {
    const targets = new Set<Target>;

    const args = await yargs(hideBin(argv))
        .scriptName("build")
        .usage("Builds packages adhering to matter.js standards.")
        .option("prefix", { alias: "p", default: ".", type: "string", describe: "specify build directory" })
        .option("clean", { alias: "c", default: false, type: "boolean", describe: "clean before build" })
        .command("*", "build types and both JS files", () => {})
        .command("clean", "remove build and dist directories", () => targets.add(Target.clean))
        .command("types", "build type definitions", () => targets.add(Target.types))
        .command("esm", "build JS (ES6 modules)", () => targets.add(Target.esm))
        .command("cjs", "build JS (CommonJS modules)", () => targets.add(Target.cjs))
        .strict()
        .argv;

    const project = new Project(args.prefix);

    if (!targets.size) {
        targets.add(Target.types);
        targets.add(Target.esm);

        if (project.pkg.cjs) {
            targets.add(Target.cjs);
        }
    }

    const progress = project.pkg.start("Building");
    
    if (targets.has(Target.clean) || args.clean) {
        await notify("Clean", () => project.clean());
    }

    if (targets.has(Target.types)) {
        await notify(`Generate ${colors.bold("type declarations")}`, () => project.buildDeclarations());
        await notify(`Install ${colors.bold("type declarations")}`, () => project.installDeclarations());
    }
    
    if (targets.has(Target.esm)) {
        await transpile(project, Target.esm);
    }
    
    if (targets.has(Target.cjs)) {
        await transpile(project, Target.cjs);
    }

    async function notify(what: string, fn: () => Promise<void>) {
        progress.update(what);
        await fn();
        progress.success(what);
    }

    async function transpile(project: Project, format: "esm" | "cjs") {
        const fmt = format.toUpperCase();
        await notify(`Transpile ${colors.bold("library")} to ${colors.bold(fmt)}`, () => project.buildSource(format));
        if (project.pkg.tests) {
            await notify(`Transpile ${colors.bold("tests")} to ${colors.bold(fmt)}`, () => project.buildTests(format));
        }
    }
}
