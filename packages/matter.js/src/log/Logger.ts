/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";
import { Format } from "./Format.js";
import { Level } from "./Level.js";

/**
 * Log messages to the console.  This is the default logging mechanism.
 */
export function consoleLogger(level: Level, formattedLog: string) {
    const console = (<any>consoleLogger).console;
    switch (level) {
        case Level.DEBUG:
            console.debug(formattedLog);
            break;
        case Level.INFO:
            console.info(formattedLog);
            break;
        case Level.NOTICE:
            console.info(formattedLog);
            break;
        case Level.WARN:
            console.warn(formattedLog);
            break;
        case Level.ERROR:
            console.error(formattedLog);
            break;
        case Level.FATAL:
            console.error(formattedLog);
            break;
    }
}

const globalConsole = console;
export namespace consoleLogger {
    /**
     * The target for consoleLogger.
     */
    // eslint-disable-next-line prefer-const
    export let console = globalConsole;
}

/**
 * Logger that can be used to emit traces.
 *
 * Usage:
 * const facility = Logger.get("loggerName");
 * facility.debug("My debug message", "my extra value to log");
 *
 * Configuration:
 * Logger.defaultLogLevel sets the default log level for all the facility
 * Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
 * Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter
 */
export class Logger {
    static logFormatter: (
        now: Date,
        level: Level,
        facility: string,
        nestingPrefix: string,
        values: unknown[],
    ) => string = Format.plain;
    static log: (level: Level, formattedLog: string) => void = consoleLogger;
    static defaultLogLevel = Level.DEBUG;
    static logLevels: { [facility: string]: Level } = {};
    static nestingLevel = 0;

    /**
     * Set log level using configuration-style level name or number.
     */
    static set level(level: number | string) {
        if (level === undefined) {
            level = Level.DEBUG;
        }

        let levelNum;
        if (typeof level === "string") {
            if (level.match(/^[0-9]+$/)) {
                levelNum = Number.parseInt(level);
            } else {
                levelNum = (Level as unknown as Record<string, number | undefined>)[level.toUpperCase()];
                if (levelNum === undefined) {
                    throw new ImplementationError(`Unsupported log level "${level}"`);
                }
            }
        } else {
            levelNum = level;
        }

        if (Level[levelNum] === undefined) {
            throw new ImplementationError(`Unsupported log level "${level}"`);
        }

        this.defaultLogLevel = levelNum;
    }

    /**
     * Set logFormatter using configuration-style format name.
     *
     * @param format the name of the formatter (see Format enum)
     */
    static set format(format: string) {
        this.logFormatter = Format(format);
    }

    /**
     * Create a new facility.
     *
     * @param name the name of the facility
     * @returns a new facility
     */
    static get(name: string) {
        return new Logger(name);
    }

    /**
     * Stringify a value (BigInt aware) as JSON.
     *
     * @param data the value to stringify
     * @returns the stringified value
     */
    static toJSON(data: any) {
        return JSON.stringify(data, (_, value) => {
            if (typeof value === "bigint") {
                return value.toString();
            }
            if (value instanceof ByteArray) {
                return value.toHex();
            }
            if (value === undefined) {
                return "undefined";
            }
            return value;
        });
    }

    /**
     * Mask a string with a given character. If unmaskedLength is provided then these number of characters will be
     * shown unmasked.
     *
     * @param str String to mask
     * @param maskChar character to mask with
     * @param unmaskedLength number of characters to show unmasked in the beginning
     */
    static maskString(str: string, maskChar = "*", unmaskedLength?: number) {
        return str.substring(0, unmaskedLength ?? 0) + str.substring(unmaskedLength ?? 0).replace(/./g, maskChar);
    }

    /**
     * Perform operations in a nested logging context.  Messages will be
     * indented while the context executes.
     */
    static nest<T>(context: () => T): T {
        this.nestingLevel++;
        try {
            return context();
        } finally {
            this.nestingLevel--;
        }
    }

    /**
     * Async version of nest().
     */
    static async nestAsync(context: () => Promise<any>) {
        this.nestingLevel++;
        try {
            return await context();
        } finally {
            this.nestingLevel--;
        }
    }

    constructor(private readonly name: string) {}

    debug = (...values: any[]) => this.log(Level.DEBUG, values);
    info = (...values: any[]) => this.log(Level.INFO, values);
    notice = (...values: any[]) => this.log(Level.NOTICE, values);
    warn = (...values: any[]) => this.log(Level.WARN, values);
    error = (...values: any[]) => this.log(Level.ERROR, values);
    fatal = (...values: any[]) => this.log(Level.FATAL, values);

    private log(level: Level, values: any[]) {
        if (level < (Logger.logLevels[this.name] ?? Logger.defaultLogLevel)) return;
        Logger.log(level, Logger.logFormatter(Time.now(), level, this.name, nestingPrefix(), values));
    }
}

// Hook for testing frameworks
if (typeof MatterHooks !== "undefined") {
    MatterHooks.loggerSetup?.(Logger);
}

function nestingPrefix() {
    if (Logger.nestingLevel) {
        return "⎸".padEnd(Logger.nestingLevel * 2);
    }
    return "";
}
