/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage, StorageError } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageContext {
    private readonly existingContexts = new Map<string, StorageContext>();

    constructor(
        private readonly storage: Storage,
        private readonly contexts: string[],
    ) {}

    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): T {
        const value = this.storage.get<T>(this.contexts, key);
        if (value !== undefined) return value;
        if (defaultValue === undefined) {
            throw new StorageError(
                `No value found for key ${key} in context ${this.contexts} and no default value specified!`,
            );
        }
        return defaultValue;
    }

    has(key: string): boolean {
        return this.storage.get(this.contexts, key) !== undefined;
    }

    set<T extends SupportedStorageTypes>(key: string, value: T): void {
        this.storage.set<T>(this.contexts, key, value);
    }

    delete(key: string): void {
        this.storage.delete(this.contexts, key);
    }

    createContext(context: string) {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        const contextInstance =
            this.existingContexts.get(context) ?? new StorageContext(this.storage, [...this.contexts, context]);
        this.existingContexts.set(context, contextInstance);
        return contextInstance;
    }

    keys(): string[] {
        return this.storage.keys(this.contexts);
    }

    /** Clears all keys in this context */
    clear(): void {
        for (const key of this.keys()) {
            this.delete(key);
        }
    }

    /** Clears all keys in this context and all created sub-contexts. */
    clearAll(): void {
        this.clear();
        for (const context of this.existingContexts.values()) {
            context.clearAll();
        }
    }
}
