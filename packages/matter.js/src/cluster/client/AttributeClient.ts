/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { tryCatch } from "../../common/TryCatchHandler.js";
import { AttributeId } from "../../datatype/AttributeId.js";
import { ClusterId } from "../../datatype/ClusterId.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Globals } from "../../model/index.js";
import { InteractionClient } from "../../protocol/interaction/InteractionClient.js";
import { NoAssociatedFabricError } from "../../session/SecureSession.js";
import { TlvSchema } from "../../tlv/TlvSchema.js";
import { Attribute, AttributeError } from "../Cluster.js";

/**
 * Factory function to create an AttributeClient for a given attribute.
 */
export function createAttributeClient<T>(
    attribute: Attribute<T, any>,
    name: string,
    endpointId: EndpointNumber,
    clusterId: ClusterId,
    getInteractionClientCallback: () => Promise<InteractionClient>,
    present = false,
): AttributeClient<T> {
    if (attribute.unknown) {
        return new UnknownPresentAttributeClient(attribute, name, endpointId, clusterId, getInteractionClientCallback);
    }
    if (present) {
        return new PresentAttributeClient(attribute, name, endpointId, clusterId, getInteractionClientCallback);
    }
    return new AttributeClient(attribute, name, endpointId, clusterId, getInteractionClientCallback);
}

/**
 * General class for AttributeClients
 */
export class AttributeClient<T> {
    private readonly isWritable: boolean;
    private readonly isFabricScoped: boolean;
    protected readonly schema: TlvSchema<any>;
    private readonly listeners = new Array<(newValue: T) => void>();
    readonly id: AttributeId;

    constructor(
        readonly attribute: Attribute<T, any>,
        readonly name: string,
        readonly endpointId: EndpointNumber,
        readonly clusterId: ClusterId,
        private getInteractionClientCallback: () => Promise<InteractionClient>,
    ) {
        const { schema, writable, fabricScoped, id } = attribute;
        this.schema = schema;
        this.isWritable = writable;
        this.isFabricScoped = fabricScoped;
        this.id = id;
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

        return await interactionClient.setAttribute<T>(this.endpointId, this.clusterId, this.attribute, value);
    }

    async get(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getAttribute(
            this.endpointId,
            this.clusterId,
            this.attribute,
            alwaysRequestFromRemote,
        );
    }

    async getWithVersion(alwaysRequestFromRemote = false) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.getAttributeWithVersion(
            this.endpointId,
            this.clusterId,
            this.attribute,
            alwaysRequestFromRemote,
        );
    }

    async subscribe(minIntervalS: number, maxIntervalS: number, isFabricFiltered?: boolean) {
        const interactionClient = await this.getInteractionClientCallback();
        if (interactionClient === undefined) {
            throw new InternalError("No InteractionClient available");
        }
        return await interactionClient.subscribeAttribute(
            this.endpointId,
            this.clusterId,
            this.attribute,
            minIntervalS,
            maxIntervalS,
            isFabricFiltered,
            this.update.bind(this),
        );
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

/**
 * Special AttributeClient class to allow identifying attributes that are present because reported by the Devices.
 */
export class PresentAttributeClient<T> extends AttributeClient<T> {}

/**
 * Special AttributeClient class to allow identifying attributes that are present because reported by the Devices,
 * but the contained attribute is unknown.
 */
export class UnknownPresentAttributeClient extends PresentAttributeClient<any> {}
