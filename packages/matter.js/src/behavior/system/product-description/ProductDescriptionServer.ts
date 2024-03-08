/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypeId } from "../../../datatype/DeviceTypeId.js";
import { VendorId } from "../../../datatype/VendorId.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { Agent } from "../../../endpoint/Agent.js";
import { AggregatorEndpoint } from "../../../endpoint/definitions/system/AggregatorEndpoint.js";
import { BridgedNodeEndpoint } from "../../../endpoint/definitions/system/BridgedNodeEndpoint.js";
import { RootEndpoint } from "../../../endpoint/definitions/system/RootEndpoint.js";
import { Behavior } from "../../Behavior.js";
import { BasicInformationBehavior } from "../../definitions/basic-information/BasicInformationBehavior.js";
import { DescriptorBehavior } from "../../definitions/descriptor/DescriptorBehavior.js";
import { ProductDescription } from "./ProductDescription.js";

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
    export const UNKNOWN_DEVICE_TYPE = DeviceTypeId(-1);

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
        vendorId = VendorId(-1);

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
            case RootEndpoint.deviceType:
            case BridgedNodeEndpoint.deviceType:
            case AggregatorEndpoint.deviceType:
                recurse = true;
                break;

            default:
                if (agent.endpoint.type.deviceClass === DeviceClasses.Simple) {
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
