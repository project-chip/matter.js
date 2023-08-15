/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterError } from "../common/MatterError.js";
import { SupportedStorageTypes } from "./StringifyTools.js";

export class StorageError extends MatterError {}

export abstract class Storage {
    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get<T extends SupportedStorageTypes>(contexts: string[], key: string): T | undefined;
    abstract set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void;
    abstract delete(contexts: string[], key: string): void;
}
