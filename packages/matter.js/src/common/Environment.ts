/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { Logger } from "../log/Logger.js";
import type { Storage } from "../storage/Storage.js";
import { StorageManager } from "../storage/StorageManager.js";
import { Time } from "../time/Time.js";
import { BasicSet } from "../util/Set.js";
import { NoProviderError } from "./MatterError.js";

const logger = Logger.get("Environment");

/**
 * Access to general platform-dependent features.
 *
 * TODO - could remove global singletons by moving here
 */
export class Environment {
    #variables?: Record<string, any>;
    #tasks?: BasicSet<Environment.Task>;

    /**
     * The default environment.
     */
    static get default() {
        return global;
    }

    /**
     * Set the default environment.
     */
    static set default(env: Environment) {
        global = env;

        Logger.level = global.variables.log?.level;
        Logger.format = global.variables.log?.format;
    }

    /**
     * Configuration values.
     */
    get variables() {
        if (!this.#variables) {
            this.#variables = this.loadVariables();
        }
        return this.#variables;
    }

    /**
     * Long-running tasks that should stop when the environment shuts down
     * gracefully.
     */
    get tasks() {
        if (!this.#tasks) {
            this.#tasks = new BasicSet;
            this.#tasks.added.on(task => DiagnosticSource.add(task));
            this.#tasks.deleted.on(task => DiagnosticSource.delete(task));
        }
        return this.#tasks;
    }

    /**
     * Create storage.  The environment initializes the storage but the caller
     * must take ownership.
     */
    async createStorage() {
        const storage = this.loadStorage();
        const manager = new StorageManager(storage);
        await manager.initialize();
        return manager;
    }

    /**
     * Abort tasks that are abortable.
     */
    interrupt() {
        if (this.#tasks) {
            for (const task of this.#tasks) {
                try {
                    task.abort?.();
                } catch (e) {
                    logger.error(`Unhandled error aborting "${task.name}":`, e);
                }
            }
        }
    }

    /**
     * Display tasks that supply diagnostics.
     */
    diagnose() {
        Time.getTimer("Diagnostics", 0, () => {
            try {
                logger.notice("Diagnostics follow", DiagnosticSource);
            } catch (e) {
                logger.error(`Unhandled error gathering diagnostics:`, e);
            }
        }).start();
    }

    protected loadVariables(): Record<string, any> {
        return {};
    }

    protected loadStorage(): Storage {
        throw new NoProviderError("API unavailable because storage is not configured");
    }
}

export namespace Environment {
    export interface Task {
        name: string;
        abort?: () => void;
        [Diagnostic.value]: {};
    }
}

let global: Environment = new Environment();
