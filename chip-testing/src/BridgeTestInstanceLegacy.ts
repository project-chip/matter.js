/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer } from "@project-chip/matter-node.js";

import {
    AdministratorCommissioning,
    BasicAdminCommissioningHandler,
    BasicInformation,
    BridgedDeviceBasicInformation,
    ClusterServer,
    NetworkCommissioning,
} from "@project-chip/matter.js/cluster";
import { DeviceTypeId, EndpointNumber, VendorId } from "@project-chip/matter.js/datatype";
import { Aggregator, DimmableLightDevice } from "@project-chip/matter.js/device";
import { ByteArray } from "@project-chip/matter.js/util";
import { AllClustersTestInstanceLegacy } from "./AllClustersTestInstanceLegacy.js";

export class BridgeTestInstanceLegacy extends AllClustersTestInstanceLegacy {
    aggregator = new Aggregator(undefined, { endpointId: EndpointNumber(2) });
    onOffDeviceEndpoint3: DimmableLightDevice = new DimmableLightDevice(undefined, undefined, {
        endpointId: EndpointNumber(3),
    });

    override async setupCommissioningServer() {
        const commissioningServer = new CommissioningServer({
            port: 5540,
            deviceName: this.appName,
            deviceType: DeviceTypeId(0xffff),
            passcode: this.options.passcode ?? 20202021,
            discriminator: this.options.discriminator ?? 3840,
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

        // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
        commissioningServer.addRootClusterServer(
            ClusterServer(
                AdministratorCommissioning.Cluster.with("Basic"),
                {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                    adminFabricIndex: null,
                    adminVendorId: null,
                },
                BasicAdminCommissioningHandler(),
            ),
        );

        const networkId = new ByteArray(32);
        commissioningServer.addRootClusterServer(
            ClusterServer(
                NetworkCommissioning.Cluster.with("EthernetNetworkInterface"),
                {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                {}, // Ethernet is not requiring any methods
            ),
        );

        this.aggregator.addBridgedDevice(this.onOffDeviceEndpoint3, {
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
        commissioningServer.addDevice(this.aggregator);

        return commissioningServer;
    }
}
