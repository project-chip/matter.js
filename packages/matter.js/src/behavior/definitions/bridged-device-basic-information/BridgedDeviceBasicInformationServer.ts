/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { AggregatorEndpoint } from "../../../endpoint/definitions/system/AggregatorEndpoint.js";
import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { BridgedDeviceBasicInformationBehavior } from "./BridgedDeviceBasicInformationBehavior.js";

const BRIDGED_NODE_DEVICE_TYPE = DeviceTypeId(0x13);
const BRIDGED_NODE_REVISION = 1;

/**
 * This is the default server implementation of BridgedDeviceBasicInformationBehavior.
 *
 * All attributes are optional except for the "reachable" attribute.
 */
export class BridgedDeviceBasicInformationServer extends BridgedDeviceBasicInformationBehavior {
    override async initialize() {
        if (this.endpoint.lifecycle.isInstalled) {
            await this.agent.load(DescriptorServer);
            await this.#configurePart();
        } else {
            this.reactTo(this.endpoint.lifecycle.installed, this.#configurePart, { once: true });
        }
        this.reactTo(this.events.reachable$Changed, this.#emitReachableChange);
    }

    /**
     * Per the specification.  Not sure what this adds vs. subscribing to attribute changes.
     */
    #emitReachableChange(reachable: boolean) {
        this.events.reachableChanged.emit({ reachableNewValue: reachable }, this.context);
    }

    /**
     * Per the specification, BridgedDeviceBasicInformation may only appear on bridged nodes, and bridged nodes may only
     * appear under aggregator nodes.
     *
     * Therefore this default implementation of BridgedDeviceBasicInformation injects the BridgedNode device type on the
     * associated {@link Endpoint} and asserts that its parent is a {@link AggregatorEndpoint}.
     */
    async #configurePart() {
        // Obtain endpoint's owner.  This method should only be invoked after owner is known
        const owner = this.agent.owner;
        if (owner === undefined) {
            throw new ImplementationError(`Bridged node ${this.endpoint} has no parent`);
        }

        // Assert owner is an aggregator
        if (!owner.get(DescriptorServer).hasDeviceType(AggregatorEndpoint.deviceType)) {
            throw new ImplementationError(`Bridged node ${this.endpoint} owner ${owner} is not an aggregator`);
        }

        // Ensure endpoint is a bridged node
        this.agent.get(DescriptorServer).addDeviceTypes({
            deviceType: BRIDGED_NODE_DEVICE_TYPE,
            revision: BRIDGED_NODE_REVISION,
        });
    }
}

export namespace BridgedDeviceBasicInformationServer {
    export class State extends BridgedDeviceBasicInformationBehavior.State {
        // Assume Device is online when it is added, but developers should set correctly if needed
        override reachable = true;
    }
}
