/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync } from "fs";
import { glob } from "glob";
import { dirname } from "path";
import ts from "typescript";
import { Package } from "../util/package.js";
import { BuildError, InternalBuildError } from "./error.js";

/**
 * Implements Typescript validation and declaration emit using tsc API.
 */
export class Typescript {
    #host: ts.CompilerHost;

    private constructor(
        private pkg: Package,
        private options: ts.CompilerOptions,
        refreshCallback?: () => void,
    ) {
        options = {
            ...options,

            rootDir: this.pkg.path,
        };

        this.#host = ts.createIncrementalCompilerHost(options);
        const baseOptions = this.#getCompilerOptions(Package.tools.resolve("tsconfig.base.json"));
        this.options = {
            ...baseOptions,

            incremental: true,
            isolatedModules: true,
            tsBuildInfoFile: pkg.resolve("build/tsbuildinfo"),
            rootDir: this.pkg.path,

            // So this guy is interesting.  It reduces redundant work and drastically speeds things up so seems
            // worthwhile.  May want to enable in some nightly process but I think we're safe enough as is
            skipLibCheck: true,

            ...options,
        };

        delete options.composite;
        if (this.pkg.hasSrc) {
            this.#loadPackageOptions("src/tsconfig.json");
        }

        if (this.pkg.hasTests) {
            this.#loadPackageOptions("test/tsconfig.json");
        }

        // The refresh callback allows us to make spinner updates even though TS is synchronous.
        //
        // TODO - add interception points as spinner still hangs
        if (refreshCallback) {
            const { getSourceFile, writeFile } = this.#host;

            this.#host.getSourceFile = (...args: any) => {
                const result = getSourceFile.apply(this.#host, args);
                refreshCallback?.();
                return result;
            };

            this.#host.writeFile = (...args: any) => {
                const result = writeFile.apply(this.#host, args);
                refreshCallback?.();
                return result;
            };
        }
    }

    static emitDeclarations(pkg: Package, refreshCallback?: () => void) {
        new Typescript(
            pkg,
            {
                outDir: pkg.resolve("build/types"),
                emitDeclarationOnly: true,
                sourceMap: true,
                declarationMap: true,
            },
            refreshCallback,
        ).#run();
    }

    static validateTypes(pkg: Package, refreshCallback?: () => void) {
        new Typescript(
            pkg,
            {
                noEmit: true,
            },
            refreshCallback,
        ).#run();
    }

    #run() {
        const sources = Array<string>();

        if (this.pkg.hasSrc) {
            sources.push(...glob.sync(this.pkg.resolve("src/**/*.ts").replace(/\\/g, "/")));
        }
        if (this.pkg.hasTests) {
            sources.push(...glob.sync(this.pkg.resolve("test/**/*.ts").replace(/\\/g, "/")));
        }
        if (this.pkg.hasCodegen) {
            sources.push(...glob.sync(this.pkg.resolve("build/src/**/*.ts").replace(/\\/g, "/")));
        }

        const program = ts.createIncrementalProgram({
            rootNames: sources,
            options: this.options,
            host: this.#host,
        });

        // See https://github.com/microsoft/TypeScript/issues/31849p
        const diagnostics = [
            ...program.getConfigFileParsingDiagnostics(),
            ...program.getSyntacticDiagnostics(),
            ...program.getOptionsDiagnostics(),
            ...program.getSemanticDiagnostics(),
        ];

        if (!this.options.noEmit) {
            diagnostics.push(...program.emit().diagnostics);
        }
        this.#passTscErrors(diagnostics);
    }

    #getCompilerOptions(filename: string) {
        filename = this.pkg.resolve(filename);
        const file = ts.readConfigFile(filename, ts.sys.readFile);
        this.#passTscError(file.error);
        const config = ts.parseJsonConfigFileContent(file.config, ts.sys, dirname(filename));
        this.#passTscError(config.errors && config.errors[0]);
        return config.options;
    }

    #passTscError(diagnostic: undefined | ts.Diagnostic) {
        if (diagnostic) {
            throw new InternalBuildError(ts.formatDiagnostic(diagnostic, this.#host));
        }
    }

    #passTscErrors(diagnostics: undefined | readonly ts.Diagnostic[]) {
        if (!diagnostics) {
            return;
        }

        if (!diagnostics.length) {
            return;
        }

        let formatted = ts.formatDiagnosticsWithColorAndContext(diagnostics, this.#host);

        // Strangely there are not newlines between errors in this output like there is when you run tsc from the
        // command line.  Use the "light blue" ANSI escape code as an injection point for an additional newline
        //
        // eslint-disable-next-line no-control-regex
        formatted = formatted.replace(/\u001b\[96m/gms, "\n\u001b[96m");

        throw new BuildError(formatted);
    }

    /**
     * As we largely configure based on convention, we mostly ignore tsconfig.json files in project directories.  The
     * limited number of project-specific options we allow load here.
     */
    #loadPackageOptions(path: string) {
        const filename = this.pkg.resolve(path);
        if (!existsSync(filename)) {
            // Package tsconfigs are optional
            return;
        }

        const options = this.#getCompilerOptions(path);

        delete options?.composite;

        const types = options?.types;
        if (types) {
            if (this.options.types) {
                const merged = new Set(this.options.types);
                for (const type of types) {
                    merged.add(type);
                }
                this.options.types = [...merged];
            } else {
                this.options.types = types;
            }
        }
    }
}
