#!/usr/bin/env node
/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This example shows how to create a simple on-off Matter device.
 * It can be used as CLI script and starting point for your own device node implementation.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import { CommissioningServer, MatterServer } from "@project-chip/matter-node.js";

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { Ble } from "@project-chip/matter-node.js/ble";
import { ClusterServer, GeneralCommissioningCluster, NetworkCommissioning } from "@project-chip/matter-node.js/cluster";
import { OnOffLightDevice, OnOffPluginUnitDevice } from "@project-chip/matter-node.js/device";
import { Format, Level, Logger } from "@project-chip/matter-node.js/log";
import { StorageBackendDisk, StorageManager } from "@project-chip/matter-node.js/storage";
import { Time } from "@project-chip/matter-node.js/time";
import {
    ByteArray,
    commandExecutor,
    getIntParameter,
    getParameter,
    hasParameter,
    logEndpoint,
    requireMinNodeVersion,
    singleton,
} from "@project-chip/matter-node.js/util";
import { DeviceTypeId, VendorId } from "@project-chip/matter.js/datatype";

const logger = Logger.get("Device");

requireMinNodeVersion(16);

/** Configure logging */
switch (getParameter("loglevel")) {
    case "fatal":
        Logger.defaultLogLevel = Level.FATAL;
        break;
    case "error":
        Logger.defaultLogLevel = Level.ERROR;
        break;
    case "warn":
        Logger.defaultLogLevel = Level.WARN;
        break;
    case "info":
        Logger.defaultLogLevel = Level.INFO;
        break;
}

switch (getParameter("logformat")) {
    case "plain":
        Logger.format = Format.PLAIN;
        break;
    case "html":
        Logger.format = Format.HTML;
        break;
    default:
        if (process.stdin?.isTTY) Logger.format = Format.ANSI;
}

if (hasParameter("ble")) {
    // Initialize Ble
    Ble.get = singleton(
        () =>
            new BleNode({
                hciId: getIntParameter("ble-hci-id"),
            }),
    );
}

const storageLocation = getParameter("store") ?? ".device-node";
const storage = new StorageBackendDisk(storageLocation, hasParameter("clearstorage"));
logger.info(`Storage location: ${storageLocation} (Directory)`);
logger.info(
    'Use the parameter "-store NAME" to specify a different storage location, use -clearstorage to start with an empty storage.',
);

class Device {
    private matterServer: MatterServer | undefined;

    async start() {
        logger.info(`node-matter`);

        /**
         * Initialize the storage system.
         *
         * The storage manager is then also used by the Matter server, so this code block in general is required,
         * but you can choose a different storage backend as long as it implements the required API.
         */

        const storageManager = new StorageManager(storage);
        await storageManager.initialize();

        /**
         * Collect all needed data
         *
         * This block makes sure to collect all needed data from cli or storage. Replace this with where ever your data
         * come from.
         *
         * Note: This example also uses the initialized storage system to store the device parameter data for convenience
         * and easy reuse. When you also do that be careful to not overlap with Matter-Server own contexts
         * (so maybe better not ;-)).
         */

        const deviceStorage = storageManager.createContext("Device");

        if (deviceStorage.has("isSocket")) {
            logger.info("Device type found in storage. -type parameter is ignored.");
        }
        const isSocket = deviceStorage.get("isSocket", getParameter("type") === "socket");
        const deviceName = "Matter test device";
        const vendorName = "matter-node.js";
        const passcode = getIntParameter("passcode") ?? deviceStorage.get("passcode", 20202021);
        const discriminator = getIntParameter("discriminator") ?? deviceStorage.get("discriminator", 3840);
        // product name / id and vendor id should match what is in the device certificate
        const vendorId = getIntParameter("vendorid") ?? deviceStorage.get("vendorid", 0xfff1);
        const productName = `node-matter OnOff ${isSocket ? "Socket" : "Light"}`;
        const productId = getIntParameter("productid") ?? deviceStorage.get("productid", 0x8000);

        const netAnnounceInterface = getParameter("announceinterface");
        const port = getIntParameter("port") ?? 5540;

        const uniqueId = getIntParameter("uniqueid") ?? deviceStorage.get("uniqueid", Time.nowMs());

        deviceStorage.set("passcode", passcode);
        deviceStorage.set("discriminator", discriminator);
        deviceStorage.set("vendorid", vendorId);
        deviceStorage.set("productid", productId);
        deviceStorage.set("isSocket", isSocket);
        deviceStorage.set("uniqueid", uniqueId);

        /**
         * Create Device instance and add needed Listener
         *
         * Create an instance of the matter device class you want to use.
         * This example uses the OnOffLightDevice or OnOffPluginUnitDevice depending on the value of the type  parameter.
         * To execute the on/off scripts defined as parameters a listener for the onOff attribute is registered via the
         * device specific API.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled device internally
         * like identify that can be implemented with the logic when these commands are called.
         */

        const onOffDevice = isSocket ? new OnOffPluginUnitDevice() : new OnOffLightDevice();
        onOffDevice.addOnOffListener(on => commandExecutor(on ? "on" : "off")?.());

        onOffDevice.addCommandHandler("identify", async ({ request: { identifyTime } }) =>
            logger.info(`Identify called for OnOffDevice: ${identifyTime}`),
        );

        /**
         * Create Matter Server and CommissioningServer Node
         *
         * To allow the device to be announced, found, paired and operated we need a MatterServer instance and add a
         * commissioningServer to it and add the just created device instance to it.
         * The CommissioningServer node defines the port where the server listens for the UDP packages of the Matter protocol
         * and initializes deice specific certificates and such.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled internally
         * like testEventTrigger (General Diagnostic Cluster) that can be implemented with the logic when these commands
         * are called.
         */

        this.matterServer = new MatterServer(storageManager, netAnnounceInterface);

        const commissioningServer = new CommissioningServer({
            port,
            deviceName,
            deviceType: DeviceTypeId(onOffDevice.deviceType),
            passcode,
            discriminator,
            basicInformation: {
                vendorName,
                vendorId: VendorId(vendorId),
                nodeLabel: productName,
                productName,
                productLabel: productName,
                productId,
                serialNumber: `node-matter-${uniqueId}`,
            },
            delayedAnnouncement: hasParameter("ble"), // Delay announcement when BLE is used to show how limited advertisement works
        });

        // optionally add a listener for the testEventTrigger command from the GeneralDiagnostics cluster
        commissioningServer.addCommandHandler("testEventTrigger", async ({ request: { enableKey, eventTrigger } }) =>
            logger.info(`testEventTrigger called on GeneralDiagnostic cluster: ${enableKey} ${eventTrigger}`),
        );

        /**
         * Modify automatically added clusters of the Root endpoint if needed
         * In this example we change the networkCommissioning cluster into one for "Wifi only" devices when BLE is used
         * for commissioning, to demonstrate how to do this.
         * If you want to implement Ethernet only devices that get connected to the network via LAN/Ethernet cable,
         * then all this is not needed.
         * The same as shown here for Wi-Fi is also possible theoretical for Thread only or combined devices.
         */

        if (hasParameter("ble")) {
            // matter.js will create a Ethernet-only device by default when ut comes to Network Commissioning Features.
            // To offer e.g. a "Wi-Fi only device" (or any other combination) we need to override the Network Commissioning
            // cluster and implement all the need handling here. This is a "static implementation" for pure demonstration
            // purposes and just "simulates" the actions to be done. In a real world implementation this would be done by
            // the device implementor based on the relevant networking stack.
            // The NetworkCommissioningCluster and all logics are described in Matter Core Specifications section 11.8
            const firstNetworkId = new ByteArray(32);
            commissioningServer.addRootClusterServer(
                ClusterServer(
                    NetworkCommissioning.Cluster.with(NetworkCommissioning.Feature.WiFiNetworkInterface),
                    {
                        maxNetworks: 1,
                        interfaceEnabled: true,
                        lastConnectErrorValue: 0,
                        lastNetworkId: null,
                        lastNetworkingStatus: null,
                        networks: [{ networkId: firstNetworkId, connected: false }],
                        scanMaxTimeSeconds: 3,
                        connectMaxTimeSeconds: 3,
                    },
                    {
                        scanNetworks: async ({
                            request: { ssid, breadcrumb },
                            attributes: { lastNetworkingStatus },
                            endpoint,
                        }) => {
                            console.log(
                                `---> scanNetworks called on NetworkCommissioning cluster: ${ssid?.toHex()} ${breadcrumb}`,
                            );

                            // Simulate successful scan
                            if (breadcrumb !== undefined) {
                                const generalCommissioningCluster =
                                    endpoint.getClusterServer(GeneralCommissioningCluster);
                                generalCommissioningCluster?.setBreadcrumbAttribute(breadcrumb);
                            }

                            const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
                            lastNetworkingStatus?.setLocal(networkingStatus);

                            return {
                                networkingStatus,
                                wiFiScanResults: [
                                    {
                                        security: {
                                            Unencrypted: false,
                                            Wep: false,
                                            "WPA-PERSONAL": false,
                                            "WPA2-PERSONAL": true,
                                            "WPA3-PERSONAL": true,
                                        },
                                        ssid:
                                            ssid ||
                                            ByteArray.fromString(getParameter("ble-wifi-scan-ssid") ?? "TestSSID"), // Set a valid existing local Wi-Fi SSID here
                                        bssid: ByteArray.fromString(
                                            getParameter("ble-wifi-scan-bssid") ?? "00:00:00:00:00:00",
                                        ),
                                        channel: 1,
                                    },
                                ],
                            };
                        },
                        addOrUpdateWiFiNetwork: async ({
                            request: { ssid, credentials, breadcrumb },
                            attributes: { lastNetworkingStatus, lastNetworkId },
                            endpoint,
                        }) => {
                            console.log(
                                `---> addOrUpdateWiFiNetwork called on NetworkCommissioning cluster: ${ssid.toHex()} ${credentials.toHex()} ${breadcrumb}`,
                            );

                            // TODO Check if failsafe is armed

                            // Simulate successful add or update
                            if (breadcrumb !== undefined) {
                                const generalCommissioningCluster =
                                    endpoint.getClusterServer(GeneralCommissioningCluster);
                                generalCommissioningCluster?.setBreadcrumbAttribute(breadcrumb);
                            }

                            const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
                            lastNetworkingStatus?.setLocal(networkingStatus);
                            lastNetworkId?.setLocal(firstNetworkId);

                            return {
                                networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                                networkIndex: 0,
                            };
                        },
                        removeNetwork: async ({
                            request: { networkId, breadcrumb },
                            attributes: { lastNetworkingStatus, lastNetworkId },
                            endpoint,
                        }) => {
                            console.log(
                                `---> removeNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${breadcrumb}`,
                            );

                            // TODO Check if failsafe is armed

                            // Simulate successful add or update
                            if (breadcrumb !== undefined) {
                                const generalCommissioningCluster =
                                    endpoint.getClusterServer(GeneralCommissioningCluster);
                                generalCommissioningCluster?.setBreadcrumbAttribute(breadcrumb);
                            }

                            const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
                            lastNetworkingStatus?.setLocal(networkingStatus);
                            lastNetworkId?.setLocal(firstNetworkId);

                            return {
                                networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                                networkIndex: 0,
                            };
                        },
                        connectNetwork: async ({
                            request: { networkId, breadcrumb },
                            attributes: { lastNetworkingStatus, lastNetworkId, lastConnectErrorValue, networks },
                            endpoint,
                            session,
                        }) => {
                            console.log(
                                `---> connectNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${breadcrumb}`,
                            );

                            // TODO Check if failsafe is armed

                            // Simulate successful connection
                            if (breadcrumb !== undefined) {
                                const generalCommissioningCluster =
                                    endpoint.getClusterServer(GeneralCommissioningCluster);
                                generalCommissioningCluster?.setBreadcrumbAttribute(breadcrumb);
                            }

                            const networkList = networks.getLocal();
                            networkList[0].connected = true;
                            networks.setLocal(networkList);

                            const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
                            lastNetworkingStatus?.setLocal(networkingStatus);
                            lastNetworkId?.setLocal(firstNetworkId);
                            lastConnectErrorValue?.setLocal(null);

                            // Announce operational in IP network
                            const device = session.getContext();
                            await device.startAnnouncement();

                            return {
                                networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                                errorValue: null,
                            };
                        },
                        reorderNetwork: async ({
                            request: { networkId, networkIndex, breadcrumb },
                            attributes: { lastNetworkingStatus },
                            endpoint,
                        }) => {
                            console.log(
                                `---> reorderNetwork called on NetworkCommissioning cluster: ${networkId.toHex()} ${networkIndex} ${breadcrumb}`,
                            );

                            // Simulate successful connection
                            if (breadcrumb !== undefined) {
                                const generalCommissioningCluster =
                                    endpoint.getClusterServer(GeneralCommissioningCluster);
                                generalCommissioningCluster?.setBreadcrumbAttribute(breadcrumb);
                            }

                            const networkingStatus = NetworkCommissioning.NetworkCommissioningStatus.Success;
                            lastNetworkingStatus?.setLocal(networkingStatus);

                            return {
                                networkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                                networkIndex: 0,
                            };
                        },
                    },
                ),
            );
        }

        commissioningServer.addDevice(onOffDevice);

        this.matterServer.addCommissioningServer(commissioningServer);

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */

        await this.matterServer.start();

        logEndpoint(commissioningServer.getRootEndpoint());

        // When we want to limit the initial announcement to one medium (e.g. BLE) then we need to delay the
        // announcement and provide the limiting information.
        // Without delaying the announcement is directly triggered with the above "start()" call.
        if (hasParameter("ble")) {
            // Announce operational in BLE network only if we have ble enabled, else everywhere
            await commissioningServer.advertise({ ble: true });
        }

        /**
         * Print Pairing Information
         *
         * If the device is not already commissioned (this info is stored in the storage system) then get and print the
         * pairing details. This includes the QR code that can be scanned by the Matter app to pair the device.
         */

        logger.info("Listening");
        if (!commissioningServer.isCommissioned()) {
            const pairingData = commissioningServer.getPairingCode({
                ble: hasParameter("ble"),
                softAccessPoint: false,
                onIpNetwork: false,
            });

            const { qrCode, qrPairingCode, manualPairingCode } = pairingData;

            console.log(qrCode);
            logger.info(
                `QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`,
            );
            logger.info(`Manual pairing code: ${manualPairingCode}`);
        } else {
            logger.info("Device is already commissioned. Waiting for controllers to connect ...");
        }
    }

    async stop() {
        await this.matterServer?.close();
    }
}

const device = new Device();
device
    .start()
    .then(() => {
        /* done */
    })
    .catch(err => console.error(err));

process.on("SIGINT", () => {
    device
        .stop()
        .then(() => {
            // Pragmatic way to make sure the storage is correctly closed before the process ends.
            storage
                .close()
                .then(() => process.exit(0))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
});
