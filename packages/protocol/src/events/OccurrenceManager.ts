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
    isObject,
    Logger,
    MatterAggregateError,
    MaybePromise,
} from "#general";
import {
    EventNumber,
    EventPriority,
    FabricIndex,
    resolveEventName,
    TlvEventFilter,
    TlvEventPath,
    TypeFromSchema,
} from "#types";
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
    readonly #occurrences = {
        [EventPriority.Critical]: new Array<OccurrenceSummary>(),
        [EventPriority.Info]: new Array<OccurrenceSummary>(),
        [EventPriority.Debug]: new Array<OccurrenceSummary>(),
    };

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

        const totalPriorityAllowance = Object.values(bufferConfig.minPriorityEventAllowance).reduce(
            (sum, value) => sum + value,
            0,
        );
        if (totalPriorityAllowance > minEventAllowance) {
            throw new ImplementationError(
                `Total priority allowance ${totalPriorityAllowance} is greater than minimum allowance of ${minEventAllowance}`,
            );
        }

        this.#store = store;
        this.#bufferConfig = bufferConfig;

        this.#construction = Construction(this, () => {
            return MaybePromise.then(this.#store.load(), index => {
                this.#storedEventCount = index.length;
                for (const entry of index) {
                    this.#occurrences[entry.priority].push(entry);
                }
            });
        });
    }

    async clear() {
        await this.construction;
        await this.#store.clear();
        this.#storedEventCount = 0;
        for (const list of Object.values(this.#occurrences)) {
            list.length = 0;
        }
    }

    query(
        eventPath: TypeFromSchema<typeof TlvEventPath>,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
        filterForFabricIndex?: FabricIndex,
    ): MaybePromise<NumberedOccurrence[]> {
        const entryFilter =
            filters !== undefined && filters.length > 0
                ? (event: OccurrenceSummary) =>
                      filters.some(
                          filter => filter.eventMin !== undefined && event.number >= EventNumber(filter.eventMin),
                      )
                : undefined; // TODO - filter on node ID too?

        // Search the index and load applicable events
        let isAsyncLoad = false;
        const occurrences = new Array<MaybePromise<NumberedOccurrence>>();
        const { endpointId, clusterId, eventId } = eventPath;
        for (const priority of [EventPriority.Critical, EventPriority.Info, EventPriority.Debug]) {
            const entriesToCheck = this.#occurrences[priority];
            for (const entry of entriesToCheck) {
                if (endpointId === entry.endpointId && clusterId === entry.clusterId && eventId === entry.eventId) {
                    if (entryFilter?.(entry) !== false) {
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

    close(): MaybePromise<void> {
        MaybePromise.then(this.#cull, () => this.#store.close());
    }

    add(occurrence: Occurrence): MaybePromise<NumberedOccurrence> {
        return MaybePromise.then(this.#store.add(occurrence), entry => {
            logger.debug(`Recorded event #${entry.number}: ${Diagnostic.json(occurrence)}`);
            this.#occurrences[occurrence.priority].push(entry);
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
        let count = this.#storedEventCount - this.#bufferConfig.minEventAllowance;
        if (count <= 0) {
            return;
        }

        logger.debug(`Event store is full; dropping ${count} old occurrence${count === 1 ? "s" : ""}`);

        const asyncDrops = Array<PromiseLike<void>>();

        let totalCulled = 0;
        for (const priority of [EventPriority.Debug, EventPriority.Info, EventPriority.Critical]) {
            const occurrences = this.#occurrences[priority];
            const reservation = this.#bufferConfig.minPriorityEventAllowance[PriorityNames[priority]];
            let countThisPriority = 0;
            while (count && occurrences.length > reservation) {
                count--;
                countThisPriority++;
            }

            totalCulled += countThisPriority;
            for (const entry of occurrences.splice(0, countThisPriority)) {
                const drop = MaybePromise.catch(this.#store.delete(entry.number), error =>
                    logger.warn(`Error dropping occurrence #${entry}: ${error}`),
                );
                if (MaybePromise.is(drop)) {
                    asyncDrops.push(drop);
                }
            }

            if (!count) {
                break;
            }
        }
        this.#storedEventCount -= totalCulled;

        if (asyncDrops.length) {
            return MatterAggregateError.allSettled(asyncDrops, "Error dropping occurrences")
                .then(() => {})
                .catch(error => logger.error(error));
        }
    }
}

const PriorityNames = {
    [EventPriority.Critical]: "critical",
    [EventPriority.Info]: "info",
    [EventPriority.Debug]: "debug",
} as const;

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

        /**
         * Minimum allowances by priority.  This ensures a minimum number of events for each priority avoid LRU
         * harvesting.
         */
        minPriorityEventAllowance: {
            critical: number;
            info: number;
            debug: number;
        };
    }

    export const DefaultBufferConfig: BufferConfig = {
        minEventAllowance: 10_000,
        maxEventAllowance: 11_000,
        minPriorityEventAllowance: {
            critical: 2_000,
            info: 2_000,
            debug: 2_000,
        },
    };
}
