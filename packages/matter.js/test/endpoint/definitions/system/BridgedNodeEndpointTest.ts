/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BridgedDeviceBasicInformationServer } from "../../../../src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.js";
import { DescriptorBehavior } from "../../../../src/behavior/definitions/descriptor/DescriptorBehavior.js";
import { Endpoint } from "../../../../src/endpoint/Endpoint.js";
import { OnOffLightDevice } from "../../../../src/endpoint/definitions/device/OnOffLightDevice.js";
import { AggregatorEndpoint } from "../../../../src/endpoint/definitions/system/AggregatorEndpoint.js";
import { BridgedNodeEndpoint } from "../../../../src/endpoint/definitions/system/BridgedNodeEndpoint.js";
import { MockServerNode } from "../../../node/mock-server-node.js";
import { MockEndpoint } from "../../mock-endpoint.js";

const BridgedLightDevice = OnOffLightDevice.with(BridgedDeviceBasicInformationServer);

async function createBridge<T extends AggregatorEndpoint>(
    definition: T | Endpoint.Configuration<T>,
): Promise<MockEndpoint<T>> {
    const bridge = await MockEndpoint.create(definition);

    const node = bridge.owner as MockServerNode;
    await node.bringOnline();

    return bridge;
}

function expectBridgedLight(bridge: Endpoint) {
    const light = bridge.parts.require("light");
    expect(light.behaviors.isActive(BridgedDeviceBasicInformationServer));

    const descriptor = light.stateOf(DescriptorBehavior);
    expect(descriptor.deviceTypeList).deep.equals([
        {
            deviceType: OnOffLightDevice.deviceType,
            revision: OnOffLightDevice.deviceRevision,
        },
        {
            deviceType: BridgedNodeEndpoint.deviceType,
            revision: BridgedNodeEndpoint.deviceRevision,
        },
    ]);
}

describe("BridgedNodeEndpointTest", () => {
    describe("makes children bridged", () => {
        it("at startup", async () => {
            const bridge = await createBridge({
                type: AggregatorEndpoint,
                parts: [{ type: BridgedLightDevice, id: "light" }],
            });

            expectBridgedLight(bridge);

            await bridge.owner?.close();
        });

        it("dynamically", async () => {
            const bridge = await createBridge(AggregatorEndpoint);

            await bridge.add({
                type: BridgedLightDevice,
                id: "light",
            });

            expectBridgedLight(bridge);

            await bridge.owner?.close();
        });
    });
});
