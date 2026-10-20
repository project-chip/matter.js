/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Directory } from "#fs/Directory.js";
import { MockFilesystem } from "#fs/MockFilesystem.js";
import { StorageError } from "#storage/StorageDriver.js";
import {
    compressedSegmentFilename,
    parseSegmentFilename,
    segmentFilename,
    serializeCommit,
    type WalCommit,
} from "#storage/wal/WalCommit.js";
import { WalSnapshot } from "#storage/wal/WalSnapshot.js";
import { WalStorageDriver } from "#storage/wal/WalStorageDriver.js";
import { Time } from "#time/Time.js";
import { Seconds } from "#time/TimeUnit.js";

describe("WalStorageDriver", () => {
    before(() => MockTime.enable());

    let fs: MockFilesystem;

    beforeEach(() => {
        fs = new MockFilesystem();
    });

    async function deleteSnapshots(storageDir: Directory) {
        for (const name of ["snapshot.json", "snapshot.json.gz", "snapshot.prev.json", "snapshot.prev.json.gz"]) {
            await storageDir.file(name).delete();
        }
    }

    async function deleteWal(storageDir: Directory) {
        for await (const entry of storageDir.directory("wal").entries()) {
            await entry.delete();
        }
    }

    async function createStorage(options?: WalStorageDriver.Options) {
        const storageDir = fs.directory("storage");
        const storage = new WalStorageDriver(undefined, {
            storageDir,
            fsync: false,
            snapshotInterval: Seconds(600),
            ...options,
        });
        await storage.initialize();
        return storage;
    }

    it("initializes and closes cleanly", async () => {
        const storage = await createStorage();
        expect(storage.initialized).equal(true);
        await storage.close();
        expect(storage.initialized).equal(false);
    });

    it("writes and reads a value", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], "key", "value");
        expect(await storage.get(["ctx"], "key")).equal("value");
        await storage.close();
    });

    it("writes multiple values at once", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], { key1: "a", key2: "b" });
        expect(await storage.get(["ctx"], "key1")).equal("a");
        expect(await storage.get(["ctx"], "key2")).equal("b");
        await storage.close();
    });

    it("deletes a value", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], "key", "value");
        await storage.delete(["ctx"], "key");
        expect(await storage.get(["ctx"], "key")).equal(undefined);
        await storage.close();
    });

    it("clears all values in a context", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], { a: 1, b: 2 });
        await storage.clearAll(["ctx"]);
        expect(await storage.keys(["ctx"])).deep.equal([]);
        await storage.close();
    });

    it("returns keys for a context", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], { a: 1, b: 2, c: 3 });
        const keys = await storage.keys(["ctx"]);
        expect(keys.sort()).deep.equal(["a", "b", "c"]);
        await storage.close();
    });

    it("returns values for a context", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], { a: 1, b: 2 });
        const values = await storage.values(["ctx"]);
        expect(values).deep.equal({ a: 1, b: 2 });
        await storage.close();
    });

    it("returns sub-contexts", async () => {
        const storage = await createStorage();
        await storage.set(["root", "child1"], "key", "v1");
        await storage.set(["root", "child2"], "key", "v2");
        const contexts = await storage.contexts(["root"]);
        expect(contexts.sort()).deep.equal(["child1", "child2"]);
        await storage.close();
    });

    it("can be closed twice", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], "key", "value");
        await storage.close();
        await storage.close();

        await expect(storage.get(["ctx"], "key")).rejectedWith(StorageError, "not initialized");
    });

    it("clones the current state into an independent storage", async () => {
        const storage = await createStorage();
        await storage.set(["ctx"], "key", "value");

        const clone = await storage.clone();
        await storage.set(["ctx"], "key", "changed");

        expect(await clone.get(["ctx"], "key")).equal("value");
        await clone.close();
        await storage.close();
    });

    it("can close and reinitialize", async () => {
        const storageDir = fs.directory("storage");
        const storage = new WalStorageDriver(undefined, {
            storageDir,
            fsync: false,
            snapshotInterval: Seconds(600),
        });
        await storage.initialize();
        await storage.set(["ctx"], "key", "value1");
        await storage.close();

        // Reinitialize the same instance
        await storage.initialize();
        expect(await storage.get(["ctx"], "key")).equal("value1");

        // Should still be writable
        await storage.set(["ctx"], "key", "value2");
        expect(await storage.get(["ctx"], "key")).equal("value2");
        await storage.close();
    });

    it("allows root-level keys with empty context", async () => {
        const storage = await createStorage();
        await storage.set([], "key", "value");
        expect(await storage.get([], "key")).equal("value");
        expect(await storage.keys([])).deep.equal(["key"]);
        await storage.delete([], "key");
        expect(await storage.keys([])).deep.equal([]);
        await storage.close();
    });

    it("root-level keys coexist with context keys", async () => {
        const storage = await createStorage();

        await storage.set([], "rootKey", "rootValue");
        await storage.set([], { rootA: "a", rootB: "b" });
        await storage.set(["ctx"], "ctxKey", "ctxValue");
        await storage.set(["ctx", "sub"], "subKey", "subValue");

        // Root-level keys are isolated
        expect((await storage.keys([])).sort()).deep.equal(["rootA", "rootB", "rootKey"]);
        expect(await storage.get([], "rootKey")).equal("rootValue");
        expect(await storage.values([])).deep.equal({ rootKey: "rootValue", rootA: "a", rootB: "b" });

        // Context keys are unaffected
        expect(await storage.keys(["ctx"])).deep.equal(["ctxKey"]);
        expect(await storage.get(["ctx"], "ctxKey")).equal("ctxValue");

        // contexts([]) still returns top-level contexts
        expect(await storage.contexts([])).deep.members(["ctx"]);

        // Delete root key doesn't affect context keys
        await storage.delete([], "rootKey");
        expect((await storage.keys([])).sort()).deep.equal(["rootA", "rootB"]);
        expect(await storage.keys(["ctx"])).deep.equal(["ctxKey"]);

        await storage.close();
    });

    it("root-level keys persist across restart", async () => {
        const storageDir = fs.directory("storage");
        const opts: WalStorageDriver.Options = {
            storageDir,
            fsync: false,
            snapshotInterval: Seconds(600),
        };

        const storage = new WalStorageDriver(undefined, opts);
        await storage.initialize();
        await storage.set([], "rootKey", "persisted");
        await storage.set(["ctx"], "ctxKey", "alsoHere");
        await storage.close();

        const storage2 = new WalStorageDriver(undefined, opts);
        await storage2.initialize();
        expect(await storage2.get([], "rootKey")).equal("persisted");
        expect(await storage2.get(["ctx"], "ctxKey")).equal("alsoHere");
        expect(await storage2.keys([])).deep.equal(["rootKey"]);
        await storage2.close();
    });

    it("supports nested contexts", async () => {
        const storage = await createStorage();
        await storage.set(["a", "b", "c"], "key", "deep");
        expect(await storage.get(["a", "b", "c"], "key")).equal("deep");
        await storage.close();
    });

    it("handles concurrent writes without data loss", async () => {
        const storageDir = fs.directory("storage");
        const storage = new WalStorageDriver(undefined, {
            storageDir,
            fsync: false,
            snapshotInterval: Seconds(600),
        });
        await storage.initialize();

        // Fire 20 concurrent set() calls to different keys
        const count = 20;
        await Promise.all(Array.from({ length: count }, (_, i) => storage.set(["ctx"], `key${i}`, `value${i}`)));
        await storage.close();

        // Reopen and verify every write landed
        const storage2 = new WalStorageDriver(undefined, {
            storageDir,
            fsync: false,
            snapshotInterval: Seconds(600),
        });
        await storage2.initialize();

        for (let i = 0; i < count; i++) {
            expect(await storage2.get(["ctx"], `key${i}`)).equal(`value${i}`);
        }
        await storage2.close();
    });

    describe("transactions", () => {
        it("buffers writes until commit", async () => {
            const storage = await createStorage();
            await storage.set(["ctx"], "existing", "original");

            await using tx = await storage.begin();
            await tx.set(["ctx"], "key", "buffered");

            // Not visible in storage yet
            expect(await storage.get(["ctx"], "key")).equal(undefined);

            // Visible through transaction
            expect(await tx.get(["ctx"], "key")).equal("buffered");

            await tx.commit();

            // Now visible in storage
            expect(await storage.get(["ctx"], "key")).equal("buffered");
            await storage.close();
        });

        it("rolls back on dispose without commit", async () => {
            const storage = await createStorage();
            {
                await using tx = await storage.begin();
                await tx.set(["ctx"], "key", "should-not-persist");
            }
            expect(await storage.get(["ctx"], "key")).equal(undefined);
            await storage.close();
        });

        it("transaction reads overlay buffered writes", async () => {
            const storage = await createStorage();
            await storage.set(["ctx"], { a: 1, b: 2 });

            await using tx = await storage.begin();
            await tx.set(["ctx"], "a", 10);
            await tx.delete(["ctx"], "b");

            expect(await tx.get(["ctx"], "a")).equal(10);
            expect(await tx.get(["ctx"], "b")).equal(undefined);

            await tx.commit();
            expect(await storage.get(["ctx"], "a")).equal(10);
            expect(await storage.get(["ctx"], "b")).equal(undefined);
            await storage.close();
        });
    });

    describe("crash recovery", () => {
        it("recovers from WAL on restart (no snapshot)", async () => {
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "persisted");
            await storage.close();

            // Reopen — should replay WAL
            const storage2 = await createStorage();
            expect(await storage2.get(["ctx"], "key")).equal("persisted");
            await storage2.close();
        });

        it("recovers from snapshot + WAL on restart", async () => {
            const storageDir = fs.directory("storage");
            const storage = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage.initialize();

            await storage.set(["ctx"], "key1", "from-wal-1");
            await storage.set(["ctx"], "key2", "from-wal-2");
            await storage.close(); // close triggers snapshot

            // Write more data after snapshot
            const storage2 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage2.initialize();
            await storage2.set(["ctx"], "key3", "from-wal-3");
            await storage2.close();

            // Reopen — should load snapshot + replay remaining WAL
            const storage3 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage3.initialize();
            expect(await storage3.get(["ctx"], "key1")).equal("from-wal-1");
            expect(await storage3.get(["ctx"], "key2")).equal("from-wal-2");
            expect(await storage3.get(["ctx"], "key3")).equal("from-wal-3");
            await storage3.close();
        });

        it("recovers from compressed snapshot + WAL on restart", async () => {
            const storageDir = fs.directory("storage");
            const storage = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                compressSnapshot: true,
                snapshotInterval: Seconds(600),
            });
            await storage.initialize();

            await storage.set(["ctx"], "key1", "from-wal-1");
            await storage.set(["ctx"], "key2", "from-wal-2");
            await storage.close(); // close triggers compressed snapshot

            // Verify compressed snapshot was written
            expect(await storageDir.file("snapshot.json.gz").exists()).equal(true);
            expect(await storageDir.file("snapshot.json").exists()).equal(false);

            // Write more data after snapshot
            const storage2 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                compressSnapshot: true,
                snapshotInterval: Seconds(600),
            });
            await storage2.initialize();
            await storage2.set(["ctx"], "key3", "from-wal-3");
            await storage2.close();

            // Reopen — should load compressed snapshot + replay remaining WAL
            const storage3 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                compressSnapshot: true,
                snapshotInterval: Seconds(600),
            });
            await storage3.initialize();
            expect(await storage3.get(["ctx"], "key1")).equal("from-wal-1");
            expect(await storage3.get(["ctx"], "key2")).equal("from-wal-2");
            expect(await storage3.get(["ctx"], "key3")).equal("from-wal-3");
            await storage3.close();
        });

        it("handles truncated WAL lines", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            const walDir = storageDir.directory("wal");
            await walDir.mkdir();

            // Write valid commit followed by truncated line
            const commit: WalCommit = { ts: 1000, ops: [{ op: "upd", key: "ctx", values: { key: "value" } }] };
            const content = serializeCommit(commit) + "\n" + '{"truncated\n';
            await walDir.file(segmentFilename(1)).write(content);

            const storage = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage.initialize();

            // Should have recovered the valid commit
            expect(await storage.get(["ctx"], "key")).equal("value");
            await storage.close();
        });
    });

    describe("load", () => {
        it("reads its own writes", async () => {
            const storage = await createStorage();

            await storage.set(["ctx"], "key", "v1");
            expect(await storage.get(["ctx"], "key")).equal("v1");

            await storage.set(["ctx"], "key", "v2");
            expect(await storage.get(["ctx"], "key")).equal("v2");

            await storage.close();
        });

        it("loads the stored state during initialize", async () => {
            const storageDir = fs.directory("storage");

            const storage1 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage1.initialize();
            await storage1.set(["ctx"], "key", "value");
            await storage1.close();

            const storage2 = new WalStorageDriver(undefined, {
                storageDir,
                fsync: false,
                snapshotInterval: Seconds(600),
            });
            await storage2.initialize();
            await storageDir.delete();
            expect(await storageDir.exists()).equal(false);

            expect(await storage2.get(["ctx"], "key")).equal("value");
            await storage2.close();
        });

        it("restores from the snapshot alone", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "value");
            await storage.close();
            await deleteWal(storageDir);

            const reopened = await createStorage();
            expect(await reopened.get(["ctx"], "key")).equal("value");
            await reopened.close();
        });

        it("restores from the WAL alone and snapshots it again", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "value");
            await storage.close();
            await deleteSnapshots(storageDir);

            const reopened = await createStorage();
            expect(await reopened.get(["ctx"], "key")).equal("value");
            await reopened.close();

            const snapshot = await WalSnapshot.load(storageDir);
            expect(snapshot!.data.ctx.key).equal("value");
        });

        it("can be closed after a failed initialize", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "value");
            await storage.close();
            await storageDir.file("snapshot.json.gz").write("not gzip");

            const failed = new WalStorageDriver(undefined, { storageDir, fsync: false });
            await expect(failed.initialize()).rejectedWith(StorageError);
            await failed.close();
            expect(failed.initialized).equal(false);
        });
    });

    describe("cleanup", () => {
        async function segmentNumbers() {
            const segments = new Array<number>();
            for await (const entry of fs.directory("storage").directory("wal").entries()) {
                const segment = parseSegmentFilename(entry.name);
                if (segment !== undefined) {
                    segments.push(segment);
                }
            }
            return segments.sort((a, b) => a - b);
        }

        async function waitUntil(condition: () => Promise<boolean>) {
            await MockTime.resolve(
                (async () => {
                    while (!(await condition())) {
                        await Time.sleep("wal maintenance", Seconds(10));
                    }
                })(),
                { macrotasks: true, stepMs: 1000 },
            );
        }

        it("periodically deletes segments before the backup snapshot", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage({ maxSegmentSize: 50 });
            await storage.set(["ctx"], "key1", "value1");
            await storage.set(["ctx"], "key2", "value2");
            await storage.set(["ctx"], "key3", "value3");
            const firstSnapshotSegment = Math.max(...(await segmentNumbers()));

            await waitUntil(() => storageDir.file("snapshot.json.gz").exists());
            expect((await segmentNumbers())[0]).equal(1);

            await storage.set(["ctx"], "key4", "value4");
            await waitUntil(async () => (await segmentNumbers())[0] !== 1);

            expect((await segmentNumbers())[0]).equal(firstSnapshotSegment);
            expect(await storage.get(["ctx"], "key1")).equal("value1");
            await storage.close();
        });

        it("keeps writes made after a periodic cleanup across restart", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage({ maxSegmentSize: 50 });
            await storage.set(["ctx"], "key1", "value1");
            await storage.set(["ctx"], "key2", "value2");
            await waitUntil(() => storageDir.file("snapshot.json.gz").exists());
            await storage.set(["ctx"], "key3", "value3");
            await waitUntil(() => storageDir.file("snapshot.prev.json.gz").exists());
            await storage.set(["ctx"], "key1", "updated");
            await storage.close();

            const storage2 = await createStorage({ maxSegmentSize: 50 });
            expect(await storage2.get(["ctx"], "key1")).equal("updated");
            expect(await storage2.get(["ctx"], "key2")).equal("value2");
            expect(await storage2.get(["ctx"], "key3")).equal("value3");
            await storage2.close();
        });

        it("restores from the backup snapshot and the WAL when the snapshot is corrupt", async () => {
            const storageDir = fs.directory("storage");
            for (const session of [1, 2, 3]) {
                const storage = await createStorage({ maxSegmentSize: 50 });
                await storage.set(["ctx"], `key${session}a`, "a");
                await storage.set(["ctx"], `key${session}b`, "b");
                await storage.close();
            }
            await storageDir.file("snapshot.json.gz").write("not gzip");

            const storage = await createStorage({ maxSegmentSize: 50 });

            expect(await storage.values(["ctx"])).deep.equal({
                key1a: "a",
                key1b: "b",
                key2a: "a",
                key2b: "b",
                key3a: "a",
                key3b: "b",
            });
            expect(await storageDir.file("snapshot.corrupt.json.gz").exists()).equal(true);
            const backup = await WalSnapshot.load(storageDir, { basename: "snapshot.prev" });

            await storage.set(["ctx"], "key4a", "a");
            await storage.close();

            const current = await WalSnapshot.load(storageDir);
            expect(current!.previousCommitId).deep.equal(backup!.commitId);
            expect((await segmentNumbers())[0]).most(backup!.commitId.segment);
        });

        it("refuses to restore the backup snapshot when the WAL it needs is gone", async () => {
            const storageDir = fs.directory("storage");
            for (const session of [1, 2, 3]) {
                const storage = await createStorage({ maxSegmentSize: 50 });
                await storage.set(["ctx"], `key${session}a`, "a");
                await storage.set(["ctx"], `key${session}b`, "b");
                await storage.close();
            }
            const backup = await WalSnapshot.load(storageDir, { basename: "snapshot.prev" });
            const walDir = storageDir.directory("wal");
            for (const segment of await segmentNumbers()) {
                if (segment <= backup!.commitId.segment) {
                    await walDir.file(segmentFilename(segment)).delete();
                    await walDir.file(compressedSegmentFilename(segment)).delete();
                }
            }
            await storageDir.file("snapshot.json.gz").write("not gzip");

            await expect(createStorage({ maxSegmentSize: 50 })).rejectedWith("cannot be restored");
        });

        it("fails to open when the snapshot is unreadable and no backup exists", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "value");
            await storage.close();
            await storageDir.file("snapshot.json.gz").write("not gzip");

            await expect(createStorage()).rejectedWith(StorageError, "is unreadable");
        });

        it("flushes snapshots and compressed WAL segments before renaming them into place", async () => {
            const probe = await fs.file("probe").open("probe", "w");
            const handlePrototype = Object.getPrototypeOf(probe);
            await probe.close();
            const originalFsync = handlePrototype.fsync;
            const flushed = new Array<string>();
            handlePrototype.fsync = async function (this: { name: string }) {
                flushed.push(this.name);
                return originalFsync.call(this);
            };
            try {
                const storageDir = fs.directory("storage");
                const storage = await createStorage({ maxSegmentSize: 50, fsync: true });
                await storage.set(["ctx"], "key1", "value1");
                await storage.set(["ctx"], "key2", "value2");
                await waitUntil(() => storageDir.directory("wal").file(compressedSegmentFilename(1)).exists());
                await storage.close();

                expect(flushed).include(`${compressedSegmentFilename(1)}.tmp`);
                expect(flushed).include("snapshot.tmp.json.gz");
            } finally {
                handlePrototype.fsync = originalFsync;
            }
        });

        it("deletes the segments before an older snapshot once the next snapshot backs it up", async () => {
            const storage = await createStorage({ maxSegmentSize: 50 });
            await storage.set(["ctx"], "key1", "value1");
            await storage.set(["ctx"], "key2", "value2");
            await storage.set(["ctx"], "key3", "value3");
            await storage.close();
            const olderSnapshot = await WalSnapshot.load(fs.directory("storage"));
            expect(olderSnapshot!.previousCommitId).equal(undefined);
            expect((await segmentNumbers())[0]).equal(1);

            const storage2 = await createStorage({ maxSegmentSize: 50 });
            await storage2.set(["ctx"], "key4", "value4");
            await storage2.close();

            expect((await segmentNumbers())[0]).equal(olderSnapshot!.commitId.segment);
        });

        it("does not replace the backup when nothing changed since the last snapshot", async () => {
            const storageDir = fs.directory("storage");
            const storage = await createStorage();
            await storage.set(["ctx"], "key", "value");
            await storage.close();

            const storage2 = await createStorage();
            expect(await storage2.get(["ctx"], "key")).equal("value");
            await storage2.close();

            expect(await storageDir.file("snapshot.prev.json.gz").exists()).equal(false);
        });

        it("deletes an obsolete head snapshot on initialize", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await storageDir.file("head.json.gz").write("stale");
            await storageDir.file("head.json").write("stale");

            const storage = await createStorage();

            expect(await storageDir.file("head.json.gz").exists()).equal(false);
            expect(await storageDir.file("head.json").exists()).equal(false);
            await storage.close();
        });
    });
});
