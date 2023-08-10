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

export class cmd_config {
    /**
     * Get / Set the NodeId.
     *
     * @param {Array} args
     * @returns 0
     */
    static doConfig(args: string[]): number {
        const argv = yargs(args)
            .options({
                dump: {
                    alias: "d",
                    description: "Dump all storage",
                    type: "boolean",
                },
            })
            .help("help") // provide help on `help` in addition to `--help`
            .exitProcess(false) // do not exit when help option is passed
            .parseSync();

        if (argv.help) return 0;

        console.log(argv);

        //theNode.Store.dump();
        return 0;
    }

    static doLogLevel(args: string[]) {
        if (args.length > 1) {
            //theNode.Store.LogLevel = args[1];
        }
        //console.log(theNode.Store.LogLevel);
        return 0;
    }

    static doTraceLevel(args: string[]) {
        if (args.length > 1) {
            //theNode.Store.TraceLevel = args[1];
        }
        //console.log(theNode.Store.TraceLevel);
        return 0;
    }

    static doNodeId(args: string[]) {
        if (args.length > 1) {
            //theNode.Store.NodeId = args[1];
        }
        //console.log(theNode.Store.NodeId);
        return 0;
    }

    /**
     * Get / Set the FabricId.
     *
     * @param {Array} args
     * @returns 0
     */
    static doFabricId(args: string[]) {
        if (args.length > 1) {
            //theNode.Store.FabricId = args[1];
        }
        //console.log(theNode.Store.FabricId);
        return 0;
    }

    static doPin(args: string[]) {
        let v = theNode.Store.get<number>("pin", 20202021);
        if (args.length > 1) {
            v = Number(args[1]);
            theNode.Store.set("pin", v);
        }
        console.log(v);
        return 0;
    }

    static doNodeNum(args: string[]) {
        let v = theNode.Store.get<number>("nodenum", 0);
        if (args.length > 1) {
            v = Number(args[1]);
            theNode.Store.set("nodenum", v);
        }
        console.log(v);
        return 0;
    }

    static doIpPort(args: string[]) {
        let v = theNode.Store.get<number>("port", 5540);
        if (args.length > 1) {
            v = Number(args[1]);
            theNode.Store.set("port", v);
        }
        console.log(v);
        return 0;
    }

    static doIp(args: string[]) {
        let v = theNode.Store.get<string>("ip", "::1");
        if (args.length > 1) {
            v = args[1];
            theNode.Store.set("ip", v);
        }
        console.log(v);
        return 0;
    }

    static doDaPrivateKey(args: string[]) {
        if (args.length > 1) {
            //theNode.Store.DaPrivateKey = args[1];
        }
        //console.log(theNode.Store.DaPrivateKey);
        return 0;
    }

    static doDaPublicKey(_: string[]) {
        //console.log(theNode.Store.DaPublicKey);
        return 0;
    }

    static doDaCertificate(_: string[]) {
        //console.log(theNode.Store.DaCertificate);
        return 0;
    }
}
