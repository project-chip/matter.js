/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NoProviderError } from "../common/MatterError.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";

export type TimerCallback = () => any;

const registry = new Set<Timer>();

export abstract class Time {
    static get: () => Time = () => DefaultTime;

    abstract now(): Date;
    static readonly now = (): Date => Time.get().now();

    abstract nowMs(): number;
    static readonly nowMs = (): number => Time.get().nowMs();

    /** Returns a timer that will call callback after durationMs has passed. */
    abstract getTimer(name: string, durationMs: number, callback: TimerCallback): Timer;
    static readonly getTimer = (name: string, durationMs: number, callback: TimerCallback): Timer =>
        Time.get().getTimer(name, durationMs, callback);

    /** Returns a timer that will periodically call callback at intervalMs intervals. */
    abstract getPeriodicTimer(name: string, intervalMs: number, callback: TimerCallback): Timer;
    static readonly getPeriodicTimer = (name: string, intervalMs: number, callback: TimerCallback): Timer =>
        Time.get().getPeriodicTimer(name, intervalMs, callback);

    static readonly sleep = async (name: string, durationMs: number): Promise<void> =>
        new Promise(resolve => Time.get().getTimer(name, durationMs, resolve).start());

    static register(timer: Timer) {
        timer.elapsed = Diagnostic.elapsed();
        registry.add(timer);
    }

    static unregister(timer: Timer) {
        registry.delete(timer);
    }
}

const DefaultTime = new (class extends Time {
    now() {
        return new Date();
    }

    nowMs() {
        return this.now().getTime();
    }

    getTimer(): Timer {
        throw new NoProviderError("Default time provider does not implement timers");
    }

    getPeriodicTimer() {
        return this.getTimer();
    }
})();

export interface Timer {
    /** Name (diagnostics) */
    name: string;

    /** Set to true to indicate the timer should not prevent program exit */
    utility: boolean;

    /** System ID (diagnostics) */
    systemId: unknown;

    /** Interval (diagnostics) */
    intervalMs: number;

    /** Is the timer periodic? (diagnostics) */
    isPeriodic: boolean;

    /** Amount of time interval has been active (diagnostics) */
    elapsed?: Diagnostic.Elapsed;

    /** Is true if this timer is running. */
    isRunning: boolean;

    /** Starts this timer, chainable. */
    start(): Timer;

    /** Stops this timer, chainable. */
    stop(): Timer;
}

// Hook for testing frameworks
if (typeof MatterHooks !== "undefined") {
    MatterHooks.timeSetup?.(Time);
}

DiagnosticSource.add({
    get [Diagnostic.value]() {
        return Diagnostic.node("⏱", "Timers", {
            children: [...registry].map(timer => [
                timer.name,
                Diagnostic.dict({
                    periodic: timer.isPeriodic,
                    interval: Diagnostic.interval(timer.intervalMs),
                    system: timer.systemId,
                    elapsed: timer.elapsed,
                }),
            ]),
        });
    },
});
