/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "../fabric/Fabric.js";
import { Time, Timer } from "../time/Time.js";
import type { FailsafeContext } from "./FailsafeContext.js";
import { MatterFlowError } from "./MatterError.js";

export class MatterFabricConflictError extends MatterFlowError {}

/**
 * Manages the failsafe timer associated with a {@link FailsafeContext}.
 */
export class FailsafeTimer {
    public failsafeTimer: Timer;
    private maxCumulativeFailsafeTimer: Timer;

    constructor(
        public associatedFabric: Fabric | undefined,
        expiryLengthSeconds: number,
        maxCumulativeFailsafeSeconds: number,
        private readonly expiryCallback: () => Promise<void>,
    ) {
        // TODO - need to track expiration promise
        this.failsafeTimer = Time.getTimer("Failsafe", expiryLengthSeconds * 1000, () => this.expire()).start();
        this.maxCumulativeFailsafeTimer = Time.getTimer(
            "Max cumulative failsafe",
            maxCumulativeFailsafeSeconds * 1000,
            () => this.expire(),
        ).start();
    }

    close() {
        if (this.failsafeTimer.isRunning) {
            this.failsafeTimer.stop();
        }
        if (this.maxCumulativeFailsafeTimer.isRunning) {
            this.maxCumulativeFailsafeTimer.stop();
        }
    }

    /** Handle "Re-Arming" an existing FailSafe context to extend the timer, expire or fail if not allowed. */
    async reArm(associatedFabric: Fabric | undefined, expiryLengthSeconds: number) {
        if (!this.failsafeTimer.isRunning) {
            throw new MatterFlowError("FailSafe already expired.");
        }

        if (this.associatedFabric?.fabricIndex !== associatedFabric?.fabricIndex) {
            throw new MatterFlowError(
                `FailSafe already armed (index=${this.associatedFabric?.fabricIndex}) with different fabric (index=${associatedFabric?.fabricIndex}).`,
            );
        }

        this.failsafeTimer.stop();

        if (expiryLengthSeconds === 0) {
            // If ExpiryLengthSeconds is 0 and the fail-safe timer was already armed and the accessing fabric matches
            // the Fabric currently associated with the fail-safe context, then the fail-safe timer SHALL be
            // immediately expired (see further below for side-effects of expiration).
            await this.expire();
        } else {
            // If ExpiryLengthSeconds is non-zero and the fail-safe timer was currently armed, and the accessing Fabric
            // matches the fail-safe context’s associated Fabric, then the fail-safe timer SHALL be re- armed to expire
            // in ExpiryLengthSeconds.
            this.failsafeTimer = Time.getTimer("Failsafe expiration", expiryLengthSeconds * 1000, () =>
                this.expire(),
            ).start();
        }
    }

    /** Expire the FailSafe context. This is called by the timer and can also be called manually if needed. */
    async expire() {
        this.complete();
        await this.expiryCallback();
    }

    /** Complete the FailSafe context. This is called when the commissioning is completed. */
    complete() {
        this.failsafeTimer.stop();
        this.maxCumulativeFailsafeTimer.stop();
    }
}
