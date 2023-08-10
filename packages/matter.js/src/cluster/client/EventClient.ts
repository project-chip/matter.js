/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { DecodedEventData } from "../../protocol/interaction/EventDataDecoder.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { Event } from "../Cluster.js";

export class EventClient<T> {
    private readonly listeners = new Array<(event: DecodedEventData<T>) => void>();

    constructor(
        readonly event: Event<T, any>,
        readonly name: string,
        readonly endpointId: EndpointNumber,
        readonly clusterId: ClusterId,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) {}

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
