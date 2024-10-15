/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Environment,
    ImplementationError,
    LogFormat,
    Logger,
    Network,
    StorageService,
    VariableService,
} from "#general";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { NodeJsNetwork } from "../net/NodeJsNetwork.js";
import { StorageBackendDiskAsync } from "../storage/StorageBackendDiskAsync.js";
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
 * 1. Some internal Defaults (mainly Loglevel and such)
 * 2. Config file
 * 3. Environment variables (MATTER_*)
 * 4. Command line parameters
 *
 * The following variables are defined by this class additionally to {@link Environment}:
 * * `environment` - Name of the environment, Default "default"
 * * `path.root` - Path considered as root for any files to store, Fallback: ".", Default: APPDATA/.matter (Windows), HOME/.matter else (or .matter-<envname>)
 * * `path.config` - Path to config file, Default: "config.json"
 * * `trace.path` - Path of the trace file to write, Default: "trace.jsonl" relative to path.root
 * * `trace.enable` - Enable writing a trace file
 * * `storage.path` - Where to store storage files, Default: "path.root"
 * * `storage.clear` - Clear storage on start? Default: false
 * * `runtime.signals` - By default register SIGINT and SIGUSR2 (diag) handlers, set to false if not wanted
 * * `runtime.exitcode` - By default we set the process.exitcode to 0 (ok) or 1 (crash); set to false to disable
 * * `runtime.unhandlederrors` - By default we log unhandled errors to matter.js log; set to false to disable
 */
export function NodeJsEnvironment() {
    const env = new Environment("default");

    loadVariables(env);
    configureRuntime(env);
    configureStorage(env);
    configureNetwork(env);

    // When no logger format is set, we still use the default, and the process is running in a TTY, use ANSI formatting
    // If a user wants to change the log format he still can do after the environment was initialized (which should be
    // first thing anyway)
    if (!env.vars.has("logger.format") && Logger.format === LogFormat.PLAIN && process.stdin?.isTTY) {
        env.vars.set("logger.format", LogFormat.ANSI);
    }

    NodeJsActionTracer.configure(env);

    return env;
}

function loadVariables(env: Environment) {
    const vars = env.vars;

    // Install defaults
    vars.addConfigStyle(getDefaults(vars));

    // Preload environment and argv so we can use it to find config file
    vars.addUnixEnvStyle(process.env);
    vars.addArgvStyle(process.argv);

    // Load config files
    vars.addConfigStyle(loadConfigFile(vars));

    // Reload environment and argv so they override config
    vars.addUnixEnvStyle(process.env);
    vars.addArgvStyle(process.argv);
}

function configureRuntime(env: Environment) {
    const processManager = new ProcessManager(env);
    env.set(ProcessManager, processManager);
}

function configureStorage(env: Environment) {
    const service = env.get(StorageService);

    env.vars.use(() => {
        service.location = env.vars.get("storage.path", env.vars.get("path.root", "."));
    });

    service.factory = namespace =>
        new StorageBackendDiskAsync(resolve(service.location ?? ".", namespace), env.vars.get("storage.clear", false));
}

function configureNetwork(env: Environment) {
    env.set(Network, new NodeJsNetwork());
}

export function loadConfigFile(vars: VariableService) {
    const path = vars.get("path.config", "config.json");

    if (!existsSync(path)) {
        return {};
    }

    let configJson;
    try {
        configJson = readFileSync(path).toString();
    } catch (e) {
        throw new ImplementationError(`Error reading configuration file ${path}: ${(e as Error).message}`);
    }

    let configVars;
    try {
        configVars = JSON.parse(configJson);
    } catch (e) {
        throw new ImplementationError(`Error parsing configuration file ${path}: ${(e as Error).message}`);
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
