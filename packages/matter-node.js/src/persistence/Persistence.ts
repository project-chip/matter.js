/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { Storage } from "./Storage";

export class Persistence {
    constructor(
        private readonly storage: Storage,
        private readonly context: string
    ) { }

    get(key: string, defaultValue?: string): string {
        const value = this.storage.get(this.context, key);
        if (value !== undefined) return value;
        if (defaultValue === undefined) {
            throw new Error(`No value found for key ${key} in context ${this.context} and no default value specified!`);
        }
        return defaultValue;
    }

    has(key: string): boolean {
        return this.storage.get(this.context, key) !== undefined;
    }

    set(key: string, value: string): void {
        this.storage.set(this.context, key, value);
    }
}
