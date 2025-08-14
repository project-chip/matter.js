/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "#crypto/Crypto.js";
import { Interval } from "#time/Interval.js";
import { Instant, Millisecs, Seconds } from "#time/TimeUnit.js";

/**
 * An iterable of retry values based on a scheduling configuration.
 */
export class RetrySchedule {
    #crypto: Crypto;
    readonly config: RetrySchedule.Configuration;

    constructor(crypto: Crypto, config: RetrySchedule.Configuration) {
        this.#crypto = crypto;
        this.config = config;
    }

    /**
     * Yields intervals.
     *
     * Will yield indefinitely until canceled unless {@link config} specifies a timeout.
     */
    *[Symbol.iterator]() {
        const {
            timeout,
            maximumInterval,
            maximumCount,
            jitterFactor = 0,
            initialInterval = Seconds.one,
            backoffFactor = 2,
        } = this.config;

        let count = 0;
        let baseInterval = initialInterval;
        let timeSoFar = Instant;

        while ((timeout === undefined || timeSoFar < timeout) && (maximumCount === undefined || maximumCount > count)) {
            count++;
            const maxJitter = jitterFactor * baseInterval.ms;
            const jitter = Millisecs((maxJitter * this.#crypto.randomUint32) / Math.pow(2, 32)).floor;
            let interval = baseInterval.plus(jitter);

            if (timeout !== undefined && timeSoFar.plus(interval) > timeout) {
                interval = timeout.minus(timeSoFar);
            }
            if (maximumInterval !== undefined && interval > maximumInterval) {
                interval = maximumInterval;
            }

            yield interval;
            timeSoFar = timeSoFar.plus(interval);

            baseInterval = baseInterval.times(backoffFactor);
        }
    }
}

export namespace RetrySchedule {
    /**
     * Configuration parameters for retry schedule.
     */
    export interface Configuration {
        /**
         * Overall timeout.
         *
         * Leave undefined to allow indefinite transmission.
         */
        readonly timeout?: Interval;

        /**
         * Maximum number of occurrences (including first).
         *
         * Set to zero to disable transmission completely; leave undefined to allow any number of transmissions.
         */
        readonly maximumCount?: number;

        /**
         * Interval between first request and final interval.
         *
         * Defaults to 1s.
         */
        readonly initialInterval?: Interval;

        /**
         * Multiplier for subsequent retries.
         *
         * Defaults to 2.
         */
        readonly backoffFactor?: number;

        /**
         * Maximum interval between retries (excluding jitter).
         *
         * Leave undefined for interval to allow interval to grow continuously.
         */
        readonly maximumInterval?: Interval;

        /**
         * Multiplier for retry jitter.
         *
         * Leave undefined to disable jitter.
         */
        readonly jitterFactor?: number;
    }

    /**
     * Create a full configuration with defaults.
     */
    export function Configuration(defaults: Configuration, config?: Configuration) {
        return {
            ...defaults,
            ...config,
        };
    }
}
