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
import { Environment, StorageBackendMemory, StorageService } from "#general";
import assert from "assert";
import { MockEndpoint } from "../endpoint/mock-endpoint.js";
import { MockServerNode } from "../node/mock-server-node.js";

const BridgedLightDevice = OnOffLightDevice.with(BridgedDeviceBasicInformationServer);

async function createBridge<T extends AggregatorEndpoint>(
    definition: T | Endpoint.Configuration<T>,
    options?: MockEndpoint.Options<T>,
): Promise<MockEndpoint<T>> {
    // @ts-expect-error had no luck to find that typing issue here, but because just tests I will ignore it
    const bridge = await MockEndpoint.create(definition, options);

    const node = bridge.owner as MockServerNode;
    await node.start();

    return bridge as MockEndpoint<T>;
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

        it("dynamically multiple endpoints in different re-init order", async () => {
            const environment = new Environment("test");
            const storages = new Map<string, StorageBackendMemory>();
            const storage = environment.get(StorageService);
            storage.location = "(memory-for-test)";
            storage.factory = namespace => {
                const existing = storages.get(namespace);
                if (existing) {
                    return existing;
                }
                const store = new StorageBackendMemory();
                storages.set(namespace, store);
                return store;
            };

            // Have a bridge with 4 endpoints
            const bridge = await createBridge(AggregatorEndpoint, { environment });

            await bridge.add({
                type: BridgedLightDevice,
                id: "light1",
            });
            await MockTime.yield();

            await bridge.add({
                type: BridgedLightDevice,
                id: "light2",
            });
            await MockTime.yield();

            await bridge.add({
                type: BridgedLightDevice,
                id: "light2-1",
            });
            await MockTime.yield();

            await bridge.add({
                type: BridgedLightDevice,
                id: "light3",
            });
            await MockTime.yield();

            // Store their numbers
            const light1 = bridge.parts.require("light1").number;
            const light2 = bridge.parts.require("light2").number;
            const light3 = bridge.parts.require("light3").number;

            await bridge.owner?.close();

            // Initialize second bridge with same storage
            const bridge2 = await createBridge(AggregatorEndpoint, { environment });

            // Initialize the bridges in a different order, leave one out and add one more
            await bridge2.add({
                type: BridgedLightDevice,
                id: "light3",
            });
            await MockTime.yield();

            await bridge2.add({
                type: BridgedLightDevice,
                id: "light1",
            });
            await MockTime.yield();

            await bridge2.add({
                type: BridgedLightDevice,
                id: "light2",
            });
            await MockTime.yield();

            await bridge2.add({
                type: BridgedLightDevice,
                id: "light4",
            });
            await MockTime.yield();

            // Verify that the endpoint numbers are preserved and new ones are allocated
            assert.strictEqual(bridge2.parts.require("light1").number, light1);
            assert.strictEqual(bridge2.parts.require("light2").number, light2);
            assert.strictEqual(bridge2.parts.require("light3").number, light3);
            assert.strictEqual(bridge2.parts.require("light4").number, light3 + 1);
        });
    });
});
