/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
    interactionClient: InteractionClient,
    present = false,
): AttributeClient<T> {
    if (attribute.unknown) {
        return new UnknownPresentAttributeClient(attribute, name, endpointId, clusterId, interactionClient);
    }
    if (present) {
        return new PresentAttributeClient(attribute, name, endpointId, clusterId, interactionClient);
    }
    return new AttributeClient(attribute, name, endpointId, clusterId, interactionClient);
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
        private readonly interactionClient: InteractionClient,
    ) {
        const { schema, writable, fabricScoped, id } = attribute;
        this.schema = schema;
        this.isWritable = writable;
        this.isFabricScoped = fabricScoped;
        this.id = id;
    }

    /**
     * Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
     * cluster dataVersion of the server matches. If it does not match it is rejected with an Error.
     */
    async set(value: T, dataVersion?: number) {
        if (!this.isWritable) throw new AttributeError(`Attribute ${this.name} is not writable`);

        this.schema.validate(value);

        if (this.isFabricScoped) {
            // Remove fabric index from structures if the OMIT_FABRIC instance was used (Should be used for all outgoing writes)
            value = this.schema.removeField(
                value,
                <number>Globals.FabricIndex.id,
                existingFieldIndex => existingFieldIndex === FabricIndex.OMIT_FABRIC,
            );
            value = tryCatch(
                () => {
                    const sessionFabric = this.interactionClient.session.getAssociatedFabric();
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

        return await this.interactionClient.setAttribute<T>({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            value,
            dataVersion,
        });
    }

    /** Get the value of the attribute. Fabric scoped reads are always done with the remote. */
    async get(alwaysRequestFromRemote?: boolean, isFabricFiltered = true) {
        if (alwaysRequestFromRemote === undefined) {
            alwaysRequestFromRemote = this.isFabricScoped;
        } else if (!alwaysRequestFromRemote && this.isFabricScoped) {
            alwaysRequestFromRemote = true;
        }
        return await this.interactionClient.getAttribute({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            isFabricFiltered,
            alwaysRequestFromRemote,
        });
    }

    /**
     * Get the value with version of the attribute. Fabric scoped reads are always done with the remote.
     * */
    async getWithVersion(alwaysRequestFromRemote?: boolean, isFabricFiltered = true) {
        if (alwaysRequestFromRemote === undefined) {
            alwaysRequestFromRemote = this.isFabricScoped;
        } else if (!alwaysRequestFromRemote && this.isFabricScoped) {
            alwaysRequestFromRemote = true;
        }
        return await this.interactionClient.getAttributeWithVersion({
            endpointId: this.endpointId,
            clusterId: this.clusterId,
            attribute: this.attribute,
            isFabricFiltered,
            alwaysRequestFromRemote,
        });
    }

    /** Subscribe to the attribute. */
    async subscribe(
        minIntervalFloorSeconds: number,
        maxIntervalCeilingSeconds: number,
        knownDataVersion?: number,
        isFabricFiltered = true,
    ) {
        return await this.interactionClient.subscribeAttribute({
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

    /**
     * Update the value of the attribute. Just internally used!
     * @private
     */
    update(value: T) {
        this.listeners.forEach(listener => listener(value));
    }

    /** Add a listener to the attribute. */
    addListener(listener: (newValue: T) => void) {
        this.listeners.push(listener);
    }

    /** Remove a listener from the attribute. */
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
