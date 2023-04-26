/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageBackendMemory implements Storage {
    constructor(
        protected store: any = {}
    ) { }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    get<T extends SupportedStorageTypes>(context: string, key: string): T | undefined {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        return this.store[context]?.[key];
    }

    set<T extends SupportedStorageTypes>(context: string, key: string, value: T): void {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        let contextStore = this.store[context];
        if (contextStore === undefined) {
            contextStore = {};
            this.store[context] = contextStore;
        }
        contextStore[key] = value;
    }
}
