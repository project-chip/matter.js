/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage } from "./Storage";

export class StorageInMemory implements Storage {
    constructor(
        protected store: any = {}
    ) { }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    get(context: string, key: string): string | undefined {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        return this.store[context]?.[key];
    }

    set(context: string, key: string, value: string): void {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        let contextStore = this.store[context];
        if (contextStore === undefined) {
            contextStore = {};
            this.store[context] = contextStore;
        }
        contextStore[key] = value;
    }
}
