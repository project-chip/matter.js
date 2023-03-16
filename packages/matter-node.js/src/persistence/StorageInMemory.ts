/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage } from "./Storage";

export class StorageInMemory implements Storage {
    protected store: any = {};
    protected initialized = false;

    async initialize() {
        this.initialized = true;
    }

    async close() {
        // nothing to do
    }

    get<T>(context: string, key: string): T | undefined {
        if (!this.initialized) throw new Error("Storage not initialized yet!");
        return this.store[context]?.[key];
    }

    getAll(context: string): { key: string, value: any }[] {
        if (!this.initialized) throw new Error("Storage not initialized yet!");
        const contextStore = this.store[context];
        if (contextStore === undefined) return [];
        return Object.keys(contextStore).map(key => ({ key, value: contextStore[key] }));
    }

    set<T>(context: string, key: string, value: T): void {
        if (!this.initialized) throw new Error("Storage not initialized yet!");
        let contextStore = this.store[context];
        if (contextStore === undefined) {
            contextStore = {};
            this.store[context] = contextStore;
        }
        contextStore[key] = value;
    }
}
