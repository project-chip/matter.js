/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { InternalError, StorageDriver, Transaction } from "@matter/general";
import { Val } from "@matter/protocol";
import { EndpointNumber } from "@matter/types";
import type { ClientCacheBuffer } from "./ClientCacheBuffer.js";
import type { LocalWriter } from "./LocalWriter.js";
import { RemoteWriteParticipant } from "./RemoteWriteParticipant.js";
import type { RemoteWriter } from "./RemoteWriter.js";

const nothingToRelease = async () => {};

/**
 * The default implementation of {@link Datasource.ExternallyMutableStore}.
 *
 * This implements storage for attribute values for a single cluster loaded from peers.
 *
 * The peer is the only writer of these values.  Its reports and its answers to our writes are settlements that enter
 * through one path, in one sequence: {@link externalSet} and {@link settleAccepted}.
 */
export class DatasourceCache implements Datasource.ExternallyMutableStore, RemoteWriteParticipant.Receiver {
    #writer: RemoteWriter;
    #nodeId: string;
    #endpointNumber: EndpointNumber;
    #behaviorId: string;
    #localWriter?: LocalWriter;
    #buffer?: ClientCacheBuffer;
    #version: number;
    #dirtyKeys = new Set<string>();

    /**
     * The tail of the unbuffered persists.  Storage takes patches, so they run one after another in arrival order:
     * the last patch stored for a key must be its latest settlement.  It never rejects; each persist's own caller
     * receives its failure.
     */
    #persisted: Promise<void> = Promise.resolve();

    /**
     * Counts settlements as they arrive: each report, and each answer that accepts a write.
     */
    #epoch = 0;

    /**
     * The arrival {@link #epoch} of the peer's latest word on each attribute.  A settlement counts from its arrival,
     * also while it persists.  Its values apply in memory even when persisting them fails: memory always follows the
     * device, and only the stored copy lags until the next settlement.
     */
    #settledAt = new Map<string, number>();

    /**
     * Change announcements in the order the changes were settled.  An entry stays closed until the transaction that
     * settled it ends; every entry behind it waits.
     */
    #announcements = new Array<{ open: boolean; announce: () => Promise<void> }>();
    #draining = false;

    #erased = false;
    #reclaimed = false;
    #consumer?: Datasource.ExternallyMutableStore.Consumer;

    initialValues?: Val.Struct;

    constructor(options: DatasourceCache.Options) {
        this.#writer = options.writer;
        this.#nodeId = options.nodeId;
        this.#endpointNumber = options.endpointNumber;
        this.#behaviorId = options.behaviorId;
        this.#localWriter = options.localWriter;
        this.#buffer = options.buffer;
        this.initialValues = options.initialValues;

        const version = options.initialValues?.[DatasourceCache.VERSION_KEY] as number;
        this.#version = typeof version === "number" ? version : Datasource.UNKNOWN_VERSION;
    }

    get consumer() {
        return this.#consumer;
    }

    set consumer(consumer: Datasource.ExternallyMutableStore.Consumer | undefined) {
        this.#consumer = consumer;
        if (consumer !== undefined) {
            this.#reclaimed = false;

            // Consumer owns the values while attached; drop our seed copy so we don't shadow it.
            this.initialValues = undefined;
        }
    }

    /**
     * Current values, preferring the live consumer over the seed snapshot, so cluster structure can rebuild from
     * up-to-date data while a behavior is active.
     */
    get currentValues(): Val.Struct | undefined {
        return this.#consumer && !this.#reclaimed ? this.#consumer.snapshot() : this.initialValues;
    }

    async set(transaction: Transaction, values: Val.Struct) {
        let participant = transaction.getParticipant(this.#writer);
        if (participant === undefined) {
            participant = new RemoteWriteParticipant(this.#writer, this.#nodeId);
            transaction.addParticipants(participant);
        }
        (participant as RemoteWriteParticipant).set(this.#endpointNumber, this.#behaviorId, values, {
            receiver: this,
            epoch: this.#epoch,
        });
    }

    async settleAccepted(values: Val.Struct, epoch: number) {
        const accepted = new Map<string, Val>();
        for (const id in values) {
            if ((this.#settledAt.get(id) ?? -1) <= epoch) {
                accepted.set(id, values[id]);
            }
        }
        if (!accepted.size) {
            return { release: nothingToRelease };
        }

        const { announce, persistFailure } = await this.#settle(accepted);
        if (announce === undefined) {
            return { release: nothingToRelease, persistFailure };
        }

        const entry = { open: false, announce };
        this.#announcements.push(entry);
        const release = async () => {
            entry.open = true;
            await this.#drain();
        };
        return { release, persistFailure };
    }

    async externalSet(values: Val.StructMap) {
        const { announce, persistFailure } = await this.#settle(values);
        if (announce !== undefined) {
            this.#announcements.push({ open: true, announce });
            await this.#drain();
        }
        if (persistFailure) {
            throw persistFailure.error;
        }
    }

    /**
     * Stamp values the peer settled with their arrival epoch, persist them, and apply those no later settlement has
     * claimed meanwhile, also when persisting failed.  A report that confirms a value we already hold is stamped too:
     * it leaves no other trace, and it still outranks a write in flight.
     *
     * Returns the announcement of the changes, if any, and the persist failure, if any.
     */
    async #settle(values: Val.StructMap): Promise<{
        announce?: () => Promise<void>;
        persistFailure?: RemoteWriteParticipant.PersistFailure;
    }> {
        const epoch = ++this.#epoch;
        for (const key of values.keys()) {
            const id = String(key);
            if (!id.startsWith("__")) {
                this.#settledAt.set(id, epoch);
            }
        }

        let persistFailure: RemoteWriteParticipant.PersistFailure | undefined;
        try {
            if (!(await this.#persist(values))) {
                return {};
            }
        } catch (error) {
            persistFailure = { error };
        }
        if (this.#erased || this.#reclaimed) {
            return { persistFailure };
        }

        const current = new Map<string, Val>();
        for (const [key, value] of values) {
            const id = String(key);
            if (id.startsWith("__") || this.#settledAt.get(id) === epoch) {
                current.set(id, value);
            }
        }
        if (!current.size) {
            return { persistFailure };
        }

        if (this.#consumer) {
            return { announce: this.#consumer.integrate(current), persistFailure };
        }

        this.#seed(current);
        return { persistFailure };
    }

    /**
     * Emit the open announcements at the head of the queue.  A running drain picks up what opens meanwhile.  A caller
     * does not wait for its own entry: it may sit behind a closed one.
     */
    async #drain() {
        if (this.#draining) {
            return;
        }

        this.#draining = true;
        try {
            while (this.#announcements[0]?.open) {
                await this.#announcements.shift()!.announce();
            }
        } finally {
            this.#draining = false;
        }
    }

    /**
     * Record values in local storage.  Returns false if this cache no longer takes values.
     */
    async #persist(values: Val.StructMap) {
        if (this.#erased || this.#reclaimed) {
            return false;
        }

        const versionVal = values.get(DatasourceCache.VERSION_KEY);
        if (typeof versionVal === "number") {
            this.#version = versionVal;
        }

        if (this.#buffer) {
            for (const key of values.keys()) {
                this.#dirtyKeys.add(String(key));
            }
            this.#buffer.markDirty(this);
        } else {
            const localWriter = this.#localWriter;
            if (localWriter) {
                const valuesStruct = Object.fromEntries(values) as Val.Struct;
                const persisting = this.#persisted.then(() => {
                    if (!this.#erased) {
                        return localWriter.persist(this.#endpointNumber, this.#behaviorId, valuesStruct);
                    }
                });
                // Only orders later persists; the caller receives this one's failure below
                this.#persisted = persisting.then(undefined, () => {});
                await persisting;
            }
        }

        return true;
    }

    #seed(values: Val.StructMap) {
        if (!this.initialValues) {
            this.initialValues = {};
        }
        Object.assign(this.initialValues, Object.fromEntries(values));
    }

    /**
     * Reclaim {@link initialValues} from the active datasource so the cache can be detached.  Blocks
     * {@link externalSet} until a new {@link consumer} is assigned, preventing writes to the released datasource.
     */
    reclaimValues() {
        if (this.consumer) {
            this.initialValues = this.consumer.releaseValues();
        }

        this.#reclaimed = true;

        // Don't clear dirty state here — the buffer will flush remaining dirty data during shutdown.  After
        // reclaimValues the data lives in initialValues, and flush() reads from there as a fallback.
    }

    get version() {
        return this.#version;
    }

    set version(_version: number) {
        throw new InternalError("Datasource version must be set via externalSet");
    }

    invalidateVersion() {
        this.#version = Datasource.UNKNOWN_VERSION;
    }

    async forgetVersion() {
        if (this.#erased) {
            return;
        }
        this.#version = Datasource.UNKNOWN_VERSION;

        // A flush that is running may have taken the old version already; it must land before the unknown version does
        await this.#buffer?.settled();

        await this.#localWriter?.persist(this.#endpointNumber, this.#behaviorId, {
            [DatasourceCache.VERSION_KEY]: Datasource.UNKNOWN_VERSION,
        });
    }

    get erased() {
        return this.#erased;
    }

    /**
     * Disable this cache in memory without touching persisted storage.
     */
    discard() {
        this.#erased = true;
        this.#dirtyKeys.clear();
        this.#buffer?.removeDirty(this);
    }

    /**
     * Erase values just for this datasource.  After this call, {@link externalSet} is permanently disabled.
     */
    async erase() {
        this.discard();
        await this.#localWriter?.erase(this.#endpointNumber, this.#behaviorId);
    }

    /**
     * Re-add keys that were cleared during a successful {@link flush} but whose transaction subsequently failed to
     * commit.  Without this, a commit failure would silently lose buffered writes.
     */
    restoreDirtyKeys(keys: Set<string>) {
        if (this.#erased) {
            return;
        }
        for (const key of keys) {
            this.#dirtyKeys.add(key);
        }
    }

    /**
     * Flush dirty values to storage.  When {@link tx} is provided, writes go through the shared transaction.
     *
     * Returns the set of keys that were flushed, so the caller can restore them via {@link restoreDirtyKeys} if
     * the enclosing transaction fails to commit.
     */
    async flush(tx?: StorageDriver.Transaction): Promise<Set<string> | undefined> {
        if (this.#erased || !this.#dirtyKeys.size) {
            return;
        }

        // Snapshot and remove keys atomically.  If externalSet() re-dirties a key during our async persist,
        // it re-adds to dirtyKeys and survives.  On failure we restore the snapshot.
        const flushing = new Set(this.#dirtyKeys);
        for (const key of flushing) {
            this.#dirtyKeys.delete(key);
        }

        // The datasource holds attribute values only; our own metadata is written below, so a report that carried
        // nothing but a new version leaves no attribute to look up and still has something to persist
        const attributeKeys = new Set<string>();
        for (const key of flushing) {
            if (!key.startsWith("__")) {
                attributeKeys.add(key);
            }
        }

        // Prefer live values from the Datasource.  After reclaimValues() the Datasource's values are empty,
        // so fall back to initialValues which holds the reclaimed data.
        let values = this.consumer?.readValues(attributeKeys);
        if (values === undefined || !Object.keys(values).length) {
            if (this.initialValues !== undefined) {
                values = {};
                for (const key of attributeKeys) {
                    if (key in this.initialValues) {
                        values[key] = this.initialValues[key];
                    }
                }
            }
        }

        if (attributeKeys.size && (values === undefined || !Object.keys(values).length)) {
            // Values vanished between marking dirty and flushing; restore keys and re-mark so the buffer
            // retries on the next cycle
            for (const key of flushing) {
                this.#dirtyKeys.add(key);
            }
            this.#buffer?.markDirty(this);
            return;
        }

        values ??= {};
        values[DatasourceCache.VERSION_KEY] = this.#version;

        try {
            if (tx && this.#localWriter) {
                await this.#localWriter.persistInTransaction(tx, this.#endpointNumber, this.#behaviorId, values);
            } else {
                await this.#localWriter?.persist(this.#endpointNumber, this.#behaviorId, values);
            }
        } catch (e) {
            // Restore keys so they are retried on the next flush
            for (const key of flushing) {
                this.#dirtyKeys.add(key);
            }
            throw e;
        }

        return flushing;
    }
}

export namespace DatasourceCache {
    /**
     * Standard key for storing the version.
     *
     * This conveys the version to the {@link Datasource}.
     */
    export const VERSION_KEY = "__version__";

    export interface Options {
        writer: RemoteWriter;
        nodeId: string;
        endpointNumber: EndpointNumber;
        behaviorId: string;
        initialValues?: Val.Struct;
        localWriter?: LocalWriter;
        buffer?: ClientCacheBuffer;
    }
}
