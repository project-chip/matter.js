/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Format } from "../../src/log/Format.js";
import { Level } from "../../src/log/Level.js";
import { Logger } from "../../src/log/Logger.js";

/**
 * Invoke logic and return any log messages produced.
 */
export function captureLogs(fn: () => void, fromLogger = "default") {
    if (!Logger) {
        throw new Error("No logger loaded, cannot capture logs");
    }
    const logger = Logger.getLoggerforIdentifier(fromLogger);
    const actualLogSettings = {
        logFormatter: logger.logFormatter,
        log: logger.log,
        defaultLogLevel: logger.defaultLogLevel,
        logLevels: { ...logger.logLevels },
    };

    try {
        Logger.setFormatForLogger(fromLogger, Format.PLAIN);
        const captured = new Array<{ level: Level; message: string }>();
        Logger.setLogger(fromLogger, (level, message) =>
            captured.push({
                level,
                message: message.replace(/\d{4}-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d/, "xxxx-xx-xx xx:xx:xx.xxx"),
            }),
        );
        fn();
        return captured;
    } finally {
        Logger.setLogFormatterForLogger(fromLogger, actualLogSettings.logFormatter);
        Logger.setDefaultLoglevelForLogger(fromLogger, actualLogSettings.defaultLogLevel);
        Logger.setLogLevelsForLogger(fromLogger, actualLogSettings.logLevels);
        Logger.setLogger(fromLogger, actualLogSettings.log);
    }
}

/**
 * Run logic and return a singled produced log message.
 */
export function captureLog(fn: () => void, fromLogger?: string) {
    return captureLogs(fn, fromLogger).pop();
}
