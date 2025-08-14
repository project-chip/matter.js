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
    (scale: number | Interval.Definition): Interval;
    (scale: undefined | number | Interval.Definition): undefined | Interval;

    /**
     * Long name of the unit.
     */
    readonly kind: TimeUnit.Kind;

    /**
     * Abbreviated name of the unit.
     */
    readonly abbrev: string;

    /**
     * Number of milliseconds in the unit.
     */
    readonly scale: number;

    /**
     * A single unit interval.
     */
    readonly one: Interval;

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
export function TimeUnit<T = {}>(kind: TimeUnit.Kind, abbrev: string, scale: number, props = {} as T): TimeUnit & T {
    let one: Interval | undefined = undefined;

    const unit = {
        [kind]: (interval: undefined | number | Interval.Definition) => {
            if (interval === undefined) {
                return undefined;
            }

            if (typeof interval === "number") {
                if (interval === 1) {
                    return one!;
                }
                return new Interval(unit, interval);
            }

            if (interval instanceof Interval && interval.unit === unit) {
                return interval;
            }

            return new Interval(unit, (interval.length * interval.unit.scale) / unit.scale);
        },
    }[kind] as TimeUnit & T;

    // Add properties to the function
    Object.assign(unit, {
        ...props,
        kind,
        abbrev,
        scale,
        toString: kindOf,
        [Symbol.for("nodejs.util.inspect.custom")]: kindOf,
    });

    // Create "one" after assigning other properties or initialization will fail
    one = new Interval(unit, 1);
    Object.assign(unit, { one });

    // This is to avoid circular reference
    Interval.units[kind] = unit;

    return unit;
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
