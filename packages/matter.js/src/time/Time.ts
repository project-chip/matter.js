/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type TimerCallback = () => Promise<any> | any;

export abstract class Time {
    static get: () => Time = () => { throw new Error("No provider configured"); };

    abstract now(): Date;
    static readonly now = (): Date => Time.get().now();

    abstract nowMs(): number;
    static readonly nowMs = (): number => Time.get().nowMs();

    /** Returns a timer that will call callback after durationMs has passed. */
    abstract getTimer(durationMs: number, callback: TimerCallback): Timer;
    static readonly getTimer = (durationMs: number, callback: TimerCallback): Timer => Time.get().getTimer(durationMs, callback);

    /** Returns a timer that will periodically call callback at intervalMs intervals. */
    abstract getPeriodicTimer(intervalMs: number, callback: TimerCallback): Timer;
    static readonly getPeriodicTimer = (intervalMs: number, callback: TimerCallback): Timer => Time.get().getPeriodicTimer(intervalMs, callback);
}

export interface Timer {

    /** Starts this timer, chainable. */
    start(): Timer;

    /** Stops this timer, chainable. */
    stop(): Timer;
}
