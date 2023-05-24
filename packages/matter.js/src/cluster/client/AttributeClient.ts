/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { Attribute } from "../Cluster.js";

export class AttributeClient<T> {
    private readonly writable: boolean;
    private readonly validator: (value: T, name: string) => void;
    private readonly listeners = new Array<(newValue: T/*, oldValue: T*/) => void>();

    constructor(
        readonly attribute: Attribute<T>,
        readonly name: string,
        readonly endpointId: number,
        readonly clusterId: number,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) {
        const { schema, writable } = attribute;
        this.writable = writable;

        const validator = typeof schema.validate === 'function' ? schema.validate.bind(schema) : undefined;
        this.validator = validator ?? (() => { /* no validation */ });
    }

    async set(value: T) {
        if (!this.writable) throw new Error(`Attribute ${this.name} is not writable`);

        this.validator(value, this.name);

        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        return await interactionClient.set<T>(this.endpointId, this.clusterId, this.attribute, value);
    }

    async get(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        return await interactionClient.get(this.endpointId, this.clusterId, this.attribute, alwaysRequestFromRemote);
    }

    async getWithVersion(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        return await interactionClient.getWithVersion(this.endpointId, this.clusterId, this.attribute, alwaysRequestFromRemote);
    }

    async subscribe(minIntervalS: number, maxIntervalS: number) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new Error("No InteractionClient available");
        }
        return await interactionClient.subscribe(this.endpointId, this.clusterId, this.attribute, minIntervalS, maxIntervalS, this.update.bind(this));
    }

    update(value: T) {
        /*const oldValue = await this.get();
        if (value !== oldValue) {
            this.validator(value, this.name);
        }*/
        this.listeners.forEach(listener => listener(value));
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
