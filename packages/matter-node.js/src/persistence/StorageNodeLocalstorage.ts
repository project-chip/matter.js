/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalStorage } from "node-localstorage";
import { Storage } from "./Storage";

export class StorageNodeLocalstorage implements Storage {
    private readonly localStorage;

    constructor(
        path: string,
    ) {
        this.localStorage = new LocalStorage(path);
    }

    async initialize() {
        // nothing to do
    }

    async close() {
        // nothing to do
    }

    buildStorageKey(context: string, key: string): string {
        return context + "---" + key;
    }

    get(context: string, key: string): string | undefined {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        const value = this.localStorage.getItem(this.buildStorageKey(context, key));
        if (value === null) return undefined;
        return value;
    }

    set(context: string, key: string, value: string): void {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        this.localStorage.setItem(this.buildStorageKey(context, key), value);
    }
}
