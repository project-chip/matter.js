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
    const parent = await MockPart.create({
        type: MockEndpoint,
        number: 1,
    });

    const child = await MockPart.create({ type: MockEndpoint, number: 2, owner: parent });

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
        const device = await MockPart.create(MockEndpoint);
        expect(device.state.descriptor.deviceTypeList).deep.equals([
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

        const device = await MockPart.create(Device2Endpoint);
        expect(device.state.descriptor.deviceTypeList).deep.equals([
            {
                deviceType: 2,
                revision: 2,
            },
        ]);
    });

    it("adds servers automatically", async () => {
        const device = await MockPart.create(MockEndpoint);

        device.behaviors.require(OnOffServer);

        await device.events.descriptor.serverList$Change;

        expect(device.state.descriptor.serverList).deep.equals([29, 6]);
    });

    it("adds parts automatically", async () => {
        const { parent } = await createFamily();

        await parent.events.descriptor.partsList$Change;

        const partsList = parent.state.descriptor.partsList;
        expect(partsList).deep.equals([2]);
    });

    it("removes parts automatically", async () => {
        const { parent, child } = await createFamily();

        await parent.events.descriptor.partsList$Change;

        const partsState = parent.state.descriptor;
        expect(partsState.partsList).deep.equals([2]);

        await child.destroy();

        await parent.events.descriptor.partsList$Change;

        expect(partsState.partsList).deep.equals([]);
    });
});
