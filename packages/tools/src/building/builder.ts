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
 * Warning: This class is intended for command line use and will process.exit if things go wrong.
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

        if (!targets.has(Target.types) && !targets.has(Target.esm) && !targets.has(Target.cjs)) {
            return;
        }

        const config = await project.loadConfig();

        await config.before?.({ project, progress });

        if (targets.has(Target.types)) {
            const refresh = progress.refresh.bind(progress);
            try {
                if (project.pkg.isLibrary) {
                    await progress.run(`Generate ${progress.emphasize("type declarations")}`, () =>
                        project.buildDeclarations(refresh),
                    );
                    await progress.run(`Install ${progress.emphasize("type declarations")}`, () =>
                        project.installDeclarations(),
                    );
                } else {
                    await progress.run(`Validating ${progress.emphasize("types")}`, () =>
                        project.validateTypes(refresh),
                    );
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

        await config.after?.({ project, progress });

        // Only update timestamp when there are no explicit targets so we know it's a full build
        if (!this.options.targets?.length) {
            await project.recordBuildTime();
        }
    }

    async #transpile(project: Project, progress: Progress, format: "esm" | "cjs") {
        const fmt = format.toUpperCase();
        await progress.run(`Transpile ${progress.emphasize("library")} to ${colors.bold(fmt)}`, () =>
            project.buildSource(format),
        );
        if (project.pkg.hasTests) {
            await progress.run(`Transpile ${progress.emphasize("tests")} to ${colors.bold(fmt)}`, () =>
                project.buildTests(format),
            );
        }
    }

    #selectTargets(project: Project) {
        const targets = new Set<string>(this.options.targets);

        if (!targets.size) {
            targets.add(Target.types);

            if (project.pkg.supportsEsm) {
                targets.add(Target.esm);
            }

            if (project.pkg.supportsCjs) {
                targets.add(Target.cjs);
            }
        } else {
            if (!project.pkg.supportsEsm) {
                targets.delete(Target.esm);
            }

            if (!project.pkg.supportsCjs) {
                targets.delete(Target.cjs);
            }
        }

        return targets;
    }
}
