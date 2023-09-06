/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Level, Format, Logger } from "../../src/log/Logger.js";

/**
 * Invoke logic and return any log messages produced.
 */
export function captureLogs(fn: () => void) {
    if (!Logger) {
        throw new Error("No logger loaded, cannot capture logs");
    }
    const actualLogSettings = {
        logFormatter: Logger.logFormatter,
        log: Logger.log,
        defaultLogLevel: Logger.defaultLogLevel,
        logLevels: { ...Logger.logLevels },
    };

    try {
        Logger.format = Format.PLAIN;
        const captured = new Array<{ level: Level; message: string }>();
        Logger.log = (level, message) =>
            captured.push({
                level,
                message: message.replace(/\d{4}-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d/, "xxxx-xx-xx xx:xx:xx.xxx"),
            });
        fn();
        return captured;
    } finally {
        Object.assign(Logger, actualLogSettings);
    }
}

/**
 * Run logic and return a singled produced log message.
 */
export function captureLog(fn: () => void) {
    return captureLogs(fn).pop();
}
