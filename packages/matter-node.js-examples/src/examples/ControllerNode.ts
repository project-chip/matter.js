#!/usr/bin/env node

/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This example shows how to create a Matter controller to pair with a device and interfact with it.
 * It can be used as CLI script, but is more thought as a starting point for your own controller implementation
 * because you need to adjust the code in any way depending on your use case.
 */

/**
 * Import needed modules from @project-chip/matter-node.js
 */
// Include this first to auto-register Crypto, Network and Time Node.js implementations
// Include this first to auto-register Crypto, Network and Time Node.js implementations
import "@project-chip/matter-node.js";

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { requireMinNodeVersion } from "@project-chip/matter-node.js/util";
import { CommissioningController, NodeCommissioningOptions } from "@project-chip/matter.js";
import { Ble } from "@project-chip/matter.js/ble";
import {
    BasicInformationCluster,
    DescriptorCluster,
    GeneralCommissioning,
    OnOffCluster,
} from "@project-chip/matter.js/cluster";
import { NodeId } from "@project-chip/matter.js/datatype";
import { NodeStateInformation } from "@project-chip/matter.js/device";
import { Environment, StorageService } from "@project-chip/matter.js/environment";
import { Logger } from "@project-chip/matter.js/log";
import { CommissioningOptions } from "@project-chip/matter.js/protocol";
import { ManualPairingCodeCodec } from "@project-chip/matter.js/schema";
import { Time } from "@project-chip/matter.js/time";
import { singleton } from "@project-chip/matter.js/util";

const logger = Logger.get("Controller");

requireMinNodeVersion(16);

const environment = Environment.default;

if (environment.vars.get("ble")) {
    // Initialize Ble
    Ble.get = singleton(
        () =>
            new BleNode({
                hciId: environment.vars.number("ble-hci-id"),
            }),
    );
}

const storageService = environment.get(StorageService);

console.log(`Storage location: ${storageService.location} (Directory)`);
logger.info(
    'Use the parameter "--storage-path=NAME-OR-PATH" to specify a different storage location in this directory, use --storage-clear to start with an empty storage.',
);

class ControllerNode {
    async start() {
        logger.info(`node-matter Controller started`);

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

        const controllerStorage = (await storageService.open("controller")).createContext("data");
        const ip = controllerStorage.has("ip") ? controllerStorage.get<string>("ip") : environment.vars.string("ip");
        const port = controllerStorage.has("port")
            ? controllerStorage.get<number>("port")
            : environment.vars.number("port");
        const uniqueId = controllerStorage.has("uniqueid")
            ? controllerStorage.get<string>("uniqueid")
            : environment.vars.string("uniqueid") ?? Time.nowMs().toString();
        controllerStorage.set("uniqueid", uniqueId);

        const pairingCode = environment.vars.string("pairingcode");
        let longDiscriminator, setupPin, shortDiscriminator;
        if (pairingCode !== undefined) {
            const pairingCodeCodec = ManualPairingCodeCodec.decode(pairingCode);
            shortDiscriminator = pairingCodeCodec.shortDiscriminator;
            longDiscriminator = undefined;
            setupPin = pairingCodeCodec.passcode;
            logger.debug(`Data extracted from pairing code: ${Logger.toJSON(pairingCodeCodec)}`);
        } else {
            longDiscriminator =
                environment.vars.number("longDiscriminator") ?? controllerStorage.get("longDiscriminator", 3840);
            if (longDiscriminator > 4095) throw new Error("Discriminator value must be less than 4096");
            setupPin = environment.vars.number("pin") ?? controllerStorage.get("pin", 20202021);
        }
        if ((shortDiscriminator === undefined && longDiscriminator === undefined) || setupPin === undefined) {
            throw new Error(
                "Please specify the longDiscriminator of the device to commission with -longDiscriminator or provide a valid passcode with -passcode",
            );
        }

        // Collect commissioning options from commandline parameters
        const commissioningOptions: CommissioningOptions = {
            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
            regulatoryCountryCode: "XX",
        };

        let ble = false;
        if (environment.vars.get("ble")) {
            ble = true;
            const wifiSsid = environment.vars.string("ble-wifi-ssid");
            const wifiCredentials = environment.vars.string("ble-wifi-credentials");
            const threadNetworkName = environment.vars.string("ble-thread-networkname");
            const threadOperationalDataset = environment.vars.string("ble-thread-operationaldataset");
            if (wifiSsid !== undefined && wifiCredentials !== undefined) {
                logger.info(`Registering Commissioning over BLE with WiFi: ${wifiSsid}`);
                commissioningOptions.wifiNetwork = {
                    wifiSsid: wifiSsid,
                    wifiCredentials: wifiCredentials,
                };
            }
            if (threadNetworkName !== undefined && threadOperationalDataset !== undefined) {
                logger.info(`Registering Commissioning over BLE with Thread: ${threadNetworkName}`);
                commissioningOptions.threadNetwork = {
                    networkName: threadNetworkName,
                    operationalDataset: threadOperationalDataset,
                };
            }
        }

        /**
         * Create Matter Server and Controller Node
         *
         * To allow the device to be announced, found, paired and operated we need a MatterServer instance and add a
         * CommissioningController to it and add the just created device instance to it.
         * The Controller node defines the port where the server listens for the UDP packages of the Matter protocol
         * and initializes deice specific certificates and such.
         *
         * The below logic also adds command handlers for commands of clusters that normally are handled internally
         * like testEventTrigger (General Diagnostic Cluster) that can be implemented with the logic when these commands
         * are called.
         */

        const commissioningController = new CommissioningController({
            environment: {
                environment,
                id: uniqueId,
            },
            autoConnect: false,
        });

        /**
         * Start the Matter Server
         *
         * After everything was plugged together we can start the server. When not delayed announcement is set for the
         * CommissioningServer node then this command also starts the announcement of the device into the network.
         */
        await commissioningController.start();

        if (!commissioningController.isCommissioned()) {
            const options = {
                commissioning: commissioningOptions,
                discovery: {
                    knownAddress: ip !== undefined && port !== undefined ? { ip, port, type: "udp" } : undefined,
                    identifierData:
                        longDiscriminator !== undefined
                            ? { longDiscriminator }
                            : shortDiscriminator !== undefined
                              ? { shortDiscriminator }
                              : {},
                    discoveryCapabilities: {
                        ble,
                    },
                },
                passcode: setupPin,
            } as NodeCommissioningOptions;
            logger.info(`Commissioning ... ${JSON.stringify(options)}`);
            const nodeId = await commissioningController.commissionNode(options);

            console.log(`Commissioning successfully done with nodeId ${nodeId}`);
        }

        /**
         * TBD
         */
        try {
            const nodes = commissioningController.getCommissionedNodes();
            console.log("Found commissioned nodes:", Logger.toJSON(nodes));

            const nodeId = NodeId(environment.vars.number("nodeid") ?? nodes[0]);
            if (!nodes.includes(nodeId)) {
                throw new Error(`Node ${nodeId} not found in commissioned nodes`);
            }

            const node = await commissioningController.connectNode(nodeId, {
                attributeChangedCallback: (
                    peerNodeId,
                    { path: { nodeId, clusterId, endpointId, attributeName }, value },
                ) =>
                    console.log(
                        `attributeChangedCallback ${peerNodeId}: Attribute ${nodeId}/${endpointId}/${clusterId}/${attributeName} changed to ${Logger.toJSON(
                            value,
                        )}`,
                    ),
                eventTriggeredCallback: (peerNodeId, { path: { nodeId, clusterId, endpointId, eventName }, events }) =>
                    console.log(
                        `eventTriggeredCallback ${peerNodeId}: Event ${nodeId}/${endpointId}/${clusterId}/${eventName} triggered with ${Logger.toJSON(
                            events,
                        )}`,
                    ),
                stateInformationCallback: (peerNodeId, info) => {
                    switch (info) {
                        case NodeStateInformation.Connected:
                            console.log(`stateInformationCallback ${peerNodeId}: Node ${nodeId} connected`);
                            break;
                        case NodeStateInformation.Disconnected:
                            console.log(`stateInformationCallback ${peerNodeId}: Node ${nodeId} disconnected`);
                            break;
                        case NodeStateInformation.Reconnecting:
                            console.log(`stateInformationCallback ${peerNodeId}: Node ${nodeId} reconnecting`);
                            break;
                        case NodeStateInformation.WaitingForDeviceDiscovery:
                            console.log(
                                `stateInformationCallback ${peerNodeId}: Node ${nodeId} waiting for device discovery`,
                            );
                            break;
                        case NodeStateInformation.StructureChanged:
                            console.log(`stateInformationCallback ${peerNodeId}: Node ${nodeId} structure changed`);
                            break;
                        case NodeStateInformation.Decommissioned:
                            console.log(`stateInformationCallback ${peerNodeId}: Node ${nodeId} decommissioned`);
                            break;
                    }
                },
            });

            // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
            // It is provided to proof the concept

            node.logStructure();

            // Example to initialize a ClusterClient and access concrete fields as API methods
            const descriptor = node.getRootClusterClient(DescriptorCluster);
            if (descriptor !== undefined) {
                console.log(await descriptor.attributes.deviceTypeList.get()); // you can call that way
                console.log(await descriptor.getServerListAttribute()); // or more convenient that way
            } else {
                console.log("No Descriptor Cluster found. This should never happen!");
            }

            // Example to subscribe to a field and get the value
            const info = node.getRootClusterClient(BasicInformationCluster);
            if (info !== undefined) {
                console.log(await info.getProductNameAttribute()); // This call is executed remotely
                //console.log(await info.subscribeProductNameAttribute(value => console.log("productName", value), 5, 30));
                //console.log(await info.getProductNameAttribute()); // This call is resolved locally because we have subscribed to the value!
            } else {
                console.log("No BasicInformation Cluster found. This should never happen!");
            }

            // Example to get all Attributes of the commissioned node: */*/*
            //const attributesAll = await interactionClient.getAllAttributes();
            //console.log("Attributes-All:", Logger.toJSON(attributesAll));

            // Example to get all Attributes of all Descriptor Clusters of the commissioned node: */DescriptorCluster/*
            //const attributesAllDescriptor = await interactionClient.getMultipleAttributes([{ clusterId: DescriptorCluster.id} ]);
            //console.log("Attributes-Descriptor:", JSON.stringify(attributesAllDescriptor, null, 2));

            // Example to get all Attributes of the Basic Information Cluster of endpoint 0 of the commissioned node: 0/BasicInformationCluster/*
            //const attributesBasicInformation = await interactionClient.getMultipleAttributes([{ endpointId: 0, clusterId: BasicInformationCluster.id} ]);
            //console.log("Attributes-BasicInformation:", JSON.stringify(attributesBasicInformation, null, 2));

            const devices = node.getDevices();
            if (devices[0] && devices[0].number === 1) {
                // Example to subscribe to all Attributes of endpoint 1 of the commissioned node: */*/*
                //await interactionClient.subscribeMultipleAttributes([{ endpointId: 1, /* subscribe anything from endpoint 1 */ }], 0, 180, data => {
                //    console.log("Subscribe-All Data:", Logger.toJSON(data));
                //});

                const onOff = devices[0].getClusterClient(OnOffCluster);
                if (onOff !== undefined) {
                    let onOffStatus = await onOff.getOnOffAttribute();
                    console.log("initial onOffStatus", onOffStatus);

                    onOff.addOnOffAttributeListener(value => {
                        console.log("subscription onOffStatus", value);
                        onOffStatus = value;
                    });
                    // read data every minute to keep up the connection to show the subscription is working
                    setInterval(() => {
                        onOff
                            .toggle()
                            .then(() => {
                                onOffStatus = !onOffStatus;
                                console.log("onOffStatus", onOffStatus);
                            })
                            .catch(error => logger.error(error));
                    }, 60000);
                }
            }
        } finally {
            //await matterServer.close(); // Comment out when subscribes are used, else the connection will be closed
            setTimeout(() => process.exit(0), 1000000);
        }
    }
}

new ControllerNode().start().catch(error => logger.error(error));
