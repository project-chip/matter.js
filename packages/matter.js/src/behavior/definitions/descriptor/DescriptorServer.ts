/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Descriptor } from "../../../cluster/definitions/DescriptorCluster.js";
import { ClusterId } from "../../../datatype/ClusterId.js";
import { Part } from "../../../endpoint/Part.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { Behavior } from "../../Behavior.js";
import { PartsBehavior } from "../parts/PartsBehavior.js";
import { DescriptorBehavior } from "./DescriptorBehavior.js";

/**
 * This is the default server implementation of DescriptorBehavior.
 */
export class DescriptorServer extends DescriptorBehavior {
    override initialize() {
        const part = this.part;

        if (!this.state.deviceTypeList?.length) {
            const partType = this.part.type;
            this.state.deviceTypeList = [
                {
                    deviceType: partType.deviceType,
                    revision: partType.deviceRevision,
                },
            ];
        }

        this.addServers(...Object.values(part.behaviors.supported));

        part.behaviors.supportAdded.on(behavior => this.addServers(behavior));
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

    private addServers(...types: Behavior.Type[]) {
        this.state.serverList = this.addToList(this.state.serverList, this.getClusterIds(types));

        // If PartsBehavior is added, update partsList and add handlers to
        // synchronize going forward
        for (const type of types) {
            if (type.supports(PartsBehavior)) {
                const parts = this.agent.get(PartsBehavior);

                this.addParts(...parts);
                parts.added.on(part => this.addParts(part));
                parts.deleted.on(part => this.removeParts(part));
            }
        }
    }

    private addParts(...parts: Part[]) {
        this.state.partsList = this.addToList(this.state.partsList, this.defined(parts.map(part => part.id)));
    }

    private removeParts(...parts: Part[]) {
        this.state.partsList = this.removeFromList(
            this.state.partsList,
            parts.map(part => part.id),
        );
    }

    private addToList<I>(list: I[], items: I[]) {
        return [...new Set([...(list ?? []), ...items])];
    }

    private removeFromList<I>(list: I[], items: I[]) {
        const set = new Set(list);
        for (const item of items) {
            set.delete(item);
        }
        return [...set] as Exclude<I, undefined>[];
    }

    private getClusterIds(types: Behavior.Type[]) {
        return this.defined(types.map(type => (type as { cluster?: { id?: ClusterId } }).cluster?.id));
    }

    private defined<T>(items: (T | undefined)[]) {
        return items.filter(item => item !== undefined) as T[];
    }
}

export namespace DescriptorServer {
    export type DeviceType = TypeFromSchema<typeof Descriptor.TlvDeviceTypeStruct>;
}
