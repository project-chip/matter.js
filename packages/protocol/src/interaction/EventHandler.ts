/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Construction,
    Environment,
    Environmental,
    Logger,
    MaybePromise,
    Storage,
    StorageContext,
    StorageManager,
    StorageOperationResult,
} from "#general";
import {
    ClusterId,
    EndpointNumber,
    EventId,
    EventNumber,
    EventPriority,
    FabricIndex,
    resolveEventName,
    TlvEventFilter,
    TlvEventPath,
    TypeFromSchema,
} from "#types";

const logger = Logger.get("EventHandler");

const MAX_EVENTS = 10_000;

/**
 * Data of one Event
 */
export interface EventData<T> {
    endpointId: EndpointNumber;
    clusterId: ClusterId;
    eventId: EventId;
    epochTimestamp: number;
    priority: EventPriority;
    data: T;
}

/**
 * Data of an event which was triggered and stored internally
 */
export interface EventStorageData<T> extends EventData<T> {
    eventNumber: EventNumber;
}

/**
 * Class that collects all triggered events up to a certain limit of events and handle logic to handle subscriptions
 * (TBD)
 */
export class EventHandler<S extends Storage = any> {
    #eventNumber = EventNumber(0);
    #storedEventCount = 0;
    #eventStorage: StorageContext;
    readonly #events = {
        [EventPriority.Critical]: new Array<EventStorageData<any>>(),
        [EventPriority.Info]: new Array<EventStorageData<any>>(),
        [EventPriority.Debug]: new Array<EventStorageData<any>>(),
    };
    #construction: Construction<EventHandler>;

    get construction() {
        return this.#construction;
    }

    static async create(eventStorage: StorageContext) {
        const handler = new EventHandler(eventStorage);
        await handler.#construction;
        return handler;
    }

    static [Environmental.create](env: Environment) {
        const instance = new EventHandler(env.get(StorageManager).createContext("events"));
        env.set(EventHandler, instance);
        return instance;
    }

    constructor(eventStorage: StorageContext<S>) {
        this.#eventStorage = eventStorage;
        this.#construction = Construction(this, async () => {
            this.#eventNumber = await this.#eventStorage.get("lastEventNumber", this.#eventNumber);
            logger.debug(`Set/Restore last event number: ${this.#eventNumber}`);
        });
    }

    async clear() {
        await this.construction;
        await this.#eventStorage.clear();
        this.#eventNumber = EventNumber(0);
        this.#storedEventCount = 0;
        for (const list of Object.values(this.#events)) {
            list.length = 0;
        }
    }

    getEvents(
        eventPath: TypeFromSchema<typeof TlvEventPath>,
        filters?: TypeFromSchema<typeof TlvEventFilter>[],
        filterForFabricIndex?: FabricIndex,
    ) {
        const eventFilter =
            filters !== undefined && filters.length > 0
                ? (event: EventStorageData<any>) =>
                      filters.some(
                          filter => filter.eventMin !== undefined && event.eventNumber >= EventNumber(filter.eventMin),
                      )
                : () => true; // TODO also add Node Id check
        const events = new Array<EventStorageData<any>>();
        const { endpointId, clusterId, eventId } = eventPath;
        for (const priority of [EventPriority.Critical, EventPriority.Info, EventPriority.Debug]) {
            const eventsToCheck = this.#events[priority];
            for (const event of eventsToCheck) {
                if (endpointId === event.endpointId && clusterId === event.clusterId && eventId === event.eventId) {
                    if (eventFilter(event)) {
                        events.push(event);
                    }
                }
            }
        }
        logger.debug(
            `Got ${events.length} events for ${resolveEventName(eventPath)} with filters: ${Logger.toJSON(filters)}`,
        );

        if (filterForFabricIndex !== undefined) {
            return events.filter(({ data }) => !("fabricIndex" in data) || data.fabricIndex === filterForFabricIndex);
        }

        return events;
    }

    pushEvent(event: EventData<any>) {
        const eventData = {
            eventNumber: EventNumber(++this.#eventNumber),
            ...event,
        };
        logger.debug(`Received event: ${Logger.toJSON(eventData)}`);
        this.#events[event.priority].push(eventData);
        this.#storedEventCount++;
        const setPromise = this.#eventStorage.set("lastEventNumber", this.#eventNumber);
        if (MaybePromise.is(setPromise)) {
            return setPromise.then(() => {
                this.cleanUpEvents();
                return eventData;
            }) as StorageOperationResult<S, EventStorageData<any>>;
        }
        this.cleanUpEvents();
        return eventData as StorageOperationResult<S, EventStorageData<any>>;
    }

    cleanUpEvents() {
        if (this.#storedEventCount < MAX_EVENTS) return;
        const eventsToDelete = this.#storedEventCount - MAX_EVENTS; // should be always 1, but let's be sure
        for (const priority of [EventPriority.Debug, EventPriority.Info, EventPriority.Critical]) {
            const events = this.#events[priority];
            if (events.length > 0) {
                const removedEvents = events.splice(0, events.length - eventsToDelete);
                logger.debug(`Removed ${removedEvents.length} events from priority ${priority}`);
                return;
            }
        }
    }
}
