/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EventId } from "../../datatype/EventId.js";
import { Endpoint } from "../../device/Endpoint.js";
import { EventData, EventHandler, EventStorageData } from "../../protocol/interaction/EventHandler.js";
import { Time } from "../../time/Time.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { EventPriority } from "../Cluster.js";

// TODO Add Fabric Scoped EventServer when needed

export class EventServer<T> {
    private eventList = new Array<EventData<T>>();
    private readonly listeners = new Array<(event: EventStorageData<T>) => void>();
    protected endpoint?: Endpoint;
    protected eventHandler?: EventHandler;

    constructor(
        readonly id: EventId,
        readonly clusterId: ClusterId,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        readonly priority: EventPriority,
    ) {}

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    // TODO Try to get rid of that late binding and simply things again
    //      potentially with refactoring out MatterDevice and MatterController
    bindToEventHandler(eventHandler: EventHandler) {
        this.eventHandler = eventHandler;
        // Send all stored events to the new listener
        for (const event of this.eventList) {
            const finalEvent = this.eventHandler.pushEvent(event);
            this.listeners.forEach(listener => listener(finalEvent));
        }
        this.eventList = [];
    }

    triggerEvent(data: T) {
        if (this.endpoint === undefined || this.endpoint.id === undefined) {
            throw new InternalError("Endpoint not assigned");
        }
        const event: EventData<T> = {
            eventId: this.id,
            clusterId: this.clusterId,
            endpointId: this.endpoint.id,
            epochTimestamp: Time.nowMs(),
            priority: this.priority,
            data,
        };
        if (this.eventHandler === undefined) {
            // As long as we have no eventManager, we store the events
            this.eventList.push(event);
        } else {
            const finalEvent = this.eventHandler.pushEvent(event);
            this.listeners.forEach(listener => listener(finalEvent));
        }
    }

    addListener(listener: (event: EventStorageData<T>) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (event: EventStorageData<T>) => void) {
        const entryIndex = this.listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }
}
