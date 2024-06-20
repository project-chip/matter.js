/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, StorageService, VariableService } from "@project-chip/matter.js/environment";
import { Network } from "@project-chip/matter.js/net";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";
import { NetworkReactNative } from "../net/NetworkReactNative.js";

/**
 * This is the default environment implementation for React-native:
 *
 * - Uses memory storage for now, so nothing is persisted!
 */
export function ReactNativeEnvironment() {
    const env = new Environment("default");

    loadVariables(env);
    configureStorage(env);
    configureNetwork(env);

    return env;
}

function loadVariables(env: Environment) {
    const vars = env.vars;

    // Install defaults
    vars.addConfigStyle(getDefaults(vars));
}

function configureStorage(env: Environment) {
    const service = env.get(StorageService);

    env.vars.use(() => {
        service.location = "Memory";
    });

    service.factory = _namespace => new StorageBackendMemory(); // TODO implement real persistence
}

function configureNetwork(env: Environment) {
    env.set(Network, new NetworkReactNative());
}

export function getDefaults(vars: VariableService) {
    const envName = vars.get("environment", "default");

    return {
        environment: envName,
    };
}
