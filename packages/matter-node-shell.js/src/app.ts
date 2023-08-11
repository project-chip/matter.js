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
import { theNode } from "./MatterNode";
import { theCommandList } from "./shell/cli";
import { Shell } from "./shell/Shell";

const PROMPT = "matter-node> ";
const theShell = new Shell(PROMPT, theCommandList);
const logger = Logger.get("Shell");

/**
 * @file Top level application for Matter Node.
 */
function main() {
    const myArgs = process.argv.slice(2);
    const nodenum = myArgs.length > 0 ? Number(myArgs[0]) : 0;
    console.log(`Started Node #${nodenum}`);

    if (myArgs.length > 0) {
        console.log(`nodenum: ${nodenum}`);
    }

    theShell.start();
    theNode.start(nodenum).catch(error => logger.error(error));
}

process.on("message", function (message) {
    console.log(`Message to shell.ts: ${message}`);

    switch (message) {
        case "exit":
            process.exit();
    }
});

process.on("SIGINT", () => {
    // Pragmatic way to make sure the storage is correctly closed before the process ends.
    theNode.closeStorage();
});

main();
