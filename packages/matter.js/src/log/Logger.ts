/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as console from "console";
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
            if (stack.startsWith("Error: ")) return stack.slice(7);
        }
        return valueFormatter(stack);
    }
    if (value instanceof DiagnosticDictionary) {
        return value.serialize(keyFormatter, valueFormatter);
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
    return value.toString().replace(/\n/g, "<br/>").replace(/</g, "&amp").replace(/</g, "&lt;").replace(/>/, "&gt;");
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

function consoleLogger(level: Level, formattedLog: string) {
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

// Store console where it can be replaced for e.g. tests
(<any>consoleLogger).console = console;

const defaultKeyFormatter = (key: string) => `${key}: `;
const defaultValueFormatter = (value: string) => value;

/**
 * Pass this dictionary type as a logging parameter to improve formatting of
 * log output.  See Logger.dict() for maximal convenience.
 */
export class DiagnosticDictionary {
    private entries = new Map<string, any>();

    /**
     * Create a new dictionary with optional entry values.
     *
     * @param entries the entries as [ "KEY", value ] tuples
     */
    constructor(entries: { [KEY: string]: any } = {}) {
        // Use getOwnPropertyNames because it follows insertion order as of
        // ES6
        for (const KEY of Object.getOwnPropertyNames(entries)) {
            if (entries[KEY] !== undefined) {
                this.set(KEY, entries[KEY]);
            }
        }
    }

    /**
     * Add a value to the dictionary.
     *
     * @param KEY the value's KEY
     * @param value the value to add
     */
    public set(KEY: string, value: any) {
        this.entries.set(KEY, value);
    }

    /**
     * Format the dictionary for human consumption.
     *
     * @param keyFormatter formats keys
     * @param valueFormatter formats values
     * @returns the formatted value
     */
    public serialize(keyFormatter = defaultKeyFormatter, valueFormatter = defaultValueFormatter): string {
        const entries: string[] = [];
        this.entries.forEach((v, k) =>
            entries.push(`${keyFormatter(k)}${formatValue(v, keyFormatter, valueFormatter)}`),
        );
        return entries.join(" ");
    }

    public toString() {
        return this.serialize();
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
     * Set logFormatter using configuration-style format name.
     *
     * @param format the name of the formatter (see Format enum)
     */
    public static set format(format: string) {
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
                throw new NotImplementedError(`Unsupported log format "${format}"`);
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
     * Async version of above.
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
        if (level < (Logger.logLevels[this.name] ?? Logger.defaultLogLevel)) return;
        Logger.log(level, Logger.logFormatter(Time.now(), level, this.name, values));
    }
}
