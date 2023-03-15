/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time } from "../time/Time";
import { readFile, writeFile } from "fs/promises";
import { StorageInMemory } from "./StorageInMemory";

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

    async initialize() {
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

    set<T>(context: string, key: string, value: T): void {
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

    async close() {
        this.commitTimer.stop();
        await this.commit();
        this.closed = true;
    }

    private toJson(object: any): string {
        return JSON.stringify(object, (_key, value) => {
            if (typeof value === 'bigint') {
                return `{"__object__":"BigInt","__value__":"${value.toString()}"}`;
            }
            if (typeof value === 'object' && value.type === 'Buffer' && Array.isArray(value.data)) {
                return `{"__object__":"Buffer","__value__":"${Buffer.from(value.data).toString('base64')}"}`;
            }
            if (value instanceof Uint8Array) {
                return `{"__object__":"Uint8Array","__value__":"${Buffer.from(value).toString('base64')}"}`;
            }
            return value;
        }, " ");
    }

    private fromJson(json: string): any {
        return JSON.parse(json, (_key, value) => {
            if (typeof value === "string" && value.startsWith('{"__object__":"') && value.endsWith('"}')) {
                const data = JSON.parse(value);
                const object = data.__object__;
                switch (object) {
                    case "BigInt":
                        return BigInt(data.__value__);
                    case "Buffer":
                        return Buffer.from(data.__value__, 'base64');
                    case "Uint8Array":
                        return new Uint8Array(Buffer.from(data.__value__, 'base64'));
                    default:
                        throw new Error(`Unknown object type: ${object}`);
                }
            }
            return value;
        });
    }
}
