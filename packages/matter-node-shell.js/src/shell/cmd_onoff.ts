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

import { OnOffCluster } from "@project-chip/matter-node.js/cluster";
import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode";

export default function commands(theNode: MatterNode) {
    return {
        command: "onoff <command> [node-id] [endpoint-id]",
        describe: "Operate OnOff Cluster. Execute on one node or endpoint, else all onoff clusters will be controlled",
        builder: (yargs: Argv) => {
            return yargs
                .positional("command", {
                    describe: "onoff command to invoke or 'read' to read the value",
                    choices: ["toggle", "on", "off", "read"] as const,
                    default: "toggle",
                    type: "string",
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
            const { nodeId, command, endpointId } = argv;
            await theNode.iterateNodeDevices(
                await theNode.connectAndGetNodes(nodeId),
                async device => {
                    const onOff = device.getClusterClient(OnOffCluster);
                    if (onOff === undefined) {
                        return;
                    }
                    const onOffStatusBefore = await onOff.getOnOffAttribute();
                    if (command === "read") {
                        console.log("onOffStatus", onOffStatusBefore);
                        return;
                    }

                    console.log("onOffStatus before invoke", onOffStatusBefore);
                    switch (command) {
                        case "toggle":
                            await onOff.toggle();
                            break;
                        case "on":
                            await onOff.on();
                            break;
                        case "off":
                            await onOff.off();
                            break;
                    }
                    const onOffStatusAfter = await onOff.getOnOffAttribute();
                    console.log("onOffStatus after invoke", onOffStatusAfter);
                },
                endpointId,
            );
        },
    };
}
