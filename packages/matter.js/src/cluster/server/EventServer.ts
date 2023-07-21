/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TlvSchema } from "../../tlv/TlvSchema.js";
import { Endpoint } from "../../device/Endpoint.js";
import { EventPriority } from "../Cluster.js";
import { EventData } from "../../protocol/interaction/EventHandler.js";
import { Time } from "../../time/Time.js";

export class EventServer<T> {
    private eventList = new Array<EventData<T>>();
    private readonly listeners = new Array<(event: EventData<T>) => void>();
    protected endpoint?: Endpoint;

    constructor(
        readonly id: number,
        readonly clusterId: number,
        readonly name: string,
        readonly schema: TlvSchema<T>,
        readonly priority: EventPriority,
    ) { }

    assignToEndpoint(endpoint: Endpoint) {
        this.endpoint = endpoint;
    }

    triggerEvent(value: T) {
        if (this.endpoint === undefined || this.endpoint.id === undefined) {
            throw new Error("Endpoint not assigned");
        }
        const event: EventData<T> = {
            eventId: this.id,
            clusterId: this.clusterId,
            endpointId: this.endpoint.id,
            timestamp: Time.nowMs(),
            priority: this.priority,
            value,
        };
        this.eventList.push(event);
        this.listeners.forEach(listener => listener(event));
    }

    addListener(listener: (event: EventData<T>) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (event: EventData<T>) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}
