#!/usr/bin/env node

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

import { cmd_config } from "./cmd_config";
import { cmd_onoff } from "./cmd_onoff";
import { cmd_pair } from "./cmd_pair";

interface CommandEntry {
    command: string;
    help: string;
    handler: (args: string[]) => number | Promise<number>;
}

/* eslint-disable */
/**
 * JSON array defining all top-level commands.
 */
export const theCommandList: CommandEntry[] = [
    {
        command: "help",
        help: "Display list of all commands",
        handler: doHelp,
    },
    {
        command: "exit",
        help: "Exit the shell",
        handler: doExit,
    },
    {
        command: "config",
        help: "Display all config variables",
        handler: cmd_config.doConfig,
    },
    {
        command: "nodenum",
        help: "Get and set the node number",
        handler: cmd_config.doNodeNum,
    },
    {
        command: "pin",
        help: "Get and set the pairing pin",
        handler: cmd_config.doPin,
    },
    {
        command: "port",
        help: "Get and set the IP port",
        handler: cmd_config.doIpPort,
    },
    {
        command: "ip",
        help: "Get and set the IP address",
        handler: cmd_config.doIp,
    },
    {
        command: "pair",
        help: "Commission a device",
        handler: cmd_pair.doPair,
    },
    {
        command: "onoff",
        help: "Control on/off cluster state",
        handler: cmd_onoff.doOnOff,
    },
];
/* eslint-enable */

/**
 * Run the `exit` command and terminate the shell.
 *
 * @param {string[]} args array of string arguments
 * @returns 0
 */
function doExit(_: string[]): number {
    console.log("Goodbye");
    process.exit(0);
    return 0;
}

/**
 * Run the `help` command and output list of commands.
 *
 * @param {string[]} args array of string arguments
 * @returns 0
 */
function doHelp(_: string[]): number {
    theCommandList.forEach(entry => {
        console.log(entry["command"] + "\t" + entry["help"]);
    });
    return 0;
}
