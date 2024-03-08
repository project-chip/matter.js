/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import colors from "ansi-colors";
import { Progress } from "../util/progress.js";
import { BuildError } from "./error.js";
import { Project } from "./project.js";

export enum Target {
    clean = "clean",
    types = "types",
    esm = "esm",
    cjs = "cjs",
}

export interface Options {
    targets?: Target[];
    clean?: boolean;
}

/**
 * High-level build coordination.
 *
 * Warning: This class is intended for command line use and will process.exit
 * if things go wrong.
 */
export class Builder {
    unconditional: boolean;

    constructor(private options: Options = {}) {
        this.unconditional =
            options.clean || (options.targets !== undefined && options.targets?.indexOf(Target.clean) !== -1);
    }

    public async build(project: Project) {
        const progress = project.pkg.start("Building");

        try {
            await this.#doBuild(project, progress);
        } catch (e: any) {
            progress.failure(`Unexpected build error`);
            progress.shutdown();
            process.stderr.write(`${e.stack ?? e.message}\n\n`);
            process.exit(1);
        }

        progress.shutdown();
    }

    async #doBuild(project: Project, progress: Progress) {
        const targets = this.#selectTargets(project);

        if (targets.has(Target.clean) || this.options.clean) {
            await progress.run("Clean", () => project.clean());
        }

        if (targets.has(Target.types)) {
            try {
                if (project.pkg.library) {
                    await progress.run(`Generate ${colors.bold("type declarations")}`, () =>
                        project.buildDeclarations(),
                    );
                    await progress.run(`Install ${colors.bold("type declarations")}`, () =>
                        project.installDeclarations(),
                    );
                } else {
                    await progress.run(`Validating ${colors.bold("types")}`, () => project.validateTypes());
                }
            } catch (e) {
                if (e instanceof BuildError) {
                    progress.failure("Terminating due to type errors");
                    process.stderr.write(e.diagnostics);
                    process.exit(1);
                }
                throw e;
            }
        }

        if (targets.has(Target.esm)) {
            await this.#transpile(project, progress, Target.esm);
        }

        if (targets.has(Target.cjs)) {
            await this.#transpile(project, progress, Target.cjs);
        }

        // Only update timestamp when there are no explicit targets so we know
        // it's a full build
        if (!this.options.targets?.length) {
            await project.recordBuildTime();
        }
    }

    async #transpile(project: Project, progress: Progress, format: "esm" | "cjs") {
        const fmt = format.toUpperCase();
        await progress.run(`Transpile ${colors.bold("library")} to ${colors.bold(fmt)}`, () =>
            project.buildSource(format),
        );
        if (project.pkg.tests) {
            await progress.run(`Transpile ${colors.bold("tests")} to ${colors.bold(fmt)}`, () =>
                project.buildTests(format),
            );
        }
    }

    #selectTargets(project: Project) {
        const targets = new Set<string>(this.options.targets);

        if (!targets.size) {
            targets.add(Target.types);

            if (project.pkg.esm) {
                targets.add(Target.esm);
            }

            if (project.pkg.cjs) {
                targets.add(Target.cjs);
            }
        } else {
            if (!project.pkg.esm) {
                targets.delete(Target.esm);
            }

            if (!project.pkg.cjs) {
                targets.delete(Target.cjs);
            }
        }

        return targets;
    }
}
