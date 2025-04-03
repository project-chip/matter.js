/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterId, EndpointNumber, Event, EventId, EventNumber } from "#types";
import { DecodedEventData } from "../../interaction/EventDataDecoder.js";
import { InteractionClient } from "../../interaction/InteractionClient.js";

/**
 * Factory function to create an EVentClient for a given event.
 */
export function createEventClient<T>(
    event: Event<T, any>,
    name: string,
    endpointId: EndpointNumber,
    clusterId: ClusterId,
    interactionClient: InteractionClient,
): EventClient<T> {
    return new EventClient(event, name, endpointId, clusterId, interactionClient);
}

/**
 * General class for EventClients
 */
export class EventClient<T> {
    readonly #listeners = new Array<(event: DecodedEventData<T>) => void>();
    readonly id: EventId;
    readonly #interactionClient: InteractionClient;

    constructor(
        readonly event: Event<T, any>,
        readonly name: string,
        readonly endpointId: EndpointNumber,
        readonly clusterId: ClusterId,
        interactionClient: InteractionClient,
    ) {
        this.id = event.id;
        this.#interactionClient = interactionClient;
    }

    async get(
        minimumEventNumber?: EventNumber,
        isFabricFiltered?: boolean,
    ): Promise<DecodedEventData<T>[] | undefined> {
        return await this.#interactionClient.getEvent({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            event: this.event,
            minimumEventNumber,
            isFabricFiltered,
        });
    }

    async subscribe(
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        isUrgent = true,
        minimumEventNumber?: EventNumber,
        isFabricFiltered?: boolean,
    ) {
        return await this.#interactionClient.subscribeEvent({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            event: this.event,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            isUrgent,
            minimumEventNumber,
            isFabricFiltered,
            listener: this.update.bind(this),
        });
    }

    update(newEvent: DecodedEventData<T>) {
        for (const listener of this.#listeners) {
            listener(newEvent);
        }
    }

    addListener(listener: (newValue: DecodedEventData<T>) => void) {
        this.#listeners.push(listener);
    }

    removeListener(listener: (newValue: DecodedEventData<T>) => void) {
        const entryIndex = this.#listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.#listeners.splice(entryIndex, 1);
        }
    }
}
