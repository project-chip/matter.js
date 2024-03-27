/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "../util/Promises.js";
import { Storage, StorageError, SyncStorage } from "./Storage.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageContext<S extends Storage = any> {
    constructor(
        private readonly storage: S,
        readonly thisContexts: string[],
    ) {}

    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): S extends SyncStorage ? T : Promise<T> {
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
                }) as S extends SyncStorage ? T : Promise<T>;
            }
            return value as S extends SyncStorage ? T : Promise<T>;
        }
        if (defaultValue === undefined) {
            throw new StorageError(
                `No value found for key ${key} in context ${this.thisContexts} and no default value specified!`,
            );
        }
        return defaultValue as S extends SyncStorage ? T : Promise<T>;
    }

    has(key: string) {
        const value = this.storage.get(this.thisContexts, key);
        if (value !== undefined) {
            if (MaybePromise.is(value)) {
                return value.then(v => v !== undefined) as S extends SyncStorage ? boolean : Promise<boolean>;
            }
            return true as S extends SyncStorage ? boolean : Promise<boolean>;
        }
        return false as S extends SyncStorage ? boolean : Promise<boolean>;
    }

    set<T extends SupportedStorageTypes>(key: string, value: T) {
        return this.storage.set(this.thisContexts, key, value) as S extends SyncStorage ? void : MaybePromise<void>;
    }

    delete(key: string) {
        return this.storage.delete(this.thisContexts, key) as S extends SyncStorage ? void : MaybePromise<void>;
    }

    createContext(context: string): StorageContext<S> {
        if (context.length === 0) throw new StorageError("Context must not be an empty string");
        if (context.includes(".")) throw new StorageError("Context must not contain dots!");
        return new StorageContext(this.storage, [...this.thisContexts, context]);
    }

    keys() {
        return this.storage.keys(this.thisContexts) as S extends SyncStorage ? string[] : MaybePromise<string[]>;
    }

    contexts() {
        return this.storage.contexts(this.thisContexts) as S extends SyncStorage ? string[] : PromiseLike<string[]>;
    }

    /** Clears all keys in this context */
    clear() {
        const keys = this.keys();
        if (MaybePromise.is(keys)) {
            return keys.then(keys => {
                return Promise.all(keys.map(key => this.delete(key))).then(() => Promise.resolve());
            }) as S extends SyncStorage ? void : Promise<void>;
        }
        const promises = new Array<PromiseLike<void>>();
        keys.forEach(key => {
            const promise = this.delete(key);
            if (promise !== undefined && MaybePromise.is(promise)) {
                promises.push(promise);
            }
        });
        if (promises.length > 0) {
            return Promise.all(promises).then(() => Promise.resolve()) as S extends SyncStorage ? void : Promise<void>;
        }
        return undefined as S extends SyncStorage ? void : Promise<void>;
    }

    /** Clears all keys in this context and all created sub-contexts. */
    clearAll() {
        return this.storage.clearAll(this.thisContexts) as S extends SyncStorage ? void : MaybePromise<void>;
    }
}
