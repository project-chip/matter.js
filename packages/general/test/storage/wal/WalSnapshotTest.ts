/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MockFilesystem } from "#fs/MockFilesystem.js";
import { StorageError } from "#storage/StorageDriver.js";
import { toJson } from "#storage/StringifyTools.js";
import { WalSnapshot } from "#storage/wal/WalSnapshot.js";

describe("WalSnapshot", () => {
    let fs: MockFilesystem;

    beforeEach(() => {
        fs = new MockFilesystem();
    });

    describe("load/save", () => {
        it("returns undefined when no snapshot exists", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            const result = await WalSnapshot.load(storageDir);
            expect(result).equal(undefined);
        });

        it("writes and loads a snapshot", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const commitId = { segment: 1, offset: 5 };
            const ts = 1000;
            const data = {
                "ctx.sub": { key1: "value1", key2: 42 },
                other: { flag: true },
            };

            const snapshot = new WalSnapshot(commitId, ts, data);
            await snapshot.save(storageDir, { compress: false });

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.commitId).deep.equal(commitId);
            expect(loaded!.ts).equal(ts);
            expect(loaded!.data["ctx.sub"].key1).equal("value1");
            expect(loaded!.data["ctx.sub"].key2).equal(42);
            expect(loaded!.data["other"].flag).equal(true);
        });

        it("roundtrips special storage types through snapshot", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const commitId = { segment: 3, offset: 7 };
            const ts = 2000;
            const data = {
                "ctx.special": {
                    bigint: BigInt("123456789012345678"),
                    buffer: new Uint8Array([1, 2, 3]).buffer,
                    nested: { a: [1, "two", true] },
                },
            };

            const snapshot = new WalSnapshot(commitId, ts, data as any);
            await snapshot.save(storageDir, { compress: false });

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.commitId).deep.equal(commitId);
            expect(loaded!.ts).equal(ts);
            expect(loaded!.data["ctx.special"].bigint).equal(BigInt("123456789012345678"));
            expect(loaded!.data["ctx.special"].nested).deep.equal({ a: [1, "two", true] });
        });

        it("overwrites previous snapshot atomically", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const snap1 = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { a: { x: 1 } });
            await snap1.save(storageDir, { compress: false });

            const snap2 = new WalSnapshot({ segment: 2, offset: 3 }, 2000, { b: { y: 2 } });
            await snap2.save(storageDir, { compress: false });

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded!.commitId).deep.equal({ segment: 2, offset: 3 });
            expect(loaded!.ts).equal(2000);
            expect(loaded!.data["b"].y).equal(2);
            // Old data should be gone
            expect(loaded!.data["a"]).equal(undefined);
        });

        it("defaults ts to 0 for legacy snapshots without ts", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            // Write a legacy snapshot manually (no ts field)
            const legacy = { commitId: { segment: 1, offset: 0 }, data: { ctx: { key: "val" } } };
            await storageDir.file("snapshot.json").write(toJson(legacy as any, 2));

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.ts).equal(0);
            expect(loaded!.data["ctx"].key).equal("val");
        });

        it("loads with custom basename", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const snapshot = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "val" } });
            await snapshot.save(storageDir, { compress: false, basename: "head" });

            const loaded = await WalSnapshot.load(storageDir, { basename: "head" });
            expect(loaded).not.equal(undefined);
            expect(loaded!.data["ctx"].key).equal("val");

            // Default basename should not find it
            const notFound = await WalSnapshot.load(storageDir);
            expect(notFound).equal(undefined);
        });
    });

    describe("fsync", () => {
        let restoreFsync: (() => void) | undefined;

        afterEach(() => {
            restoreFsync?.();
            restoreFsync = undefined;
        });

        /**
         * Record, for each fsync on a mock file handle, whether the final snapshot file already existed.
         */
        async function recordFsyncs() {
            const probe = await fs.file("probe").open("probe", "w");
            const handlePrototype = Object.getPrototypeOf(probe);
            await probe.close();

            const originalFsync = handlePrototype.fsync;
            const finalFileExisted = new Array<boolean>();
            handlePrototype.fsync = async function (this: unknown) {
                finalFileExisted.push(await fs.directory("storage").file("snapshot.json").exists());
                return originalFsync.call(this);
            };
            restoreFsync = () => (handlePrototype.fsync = originalFsync);
            return finalFileExisted;
        }

        it("flushes the snapshot before renaming it into place", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            const fsyncs = await recordFsyncs();

            await new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "value" } }).save(storageDir, {
                compress: false,
            });

            expect(fsyncs).deep.equal([false]);
            expect((await WalSnapshot.load(storageDir))!.data.ctx.key).equal("value");
        });

        it("skips the flush when fsync is disabled", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            const fsyncs = await recordFsyncs();

            await new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "value" } }).save(storageDir, {
                compress: false,
                fsync: false,
            });

            expect(fsyncs).deep.equal([]);
        });
    });

    describe("backup", () => {
        const first = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "first" } });
        const second = new WalSnapshot({ segment: 2, offset: 0 }, 2000, { ctx: { key: "second" } }, first.commitId);

        it("keeps the replaced snapshot as backup", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await second.save(storageDir);

            const current = await WalSnapshot.load(storageDir);
            expect(current!.commitId).deep.equal(second.commitId);
            expect(current!.previousCommitId).deep.equal(first.commitId);
            const backup = await WalSnapshot.load(storageDir, { basename: "snapshot.prev" });
            expect(backup!.data.ctx.key).equal("first");
        });

        it("restores the current snapshot and names its backup", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await second.save(storageDir);

            const restored = await WalSnapshot.restore(storageDir);

            expect(restored!.snapshot.data.ctx.key).equal("second");
            expect(restored!.backupCommitId).deep.equal(first.commitId);
        });

        it("restores the backup and moves an unreadable snapshot aside", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await second.save(storageDir);
            await storageDir.file("snapshot.json.gz").write("not gzip");

            const restored = await WalSnapshot.restore(storageDir);

            expect(restored!.snapshot.data.ctx.key).equal("first");
            expect(restored!.backupCommitId).deep.equal(first.commitId);
            expect(await storageDir.file("snapshot.json.gz").exists()).equal(false);
            expect(await storageDir.file("snapshot.corrupt.json.gz").exists()).equal(true);
        });

        it("restores the backup when the snapshot is missing", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await second.save(storageDir);
            await storageDir.file("snapshot.json.gz").delete();

            const restored = await WalSnapshot.restore(storageDir);

            expect(restored!.snapshot.data.ctx.key).equal("first");
            expect(restored!.backupCommitId).deep.equal(first.commitId);
        });

        it("throws when the snapshot and the backup are unreadable", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await second.save(storageDir);
            await storageDir.file("snapshot.json.gz").write("not gzip");
            await storageDir.file("snapshot.prev.json.gz").write("not gzip");

            await expect(WalSnapshot.restore(storageDir)).rejectedWith(StorageError, "is unreadable");
        });

        it("throws when the snapshot is unreadable and no backup exists", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await storageDir.file("snapshot.json").write("{}");

            await expect(WalSnapshot.restore(storageDir)).rejectedWith("has no valid commitId");
        });

        it("removes a backup that predates a snapshot without previousCommitId", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await first.save(storageDir);
            await new WalSnapshot({ segment: 3, offset: 0 }, 3000, { ctx: { key: "third" } }).save(storageDir);

            const restored = await WalSnapshot.restore(storageDir);

            expect(restored!.snapshot.data.ctx.key).equal("third");
            expect(restored!.backupCommitId).equal(undefined);
            expect(await storageDir.file("snapshot.prev.json.gz").exists()).equal(false);
        });

        it("returns undefined when no snapshot was written", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            expect(await WalSnapshot.restore(storageDir)).equal(undefined);
        });
    });

    describe("validation", () => {
        it("rejects a snapshot whose data is not an object of contexts", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await storageDir.file("snapshot.json").write('{"commitId":{"segment":1,"offset":0},"data":{"ctx":1}}');

            await expect(WalSnapshot.load(storageDir)).rejectedWith("data is not an object of contexts");
        });

        it("rejects an unreadable snapshot with a StorageError", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await storageDir.file("snapshot.json.gz").write("not gzip");

            await expect(WalSnapshot.load(storageDir)).rejectedWith(StorageError, "storage/snapshot is unreadable");
        });

        it("rejects an invalid previousCommitId", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();
            await storageDir
                .file("snapshot.json")
                .write('{"commitId":{"segment":1,"offset":0},"data":{},"previousCommitId":7}');

            await expect(WalSnapshot.load(storageDir)).rejectedWith("invalid previousCommitId");
        });
    });

    describe("compression", () => {
        it("writes and loads a compressed snapshot", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const commitId = { segment: 1, offset: 5 };
            const data = {
                "ctx.sub": { key1: "value1", key2: 42 },
                other: { flag: true },
            };

            const snapshot = new WalSnapshot(commitId, 1000, data);
            await snapshot.save(storageDir, { compress: true });

            // Should have written .json.gz, not .json
            expect(await storageDir.file("snapshot.json.gz").exists()).equal(true);
            expect(await storageDir.file("snapshot.json").exists()).equal(false);

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.commitId).deep.equal(commitId);
            expect(loaded!.data["ctx.sub"].key1).equal("value1");
            expect(loaded!.data["ctx.sub"].key2).equal(42);
            expect(loaded!.data["other"].flag).equal(true);
        });

        it("auto-detects uncompressed snapshot when compressed expected", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            // Write uncompressed
            const snap = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "uncompressed" } });
            await snap.save(storageDir, { compress: false });

            // Load should auto-detect .json
            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.data["ctx"].key).equal("uncompressed");
        });

        it("moves the old-format file to the backup when switching to compressed", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            // Write uncompressed
            const snap1 = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "v1" } });
            await snap1.save(storageDir, { compress: false });
            expect(await storageDir.file("snapshot.json").exists()).equal(true);

            // Switch to compressed
            const snap2 = new WalSnapshot({ segment: 2, offset: 0 }, 2000, { ctx: { key: "v2" } });
            await snap2.save(storageDir, { compress: true });

            expect(await storageDir.file("snapshot.json.gz").exists()).equal(true);
            expect(await storageDir.file("snapshot.json").exists()).equal(false);
            expect(await storageDir.file("snapshot.prev.json").exists()).equal(true);
        });

        it("moves the old-format file to the backup when switching to uncompressed", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            // Write compressed
            const snap1 = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "v1" } });
            await snap1.save(storageDir, { compress: true });
            expect(await storageDir.file("snapshot.json.gz").exists()).equal(true);

            // Switch to uncompressed
            const snap2 = new WalSnapshot({ segment: 2, offset: 0 }, 2000, { ctx: { key: "v2" } });
            await snap2.save(storageDir, { compress: false });

            expect(await storageDir.file("snapshot.json").exists()).equal(true);
            expect(await storageDir.file("snapshot.json.gz").exists()).equal(false);
            expect(await storageDir.file("snapshot.prev.json.gz").exists()).equal(true);
        });

        it("prefers newer .json.gz when both files exist", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const snap1 = new WalSnapshot({ segment: 1, offset: 0 }, 1000, { ctx: { key: "old" } });
            await snap1.save(storageDir, { compress: false });

            // save() never leaves both formats, so copy in a compressed file written elsewhere
            const otherDir = fs.directory("other");
            await otherDir.mkdir();
            await new WalSnapshot({ segment: 2, offset: 0 }, 2000, { ctx: { key: "new" } }).save(otherDir);
            await storageDir.file("snapshot.json.gz").write(otherDir.file("snapshot.json.gz").readBytes());

            // Both files exist — should prefer the newer .json.gz
            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.data["ctx"].key).equal("new");
            expect(loaded!.commitId).deep.equal({ segment: 2, offset: 0 });
        });

        it("roundtrips special storage types through compressed snapshot", async () => {
            const storageDir = fs.directory("storage");
            await storageDir.mkdir();

            const commitId = { segment: 3, offset: 7 };
            const data = {
                "ctx.special": {
                    bigint: BigInt("123456789012345678"),
                    buffer: new Uint8Array([1, 2, 3]).buffer,
                    nested: { a: [1, "two", true] },
                },
            };

            const snapshot = new WalSnapshot(commitId, 2000, data as any);
            await snapshot.save(storageDir, { compress: true });

            const loaded = await WalSnapshot.load(storageDir);
            expect(loaded).not.equal(undefined);
            expect(loaded!.commitId).deep.equal(commitId);
            expect(loaded!.data["ctx.special"].bigint).equal(BigInt("123456789012345678"));
            expect(loaded!.data["ctx.special"].nested).deep.equal({ a: [1, "two", true] });
        });
    });
});
