/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "@project-chip/matter.js/common";
import { Time, Timer, TimerCallback } from "@project-chip/matter.js/time";

class TimerNode implements Timer {
    #timerId: NodeJS.Timeout | undefined;
    #utility = false;
    isRunning = false;

    get systemId() {
        return Number(this.#timerId);
    }

    constructor(
        readonly name: string,
        readonly intervalMs: number,
        private readonly callback: TimerCallback,
        readonly isPeriodic: boolean,
    ) {
        if (intervalMs < 0 || intervalMs > 2147483647) {
            throw new ImplementationError(
                `Invalid intervalMs: ${intervalMs}. The value must be between 0 and 32-bit maximum value (2147483647)`,
            );
        }
    }

    get utility() {
        return this.#utility;
    }

    set utility(utility: boolean) {
        if (utility === this.#utility) {
            return;
        }

        if (utility) {
            this.#timerId?.unref();
        } else {
            this.#timerId?.ref();
        }

        this.#utility = utility;
    }

    start() {
        if (this.isRunning) this.stop();
        Time.register(this);
        this.isRunning = true;
        this.#timerId = (this.isPeriodic ? setInterval : setTimeout)(() => {
            if (!this.isPeriodic) {
                Time.unregister(this);
                this.isRunning = false;
            }
            this.callback();
        }, this.intervalMs);
        return this;
    }

    stop() {
        (this.isPeriodic ? clearInterval : clearTimeout)(this.#timerId);
        Time.unregister(this);
        this.isRunning = false;
        return this;
    }
}

export class TimeNode extends Time {
    now(): Date {
        return new Date();
    }

    nowMs(): number {
        return this.now().getTime();
    }

    getTimer(name: string, durationMs: number, callback: TimerCallback): Timer {
        return new TimerNode(name, durationMs, callback, false);
    }

    getPeriodicTimer(name: string, intervalMs: number, callback: TimerCallback): Timer {
        return new TimerNode(name, intervalMs, callback, true);
    }
}
