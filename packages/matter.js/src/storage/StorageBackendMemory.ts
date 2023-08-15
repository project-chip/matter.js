/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage, StorageError } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageBackendMemory implements Storage {
    constructor(protected store: any = {}) {}

    private createContextKey(contexts: string[]) {
        const key = contexts.join(".");
        if (!key.length || key.includes("..") || key.startsWith(".") || key.endsWith("."))
            throw new StorageError("Context must not be an empty string!");
        return key;
    }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty!");
        return this.store[this.createContextKey(contexts)]?.[key];
    }

    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty!");
        const contextKey = this.createContextKey(contexts);
        if (this.store[contextKey] === undefined) {
            this.store[contextKey] = {};
        }
        this.store[contextKey][key] = value;
    }

    delete(contexts: string[], key: string): void {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty!");
        delete this.store[this.createContextKey(contexts)]?.[key];
    }
}
