/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "@project-chip/matter.js/time";
import { StorageBackendMemory, fromJson, SupportedStorageTypes, toJson } from "@project-chip/matter.js/storage";
import { readFile, writeFile } from "fs/promises";

/** We store changes 1s after a value was set to the storage, but not more often than every 1s. */
const COMMIT_DELAY = 1000 /* 1s */;

export class StorageBackendJsonFile extends StorageBackendMemory {
    private readonly commitTimer = Time.getTimer(COMMIT_DELAY, () => this.commit());
    private waitForCommit = false; // TODO: replace by commitTimer.isRunning() method (needs to be added)
    private closed = false;
    private initialized = false;

    constructor(
        private readonly path: string,
    ) {
        super();
    }

    override async initialize() {
        if (this.initialized) throw new Error("Storage already initialized!");
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

    override set<T extends SupportedStorageTypes>(context: string, key: string, value: T): void {
        super.set(context, key, value);
        if (!this.waitForCommit) {
            this.waitForCommit = true;
            this.commitTimer.start();
        }
    }

    private async commit() {
        if (!this.initialized || this.closed) return;
        this.waitForCommit = false;
        await writeFile(this.path, this.toJson(this.store), "utf-8");
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
        return fromJson(json)
    }
}
