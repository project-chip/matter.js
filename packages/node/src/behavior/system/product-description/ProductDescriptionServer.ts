/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "#endpoint/Agent.js";
import { AggregatorDt, BridgedNodeDt, DeviceClassification, RootNodeDt } from "#model";
import { DeviceTypeId, ProductDescription, VendorId } from "#types";
import { BasicInformationBehavior } from "../../../behaviors/basic-information/BasicInformationBehavior.js";
import { DescriptorBehavior } from "../../../behaviors/descriptor/DescriptorBehavior.js";
import { Behavior } from "../../Behavior.js";

/**
 * Supplies key product information used in advertisements and commissioning.
 */
export class ProductDescriptionServer extends Behavior {
    static override readonly id = "productDescription";

    declare state: ProductDescriptionServer.State;

    override initialize() {
        const pd = this.state;

        const bi = this.agent.get(BasicInformationBehavior).state;

        if (pd.name === "") {
            pd.name = bi.productName;
        }

        if (pd.vendorId === -1) {
            pd.vendorId = bi.vendorId;
        }

        if (pd.productId === -1) {
            pd.productId = bi.productId;
        }

        this.#setDeviceType();
    }

    #setDeviceType() {
        if (this.state.deviceType !== ProductDescriptionServer.UNKNOWN_DEVICE_TYPE) {
            return;
        }

        const deviceType = inferDeviceType(this.agent);

        if (deviceType !== undefined) {
            this.state.deviceType = deviceType;
            return;
        }

        // Continually react to tree mutations until we discover a device endpoint
        this.reactTo(
            this.endpoint.lifecycle.changed,

            this.#setDeviceType,

            { once: true },
        );
    }
}

export namespace ProductDescriptionServer {
    export const UNKNOWN_DEVICE_TYPE = DeviceTypeId(-1, false);

    export class State implements ProductDescription {
        /**
         * The device name for commissioning announcements.
         */
        name = "";

        /**
         * The device type for commissioning announcements.
         */
        deviceType: DeviceTypeId = UNKNOWN_DEVICE_TYPE;

        /**
         * The vendor ID for commissioning announcements.
         */
        vendorId = VendorId(-1, false);

        /**
         * The product ID for commissioning announcements.
         */
        productId = -1;
    }
}

function inferDeviceType(agent: Agent): DeviceTypeId | undefined {
    if (!agent.endpoint.behaviors.isActive(DescriptorBehavior)) {
        return;
    }

    let recurse = false;
    for (const dt of agent.get(DescriptorBehavior).state.deviceTypeList) {
        switch (dt.deviceType) {
            // Note - retrieve IDs from the model rather than the endpoint files because referencing the endpoints will
            // create a big wad of circular deps
            case RootNodeDt.id:
            case BridgedNodeDt.id:
            case AggregatorDt.id:
                recurse = true;
                break;

            default:
                if (agent.endpoint.type.deviceClass === DeviceClassification.Simple) {
                    return dt.deviceType;
                }
        }
    }

    if (!recurse || !agent.endpoint.hasParts) {
        return;
    }

    for (const child of agent.endpoint.parts) {
        const deviceType = inferDeviceType(agent.context.agentFor(child));
        if (deviceType !== undefined) {
            return deviceType;
        }
    }
}
