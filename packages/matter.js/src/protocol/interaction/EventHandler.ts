/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageContext } from "../../storage/StorageContext.js";
import { EventPriority } from "../../cluster/Cluster.js";

const MAX_EVENTS = 10_000;

/**
 * Data of one Event
 */
export interface EventData<T> {
    endpointId: number;
    clusterId: number;
    eventId: number
    timestamp: number;
    priority: EventPriority;
    value: T;
}

/**
 * Data of an event which was triggered and stored internally
 */
interface EventStorageData<T> extends EventData<T> {
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
    }

    constructor(storage: StorageContext) {
        this.eventStorage = storage.createContext("EventHandler");
        this.eventNumber = this.eventStorage.get("lastEventNumber", this.eventNumber);
    }

    pushEvent(event: EventData<any>) {
        const eventData = {
            eventNumber: ++this.eventNumber,
            ...event,
        };
        this.events[event.priority].push(eventData);
        this.storedEventCount++;
        this.eventStorage.set("lastEventNumber", this.eventNumber);
        this.cleanUpEvents();
    }

    cleanUpEvents() {
        if (this.storedEventCount < MAX_EVENTS) return;
        const eventsToDelete = this.storedEventCount - MAX_EVENTS; // should be always 1, but lets be sure
        for (const priority of [EventPriority.Debug, EventPriority.Info, EventPriority.Critical]) {
            const events = this.events[priority];
            if (events.length > 0) {
                events.splice(0, events.length - eventsToDelete);
                return;
            }
        }
    }
}
