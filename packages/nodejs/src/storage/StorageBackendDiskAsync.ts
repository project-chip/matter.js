/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    createPromise,
    fromJson,
    Logger,
    MaybeAsyncStorage,
    StorageError,
    SupportedStorageTypes,
    toJson,
} from "#general";
import { mkdir, readdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";

const logger = new Logger("StorageBackendDiskAsync");

export class StorageBackendDiskAsync extends MaybeAsyncStorage {
    readonly #path: string;
    readonly #clear: boolean;
    protected isInitialized = false;
    #writeFileBlocker = new Map<string, Promise<void>>();

    constructor(path: string, clear = false) {
        super();
        this.#path = path;
        this.#clear = clear;
    }

    get initialized() {
        return this.isInitialized;
    }

    async initialize() {
        if (this.#clear) {
            await this.clear();
        }
        await mkdir(this.#path, { recursive: true });
        this.isInitialized = true;
    }

    close() {
        this.isInitialized = false;
    }

    filePath(fileName: string) {
        return join(this.#path, fileName);
    }

    async clear() {
        await rm(this.#path, { recursive: true, force: true });
        await mkdir(this.#path, { recursive: true });
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

    async get<T extends SupportedStorageTypes>(contexts: string[], key: string): Promise<T | undefined> {
        let value: string;
        try {
            value = await readFile(this.filePath(this.buildStorageKey(contexts, key)), "utf8");
        } catch (error: any) {
            if (error.code === "ENOENT") return undefined;
            throw error;
        }
        try {
            return fromJson(value) as T;
        } catch (error) {
            logger.error(`Failed to parse storage value for key ${key} in context ${contexts.join(".")}`);
        }
    }

    set(contexts: string[], key: string, value: SupportedStorageTypes): Promise<void>;
    set(contexts: string[], values: Record<string, SupportedStorageTypes>): Promise<void>;
    async set(
        contexts: string[],
        keyOrValues: string | Record<string, SupportedStorageTypes>,
        value?: SupportedStorageTypes,
    ) {
        if (typeof keyOrValues === "string") {
            return await this.#writeFile(this.buildStorageKey(contexts, keyOrValues), toJson(value));
        }

        const promises = new Array<Promise<void>>();
        for (const [key, value] of Object.entries(keyOrValues)) {
            promises.push(this.#writeFile(this.buildStorageKey(contexts, key), toJson(value)));
        }
        await Promise.all(promises);
    }

    /** According to Node.js documentation, writeFile is not atomic. This method ensures atomicity. */
    async #writeFile(fileName: string, value: string): Promise<void> {
        const blocker = this.#writeFileBlocker.get(fileName);
        if (blocker !== undefined) {
            await blocker;
            return this.#writeFile(fileName, value);
        }

        const { promise, rejecter, resolver } = createPromise<void>();

        this.#writeFileBlocker.set(fileName, promise);
        writeFile(this.filePath(fileName), value, "utf8")
            .then(() => {
                this.#writeFileBlocker.delete(fileName);
                resolver();
            })
            .catch(() => {
                this.#writeFileBlocker.delete(fileName);
                rejecter();
            });
        return promise;
    }

    delete(contexts: string[], key: string) {
        return rm(this.filePath(this.buildStorageKey(contexts, key)), { force: true });
    }

    /** Returns all keys of a storage context without keys of sub-contexts */
    async keys(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts);
        const keys = [];
        const contextKeyStart = `${contextKey}.`;
        const len = contextKeyStart.length;

        const files = await readdir(this.#path);

        for (const key of files) {
            if (key.startsWith(contextKeyStart) && !key.includes(".", len)) {
                keys.push(key.substring(len));
            }
        }
        return keys;
    }

    async values(contexts: string[]) {
        // Initialize and context checks are done by keys method
        const values = {} as Record<string, SupportedStorageTypes>;

        const promises = new Array<Promise<void>>();
        for (const key of await this.keys(contexts)) {
            promises.push(
                (async () => {
                    values[key] = await this.get(contexts, key);
                })(),
            );
        }
        await Promise.all(promises);
        return values;
    }

    async contexts(contexts: string[]) {
        const contextKey = this.getContextBaseKey(contexts, true);
        const startContextKey = contextKey.length ? `${contextKey}.` : "";
        const len = startContextKey.length;
        const foundContexts = new Array<string>();

        const files = await readdir(this.#path);

        for (const key of files) {
            if (key.startsWith(startContextKey)) {
                const subKeys = key.substring(len).split(".");
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

        const files = await readdir(this.#path);

        const promises = new Array<Promise<void>>();
        for (const key of files) {
            if (key.startsWith(startContextKey)) {
                promises.push(rm(this.filePath(key), { force: true }));
            }
        }
        await Promise.all(promises);
    }
}
