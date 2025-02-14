/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot } from "#util/Boot.js";
import { CancelablePromise } from "#util/Cancelable.js";
import { ImplementationError, NotImplementedError } from "../MatterError.js";
import { Time } from "../time/Time.js";
import { Bytes } from "../util/Bytes.js";
import { Diagnostic } from "./Diagnostic.js";
import { LogFormat } from "./LogFormat.js";
import { LogLevel } from "./LogLevel.js";

/**
 * Log messages to the console.  This is the default logging mechanism.
 */
export function consoleLogger(level: LogLevel, formattedLog: string) {
    const console = (<any>consoleLogger).console;
    switch (level) {
        case LogLevel.DEBUG:
            console.debug(formattedLog);
            break;
        case LogLevel.INFO:
            console.info(formattedLog);
            break;
        case LogLevel.NOTICE:
            console.info(formattedLog);
            break;
        case LogLevel.WARN:
            console.warn(formattedLog);
            break;
        case LogLevel.ERROR:
            console.error(formattedLog);
            break;
        case LogLevel.FATAL:
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
 * Create a log formatter for a given format.
 */
function logFormatterFor(formatName: string): LoggerDefinition["logFormatter"] {
    const format = LogFormat(formatName);

    return (now, level, facility, prefix, ...values) =>
        format(Diagnostic.message({ now, level, facility, prefix, values }));
}

/**
 * Definition of one registered Logger.
 */
type LoggerDefinition = {
    logIdentifier: string;
    logFormatter: (now: Date, level: LogLevel, facility: string, prefix: string, ...values: any[]) => string;
    log: (level: LogLevel, formattedLog: string) => void;
    defaultLogLevel: LogLevel;
    logLevels: { [facility: string]: LogLevel };
    context?: Diagnostic.Context;
};

/**
 * Logger that can be used to emit traces.
 *
 * The class supports adding multiple loggers for different targets. A default logger (identifier "default") is added on
 * startup which logs to "console".
 *
 * Usage:
 *
 *   const facility = Logger.get("loggerName");
 *   facility.debug("My debug message", "my extra value to log");
 *
 * The configuration of the default logger can be adjusted by using the static properties of the Logger class:
 *
 *   - Logger.defaultLogLevel sets the default log level for all the facility
 *   - Logger.logLevels = { loggerName: Level.DEBUG } can set the level for the specific loggers
 *   - Logger.format = Format.ANSI enables colorization via ANSI escape sequences in default formatter
 *
 * For additional loggers, use Logger.addLogger() to add a new logger with a specific identifier. Afterwards the
 * configuration of these can be adjusted using static methods with the identifier as first parameter:
 *
 *   - Logger.setFormatForLogger("loggerName", Format.ANSI)
 *   - Logger.setLogLevelsForLogger("loggerName", { loggerName: Level.DEBUG })
 *   - Logger.setDefaultLoglevelForLogger("loggerName", Level.DEBUG)
 */
export class Logger {
    static logger: Array<LoggerDefinition>;
    static nestingLevel: number;
    readonly #name: string;

    /** Add additional logger to the list of loggers including the default configuration. */
    public static addLogger(
        identifier: string,
        logger: (level: LogLevel, formattedLog: string) => void,
        options?: {
            defaultLogLevel?: LogLevel;
            logLevels?: { [facility: string]: LogLevel };
            logFormat?: string;
        },
    ) {
        if (Logger.logger.some(logger => logger.logIdentifier === identifier)) {
            throw new NotImplementedError(`Logger "${identifier}" already exists`);
        }
        Logger.logger.push({
            logIdentifier: identifier,
            logFormatter: logFormatterFor(options?.logFormat ?? LogFormat.PLAIN),
            log: logger,
            defaultLogLevel: options?.defaultLogLevel ?? LogLevel.DEBUG,
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
            level = LogLevel.DEBUG;
        }

        let levelNum;
        if (typeof level === "string") {
            if (level.match(/^\d+$/)) {
                levelNum = Number.parseInt(level);
            } else {
                levelNum = (LogLevel as unknown as Record<string, number | undefined>)[level.toUpperCase()];
                if (levelNum === undefined) {
                    throw new ImplementationError(`Unsupported log level "${level}"`);
                }
            }
        } else {
            levelNum = level;
        }

        if (LogLevel[levelNum] === undefined) {
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
        Logger.setLogFormatterForLogger("default", logFormatterFor(format));
    }

    /**
     * Set facility loglevels for the default logger.
     * @param levels The levels to set
     */
    public static set logLevels(levels: { [facility: string]: LogLevel }) {
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
    public static set defaultLogLevel(level: LogLevel) {
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
    public static set log(log: (level: LogLevel, formattedLog: string) => void) {
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
        logFormatter: (now: Date, level: LogLevel, facility: string, nestingPrefix: string, values: any[]) => string,
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
            logger.logFormatter = logFormatterFor(format);
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
    public static setDefaultLoglevelForLogger(identifier: string, level: LogLevel) {
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
    public static setLogLevelsForLogger(identifier: string, levels: { [facility: string]: LogLevel }) {
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
    public static setLogger(identifier: string, log: (level: LogLevel, formattedLog: string) => void) {
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
        logFormatter: (now: Date, level: LogLevel, facility: string, nestingPrefix: string, values: any[]) => string,
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
            if (value instanceof Uint8Array) {
                return Bytes.toHex(value);
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

    /**
     * Unhandled error reporter.
     *
     * Some environments do not report full error details such as {@link Error#cause} and {@link AggregateError#errors}.
     *
     * To ensure these details are always recorded somewhere, unhandled errors may be reported here.
     *
     * To disable this behavior replace this function.
     */
    static reportUnhandledError(error: Error) {
        try {
            Logger.get("Logger").fatal("Unhandled error detected:", error);
        } catch (e) {
            // We do not want to cause yet another error so if logging fails for any reason it goes unreported
        }
    }

    /**
     * Invoke logic and return any log messages produced.
     */
    static capture(fn: () => void, fromLogger = "default") {
        if (!Logger) {
            throw new Error("No logger loaded, cannot capture logs");
        }
        const logger = Logger.getLoggerforIdentifier(fromLogger);
        const actualLogSettings = {
            logFormatter: logger.logFormatter,
            log: logger.log,
            defaultLogLevel: logger.defaultLogLevel,
            logLevels: { ...logger.logLevels },
        };

        try {
            Logger.setFormatForLogger(fromLogger, LogFormat.PLAIN);
            const captured = new Array<{ level: LogLevel; message: string }>();
            Logger.setLogger(fromLogger, (level, message) =>
                captured.push({
                    level,
                    message: message.replace(/\d{4}-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d/, "xxxx-xx-xx xx:xx:xx.xxx"),
                }),
            );
            fn();
            return captured;
        } finally {
            Logger.setLogFormatterForLogger(fromLogger, actualLogSettings.logFormatter);
            Logger.setDefaultLoglevelForLogger(fromLogger, actualLogSettings.defaultLogLevel);
            Logger.setLogLevelsForLogger(fromLogger, actualLogSettings.logLevels);
            Logger.setLogger(fromLogger, actualLogSettings.log);
        }
    }

    constructor(name: string) {
        this.#name = name;
    }

    debug = (...values: any[]) => this.#log(LogLevel.DEBUG, values);
    info = (...values: any[]) => this.#log(LogLevel.INFO, values);
    notice = (...values: any[]) => this.#log(LogLevel.NOTICE, values);
    warn = (...values: any[]) => this.#log(LogLevel.WARN, values);
    error = (...values: any[]) => this.#log(LogLevel.ERROR, values);
    fatal = (...values: any[]) => this.#log(LogLevel.FATAL, values);
    log = (level: LogLevel, ...values: any[]) => this.#log(level, values);

    #log(level: LogLevel, values: any[]) {
        for (const logger of Logger.logger) {
            if (level < (logger.logLevels[this.#name] ?? logger.defaultLogLevel)) {
                return;
            }

            if (!logger.context) {
                logger.context = Diagnostic.Context();
            }

            logger.context.run(() =>
                logger.log(level, logger.logFormatter(Time.now(), level, this.#name, nestingPrefix(), values)),
            );
        }
    }
}

function nestingPrefix() {
    if (Logger.nestingLevel) {
        return "⎸".padEnd(Logger.nestingLevel * 2);
    }
    return "";
}

Boot.init(() => {
    Logger.logger = new Array<LoggerDefinition>({
        logIdentifier: "default",
        logFormatter: LogFormat.plain,
        log: consoleLogger,
        defaultLogLevel: LogLevel.DEBUG,
        logLevels: {},
    });
    Logger.nestingLevel = 0;

    // Hook for testing frameworks
    if (typeof MatterHooks !== "undefined") {
        MatterHooks.loggerSetup?.(Logger);
    }
});

CancelablePromise.logger = Logger.get("CancelablePromise");
