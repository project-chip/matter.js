/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

interface LoggerLike {
    format: string;
    log(level: number, message: string): void;
}

export interface MockLogger {
    emitAll: boolean;
}

export const TheMockLogger: MockLogger = {
    emitAll: false,
};

export function loggerSetup(Logger: LoggerLike) {
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

    let messageBuffer: [number, string][] | undefined;

    const defaultLog = Logger.log;

    function passMessage(args: [number, string]) {
        defaultLog.apply(Logger, args);
    }

    function interceptingLogger(...args: [number, string]) {
        let emitAll = TheMockLogger.emitAll;
        if (MatterHooks?.loggerSink) {
            MatterHooks.loggerSink(...args);
        } else if (!emitAll) {
            if (messageBuffer) {
                messageBuffer.push(args);
            } else {
                emitAll = true;
            }
        }

        if (emitAll) {
            passMessage(args);
        }
    }

    Logger.log = interceptingLogger;

    // Divert log messages for test duration
    beforeEach(function () {
        if (!TheMockLogger.emitAll) {
            messageBuffer = [];
        }
    });

    // Emit log messages only if the test fails
    afterEach(function () {
        if (messageBuffer?.length) {
            if (this.currentTest?.isFailed()) {
                for (const args of messageBuffer) {
                    passMessage(args);
                }
            }
            messageBuffer = undefined;
        }
    });
}
