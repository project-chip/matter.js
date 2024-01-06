/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "../../../../src/behavior/definitions/descriptor/DescriptorServer.js";
import { OnOffServer } from "../../../../src/behavior/definitions/on-off/OnOffServer.js";
import { ClusterId } from "../../../../src/datatype/ClusterId.js";
import { DeviceTypeId } from "../../../../src/datatype/DeviceTypeId.js";
import { EndpointNumber } from "../../../../src/datatype/EndpointNumber.js";
import { MutableEndpoint } from "../../../../src/endpoint/type/MutableEndpoint.js";
import { MockPart } from "../../../endpoint/mock-part.js";
import { MockEndpoint } from "../../mock-behavior.js";

async function createFamily() {
    const parent = new MockPart({
        type: MockEndpoint,
        number: 1,
    });
    await parent.construction;

    const child = new MockPart({ type: MockEndpoint, number: 2, owner: undefined });
    await child.construction;

    await parent.parts.add(child);

    return { parent, child };
}

describe("DescriptorServer", () => {
    it("properly extends part type", () => {
        const device = MutableEndpoint({
            name: "Foo",
            deviceType: 1,
            deviceRevision: 1,
        }).with(DescriptorServer);

        device.defaults satisfies {
            descriptor: {
                deviceTypeList?: Array<{ deviceType: DeviceTypeId; revision: number }>;
                partsList: Array<EndpointNumber>;
                serverList: Array<ClusterId>;
                clientList: Array<ClusterId>;
            };
        };
    });

    it("adds device type automatically if necessary", async () => {
        const part = new MockPart(MockEndpoint);
        await part.construction;
        const device = part.agent;
        expect(device.descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 1,
                revision: 1,
            },
        ]);
    });

    it("does not add device type automatically if unnecessary", async () => {
        const Device2Endpoint = MockEndpoint.set({
            descriptor: { deviceTypeList: [{ deviceType: 2, revision: 2 }] },
        });

        const part = new MockPart(Device2Endpoint);
        await part.construction;
        const device = part.agent;
        expect(device.descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 2,
                revision: 2,
            },
        ]);
    });

    it("adds servers automatically", async () => {
        const part = new MockPart(MockEndpoint);
        await part.construction;
        const device = part.agent;

        device.require(OnOffServer);

        expect(device.descriptor.state.serverList).deep.equals([29, 6]);
    });

    it("adds parts automatically", async () => {
        const { parent } = await createFamily();

        const partsList = parent.agent.descriptor.state.partsList;
        expect(partsList).deep.equals([2]);
    });

    it("removes parts automatically", async () => {
        const { parent, child } = await createFamily();

        const partsState = parent.agent.descriptor.state;
        expect(partsState.partsList).deep.equals([2]);

        await child.destroy();
        expect(partsState.partsList).deep.equals([]);
    });
});
