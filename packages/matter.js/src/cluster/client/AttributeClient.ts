/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { Attribute, AttributeError } from "../Cluster.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { Globals } from "../../model/index.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { NoAssociatedFabricError } from "../../session/SecureSession.js";
import { tryCatch } from "../../common/TryCatchHandler.js";
import { InternalError } from "../../common/MatterError.js";

export class AttributeClient<T> {
    private readonly isWritable: boolean;
    private readonly isFabricScoped: boolean;
    protected readonly schema: TlvSchema<any>;
    private readonly listeners = new Array<(newValue: T) => void>();

    constructor(
        readonly attribute: Attribute<T, any>,
        readonly name: string,
        readonly endpointId: number,
        readonly clusterId: number,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) {
        const { schema, writable, fabricScoped } = attribute;
        this.schema = schema;
        this.isWritable = writable;
        this.isFabricScoped = fabricScoped;
    }

    async set(value: T) {
        if (!this.isWritable) throw new AttributeError(`Attribute ${this.name} is not writable`);

        this.schema.validate(value);

        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }

        if (this.isFabricScoped) {
            // Remove fabric index from structures if the OMIT_FABRIC instance was used (Should be used for all outgoing writes)
            value = this.schema.removeField(
                value,
                <number>Globals.FabricIndex.id,
                (existingFieldIndex) => existingFieldIndex === FabricIndex.OMIT_FABRIC
            );
            value = tryCatch(() => {
                const sessionFabric = interactionClient.session.getAssociatedFabric();
                // also remove fabric index if it is the same as the session fabric
                return this.schema.removeField(
                    value,
                    <number>Globals.FabricIndex.id,
                    (existingFieldIndex) => existingFieldIndex.index === sessionFabric.fabricIndex.index
                );
            }, NoAssociatedFabricError, value);
        }

        return await interactionClient.set<T>(this.endpointId, this.clusterId, this.attribute, value);
    }

    async get(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.get(this.endpointId, this.clusterId, this.attribute, alwaysRequestFromRemote);
    }

    async getWithVersion(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getWithVersion(this.endpointId, this.clusterId, this.attribute, alwaysRequestFromRemote);
    }

    async subscribe(minIntervalS: number, maxIntervalS: number) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.subscribe(this.endpointId, this.clusterId, this.attribute, minIntervalS, maxIntervalS, this.update.bind(this));
    }

    update(value: T) {
        this.listeners.forEach(listener => listener(value));
    }

    setInteractionClientRequestorCallback(callback: () => Promise<InteractionClient>) {
        this.getInteractionClientCallback = callback;
    }

    addListener(listener: (newValue: T) => void) {
        this.listeners.push(listener);
    }

    removeListener(listener: (newValue: T) => void) {
        const entryIndex = this.listeners.findIndex(item => item === listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }
}
