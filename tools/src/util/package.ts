/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, statSync } from "fs";
import { dirname, relative, resolve } from "path";
import { ignoreErrorSync } from "./errors.js";
import { Progress } from "./progress.js";

function findJson(filename: string, path: string = ".", title?: string) {
    path = resolve(path);
    while (true) {
        const json = ignoreErrorSync("ENOENT", () => JSON.parse(readFileSync(resolve(path, filename)).toString()));
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

export class Package {
    path: string;
    json: PackageJson;
    esm: boolean;
    cjs: boolean;
    tests: boolean;
    #tsconfig?: Record<string, any>;

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

        if (!ignoreErrorSync("ENOENT", () => statSync("src").isDirectory())) {
            throw new Error(`Found package ${this.json.name} but no src directory is present`);
        }
        const { esm, cjs } = selectFormats(this.json);
        this.esm = esm;
        this.cjs = cjs;

        this.tests = ignoreErrorSync("ENOENT", () => statSync("test").isDirectory()) ?? false;
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

    get tsconfig() {
        if (this.#tsconfig) {
            return this.#tsconfig;
        }
        return (this.#tsconfig = findJson("tsconfig.json", this.path));
    }

    static node(name: string) {
        return new Package({
            path: this.workspace.resolve(`node_modules/${name}`),
        });
    }

    static get project() {
        if (!project) {
            project = new Package();
        }
        return project;
    }

    static set project(pkg: Package) {
        project = pkg;
    }

    static get workspace() {
        if (!workspace) {
            workspace = find(pkg => Array.isArray(pkg.json.workspaces));
        }
        return workspace;
    }

    static get tools() {
        if (!tools) {
            tools = new Package({ path: this.workspace.resolve("tools") });
        }
        return tools;
    }
}

export type PackageJson = {
    name: string;
    version: string;
    [key: string]: any;
};

let project: Package | undefined;
let workspace: Package | undefined;
let tools: Package | undefined;

function find(selector: (pkg: Package) => boolean): Package {
    let pkg = Package.project;
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
