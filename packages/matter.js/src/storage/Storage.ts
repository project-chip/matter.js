/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { SupportedStorageTypes } from "./StringifyTools.js";

export abstract class Storage {
    abstract initialize(): Promise<void>;
    abstract close(): Promise<void>;
    abstract get<T extends SupportedStorageTypes>(context: string, key: string): T | undefined;
    abstract set<T extends SupportedStorageTypes>(context: string, key: string, value: T): void;
}
