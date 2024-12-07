/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, Storage } from "@matter/general";
import { Endpoint, Environment, ServerNode, StorageService } from "@matter/main";
import { AdministratorCommissioningServer } from "@matter/main/behaviors/administrator-commissioning";
import { ApplicationBasicServer } from "@matter/main/behaviors/application-basic";
import { WakeOnLanServer } from "@matter/main/behaviors/wake-on-lan";
import { AdministratorCommissioning, ApplicationBasic, BasicInformation } from "@matter/main/clusters";
import { DimmableLightDevice } from "@matter/main/devices/dimmable-light";
import { DeviceTypeId, EndpointNumber, VendorId } from "@matter/main/types";
import { log, TestInstance } from "./GenericTestApp.js";
import { TestLowPowerServer } from "./cluster/TestLowPowerServer.js";

export class TvTestInstance implements TestInstance {
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
            log.error(error);
            log.error((error as Error).stack);
            throw error;
        }
        log.directive(`======> ${this.appName}: Setup done`);
    }

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.serverNode) throw new Error("serverNode not initialized on start");

        const env = Environment.default;
        env.vars.set("mdns.networkInterface", "en0");

        try {
            await this.serverNode.start();
            const { qrPairingCode } = this.serverNode.state.commissioning.pairingCodes;
            // Magic logging chip testing waits for
            log.directive(`SetupQRCode: [${qrPairingCode}]`);
            log.directive();
            // Magic logging chip testing waits for
            log.directive("mDNS service published:");
            log.directive();

            log.directive(`======> ${this.appName}: Instance started`);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            log.error(error);
        }
        log.directive("=====>>> STARTED");
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.serverNode) throw new Error("serverNode not initialized on close");
        await this.serverNode.close();
        //this.serverNode.cancel();
        //await this.serverNode.lifecycle.act;
        this.serverNode = undefined;
        log.directive(`======> ${this.appName}: Instance stopped`);
    }

    async setupServer(): Promise<ServerNode> {
        Environment.default.get(StorageService).factory = (_namespace: string) => this.storage;

        const serverNode = await ServerNode.create(
            ServerNode.RootEndpoint.with(
                // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
                AdministratorCommissioningServer.with("Basic"),
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
                    deviceType: DeviceTypeId(0x0101),
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
                    reachable: true,
                },
                administratorCommissioning: {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                },
            },
        );

        const endpoint1 = new Endpoint(
            DimmableLightDevice.with(ApplicationBasicServer, WakeOnLanServer, TestLowPowerServer),
            {
                number: EndpointNumber(1),
                id: "app1",
                applicationBasic: {
                    vendorName: "TestVendor",
                    vendorId: VendorId(0x1234),
                    productId: 0x5678,
                    applicationName: "TestApp",
                    application: {
                        catalogVendorId: VendorId(0x1234),
                        applicationId: "Test",
                    },
                    status: ApplicationBasic.ApplicationStatus.Stopped,
                    applicationVersion: "1",
                },
                wakeOnLan: {
                    macAddress: "000000000000",
                    linkLocalAddress: Bytes.fromHex("00000000000000000000000000000000"),
                },
            },
        );
        await serverNode.add(endpoint1);

        const endpoint3 = new Endpoint(DimmableLightDevice.with(ApplicationBasicServer), {
            number: EndpointNumber(3),
            id: "app3",
            applicationBasic: {
                vendorName: "TestVendor",
                vendorId: VendorId(0x1234),
                productId: 0x5678,
                applicationName: "TestApp",
                application: {
                    catalogVendorId: VendorId(0x1234),
                    applicationId: "Test",
                },
                status: ApplicationBasic.ApplicationStatus.Stopped,
                applicationVersion: "1",
            },
        });
        await serverNode.add(endpoint3);

        return serverNode;
    }
}
