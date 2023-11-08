/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Argv } from "yargs";
import { MatterNode } from "../MatterNode";

export default function commands(_theNode: MatterNode) {
    return {
        command: "lock <command> [node-id] [endpoint-id]",
        describe: "Operate lock cluster",
        builder: (yargs: Argv) => {
            return yargs
                .positional("command", {
                    describe: "lock command to invoke",
                    choices: ["toggle", "on", "off"] as const,
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
            console.log("lock command TBD: ", argv.command);
        },
    };
}
