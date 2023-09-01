/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Level, Format, Logger } from "../../src/log/Logger.js";

let messageBuffer: [ Level, string ][] | undefined;

let defaultLog: typeof Logger.log | undefined;

function bufferedLog(...args: [ Level, string ]) {
    if (!messageBuffer) {
        messageBuffer = [];
    }
    messageBuffer.push(args);
}

/**
 * Buffer log messages so we can only emit messages for failed tests.
 */
beforeEach(function() {
    messageBuffer = undefined;
    if (Logger) {
        defaultLog = Logger.log;
        Logger.log = bufferedLog;
    }
});

/**
 * Stop buffering log messages and emit buffered messages if test failed.
 */
afterEach(function() {
    disableLogBuffering();
    if (!Logger) {
        return;
    }
    if (messageBuffer) {
        if (this.currentTest?.isFailed()) {
            for (const args of messageBuffer) {
                Logger.log(...args);
            }
        }
        messageBuffer = undefined;
    }
});

/**
 * Disable default log buffering.
 */
export function disableLogBuffering() {
    if (Logger && defaultLog) {
        Logger.log = defaultLog;
        defaultLog = undefined;
    }
}

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
