/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter-node.js/log";
import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode.js";

export default function commands(theNode: MatterNode) {
    return {
        command: "subscribe",
        describe: "Handle attribute and event subscriptions",
        builder: (yargs: Argv) =>
            yargs
                // Pair
                .command(
                    "all [node-id]",
                    "Subscribe to all events and attributes of a node",
                    yargs => {
                        return yargs.positional("node-id", {
                            describe: "node id",
                            default: undefined,
                            type: "string",
                        });
                    },
                    async argv => {
                        const { nodeId } = argv;
                        const node = (await theNode.connectAndGetNodes(nodeId))[0];

                        await node.subscribeAllAttributesAndEvents({
                            attributeChangedCallback: ({
                                path: { nodeId, clusterId, endpointId, attributeName },
                                value,
                            }) =>
                                console.log(
                                    `${nodeId}: Attribute ${nodeId}/${endpointId}/${clusterId}/${attributeName} changed to ${Logger.toJSON(
                                        value,
                                    )}`,
                                ),
                            eventTriggeredCallback: ({ path: { nodeId, clusterId, endpointId, eventName }, events }) =>
                                console.log(
                                    `${nodeId} Event ${nodeId}/${endpointId}/${clusterId}/${eventName} triggered with ${Logger.toJSON(
                                        events,
                                    )}`,
                                ),
                        });
                    },
                ),

        handler: async (argv: any) => {
            argv.unhandled = true;
        },
    };
}
