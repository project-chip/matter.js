/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { join } from "path";
import { createSolutionBuilder, createSolutionBuilderHost, Diagnostic, ExitStatus } from "typescript";
import { Package } from "../../util/package.js";
import { BuildError, InternalBuildError } from "../error.js";
import { Graph } from "../graph.js";
import { TypescriptContext } from "./context.js";

export async function createSolutionBuilderContext(
    workspace: Package,
    _graph: Graph | undefined,
    refreshCallback?: () => void,
): Promise<TypescriptContext> {
    let diagnostics: undefined | Diagnostic[];
    const host = createSolutionBuilderHost();
    host.reportDiagnostic = diagnostic => (diagnostics ??= []).push(diagnostic);

    const builder = createSolutionBuilder(host, [workspace.resolve("tsconfig.json")], {});

    TypescriptContext.diagnose(diagnostics);

    TypescriptContext.instrumentHostForSpinner(host, refreshCallback);

    return {
        async build(pkg: Package, path: string, _emit?: boolean) {
            const status = builder.build(pkg.resolve(join(path, "tsconfig.json")));

            TypescriptContext.diagnose(diagnostics);

            switch (status) {
                case undefined:
                case ExitStatus.Success:
                    break;

                case ExitStatus.InvalidProject_OutputsSkipped:
                    throw new BuildError(
                        `Typescript does not think ${path} is part of the project, this is probably a build tooling error`,
                    );

                case ExitStatus.ProjectReferenceCycle_OutputsSkipped:
                    throw new BuildError(
                        `Typescript identified a cyclical project reference in ${path}, please check package dependencies`,
                    );

                default:
                    throw new InternalBuildError(`Build error ${ExitStatus[status]} without diagnostics`);
            }
        },
    };
}
