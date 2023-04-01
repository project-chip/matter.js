/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { Storage } from "./Storage";
import { fromJson, SupportedStorageTypes, toJson } from "./JsonConverter";

export class Persistence {
    constructor(
        private readonly storage: Storage,
        private readonly context: string
    ) { }

    get<T extends SupportedStorageTypes>(key: string, defaultValue?: T): T {
        const value = this.storage.get(this.context, key);
        if (value !== undefined) return fromJson(value) as T;
        if (defaultValue === undefined) {
            throw new Error(`No value found for key ${key} in context ${this.context} and no default value specified!`);
        }
        return defaultValue;
    }

    has(key: string): boolean {
        return this.storage.get(this.context, key) !== undefined;
    }

    set<T extends SupportedStorageTypes>(key: string, value: T): void {
        this.storage.set(this.context, key, toJson(value));
    }
}
