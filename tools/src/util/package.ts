/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { statSync } from "fs";
import { ignoreErrorSync } from "./errors.js";
import { fileURLToPath } from "url";
import { Progress } from "./progress.js";

export class Package {
    path: string;
    json: PackageJson;
    cjs: boolean;
    tests: boolean;

    constructor({
        path = ".",
        name
    }: {
        path?: string,
        name?: string,
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

        this.path = path;
        this.json = json;
        this.cjs = json.type !== "module" || (json.main !== undefined && json.module !== undefined);
        this.tests = ignoreErrorSync("ENOENT", () =>
            (statSync("test")).isDirectory()
        ) ?? false;
    }

    resolve(path: string) {
        return resolve(this.path, path);
    }

    start(what: string) {
        const progress = new Progress();
        progress.startup(what, this);
        return progress;
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
            workspace = find((pkg) => Array.isArray(pkg.json.workspaces));
        }
        return workspace;
    }

    static get tools() {
        if (!tools) {
            tools = new Package({ path: dirname(fileURLToPath(import.meta.url)) });
        }
        return tools;
    }
}

export type PackageJson = {
    name: string;
    version: string;
    [key: string]: any
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
