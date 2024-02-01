/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotImplementedError } from "../common/MatterError.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";

export enum Level {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4,
}

/**
 * Beautification methods supported by the default formatter.
 */
export enum Format {
    /** Generate text only */
    PLAIN = "plain",

    /** Format log messages using ANSI escape codes */
    ANSI = "ansi",

    /** Format log messages using HTML tags */
    HTML = "html",
}

function formatValue(
    value: any,
    keyFormatter: typeof defaultKeyFormatter,
    valueFormatter: typeof defaultValueFormatter,
) {
    if (value instanceof ByteArray) {
        return valueFormatter(value.toHex());
    }
    if (value instanceof Error) {
        let stack;
        if (value.stack === undefined) {
            stack = "(details unavailable)";
        } else {
            stack = value.stack;

            // Strip extra node garbage off stack.  Doesn't really hurt
            // anything but it's messy.  Node doesn't usually stick it there
            // but we've seen it once
            stack = stack.replace(/^.*?\n\nError: /gs, "Error: ");

            if (stack.startsWith("Error: ")) {
                return stack.slice(7);
            }
        }
        return valueFormatter(stack);
    }
    if (value instanceof DiagnosticDictionary) {
        return value.serialize(keyFormatter, valueFormatter);
    }
    if (value === undefined) {
        return "undefined";
    }
    if (value === null) {
        return "null";
    }
    return valueFormatter(value.toString());
}

function formatValues(values: any[], keyFormatter = defaultKeyFormatter, valueFormatter = defaultValueFormatter) {
    return values.map(value => formatValue(value, keyFormatter, valueFormatter)).join(" ");
}

function formatTime(time: Date) {
    return `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, "0")}-${time
        .getDate()
        .toString()
        .padStart(2, "0")} ${time.getHours().toString().padStart(2, "0")}:${time
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}.${time
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}`;
}

function nestingPrefix() {
    if (Logger.nestingLevel) {
        return "⎸".padEnd(Logger.nestingLevel * 2);
    }
    return "";
}

function plainLogFormatter(now: Date, level: Level, facility: string, values: any[]) {
    const formattedValues = formatValues(values);

    return `${formatTime(now)} ${Level[level]} ${facility} ${nestingPrefix()}${formattedValues}`;
}

const ANSI_CODES = {
    PREFIX: "\x1b[90m\x1b[2m", // dark gray, dim
    FACILITY: "\x1b[90m\x1b[1m", // dark grey, bold
    LEVEL_DEBUG: "\x1b[90m", // dark gray
    LEVEL_INFO: "\x1b[32m", // green
    LEVEL_WARN: "\x1b[33m", // yellow
    LEVEL_ERROR: "\x1b[31m", // red
    LEVEL_FATAL: "\x1b[31m\x1b[1m", // red, bold
    KEY: "\x1b[34m", // blue
    NONE: "\x1b[0m", // reset
};

function ansiLogFormatter(now: Date, level: Level, facility: string, values: any[]) {
    const levelCode = (<any>ANSI_CODES)[`LEVEL_${Level[level]}`];

    const formattedPrefix = `${ANSI_CODES.PREFIX}${formatTime(now)} ${Level[level].padEnd(5)}${ANSI_CODES.NONE}`;

    let formattedFacility =
        facility.length > 20 ? `${facility.slice(0, 10)}~${facility.slice(facility.length - 9)}` : facility.padEnd(20);
    formattedFacility = `${ANSI_CODES.FACILITY}${formattedFacility}${ANSI_CODES.NONE}`;

    let formattedValues = formatValues(
        values,
        key => `${ANSI_CODES.KEY}${key}:${levelCode} `,
        value =>
            value
                .replace(/([✓✔])/g, `${ANSI_CODES.LEVEL_INFO}$1${levelCode}`)
                .replace(/([✗✘])/g, `${ANSI_CODES.LEVEL_ERROR}$1${levelCode}`),
    );
    formattedValues = `${nestingPrefix()}${formattedValues}`;
    const prefixedMatch = formattedValues.match(/^(⎸? *\d+ )(.*)$/);
    if (prefixedMatch) {
        // Use prefix color for nesting and/or line number prefixes in the message
        formattedValues = `${ANSI_CODES.PREFIX}${prefixedMatch[1]}${ANSI_CODES.NONE}${levelCode}${prefixedMatch[2]}${ANSI_CODES.NONE}`;
    } else {
        formattedValues = `${levelCode}${formattedValues}${ANSI_CODES.NONE}`;
    }

    return `${formattedPrefix} ${formattedFacility} ${formattedValues}`;
}

function htmlSpan(type: string, value: string) {
    return `<span class="matter-log-${type}">${value}</span>`;
}

function htmlEscape(value: string) {
    return value.toString().replace(/\n/g, "<br/>").replace(/</g, "&amp").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function htmlLogFormatter(now: Date, level: Level, facility: string, values: any[]) {
    const formattedValues = formatValues(
        values,
        key => htmlSpan("key", htmlEscape(`${key}:`)) + " ",
        value => htmlSpan("value", htmlEscape(value)),
    );

    const np = nestingPrefix().replace(/ /g, "&nbsp;");

    return htmlSpan(
        "matter-log-line",
        `${htmlSpan("time", formatTime(now))} ${htmlSpan("level", Level[level])} ${htmlSpan(
            "facility",
            facility,
        )} ${np}${formattedValues}`,
    );
}

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

const defaultKeyFormatter = (key: string) => `${key}: `;
const defaultValueFormatter = (value: string) => value;

/**
 * Pass this dictionary type as a logging parameter to improve formatting of
 * log output.  See Logger.dict() for maximal convenience.
 */
export class DiagnosticDictionary {
    /**
     * Create a new dictionary with optional entry values.
     *
     * @param entries the entries as [ "KEY", value ] tuples
     */
    constructor(private readonly entries: { [KEY: string]: any } = {}) {}

    /**
     * Format the dictionary for human consumption.
     *
     * @param keyFormatter formats keys
     * @param valueFormatter formats values
     * @returns the formatted value
     */
    public serialize(keyFormatter = defaultKeyFormatter, valueFormatter = defaultValueFormatter): string {
        return Object.getOwnPropertyNames(this.entries)
            .map(k =>
                this.entries[k] === undefined
                    ? undefined
                    : `${keyFormatter(k)}${formatValue(this.entries[k], keyFormatter, valueFormatter)}`,
            )
            .filter(v => v !== undefined)
            .join(" ");
    }

    public toString() {
        return this.serialize();
    }
}

/** Returns the default log formatter for a given format. */
function determineLoggerForFormat(format: Format) {
    switch (format) {
        case Format.PLAIN:
            return plainLogFormatter;
        case Format.ANSI:
            return ansiLogFormatter;
        case Format.HTML:
            return htmlLogFormatter;
        default:
            throw new NotImplementedError(`Unsupported log format "${format}"`);
    }
}

/** Definition of one registered Logger. */
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
        logFormatter: plainLogFormatter,
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
            logFormat?: Format;
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
     * Set logFormatter using configuration-style format name for the default logger.
     *
     * @param format the name of the formatter (see Format enum)
     */
    public static set format(format: Format) {
        Logger.setFormatForLogger("default", format);
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
    public static set logFormatter(logFormatter: (now: Date, level: Level, facility: string, values: any[]) => string) {
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
    public static setFormatForLogger(identifier: string, format: Format) {
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
        logFormatter: (now: Date, level: Level, facility: string, values: any[]) => string,
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
     * Shortcut for new DiagnosticDictionary().
     *
     * @param entries initial dictionary entries
     */
    static dict(entries: { [KEY: string]: any }) {
        return new DiagnosticDictionary(entries);
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
    warn = (...values: any[]) => this.log(Level.WARN, values);
    error = (...values: any[]) => this.log(Level.ERROR, values);
    fatal = (...values: any[]) => this.log(Level.FATAL, values);

    private log(level: Level, values: any[]) {
        Logger.logger.forEach(logger => {
            if (level < (logger.logLevels[this.name] ?? logger.defaultLogLevel)) return;
            logger.log(level, logger.logFormatter(Time.now(), level, this.name, values));
        });
    }
}

// Hook for testing frameworks
if (typeof MatterHooks !== "undefined") {
    MatterHooks.loggerSetup?.(Logger);
}
