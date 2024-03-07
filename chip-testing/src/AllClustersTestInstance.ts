/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioningServer } from "@project-chip/matter.js/behavior/definitions/administrator-commissioning";
import { FixedLabelServer } from "@project-chip/matter.js/behavior/definitions/fixed-label";
import { NetworkCommissioningServer } from "@project-chip/matter.js/behavior/definitions/network-commissioning";
import { UserLabelServer } from "@project-chip/matter.js/behavior/definitions/user-label";
import { AdministratorCommissioning, BasicInformation, NetworkCommissioning } from "@project-chip/matter.js/cluster";
import { DeviceTypeId, EndpointNumber, VendorId } from "@project-chip/matter.js/datatype";
import { DimmableLightDevice } from "@project-chip/matter.js/devices/DimmableLightDevice";
import { Endpoint } from "@project-chip/matter.js/endpoint";
import { Environment, StorageService } from "@project-chip/matter.js/environment";
import { ServerNode } from "@project-chip/matter.js/node";
import { Storage } from "@project-chip/matter.js/storage";
import { ByteArray } from "@project-chip/matter.js/util";
import { TestInstance } from "./GenericTestApp.js";

export class AllClustersTestInstance implements TestInstance {
    serverNode: ServerNode | undefined;
    //storageManager: StorageManager;
    protected appName: string;

    constructor(
        public storage: Storage,
        protected options: {
            appName: string;
            discriminator?: number;
            passcode?: number;
        },
    ) {
        //this.storageManager = new StorageManager(storage);
        this.appName = options.appName;
    }

    /** Set up the test instance MatterServer. */
    async setup() {
        try {
            //await this.storageManager.initialize(); // hacky but works

            this.serverNode = await this.setupServer();
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
        if (!this.serverNode) throw new Error("serverNode not initialized on start");

        /*
        const env = Environment.default;
        env.vars.set("mdns.networkInterface", "en0");
         */

        try {
            await this.serverNode.bringOnline();
            const { qrPairingCode } = this.serverNode.state.commissioning.pairingCodes;
            // Magic logging chip testing waits for
            console.log(`SetupQRCode: [${qrPairingCode}]`);
            console.log();
            // Magic logging chip testing waits for
            console.log("mDNS service published:");
            console.log();

            console.log(`======> ${this.appName}: Instance started`);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
        }
        console.log("=====>>> STARTED");
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.serverNode) throw new Error("serverNode not initialized on close");
        await this.serverNode.close();
        //this.serverNode.cancel();
        //await this.serverNode.lifecycle.act;
        this.serverNode = undefined;
        console.log(`======> ${this.appName}: Instance stopped`);
    }

    async setupServer(): Promise<ServerNode> {
        Environment.default.get(StorageService).factory = (_namespace: string) => this.storage;

        const networkId = new ByteArray(32);

        const serverNode = await ServerNode.create(
            ServerNode.RootEndpoint.with(
                //BasicInformationServer.enable({ events: { shutDown: true, leave: true } }),
                // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
                AdministratorCommissioningServer.with("Basic"),
                // Set the correct Ethernet netwerk Commissioning cluster
                NetworkCommissioningServer.with("EthernetNetworkInterface"),
                UserLabelServer,
            ),
            {
                id: "binford-6100",
                network: {
                    port: 5540,
                    //advertiseOnStartup: false,
                },
                commissioning: {
                    passcode: this.options.passcode ?? 20202021,
                    discriminator: this.options.discriminator ?? 3840,
                },
                productDescription: {
                    name: this.appName,
                    deviceType: DeviceTypeId(0xffff),
                },
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
                    localConfigDisabled: false,
                    productAppearance: {
                        finish: BasicInformation.ProductFinish.Satin,
                        primaryColor: BasicInformation.Color.Purple,
                    },
                },
                administratorCommissioning: {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                },
                networkCommissioning: {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                userLabel: {
                    labelList: [{ label: "foo", value: "bar" }],
                },
            },
        );

        const endpoint1 = new Endpoint(DimmableLightDevice.with(FixedLabelServer, UserLabelServer), {
            number: EndpointNumber(1),
            id: "onoff1",
            fixedLabel: {
                labelList: [
                    { label: "foo", value: "bar" },
                    { label: "foo2", value: "bar2" },
                ],
            },
            userLabel: {
                labelList: [{ label: "foo", value: "bar" }],
            },
        });

        await serverNode.add(endpoint1);

        return serverNode;
    }
}
