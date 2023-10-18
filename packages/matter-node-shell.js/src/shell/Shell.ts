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

import { MatterError } from "@project-chip/matter-node.js/common";
import readline from "readline";
import type { Argv } from "yargs";
import yargs from "yargs/yargs";
import { MatterNode } from "../MatterNode.js";
import { exit } from "../app";
import cmdCommission from "./cmd_commission.js";
import cmdConfig from "./cmd_config.js";
import cmdIdentify from "./cmd_identify.js";
import cmdLock from "./cmd_lock.js";
import cmdNodes from "./cmd_nodes.js";
import cmdOnOff from "./cmd_onoff.js";
import cmdSession from "./cmd_session.js";

import cmdSubscribe from "./cmd_subscribe.js";

function exitCommand() {
    return {
        command: "exit",
        describe: "Exit",
        builder: {},
        handler: async () => {
            console.log("Goodbye.");
            await exit();
        },
    };
}

/**
 * Class to process and dispatch shell commands.
 */
export class Shell {
    configExecPassthrough = false;
    readline?: readline.Interface;
    yargsInstance?: Argv;

    /**
     * Construct a new Shell object.
     *
     * @param {MatterNode} theNode MatterNode object to use for all commands.
     * @param {string} prompt Prompt string to use for each command line.
     * @param {Array} commandList Array of JSON commands dispatch structures.
     */
    constructor(
        public theNode: MatterNode,
        public prompt: string,
    ) {}

    start() {
        this.readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true,
            prompt: this.prompt,
        });
        this.readline
            .on("line", cmd => {
                this.onReadLine(cmd.trim()).catch(e => {
                    process.stderr.write(`Read error: ${e}\n`);
                    process.exit(1);
                });
            })
            .on("close", () => {
                process.stdout.write("goodbye\n");
                process.exit(0);
            });

        this.readline.prompt();
    }

    /**
     * Method to process a line of raw cli text input.
     *
     * @param {string} line
     */
    async onReadLine(line: string) {
        if (line) {
            const args = line.split(/\s+/);
            const yargsInstance = yargs(args)
                .command([
                    cmdCommission(this.theNode),
                    cmdConfig(this.theNode),
                    cmdLock(this.theNode),
                    cmdSession(this.theNode),
                    cmdNodes(this.theNode),
                    cmdOnOff(this.theNode),
                    cmdSubscribe(this.theNode),
                    cmdIdentify(this.theNode),
                    exitCommand(),
                ])
                .command({
                    command: "*",
                    handler: argv => {
                        argv.unhandled = true;
                    },
                })
                .exitProcess(false)
                .version(false)
                .help("help")
                .scriptName("")
                .strictCommands(false)
                .strictOptions(false)
                .fail(false)
                .strict(false);
            try {
                const argv = await yargsInstance.wrap(yargsInstance.terminalWidth()).parseAsync();

                if (argv.unhandled) {
                    process.stderr.write(`Unknown command: ${line}\n`);
                    yargsInstance.showHelp();
                }
            } catch (error) {
                process.stderr.write(`Error happened during command: ${error}\n`);
                if (error instanceof Error && error.stack) {
                    process.stderr.write(error.stack.toString());
                    process.stderr.write("\n");
                }
                if (!(error instanceof MatterError)) {
                    yargsInstance.showHelp();
                }
            }
        }
        this.readline?.prompt();
    }
}
