/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Boot } from "./boot.js";

type TimerCallback = () => any;

type MockTimeLike = typeof MockTime;
export interface MockTime extends MockTimeLike {}

// Must match matter.js Timer interface
class MockTimer {
    name = "Test";
    systemId = 0;
    intervalMs = 0;
    isPeriodic = false;

    isRunning = false;
    private readonly callback: TimerCallback;

    constructor(
        private readonly mockTime: MockTime,
        private readonly durationMs: number,
        callback: TimerCallback,
    ) {
        if (this instanceof MockInterval) {
            this.callback = callback;
        } else {
            this.callback = () => {
                this.isRunning = false;
                callback();
            };
        }
    }

    start() {
        this.mockTime.callbackAtTime(this.mockTime.nowMs() + this.durationMs, this.callback);
        this.isRunning = true;
        return this;
    }

    stop() {
        this.mockTime.removeCallback(this.callback);
        this.isRunning = false;
        return this;
    }
}

class MockInterval extends MockTimer {
    constructor(mockTime: MockTime, durationMs: number, callback: TimerCallback) {
        const intervalCallback = async () => {
            mockTime.callbackAtTime(mockTime.nowMs() + durationMs, intervalCallback);
            await callback();
        };
        super(mockTime, durationMs, intervalCallback);
    }
}

type InterceptResult<T> =
    T extends Promise<T>
        ? { resolve: Awaited<T>; reject?: undefined } | { resolve?: undefined; reject: {} }
        : { resolve: T; reject?: undefined } | { resolve?: void; reject: {} };

function isAsync(fn: (...args: any) => any): fn is (...args: any) => Promise<any> {
    return fn.constructor.name === "AsyncFunction";
}

let callbacks = new Array<{ atMs: number; callback: TimerCallback }>();
let nowMs = 0;
let real = undefined as unknown;
let enabled = true;

// Must match matter.js Time interface
export const MockTime = {
    get activeImplementation(): unknown {
        return enabled ? this : (real ?? this);
    },

    disable() {
        enabled = false;
        reinstallTime?.();
    },

    enable() {
        enabled = true;
        reinstallTime?.();
    },

    reset(time = 0) {
        callbacks = [];
        nowMs = time;

        // Ensure time reverts to correct implementation across suites
        this.enable();
    },

    now(): Date {
        return new Date(nowMs);
    },

    nowMs() {
        return nowMs;
    },

    getTimer(_name: string, durationMs: number, callback: TimerCallback): MockTimer {
        return new MockTimer(this, durationMs, callback);
    },

    getPeriodicTimer(_name: string, intervalMs: number, callback: TimerCallback): MockTimer {
        return new MockInterval(this, intervalMs, callback);
    },

    /**
     * Resolve a promise with time dependency.
     *
     * Moves time forward until the promise resolves.
     */
    async resolve<T>(promise: PromiseLike<T>) {
        let resolved = false;
        let result: T | undefined;
        let error: any;

        promise.then(
            r => {
                resolved = true;
                result = r;
            },
            e => {
                resolved = true;
                error = e;
            },
        );

        let timeAdvanced = 0;
        while (!resolved) {
            // Interestingly, a Time.yield() works in almost every case.  However, on Node SubtleCrypto.deriveBits hangs
            // if you only yield via microtask.  It seems to require yielding via macrotask.  So we use setTimeout here.
            // Probably related to entropy collection but I think it's safe to classify as a Node bug.  Tested on
            // version 20.11.0
            await new Promise<void>(resolve => setTimeout(() => resolve(), 0));

            if (resolved) {
                break;
            }

            // If we've advanced more than one hour, assume we've hung
            if (timeAdvanced > 60 * 60 * 1000) {
                throw new Error(
                    "Mock timeout: Promise did not resolve within one (virtual) hour, probably not going to happen",
                );
            }

            // Advance time exponentially, trying for granularity but also OK performance.  Note that we are not only
            // advancing time but also yielding event loop.  So it's possible if we run out of time it's just because
            // there were too few yields in one virtual hour.  As designed currently it's 360 macrotasks and 360
            // microtasks (360 loops w/ 1 macro- and 1 micro-yield)
            await this.advance(1000);
            timeAdvanced += 1000;

            if (resolved) {
                break;
            }

            await this.yield();
        }

        if (error !== undefined) {
            throw error;
        }

        return result as T;
    },

    /**
     * Move time forward.  Runs tasks scheduled during this interval.
     */
    async advance(ms: number) {
        const newTimeMs = nowMs + ms;

        while (true) {
            if (callbacks.length === 0) break;
            const { atMs, callback } = callbacks[0];
            if (atMs > newTimeMs) break;
            callbacks.shift();
            nowMs = atMs;
            await callback();
        }

        nowMs = newTimeMs;
    },

    /**
     * Yield to scheduled microtasks.  This means that all code paths waiting
     * on resolved promises (including await) will proceed before this method
     * returns.
     */
    async yield() {
        await Promise.resolve();
    },

    /**
     * Due to its implementation, an older version of yield() would actually
     * yield to microtasks three times.  Our tests then depended on this
     * functionality -- one yield could trigger up to three nested awaits.
     *
     * To make this clear, the version of yield() that emulates old behavior
     * is called "yield3".
     */
    async yield3() {
        await Promise.resolve();
        await Promise.resolve();
        await Promise.resolve();
    },

    /**
     * Hook a method and invoke a callback just before the method completes.
     * Unhooks after completion.
     *
     * Handles both synchronous and asynchronous methods.  The interceptor
     * should match the async-ness of the intercepted method.
     *
     * The interceptor can optionally access and/or replace the resolve/reject
     * value.
     */
    interceptOnce<NameT extends string, ReturnT, ObjT extends { [N in NameT]: (...args: any) => ReturnT }>(
        obj: ObjT,
        method: NameT,
        interceptor: (
            result: InterceptResult<ReturnT>,
        ) => void | InterceptResult<ReturnT> | Promise<void> | Promise<InterceptResult<ReturnT>>,
    ) {
        const original = obj[method];
        if (!original) {
            throw new Error(`Interception method ${method} is not present`);
        }
        let result: InterceptResult<ReturnT>;
        if (isAsync(interceptor)) {
            obj[method] = async function (this: any, ...args: any): Promise<any> {
                try {
                    const resolve = await original.apply(this, args);
                    result = { resolve } as any;
                } catch (reject) {
                    result = { reject } as any;
                } finally {
                    obj[method] = original;
                }
                result = (await interceptor(result)) ?? result;
                if (result.reject) {
                    throw result.reject as Error;
                }
                return result.resolve;
            } as any;
        } else {
            obj[method] = function (this: any, ...args: any): any {
                try {
                    const resolve = original.apply(this, args);
                    result = { resolve } as any;
                } catch (reject) {
                    result = { reject } as any;
                } finally {
                    obj[method] = original;
                }
                result = (interceptor(result) as any) ?? result;
                if (result.reject) {
                    throw result.reject as Error;
                }
                return result.resolve;
            } as any;
        }
    },

    callbackAtTime(atMs: number, callback: TimerCallback) {
        callbacks.push({ atMs, callback });
        callbacks.sort(({ atMs: atMsA }, { atMs: atMsB }) => atMsA - atMsB);
    },

    removeCallback(callbackToRemove: TimerCallback) {
        const index = callbacks.findIndex(({ callback }) => callbackToRemove === callback);
        if (index === -1) return;
        callbacks.splice(index, 1);
    },
};

let reinstallTime: undefined | (() => void);

export function timeSetup(Time: { startup: { systemMs: number; processMs: number }; get(): unknown }) {
    Time.startup.systemMs = Time.startup.processMs = 0;
    real = Time.get();
    (MockTime as any).sleep = (real as any).sleep;
    reinstallTime = () => (Time.get = () => MockTime.activeImplementation);
    reinstallTime();
}

Object.assign(globalThis, { MockTime });

Boot.init(() => {
    MockTime.reset();
});
