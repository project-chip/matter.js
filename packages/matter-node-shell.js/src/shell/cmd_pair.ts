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
import { BleNode } from "@project-chip/matter-node-ble.js/ble";
import { Ble } from "@project-chip/matter-node.js/ble";
import { CommissioningOptions } from "@project-chip/matter-node.js/protocol";
import { GeneralCommissioning } from "@project-chip/matter-node.js/cluster";
import { Logger } from "@project-chip/matter-node.js/log";
import { singleton } from "@project-chip/matter-node.js/util";

const logger = Logger.get("cmd_pair");

export class cmd_pair {
    /**
     * Get / Set the NodeId.
     *
     * @param {Array} args
     * @returns 0
     */
    static async doPair(args: string[]): Promise<number> {
        const argv = yargs(args)
            .options({
                discriminator: {
                    alias: "d",
                    description: "Long descriminator",
                    type: "number",
                    default: 3840,
                },
                pincode: {
                    alias: "p",
                    description: "Pairing PASE pincode",
                    type: "number",
                    default: 20202021,
                },
                ble: {
                    alias: "b",
                    description: "Pair over BLE",
                    type: "boolean",
                    default: false,
                },
                wifiSsid: {
                    alias: "w",
                    description: "WiFi Network SSID",
                    type: "string",
                },
                wifiPassword: {
                    alias: "wp",
                    description: "WiFi Network Password",
                    type: "string",
                    default: "",
                },
                threadName: {
                    alias: "t",
                    description: "Thread Network Name",
                    type: "string",
                },
                threadCredentials: {
                    alias: "tc",
                    description: "Thread Credentials / Operational Dataset",
                    type: "string",
                },
            })
            .help("help") // provide help on `help` in addition to `--help`
            .exitProcess(false) // do not exit when help option is passed
            .parseSync();

        if (argv.help) return 0;

        if (! theNode.commissioningController) {
            console.log("ERROR: commissioning controlller not initialized")
            return 1;
        }

        theNode.commissioningController.Pincode = argv.pincode;
        theNode.commissioningController.Discriminator = argv.discriminator;

        if (argv.ble) {
            // Initialize Ble
            Ble.get = singleton(() => new BleNode());
        }

        const commissioningOptions: CommissioningOptions = {
            regulatoryLocation: GeneralCommissioning.RegulatoryLocationType.IndoorOutdoor,
            regulatoryCountryCode: "XX",
        };

        if (argv.wifiSsid !== undefined && argv.wifiPassword !== undefined) {
            logger.info(`Commissioning with WiFi: ${argv.wifiSsid}`);
            commissioningOptions.wifiNetwork = {
                wifiSsid: argv.wifiSsid,
                wifiCredentials: argv.wifiPassword
            };
        }

        if (argv.threadName !== undefined && argv.threadCredentials!== undefined) {
            logger.info(`Commissioning with Thread: ${argv.threadNetworkName}`);
            commissioningOptions.threadNetwork = {
                networkName: argv.threadName,
                operationalDataset: argv.threadCredentials
            };
        }

        theNode.commissioningController.CommissioningOptions = commissioningOptions;
        await theNode.pair();

        return 0;
    }
}
