/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { Time } from "../time/Time.js";
import * as console from "console"

export enum Level {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4,
}

function logFormater(now: Date, level: Level, logger: string, values: any[]) {
    const formattedNow = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now.getMilliseconds().toString().padStart(3, "0")}`;
    const formattedValues = values.map(value => {
        if (value instanceof ByteArray) {
            return value.toHex();
        } else if (value instanceof Error) {
            return value.stack;
        }
        return value.toString()
    });
    return `${formattedNow} ${Level[level]} ${logger} ${formattedValues.join(" ")}`;
}

function consoleLogger(level: Level, formatedLog: string) {
    switch (level) {
        case Level.DEBUG: console.debug(formatedLog); break;
        case Level.INFO: console.info(formatedLog); break;
        case Level.WARN: console.warn(formatedLog); break;
        case Level.ERROR: console.error(formatedLog); break;
        case Level.FATAL: console.error(formatedLog); break;
    }
}

/**
 * Logger that can be used to emit traces.
 *
 * Usage:
 * const logger = Logger.get("loggerName");
 * logger.debug("My debug message", "my extra value to log");
 *
 * Configuration:
 * Logger.defaultLogLevel sets the default log level for all the logger
 * Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
 */

export class Logger {
    static logFormater: (now: Date, level: Level, logger: string, ...values: any[]) => string = logFormater;
    static log: (level: Level, formatedLog: string) => void = consoleLogger;
    static defaultLogLevel = Level.DEBUG;
    static logLevels: { [logger: string]: Level } = {};

    static get(name: string) {
        return new Logger(name);
    }

    /**
     * Returns the value as (BigInt aware) stringified JSON.
     */
    static toJSON(data: any) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v);
    }

    constructor(
        private readonly name: string,
    ) { }

    debug = (...values: any[]) => this.log(Level.DEBUG, values);
    info = (...values: any[]) => this.log(Level.INFO, values);
    warn = (...values: any[]) => this.log(Level.WARN, values);
    error = (...values: any[]) => this.log(Level.ERROR, values);
    fatal = (...values: any[]) => this.log(Level.FATAL, values);

    private log(level: Level, values: any[]) {
        if (level < (Logger.logLevels[this.name] ?? Logger.defaultLogLevel)) return;
        Logger.log(level, Logger.logFormater(Time.now(), level, this.name, values));
    }
}
