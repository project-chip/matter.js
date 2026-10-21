/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageError } from "../StorageDriver.js";
import { type SupportedStorageTypes, fromJson, toJson } from "../StringifyTools.js";
import type { StoreData, WalCommitId } from "./WalCommit.js";

/**
 * The WAL storage state as of a specific commit.  `WalSnapshotStore` writes and reads it as a file.
 */
export class WalSnapshot {
    readonly commitId: WalCommitId;
    readonly ts: number;
    readonly data: StoreData;

    /**
     * Commit of the snapshot this one replaced, which the store keeps as the backup.
     */
    readonly previousCommitId?: WalCommitId;

    constructor(commitId: WalCommitId, ts: number, data: StoreData, previousCommitId?: WalCommitId) {
        this.commitId = commitId;
        this.ts = ts;
        this.data = data;
        this.previousCommitId = previousCommitId;
    }

    /**
     * Serialize to JSON.  Runs synchronously, so the caller may change {@link data} right after it returns.
     */
    serialize(): string {
        const snapshot: SupportedStorageTypes = {
            commitId: this.commitId,
            ts: this.ts,
            data: this.data,
            ...(this.previousCommitId ? { previousCommitId: this.previousCommitId } : {}),
        };
        return toJson(snapshot, 2);
    }

    /**
     * Parse the JSON {@link serialize} writes.  Throws a {@link StorageError} naming {@link source} if the text is not
     * JSON or does not have the snapshot structure.
     */
    static parse(text: string, source: string): WalSnapshot {
        let parsed: unknown;
        try {
            parsed = fromJson(text);
        } catch (cause) {
            throw new StorageError(`Snapshot ${source} is unreadable`, { cause });
        }
        if (!isPlainRecord(parsed)) {
            throw new StorageError(`Snapshot ${source} is not an object`);
        }
        const { commitId, ts, data, previousCommitId } = parsed;
        if (!isCommitId(commitId)) {
            throw new StorageError(`Snapshot ${source} has no valid commitId`);
        }
        if (!isStoreData(data)) {
            throw new StorageError(`Snapshot ${source} data is not an object of contexts`);
        }
        if (previousCommitId !== undefined && !isCommitId(previousCommitId)) {
            throw new StorageError(`Snapshot ${source} has an invalid previousCommitId`);
        }
        return new WalSnapshot(commitId, typeof ts === "number" ? ts : 0, data, previousCommitId);
    }
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function isStoreData(value: unknown): value is StoreData {
    return isPlainRecord(value) && Object.values(value).every(isPlainRecord);
}

function isCommitId(value: unknown): value is WalCommitId {
    return isPlainRecord(value) && typeof value.segment === "number" && typeof value.offset === "number";
}
