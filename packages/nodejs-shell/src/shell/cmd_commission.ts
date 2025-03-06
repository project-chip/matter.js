/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger, MatterError } from "@matter/general";
import { ManualPairingCodeCodec, NodeId, QrCode } from "@matter/types";
import { BasicInformationCluster, DescriptorCluster, GeneralCommissioning } from "@matter/types/clusters";
import { NodeCommissioningOptions } from "@project-chip/matter.js";
import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode";
import { createDiagnosticCallbacks } from "./cmd_nodes";

export default function commands(theNode: MatterNode) {
    return {
        command: "commission",
        describe: "Handle device commissioning",
        builder: (yargs: Argv) =>
            yargs
                // Pair
                .command("pair", "Pair with a matter device", yargs => {
                    return (
                        yargs
                            // Pair
                            .command(
                                "* [node-id] [ip:[port]]",
                                "Commission a matter device",
                                yargs => {
                                    return yargs
                                        .positional("node-id", {
                                            describe: "node id",
                                            default: undefined,
                                            type: "string",
                                        })
                                        .positional("ip", {
                                            describe: "ip address",
                                            default: undefined,
                                            type: "string",
                                        })
                                        .positional("port", {
                                            describe: "ip port",
                                            default: undefined,
                                            type: "number",
                                        });
                                },
                                async argv => {
                                    const {
                                        pairingCode,
                                        nodeId: nodeIdStr,
                                        ipPort,
                                        ip,
                                        ble = false,
                                        instanceId,
                                    } = argv;
                                    let { setupPinCode, discriminator, shortDiscriminator } = argv;

                                    if (typeof pairingCode === "string") {
                                        const { shortDiscriminator: pairingCodeShortDiscriminator, passcode } =
                                            ManualPairingCodeCodec.decode(pairingCode);
                                        shortDiscriminator = pairingCodeShortDiscriminator;
                                        setupPinCode = passcode;
                                        discriminator = undefined;
                                    } else if (discriminator === undefined && shortDiscriminator === undefined) {
                                        discriminator = 3840;
                                    }

                                    const nodeId = nodeIdStr !== undefined ? NodeId(BigInt(nodeIdStr)) : undefined;
                                    await theNode.start();
                                    if (theNode.commissioningController === undefined) {
                                        throw new Error("CommissioningController not initialized");
                                    }

                                    const options = {
                                        discovery: {
                                            knownAddress:
                                                ip !== undefined && ipPort !== undefined
                                                    ? { ip, port: ipPort, type: "udp" }
                                                    : undefined,
                                            identifierData:
                                                instanceId !== undefined
                                                    ? { instanceId }
                                                    : discriminator !== undefined
                                                      ? { longDiscriminator: discriminator }
                                                      : shortDiscriminator !== undefined
                                                        ? { shortDiscriminator }
                                                        : {},
                                            discoveryCapabilities: {
                                                ble,
                                                onIpNetwork: true,
                                            },
                                        },
                                        passcode: setupPinCode,
                                        ...createDiagnosticCallbacks(),
                                    } as NodeCommissioningOptions;

                                    options.commissioning = {
                                        nodeId: nodeId !== undefined ? NodeId(nodeId) : undefined,
                                        regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.Outdoor, // Set to the most restrictive if relevant
                                        regulatoryCountryCode: "XX",
                                    };

                                    console.log(Logger.toJSON(options));

                                    if (theNode.Store.has("WiFiSsid") && theNode.Store.has("WiFiPassword")) {
                                        options.commissioning.wifiNetwork = {
                                            wifiSsid: await theNode.Store.get<string>("WiFiSsid", ""),
                                            wifiCredentials: await theNode.Store.get<string>("WiFiPassword", ""),
                                        };
                                    }
                                    if (
                                        theNode.Store.has("ThreadName") &&
                                        theNode.Store.has("ThreadOperationalDataset")
                                    ) {
                                        options.commissioning.threadNetwork = {
                                            networkName: await theNode.Store.get<string>("ThreadName", ""),
                                            operationalDataset: await theNode.Store.get<string>(
                                                "ThreadOperationalDataset",
                                                "",
                                            ),
                                        };
                                    }

                                    const commissionedNodeId =
                                        await theNode.commissioningController.commissionNode(options);

                                    console.log("Commissioned Node:", commissionedNodeId);

                                    const node = theNode.commissioningController.getPairedNode(commissionedNodeId);
                                    if (node === undefined) {
                                        // Should not happen
                                        throw new MatterError("Node not found after commissioning.");
                                    }

                                    // Important: This is a temporary API to proof the methods working and this will change soon and is NOT stable!
                                    // It is provided to proof the concept

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
                                },
                            )
                            .options({
                                pairingCode: {
                                    describe: "pairing code",
                                    default: undefined,
                                    type: "string",
                                },
                                setupPinCode: {
                                    describe: "setup pin code",
                                    default: 20202021,
                                    type: "number",
                                },
                                instanceId: {
                                    alias: "i",
                                    describe: "instance id",
                                    type: "string",
                                },
                                discriminator: {
                                    alias: "d",
                                    description: "Long discriminator",
                                    type: "number",
                                },
                                shortDiscriminator: {
                                    alias: "s",
                                    description: "Short discriminator",
                                    type: "number",
                                },
                                ble: {
                                    alias: "b",
                                    description: "Also discover over BLE",
                                    type: "boolean",
                                    default: false,
                                },
                            })
                    );
                })
                .command(
                    "open-basic-window <node-id> [timeout]",
                    "Open a basic commissioning window",
                    yargs => {
                        return yargs
                            .positional("node-id", {
                                describe: "node id",
                                type: "string",
                                demandOption: true,
                            })
                            .positional("timeout", {
                                describe: "timeout in seconds",
                                type: "number",
                                default: 900,
                            });
                    },
                    async argv => {
                        const { nodeId, timeout = 900 } = argv;
                        await theNode.start();
                        const node = (await theNode.connectAndGetNodes(nodeId, { autoSubscribe: false }))[0];

                        await node.openBasicCommissioningWindow(timeout);

                        console.log(`Basic Commissioning Window for node ${nodeId} opened`);
                    },
                )
                .command(
                    "open-enhanced-window <node-id> [timeout]",
                    "Open a enhanced commissioning window",
                    yargs => {
                        return yargs
                            .positional("node-id", {
                                describe: "node id",
                                type: "string",
                                demandOption: true,
                            })
                            .positional("timeout", {
                                describe: "timeout in seconds",
                                type: "number",
                                default: 900,
                            });
                    },
                    async argv => {
                        await theNode.start();
                        const { nodeId, timeout = 900 } = argv;
                        const node = (await theNode.connectAndGetNodes(nodeId, { autoSubscribe: false }))[0];
                        const data = await node.openEnhancedCommissioningWindow(timeout);

                        console.log(`Enhanced Commissioning Window for node ${nodeId} opened`);
                        const { qrPairingCode, manualPairingCode } = data;

                        console.log(QrCode.get(qrPairingCode));
                        console.log(
                            `QR Code URL: https://project-chip.github.io/connectedhomeip/qrcode.html?data=${qrPairingCode}`,
                        );
                        console.log(`Manual pairing code: ${manualPairingCode}`);
                    },
                )
                .command(
                    "unpair <node-id>",
                    "Unpair/Decommission a node",
                    yargs => {
                        return yargs
                            .positional("node-id", {
                                describe: "node id",
                                type: "string",
                                demandOption: true,
                            })
                            .options({
                                force: {
                                    describe: "Force unpairing even if node is not online",
                                    type: "boolean",
                                    default: false,
                                },
                            });
                    },
                    async argv => {
                        await theNode.start();
                        const { nodeId, force } = argv;
                        if (force) {
                            await theNode.controller.removeNode(NodeId(BigInt(nodeId)), !force);
                        } else {
                            const node = (await theNode.connectAndGetNodes(nodeId, { autoSubscribe: false }))[0];
                            await node.decommission();
                        }
                    },
                ),
        handler: async (argv: any) => {
            argv.unhandled = true;
        },
    };
}
