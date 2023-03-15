/**
* @license
* Copyright 2022 The node-matter Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { Storage } from "./Storage";

export class Persistence {
    constructor(
        private readonly storage: Storage,
        private readonly context: string
    ) {}

    get<T>(key: string, defaultValue?: T): T {
        const value = this.storage.get<T>(this.context, key);
        if (value !== undefined) return value;
        if (defaultValue === undefined) {
            throw new Error(`No value found for key ${key} in context ${this.context} and not default value specified!`);
        }
        return defaultValue;
    }

    has(key: string): boolean {
        return this.storage.get(this.context, key) !== undefined;
    }

    getAll(): { key: string, value: any}[] {
        return this.storage.getAll(this.context);
    }

    set<T>(key: string, value: T): void {
        this.storage.set(this.context, key, value);
    }
}
