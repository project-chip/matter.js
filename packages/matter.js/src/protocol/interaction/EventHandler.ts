/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventPriority } from "../../cluster/Cluster.js";
import { resolveEventName } from "../../cluster/ClusterHelper.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
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
    eventNumber: number;
}

/**
 * Class that collects all triggered events up to a certain limit of events and handle logic
 * to handle subscriptions (TBD)
 */
export class EventHandler {
    private readonly eventStorage: StorageContext;
    private eventNumber = 0;
    private storedEventCount = 0;
    private readonly events = {
        [EventPriority.Critical]: new Array<EventStorageData<any>>(),
        [EventPriority.Info]: new Array<EventStorageData<any>>(),
        [EventPriority.Debug]: new Array<EventStorageData<any>>(),
    };

    constructor(storage: StorageContext) {
        this.eventStorage = storage.createContext("EventHandler");
        this.eventNumber = this.eventStorage.get("lastEventNumber", this.eventNumber);
        logger.debug(`Set/Restore last event number: ${this.eventNumber}`);
    }

    getEvents(eventPath: TypeFromSchema<typeof TlvEventPath>, filters?: TypeFromSchema<typeof TlvEventFilter>[]) {
        const eventFilter = filters
            ? (event: EventStorageData<any>) =>
                  filters.some(filter => filter.eventMin !== undefined && event.eventNumber >= filter.eventMin)
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
            eventNumber: ++this.eventNumber,
            ...event,
        };
        logger.debug(`Received event: ${JSON.stringify(eventData)}`);
        this.events[event.priority].push(eventData);
        this.storedEventCount++;
        this.eventStorage.set("lastEventNumber", this.eventNumber);
        this.cleanUpEvents();
        return eventData;
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
