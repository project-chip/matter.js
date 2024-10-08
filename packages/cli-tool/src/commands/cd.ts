/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotADirectoryError, TooManyArgsError } from "#errors.js";
import { bin } from "#globals.js";

bin.cd = async function (path, ...extraArgs: unknown[]) {
    if (extraArgs.length) {
        throw new TooManyArgsError("cd");
    }

    if (path === undefined) {
        path = "/";
    } else {
        path = `${path}`;
    }

    const location = await this.location.at(path as string);

    if (location.kind !== "directory") {
        throw new NotADirectoryError(path);
    }

    this.location = location;
};
