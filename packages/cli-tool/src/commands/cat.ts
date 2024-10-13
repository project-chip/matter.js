/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { bin } from "#globals.js";
import { stdout } from "process";
import { inspect } from "util";

bin.cat = async function (...args: unknown[]) {
    const locations = await Promise.all(args.map(arg => this.location.at(`${arg}`)));
    for (const location of locations) {
        stdout.write(inspect(location.definition, false, 1, stdout.isTTY));
        stdout.write("\n");
    }
};

bin.inspect = bin.cat;
