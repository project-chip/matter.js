/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "@project-chip/matter-node.js";

import { BasicInformation } from "@project-chip/matter.js/cluster";
import { DeviceTypeId, VendorId } from "@project-chip/matter.js/datatype";
import { OnOffPluginUnitDevice } from "@project-chip/matter.js/device";
import { StorageBackendMemory } from "@project-chip/matter.js/storage";
import { DeviceTestInstance } from "../DeviceTestInstance";

/** Test case "TestBasicInformation" */
export class TestBasicInformation extends DeviceTestInstance {
    constructor(storage: StorageBackendMemory) {
        super("TestBasicInformation", "GeneralTestPicsFile.txt", storage);
    }

    async setupCommissioningServer() {
        const onOffDevice = await OnOffPluginUnitDevice.create();

        const commissioningServer = await CommissioningServer.create({
            port: 5540,
            deviceName: "Testdevice",
            deviceType: DeviceTypeId(onOffDevice.deviceType),
            passcode: 20202021,
            discriminator: 3840,
            basicInformation: {
                vendorName: "Vendorname",
                vendorId: VendorId(0xfff1),
                nodeLabel: "",
                productName: "Productname",
                productLabel: "Productlabel",
                productId: 0x8001,
                serialNumber: `node-matter`,
                manufacturingDate: "20210101",
                partNumber: "123456",
                productUrl: "https://test.com",
                uniqueId: `node-matter-unique`,
                productAppearance: {
                    finish: BasicInformation.ProductFinish.Satin,
                    primaryColor: BasicInformation.Color.Purple,
                },
            },
            delayedAnnouncement: false,
        });

        await commissioningServer.addDevice(onOffDevice);

        return commissioningServer;
    }
}
