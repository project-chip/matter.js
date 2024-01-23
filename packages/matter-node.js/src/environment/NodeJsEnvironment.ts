/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { ImplementationError } from "../exports/common.js";
import { StorageBackendDisk } from "../storage/StorageBackendDisk.js";
import { Environment } from "@project-chip/matter.js/environment";

/**
 * This is the default environment implementation for Node:
 *
 * - Sets variables using extraordinarily rudimentary command line, environemnt
 *   and configuration file parsers.
 * - Hooks SIGINT to abort each registered task.  The handler only runs once;
 *   subsequent interrupts will hard exit.
 * - Hooks SIGUSR2 for writing diagnostic information.
 * - Creates a default storage pool using the loaded configuration.
 *
 * You can modify any of the functionality by overriding or replacing the
 * environment altogether.
 */
export class NodeJsEnvironment extends Environment {
    #installed = false;
    readonly #interrupt = (): void => this.interrupt();
    readonly #diagnose = (): void => { process.on("SIGUSR2", this.#diagnose); this.diagnose(); };

    constructor(name: string) {
        super(name);

        this.tasks.added.on(() => this.setInstalled());
        this.tasks.deleted.on(() => this.setInstalled());
    }

    protected override loadVariables() {
        let variables = loadEnvAndArgs();
        variables = setDefaults(variables);
        variables = loadConfigFile(variables);

        return variables;
    }

    protected override loadStorage(name: string) {
        return new StorageBackendDisk(
            resolve(this.location, name),
            this.variables.storage?.clear === "true"
        );
    }

    protected override get location() {
        let path = this.variables.storage?.path;
        if (path === undefined || path === "") {
            path = this.variables.path.root;
        } else {
            path = resolve(this.variables.path.root, path);
        }
        return path;
    }

    protected setInstalled() {
        if (!this.#installed && this.tasks.size) {
            process.on("SIGINT", this.#interrupt);
            process.on("SIGUSR2", this.#diagnose);
            this.#installed = true;
        }
        if (this.#installed && !this.tasks.size) {
            process.off("SIGINT", this.#interrupt);
            process.off("SIGUSR2", this.#diagnose);
            this.#installed = false;
        }
    }
}

function addVariable(into: Record<string, any>, path: string[], value: any) {
    if (!path.length) {
        return;
    }

    let current = into[path[0]];
    if (path.length === 1) {
        if (current === undefined) {
            into[path[0]] = value;
        }
        return;
    }

    if (typeof current !== "object") {
        current = into[path[0]] = {};
    }
    addVariable(current, path.slice(1), value);
}

function loadEnvAndArgs() {
    const variables = {} as Record<string, any>;

    // Quick & dirty environment variable ingestion
    for (const key in process.env) {
        if (key.startsWith("MATTER_")) {
            addVariable(variables, key.slice(7).toLowerCase().split("_"), process.env[key]);
        }
    }

    // Quick & even dirtier command line parsing
    for (let arg of process.argv) {
        if (!arg.startsWith("--")) {
            continue;
        }
        arg = arg.slice(2);

        const separatorPos = arg.indexOf("=");
        let key, value;

        if (separatorPos === -1) {
            key = arg;
            value = true;
        } else {
            key = arg.slice(0, separatorPos);
            value = arg.slice(separatorPos + 1);
        }

        addVariable(variables, key.toLowerCase().split("-"), value);
    }

    return variables;
}

function getDefaultRoot(envName: string) {
    let matterDir;
    if (process.platform === "win32") {
        matterDir = resolve(process.env.APPDATA ?? ".", "matter");
    } else {
        matterDir = resolve(process.env.HOME ?? ".", ".matter");
    }

    if (envName !== "default") {
        matterDir = `${matterDir}-${envName}`;
    }

    return matterDir;
}

export function merge(a: Record<string, any>, b: Record<string, any>) {
    const merged = { ...a };
    for (const key in b) {
        const aval = a[key];
        const bval = b[key];
        if (typeof bval === "object") {
            if (typeof aval === "object") {
                merged[key] = merge(aval, bval);
            } else {
                merged[key] = bval;
            }
        } else if (typeof aval !== "object") {
            merged[key] = bval;
        }
    }
    return merged;
}

export function loadConfigFile(variables: Record<string, any>) {
    const path = variables.path.config;

    if (!existsSync(path)) {
        return variables;
    }

    let configJson;
    try {
        configJson = readFileSync(path).toString();
    } catch (e: any) {
        throw new ImplementationError(`Error reading configuration file ${path}: ${e.message}`);
    }

    let configVars;
    try {
        configVars = JSON.parse(configJson);
    } catch (e: any) {
        throw new ImplementationError(`Error parsing configuration file ${path}: ${e.message}`);
    }

    return merge(configVars, variables);
}

export function setDefaults(variables: Record<string, any>) {
    let envName = variables?.environment;
    if (envName === undefined || envName === "") {
        envName = "default";
    }

    let rootPath = variables?.path?.root;
    if (rootPath === undefined || rootPath === "") {
        rootPath = getDefaultRoot(envName);
    }

    let configPath = variables?.path?.config;
    if (configPath === undefined || configPath === "") {
        configPath = "config.json";
    }
    configPath = resolve(rootPath, configPath);

    return merge(
        {
            environment: envName,
            path: {
                root: rootPath,
                config: configPath,
            },
        },
        variables,
    );
}
