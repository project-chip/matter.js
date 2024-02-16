/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, StorageService, VariableService } from "@project-chip/matter.js/environment";
import { Network } from "@project-chip/matter.js/net";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { ImplementationError } from "../exports/common.js";
import { NetworkNode } from "../net/NetworkNode.js";
import { StorageBackendDisk } from "../storage/StorageBackendDisk.js";
import { NodeJsActionTracer } from "./NodeJsActionTracer.js";
import { ProcessManager } from "./ProcessManager.js";

/**
 * This is the default environment implementation for Node.js:
 *
 *   - Sets variables using rudimentary command line, environment and configuration file parsers.
 *
 *   - Processes UNIX-style signals and sets process exit codes via {@link ProcessManager}
 *
 *   - Creates a default storage pool using the loaded configuration.
 *
 * You can modify this behavior:
 *
 *   - Via configuration
 *
 *   - By modifying {@link Environment.default}
 *
 *   - By providing an {@link Environment} to your components other than {@link Environment.default}
 *
 * The settings are applied in this order (the higher numbers overwrite lower numbers):
 * 1. Environment variables (MATTER_*)
 * 2. Command line parameters
 * 3. Some internal Defaults (mainly Loglevel and such)
 * 4. Config file (always wins if used/present)
 *
 * The following variables are defined by this class additionally to {@link Environment}:
 * * `environment` - Name of the environment, Default "default"
 * * `path.root` - Path considered as root for any files to store, Fallback: ".", Default: APPDATA/.matter (Windows), HOME/.matter else (or .matter-<envname>)
 * * `path.config` - Path to config file, Default: "config.json"
 * * `trace.path` - Path of the trace file to write, Default: "trace.jsonl" relative to path.root
 * * `trace.enable` - Enable writing a trace file
 * * `storage.path` - Where to store storage files, Default: "path.root"
 * * `storage.clear` - Clear storage on start? Default: false
 * * `runtime.signals` - By default register SIGINT and SUGUSR2 (diag) handlers, set to false if not wanted
 * * `runtime.exitcode` - by default we set the process.exitcode to 0 (ok) or 1 (crash), set to false if not wanted
 */
export function NodeJsEnvironment() {
    const env = new Environment("default");

    loadVariables(env);
    configureRuntime(env);
    configureStorage(env);
    configureNetwork(env);

    NodeJsActionTracer.configure(env);

    return env;
}

function loadVariables(env: Environment) {
    const vars = env.vars;

    vars.addUnixEnvStyle(process.env);
    vars.addArgvStyle(process.argv);
    vars.addConfigStyle(getDefaults(vars));
    vars.addConfigStyle(loadConfigFile(vars));
}

function configureRuntime(env: Environment) {
    const processManager = new ProcessManager(env);
    env.set(ProcessManager, processManager);
}

function configureStorage(env: Environment) {
    const service = env.get(StorageService);
    const location = env.vars.get("storage.path", env.vars.get("path.root", "."));
    service.location = location;
    service.factory = namespace =>
        new StorageBackendDisk(resolve(location, namespace), env.vars.get("storage.clear", false));
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
        runtime: {
            signals: true,
            exitcode: true,
        },
    };
}
