/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Storage } from "../storage/Storage.js";
import { StorageManager } from "../storage/StorageManager.js";
import { BasicSet } from "../util/Set.js";
import { NoProviderError } from "./MatterError.js";

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
    static default = new Environment();

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
            this.#tasks = this.loadTasks();
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

    protected loadVariables(): Record<string, any> {
        return {};
    }

    protected loadTasks(): BasicSet<Environment.Task> {
        return new BasicSet<Environment.Task>();
    }

    protected loadStorage(): Storage {
        throw new NoProviderError("API unavailable because storage is not configured");
    }
}

export namespace Environment {
    export interface Task {
        name: string;
        abort(): void;
    }
}
