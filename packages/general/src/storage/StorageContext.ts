/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterAggregateError } from "#MatterError.js";
import { MaybePromise } from "../util/Promises.js";
import { Storage, StorageError } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export interface StorageContextFactory {
    createContext(context: string): StorageContext;
    createBlobContext(context: string): BlobStorageContext;
}

export class BaseStorageContext implements StorageContextFactory {
    constructor(
        protected readonly storage: Storage,
        readonly thisContexts: string[],
    ) {}

    has(key: string) {
        return this.storage.has(this.thisContexts, key);
    }

    delete(key: string) {
        return this.storage.delete(this.thisContexts, key);
    }

    createContext(context: string): StorageContext {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new StorageContext(this.storage, [...this.thisContexts, context]);
    }

    createBlobContext(context: string): BlobStorageContext {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new BlobStorageContext(this.storage, [...this.thisContexts, context]);
    }

    keys() {
        return this.storage.keys(this.thisContexts);
    }

    contexts() {
        return this.storage.contexts(this.thisContexts);
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
            });
        }
        const promises = new Array<PromiseLike<void>>();
        keys.forEach(key => {
            const promise = this.delete(key);
            if (promise !== undefined && MaybePromise.is(promise)) {
                promises.push(promise);
            }
        });
        if (promises.length > 0) {
            return MatterAggregateError.allSettled(promises, "Error while clearing storage").then(() => {});
        }
        return undefined;
    }

    /** Clears all keys in this context and all created sub-contexts. */
    clearAll() {
        return this.storage.clearAll(this.thisContexts);
    }
}

export class StorageContext extends BaseStorageContext {
    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): MaybePromise<T> {
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
                    return defaultValue as T;
                }) as MaybePromise<T>;
            }
            return value as T;
        }
        if (defaultValue === undefined) {
            throw new StorageError(
                `No value found for key ${key} in context ${this.thisContexts} and no default value specified!`,
            );
        }
        return defaultValue;
    }

    set(key: string, value: SupportedStorageTypes): MaybePromise<void>;
    set(values: Record<string, SupportedStorageTypes>): MaybePromise<void>;
    set(keyOrValues: string | Record<string, SupportedStorageTypes>, value?: SupportedStorageTypes) {
        if (typeof keyOrValues === "string") {
            return this.storage.set(this.thisContexts, keyOrValues, value);
        }
        return this.storage.set(this.thisContexts, keyOrValues);
    }

    values() {
        return this.storage.values(this.thisContexts);
    }
}

export class BlobStorageContext extends BaseStorageContext {
    readBlob(key: string, options?: BlobStorageContext.Options) {
        return this.storage.readBlob(this.thisContexts, key, options);
    }

    writeBlob(key: string, stream: ReadableStream<Uint8Array>) {
        return this.storage.writeBlob(this.thisContexts, key, stream);
    }

    blobSize(key: string) {
        return this.storage.blobSize(this.thisContexts, key);
    }
}

export namespace BlobStorageContext {
    export interface Options {
        start?: number | undefined;
        end?: number | undefined;
        highWaterMark?: number | undefined;
    }
}
