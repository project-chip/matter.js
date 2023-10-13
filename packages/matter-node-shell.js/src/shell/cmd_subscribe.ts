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
                                    `Attribute ${nodeId}/${endpointId}/${clusterId}/${attributeName} changed to ${Logger.toJSON(
                                        value,
                                    )}`,
                                ),
                            eventTriggeredCallback: ({ path: { nodeId, clusterId, endpointId, eventName }, events }) =>
                                console.log(
                                    `Event ${nodeId}/${endpointId}/${clusterId}/${eventName} triggered with ${Logger.toJSON(
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
