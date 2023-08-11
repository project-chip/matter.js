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

export class cmd_onoff {
    /**
     * Get / Set the NodeId.
     *
     * @param {Array} args
     * @returns 0
     */
    static async doOnOff(args: string[]): Promise<number> {
        const argv = yargs(args)
            .options({})
            .help("help") // provide help on `help` in addition to `--help`
            .exitProcess(false) // do not exit when help option is passed
            .parseSync();

        if (argv.help) return 0;

        await theNode.onoff();

        return 0;
    }
}
