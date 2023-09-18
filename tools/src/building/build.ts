/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { build as esbuild, Format } from "esbuild";
import { cp, mkdir, readFile, rm, stat, symlink, writeFile } from "fs/promises";
import { glob } from "glob";
import { execute } from "../running/execute.js";
import { ignoreError } from "../util/errors.js";
import { Package } from "../util/package.js";

export class Project {
    pkg: Package;

    constructor(path = ".") {
        Package.project = this.pkg = new Package({ path });
    }

    async buildSource(format: Format) {
        await this.build(format, "src", `dist/${format}`);
        await this.specifyFormat("dist", format);
    }

    async buildTests(format: Format) {
        await ignoreError("ENOENT", async () => {
            if ((await stat("test")).isDirectory()) {
                await this.build(format, "test", `build/${format}/test`);
            }
        });
        await ignoreError("EEXIST", async () => await symlink(`../../dist/${format}`, `build/${format}/src`));
        await this.specifyFormat("build", format);
    }

    async clean() {
        for (const dir of ["build", "dist"]) {
            await rm(dir, { recursive: true, force: true });
        }
    }

    async buildDeclarations() {
        // Would prefer to run in-process but tsc API would be far messier and
        // compilation is quite slow regardless
        return execute("tsc", [
            "-p",
            this.pkg.resolve("tsconfig.json"),
            "--outDir",
            this.pkg.resolve("build/types"),
            "--tsBuildInfoFile",
            this.pkg.resolve("build/types/tsbuildinfo"),
            "--emitDeclarationOnly",
            "--sourceMap",
            "--declarationMap",
            "--incremental",
        ]);
    }

    async installDeclarationFormat(format: Format) {
        const srcMaps = Array<[string, string]>();

        await cp(this.pkg.resolve("build/types/src"), this.pkg.resolve(`dist/${format}`), {
            recursive: true,
            force: true,

            filter: (source, dest) => {
                if (source.endsWith(".d.ts.map")) {
                    srcMaps.push([source, dest]);
                    return false;
                }
                return true;
            },
        });

        // If you specify --sourceRoot, tsc just sticks whatever the string is
        // directly into the file.  Not very useful unless you have no
        // hierarchy or use absolute paths...
        //
        // We distribute types for src one level higher than we generate them
        // (dist/esm vs build/types/src) so the paths end up incorrect.
        //
        // So...  Rewrite the paths in all source maps under src/.  Do this
        // directly on buffer for marginal performance win.
        for (const [source, dest] of srcMaps) {
            // Load map as binary
            const map = await readFile(source);

            // Find key text
            let pos = map.indexOf('"sources":["../');
            if (pos === -1) {
                throw new Error("Could not find sources position in declaration map, format may have changed");
            }

            // move to ../
            pos += 12;

            // Shift everything left by three
            map.copyWithin(pos, pos + 3);

            // Write to new location
            await writeFile(dest, map.subarray(0, map.length - 3));
        }
    }

    async installDeclarations() {
        await mkdir("dist", { recursive: true });
        if (this.pkg.esm) {
            await this.installDeclarationFormat("esm");
        }
        if (this.pkg.cjs) {
            await this.installDeclarationFormat("cjs");
        }
    }

    private async build(format: Format, indir: string, outdir: string) {
        const config = (await ignoreError(
            "ERR_MODULE_NOT_FOUND",
            () => import(`${this.pkg.path}/build.config.js`),
        )) as Project.Config;

        await config?.before?.(this, format);

        const files = await glob([`${indir}/**/*.ts`, `${indir}/**/*.js`]);
        const entryPoints = files.map(file => ({
            in: file,
            out: `${file.slice(indir.length + 1).replace(/\.[jt]s$/, "")}`,
        }));
        await esbuild({
            entryPoints,
            outdir,
            format,
            sourcemap: true,
            absWorkingDir: this.pkg.path,
        });

        await config?.after?.(this, format);
    }

    private async specifyFormat(dir: string, format: Format) {
        if (format === "cjs") {
            await writeFile(`${dir}/${format}/package.json`, '{ "type": "commonjs" }');
        }
    }
}

export namespace Project {
    export interface Config {
        before?: (project: Project, format: Format) => Promise<void>;
        after?: (project: Project, format: Format) => Promise<void>;
    }
}
