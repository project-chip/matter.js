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

    const child = await MockPart.create({ type: MockEndpoint, number: 2, owner: parent.part });

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

        const device = await MockPart.create(Device2Endpoint);
        expect(device.descriptor.state.deviceTypeList).deep.equals([
            {
                deviceType: 2,
                revision: 2,
            },
        ]);
    });

    it("adds servers automatically", async () => {
        const device = await MockPart.create(MockEndpoint);

        device.require(OnOffServer);

        expect(device.descriptor.state.serverList).deep.equals([29, 6]);
    });

    it("adds parts automatically", async () => {
        const { parent } = await createFamily();

        const partsList = parent.descriptor.state.partsList;
        expect(partsList).deep.equals([2]);
    });

    it("removes parts automatically", async () => {
        const { parent, child } = await createFamily();

        const partsState = parent.descriptor.state;
        expect(partsState.partsList).deep.equals([2]);

        await child.part.destroy();
        expect(partsState.partsList).deep.equals([]);
    });
});
