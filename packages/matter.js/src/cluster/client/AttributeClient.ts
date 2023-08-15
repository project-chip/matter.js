/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { tryCatch } from "../../common/TryCatchHandler.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Globals } from "../../model/index.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { NoAssociatedFabricError } from "../../session/SecureSession.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { Attribute, AttributeError } from "../Cluster.js";

export class AttributeClient<T> {
    private readonly isWritable: boolean;
    private readonly isFabricScoped: boolean;
    protected readonly schema: TlvSchema<any>;
    private readonly listeners = new Array<(newValue: T) => void>();

    constructor(
        readonly attribute: Attribute<T, any>,
        readonly name: string,
        readonly endpointId: EndpointNumber,
        readonly clusterId: ClusterId,
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
                existingFieldIndex => existingFieldIndex === FabricIndex.OMIT_FABRIC,
            );
            value = tryCatch(
                () => {
                    const sessionFabric = interactionClient.session.getAssociatedFabric();
                    // also remove fabric index if it is the same as the session fabric
                    return this.schema.removeField(
                        value,
                        <number>Globals.FabricIndex.id,
                        existingFieldIndex => existingFieldIndex.index === sessionFabric.fabricIndex,
                    );
                },
                NoAssociatedFabricError,
                value,
            );
        }

        return await interactionClient.setAttribute<T>({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            value,
        });
    }

    async get(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getAttribute({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            alwaysRequestFromRemote,
        });
    }

    async getWithVersion(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getAttributeWithVersion({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            alwaysRequestFromRemote,
        });
    }

    async subscribe(
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        knownDataVersion?: number,
        isFabricFiltered = true,
    ) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.subscribeAttribute({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            minIntervalFloorSeconds,
            maxIntervalCeilingSeconds,
            isFabricFiltered,
            knownDataVersion,
            listener: this.update.bind(this),
        });
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
        const entryIndex = this.listeners.indexOf(listener);
        if (entryIndex !== -1) {
            this.listeners.splice(entryIndex, 1);
        }
    }
}
