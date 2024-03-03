/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

    private readonly commitTimer = Time.getTimer("Storage commit", StorageBackendJsonFile.commitDelay, () =>
        this.commit(),
    );
    private closed = false;
    private resolveCommitted?: () => void;

    constructor(private readonly path: string) {
        super();
    }

    static override async create(path: string) {
        const storage = new this(path);
        await storage.initialize();
        return storage;
    }

    override async initialize() {
        if (this.initialized) throw new StorageError("Storage already initialized!");
        await super.initialize();
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

    private triggerCommit() {
        if (!this.commitTimer.isRunning) {
            this.committed = new Promise(resolve => {
                this.resolveCommitted = resolve;
            });
            this.commitTimer.start();
        }
    }

    override set<T extends SupportedStorageTypes>(contexts: string[], key: string, value: T): void {
        super.set(contexts, key, value);
        this.triggerCommit();
    }

    override delete(contexts: string[], key: string): void {
        super.delete(contexts, key);
        this.triggerCommit();
    }

    override clear(): void {
        super.clear();
        this.triggerCommit();
    }

    private async commit() {
        if (!this.initialized || this.closed) return;
        if (this.commitTimer.isRunning) {
            this.commitTimer.stop();
        }
        try {
            await writeFile(this.path, this.toJson(this.store), "utf-8");
        } finally {
            if (this.resolveCommitted !== undefined) {
                this.resolveCommitted?.();
            }
        }
    }

    override async close() {
        this.commitTimer.stop();
        await this.commit();
        this.closed = true;
        this.initialized = false;
    }

    private toJson(object: any): string {
        return toJson(object, 1);
    }

    private fromJson(json: string): any {
        return fromJson(json);
    }
}
