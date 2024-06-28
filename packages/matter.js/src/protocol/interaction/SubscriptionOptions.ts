/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// We use 3 minutes as global max interval because with 60 min as defined by spec the timeframe until the controller
// establishes a new subscription after e.g a reboot can be up to 60 min and the controller would assume that the value
// is unchanged. This is too long.
//
// chip-tool is not using the option to choose an appropriate interval and respect the 60 min for that and only uses the
// max sent by the controller which can lead to spamming the network with unneeded packages. So I decided for 3 minutes
// for now as a compromise until we have something better. This value is fine for non-battery devices and might be
// overridden for otherwise.
//
// To officially match the specs the developer needs to set these 60Minutes in the Subscription options!
export const MAX_INTERVAL_PUBLISHER_LIMIT_S = 60 * 60; /** 1 hour */
const INTERNAL_INTERVAL_PUBLISHER_LIMIT_S = 3 * 60; /** 3 min */
const MIN_INTERVAL_S = 2; // We do not send faster than 2 seconds
const DEFAULT_RANDOMIZATION_WINDOW_S = 10; // 10 seconds

/**
 * Server options that control subscription handling.
 */
export interface SubscriptionOptions {
    /**
     * Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
     * low and inside the range requested by the connected controller.
     */
    maxIntervalSeconds?: number;

    /**
     * Optional minimum subscription interval to use for sending subscription reports. It will be used when other
     * calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
     * set limits.
     */
    minIntervalSeconds?: number;

    /**
     * Optional subscription randomization window to use for sending subscription reports. This specifies a window
     * in seconds from which a random part is added to the calculated maximum interval to make sure that devices
     * that get powered on in parallel not all send at the same timepoint.
     */
    randomizationWindowSeconds?: number;
}

export namespace SubscriptionOptions {
    /**
     * Validate options and set defaults.
     *
     * @returns the resulting options
     */
    export function configurationFor(options?: SubscriptionOptions) {
        return {
            maxIntervalSeconds: options?.maxIntervalSeconds ?? INTERNAL_INTERVAL_PUBLISHER_LIMIT_S,
            minIntervalSeconds: Math.max(options?.minIntervalSeconds ?? MIN_INTERVAL_S, MIN_INTERVAL_S),
            randomizationWindowSeconds: options?.randomizationWindowSeconds ?? DEFAULT_RANDOMIZATION_WINDOW_S,
        };
    }

    export interface Configuration extends ReturnType<typeof configurationFor> {}
}
