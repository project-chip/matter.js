/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

interface LoggerLike {
    format: string;
    log(level: number, message: string): void;
}

declare global {
    let MatterLoggerSink: ((level: number, message: string) => void) | undefined;
}

(globalThis as any).MatterLoggerHook = (Logger: LoggerLike) => {
    // Currently everywhere we run tests supports ANSI escape codes for
    // colorization.  This includes:
    //
    // - Node console
    // - Github actions
    // - Headless browser -> node console
    // - VS code/webstorm terminal
    //
    // Should this become a PITA we can add an option to disable
    Logger.format = "ansi";

    let messageBuffer: [ number, string ][] | undefined;
    let defaultLog: LoggerLike["log"] | undefined;
    
    function bufferedLog(...args: [ number, string ]) {
        if (MatterLoggerSink) {
            MatterLoggerSink(...args);
        } else {
            if (!messageBuffer) {
                messageBuffer = [];
            }
            messageBuffer.push(args);
        }
    }

    // Divert log messages for test duration
    beforeEach(function() {
        messageBuffer = undefined;
        if (Logger) {
            defaultLog = Logger.log;
            Logger.log = bufferedLog;
        }
    });

    // Emit log messages only if the test fails
    afterEach(function() {
        if (!defaultLog) {
            return;
        }

        Logger.log = defaultLog;
        defaultLog = undefined;

        if (messageBuffer) {
            if (this.currentTest?.isFailed()) {
                for (const args of messageBuffer) {
                    Logger.log(...args);
                }
            }
            messageBuffer = undefined;
        }
    });
}
