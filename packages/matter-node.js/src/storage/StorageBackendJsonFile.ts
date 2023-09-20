/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    fromJson,
    StorageBackendMemory,
    StorageError,
    SupportedStorageTypes,
    toJson,
} from "@project-chip/matter.js/storage";
import { Time } from "@project-chip/matter.js/time";
import { readFile, writeFile } from "fs/promises";

export class StorageBackendJsonFile extends StorageBackendMemory {
    /** We store changes after a value was set to the storage, but not more often than this setting (in ms). */
    static commitDelay = 1000;
    committed = Promise.resolve();

    private readonly commitTimer = Time.getTimer(StorageBackendJsonFile.commitDelay, () => this.commit());
    private waitForCommit = false; // TODO: replace by commitTimer.isRunning() method (needs to be added)
    private closed = false;
    private initialized = false;
    private resolveCommitted?: () => void;

    constructor(private readonly path: string) {
        super();
    }

    override async initialize() {
        if (this.initialized) throw new StorageError("Storage already initialized!");
        try {
            this.store = this.fromJson(await readFile(this.path, "utf-8"));
        } catch (error: any) {
            // We accept that the file does not exist yet to initialize with an empty store.
            if (error.code !== "ENOENT") {
                throw error;
            }
        }
        this.initialized = true;
    }

    override set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        super.set(contexts, key, value);
        if (!this.waitForCommit) {
            this.committed = new Promise(resolve => {
                this.resolveCommitted = resolve;
            });
            this.waitForCommit = true;
            this.commitTimer.start();
        }
    }

    override delete(contexts: string[], key: string): void {
        super.delete(contexts, key);
        if (!this.waitForCommit) {
            this.waitForCommit = true;
            this.commitTimer.start();
        }
    }

    private async commit() {
        if (!this.initialized || this.closed) return;
        this.waitForCommit = false;
        try {
            await writeFile(this.path, this.toJson(this.store), "utf-8");
        } finally {
            if (!this.waitForCommit) {
                this.resolveCommitted?.();
            }
        }
    }

    override async close() {
        this.commitTimer.stop();
        await this.commit();
        this.closed = true;
    }

    private toJson(object: any): string {
        return toJson(object, 1);
    }

    private fromJson(json: string): any {
        return fromJson(json);
    }
}
