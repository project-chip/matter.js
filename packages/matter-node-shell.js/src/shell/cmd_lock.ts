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

import yargs from "yargs/yargs";
import { theNode } from "../MatterNode";
import { DoorLock } from "@project-chip/matter-node.js/cluster";
import { Logger } from "@project-chip/matter-node.js/log";

const logger = Logger.get("cmd_lock");

export class cmd_lock {
    /**
     * Control DoorLock cluster.
     *
     * @param {Array} args
     * @returns 0
     */
    static async doLock(args: string[]): Promise<number> {
        const argv = yargs(args)
            .options({})
            .help("help") // provide help on `help` in addition to `--help`
            .exitProcess(false) // do not exit when help option is passed
            .parseSync();

        if (argv.help) return 0;

        const node = theNode;

        try {
            await node.commissioningController?.connect();
    
            if (node.commissioningController) {
                const devices = node.commissioningController.getDevices();
                if (devices[0] && devices[0].id === 1) {
                    /*
                    // Command 
                    const lock = devices[0].getClusterClient(DoorLock.Complete);
                    const response = await lock?.getCredentialStatus(
                    )
                    console.log(response);
                    */

                    
                }
            } 
        } catch (error) {
            logger.error(error);
            return 1;
        }

        return 0;
    }
}
