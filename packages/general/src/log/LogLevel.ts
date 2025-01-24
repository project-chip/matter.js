/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function logLevelFromString(level: string) {
    switch (level.toLowerCase()) {
        case "debug":
            return LogLevel.DEBUG;
        case "info":
            return LogLevel.INFO;
        case "notice":
            return LogLevel.NOTICE;
        case "warn":
            return LogLevel.WARN;
        case "error":
            return LogLevel.ERROR;
        case "fatal":
            return LogLevel.FATAL;
        default:
            return LogLevel.INFO;
    }
}

/**
 * Logging severity levels.
 */
export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    NOTICE = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
}
