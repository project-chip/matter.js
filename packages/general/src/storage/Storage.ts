/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ImplementationError, MatterError } from "../MatterError.js";
import { MaybePromise } from "../util/Promises.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageError extends MatterError {}

/**
 * Matter.js uses this key/value API to manage persistent state.
 */
export interface Storage {
    readonly initialized: boolean;
    initialize(): MaybePromise<void>;
    close(): MaybePromise<void>;
    get(contexts: string[], key: string): MaybePromise<SupportedStorageTypes | undefined>;
    set(contexts: string[], values: Record<string, SupportedStorageTypes>): MaybePromise<void>;
    set(contexts: string[], key: string, value: SupportedStorageTypes): MaybePromise<void>;
    delete(contexts: string[], key: string): MaybePromise<void>;
    keys(contexts: string[]): MaybePromise<string[]>;
    values(contexts: string[]): MaybePromise<Record<string, SupportedStorageTypes>>;
    contexts(contexts: string[]): MaybePromise<string[]>;
    clearAll(contexts: string[]): MaybePromise<void>;
}

/**
 * Extended interface for storage that supports snapshotting.
 */
export interface CloneableStorage {
    clone(): MaybePromise<Storage>;
}

export namespace CloneableStorage {
    export function is<T extends {}>(storage: T): storage is T & CloneableStorage {
        return "clone" in storage && typeof storage.clone === "function";
    }

    export function assert<T extends {}>(storage: T): asserts storage is T & CloneableStorage {
        if (!is(storage)) {
            throw new ImplementationError("Storage does not support required snapshotting function");
        }
    }
}

// This extra class is needed because of https://github.com/microsoft/TypeScript/issues/57905 in order
// to have the generics typing support on the "get" method and can be removed when the TS issue is fixed
// or we remove the legacy API.
export abstract class MaybeAsyncStorage implements Storage {
    abstract initialized: boolean;
    abstract initialize(): MaybePromise<void>;
    abstract close(): MaybePromise<void>;
    abstract get<T extends SupportedStorageTypes>(contexts: string[], key: string): MaybePromise<T | undefined>;
    abstract set(contexts: string[], values: Record<string, SupportedStorageTypes>): MaybePromise<void>;
    abstract set(contexts: string[], key: string, value: SupportedStorageTypes): MaybePromise<void>;
    abstract delete(contexts: string[], key: string): MaybePromise<void>;
    abstract keys(contexts: string[]): MaybePromise<string[]>;
    abstract values(contexts: string[]): MaybePromise<Record<string, SupportedStorageTypes>>;
    abstract contexts(contexts: string[]): MaybePromise<string[]>;
    abstract clearAll(contexts: string[]): MaybePromise<void>;
}

// This can be removed once we remove the legacy API
export abstract class SyncStorage implements Storage {
    abstract initialized: boolean;
    abstract initialize(): MaybePromise<void>;
    abstract close(): MaybePromise<void>;
    abstract get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined;
    abstract set(contexts: string[], values: Record<string, SupportedStorageTypes>): void;
    abstract set(contexts: string[], key: string, value: SupportedStorageTypes): void;
    abstract delete(contexts: string[], key: string): void;
    abstract keys(contexts: string[]): string[];
    abstract values(contexts: string[]): Record<string, SupportedStorageTypes>;
    abstract contexts(contexts: string[]): string[];
    abstract clearAll(contexts: string[]): void;
}

export type StorageOperationResult<S extends Storage, T = void> = S extends SyncStorage ? T : Promise<T>;
