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

import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { Ble } from "@project-chip/matter-node.js/ble";
import { Format, Level, Logger } from "@project-chip/matter-node.js/log";
import { singleton } from "@project-chip/matter-node.js/util";
import yargs from "yargs/yargs";
import { MatterNode } from "./MatterNode.js";
import { Shell } from "./shell/Shell";

const PROMPT = "matter-node> ";
const logger = Logger.get("Shell");
if (process.stdin?.isTTY) Logger.format = Format.ANSI;

let theNode: MatterNode;

export function setLogLevel(level: string): void {
    let logLevel = Level.INFO;
    switch (level) {
        case "fatal":
            logLevel = Level.FATAL;
            break;
        case "error":
            logLevel = Level.ERROR;
            break;
        case "warn":
            logLevel = Level.WARN;
            break;
        case "debug":
            logLevel = Level.DEBUG;
            break;
    }
    Logger.defaultLogLevel = logLevel;
}

/**
 * @file Top level application for Matter Node.
 */
async function main() {
    const yargsInstance = yargs(process.argv.slice(2))
        .command(
            "* [node-num] [node-type]",
            "Matter Node Shell",
            yargs => {
                return yargs
                    .positional("node-num", {
                        describe: "Node number for storage",
                        default: 0,
                        type: "number",
                    })
                    .positional("node-type", {
                        describe: "Type of the node",
                        choices: ["controller"],
                        default: "controller",
                        type: "string",
                    });
            },
            async argv => {
                if (argv.help) return;

                const { nodeNum, ble, nodeType } = argv;

                const theNode = new MatterNode(nodeNum);
                await theNode.initialize();
                const theShell = new Shell(theNode, PROMPT);

                if (ble) {
                    // Initialize Ble
                    Ble.get = singleton(
                        () =>
                            new BleNode({
                                hciId: theNode.Store.get<number>("BleHciId", 0),
                            }),
                    );
                }

                setLogLevel(theNode.Store.get<string>("LogLevel", "info"));

                console.log(`Started Node #${nodeNum} (Type: ${nodeType}) ${ble ? "with" : "without"} BLE`);
                theShell.start();
            },
        )
        .options({
            ble: {
                description: "Enable BLE support",
                type: "boolean",
            },
        })
        .version(false)
        .scriptName("shell");
    await yargsInstance.wrap(yargsInstance.terminalWidth()).parseAsync();
}

process.on("message", function (message) {
    console.log(`Message to shell.ts: ${message}`);

    switch (message) {
        case "exit":
            exit().catch(error => logger.error(error));
    }
});

export async function exit(code = 0) {
    await theNode?.close();
    process.exit(code);
}

process.on("SIGINT", () => {
    // Pragmatic way to make sure the storage is correctly closed before the process ends.
    exit().catch(error => logger.error(error));
});

main().catch(error => logger.error(error));
