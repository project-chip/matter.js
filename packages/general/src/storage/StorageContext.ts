/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError } from "#MatterError.js";
import { MaybePromise } from "../util/Promises.js";
import { Storage, StorageError, StorageOperationResult } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export interface StorageContextFactory<S extends Storage = any> {
    createContext(context: string): StorageContext<S>;
}

export class StorageContext<S extends Storage = any> implements StorageContextFactory<S> {
    constructor(
        private readonly storage: S,
        readonly thisContexts: string[],
    ) {}

    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): StorageOperationResult<S, T> {
        const value = this.storage.get(this.thisContexts, key);
        if (value !== undefined) {
            if (MaybePromise.is(value)) {
                return value.then(v => {
                    if (v !== undefined) return v;
                    if (defaultValue === undefined) {
                        throw new StorageError(
                            `No value found for key ${key} in context ${this.thisContexts} and no default value specified!`,
                        );
                    }
                    return defaultValue;
                }) as StorageOperationResult<S, T>;
            }
            return value as StorageOperationResult<S, T>;
        }
        if (defaultValue === undefined) {
            throw new StorageError(
                `No value found for key ${key} in context ${this.thisContexts} and no default value specified!`,
            );
        }
        return defaultValue as StorageOperationResult<S, T>;
    }

    has(key: string) {
        const value = this.storage.get(this.thisContexts, key);
        if (value !== undefined) {
            if (MaybePromise.is(value)) {
                return value.then(v => v !== undefined) as StorageOperationResult<S, boolean>;
            }
            return true as StorageOperationResult<S, boolean>;
        }
        return false as StorageOperationResult<S, boolean>;
    }

    set(key: string, value: SupportedStorageTypes): StorageOperationResult<S>;
    set(values: Record<string, SupportedStorageTypes>): StorageOperationResult<S>;
    set(keyOrValues: string | Record<string, SupportedStorageTypes>, value?: SupportedStorageTypes) {
        if (typeof keyOrValues === "string") {
            return this.storage.set(this.thisContexts, keyOrValues, value) as StorageOperationResult<S>;
        }
        return this.storage.set(this.thisContexts, keyOrValues) as StorageOperationResult<S>;
    }

    delete(key: string) {
        return this.storage.delete(this.thisContexts, key) as StorageOperationResult<S>;
    }

    createContext(context: string): StorageContext<S> {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new StorageContext(this.storage, [...this.thisContexts, context]);
    }

    keys() {
        return this.storage.keys(this.thisContexts) as StorageOperationResult<S, string[]>;
    }

    values() {
        return this.storage.values(this.thisContexts) as StorageOperationResult<
            S,
            Record<string, SupportedStorageTypes>
        >;
    }

    contexts() {
        return this.storage.contexts(this.thisContexts) as StorageOperationResult<S, string[]>;
    }

    /** Clears all keys in this context */
    clear() {
        const keys = this.keys();
        if (MaybePromise.is(keys)) {
            return keys.then(keys => {
                return MatterAggregateError.allSettled(
                    keys.map(key => this.delete(key)),
                    "Error while clearing storage",
                ).then(() => {});
            }) as StorageOperationResult<S>;
        }
        const promises = new Array<PromiseLike<void>>();
        keys.forEach(key => {
            const promise = this.delete(key);
            if (promise !== undefined && MaybePromise.is(promise)) {
                promises.push(promise);
            }
        });
        if (promises.length > 0) {
            return MatterAggregateError.allSettled(promises, "Error while clearing storage").then(
                () => {},
            ) as StorageOperationResult<S>;
        }
        return undefined as StorageOperationResult<S>;
    }

    /** Clears all keys in this context and all created sub-contexts. */
    clearAll() {
        return this.storage.clearAll(this.thisContexts) as StorageOperationResult<S>;
    }
}
