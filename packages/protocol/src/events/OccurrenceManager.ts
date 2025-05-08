/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    asyncNew,
    Construction,
    Diagnostic,
    ImplementationError,
    InternalError,
    isObject,
    Logger,
    MatterAggregateError,
    MaybePromise,
} from "#general";
import { EventNumber, FabricIndex, resolveEventName, TlvEventFilter, TlvEventPath, TypeFromSchema } from "#types";
import { EventStore, OccurrenceSummary } from "./EventStore.js";
import { NumberedOccurrence, Occurrence } from "./Occurrence.js";

const logger = Logger.get("OccurrenceManager");

export interface OccurrenceManagerContext {
    store: EventStore;

    bufferConfig?: OccurrenceManager.BufferConfig;
}

/**
 * Manages event occurrences.
 *
 * Each time an event is triggered it is stored as an {@link Occurrence} in this manager.  Occurrences are persisted in
 * an {@link EventStore} and may be retrieved using Matter query semantics.
 *
 * Drops occurrences when the store becomes too full as configured by {@link OccurrenceManager.BufferConfig}.
 *
 * TODO - query is extremely inefficient.  For new code paths should build internal index and bypass EventServer to
 * deliver query in wire form directly here
 */
export class OccurrenceManager {
    #store: EventStore;
    #storedEventCount = 0;
    #bufferConfig: OccurrenceManager.BufferConfig;
    #cull?: Promise<void>;

    // As we don't (yet) have storage with secondary indices we currently maintain indices in memory regardless of
    // whether underlying store is volatile
    readonly #occurrences = new Array<OccurrenceSummary>();

    #construction: Construction<OccurrenceManager>;

    get construction() {
        return this.#construction;
    }

    static async create(context: OccurrenceManagerContext) {
        return asyncNew(OccurrenceManager, context);
    }

    constructor({ store, bufferConfig }: OccurrenceManagerContext) {
        if (bufferConfig === undefined) {
            bufferConfig = OccurrenceManager.DefaultBufferConfig;
        }

        const { minEventAllowance, maxEventAllowance } = bufferConfig;

        if (maxEventAllowance < minEventAllowance) {
            throw new ImplementationError(
                `Maximum allowance ${maxEventAllowance} is less than minimum allowance ${minEventAllowance}`,
            );
        }

        this.#store = store;
        this.#bufferConfig = bufferConfig;

        this.#construction = Construction(this, () => {
            return MaybePromise.then(this.#store.load(), index => {
                this.#storedEventCount = index.length;
                // To be sure, sort the entries by number
                index.sort(
                    // sort that way because Bigint & Number mix
                    ({ number: numberA }, { number: numberB }) => (numberA < numberB ? -1 : numberA > numberB ? 1 : 0),
                );
                this.#occurrences.push(...index);
                if (this.#occurrences.length > this.#bufferConfig.minEventAllowance) {
                    this.#startCull();
                }
            });
        });
    }

    async clear() {
        await this.construction;
        await this.#store.clear();
        this.#storedEventCount = 0;
        this.#occurrences.length = 0;
    }

    /**
     * Find the index of the first event number in the list that is greater than or equal to eventMin to optimize
     * searching.
     */
    #findMinEventNumberIndex(eventMin: EventNumber) {
        // if the list is empty or the eventMin is less than the last event number, no entry is relevant

        if (this.#occurrences.length === 0 || eventMin > this.#occurrences[this.#occurrences.length - 1].number) {
            return -1;
        }
        if (eventMin <= this.#occurrences[0].number) {
            return 0; // The first event number is greater than or equal to eventMin, so all entries are relevant
        }

        let low = this.#occurrences.length - 1;
        let high = low;
        let step = 1;

        // Because it is more likely that events we want are in the upper ranges we first fine a starting point from there
        while (low > 0 && this.#occurrences[low].number >= eventMin) {
            high = low;
            low = Math.max(0, low - step);
            step *= 2; // increase the step size to skip more entries
        }

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this.#occurrences[mid].number < eventMin) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low; // The index of the first event number that is greater than or equal to eventMin
    }

    /**
     * Query the event store for events matching the given path and filters.
     * @deprecated
     */
    query(
        eventPath: TypeFromSchema<typeof TlvEventPath>,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
        filterForFabricIndex?: FabricIndex,
    ): MaybePromise<NumberedOccurrence[]> {
        if (filters !== undefined && filters.length > 1) {
            throw new InternalError("Multiple filters not supported");
        }
        // Search the index and load applicable events
        const startIndex = filters?.length ? this.#findMinEventNumberIndex(EventNumber(filters[0].eventMin)) : 0;
        if (startIndex === -1) {
            return []; // No entry matches the filter
        }

        let isAsyncLoad = false;
        const { endpointId, clusterId, eventId } = eventPath;
        const occurrences = new Array<MaybePromise<NumberedOccurrence>>();
        for (let i = startIndex; i < this.#occurrences.length; i++) {
            const entry = this.#occurrences[i];
            if (endpointId === entry.endpointId && clusterId === entry.clusterId && eventId === entry.eventId) {
                let occurrence = this.#store.get(entry.number) as MaybePromise<NumberedOccurrence>;
                occurrence = MaybePromise.then(occurrence, occurrence => {
                    occurrence.number = entry.number;
                    return occurrence;
                });
                occurrences.push(occurrence);
                if (MaybePromise.is(occurrence)) {
                    isAsyncLoad = true;
                }
            }
        }

        // TODO - log after fabric filtering and include fabric filter in log message?
        logger.debug(
            `Got ${occurrences.length} events for ${resolveEventName(eventPath)} with filters: ${Diagnostic.json(filters)}`,
        );

        // Convert from MaybePromise[] to MaybePromise<[]>
        let result: MaybePromise<NumberedOccurrence[]>;
        if (isAsyncLoad) {
            result = Promise.all(occurrences);
        } else {
            result = occurrences as NumberedOccurrence[];
        }

        // Apply fabric filtering if required
        if (filterForFabricIndex !== undefined) {
            result = MaybePromise.then(result, (occurrences: NumberedOccurrence[]) =>
                occurrences.filter(({ payload }) => {
                    if (!isObject(payload)) {
                        return true;
                    }
                    const { fabricIndex } = payload;
                    return fabricIndex === undefined || fabricIndex === filterForFabricIndex;
                }),
            );
        }

        // Log result
        result = MaybePromise.then(result, occurrences => {
            let filterDesc;
            if (filters?.length) {
                filterDesc = filters.map(({ nodeId, eventMin }) => `${nodeId}:${eventMin}`).join(",");
            }
            if (filterForFabricIndex) {
                if (filterDesc !== undefined) {
                    filterDesc = `${filterDesc} and fabric #${filterForFabricIndex}`;
                } else {
                    filterDesc = `fabric #${filterForFabricIndex}`;
                }
            }

            if (filterDesc) {
                filterDesc = ` (filters: ${filterDesc})`;
            } else {
                filterDesc = "";
            }

            logger.debug(
                `Loaded ${occurrences.length} occurrence${occurrences.length === 1 ? "" : "s"} for ${resolveEventName(eventPath)}${filterDesc}`,
            );
            return occurrences;
        });

        return result;
    }

    /**
     * Return an iterator over all occurrences in the store that are bigger or equal to the minimum eventNumber,
     * if provided.
     */
    async *get(eventMin?: EventNumber) {
        const startIndex = eventMin === undefined ? 0 : this.#findMinEventNumberIndex(eventMin);
        if (startIndex === -1) {
            return; // No entry matches the filter
        }
        for (let i = startIndex; i < this.#occurrences.length; i++) {
            const eventNumber = this.#occurrences[i].number;
            const occurrence = this.#store.get(eventNumber);
            if (MaybePromise.is(occurrence)) {
                yield {
                    ...(await occurrence),
                    number: eventNumber,
                };
            } else {
                yield {
                    ...occurrence,
                    number: eventNumber,
                };
            }
        }
    }

    close(): MaybePromise<void> {
        MaybePromise.then(this.#cull, () => this.#store.close());
    }

    add(occurrence: Occurrence): MaybePromise<NumberedOccurrence> {
        return MaybePromise.then(this.#store.add(occurrence), entry => {
            logger.debug(`Recorded event #${entry.number}: ${Diagnostic.json(occurrence)}`);
            this.#occurrences.push(entry);
            this.#storedEventCount++;
            if (this.#storedEventCount > this.#bufferConfig.maxEventAllowance) {
                this.#startCull();
            }
            return {
                number: entry.number,
                ...occurrence,
            };
        });
    }

    #startCull() {
        if (this.#cull) {
            return;
        }
        const cull = this.#dropOldOccurrences();
        if (MaybePromise.is(cull)) {
            this.#cull = Promise.resolve(cull).finally(() => (this.#cull = undefined));
        }
    }

    #dropOldOccurrences() {
        const count = this.#storedEventCount - this.#bufferConfig.minEventAllowance;
        if (count <= 0) {
            return;
        }

        logger.debug(`Event store is full; dropping ${count} old occurrence${count === 1 ? "s" : ""}`);

        const asyncDrops = Array<PromiseLike<void>>();

        for (const entry of this.#occurrences.splice(0, count)) {
            const drop = MaybePromise.catch(this.#store.delete(entry.number), error =>
                logger.warn(`Error dropping occurrence #${entry}: ${error}`),
            );
            if (MaybePromise.is(drop)) {
                asyncDrops.push(drop);
            }
        }
        this.#storedEventCount = this.#occurrences.length;

        if (asyncDrops.length) {
            return MatterAggregateError.allSettled(asyncDrops, "Error dropping occurrences")
                .then(() => {})
                .catch(error => logger.error(error));
        }
    }
}

export namespace OccurrenceManager {
    /**
     * Buffer management configuration.  Controls
     */
    export interface BufferConfig {
        /**
         * The minimum number of events that will be buffered.
         */
        minEventAllowance: number;

        /**
         * The maximum number of events that will be buffered.
         *
         * When the buffer hits this size the manager discard events to reduce the buffer size to
         * {@link minimumEventAllowance}.
         */
        maxEventAllowance: number;
    }

    export const DefaultBufferConfig: BufferConfig = {
        minEventAllowance: 10_000,
        maxEventAllowance: 11_000,
    };
}
