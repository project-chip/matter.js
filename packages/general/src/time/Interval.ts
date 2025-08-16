/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "#MatterError.js";
import { Branded } from "#util/Type.js";
import type { Millisecs, Seconds, TimeUnit } from "./TimeUnit.js";

/**
 * A time interval.
 *
 * You can create an interval using a {@link TimeUnit} factory such as {@link Seconds}.
 *
 * Regardless of the input unit, intervals are stored as milliseconds.  You can use {@link TimeUnit#of} to convert an
 * interval to the correct unit.
 *
 * Math operators always result in millisecond values and can thus be converted back to an interval using
 * {@link Millisecs}.  For example, `Millisecs(Hours(1) + Minutes(30))` would produce a 90 minute {@link Interval}.
 */
export type Interval = Branded<number, "Interval">;

/**
 * Create an interval from an {@link Interval.Definition}.
 */
export function Interval<T extends undefined | Interval | string>(
    source: T,
): T extends undefined ? undefined | Interval : Interval {
    if (typeof source === "string") {
        return Interval.parse(source);
    }

    if (typeof source !== "number") {
        throw new IntervalFormatError(`Interval value is not a number (received ${typeof source})`);
    }

    if (Number.isNaN(source)) {
        throw new IntervalFormatError(`An interval may not be NaN`);
    }

    return source as unknown as T extends undefined ? undefined | Interval : Interval;
}

export class IntervalFormatError extends UnexpectedDataError {}

export namespace Interval {
    /**
     * Determine the greater of two intervals.
     */
    export function max(a: Interval, b: Interval) {
        if (b > a) {
            return b;
        }
        return a;
    }

    /**
     * Determine the lesser of two intervals.
     */
    export function min(a: Interval, b: Interval) {
        if (b < a) {
            return b;
        }
        return a;
    }

    /**
     * Convert an interval to a compact human readable string.
     */
    export function format(interval: Interval) {
        let ms = interval as number;

        if (typeof ms !== "number" || Number.isNaN(ms)) {
            return "invalid";
        }

        switch (ms) {
            case 0:
                return "0";

            case Infinity:
                return "forever";

            case -Infinity:
                return "until now"; // Umm...  I guess?
        }

        if (ms === 0) {
            return "0";
        } else if (ms < 0) {
            return `${toPrecision(ms * 1000, 3)}μs`;
        } else if (ms < 1000) {
            return `${toPrecision(ms, 3)}ms`;
        } else if (ms < 60000) {
            return `${toPrecision(ms / 1000, 3)}s`;
        }

        const parts = Array<string>();

        if (ms > 86_400_000) {
            parts.push(`${Math.floor(ms / 86_400_000)}d`);
            ms %= 86_400_000;
        }

        const hours = Math.floor(ms / 3_600_000);
        if (hours) {
            parts.push(`${hours}h`);
        }
        ms %= 3_600_000;

        const minutes = Math.floor(ms / 60_000);
        if (minutes) {
            parts.push(`${minutes}m`);
        }
        ms %= 60_000;

        const seconds = Math.floor(ms / 1_000);
        if (seconds) {
            parts.push(`${seconds}s`);
        }

        return parts.join(" ");
    }

    /**
     * Parse a string into an interval.
     */
    export function parse(text: string) {
        const parts = text.split(/\s+/).filter(part => part !== "");

        let interval = 0;
        for (const part of parts) {
            const suffix = text.match(/[a-zμ]+/i)?.[1];
            if (suffix === undefined) {
                throw new IntervalFormatError(`Interval component "${part}" is missing an time suffix`);
            }

            const value = Number(text.slice(text.length - suffix.length));
            if (Number.isNaN(value)) {
                throw new IntervalFormatError(`Interval component "${part}" contains no numeric component`);
            }

            switch (suffix.toLowerCase()) {
                case "μs":
                case "us":
                    interval += value / 1000;
                    break;

                case "ms":
                    interval += value;
                    break;

                case "s":
                    interval += value * 1000;
                    break;

                case "m":
                    interval += value * 60_000;
                    break;

                case "h":
                    interval += value * 3_600_000;
                    break;

                case "d":
                    interval += value * 86_400_000;
                    break;

                default:
                    throw new IntervalFormatError(`Interval component ${part} contains an unsupported unit suffix`);
            }
        }

        return interval as Interval;
    }
}

function toPrecision(number: number, precision: number) {
    return number.toPrecision(precision).replace(/\.?0+/, "");
}
