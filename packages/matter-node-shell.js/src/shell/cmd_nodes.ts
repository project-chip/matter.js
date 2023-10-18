/**
 * Copyright 2022 Project CHIP Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode";

export default function commands(theNode: MatterNode) {
    return {
        command: "nodes",
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
                            describe: "node id to log - if ommited the first node is logged.",
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
