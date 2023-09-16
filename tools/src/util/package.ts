/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, statSync } from "fs";
import { dirname, resolve } from "path";
import { ignoreErrorSync } from "./errors.js";
import { Progress } from "./progress.js";

export class Package {
    path: string;
    json: PackageJson;
    esm: boolean;
    cjs: boolean;
    tests: boolean;

    constructor({
        path = ".",
        name,
    }: {
        path?: string;
        name?: string;
    } = {}) {
        let json: PackageJson | undefined;
        path = resolve(path);
        while (!json) {
            json = ignoreErrorSync("ENOENT", () => JSON.parse(readFileSync(resolve(path, "package.json")).toString()));
            if (json) {
                if (name === undefined || json.name === name) {
                    break;
                }
                json = undefined;
            }
            const parent = dirname(path);
            if (parent === path) {
                throw new Error(`Could not locate ${name ? `package ${name}` : "package.json"}`);
            }
            path = parent;
        }

        if (!ignoreErrorSync("ENOENT", () => statSync("src").isDirectory())) {
            throw new Error(`Found package ${json.name} but no src directory is present`);
        }
        const { esm, cjs } = selectFormats(json);

        this.path = path;
        this.json = json;
        this.esm = esm;
        this.cjs = cjs;

        this.tests = ignoreErrorSync("ENOENT", () => statSync("test").isDirectory()) ?? false;
    }

    resolve(path: string) {
        return resolve(this.path, path);
    }

    start(what: string) {
        const progress = new Progress();
        progress.startup(what, this);
        return progress;
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
