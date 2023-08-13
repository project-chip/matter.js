/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { EventId } from "../../datatype/EventId.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { Event } from "../Cluster.js";

/**
 * Factory function to create an EVentClient for a given event.
 */
export function createEventClient<T>(
    event: Event<T, any>,
    name: string,
    endpointId: EndpointNumber,
    clusterId: ClusterId,
    getInteractionClientCallback: () => Promise<InteractionClient>,
    present = false,
): EventClient<T> {
    if (event.unknown) {
        return new UnknownPresentEventClient(event, name, endpointId, clusterId, getInteractionClientCallback);
    }
    if (present) {
        return new PresentEventClient(event, name, endpointId, clusterId, getInteractionClientCallback);
    }
    return new EventClient(event, name, endpointId, clusterId, getInteractionClientCallback);
}

/**
 * General class for EventClients
 */
export class EventClient<T> {
    private readonly listeners = new Array<(event: DecodedEventData<T>) => void>();
    readonly id: EventId;

    constructor(
        readonly event: Event<T, any>,
        readonly name: string,
        readonly endpointId: EndpointNumber,
        readonly clusterId: ClusterId,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) {
        this.id = event.id;
    }

    async get(
        minimumEventNumber?: number | bigint,
        isFabricFiltered?: boolean,
    ): Promise<DecodedEventData<T>[] | undefined> {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getEvent(
            this.endpointId,
            this.clusterId,
            this.event,
            minimumEventNumber,
            isFabricFiltered,
        );
    }

    async subscribe(
        minIntervalS: number,
        maxIntervalS: number,
        isUrgent = true,
        minimumEventNumber?: number | bigint,
        isFabricFiltered?: boolean,
    ) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.subscribeEvent(
            this.endpointId,
            this.clusterId,
            this.event,
            minIntervalS,
            maxIntervalS,
            isUrgent,
            minimumEventNumber,
            isFabricFiltered,
            this.update.bind(this),
        );
    }

    setInteractionClientRequestorCallback(callback: () => Promise<InteractionClient>) {
        this.getInteractionClientCallback = callback;
    }

    update(newEvent: DecodedEventData<T>) {
        for (const listener of this.listeners) {
            listener(newEvent);
        }
    }

    addListener(listener: (newValue: DecodedEventData<T>) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (newValue: DecodedEventData<T>) => void) {
        const entryIndex = this.listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }
}

/**
 * Special EventClient class to allow identifying events that are present because reported by the Devices.
 */
export class PresentEventClient<T> extends EventClient<T> {}

/**
 * Special EventClient class to allow identifying events that are present because reported by the Devices,
 * but the contained event is unknown.
 */
export class UnknownPresentEventClient extends EventClient<any> {}
