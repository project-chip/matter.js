/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Storage, fromJson, SupportedStorageTypes, toJson } from "@project-chip/matter.js/storage";

import { LocalStorage } from "node-localstorage";

export class StorageBackendDisk implements Storage {
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
        return context + "." + key;
    }

    get<T extends SupportedStorageTypes>(context: string, key: string): T | undefined {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        const value = this.localStorage.getItem(this.buildStorageKey(context, key));
        if (value === null) return undefined;
        return fromJson(value) as T
    }

    set<T extends SupportedStorageTypes>(context: string, key: string, value: T): void {
        if (!context.length || !key.length) throw new Error("Context and key must not be empty strings!");
        this.localStorage.setItem(this.buildStorageKey(context, key), toJson(value));
    }
}
