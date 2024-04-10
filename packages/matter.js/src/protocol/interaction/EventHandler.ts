/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventPriority } from "../../cluster/Cluster.js";
import { resolveEventName } from "../../cluster/ClusterHelper.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { EventNumber } from "../../datatype/EventNumber.js";
import { Logger } from "../../log/Logger.js";
import { Storage, StorageOperationResult } from "../../storage/Storage.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { MaybePromise } from "../../util/Promises.js";
import { TlvEventFilter, TlvEventPath } from "./InteractionProtocol.js";

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
 * Class that collects all triggered events up to a certain limit of events and handle logic
 * to handle subscriptions (TBD)
 */
export class EventHandler<S extends Storage = any> {
    private eventNumber = EventNumber(0);
    private storedEventCount = 0;
    private readonly events = {
        [EventPriority.Critical]: new Array<EventStorageData<any>>(),
        [EventPriority.Info]: new Array<EventStorageData<any>>(),
        [EventPriority.Debug]: new Array<EventStorageData<any>>(),
    };
    #construction: AsyncConstruction<EventHandler>;

    get construction() {
        return this.#construction;
    }

    static async create(eventStorage: StorageContext) {
        const handler = new EventHandler(eventStorage);
        await handler.#construction;
        return handler;
    }

    constructor(private readonly eventStorage: StorageContext<S>) {
        this.#construction = AsyncConstruction(this, async () => {
            this.eventNumber = await this.eventStorage.get("lastEventNumber", this.eventNumber);
            logger.debug(`Set/Restore last event number: ${this.eventNumber}`);
        });
    }

    getEvents(eventPath: TypeFromSchema<typeof TlvEventPath>, filters?: TypeFromSchema<typeof TlvEventFilter>[]) {
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
            const eventsToCheck = this.events[priority];
            for (const event of eventsToCheck) {
                if (
                    eventFilter(event) &&
                    endpointId === event.endpointId &&
                    clusterId === event.clusterId &&
                    eventId === event.eventId
                ) {
                    events.push(event);
                }
            }
        }
        logger.debug(
            `Got ${events.length} events for ${resolveEventName(eventPath)} with filters: ${Logger.toJSON(filters)}`,
        );
        return events;
    }

    pushEvent(event: EventData<any>) {
        const eventData = {
            eventNumber: EventNumber(++this.eventNumber),
            ...event,
        };
        logger.debug(`Received event: ${Logger.toJSON(eventData)}`);
        this.events[event.priority].push(eventData);
        this.storedEventCount++;
        const setPromise = this.eventStorage.set("lastEventNumber", this.eventNumber);
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
        if (this.storedEventCount < MAX_EVENTS) return;
        const eventsToDelete = this.storedEventCount - MAX_EVENTS; // should be always 1, but let's be sure
        for (const priority of [EventPriority.Debug, EventPriority.Info, EventPriority.Critical]) {
            const events = this.events[priority];
            if (events.length > 0) {
                const removedEvents = events.splice(0, events.length - eventsToDelete);
                logger.debug(`Removed ${removedEvents.length} events from priority ${priority}`);
                return;
            }
        }
    }
}
