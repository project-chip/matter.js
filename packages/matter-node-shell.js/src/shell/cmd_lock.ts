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
