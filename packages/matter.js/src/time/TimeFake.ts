/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getPromiseResolver } from "../util/Promises.js";
import { Time, Timer, TimerCallback } from "./Time.js";

class TimerFake implements Timer {
    isRunning = false;
    private readonly callback: TimerCallback;

    constructor(
        private readonly timeFake: TimeFake,
        private readonly durationMs: number,
        callback: TimerCallback,
    ) {
        if (this instanceof IntervalFake) {
            this.callback = callback;
        } else {
            this.callback = () => {
                this.isRunning = false;
                callback();
            };
        }
    }

    start() {
        this.timeFake.callbackAtTime(this.timeFake.nowMs() + this.durationMs, this.callback);
        this.isRunning = true;
        return this;
    }

    stop() {
        this.timeFake.removeCallback(this.callback);
        this.isRunning = false;
        return this;
    }
}

class IntervalFake extends TimerFake {
    constructor(timeFake: TimeFake, durationMs: number, callback: TimerCallback) {
        const intervalCallback = async () => {
            timeFake.callbackAtTime(timeFake.nowMs() + durationMs, intervalCallback);
            await callback();
        };
        super(timeFake, durationMs, intervalCallback);
    }
}

export class TimeFake extends Time {
    private readonly callbacks = new Array<{ atMs: number; callback: TimerCallback }>();

    constructor(private timeMs: number) {
        super();
    }

    now(): Date {
        return new Date(this.timeMs);
    }

    nowMs(): number {
        return this.timeMs;
    }

    getTimer(durationMs: number, callback: TimerCallback): Timer {
        return new TimerFake(this, durationMs, callback);
    }

    getPeriodicTimer(intervalMs: number, callback: TimerCallback): Timer {
        return new IntervalFake(this, intervalMs, callback);
    }

    async advanceTime(ms: number) {
        const newTimeMs = this.timeMs + ms;

        while (true) {
            if (this.callbacks.length === 0) break;
            const { atMs, callback } = this.callbacks[0];
            if (atMs > newTimeMs) break;
            this.callbacks.shift();
            this.timeMs = atMs;
            await callback();
        }

        this.timeMs = newTimeMs;
    }

    async yield() {
        const { promise, resolver } = await getPromiseResolver<void>();
        resolver();
        await promise;
    }

    callbackAtTime(atMs: number, callback: TimerCallback) {
        this.callbacks.push({ atMs, callback });
        this.callbacks.sort(({ atMs: atMsA }, { atMs: atMsB }) => atMsA - atMsB);
    }

    removeCallback(callbackToRemove: TimerCallback) {
        const index = this.callbacks.findIndex(({ callback }) => callbackToRemove === callback);
        if (index === -1) return;
        this.callbacks.splice(index, 1);
    }
}
