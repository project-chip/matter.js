/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// eslint-disable-next-line no-restricted-imports
import { CommissioningServer } from "../../src/export";

import { BridgedDeviceBasicInformation } from "@project-chip/matter.js/cluster";
import { DeviceTypeId, EndpointNumber, VendorId } from "@project-chip/matter.js/datatype";
import { Aggregator, OnOffPluginUnitDevice } from "@project-chip/matter.js/device";
import { StorageManager } from "@project-chip/matter.js/storage";
import { DeviceTestInstance } from "../DeviceTestInstance";

/**
 * Test case "TC-BRBINFO-1.1"
 * 130.1.1. [TC-BRBINFO-1.1] Global Attributes for Bridged Device Basic Information Cluster [DUT-Server]
 */
export class Test_TC_BRBINFO_1_1Test extends DeviceTestInstance {
    onOffDevice = new OnOffPluginUnitDevice(undefined, { endpointId: EndpointNumber(3) });
    aggregator = new Aggregator();
    commissioningServer?: CommissioningServer;

    constructor(storageManager: StorageManager, overrideTestName?: string) {
        super(overrideTestName ?? "Test_TC_BRBINFO_1_1", "GeneralTestPicsFile.txt", storageManager);
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
                productId: 0x8000,
                serialNumber: `node-matter`,
            },
            delayedAnnouncement: false,
        });

        this.aggregator.addBridgedDevice(this.onOffDevice, {
            vendorName: "Vendorname",
            vendorId: VendorId(0xfff1),
            nodeLabel: "",
            productName: "Productname",
            productLabel: "Productlabel",
            serialNumber: `node-matter`,
            hardwareVersion: 1,
            hardwareVersionString: "1.0",
            softwareVersion: 1,
            softwareVersionString: "1.0",
            manufacturingDate: "20210101",
            partNumber: "123456",
            productUrl: "https://test.com",
            reachable: true,
            uniqueId: `node-matter-unique`,
            productAppearance: {
                finish: BridgedDeviceBasicInformation.ProductFinish.Satin,
                primaryColor: BridgedDeviceBasicInformation.Color.Purple,
            },
        });

        this.commissioningServer.addDevice(this.aggregator);

        return this.commissioningServer;
    }

    override async handleUserprompt(userPrompt: string, testDescription: string) {
        if (testDescription.includes("Read EventList attribute from the DUT")) {
            return "y\n";
        }
        if (testDescription.includes("TH1 reads")) {
            return "y\n";
        }
        return super.handleUserprompt(userPrompt, testDescription);
    }
}
