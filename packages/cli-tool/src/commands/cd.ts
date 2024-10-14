/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotADirectoryError } from "#errors.js";
import { Command } from "./command.js";

Command({
    usage: "[PATH]",
    description: "Change current working directory.  If you omit PATH changes to the root directory.",
    maxArgs: 1,

    invoke: async function cd([path]) {
        if (path === undefined) {
            path = "/";
        } else {
            path = `${path}`;
        }

        const location = await this.location.at(`${path}`);

        if (location.kind !== "directory") {
            throw new NotADirectoryError(path);
        }

        this.location = location;
    },
});
