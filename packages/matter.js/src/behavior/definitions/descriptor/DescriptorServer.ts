/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { Part } from "../../../endpoint/Part.js";
import { Lifecycle } from "../../../endpoint/part/Lifecycle.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { IndexBehavior } from "../index/IndexBehavior.js";
import { DescriptorBehavior } from "./DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    override initialize() {
        this.part.lifecycle.changed.on(
            (type, part) => this.#applyChange(type, part)
        );

        this.state.serverList = this.#serverList;

        if (this.part.hasParts) { 
            for (const part of this.part.parts) {
                this.#monitorDestruction(part);
            }
            this.state.partsList = this.#partsList;
        }

        if (!this.state.deviceTypeList?.length) {
            const partType = this.part.type;
            this.state.deviceTypeList = [
                {
                    deviceType: partType.deviceType,
                    revision: partType.deviceRevision,
                },
            ];
        }
    }

    /**
     * Extend device type metadata.  This is a shortcut for deduped insert
     * into the deviceTypeList cluster attribute.
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
     * Process a structure change event and trigger state updates if necessary.
     */
    #applyChange(type: Lifecycle.Change, part: Part) {
        switch (type) {
            case Lifecycle.Change.Ready:
                if (!this.part.parts.has(part)) {
                    return;
                }
                this.state.partsList = this.#partsList;
                this.#monitorDestruction(part);
                break;

            case Lifecycle.Change.ServersChanged:
                if (part !== this.part) {
                    return;
                }
                this.state.serverList = this.#serverList;
                break;
        }
    }

    /**
     * Monitor part for removal.
     */
    #monitorDestruction(part: Part) {
        part.lifecycle.destroyed.once(() => {
            this.state.partsList = this.#partsList;
        });
    }

    /**
     * Computed current parts list.
     */
    get #partsList() {
        const part = this.part;

        // The presence of IndexBehavior indicates a flat namespace as
        // required by Matter standard for root and aggregator endpoints
        if (part.behaviors.has(IndexBehavior)) {
            const index = part.agent.get(IndexBehavior);
            return Object.keys(index.state.partsByNumber).map(Number.parseInt) as EndpointNumber[];
        }

        // If IndexBehavior is not present then just list direct
        // descendants
        if (part.hasParts) {
            return [ ...part.parts ].map(part => part.number) as EndpointNumber[];
        }

        return [];
    }

    /**
     * Computed current server list.
     */
    get #serverList() {
        const list = new Array<ClusterId>;
        for (const type of Object.values(this.part.behaviors.supported)) {
            const clusterId = (type as { cluster?: { id?: ClusterId }}).cluster?.id;
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
