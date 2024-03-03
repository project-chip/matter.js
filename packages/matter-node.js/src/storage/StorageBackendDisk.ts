/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, Storage, StorageError, SupportedStorageTypes, toJson } from "@project-chip/matter.js/storage";

import { LocalStorage } from "node-localstorage";

export class StorageBackendDisk implements Storage {
    private readonly localStorage;

    constructor(path: string, clear = false) {
        this.localStorage = new LocalStorage(path);
        if (clear) this.clear();
    }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    clear() {
        this.localStorage.clear();
    }

    getContextBaseKey(contexts: string[], allowEmptyContext = false): string {
        const contextKey = contexts.join(".");
        if (
            (!contextKey.length && !allowEmptyContext) ||
            contextKey.includes("..") ||
            contextKey.startsWith(".") ||
            contextKey.endsWith(".")
        )
            throw new StorageError("Context must not be an empty and not contain dots.");
        return contextKey;
    }

    buildStorageKey(contexts: string[], key: string): string {
        if (!key.length) {
            throw new StorageError("Key must not be an empty string.");
        }
        const contextKey = this.getContextBaseKey(contexts);
        return `${contextKey}.${key}`;
    }

    get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined {
        const value = this.localStorage.getItem(this.buildStorageKey(contexts, key));
        if (value === null) return undefined;
        return fromJson(value) as T;
    }

    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        this.localStorage.setItem(this.buildStorageKey(contexts, key), toJson(value));
    }

    delete(contexts: string[], key: string): void {
        this.localStorage.removeItem(this.buildStorageKey(contexts, key));
    }

    /** Returns all keys of a storage context without keys of sub-contexts */
    keys(contexts: string[]): string[] {
        const contextKey = this.getContextBaseKey(contexts);
        const keys = [];
        const contextKeyStart = `${contextKey}.`;
        for (const key of Object.keys(this.localStorage)) {
            if (key.startsWith(contextKeyStart) && key.indexOf(".", contextKeyStart.length) === -1) {
                keys.push(key.substring(contextKeyStart.length));
            }
        }
        return keys;
    }

    clearAll(contexts: string[]): void {
        const contextKey = this.getContextBaseKey(contexts, true);
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        for (const key of Object.keys(this.localStorage)) {
            if (key.startsWith(startContextKey)) {
                this.localStorage.removeItem(key);
            }
        }
    }
}
