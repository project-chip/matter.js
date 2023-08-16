/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, Timer, TimerCallback } from "@project-chip/matter.js/time";

class TimerNode implements Timer {
    private timerId: NodeJS.Timeout | undefined;
    isRunning = false;

    constructor(
        private readonly intervalMs: number,
        private readonly callback: TimerCallback,
        private readonly periodic: boolean,
    ) {}

    start() {
        if (this.isRunning) this.stop();
        this.isRunning = true;
        this.timerId = (this.periodic ? setInterval : setTimeout)(() => {
            if (!this.periodic) {
                this.isRunning = false;
            }
            this.callback();
        }, this.intervalMs);
        return this;
    }

    stop() {
        (this.periodic ? clearInterval : clearTimeout)(this.timerId);
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

    getTimer(durationMs: number, callback: TimerCallback): Timer {
        return new TimerNode(durationMs, callback, false);
    }

    getPeriodicTimer(intervalMs: number, callback: TimerCallback): Timer {
        return new TimerNode(intervalMs, callback, true);
    }
}
