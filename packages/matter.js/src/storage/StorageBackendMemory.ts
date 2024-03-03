/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage, StorageError } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageBackendMemory implements Storage {
    protected initialized = false;

    constructor(protected store: any = {}) {}

    static async create(store: any = {}) {
        const storage = new StorageBackendMemory(store);
        await storage.initialize();
        return storage;
    }

    private createContextKey(contexts: string[]) {
        const key = contexts.join(".");
        if (!key.length || key.includes("..") || key.startsWith(".") || key.endsWith("."))
            throw new StorageError("Context must not be an empty string.");
        return key;
    }

    async initialize() {
        if (this.initialized) throw new StorageError("Storage already initialized!");
        this.initialized = true;
        // nothing else to do
    }

    async close() {
        this.initialized = false;
        // nothing to do
    }

    clear(): void {
        this.store = {};
    }

    get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined {
        if (!this.initialized) throw new StorageError("Storage is not initialized");
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty.");
        return this.store[this.createContextKey(contexts)]?.[key];
    }

    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        if (!this.initialized) throw new StorageError("Storage is not initialized");
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty.");
        const contextKey = this.createContextKey(contexts);
        if (this.store[contextKey] === undefined) {
            this.store[contextKey] = {};
        }
        this.store[contextKey][key] = value;
    }

    delete(contexts: string[], key: string): void {
        if (!this.initialized) throw new StorageError("Storage is not initialized");
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty.");
        delete this.store[this.createContextKey(contexts)]?.[key];
    }

    keys(contexts: string[]): string[] {
        if (!this.initialized) throw new StorageError("Storage is not initialized");
        if (!contexts.length) throw new StorageError("Context must not be empty!");
        return Object.keys(this.store[this.createContextKey(contexts)] ?? {});
    }

    clearAll(contexts: string[]): void {
        if (!this.initialized) throw new StorageError("Storage is not initialized");
        const contextKey = this.createContextKey(contexts);
        if (contextKey.length) {
            delete this.store[contextKey];
        }
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        Object.keys(this.store).forEach(key => {
            if (key.startsWith(startContextKey)) {
                delete this.store[key];
            }
        });
    }
}
