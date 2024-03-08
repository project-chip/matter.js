/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { fromJson, StorageBackendMemory, SupportedStorageTypes, toJson } from "@project-chip/matter.js/storage";
import { readFileSync, writeFileSync } from "fs";

export class StorageBackendSyncJsonFile extends StorageBackendMemory {
    /** We store changes after a value was set to the storage, but not more often than this setting (in ms). */
    private closed = false;

    constructor(private readonly path: string) {
        super();
    }

    override async initialize() {
        await super.initialize();
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

    override set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        super.set(contexts, key, value);
        this.commit();
    }

    override delete(contexts: string[], key: string): void {
        super.delete(contexts, key);
        this.commit();
    }

    override clear(): void {
        super.clear();
        this.commit();
    }

    private commit() {
        if (!this.initialized || this.closed) return;
        const json = this.toJson(this.store);
        writeFileSync(this.path, json, "utf-8");
    }

    override async close() {
        this.commit();
        this.closed = true;
        await super.close();
    }

    private toJson(object: any): string {
        return toJson(object, 1);
    }

    private fromJson(json: string): any {
        return fromJson(json);
    }
}
