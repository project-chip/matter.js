/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
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
                    })
                    .options({
                        ble: {
                            description: "Enable BLE support",
                            type: "boolean",
                        },
                        "factory-reset": {
                            description: "Factory-Reset storage of this node",
                            default: false,
                            type: "boolean",
                        },
                        "net-interface": {
                            description: "Network interface to use for MDNS announcements and scanning",
                            type: "string",
                            default: undefined,
                        },
                    });
            },
            async argv => {
                if (argv.help) return;

                const { nodeNum, ble, nodeType, factoryReset, netInterface } = argv;

                theNode = new MatterNode(nodeNum, netInterface);
                await theNode.initialize(factoryReset);

                const theShell = new Shell(theNode, PROMPT);

                if (ble) {
                    const hciId = await theNode.Store.get<number>("BleHciId", 0);
                    // Initialize Ble
                    Ble.get = singleton(() => new BleNode({ hciId }));
                }

                setLogLevel(await theNode.Store.get<string>("LogLevel", "info"));

                console.log(`Started Node #${nodeNum} (Type: ${nodeType}) ${ble ? "with" : "without"} BLE`);
                theShell.start();
            },
        )
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
