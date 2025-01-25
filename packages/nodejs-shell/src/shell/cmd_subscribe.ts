/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@matter/general";
import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode.js";

export default function commands(theNode: MatterNode) {
    return {
        command: "subscribe [node-id]",
        describe: "Subscribe to all events and attributes of a node",
        builder: (yargs: Argv) => {
            return yargs.positional("node-id", {
                describe: "node id",
                default: undefined,
                type: "string",
            });
        },

        handler: async (argv: any) => {
            const { nodeId } = argv;
            const node = (await theNode.connectAndGetNodes(nodeId))[0];

            await node.subscribeAllAttributesAndEvents({
                attributeChangedCallback: ({ path: { nodeId, clusterId, endpointId, attributeName }, value }) =>
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
    };
}
