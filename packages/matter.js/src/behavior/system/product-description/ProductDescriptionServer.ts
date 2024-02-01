/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
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
        let pd = this.state;

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

        if (pd.deviceType === -1) {
            const deviceType = inferDeviceType(this.agent);

            if (!deviceType) {
                throw new ImplementationError(
                    "Cannot infer announcement device type because no device part is present; please set ProductDescription.deviceType",
                );
            }

            pd.deviceType = deviceType;
        }
    }
}

export namespace ProductDescriptionServer {
    export class State implements ProductDescription {
        /**
         * The device name for commissioning announcements.
         */
        name = "";

        /**
         * The device type for commissioning announcements.
         */
        deviceType = -1;

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
    let recurse = false;
    for (const dt of agent.get(DescriptorBehavior).state.deviceTypeList) {
        switch (dt.deviceType) {
            case RootEndpoint.deviceType:
            case BridgedNodeEndpoint.deviceType:
            case AggregatorEndpoint.deviceType:
                recurse = true;
                break;

            default:
                if (agent.part.type.deviceClass === DeviceClasses.Simple) {
                    return dt.deviceType;
                }
        }
    }

    if (!recurse || !agent.part.hasParts) {
        return;
    }

    for (const child of agent.part.parts) {
        const deviceType = inferDeviceType(agent.context.agentFor(child));
        if (deviceType !== undefined) {
            return deviceType;
        }
    }
}
