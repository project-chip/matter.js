/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode";

export default function commands(theNode: MatterNode) {
    return {
        command: ["nodes", "node"],
        describe: "Manage nodes",
        builder: (yargs: Argv) =>
            yargs
                // Pair
                .command(
                    ["*", "list [status]"],
                    "List all commissioned nodes",
                    yargs => {
                        return yargs.positional("status", {
                            describe: "status",
                            options: ["commissioned", "connected"] as const,
                            default: "commissioned",
                            type: "string",
                        });
                    },
                    async argv => {
                        const { status } = argv;
                        await theNode.start();
                        if (theNode.commissioningController === undefined) {
                            throw new Error("CommissioningController not initialized");
                        }
                        switch (status) {
                            case "commissioned": {
                                const nodeIds = theNode.commissioningController.getCommissionedNodes();
                                console.log(nodeIds.map(nodeId => nodeId.toString()));
                                break;
                            }
                            case "connected": {
                                const nodeIds = theNode.commissioningController
                                    .getCommissionedNodes()
                                    .filter(nodeId => !!theNode.commissioningController?.getConnectedNode(nodeId));
                                console.log(nodeIds.map(nodeId => nodeId.toString()));
                                break;
                            }
                        }
                    },
                )
                .command(
                    "log [node-id]",
                    "Log the Structure of one node",
                    yargs => {
                        return yargs.positional("node-id", {
                            describe: "node id to log - if omitted the first node is logged.",
                            default: undefined,
                            type: "string",
                        });
                    },
                    async argv => {
                        const { nodeId } = argv;
                        const node = (await theNode.connectAndGetNodes(nodeId))[0];

                        console.log("Logging structure of Node ", node.nodeId.toString());
                        node.logStructure();
                    },
                ),
        handler: async (argv: any) => {
            argv.unhandled = true;
        },
    };
}
