/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interval } from "./Interval.js";

/**
 * Details of a specific unit of time.
 */
export interface TimeUnit {
    (length: undefined | number): Interval;
    (scale: undefined | number): undefined | Interval;

    /**
     * Long name of the unit.
     */
    readonly kind: TimeUnit.Kind;

    /**
     * Abbreviated name of the unit.
     */
    readonly abbrev: string;

    /**
     * An interval representing a single unit.
     */
    readonly one: Interval;

    /**
     * Convert an interval to this unit.
     */
    of<T extends Interval | undefined>(interval: T): T extends undefined ? number | undefined : number;

    /**
     * Compute the ceiling of an interval in this unit.
     */
    ceil(interval: Interval): Interval;

    /**
     * Compute the floor of an interval in this unit.
     */
    floor(interval: Interval): Interval;

    /**
     * Round an interval to this unit.
     */
    round(interval: Interval): Interval;

    length: never;
}

export namespace TimeUnit {
    /**
     * Standard time units.
     */
    export type Kind = "nanosecond" | "millisecond" | "second" | "minute" | "hour" | "day";
}

/**
 * Implement a {@link TimeUnit}.
 */
export function TimeUnit<T = {}>(kind: TimeUnit.Kind, abbrev: string, one: number, props = {} as T): TimeUnit & T {
    const unit = {
        [kind]: (length: undefined | number) => {
            if (length === undefined) {
                return undefined;
            }
            return (length * one) as Interval;
        },
    }[kind] as TimeUnit & T;

    // Add properties to the function
    Object.assign(unit, {
        ...props,
        kind,
        abbrev,
        one,
        of,
        ceil,
        floor,
        round,
        toString: kindOf,
        [Symbol.for("nodejs.util.inspect.custom")]: kindOf,
    });

    return unit;
}

function of(this: TimeUnit, interval: Interval) {
    return interval / this.one;
}

function ceil(this: TimeUnit, interval: Interval) {
    return Math.ceil(interval / this.one) * this.one;
}

function floor(this: TimeUnit, interval: Interval) {
    return Math.floor(interval / this.one) * this.one;
}

function round(this: TimeUnit, interval: Interval) {
    return Math.round(interval / this.one) * this.one;
}

function kindOf(this: TimeUnit) {
    return this.kind;
}

/**
 * Create an interval in nanoseconds.
 */
export const Nanosecs = TimeUnit("nanosecond", "ns", 0.001);

/**
 * Create an interval in milliseconds.
 */
export const Millisecs = TimeUnit("millisecond", "ms", 1);

/**
 * Create an interval in seconds.
 */
export const Seconds = TimeUnit("second", "s", 1_000, {
    tenth: Millisecs(100),
    quarter: Millisecs(250),
    half: Millisecs(500),
});

/**
 * Create an interval in minutes.
 */
export const Minutes = TimeUnit("minute", "m", 60_000, { quarter: Seconds(15), half: Seconds(30) });

/**
 * Create an interval in hours.
 */
export const Hours = TimeUnit("hour", "h", 3_600_000, { quarter: Minutes(15), half: Minutes(30) });

/**
 * Create an interval in days.
 */
export const Days = TimeUnit("day", "d", 86_400_000);

/**
 * A zero-length interval.
 */
export const Instant = Millisecs(0);
