/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, StorageBackendMemory, SupportedStorageTypes, toJson } from "@matter/general";
import { readFileSync, writeFileSync } from "node:fs";

export class StorageBackendSyncJsonFile extends StorageBackendMemory {
    /** We store changes after a value was set to the storage, but not more often than this setting (in ms). */
    private closed = false;

    constructor(private readonly path: string) {
        super();
    }

    override initialize() {
        super.initialize();
        try {
            this.store = this.fromJson(readFileSync(this.path, "utf-8"));
        } catch (error: any) {
            // We accept that the file does not exist yet to initialize with an empty store.
            if (error.code !== "ENOENT") {
                throw error;
            }
            console.log("StorageBackendSyncJsonFile: File does not exist yet, initializing with empty store.");
            this.store = {};
        }
    }

    override set(contexts: string[], key: string, value: SupportedStorageTypes): void;
    override set(contexts: string[], values: Record<string, SupportedStorageTypes>): void;
    override set(
        contexts: string[],
        keyOrValues: string | Record<string, SupportedStorageTypes>,
        value?: SupportedStorageTypes,
    ) {
        if (typeof keyOrValues === "string") {
            super.set(contexts, keyOrValues, value);
        } else {
            super.set(contexts, keyOrValues);
        }
        this.commit();
    }

    override delete(contexts: string[], key: string) {
        super.delete(contexts, key);
        this.commit();
    }

    override clear() {
        super.clear();
        this.commit();
    }

    private commit() {
        if (!this.initialized || this.closed) return;
        const json = this.toJson(this.store);
        writeFileSync(this.path, json, "utf-8");
    }

    override close() {
        this.commit();
        this.closed = true;
        return super.close();
    }

    private toJson(object: any) {
        return toJson(object, 1);
    }

    private fromJson(json: string): any {
        return fromJson(json);
    }
}
