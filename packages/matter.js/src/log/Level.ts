/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function levelFromString(level: string) {
    switch (level.toLowerCase()) {
        case "debug":
            return Level.DEBUG;
        case "info":
            return Level.INFO;
        case "notice":
            return Level.NOTICE;
        case "warn":
            return Level.WARN;
        case "error":
            return Level.ERROR;
        case "fatal":
            return Level.FATAL;
        default:
            return Level.INFO;
    }
}

/**
 * Logging severity levels.
 */
export enum Level {
    DEBUG = 0,
    INFO = 1,
    NOTICE = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
}
