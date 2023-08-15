/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, Storage, StorageError, SupportedStorageTypes, toJson } from "@project-chip/matter.js/storage";

import { LocalStorage } from "node-localstorage";

export class StorageBackendDisk implements Storage {
    private readonly localStorage;

    constructor(path: string, clear = false) {
        this.localStorage = new LocalStorage(path);
        if (clear) this.localStorage.clear();
    }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    buildStorageKey(contexts: string[], key: string): string {
        const contextKey = contexts.join(".");
        if (
            !key.length ||
            !contextKey.length ||
            contextKey.includes("..") ||
            contextKey.startsWith(".") ||
            contextKey.endsWith(".")
        )
            throw new StorageError("Context must not be an empty string!");
        return `${contextKey}.${key}`;
    }

    get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty strings!");
        const value = this.localStorage.getItem(this.buildStorageKey(contexts, key));
        if (value === null) return undefined;
        return fromJson(value) as T;
    }

    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty strings!");
        this.localStorage.setItem(this.buildStorageKey(contexts, key), toJson(value));
    }

    delete(contexts: string[], key: string): void {
        if (!contexts.length || !key.length) throw new StorageError("Context and key must not be empty strings!");
        this.localStorage.removeItem(this.buildStorageKey(contexts, key));
    }
}
