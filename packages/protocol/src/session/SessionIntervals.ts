/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hours, ImplementationError, Interval, Millisecs, Seconds } from "#general";

export interface SessionIntervals {
    /**
     * Minimum amount of time between sender retries when the destination node is idle. This SHALL be greater than or
     * equal to the maximum amount of time a node may be non-responsive to incoming messages when idle.
     *
     * Default: 500ms
     */
    idleInterval: Interval;

    /**
     * Minimum amount of time between sender retries when the destination node is active. This SHALL be greater than or
     * equal to the maximum amount of time a node may be non-responsive to incoming messages when active.
     *
     * Default: 300ms
     */
    activeInterval: Interval;

    /**
     * Minimum amount of time the node SHOULD stay active after network activity.
     *
     * Default: 4000ms
     */
    activeThreshold: Interval;
}

export function SessionIntervals(intervals?: Partial<SessionIntervals>): SessionIntervals {
    const reified = { ...SessionIntervals.defaults, ...intervals };
    const { idleInterval, activeInterval, activeThreshold } = reified;

    if (idleInterval && idleInterval > Hours.one) {
        throw new ImplementationError("Session Idle Interval must be less than 1 hour");
    }
    if (activeInterval && activeInterval > Hours.one) {
        throw new ImplementationError("Session Active Interval must be less than 1 hour");
    }
    if (activeThreshold && activeThreshold > Seconds(65535)) {
        throw new ImplementationError("Session Active Threshold must be less than 65535 seconds");
    }

    return reified;
}

export namespace SessionIntervals {
    export const defaults = {
        idleInterval: Millisecs(500),
        activeInterval: Millisecs(300),
        activeThreshold: Seconds(4),
    };
}
