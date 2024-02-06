/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { AggregatorEndpoint } from "../../../endpoint/definitions/system/AggregatorEndpoint.js";
import { BridgedNodeEndpoint } from "../../../endpoint/definitions/system/BridgedNodeEndpoint.js";
import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { BridgedDeviceBasicInformationBehavior } from "./BridgedDeviceBasicInformationBehavior.js";

/**
 * This is the default server implementation of BridgedDeviceBasicInformationBehavior.
 * 
 * All attributes are optional except for the "reachable" attribute.
 */
export class BridgedDeviceBasicInformationServer extends BridgedDeviceBasicInformationBehavior {
    override initialize() {
        if (this.part.lifecycle.isInstalled) {
            this.#configurePart();
        } else {
            this.reactTo(this.part.lifecycle.installed, this.#configurePart, { once: true })
        }
        this.reactTo(this.events.reachable$Change, this.#emitReachableChange);
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
     * associated {@link Part} and asserts that its parent is a {@link AggregatorEndpoint}.
     */
    #configurePart() {
        // Obtain part's owner.  This method should only be invoked after owner is known
        const owner = this.agent.owner;
        if (owner === undefined) {
            throw new ImplementationError(`Bridged node ${this.part} has no parent`);
        }

        // Assert owner is an aggregator
        if (!owner.get(DescriptorServer).hasDeviceType(AggregatorEndpoint.deviceType)) {
            throw new ImplementationError(`Bridged node ${this.part} owner ${owner} is not an aggregator`);
        }

        // Ensure part is a bridged node
        this.agent.get(DescriptorServer).addDeviceTypes({
            deviceType: BridgedNodeEndpoint.deviceType,
            revision: BridgedNodeEndpoint.deviceRevision
        });
    }
}

export namespace BridgedDeviceBasicInformationServer {
    export class State extends BridgedDeviceBasicInformationBehavior.State {
        // TODO - need real-world feedback to determine best default
        override reachable = false;
    }
}
