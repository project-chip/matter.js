/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Level } from "@project-chip/matter.js/log";
import { createWriteStream } from "fs";

/**
 * Creates a file based logger to append to the given path.
 * The file is opened on start and closed when the process shuts down.
 * Errors are logged to the console.
 */
export function createFileLogger(path: string) {
    const writer = createWriteStream(path, {
        flags: "a",
    });
    process.on("beforeExit", () => writer.close(err => err && console.error(`Failed to close log file: ${err}`)));

    return (_level: Level, formattedLog: string) => {
        try {
            writer.write(`${formattedLog}\n`);
        } catch (error) {
            console.error(`Failed to write to log file: ${error}`);
        }
    };
}
