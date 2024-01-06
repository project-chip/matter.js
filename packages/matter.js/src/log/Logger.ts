/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Time } from "../time/Time.js";
import { ByteArray } from "../util/ByteArray.js";

// Replaces tabs following newlines so following lines indent
const ANSI_INDENT_PREFIX = "".padStart(52);

export enum Level {
    DEBUG = 0,
    INFO = 1,
    NOTICE = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
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
    formatter: typeof defaultFormatter,
) {
    if (value instanceof ByteArray) {
        return formatter.value(value.toHex());
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
        return formatter.value(stack);
    }
    if (value instanceof SpecialLogValue) {
        return value.serialize(formatter);
    }
    if (value instanceof EmphasizedValue) {
        return value
    }
    if (value === undefined) {
        return "undefined";
    }
    if (value === null) {
        return "null";
    }
    return formatter.value(value.toString());
}

function formatValues(values: any[], formatter = defaultFormatter) {
    return values.map(value => formatValue(value, formatter)).join(" ");
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
    LEVEL_INFO: "\x1b[0m", // normal (reset)
    LEVEL_NOTICE: "\x1b[32m", // green
    LEVEL_WARN: "\x1b[33m", // yellow
    LEVEL_ERROR: "\x1b[31m", // red
    LEVEL_FATAL: "\x1b[31m\x1b[1m", // red, bold
    KEY: "\x1b[34m", // blue
    EMPHASIZED: "\x1b[1m", // bold
    NONE: "\x1b[0m", // reset
};

function ansiLogFormatter(now: Date, level: Level, facility: string, values: any[]) {
    const levelCode = (<any>ANSI_CODES)[`LEVEL_${Level[level]}`];

    const formattedPrefix = `${ANSI_CODES.PREFIX}${formatTime(now)} ${Level[level].padEnd(6)}${ANSI_CODES.NONE}`;

    let formattedFacility =
        facility.length > 20 ? `${facility.slice(0, 10)}~${facility.slice(facility.length - 9)}` : facility.padEnd(20);
    formattedFacility = `${ANSI_CODES.FACILITY}${formattedFacility}${ANSI_CODES.NONE}`;

    let formattedValues = formatValues(
        values,
        {
            key: key => `${ANSI_CODES.KEY}${key}:${levelCode} `,
            value: value =>
                value
                    .replace(/([✓✔])/g, `${ANSI_CODES.LEVEL_INFO}$1${levelCode}`)
                    .replace(/([✗✘])/g, `${ANSI_CODES.LEVEL_ERROR}$1${levelCode}`),
            emphasis: value => `${ANSI_CODES.EMPHASIZED}${value}${ANSI_CODES.NONE}${levelCode}`
        }
    );

    formattedValues = formattedValues.replace(/\n\t/g, `\n${ANSI_INDENT_PREFIX}`)

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
        {
            key: key => htmlSpan("key", htmlEscape(`${key}:`)) + " ",
            value: value => htmlSpan("value", htmlEscape(value)),
            emphasis: value => `<em>${htmlEscape(value)}</em>`,
        }
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

const defaultFormatter = {
    key: (key: string) => `${key}: `,
    value: (value: string) => value,
    emphasis: (value: string) => value,
}

export abstract class SpecialLogValue {
    abstract serialize(formatter: typeof defaultFormatter): string;
}

/**
 * Pass this dictionary type as a logging parameter to improve formatting of
 * log output.  See Logger.dict() for maximal convenience.
 */
export class DiagnosticDictionary extends SpecialLogValue {
    /**
     * Create a new dictionary with optional entry values.
     *
     * @param entries the entries as [ "KEY", value ] tuples
     */
    constructor(private readonly entries: { [KEY: string]: any } = {}) {
        super();
    }

    /**
     * Format the dictionary for human consumption.
     *
     * @param keyFormatter formats keys
     * @param valueFormatter formats values
     * @returns the formatted value
     */
    serialize(
        formatter = defaultFormatter,
    ): string {
        return Object.getOwnPropertyNames(this.entries)
            .map(k =>
                this.entries[k] === undefined
                    ? undefined
                    : `${formatter.key(k)}${formatValue(this.entries[k], formatter)}`,
            )
            .filter(v => v !== undefined)
            .join(" ");
    }

    override toString() {
        return this.serialize();
    }
}

/**
 * Pass this type as a logging parameter to emphasize the contained value.
 */
export class EmphasizedValue extends SpecialLogValue {
    constructor(private readonly value: string) {
        super();
    }

    serialize(formatter = defaultFormatter): string {
        return formatter.emphasis(this.toString());
    }

    override toString() {
        return this.value;
    }
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
    static logFormatter: (now: Date, level: Level, facility: string, ...values: any[]) => string = plainLogFormatter;
    static log: (level: Level, formattedLog: string) => void = consoleLogger;
    static defaultLogLevel = Level.DEBUG;
    static logLevels: { [facility: string]: Level } = {};
    static nestingLevel = 0;

    /**
     * Set log level using configuration-style level name or number.
     */
    public static set level(level: number | string) {
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
    public static set format(format: string) {
        if (format === undefined) {
            format = Format.ANSI;
        }

        switch (format) {
            case Format.PLAIN:
                Logger.logFormatter = plainLogFormatter;
                break;
            case Format.ANSI:
                Logger.logFormatter = ansiLogFormatter;
                break;
            case Format.HTML:
                Logger.logFormatter = htmlLogFormatter;
                break;
            default:
                throw new ImplementationError(`Unsupported log format "${format}"`);
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
     * Shortcut for new EmphasizedValue().
     * 
     * @param value the value to emphasize
     */
    static em(value: any) {
        return new EmphasizedValue(value);
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
        Logger.log(level, Logger.logFormatter(Time.now(), level, this.name, values));
    }
}

// Hook for testing frameworks
if (typeof MatterHooks !== "undefined") {
    MatterHooks.loggerSetup?.(Logger);
}
