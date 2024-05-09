/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningServer, MatterServer } from "@project-chip/matter-node.js";

import { Storage, StorageManager } from "@project-chip/matter.js/storage";

import {
    AdministratorCommissioning,
    BasicAdminCommissioningHandler,
    BasicInformation,
    ClusterServer,
    NetworkCommissioning,
    UserLabel,
} from "@project-chip/matter.js/cluster";
import { DeviceTypeId, EndpointNumber, VendorId } from "@project-chip/matter.js/datatype";
import { DimmableLightDevice } from "@project-chip/matter.js/device";
import { ByteArray } from "@project-chip/matter.js/util";
import { TestInstance } from "./GenericTestApp.js";

export class AllClustersTestInstanceLegacy implements TestInstance {
    matterServer: MatterServer | undefined;
    storageManager: StorageManager;
    commissioningServer: CommissioningServer | undefined;
    protected appName: string;
    onOffDeviceEndpoint1: DimmableLightDevice = new DimmableLightDevice(undefined, undefined, {
        endpointId: EndpointNumber(1),
    });

    constructor(
        storage: Storage,
        protected options: {
            appName: string;
            discriminator?: number;
            passcode?: number;
        },
    ) {
        this.storageManager = new StorageManager(storage);
        this.appName = options.appName;
    }

    /** Set up the test instance MatterServer. */
    async setup() {
        try {
            await this.storageManager.initialize(); // hacky but works
            this.matterServer = new MatterServer(this.storageManager /*, { mdnsInterface: "en0" } */);

            this.commissioningServer = await this.setupCommissioningServer();
            await this.matterServer.addCommissioningServer(this.commissioningServer);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
            console.log((error as Error).stack);
            throw error;
        }
        console.log(`======> ${this.appName}: Setup done`);
    }

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.matterServer) throw new Error("serverNode not initialized on start");
        try {
            await this.matterServer.start();
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
        }

        const pairingData = this.commissioningServer?.getPairingCode();
        if (!pairingData) throw new Error("No pairing data available");
        const { qrPairingCode } = pairingData;

        // Magic logging chip testing waits for
        console.log(`SetupQRCode: [${qrPairingCode}]`);
        console.log();
        // Magic logging chip testing waits for
        console.log("mDNS service published:");
        console.log();

        console.log(`======> ${this.appName}: Instance started`);
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.matterServer) throw new Error("serverNode not initialized on close");
        await this.matterServer.close();
        this.matterServer = undefined;
        console.log(`======> ${this.appName}: Instance stopped`);
    }

    async setupCommissioningServer() {
        const commissioningServer = new CommissioningServer({
            port: 5540,
            deviceName: this.appName,
            deviceType: DeviceTypeId(0xffff),
            passcode: this.options.passcode ?? 20202021,
            discriminator: this.options.discriminator ?? 3840,
            basicInformation: {
                vendorName: "Binford",
                vendorId: VendorId(0xfff1),
                nodeLabel: "",
                productName: "MorePowerPro 6100",
                productLabel: "MorePowerPro 6100",
                productId: 0x8001,
                serialNumber: `9999-9999-9999`,
                manufacturingDate: "20210101",
                partNumber: "123456",
                productUrl: "https://test.com",
                uniqueId: `node-matter-unique`,
                productAppearance: {
                    finish: BasicInformation.ProductFinish.Satin,
                    primaryColor: BasicInformation.Color.Purple,
                },
                reachable: true,
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
        commissioningServer.addRootClusterServer(
            ClusterServer(
                UserLabel.Cluster,
                {
                    labelList: [],
                },
                {},
            ),
        );

        this.onOffDeviceEndpoint1.addFixedLabel("foo", "bar");
        this.onOffDeviceEndpoint1.addFixedLabel("foo", "bar2");
        this.onOffDeviceEndpoint1.addUserLabel("foo", "bar");

        commissioningServer.addDevice(this.onOffDeviceEndpoint1);

        return commissioningServer;
    }
}
