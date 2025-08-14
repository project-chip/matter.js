/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "#log/Diagnostic.js";
import { DeepComparable } from "#util/DeepEqual.js";
import type { TimeUnit } from "./TimeUnit.js";

/**
 * An interval of time.
 *
 * An interval consists of a {@link unit} and {@link length}.  We track the units but store the value as milliseconds.
 *
 * You may create an interval using {@link TimeUnit} factories such as `Seconds.one` or `Millisecs(1000)`.  You may
 * compare intervals using standard comparison operators.
 *
 * Typescript doesn't allow for arithmetic operations with intervals (even though javascript does).  You may instead use
 * arithmetic functions such as {@link plus} and {@link minus} or perform arithmetic using {@link ms} values such as
 * `Millisecs(interval1.ms + interval2.ms)`.
 */
export class Interval implements DeepComparable {
    /**
     * The units of this interval.
     */
    readonly unit: TimeUnit;

    /**
     * The length of this interval in {@link unit}.
     */
    readonly ms: number;

    constructor(unit: TimeUnit, length: number | Interval.Definition) {
        this.unit = unit;
        if (typeof length === "number") {
            this.ms = length * unit.scale;
        } else if ("ms" in length) {
            this.ms = length.ms as number;
        } else {
            this.ms = length.unit.scale * length.length;
        }
    }

    /**
     * Access the interval in {@link unit}.
     */
    get length(): number {
        return this.ms / this.unit.scale;
    }

    /**
     * Access the interval as raw seconds.
     */
    get secs(): number {
        return Interval.units.second(this).length;
    }

    equals(other: Interval) {
        return this.ms === other.ms;
    }

    dividedBy(divisor: number) {
        return this.unit(this.length / divisor);
    }

    times(multiplier: number) {
        return this.unit(this.length * multiplier);
    }

    plus(other: Interval) {
        return this.unit((this.ms + other.ms) / this.unit.scale);
    }

    minus(other: Interval) {
        return this.unit((this.ms - other.ms) / this.unit.scale);
    }

    /**
     * Add this interval to a POSIX timestamp.
     */
    before(time: number): number;

    /**
     * Add this interval to a Date.
     */
    before(time: Date): Date;

    before(time: number | Date): number | Date {
        return typeof time === "number" ? time - this.ms : new Date(time.getTime() - this.ms);
    }

    /**
     * Subtract this interval from a POSIX timestamp.
     */
    after(time: number): number;

    /**
     * Subtract this interval from a Date.
     */
    after(time: Date): Date;

    after(time: number | Date): number | Date {
        return typeof time === "number" ? time + this.ms : new Date(time.getTime() + this.ms);
    }

    /**
     * Round the interval to the nearest whole unit.
     */
    get round() {
        return new Interval(this.unit, Math.round(this.length));
    }

    /**
     * Round the interval to the next highest whole unit.
     */
    get ceil() {
        return new Interval(this.unit, Math.ceil(this.length));
    }

    /**
     * Round the interval to the next lowest whole unit.
     */
    get floor() {
        return new Interval(this.unit, Math.floor(this.length));
    }

    valueOf() {
        return this.ms;
    }

    toString() {
        let { ms } = this;

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

    get [Diagnostic.value]() {
        return this.toString();
    }

    [DeepComparable.equals](other: unknown) {
        if (!(other instanceof Interval)) {
            return false;
        }
        return other.ms === this.ms;
    }

    /**
     * Determine the greater of two intervals.
     */
    static max(a: Interval, b: Interval) {
        if (b.ms > a.ms) {
            return b;
        }
        return a;
    }

    /**
     * Determine the lesser of two intervals.
     */
    static min(a: Interval, b: Interval) {
        if (b.ms < a.ms) {
            return b;
        }
        return a;
    }
}

function toPrecision(number: number, precision: number) {
    return number.toPrecision(precision).replace(/\.?0+/, "");
}

export namespace Interval {
    export const units = {} as Record<TimeUnit.Kind, TimeUnit>;

    export interface Definition {
        /**
         * The units of this interval.
         */
        readonly unit: TimeUnit;

        /**
         * The length of this interval in {@link unit}.
         */
        readonly length: number;
    }
}
