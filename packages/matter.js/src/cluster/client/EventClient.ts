/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { Event } from "../Cluster.js";

export class EventClient<T> {
    private readonly listeners = new Array<(event: T/*, oldValue: T*/) => void>();

    constructor(
        readonly event: Event<T, any>,
        readonly name: string,
        readonly endpointId: number,
        readonly clusterId: number,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) { }

    async get(_alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        throw new Error("Not yet implemented");
        /*
        return await interactionClient.get(this.endpointId, this.clusterId, this.event, alwaysRequestFromRemote);*/
        // TODO: implement
    }

    async subscribe(_minIntervalS: number, _maxIntervalS: number) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        throw new Error("Not yet implemented");
        /*
        return await interactionClient.subscribe(this.endpointId, this.clusterId, this.attribute, minIntervalS, maxIntervalS, this.update.bind(this));*/
        // TODO implement
    }

    setInteractionClientRequestorCallback(callback: () => Promise<InteractionClient>) {
        this.getInteractionClientCallback = callback;
    }

    addListener(listener: (newValue: T/*, oldValue: T*/) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (newValue: T/*, oldValue: T*/) => void) {
        this.listeners.splice(this.listeners.findIndex(item => item === listener), 1);
    }
}
