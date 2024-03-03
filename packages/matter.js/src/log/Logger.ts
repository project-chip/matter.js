/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, NotImplementedError } from "../common/MatterError.js";
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
 * Returns the default log formatter for a given format.
 */
function determineLoggerForFormat(format: string) {
    switch (format) {
        case Format.PLAIN:
            return Format.plain;
        case Format.ANSI:
            return Format.ansi;
        case Format.HTML:
            return Format.html;
        default:
            throw new NotImplementedError(`Unsupported log format "${format}"`);
    }
}

/**
 * Definition of one registered Logger.
 */
type LoggerDefinition = {
    logIdentifier: string;
    logFormatter: (now: Date, level: Level, facility: string, ...values: any[]) => string;
    log: (level: Level, formattedLog: string) => void;
    defaultLogLevel: Level;
    logLevels: { [facility: string]: Level };
};

/**
 * Logger that can be used to emit traces.
 * The class supports adding multiple loggers for different targets. A default logger (identifier "default") is added on
 * startup which logs to "console".
 *
 * Usage:
 * const facility = Logger.get("loggerName");
 * facility.debug("My debug message", "my extra value to log");
 *
 * Configuration:
 * The configuration of the default logger can be adjusted by using the static properties of the Logger class:
 * - Logger.defaultLogLevel sets the default log level for all the facility
 * - Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
 * - Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter
 *
 * For additional loggers, use Logger.addLogger() to add a new logger with a specific identifier. Afterwards the
 * configuration of these can be adjusted using static methods with the identifier as first parameter:
 * - Logger.setFormatForLogger("loggerName", Format.ANSI)
 * - Logger.setLogLevelsForLogger("loggerName", { loggerName: Level.DEBUG })
 * - Logger.setDefaultLoglevelForLogger("loggerName", Level.DEBUG)
 */
export class Logger {
    static logger = new Array<LoggerDefinition>({
        logIdentifier: "default",
        logFormatter: Format.plain,
        log: consoleLogger,
        defaultLogLevel: Level.DEBUG,
        logLevels: {},
    });
    static nestingLevel = 0;

    /** Add additional logger to the list of loggers including the default configuration. */
    public static addLogger(
        identifier: string,
        logger: (level: Level, formattedLog: string) => void,
        options?: {
            defaultLogLevel?: Level;
            logLevels?: { [facility: string]: Level };
            logFormat?: string;
        },
    ) {
        if (Logger.logger.some(logger => logger.logIdentifier === identifier)) {
            throw new NotImplementedError(`Logger "${identifier}" already exists`);
        }
        Logger.logger.push({
            logIdentifier: identifier,
            logFormatter: determineLoggerForFormat(options?.logFormat ?? Format.PLAIN),
            log: logger,
            defaultLogLevel: options?.defaultLogLevel ?? Level.DEBUG,
            logLevels: options?.logLevels ?? {},
        });
    }

    public static removeLogger(identifier: string) {
        const index = Logger.logger.findIndex(logger => logger.logIdentifier === identifier);
        if (index === -1) {
            throw new NotImplementedError(`Logger "${identifier}" does not exist`);
        }
        Logger.logger.splice(index, 1);
    }

    /**
     * Get the logger with the matching identifier.
     * @param identifier The identifier of the logger
     */
    public static getLoggerforIdentifier(identifier: string) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger === undefined) {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
        return logger;
    }

    /**
     * Set log level using configuration-style level name for the default logger.
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

        Logger.defaultLogLevel = levelNum;
    }

    /**
     * Set logFormatter using configuration-style format name.
     *
     * @param format the name of the formatter (see Format enum)
     */
    static set format(format: string) {
        Logger.setLogFormatterForLogger("default", Format(format));
    }

    /**
     * Set facility loglevels for the default logger.
     * @param levels The levels to set
     */
    public static set logLevels(levels: { [facility: string]: Level }) {
        Logger.setLogLevelsForLogger("default", levels);
    }

    /**
     * Get facility loglevels for the default logger.
     */
    public static get logLevels() {
        return Logger.getLoggerforIdentifier("default").logLevels;
    }

    /**
     * Set default loglevel for the default logger.
     *
     * @param level The level to set
     */
    public static set defaultLogLevel(level: Level) {
        Logger.setDefaultLoglevelForLogger("default", level);
    }

    /**
     * Get default loglevel for the default logger.
     */
    public static get defaultLogLevel() {
        return Logger.getLoggerforIdentifier("default").defaultLogLevel;
    }

    /**
     * Set the log function for the default logger.
     *
     * @param log The log function to set
     */
    public static set log(log: (level: Level, formattedLog: string) => void) {
        Logger.setLogger("default", log);
    }

    /**
     * Get the log function for the default logger.
     */
    public static get log() {
        return Logger.getLoggerforIdentifier("default").log;
    }

    /**
     * Set the log formatter for the default logger.
     *
     * @param logFormatter
     */
    public static set logFormatter(
        logFormatter: (now: Date, level: Level, facility: string, nestingPrefix: string, values: any[]) => string,
    ) {
        Logger.setLogFormatterForLogger("default", logFormatter);
    }

    /**
     * Get the log formatter for the default logger.
     */
    public static get logFormatter() {
        return Logger.getLoggerforIdentifier("default").logFormatter;
    }

    /**
     * Set logFormatter using configuration-style format name for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param format the name of the formatter (see Format enum)
     */
    public static setFormatForLogger(identifier: string, format: string) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger) {
            logger.logFormatter = determineLoggerForFormat(format);
        } else {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
    }

    /**
     * Set default loglevel for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param level The level to set
     */
    public static setDefaultLoglevelForLogger(identifier: string, level: Level) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger) {
            logger.defaultLogLevel = level;
        } else {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
    }

    /**
     * Set facility loglevels for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param levels The levels to set
     */
    public static setLogLevelsForLogger(identifier: string, levels: { [facility: string]: Level }) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger) {
            logger.logLevels = levels;
        } else {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
    }

    /**
     * Set the log function for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param log The log function to set
     */
    public static setLogger(identifier: string, log: (level: Level, formattedLog: string) => void) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger) {
            logger.log = log;
        } else {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
    }

    /**
     * Set the log formatter for the logger with the matching identifier.
     *
     * @param identifier The identifier of the logger
     * @param logFormatter The log formatter to set
     */
    static setLogFormatterForLogger(
        identifier: string,
        logFormatter: (now: Date, level: Level, facility: string, nestingPrefix: string, values: any[]) => string,
    ) {
        const logger = Logger.logger.find(logger => logger.logIdentifier === identifier);
        if (logger) {
            logger.logFormatter = logFormatter;
        } else {
            throw new NotImplementedError(`Unknown logger "${identifier}"`);
        }
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
        Logger.logger.forEach(logger => {
            if (level < (logger.logLevels[this.name] ?? logger.defaultLogLevel)) return;
            logger.log(level, logger.logFormatter(Time.now(), level, this.name, nestingPrefix(), values));
        });
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
