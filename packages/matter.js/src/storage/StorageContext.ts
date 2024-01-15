/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "../util/Promises.js";
import { Storage, StorageError } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageContext {
    constructor(
        private readonly storage: Storage,
        readonly contexts: string[],
    ) {}

    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): MaybePromise<T> {
        const value = this.storage.get<T>(this.contexts, key);
        if (value !== undefined) {
            if (MaybePromise.is(value)) {
                return value.then(v => {
                    if (v !== undefined) return v;
                    if (defaultValue === undefined) {
                        throw new StorageError(
                            `No value found for key ${key} in context ${this.contexts} and no default value specified!`,
                        );
                    }
                    return defaultValue;
                });
            }
            return value;
        }
        if (defaultValue === undefined) {
            throw new StorageError(
                `No value found for key ${key} in context ${this.contexts} and no default value specified!`,
            );
        }
        return defaultValue;
    }

    has(key: string): MaybePromise<boolean> {
        return this.storage.get(this.contexts, key) !== undefined;
    }

    set<T extends SupportedStorageTypes>(key: string, value: T): MaybePromise<void> {
        return this.storage.set<T>(this.contexts, key, value);
    }

    delete(key: string): MaybePromise<void> {
        return this.storage.delete(this.contexts, key);
    }

    createContext(context: string) {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new StorageContext(this.storage, [...this.contexts, context]);
    }

    keys() {
        return this.storage.keys(this.contexts);
    }

    /** Clears all keys in this context */
    clear(): MaybePromise<void> {
        const keys = this.keys();
        if (MaybePromise.is(keys)) {
            return keys.then(keys => {
                return Promise.all(keys.map(key => this.delete(key))).then(() => Promise.resolve());
            });
        }
        const promises = new Array<Promise<void>>();
        for (const key of keys) {
            const promise = this.delete(key);
            if (promise !== undefined && MaybePromise.is(promise)) {
                promises.push(promise);
            }
        }
        if (promises.length > 0) {
            return Promise.all(promises).then(() => Promise.resolve());
        }
    }

    /** Clears all keys in this context and all created sub-contexts. */
    clearAll(): MaybePromise<void> {
        return this.storage.clearAll(this.contexts);
    }
}
