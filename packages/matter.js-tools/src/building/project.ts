/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { build as esbuild, Format } from "esbuild";
import { cp, mkdir, readFile, rm, stat, symlink, writeFile } from "fs/promises";
import { glob } from "glob";
import { platform } from "os";
import { ignoreError } from "../util/errors.js";
import { Package } from "../util/package.js";
import { Typescript } from "./typescript.js";

export class Project {
    pkg: Package;

    constructor(source: Package | string = ".") {
        if (typeof source === "string") {
            this.pkg = new Package({ path: source });
        } else {
            this.pkg = source;
        }

        if (!this.pkg.src) {
            throw new Error(`Found package ${this.pkg.json.name} but no src directory is present`);
        }
    }

    async buildSource(format: Format) {
        await this.build(format, "src", `dist/${format}`);
        await this.specifyFormat("dist", format);
    }

    async buildTests(format: Format) {
        await ignoreError("ENOENT", async () => {
            if ((await stat(this.pkg.resolve("test"))).isDirectory()) {
                await this.build(format, "test", `build/${format}/test`);
            }
        });

        const src = `dist/${format}`;
        const dest = `build/${format}/src`;

        try {
            await ignoreError("EEXIST", async () => await symlink(this.pkg.resolve(src), this.pkg.resolve(dest)));
        } catch (e) {
            if ((e as any).code === "EPERM" && platform() === "win32") {
                // If developer mode is not enabled, we can't create a symlink
                // on Windows.  Copy instead
                await cp(this.pkg.resolve(src), this.pkg.resolve(dest), {
                    recursive: true,
                    force: true,
                });
            } else {
                throw e;
            }
        }
        await this.specifyFormat("build", format);
    }

    async clean() {
        for (const dir of ["build", "dist"]) {
            await rm(this.pkg.resolve(dir), { recursive: true, force: true });
        }
    }

    async buildDeclarations() {
        Typescript.emitDeclarations(this.pkg);
    }

    async validateTypes() {
        Typescript.validateTypes(this.pkg);
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
                throw new Error(
                    `Could not find sources position in declaration map ${source}, format may have changed`,
                );
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
        await mkdir(this.pkg.resolve("dist"), { recursive: true });
        if (this.pkg.esm) {
            await this.installDeclarationFormat("esm");
        }
        if (this.pkg.cjs) {
            await this.installDeclarationFormat("cjs");
        }
    }

    async recordBuildTime() {
        await mkdir(this.pkg.resolve("build"), { recursive: true });
        await writeFile(this.pkg.resolve("build/timestamp"), "");
    }

    private async build(format: Format, indir: string, outdir: string) {
        const config = (await ignoreError(
            "ERR_MODULE_NOT_FOUND",
            () => import(`file://${this.pkg.path}/build.config.js`),
        )) as Project.Config;

        await config?.before?.(this, format);

        const entryPoints = await this.targets(indir, outdir, "ts", "js");
        for (const entry of entryPoints) {
            entry.out = entry.out.replace(/\.[jt]s$/, "");
        }

        await esbuild({
            entryPoints,
            outdir: this.pkg.path,
            format,
            sourcemap: true,
            absWorkingDir: this.pkg.path,
        });

        for (const entry of await this.targets(indir, outdir, "cjs", "mjs", "d.cts", "d.mts")) {
            await cp(entry.in, entry.out);
        }

        await config?.after?.(this, format);
    }

    private async specifyFormat(dir: string, format: Format) {
        if (format === "cjs") {
            await writeFile(this.pkg.resolve(`${dir}/${format}/package.json`), '{ "type": "commonjs" }');
        }
    }

    private async targets(indir: string, outdir: string, ...extensions: string[]) {
        indir = this.pkg.resolve(indir).replace(/\\/g, "/");
        outdir = this.pkg.resolve(outdir).replace(/\\/g, "/");

        return (await glob(extensions.map(ext => `${indir}/**/*.${ext}`))).map(file => ({
            in: file,
            out: `${outdir}/${file.slice(indir.length + 1)}`,
        }));
    }
}

export namespace Project {
    export interface Config {
        before?: (project: Project, format: Format) => Promise<void>;
        after?: (project: Project, format: Format) => Promise<void>;
    }
}
