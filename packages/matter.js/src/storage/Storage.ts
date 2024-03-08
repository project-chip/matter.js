/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError } from "../common/MatterError.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageError extends MatterError {}

/**
 * Matter.js uses this key/value API to manage persistent state.
 */
export interface Storage {
    initialize(): Promise<void>;
    close(): Promise<void>;
    get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined;
    set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void;
    delete(contexts: string[], key: string): void;
    keys(contexts: string[]): string[];
    clearAll(contexts: string[]): void;
}
