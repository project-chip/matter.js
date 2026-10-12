/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformationServer } from "#behaviors/basic-information";
import { BridgedDeviceBasicInformationServer } from "#behaviors/bridged-device-basic-information";
import { DescriptorServer } from "#behaviors/descriptor";
import { OnOffServer } from "#behaviors/on-off";
import { OnOffLightDevice } from "#devices/on-off-light";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointBehaviorsError } from "#endpoint/errors.js";
import { AggregatorEndpoint } from "#endpoints/aggregator";
import { ImplementationError, Lifecycle, LogDestination, Logger, LogFormat, LogLevel } from "@matter/general";
import { MockServerNode, MockSite } from "@matter/node/testing";

const VersionedBridgedLightDevice = OnOffLightDevice.with(BridgedDeviceBasicInformationServer);

function rootVersion(node: MockServerNode) {
    return node.stateOf(BasicInformationServer).configurationVersion;
}

function bridgedVersion(endpoint: Endpoint) {
    return endpoint.stateOf(BridgedDeviceBasicInformationServer).configurationVersion;
}

function partsListOf(endpoint: Endpoint) {
    return [...endpoint.stateOf(DescriptorServer).partsList];
}

async function captureErrors<T>(actor: () => Promise<T>) {
    const errors = new Array<string>();
    Logger.destinations.capture = LogDestination({
        format: LogFormat.formats.plain,
        write(text, message) {
            if (message.level >= LogLevel.ERROR) {
                errors.push(text);
            }
        },
    });
    try {
        return { result: await actor(), errors };
    } finally {
        delete Logger.destinations.capture;
    }
}

class FailingOnOffServer extends OnOffServer {
    override initialize() {
        throw new ImplementationError("Initialization refused for test");
    }
}

describe("Endpoint.erase", () => {
    it("keeps id, number and PartsList membership and restores defaults and options", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light", onOff: { onTime: 7 } });
        const number = light.number;
        await light.set({ onOff: { onOff: true, onTime: 9 } });

        const partsLists = new Array<number[]>();
        node.lifecycle.changed.on(() => {
            partsLists.push(partsListOf(node));
        });

        await light.erase();

        expect(light.id).equals("light");
        expect(light.number).equals(number);
        expect(light.lifecycle.isReady).equals(true);
        expect(light.state.onOff.onOff).equals(false);
        expect(light.state.onOff.onTime).equals(7);
        expect(partsListOf(node)).contains(number);
        expect(partsLists.length).greaterThan(0);
        for (const partsList of partsLists) {
            expect(partsList).contains(number);
        }
    });

    it("serves the endpoint again", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });

        await light.erase();

        expect([...node.protocol].map(endpoint => endpoint.id)).contains(light.number);
    });

    it("keeps the stored number across a node restart", async () => {
        await using site = new MockSite();
        const id = "eraseKeepsNumber";

        const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
        await node.add(new Endpoint(OnOffLightDevice, { id: "first" }));
        const light = await node.add(new Endpoint(OnOffLightDevice, { id: "light" }));
        const number = light.number;
        await light.erase();
        await node.close();

        const restarted = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
        const reAdded = await restarted.add(new Endpoint(OnOffLightDevice, { id: "light" }));
        const added = await restarted.add(new Endpoint(OnOffLightDevice, { id: "added" }));

        expect(reAdded.number).equals(number);
        expect(added.number).not.equals(number);
    });

    it("increases the bridged and the root ConfigurationVersion", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const aggregator = await node.add(AggregatorEndpoint, { id: "aggregator" });
        const bridged = await aggregator.add(VersionedBridgedLightDevice, {
            id: "bridged",
            bridgedDeviceBasicInformation: { configurationVersion: 5 },
        });
        const before = rootVersion(node);

        await bridged.erase();

        expect(bridgedVersion(bridged)).equals(6);
        expect(rootVersion(node)).equals(before + 1);
    });

    it("increases the ConfigurationVersion of the bridged endpoint above", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const aggregator = await node.add(AggregatorEndpoint, { id: "aggregator" });
        const bridged = await aggregator.add(VersionedBridgedLightDevice, {
            id: "bridged",
            bridgedDeviceBasicInformation: { configurationVersion: 5 },
            parts: [{ type: OnOffLightDevice, id: "child" }],
        });
        const before = rootVersion(node);

        await bridged.parts.require("child").erase();

        expect(bridgedVersion(bridged)).equals(6);
        expect(rootVersion(node)).equals(before + 1);
    });

    it("increases only the root ConfigurationVersion of a plain endpoint", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });
        const before = rootVersion(node);

        await light.erase();

        expect(rootVersion(node)).equals(before + 1);
    });

    it("increases the ConfigurationVersion of every bridged endpoint below", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const aggregator = await node.add(AggregatorEndpoint, { id: "aggregator" });
        const first = await aggregator.add(VersionedBridgedLightDevice, {
            id: "first",
            bridgedDeviceBasicInformation: { configurationVersion: 1 },
        });
        const second = await aggregator.add(VersionedBridgedLightDevice, {
            id: "second",
            bridgedDeviceBasicInformation: { configurationVersion: 1 },
        });
        await first.set({ bridgedDeviceBasicInformation: { configurationVersion: 9 } });
        await second.set({ bridgedDeviceBasicInformation: { configurationVersion: 3 } });
        const before = rootVersion(node);

        await aggregator.erase();

        expect(bridgedVersion(first)).equals(10);
        expect(bridgedVersion(second)).equals(4);
        expect(rootVersion(node)).equals(before + 1);
    });

    it("increases the stored ConfigurationVersion of a crashed bridged endpoint below", async () => {
        await using site = new MockSite();
        const id = "eraseCrashedBridged";
        const options = { id: "bridged", bridgedDeviceBasicInformation: { configurationVersion: 5 } };

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const aggregator = await node.add(new Endpoint(AggregatorEndpoint, { id: "aggregator" }));
            const bridged = await aggregator.add(VersionedBridgedLightDevice, options);
            await bridged.set({ bridgedDeviceBasicInformation: { configurationVersion: 9 } });
            await node.close();
        }

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const crashed = new Endpoint(VersionedBridgedLightDevice.with(FailingOnOffServer), {
                ...options,
                isEssential: false,
            });
            const aggregator = await node.add(new Endpoint(AggregatorEndpoint, { id: "aggregator" }));
            await expect(aggregator.add(crashed)).rejectedWith(EndpointBehaviorsError);

            await aggregator.erase();
            await node.close();
        }

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const aggregator = await node.add(new Endpoint(AggregatorEndpoint, { id: "aggregator" }));
            const bridged = await aggregator.add(VersionedBridgedLightDevice, options);

            expect(bridgedVersion(bridged)).equals(10);
        }
    });

    it("waits for an endpoint that is still initializing", async () => {
        let initializationStarted!: () => void;
        const started = new Promise<void>(resolve => (initializationStarted = resolve));
        let release!: () => void;
        const gate = new Promise<void>(resolve => (release = resolve));
        class SlowOnOffServer extends OnOffServer {
            override async initialize() {
                initializationStarted();
                await gate;
                await super.initialize();
            }
        }

        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = new Endpoint(OnOffLightDevice.with(SlowOnOffServer), { id: "light" });
        const adding = node.add(light);
        await started;
        expect(light.construction.status).equals(Lifecycle.Status.Initializing);

        const erasing = captureErrors(() => light.erase());
        release();
        const { errors } = await erasing;
        await adding;

        expect(errors).deep.equals([]);
        expect(light.lifecycle.isReady).equals(true);
    });

    it("logs a failing restart and still increases the ConfigurationVersion", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const failing = new Endpoint(OnOffLightDevice.with(FailingOnOffServer), { id: "failing", isEssential: false });
        await expect(node.add(failing)).rejectedWith(EndpointBehaviorsError);
        expect(failing.construction.status).equals(Lifecycle.Status.Crashed);
        const before = rootVersion(node);

        const { errors } = await captureErrors(() => failing.erase());

        expect(errors.join("\n")).match(/Initialization refused for test/);
        expect(rootVersion(node)).equals(before + 1);
    });

    it("only wipes the storage of an endpoint whose parent has not started its parts", async () => {
        await using site = new MockSite();
        const id = "eraseUnderCrashedParent";
        let number: number;

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const child = new Endpoint(OnOffLightDevice, { id: "child" });
            await node.add(new Endpoint(OnOffLightDevice, { id: "parent", isEssential: false, parts: [child] }));
            await child.set({ onOff: { onOff: true } });
            number = child.number;
            await node.close();
        }

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const child = new Endpoint(OnOffLightDevice, { id: "child" });
            const parent = new Endpoint(OnOffLightDevice.with(FailingOnOffServer), {
                id: "parent",
                isEssential: false,
                parts: [child],
            });
            await expect(node.add(parent)).rejectedWith(EndpointBehaviorsError);

            await child.erase();

            expect(child.construction.status).equals(Lifecycle.Status.Inactive);
            await node.close();
        }

        {
            const node = await site.addNode(undefined, { id, device: undefined, commissioning: { enabled: false } });
            const child = new Endpoint(OnOffLightDevice, { id: "child" });
            await node.add(new Endpoint(OnOffLightDevice, { id: "parent", isEssential: false, parts: [child] }));

            expect(child.state.onOff.onOff).equals(false);
            expect(child.number).equals(number);
        }
    });

    it("runs concurrent erases of one endpoint once", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });
        const before = rootVersion(node);

        const { errors } = await captureErrors(() => Promise.all([light.erase(), light.erase()]));

        expect(errors).deep.equals([]);
        expect(light.lifecycle.isReady).equals(true);
        expect(rootVersion(node)).equals(before + 1);
    });

    it("throws while the endpoint is being deleted", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });

        const deleting = light.delete();
        await expect(light.erase()).rejectedWith(ImplementationError, /closing or closed/);
        await deleting;
    });

    it("does not restart an endpoint that is deleted while it is erased", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });

        const { errors } = await captureErrors(async () => {
            const erasing = light.erase();
            const deleting = light.delete();
            light.lifecycle.ready.on(() => {
                expect.fail("Deleted endpoint restarted");
            });
            await deleting;
            await erasing;
        });

        expect(errors).deep.equals([]);
        expect(light.construction.status).equals(Lifecycle.Status.Destroyed);
        expect(node.endpoints.has(light)).equals(false);
    });

    it("finishes an erase in progress before closing", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });
        const before = rootVersion(node);

        const erasing = light.erase();
        const closing = light.close();
        await erasing;
        await closing;

        expect(rootVersion(node)).equals(before + 1);
        expect(light.construction.status).equals(Lifecycle.Status.Destroyed);
    });

    it("throws while the endpoint is closing after an earlier erase", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });
        await light.erase();

        const closing = light.close();
        await expect(light.erase()).rejectedWith(ImplementationError, /closing or closed/);
        await closing;
    });

    it("does not restart an endpoint whose parent closes while it is erased", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const aggregator = await node.add(AggregatorEndpoint, {
            id: "aggregator",
            parts: [{ type: OnOffLightDevice, id: "child" }],
        });
        const child = aggregator.parts.require("child");
        let restarted = false;
        child.lifecycle.ready.on(() => {
            restarted = true;
        });

        const erasing = child.erase();
        const closing = aggregator.close();
        await erasing;
        await closing;

        expect(restarted).equals(false);
        expect(child.construction.status).equals(Lifecycle.Status.Destroyed);
    });

    it("deletes an endpoint after an erase that already reset it", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });

        let deleting: Promise<void> | undefined;
        light.construction.change.on(status => {
            if (status === Lifecycle.Status.Inactive && deleting === undefined) {
                deleting = light.delete();
            }
        });
        await light.erase();
        await deleting;

        expect(deleting).not.undefined;
        expect(light.construction.status).equals(Lifecycle.Status.Destroyed);
        expect(node.endpoints.has(light)).equals(false);
    });

    it("refuses deleting an endpoint whose close waits for an erase", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });

        const erasing = light.erase();
        const closing = light.close();
        await expect(light.delete()).rejectedWith(ImplementationError, /closing/);
        await erasing;
        await closing;
    });

    it("increases the root ConfigurationVersion when the bridged endpoint above crashed", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const aggregator = await node.add(AggregatorEndpoint, { id: "aggregator" });
        const child = new Endpoint(OnOffLightDevice, { id: "child" });
        const crashed = new Endpoint(VersionedBridgedLightDevice.with(FailingOnOffServer), {
            id: "crashed",
            isEssential: false,
            bridgedDeviceBasicInformation: { configurationVersion: 5 },
            parts: [child],
        });
        await expect(aggregator.add(crashed)).rejectedWith(EndpointBehaviorsError);
        const before = rootVersion(node);

        await child.erase();

        expect(rootVersion(node)).equals(before + 1);
    });

    it("throws on a destroyed endpoint", async () => {
        await using node = await MockServerNode.createOnline(undefined, { device: undefined });
        const light = await node.add(OnOffLightDevice, { id: "light" });
        await light.close();

        await expect(light.erase()).rejectedWith(ImplementationError, /closing or closed/);
    });
});
