/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Time, Timer, TimerCallback } from "./Time";

class TimerNode implements Timer {
    private timerId: NodeJS.Timer | undefined;

    constructor(
            private readonly intervalMs: number,
            private readonly callback: TimerCallback,
            private readonly periodic: boolean,
        ) {}

    start() {
        this.timerId = (this.periodic ? setInterval : setTimeout)(this.callback, this.intervalMs);
        return this;
    }

    stop() {
        (this.periodic ? clearInterval : clearTimeout)(this.timerId);
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
