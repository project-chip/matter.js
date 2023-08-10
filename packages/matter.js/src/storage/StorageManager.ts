/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage, StorageError } from "./Storage.js";
import { StorageContext } from "./StorageContext.js";

export class StorageManager {
    private initialized = false;

    constructor(private storage: Storage) {}

    async initialize() {
        await this.storage.initialize();
        this.initialized = true;
    }

    async close() {
        await this.storage.close();
    }

    createContext(context: string) {
        if (!this.initialized) throw new StorageError("The storage needs to be initialized first!");
        if (!context.length) throw new StorageError("Context must not be an empty string!");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new StorageContext(this.storage, [context]);
    }
}
