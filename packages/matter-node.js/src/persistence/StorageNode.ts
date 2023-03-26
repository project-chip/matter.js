/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "../time/Time";
import { readFile, writeFile } from "fs/promises";
import { StorageInMemory } from "./StorageInMemory";
import { fromJson, toJson } from "./JsonConverter";

/** We store changes 1s after a value was set to the storage, but not more often than every 1s. */
const COMMIT_DELAY = 1000 /* 1s */;

export class StorageNode extends StorageInMemory {
    private readonly commitTimer = Time.getTimer(COMMIT_DELAY, () => this.commit());
    private waitForCommit = false; // TODO: replace by commitTimer.isRunning() method (needs to be added)
    private closed = false;

    constructor(
        private readonly path: string,
    ) {
        super();
    }

    override async initialize() {
        if (this.initialized) throw new Error("Storage already initialized!");
        try {
            this.store = fromJson(await readFile(this.path, "utf-8"));
        } catch (error: any) {
            // We accept that the file does not exist yet to initialize with an empty store.
            if (error.code !== "ENOENT") {
                throw error;
            }
        }
        this.initialized = true;
    }

    override set<T>(context: string, key: string, value: T): void {
        super.set(context, key, value);
        if (!this.waitForCommit) {
            this.waitForCommit = true;
            this.commitTimer.start();
        }
    }

    private async commit() {
        if (!this.initialized || this.closed) return;
        this.waitForCommit = false;
        await writeFile(this.path, toJson(this.store), "utf-8");
    }

    override async close() {
        this.commitTimer.stop();
        await this.commit();
        this.closed = true;
    }
}
