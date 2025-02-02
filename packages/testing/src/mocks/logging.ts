/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ansi, Wrapper } from "#tools/ansi-text";

interface LoggerLike {
    format: string;
    log(level: number, message: string): void;
}

export interface MockLogger {
    emitAll: boolean;
    injectExternalMessage: (source: string, text: string) => void;
}

export const TheMockLogger: MockLogger = {
    emitAll: false,
    injectExternalMessage: (source: string, text: string) => console.log(formatExternalMessage(source, text)),
};

function formatExternalMessage(source: string, text: string) {
    return `${Wrapper.prefixStart}${ansi.black.bg.cyan.bold(` ${source} `)} ${Wrapper.prefixStop}${ansi.dim(text)}`;
}

/**
 * These functions are invoked by beforeEach/afterEach handlers in generalSetup for Mocha.
 *
 * We place them in an array here rather than calling the global hook functions so that load order doesn't matter.  We
 * use an array so that if multiple Logger classes are created (e.g. one for CJS and one for ESM) we don't have to worry
 * about which logger is doing the logging.
 */
export const LoggerHooks = {
    beforeEach: Array<(mocha: Mocha) => void>(),
    afterEach: Array<(mocha: Mocha) => void>(),
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

    TheMockLogger.injectExternalMessage = (source, text) => interceptingLogger(0, formatExternalMessage(source, text));

    Logger.log = interceptingLogger;

    // Divert log messages for test duration
    LoggerHooks.beforeEach.push(function () {
        if (!TheMockLogger.emitAll) {
            messageBuffer = [];
        }
    });

    // Emit log messages only if the test fails
    LoggerHooks.afterEach.push(mocha => {
        if (messageBuffer?.length) {
            if (mocha.suite.ctx.currentTest?.isFailed()) {
                for (const args of messageBuffer) {
                    passMessage(args);
                }
            }
            messageBuffer = undefined;
        }
    });
}
