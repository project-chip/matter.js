/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { ClientCacheBuffer } from "#storage/client/ClientCacheBuffer.js";
import { DatasourceCache } from "#storage/client/DatasourceCache.js";
import { RemoteWriteParticipant } from "#storage/client/RemoteWriteParticipant.js";
import {
    createPromise,
    InternalError,
    Lifetime,
    MemoryStorageDriver,
    Seconds,
    StorageDriver,
    Transaction,
} from "@matter/general";
import { Val } from "@matter/protocol";
import { AttributeId, ClusterId, EndpointNumber, Status, StatusResponseError } from "@matter/types";
import { captureWarningsOf } from "../endpoint/validation/validation-helpers.js";

function createCache(options?: {
    buffer?: ClientCacheBuffer;
    localWriter?: {
        persistInTransaction: (...args: any[]) => Promise<void>;
        persist: (...args: any[]) => Promise<void>;
    };
}) {
    return new DatasourceCache({
        writer: (() => {}) as any,
        nodeId: "test-peer",
        endpointNumber: EndpointNumber(1),
        behaviorId: "test",
        localWriter: options?.localWriter as any,
        buffer: options?.buffer,
    });
}

function attrs(entries: Record<string, unknown>): Val.StructMap {
    return new Map(Object.entries(entries));
}

/** A localWriter that records persist calls without touching the transaction's type-safe set() */
function trackingWriter() {
    const persisted: Val.Struct[] = [];
    return {
        persisted,
        persistInTransaction: async (_tx: any, _ep: any, _bid: any, vals: Val.Struct) => {
            persisted.push(vals);
        },
        persist: async (_ep: any, _bid: any, vals: Val.Struct) => {
            persisted.push(vals);
        },
        erase: async () => {},
    };
}

/** A localWriter that always throws */
function failingWriter(message = "No endpoint store for endpoint 1") {
    return {
        persistInTransaction: async () => {
            throw new Error(message);
        },
        persist: async () => {
            throw new Error(message);
        },
        erase: async () => {},
    };
}

describe("DatasourceCache error handling", () => {
    describe("externalSet guard", () => {
        it("blocks after erase", async () => {
            const dirty: DatasourceCache[] = [];
            const buffer = { markDirty: (c: DatasourceCache) => dirty.push(c), removeDirty: () => {} } as any;
            const cache = createCache({ buffer });

            await cache.externalSet(attrs({ onOff: true }));
            expect(dirty).length(1);

            dirty.length = 0;
            await cache.erase();
            await cache.externalSet(attrs({ onOff: false }));
            expect(dirty).length(0);
        });

        it("blocks after reclaimValues but re-enables on consumer assignment", async () => {
            const dirty: DatasourceCache[] = [];
            const buffer = { markDirty: (c: DatasourceCache) => dirty.push(c), removeDirty: () => {} } as any;
            const cache = createCache({ buffer });

            await cache.externalSet(attrs({ onOff: true }));
            expect(dirty).length(1);

            dirty.length = 0;
            const mockConsumer = {
                releaseValues: () => ({}),
                readValues: () => ({}),
                integrate: () => undefined,
            } as any;
            cache.consumer = mockConsumer;
            cache.reclaimValues();

            // Blocked after reclaim
            await cache.externalSet(attrs({ onOff: false }));
            expect(dirty).length(0);

            // Re-enabled after new consumer
            cache.consumer = {
                releaseValues: () => ({}),
                readValues: () => ({}),
                integrate: () => undefined,
            } as any;
            await cache.externalSet(attrs({ onOff: true }));
            expect(dirty).length(1);
        });
    });

    describe("flush", () => {
        it("persists a report that carried nothing but a new version", async () => {
            const localWriter = trackingWriter();
            const buffer = { markDirty: () => {}, removeDirty: () => {} } as any;
            const cache = createCache({ buffer, localWriter });
            cache.consumer = {
                readValues: () => ({}),
                snapshot: () => ({}),
                releaseValues: () => ({}),
                integrate: () => undefined,
            } satisfies Datasource.ExternallyMutableStore.Consumer;

            await cache.externalSet(attrs({ __version__: 5 }));
            const flushed = await cache.flush();

            expect(flushed).deep.equals(new Set(["__version__"]));
            expect(localWriter.persisted).deep.equals([{ __version__: 5 }]);
        });

        // The cache marks dirty the keys its caller supplies and asks the consumer for those same keys at flush.  A
        // consumer that stores a value under a different key than it was given leaves nothing to persist
        it("persists a value the consumer stores under the key it was given", async () => {
            const localWriter = trackingWriter();
            const buffer = { markDirty: () => {}, removeDirty: () => {} } as any;
            const cache = createCache({ buffer, localWriter });

            const stored = {} as Val.Struct;
            cache.consumer = {
                readValues: (keys: Set<string>) => {
                    const result = {} as Val.Struct;
                    for (const key of keys) {
                        if (key in stored) {
                            result[key] = stored[key];
                        }
                    }
                    return result;
                },
                snapshot: () => ({ ...stored }),
                releaseValues: () => ({ ...stored }),
                integrate: values => {
                    for (const [key, value] of values) {
                        stored[String(key)] = value;
                    }
                    return undefined;
                },
            } satisfies Datasource.ExternallyMutableStore.Consumer;

            await cache.externalSet(attrs({ "1": 42 }));
            await cache.flush();

            expect(localWriter.persisted).deep.equals([{ "1": 42, __version__: -1 }]);
        });
    });

    describe("forgetVersion", () => {
        function versionOnly(): Datasource.ExternallyMutableStore.Consumer {
            return {
                readValues: () => ({}),
                snapshot: () => ({}),
                releaseValues: () => ({}),
                integrate: () => undefined,
            };
        }

        it("persists the unknown version after a running flush that took the old version", async () => {
            const writes = new Array<string>();
            let releaseFlush!: () => void;
            const flushReleased = new Promise<void>(resolve => (releaseFlush = resolve));
            let flushStarted!: () => void;
            const flushing = new Promise<void>(resolve => (flushStarted = resolve));
            const localWriter = {
                persistInTransaction: async (_tx: unknown, _ep: unknown, _bid: unknown, values: Val.Struct) => {
                    flushStarted();
                    await flushReleased;
                    writes.push(`flushed ${values.__version__}`);
                },
                persist: async (_ep: unknown, _bid: unknown, values: Val.Struct) => {
                    writes.push(`persisted ${values.__version__}`);
                },
            };
            const buffer = new ClientCacheBuffer(MemoryStorageDriver.create(), Seconds(60));
            const cache = createCache({ buffer, localWriter });
            cache.consumer = versionOnly();
            await cache.externalSet(attrs({ __version__: 5 }));

            const flushed = buffer.flush();
            await flushing;
            const forgotten = cache.forgetVersion();
            releaseFlush();
            await Promise.all([flushed, forgotten]);

            expect(writes).deep.equals(["flushed 5", `persisted ${Datasource.UNKNOWN_VERSION}`]);
        });

        it("persists nothing once erased", async () => {
            const localWriter = trackingWriter();
            const cache = createCache({ localWriter });
            await cache.erase();

            await cache.forgetVersion();

            expect(localWriter.persisted).deep.equals([]);
        });
    });

    describe("restoreDirtyKeys", () => {
        it("is a no-op after erase", async () => {
            const cache = createCache();
            await cache.erase();
            cache.restoreDirtyKeys(new Set(["onOff"]));

            const result = await cache.flush();
            expect(result).undefined;
        });
    });

    describe("remote write participants", () => {
        it("registers same-named peers of different controllers in one transaction", async () => {
            const transaction = Transaction.open("test", Lifetime.mock, "rw");
            await createCache().set(transaction, { onOff: true });
            await createCache().set(transaction, { onOff: false });

            expect([...transaction.participants]).length(2);

            await transaction.resolve(undefined);
        });

        it("reuses one participant for the same peer", async () => {
            const writer = (() => {}) as any;
            const cacheFor = (behaviorId: string) =>
                new DatasourceCache({ writer, nodeId: "peer1", endpointNumber: EndpointNumber(1), behaviorId });

            const transaction = Transaction.open("test", Lifetime.mock, "rw");
            await cacheFor("6").set(transaction, { onOff: true });
            await cacheFor("8").set(transaction, { currentLevel: 1 });

            expect([...transaction.participants]).length(1);

            await transaction.resolve(undefined);
        });
    });
});

describe("settlements", () => {
    /** A consumer that applies values to {@link values} and records each announcement when it runs. */
    function recordingConsumer() {
        const values: Val.Struct = {};
        const integrated = new Array<Val.Struct>();
        const announced = new Array<Val.Struct>();
        const consumer = {
            readValues: () => ({}),
            snapshot: () => ({ ...values }),
            releaseValues: () => ({ ...values }),
            integrate: (changes: Val.StructMap) => {
                const change = Object.fromEntries(changes);
                Object.assign(values, change);
                integrated.push(change);
                return async () => {
                    announced.push(change);
                };
            },
        } satisfies Datasource.ExternallyMutableStore.Consumer;
        return { values, integrated, announced, consumer };
    }

    it("does not let a write answered later override one accepted since it was queued", async () => {
        const cache = createCache();
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        // Both queued at epoch 0; the later write is answered first
        await cache.settleAccepted({ "1": "later" }, 0);
        await cache.settleAccepted({ "1": "earlier" }, 0);

        expect(integrated).deep.equals([{ "1": "later" }]);
    });

    it("applies an accepted value at once and announces it, and what follows, on release", async () => {
        const cache = createCache();
        const { values, announced, consumer } = recordingConsumer();
        cache.consumer = consumer;

        const release = await cache.settleAccepted({ "1": "accepted" }, 0);
        await cache.externalSet(attrs({ "1": "reported" }));

        expect(values).deep.equals({ "1": "reported" });
        expect(announced).deep.equals([]);

        await release();

        expect(announced).deep.equals([{ "1": "accepted" }, { "1": "reported" }]);
    });

    /**
     * A local writer whose every persist waits until the test lets it finish, then patches {@link stored} like
     * storage does.
     */
    function gatedWriter() {
        const stored: Val.Struct = {};
        const pending = new Array<{ values: Val.Struct; finish: () => void }>();
        return {
            stored,
            pending,
            persistInTransaction: async () => {},
            persist: async (_ep: unknown, _bid: unknown, values: Val.Struct) => {
                const { promise, resolver } = createPromise<void>();
                pending.push({ values, finish: resolver });
                await promise;
                Object.assign(stored, values);
            },
        };
    }

    it("lets a report that failed to persist outrank an older write", async () => {
        const cache = createCache({
            localWriter: {
                persistInTransaction: async () => {},
                persist: async () => {
                    throw new Error("persist failure");
                },
            },
        });
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        await expect(cache.externalSet(attrs({ "1": "reported" }))).rejectedWith("persist failure");
        await cache.settleAccepted({ "1": "accepted" }, 0);

        expect(integrated).deep.equals([]);
    });

    it("keeps a report still persisting over an older write answered meanwhile", async () => {
        const writer = gatedWriter();
        const cache = createCache({ localWriter: writer });
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        const report = cache.externalSet(attrs({ "1": "reported" }));
        await cache.settleAccepted({ "1": "accepted" }, 0);
        writer.pending[0].finish();
        await report;

        expect(writer.pending).length(1);
        expect(integrated).deep.equals([{ "1": "reported" }]);
    });

    it("keeps a report that arrives while an accepted value persists", async () => {
        const writer = gatedWriter();
        const cache = createCache({ localWriter: writer });
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        const accepted = cache.settleAccepted({ "1": "accepted" }, 0);
        const report = cache.externalSet(attrs({ "1": "reported" }));
        await MockTime.yield();
        writer.pending[0].finish();
        await accepted;
        await MockTime.yield();
        writer.pending[1].finish();
        await report;

        expect(integrated).deep.equals([{ "1": "reported" }]);
    });

    it("stores the latest settlement of a key when an older one would finish persisting last", async () => {
        const writer = gatedWriter();
        const cache = createCache({ localWriter: writer });
        cache.consumer = recordingConsumer().consumer;

        const accepted = cache.settleAccepted({ "1": "accepted" }, 0);
        const report = cache.externalSet(attrs({ "1": "reported" }));

        // Let each persist finish as late as possible relative to the ones that arrived after it
        const finished = new Set<number>();
        while (finished.size < 2) {
            for (let i = 0; i < 10 && writer.pending.length === finished.size; i++) {
                await MockTime.yield();
            }
            const newest = writer.pending.length - 1;
            const index = finished.has(newest) ? writer.pending.findIndex((_, i) => !finished.has(i)) : newest;
            writer.pending[index].finish();
            finished.add(index);
        }
        await Promise.all([accepted, report]);

        const restarted = new DatasourceCache({
            writer: async () => [],
            nodeId: "test-peer",
            endpointNumber: EndpointNumber(1),
            behaviorId: "test",
            initialValues: { ...writer.stored },
        });
        expect(restarted.initialValues?.["1"]).equals("reported");
    });

    it("persists a settlement queued behind one whose persist failed", async () => {
        let failing = true;
        const persisted = new Array<Val.Struct>();
        const cache = createCache({
            localWriter: {
                persistInTransaction: async () => {},
                persist: async (_ep: unknown, _bid: unknown, values: Val.Struct) => {
                    if (failing) {
                        failing = false;
                        throw new Error("persist failure");
                    }
                    persisted.push(values);
                },
            },
        });
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        await expect(cache.externalSet(attrs({ "1": "first" }))).rejectedWith("persist failure");
        await cache.externalSet(attrs({ "1": "second" }));

        expect(persisted).deep.equals([{ "1": "second" }]);
        expect(integrated).deep.equals([{ "1": "second" }]);
    });

    it("does not persist a settlement queued behind another once the cache is discarded", async () => {
        const writer = gatedWriter();
        const cache = createCache({ localWriter: writer });
        cache.consumer = recordingConsumer().consumer;

        const first = cache.externalSet(attrs({ "1": "first" }));
        const second = cache.externalSet(attrs({ "1": "second" }));
        await MockTime.yield();
        cache.discard();
        writer.pending[0].finish();
        await Promise.all([first, second]);

        expect(writer.pending).length(1);
        expect(writer.stored).deep.equals({ "1": "first" });
    });

    it("persists nothing when the device accepted nothing", async () => {
        const writer = trackingWriter();
        const cache = createCache({ localWriter: writer });
        cache.consumer = recordingConsumer().consumer;

        await cache.settleAccepted({}, 0);

        expect(writer.persisted).deep.equals([]);
    });

    it("settles an accepted value into the seed while no consumer is attached", async () => {
        const cache = createCache();

        const release = await cache.settleAccepted({ "1": "accepted" }, 0);
        await release();

        expect(cache.initialValues).deep.equals({ "1": "accepted" });
    });

    it("announces one change at a time when settlements arrive during an announcement", async () => {
        const cache = createCache();
        const log = new Array<string>();
        const { promise: firstHeld, resolver: releaseFirst } = createPromise<void>();
        cache.consumer = {
            readValues: () => ({}),
            snapshot: () => ({}),
            releaseValues: () => ({}),
            integrate: (changes: Val.StructMap) => {
                const value = String(changes.get("1"));
                return async () => {
                    log.push(`start ${value}`);
                    if (value === "first") {
                        await firstHeld;
                    }
                    log.push(`end ${value}`);
                };
            },
        } satisfies Datasource.ExternallyMutableStore.Consumer;

        const first = cache.externalSet(attrs({ "1": "first" }));
        await MockTime.yield();
        const second = cache.externalSet(attrs({ "1": "second" }));
        await MockTime.yield();
        releaseFirst();
        await Promise.all([first, second]);

        expect(log).deep.equals(["start first", "end first", "start second", "end second"]);
    });

    it("does not apply a value when the cache is discarded while persisting it", async () => {
        let cache: DatasourceCache | undefined;
        cache = createCache({
            localWriter: {
                persistInTransaction: async () => {},
                persist: async () => {
                    cache?.discard();
                },
            },
        });
        const { integrated, consumer } = recordingConsumer();
        cache.consumer = consumer;

        await cache.externalSet(attrs({ "1": "reported" }));

        expect(integrated).deep.equals([]);
    });

    it("refuses a second write of the same cluster in one commit", () => {
        const participant = new RemoteWriteParticipant(async () => [], "peer1");
        const receiver = { settleAccepted: async () => async () => {} };
        participant.set(EndpointNumber(1), "6", { "0": true }, { receiver, epoch: 0 });

        expect(() => participant.set(EndpointNumber(1), "6", { "0": false }, { receiver, epoch: 0 })).throws(
            InternalError,
        );
    });

    it("logs a value it failed to settle and still fails a declined write", async () => {
        const participant = new RemoteWriteParticipant(
            async () => [
                {
                    kind: "attr-status",
                    path: { endpointId: EndpointNumber(1), clusterId: ClusterId(6), attributeId: AttributeId(0) },
                    status: Status.Success,
                },
                {
                    kind: "attr-status",
                    path: { endpointId: EndpointNumber(1), clusterId: ClusterId(8), attributeId: AttributeId(0) },
                    status: Status.ConstraintError,
                },
            ],
            "peer1",
        );
        const settled = new Array<Val.Struct>();
        participant.set(
            EndpointNumber(1),
            "6",
            { "0": true },
            {
                receiver: {
                    settleAccepted: async () => {
                        throw new Error("settle failure");
                    },
                },
                epoch: 0,
            },
        );
        participant.set(
            EndpointNumber(1),
            "8",
            { "0": 1 },
            {
                receiver: {
                    settleAccepted: async values => {
                        settled.push(values);
                        return async () => {};
                    },
                },
                epoch: 0,
            },
        );

        let caught: unknown;
        const warnings = await captureWarningsOf(async () => {
            caught = await participant.commit1().then(
                () => undefined,
                (e: unknown) => e,
            );
        });

        expect(caught).instanceOf(StatusResponseError);
        expect(settled).deep.equals([{}]);
        expect(warnings.map(({ text }) => text).join("\n")).contains("settle failure");
    });
});

describe("ClientCacheBuffer error handling", () => {
    it("drops erased cache without crashing the batch", async () => {
        const driver = MemoryStorageDriver.create();
        const buffer = new ClientCacheBuffer(driver, Seconds(60));

        const healthy = trackingWriter();
        const healthyCache = createCache({ buffer, localWriter: healthy });

        const erasedCache = createCache({ buffer, localWriter: failingWriter() });

        // Mark both dirty with initial values so flush has data to write
        healthyCache.initialValues = { onOff: true };
        await healthyCache.externalSet(attrs({ onOff: true }));

        erasedCache.initialValues = { level: 50 };
        await erasedCache.externalSet(attrs({ level: 50 }));

        // Erase the broken cache, then re-add to dirty to simulate the race
        await erasedCache.erase();
        buffer.markDirty(erasedCache);

        // Flush should succeed — healthy cache persisted, erased cache dropped
        await buffer.flush();
        expect(healthy.persisted).length(1);
    });

    it("restores dirty keys on commit failure", async () => {
        let commitShouldFail = false;

        const driver = MemoryStorageDriver.create();
        const originalBegin = driver.begin.bind(driver);
        driver.begin = () => {
            const tx = originalBegin() as StorageDriver.Transaction;
            const originalCommit = tx.commit.bind(tx);
            tx.commit = () => {
                if (commitShouldFail) {
                    throw new Error("Simulated commit failure");
                }
                return originalCommit();
            };
            return tx;
        };

        const writer = trackingWriter();
        const buffer = new ClientCacheBuffer(driver, Seconds(60));
        const cache = createCache({ buffer, localWriter: writer });

        cache.initialValues = { onOff: false };
        await cache.externalSet(attrs({ onOff: true }));

        // First flush with commit failure
        commitShouldFail = true;
        try {
            await buffer.flush();
        } catch {
            // Expected
        }

        // Writer was called but commit failed
        expect(writer.persisted).length(1);

        // Retry should work because dirty keys were restored
        commitShouldFail = false;
        writer.persisted.length = 0;
        await buffer.flush();

        // Writer called again on retry
        expect(writer.persisted).length(1);
    });

    it("skips erased caches on commit failure restore", async () => {
        let commitShouldFail = true;

        const driver = MemoryStorageDriver.create();
        const originalBegin = driver.begin.bind(driver);
        driver.begin = () => {
            const tx = originalBegin() as StorageDriver.Transaction;
            const originalCommit = tx.commit.bind(tx);
            tx.commit = () => {
                if (commitShouldFail) {
                    throw new Error("Simulated commit failure");
                }
                return originalCommit();
            };
            return tx;
        };

        const writer = trackingWriter();
        const buffer = new ClientCacheBuffer(driver, Seconds(60));
        const cache = createCache({ buffer, localWriter: writer });

        cache.initialValues = { onOff: false };
        await cache.externalSet(attrs({ onOff: true }));

        // Erase after marking dirty
        await cache.erase();
        buffer.markDirty(cache);

        // Flush will fail at commit, erased cache should not be restored
        try {
            await buffer.flush();
        } catch {
            // Expected
        }

        // Second flush should be a no-op (erased cache was not restored)
        commitShouldFail = false;
        writer.persisted.length = 0;
        await buffer.flush();
        expect(writer.persisted).length(0);
    });
});
