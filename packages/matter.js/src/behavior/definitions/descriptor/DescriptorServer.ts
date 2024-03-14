/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { EndpointLifecycle } from "../../../endpoint/properties/EndpointLifecycle.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { IndexBehavior } from "../../system/index/IndexBehavior.js";
import { DescriptorBehavior } from "./DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    static override dependencies = [IndexBehavior];

    override async initialize() {
        // We update PartsList differently if there's an index
        if (this.endpoint.behaviors.has(IndexBehavior)) {
            // Note - do not use lock here because this reactor triggers frequently so it pollutes the logs.  Instead
            // lock manually as necessary
            this.reactTo(this.agent.get(IndexBehavior).events.change, this.#updatePartsList);
        } else if (this.endpoint.hasParts) {
            for (const endpoint of this.endpoint.parts) {
                this.#monitorDestruction(endpoint);
            }
        }
        await this.#updatePartsList();

        // Handle lifecycle changes
        this.reactTo(this.endpoint.lifecycle.changed, this.#updateDescriptor);

        // Initialize ServerList
        this.state.serverList = this.#serverList;

        if (!this.state.deviceTypeList.length) {
            const partType = this.endpoint.type;
            this.state.deviceTypeList = [
                {
                    deviceType: partType.deviceType,
                    revision: partType.deviceRevision,
                },
            ];
        }
    }

    /**
     * Extend device type metadata.  This is a shortcut for deduped insert into the deviceTypeList cluster attribute.
     */
    addDeviceTypes(...deviceTypes: DescriptorServer.DeviceType[]) {
        const list = this.state.deviceTypeList;
        nextInput: for (const newDeviceType of deviceTypes) {
            for (const existingDeviceType of this.state.deviceTypeList) {
                if (isDeepEqual(newDeviceType, existingDeviceType)) {
                    continue nextInput;
                }
            }
            list.push(newDeviceType);
        }
        this.state.deviceTypeList = list;
    }

    /**
     * Check for presence of a device type.
     */
    hasDeviceType(type: DeviceTypeId) {
        return this.state.deviceTypeList.findIndex(dt => dt.deviceType === type) !== -1;
    }

    /**
     * Process a structure change event and trigger state updates if necessary.
     */
    async #updateDescriptor(type: EndpointLifecycle.Change, endpoint: Endpoint) {
        switch (type) {
            case EndpointLifecycle.Change.Ready:
                if (!this.endpoint.parts.has(endpoint)) {
                    return;
                }
                await this.#updatePartsList();
                this.#monitorDestruction(endpoint);
                break;

            case EndpointLifecycle.Change.ServersChanged:
                if (endpoint !== this.endpoint) {
                    return;
                }

                await this.context.transaction.addResources(this);
                await this.context.transaction.begin();
                this.state.serverList = this.#serverList;
                break;
        }
    }

    /**
     * Monitor endpoint for removal.
     */
    #monitorDestruction(endpoint: Endpoint) {
        this.reactTo(endpoint.lifecycle.destroyed, this.#updatePartsList);
    }

    /**
     * Update the parts list.
     */
    async #updatePartsList() {
        const endpoint = this.endpoint;

        let numbers: number[];

        // The presence of IndexBehavior indicates a flat namespace as required by Matter standard for root and
        // aggregator endpoints
        if (this.agent.has(IndexBehavior)) {
            const index = this.agent.get(IndexBehavior);
            numbers = Object.keys(index.partsByNumber).map(n => Number.parseInt(n));

            // My endpoint should not appear in its own PartsList
            const pos = numbers.indexOf(this.endpoint.number);
            if (pos !== -1) {
                numbers.splice(pos, 1);
            }
        } else if (endpoint.hasParts) {
            // No IndexBehavior, just direct descendents
            numbers = [...endpoint.parts]
                .map(endpoint => (endpoint.lifecycle.hasNumber ? endpoint.number : undefined))
                .filter(n => n !== undefined) as number[];
        } else {
            // No sub-parts
            numbers = [];
        }

        numbers.sort();

        // Do a quick deep equal so we can avoid updating state since the filtering on events that trigger this function
        // is rather lazy
        if (this.state.partsList.length === numbers.length) {
            let i = numbers.length;
            for (; i < numbers.length; i++) {
                if (this.state.partsList[i] !== numbers[i]) {
                    break;
                }
            }
            if (i === numbers.length) {
                return;
            }
        }

        await this.context.transaction.addResources(this);
        await this.context.transaction.begin();

        this.state.partsList = numbers as EndpointNumber[];
    }

    /**
     * Computed current server list.
     */
    get #serverList() {
        const list = new Array<ClusterId>();
        for (const type of Object.values(this.endpoint.behaviors.supported)) {
            const clusterId = (type as { cluster?: { id?: ClusterId } }).cluster?.id;
            if (clusterId) {
                list.push(clusterId);
            }
        }
        return list;
    }
}

export namespace DescriptorServer {
    export type DeviceType = TypeFromSchema<typeof Descriptor.TlvDeviceTypeStruct>;
}
