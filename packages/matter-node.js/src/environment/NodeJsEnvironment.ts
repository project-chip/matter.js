/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { ImplementationError } from "../exports/common.js";
import { StorageBackendDisk } from "../storage/StorageBackendDisk.js";
import { Environment, RuntimeService, VariableService, StorageService } from "@project-chip/matter.js/environment";
import { NetworkNode } from "../net/NetworkNode.js";
import { Network } from "@project-chip/matter.js/net";

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
export function NodeJsEnvironment() {
    const env = new Environment("default");

    loadVariables(env);
    configureSignals(env);
    configureStorage(env);
    configureNetwork(env);

    return env;
}

function loadVariables(env: Environment) {
    const vars = env.vars;

    vars.addUnixEnvStyle(process.env);
    vars.addArgvStyle(process.argv);
    vars.addConfigStyle(getDefaults(vars));
    vars.addConfigStyle(loadConfigFile(vars));
}

function configureSignals(env: Environment) {
    const runtime = env.get(RuntimeService);

    const interrupt = (): void => runtime.cancel();
    const diagnose = (): void => { process.on("SIGUSR2", env.diagnose); env.diagnose(); };

    runtime.started.on(() => {
        process.on("SIGINT", interrupt);
        process.on("SIGUSR2", diagnose);
    });

    runtime.stopped.on(() => {
        process.off("SIGINT", interrupt);
        process.off("SIGUSR2", diagnose);
    });
}

function configureStorage(env: Environment) {
    const service = env.get(StorageService);
    const location = env.vars.get("storage.path", env.vars.get("path.root", "."));
    service.location = location;
    service.factory = namespace => new StorageBackendDisk(
        resolve(location, namespace),
        env.vars.get("storage.clear", false),
    )
}

function configureNetwork(env: Environment) {
    env.set(Network, new NetworkNode());
}

export function loadConfigFile(vars: VariableService) {
    const path = vars.get("path.config", "config.json");

    if (!existsSync(path)) {
        return {};
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

    return configVars;
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

export function getDefaults(vars: VariableService) {
    const envName = vars.get("environment", "default");
    const rootPath = vars.get("path.root", getDefaultRoot(envName));
    const configPath = resolve(rootPath, vars.get("path.config", "config.json"));

    return {
        environment: envName,
        path: {
            root: rootPath,
            config: configPath,
        },
    };
}
