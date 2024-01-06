/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
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
                    const onOff = await device.getClusterClient(OnOffCluster);
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
