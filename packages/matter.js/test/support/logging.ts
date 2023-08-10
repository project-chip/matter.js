/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Level, Logger } from "../../src/log/Logger.js";

export function captureLogs(fn: () => void) {
    const actualLogSettings = {
        logFormatter: Logger.logFormatter,
        log: Logger.log,
        defaultLogLevel: Logger.defaultLogLevel,
        logLevels: { ...Logger.logLevels },
    };

    try {
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

export function captureLog(fn: () => void) {
    return captureLogs(fn).pop();
}
