/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, statSync } from "fs";
import { readdir, stat } from "fs/promises";
import { dirname, relative, resolve } from "path";
import { ignoreError, ignoreErrorSync } from "./errors.js";
import { Progress } from "./progress.js";

function findJson(filename: string, path: string = ".", title?: string) {
    path = resolve(path);
    while (true) {
        const json = ignoreErrorSync(["ENOENT", "ENOTDIR"], () =>
            JSON.parse(readFileSync(resolve(path, filename)).toString()),
        );
        if (json) {
            if (title === undefined || json.name === title) {
                return { root: path, json };
            }
        }
        const parent = dirname(path);
        if (parent === path) {
            throw new Error(`Could not locate ${title ?? filename}`);
        }
        path = parent;
    }
}

function isDirectory(path: string) {
    return !!ignoreErrorSync("ENOENT", () => statSync(path).isDirectory());
}

export class Package {
    path: string;
    json: PackageJson;
    esm: boolean;
    cjs: boolean;
    src: boolean;
    tests: boolean;
    library: boolean;

    constructor({
        path = ".",
        name,
    }: {
        path?: string;
        name?: string;
    } = {}) {
        const { root, json } = findJson("package.json", path, name);
        this.path = root;
        this.json = json;

        const { esm, cjs } = selectFormats(this.json);
        this.esm = esm;
        this.cjs = cjs;

        this.src = isDirectory(this.resolve("src"));
        this.tests = isDirectory(this.resolve("test"));

        this.library = !!(this.json.main || this.json.module || this.json.exports);
    }

    get name() {
        return this.json.name;
    }

    get exports() {
        return this.json.exports;
    }

    resolve(path: string) {
        return resolve(this.path, path);
    }

    relative(path: string) {
        return relative(this.path, path);
    }

    start(what: string) {
        const progress = new Progress();
        progress.startup(what, this);
        return progress;
    }

    async lastModified(...paths: string[]) {
        return this.lastModifiedAbsolute(paths.map(p => this.resolve(p)));
    }

    private async lastModifiedAbsolute(paths: string[]) {
        let mtime = 0;
        await Promise.all(
            paths.map(async p => {
                const stats = await ignoreError("ENOENT", async () => await stat(p));
                if (!stats) {
                    return;
                }

                let thisMtime;
                if (stats.isDirectory()) {
                    const paths = (await readdir(p)).map(p2 => resolve(p, p2));
                    thisMtime = await this.lastModifiedAbsolute(paths);
                } else {
                    thisMtime = stats.mtimeMs;
                }
                if (thisMtime > mtime) {
                    mtime = thisMtime;
                }
            }),
        );
        return mtime;
    }

    get dependencies() {
        let result = Array<string>();
        for (const type of ["dependencies", "devDependencies", "peerDependencies"]) {
            if (typeof this.json[type] === "object" && this.json[type] !== null) {
                result = [...result, ...Object.keys(this.json[type])];
            }
        }
        return [...new Set(result)];
    }

    get workspace() {
        return Package.workspaceFor(this.path);
    }

    static set workingDir(wd: string) {
        workingDir = wd;
    }

    static get workspace() {
        return this.workspaceFor(workingDir);
    }

    static workspaceFor(cwd: string) {
        if (!workspace) {
            workspace = find(cwd, pkg => Array.isArray(pkg.json.workspaces));
        }
        return workspace;
    }

    static get tools() {
        if (!tools) {
            tools = new Package({ path: this.workspace.resolve("packages/matter.js-tools") });
        }
        return tools;
    }

    static findExport(name: string, type: "cjs" | "esm" = "esm") {
        return this.workspace.findExport(name, type);
    }

    resolveExport(name: string, type: "cjs" | "esm" = "esm") {
        if (!name.startsWith(".")) {
            name = `./${name}`;
        }
        const exportDetail = this.exports?.[name];

        if (exportDetail) {
            const exp = findExportCondition(exportDetail, type);
            if (exp) {
                return this.resolve(exp);
            }
        }

        if (name === ".") {
            if (type === "esm" && this.json.module) {
                return this.resolve(this.json.module);
            }
            if (this.json.main) {
                return this.resolve(this.json.main);
            }
        }

        throw new Error(`Cannot resolve export ${name} in package ${this.name}`);
    }

    findExport(name: string, type: "cjs" | "esm" = "esm") {
        const segments = name.split("/");
        let subdir = segments.shift() as string;
        if (subdir.startsWith("@") && segments.length) {
            subdir = `${subdir}/${segments.shift()}`;
        }

        let resolveIn = this.path;
        while (true) {
            if (isDirectory(resolve(resolveIn, "node_modules", subdir))) {
                break;
            }
            const nextResolveIn = dirname(resolveIn);
            if (nextResolveIn === resolveIn) {
                throw new Error(`Cannot find module ${subdir} from ${this.path}`);
            }
            resolveIn = nextResolveIn;
        }

        const pkg = new Package({ path: resolve(resolveIn, "node_modules", subdir) });
        return pkg.resolveExport(segments.length ? segments.join("/") : ".", type);
    }
}

export type PackageJson = {
    name: string;
    version: string;
    [key: string]: any;
};

let workingDir = ".";
let workspace: Package | undefined;
let tools: Package | undefined;

function find(startDir: string, selector: (pkg: Package) => boolean): Package {
    let pkg = new Package({ path: startDir });
    while (!selector(pkg)) {
        pkg = new Package({ path: dirname(pkg.path) });
    }
    return pkg;
}

function selectFormats(json: any) {
    let esm: boolean, cjs: boolean;

    if (json.type === "module") {
        esm = true;
        cjs =
            (json.main !== undefined && json.module !== undefined) ||
            !!Object.values(json.exports ?? {}).find((exp: any) => exp.require);
    } else {
        cjs = true;
        esm = !!json.module || !!Object.values(json.exports ?? {}).find((exp: any) => exp.import);
    }

    return { esm, cjs };
}

function findExportCondition(detail: Record<string, any>, type: "esm" | "cjs"): string | undefined {
    if (type === "esm" && detail.import) {
        let exp = detail.import;
        if (exp && typeof exp !== "string") {
            exp = findExportCondition(exp, type);
        }
        if (exp) {
            return exp;
        }
    }

    let exp = detail.require ?? detail.node ?? detail.default;
    if (exp && typeof exp !== "string") {
        exp = findExportCondition(exp, type);
    }

    if (typeof exp === "string") {
        return exp;
    }
}
