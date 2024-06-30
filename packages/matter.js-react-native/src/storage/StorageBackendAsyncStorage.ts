/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    MaybeAsyncStorage,
    StorageError,
    SupportedStorageTypes,
    fromJson,
    toJson,
} from "@project-chip/matter.js/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageBackendAsyncStorage extends MaybeAsyncStorage {
    #namespace: string;
    protected isInitialized = false;

    /**
     * Creates a new instance of the AsyncStorage storage backend. In a "namespace" is provided then the keys will be
     * prefixed with the namespace (separated with a # which is normally not used in matter.js keys).
     */
    constructor(namespace?: string) {
        super();
        this.#namespace = namespace ?? "";
    }

    get initialized() {
        return this.isInitialized;
    }

    initialize() {
        this.isInitialized = true;
    }

    close() {
        this.isInitialized = false;
    }

    clear() {
        return AsyncStorage.default.clear();
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
        return `${this.#namespace.length ? `${this.#namespace}#` : ""}${contextKey}`;
    }

    buildStorageKey(contexts: string[], key: string) {
        if (!key.length) {
            throw new StorageError("Key must not be an empty string.");
        }
        const contextKey = this.getContextBaseKey(contexts);
        return `${contextKey}.${key}`;
    }

    async get<T extends SupportedStorageTypes>(contexts: string[], key: string): Promise<T | undefined> {
        const value = await AsyncStorage.default.getItem(this.buildStorageKey(contexts, key));
        if (value === null) return undefined;
        return fromJson(value) as T;
    }

    set(contexts: string[], key: string, value: SupportedStorageTypes): Promise<void>;
    set(contexts: string[], values: Record<string, SupportedStorageTypes>): Promise<void>;
    async set(
        contexts: string[],
        keyOrValues: string | Record<string, SupportedStorageTypes>,
        value?: SupportedStorageTypes,
    ) {
        if (typeof keyOrValues === "string") {
            await AsyncStorage.default.setItem(this.buildStorageKey(contexts, keyOrValues), toJson(value));
        } else {
            for (const [key, value] of Object.entries(keyOrValues)) {
                await AsyncStorage.default.setItem(this.buildStorageKey(contexts, key), toJson(value));
            }
        }
    }

    delete(contexts: string[], key: string) {
        return AsyncStorage.default.removeItem(this.buildStorageKey(contexts, key));
    }

    /** Returns all keys of a storage context without keys of sub-contexts */
    async keys(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts);
        const keys = [];
        const contextKeyStart = `${contextKey}.`;
        const allKeys = await AsyncStorage.default.getAllKeys();
        for (const key of allKeys) {
            if (key.startsWith(contextKeyStart) && key.indexOf(".", contextKeyStart.length) === -1) {
                keys.push(key.substring(contextKeyStart.length));
            }
        }
        return keys;
    }

    async values(contexts: string[]) {
        // Initialize and context checks are done by keys method
        const values = {} as Record<string, SupportedStorageTypes>;
        for (const key of await this.keys(contexts)) {
            values[key] = await this.get(contexts, key);
        }
        return values;
    }

    async contexts(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts, true);
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        const foundContexts = new Array<string>();
        const allKeys = await AsyncStorage.default.getAllKeys();
        for (const key of allKeys) {
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

    async clearAll(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts, true);
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        const allKeys = await AsyncStorage.default.getAllKeys();
        for (const key of allKeys) {
            if (key.startsWith(startContextKey)) {
                await AsyncStorage.default.removeItem(key);
            }
        }
    }
}
