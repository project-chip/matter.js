/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { statSync } from "fs";
import { join } from "path";
import {
    createDocumentRegistry,
    createLanguageService,
    createModuleResolutionCache,
    getDefaultLibFileName,
    JSDocParsingMode,
    LanguageServiceHost,
    LanguageServiceMode,
    ModuleKind,
    ResolvedModuleWithFailedLookupLocations,
    resolveModuleName,
    ScriptSnapshot,
} from "typescript";
import { Package } from "../../util/package.js";
import { Graph } from "../graph.js";
import { TypescriptContext } from "./context.js";

/**
 * This is highly experimental and not yet fully functional.
 */
export async function createLanguageServiceContext(
    workspace: Package,
    _graph: Graph | undefined,
    refreshCallback: () => void,
): Promise<TypescriptContext> {
    const baseOptions = TypescriptContext.compilerOptionsFor(Package.tools.resolve("tsc/tsconfig.base.json"), true);
    const registry = createDocumentRegistry(true, workspace.path, JSDocParsingMode.ParseNone);
    const resolutionCache = createModuleResolutionCache(workspace.path, name => name, baseOptions);
    //const myPackageNames = new Set(graph?.nodes.map(node => node.pkg.name));

    return { build };

    async function build(pkg: Package, path: string, emit?: boolean) {
        const files = await pkg.glob(join(path, "**/*.ts"));
        const host = await createLanguageServiceHost(pkg, path, files);
        const ls = createLanguageService(host, registry, LanguageServiceMode.Semantic);

        TypescriptContext.diagnose(ls.getCompilerOptionsDiagnostics());

        for (const path of files) {
            TypescriptContext.diagnose([...ls.getSyntacticDiagnostics(path), ...ls.getSemanticDiagnostics(path)]);

            if (emit) {
                const relativePath = pkg.relative(path);
                await pkg.writeFile(join("build/types", relativePath), ls.getEmitOutput(path));
            }
        }

        TypescriptContext.diagnose(ls.getCompilerOptionsDiagnostics());
    }

    async function createLanguageServiceHost(pkg: Package, path: string, files: string[]) {
        const host: LanguageServiceHost = {
            getCompilationSettings() {
                return TypescriptContext.compilerOptionsFor(join(path, "tsconfig.json"));
            },

            getScriptFileNames() {
                return files;
            },

            getScriptVersion(filename) {
                return statSync(filename).mtime.toISOString();
            },

            getScriptSnapshot(filename) {
                try {
                    return ScriptSnapshot.fromString(pkg.readFileSync(filename));
                } catch (e) {
                    switch ((e as { code: string }).code) {
                        case "ENOENT":
                        case "ENOTDIR":
                            return;
                    }
                    throw e;
                }
            },

            getCurrentDirectory() {
                return path;
            },

            getDefaultLibFileName(options) {
                return workspace.resolve(join("node_modules/typescript/lib", getDefaultLibFileName(options)));
            },

            readFile(path: string) {
                refreshCallback();
                return pkg.readFileSync(path);
            },

            fileExists(path: string) {
                return pkg.hasFile(path);
            },

            resolveModuleNameLiterals(
                moduleLiterals,
                containingFile,
                redirectedReferences,
                options,
                _containingSourceFile,
                _reusedNames,
            ): ResolvedModuleWithFailedLookupLocations[] {
                return moduleLiterals.map(name => {
                    const result = resolveModuleName(
                        name.text,
                        containingFile,
                        options,
                        host,
                        resolutionCache,
                        redirectedReferences,
                        ModuleKind.ESNext,
                    );
                    console.log(name.text, "->", result.resolvedModule?.resolvedFileName);
                    return result;
                });
            },

            jsDocParsingMode: JSDocParsingMode.ParseNone,
        };

        return host;
    }
}
