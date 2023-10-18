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

import { IdentifyCluster } from "@project-chip/matter-node.js/cluster";
import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode.js";

export default function commands(theNode: MatterNode) {
    return {
        command: "identify [time] [node-id] [endpoint-id]",
        describe:
            "Trigger Identify command with given time (default 10s). Execute on one node or endpoint, else all onoff clusters will be controlled",
        builder: (yargs: Argv) => {
            return yargs
                .positional("time", {
                    describe: "time in seconds",
                    default: 10,
                    type: "number",
                })
                .positional("node-id", {
                    describe: "node id",
                    default: undefined,
                    type: "string",
                })
                .positional("endpoint-id", {
                    describe: "endpoint id",
                    default: undefined,
                    type: "number",
                });
        },

        handler: async (argv: any) => {
            const { nodeId, time = 10, endpointId } = argv;
            await theNode.iterateNodeDevices(
                await theNode.connectAndGetNodes(nodeId),
                async (device, node) => {
                    const identifyCluster = device.getClusterClient(IdentifyCluster);
                    if (identifyCluster === undefined) {
                        return;
                    }
                    console.log("Invoke Identify for", node.nodeId.toString());
                    await identifyCluster.identify({ identifyTime: time });
                },
                endpointId,
            );
        },
    };
}
