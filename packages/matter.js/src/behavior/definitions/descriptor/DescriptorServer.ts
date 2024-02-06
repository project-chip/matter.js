/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { Part } from "../../../endpoint/Part.js";
import { PartLifecycle } from "../../../endpoint/part/PartLifecycle.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { IndexBehavior } from "../../system/index/IndexBehavior.js";
import { DescriptorBehavior } from "./DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    override initialize() {
        // We update PartsList differently if there's an index
        if (this.part.behaviors.has(IndexBehavior)) {
            this.reactTo(
                this.agent.get(IndexBehavior).events.change,
                this.#updatePartsList,
                { lock: true },
            )
        } else if (this.part.hasParts) {
            for (const part of this.part.parts) {
                this.#monitorDestruction(part);
            }
        }
        this.#updatePartsList();

        // Handle lifecycle changes
        this.reactTo(
            this.part.lifecycle.changed,
            this.#applyChange,
            { lock: true }
        );

        // Initialize ServerList
        this.state.serverList = this.#serverList;

        if (!this.state.deviceTypeList.length) {
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
    #applyChange(type: PartLifecycle.Change, part: Part) {
        switch (type) {
            case PartLifecycle.Change.Ready:
                if (!this.part.parts.has(part)) {
                    return;
                }
                this.#updatePartsList();
                this.#monitorDestruction(part);
                break;

            case PartLifecycle.Change.ServersChanged:
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
        this.reactTo(
            part.lifecycle.destroyed,
            this.#updatePartsList,
            { lock: true }
        );
    }

    /**
     * Update the parts list.
     */
    #updatePartsList() {
        const part = this.part;

        // The presence of IndexBehavior indicates a flat namespace as required by Matter standard for root and
        // aggregator endpoints
        if (this.agent.has(IndexBehavior)) {
            const index = this.agent.get(IndexBehavior);
            const numbers = Object.keys(index.partsByNumber)
                .map(n => Number.parseInt(n));

            // My part should not appear in its own PartsList
            const pos = numbers.indexOf(this.part.number);
            if (pos !== -1) {
                numbers.splice(pos, 1);
            }

            this.state.partsList = numbers as EndpointNumber[];
            return;
        } else if (part.hasParts) {
            // No IndexBehavior, just direct descendents
            this.state.partsList = [ ...part.parts ].map(part => part.number) as EndpointNumber[];
        } else {
            // No sub-parts
            this.state.partsList = [];
        }
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
