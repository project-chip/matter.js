/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "../MatterError.js";
import { Environment } from "../environment/Environment.js";
import { Environmental } from "../environment/Environmental.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Storage } from "./Storage.js";
import { StorageManager } from "./StorageManager.js";

/**
 * Service adapter for the Matter.js storage API.
 */
export class StorageService {
    #factory?: (namespace: string) => Storage;
    #location?: string;

    constructor(environment: Environment, factory?: (namespace: string) => Storage) {
        environment.set(StorageService, this);
        this.#factory = factory;
    }

    static [Environmental.create](environment: Environment) {
        return new this(environment);
    }

    /**
     * Open storage.  The storage is initialized but the caller must take ownership.
     *
     * @param namespace a unique namespace identifier such as a root node ID
     */
    async open(namespace: string) {
        if (this.#factory === undefined) {
            throw new NoProviderError("Storage is unavailable because no platform implementation is installed");
        }

        const storage = this.#factory(namespace);
        const manager = new StorageManager(storage);
        await manager.initialize();
        return manager;
    }

    /**
     * Install a factory for opening storage.  Without such a factory storage is unavailable.
     */
    set factory(factory: (namespace: string) => Storage) {
        this.#factory = factory;
    }

    /**
     * The storage location.  Only used for diagnostic purposes.
     */
    get location() {
        return this.#location;
    }

    set location(location: string | undefined) {
        this.#location = location;
    }

    [Diagnostic.value]() {
        return [
            "Persistence",
            Diagnostic.dict({
                location: location ?? "(unknown)",
                available: !!this.#factory,
            }),
        ];
    }
}
