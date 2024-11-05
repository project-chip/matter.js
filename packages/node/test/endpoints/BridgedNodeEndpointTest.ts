/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BridgedDeviceBasicInformationServer } from "#behaviors/bridged-device-basic-information";
import { DescriptorBehavior } from "#behaviors/descriptor";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { AggregatorEndpoint } from "#endpoints/aggregator";
import { BridgedNodeEndpoint } from "#endpoints/bridged-node";
import { MockEndpoint } from "../endpoint/mock-endpoint.js";
import { MockServerNode } from "../node/mock-server-node.js";

const BridgedLightDevice = OnOffLightDevice.with(BridgedDeviceBasicInformationServer);

async function createBridge<T extends AggregatorEndpoint>(
    definition: T | Endpoint.Configuration<T>,
): Promise<MockEndpoint<T>> {
    const bridge = await MockEndpoint.create(definition);

    const node = bridge.owner as MockServerNode;
    await node.start();

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
            await MockTime.yield();

            expectBridgedLight(bridge);

            await bridge.owner?.close();
        });
    });
});
