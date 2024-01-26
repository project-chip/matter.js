/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "@project-chip/matter-node.js";

import {
    AdministratorCommissioning,
    AdministratorCommissioningCluster,
    BasicAdminCommissioningHandler,
    ClusterServer,
} from "@project-chip/matter.js/cluster";
import { DeviceTypeId, VendorId } from "@project-chip/matter.js/datatype";
import { OnOffPluginUnitDevice } from "@project-chip/matter.js/device";
import { DeviceTestInstance } from "./DeviceTestInstance.js";

export class MinimalOnOffDeviceTestInstance extends DeviceTestInstance {
    onOffDevice: OnOffPluginUnitDevice | undefined;

    async setupCommissioningServer() {
        this.onOffDevice = new OnOffPluginUnitDevice();

        const commissioningServer = new CommissioningServer({
            port: 5540,
            deviceName: "Testdevice",
            deviceType: DeviceTypeId(this.onOffDevice.deviceType),
            passcode: 20202021,
            discriminator: 3840,
            basicInformation: {
                dataModelRevision: 17,
                vendorName: "Vendorname",
                vendorId: VendorId(0xfff1),
                nodeLabel: "",
                productName: "Productname",
                productLabel: "Productlabel",
                productId: 0x8001,
                serialNumber: `node-matter`,
            },
            delayedAnnouncement: false,
        });

        // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
        commissioningServer.addRootClusterServer(
            ClusterServer(
                AdministratorCommissioningCluster.with("Basic"),
                {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null,
                },
                BasicAdminCommissioningHandler(),
            ),
        );

        commissioningServer.addDevice(this.onOffDevice);

        return commissioningServer;
    }
}
