/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#log/Logger.js";
import type { Directory } from "../../fs/Directory.js";
import type { File } from "../../fs/File.js";
import { Gzip } from "../../util/Gzip.js";
import { StorageError } from "../StorageDriver.js";
import { type SupportedStorageTypes, fromJson, toJson } from "../StringifyTools.js";
import type { StoreData, WalCommitId } from "./WalCommit.js";
import { writeSynced } from "./WalFiles.js";

const logger = Logger.get("WalSnapshot");

const EXTENSIONS = ["json.gz", "json"] as const;

/**
 * The WAL storage state as of a specific commit, persisted as a single file.
 *
 * {@link save} keeps the snapshot it replaces as a backup and {@link restore} falls back to that backup when the
 * current snapshot is missing or unreadable.  Files in the storage directory:
 *
 * | File                 | Content                                                         |
 * |----------------------|-----------------------------------------------------------------|
 * | `snapshot.*`         | Current snapshot; `previousCommitId` names the backup's commit  |
 * | `snapshot.prev.*`    | Backup: the snapshot that `snapshot.*` replaced                 |
 * | `snapshot.corrupt.*` | Unreadable snapshot that `restore()` moved aside for analysis   |
 *
 * The WAL must keep every segment from the backup's commit on, so the backup can be replayed to the current state.
 */
export class WalSnapshot {
    readonly commitId: WalCommitId;
    readonly ts: number;
    readonly data: StoreData;

    /**
     * Commit of the snapshot this one replaced, which {@link save} keeps as the backup.
     */
    readonly previousCommitId?: WalCommitId;

    constructor(commitId: WalCommitId, ts: number, data: StoreData, previousCommitId?: WalCommitId) {
        this.commitId = commitId;
        this.ts = ts;
        this.data = data;
        this.previousCommitId = previousCommitId;
    }

    /**
     * Write this snapshot to disk and keep the snapshot it replaces as the backup.
     *
     * The write is atomic: data goes to a temporary file first and is renamed into place.  With `fsync` (default true)
     * the data is flushed to persistent storage before the rename, so a power loss cannot leave a truncated snapshot.
     *
     * The data is serialized before the first `await`, so the caller may change {@link data} as soon as this returns its
     * promise.
     */
    async save(dir: Directory, options?: { compress?: boolean; basename?: string; fsync?: boolean }): Promise<void> {
        const compress = options?.compress ?? true;
        const basename = options?.basename ?? "snapshot";
        const fsync = options?.fsync ?? true;

        const snapshot = {
            commitId: this.commitId,
            ts: this.ts,
            data: this.data,
            ...(this.previousCommitId ? { previousCommitId: this.previousCommitId } : {}),
        };

        const json = toJson(snapshot as unknown as SupportedStorageTypes, 2);

        const extension = compress ? "json.gz" : "json";
        const content = compress ? Gzip.compress([new TextEncoder().encode(json)]) : [json];

        const tmpFile = dir.file(`${basename}.tmp.${extension}`);
        await writeSynced(tmpFile, content, fsync);

        if (await exists(dir, basename)) {
            await move(dir, basename, `${basename}.prev`);
        }
        await tmpFile.rename(`${basename}.${extension}`);
    }

    /**
     * Load the current snapshot, or the backup if the current snapshot is missing or unreadable.
     *
     * An unreadable current snapshot is moved to `snapshot.corrupt.*`.  Throws if no readable snapshot exists although
     * one was written before.
     *
     * @returns the snapshot and the commit of the backup that stays on disk, or undefined if no snapshot was ever written
     */
    static async restore(dir: Directory): Promise<WalSnapshot.Restored | undefined> {
        let snapshot: WalSnapshot | undefined;
        let failure: unknown;
        try {
            snapshot = await WalSnapshot.load(dir);
        } catch (error) {
            failure = error;
        }

        if (snapshot) {
            if (snapshot.previousCommitId === undefined) {
                // A version without backups wrote this snapshot and may have deleted the WAL any backup needs
                await remove(dir, "snapshot.prev");
            }
            return { snapshot, backupCommitId: snapshot.previousCommitId };
        }

        const backup = await WalSnapshot.load(dir, { basename: "snapshot.prev" });
        if (backup === undefined) {
            if (failure !== undefined) {
                throw failure;
            }
            return undefined;
        }

        if (failure !== undefined) {
            logger.warn(`Snapshot in ${dir.path} unreadable, restoring from the backup snapshot instead:`, failure);
            await move(dir, "snapshot", "snapshot.corrupt");
        } else {
            logger.notice(`Snapshot in ${dir.path} missing, restoring from the backup snapshot`);
        }

        return { snapshot: backup, backupCommitId: backup.commitId };
    }

    /**
     * Load one snapshot file from disk, auto-detecting the format.
     *
     * Throws a {@link StorageError} if the file content cannot be decoded or does not have the snapshot structure.
     */
    static async load(dir: Directory, options?: { basename?: string }): Promise<WalSnapshot | undefined> {
        const basename = options?.basename ?? "snapshot";
        const name = `${dir.path}/${basename}`;

        const gzFile = dir.file(`${basename}.json.gz`);
        const jsonFile = dir.file(`${basename}.json`);

        const gzExists = await gzFile.exists();
        const jsonExists = await jsonFile.exists();

        if (!gzExists && !jsonExists) {
            return undefined;
        }

        let useGz: boolean;
        if (gzExists && jsonExists) {
            const gzMtime = (await gzFile.stat()).mtime;
            const jsonMtime = (await jsonFile.stat()).mtime;
            useGz = gzMtime >= jsonMtime;
        } else {
            useGz = gzExists;
        }

        let parsed: unknown;
        try {
            parsed = fromJson(await readText(useGz ? gzFile : jsonFile, useGz));
        } catch (cause) {
            throw new StorageError(`Snapshot ${name} is unreadable`, { cause });
        }
        if (!isPlainRecord(parsed)) {
            throw new StorageError(`Snapshot ${name} is not an object`);
        }
        const { commitId, ts, data, previousCommitId } = parsed;
        if (!isCommitId(commitId)) {
            throw new StorageError(`Snapshot ${name} has no valid commitId`);
        }
        if (!isStoreData(data)) {
            throw new StorageError(`Snapshot ${name} data is not an object of contexts`);
        }
        if (previousCommitId !== undefined && !isCommitId(previousCommitId)) {
            throw new StorageError(`Snapshot ${name} has an invalid previousCommitId`);
        }

        return new WalSnapshot(commitId, typeof ts === "number" ? ts : 0, data, previousCommitId);
    }
}

export namespace WalSnapshot {
    export interface Restored {
        snapshot: WalSnapshot;

        /**
         * Commit of the backup snapshot on disk.  WAL segments before this commit's segment are safe to delete.
         * Undefined when no backup exists, so no segment is safe to delete.
         */
        backupCommitId?: WalCommitId;
    }
}

async function exists(dir: Directory, basename: string) {
    for (const extension of EXTENSIONS) {
        if (await dir.file(`${basename}.${extension}`).exists()) {
            return true;
        }
    }
    return false;
}

async function readText(file: File, gzipped: boolean) {
    if (!gzipped) {
        return file.readAllText();
    }
    const chunks = Array<Uint8Array>();
    for await (const chunk of Gzip.decompress(file.readBytes())) {
        chunks.push(chunk);
    }
    const combined = new Uint8Array(chunks.reduce((sum, c) => sum + c.length, 0));
    let offset = 0;
    for (const chunk of chunks) {
        combined.set(chunk, offset);
        offset += chunk.length;
    }
    return new TextDecoder().decode(combined);
}

async function remove(dir: Directory, basename: string) {
    for (const extension of EXTENSIONS) {
        await dir.file(`${basename}.${extension}`).delete();
    }
}

/**
 * Move all format variants of a snapshot so that the target holds exactly what the source held.
 */
async function move(dir: Directory, from: string, to: string) {
    for (const extension of EXTENSIONS) {
        const source = dir.file(`${from}.${extension}`);
        if (await source.exists()) {
            await source.rename(`${to}.${extension}`);
        } else {
            await dir.file(`${to}.${extension}`).delete();
        }
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
