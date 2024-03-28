/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, StorageError, SupportedStorageTypes, SyncStorage, toJson } from "@project-chip/matter.js/storage";
import { LocalStorage } from "node-localstorage";

export class StorageBackendDisk extends SyncStorage {
    private readonly localStorage;

    constructor(path: string, clear = false) {
        super();
        this.localStorage = new LocalStorage(path);
        if (clear) this.clear();
    }

    initialize() {
        // nothing to do
    }

    close() {
        // nothing to do
    }

    clear() {
        this.localStorage.clear();
    }

    getContextBaseKey(contexts: string[], allowEmptyContext = false) {
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

    buildStorageKey(contexts: string[], key: string) {
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

    set(contexts: string[], key: string, value: SupportedStorageTypes): void;
    set(contexts: string[], values: Record<string, SupportedStorageTypes>): void;
    set(
        contexts: string[],
        keyOrValues: string | Record<string, SupportedStorageTypes>,
        value?: SupportedStorageTypes,
    ) {
        if (typeof keyOrValues === "string") {
            this.localStorage.setItem(this.buildStorageKey(contexts, keyOrValues), toJson(value));
        } else {
            for (const [key, value] of Object.entries(keyOrValues)) {
                this.localStorage.setItem(this.buildStorageKey(contexts, key), toJson(value));
            }
        }
    }

    delete(contexts: string[], key: string) {
        this.localStorage.removeItem(this.buildStorageKey(contexts, key));
    }

    /** Returns all keys of a storage context without keys of sub-contexts */
    keys(contexts: string[]) {
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

    values(contexts: string[]) {
        // Initialize and context checks are done by keys method
        const values = {} as Record<string, SupportedStorageTypes>;
        for (const key of this.keys(contexts)) {
            values[key] = this.get(contexts, key);
        }
        return values;
    }

    contexts(contexts: string[]) {
        const contextKey = contexts.length ? this.getContextBaseKey(contexts) : "";
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        const foundContexts = new Array<string>();
        for (const key of Object.keys(this.localStorage)) {
            if (key.startsWith(startContextKey)) {
                const subKeys = key.substring(startContextKey.length).split(".");
                if (subKeys.length === 1) continue; // found leaf key
                const context = subKeys[0];
                if (!foundContexts.includes(context)) {
                    foundContexts.push(context);
                }
            }
        }
        return foundContexts;
    }

    clearAll(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts, true);
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        for (const key of Object.keys(this.localStorage)) {
            if (key.startsWith(startContextKey)) {
                this.localStorage.removeItem(key);
            }
        }
    }
}
