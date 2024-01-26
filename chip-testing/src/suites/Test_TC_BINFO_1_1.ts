/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "@project-chip/matter-node.js";
import { BasicInformation } from "@project-chip/matter.js/cluster";
import { DeviceTypeId, VendorId } from "@project-chip/matter.js/datatype";
import { OnOffPluginUnitDevice } from "@project-chip/matter.js/device";
import { Storage } from "@project-chip/matter.js/storage";
import { DeviceTestInstance } from "../DeviceTestInstance.js";

/**
 * Test case "TC_BINFO_1.1"
 * 12.1.1. [TC-BINFO-1.1] Global Attributes for Basic Information Cluster [DUT-Server]
 */
export class Test_TC_BINFO_1_1 extends DeviceTestInstance {
    onOffDevice = new OnOffPluginUnitDevice();

    constructor(storage: Storage, overrideTestName?: string) {
        super(overrideTestName ?? "Test_TC_BINFO_1_1", "GeneralTestPicsFile.txt", storage);
    }

    async setupCommissioningServer() {
        this.commissioningServer = new CommissioningServer({
            port: 5540,
            deviceName: "Testdevice",
            deviceType: DeviceTypeId(this.onOffDevice.deviceType),
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
                reachable: true,
                uniqueId: `node-matter-unique`,
                productAppearance: {
                    finish: BasicInformation.ProductFinish.Satin,
                    primaryColor: BasicInformation.Color.Purple,
                },
            },
            delayedAnnouncement: false,
        });

        this.commissioningServer.addDevice(this.onOffDevice);

        return this.commissioningServer;
    }

    override async handleUserprompt(testDescription: string, userPrompt: string) {
        if (testDescription.includes("TH reads")) {
            return "y\n"; // We acknowledge the TH reads as checked
        }
        return super.handleUserprompt(testDescription, userPrompt);
    }
}
