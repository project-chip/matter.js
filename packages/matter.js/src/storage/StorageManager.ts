/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { StorageContext } from "./StorageContext.js";
import { Storage } from "./Storage.js";

export class StorageManager {
    private initialized = false;

    constructor(
        private storage: Storage
    ) { }

    async initialize() {
        await this.storage.initialize();
        this.initialized = true;
    }

    async close() {
        await this.storage.close();
    }

    createContext(context: string) {
        if (!this.initialized) throw new Error("The storage needs to be initialized first!");
        if (context.includes('.')) throw new Error("Context must not contain dots!");
        return new StorageContext(this.storage, context);
    }
}
