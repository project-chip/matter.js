/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError } from "../common/MatterError.js";
import { MaybePromise } from "../util/Promises.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageError extends MatterError {}

/**
 * Matter.js uses this key/value API to manage persistent state.
 */
export interface Storage {
    initialize(): MaybePromise<void>;
    close(): MaybePromise<void>;
    get<T extends SupportedStorageTypes>(contexts: string[], key: string): MaybePromise<T | undefined>;
    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): MaybePromise<void>;
    delete(contexts: string[], key: string): MaybePromise<void>;
    keys(contexts: string[]): MaybePromise<string[]>;
    clearAll(contexts: string[]): MaybePromise<void>;
}
