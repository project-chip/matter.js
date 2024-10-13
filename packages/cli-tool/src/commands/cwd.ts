/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TooManyArgsError } from "#errors.js";
import { bin } from "#globals.js";
import { stdout } from "process";

bin.cwd = function (...args: unknown[]) {
    if (args.length) {
        throw new TooManyArgsError("cwd");
    }

    stdout.write(this.location.path);
    stdout.write("\n");
};
