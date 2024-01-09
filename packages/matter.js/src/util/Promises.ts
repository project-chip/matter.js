/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Environment } from "../common/Environment.js";
import { InternalError } from "../common/MatterError.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";

/**
 * Obtain a promise with functions to resolve and reject.
 */
export function createPromise<T>(): {
    promise: Promise<T>;
    resolver: (value: T) => void;
    rejecter: (reason?: any) => void;
} {
    let resolver, rejecter;
    const promise = new Promise<T>((resolve, reject) => {
        resolver = resolve;
        rejecter = reject;
    });

    if (!resolver || !rejecter) {
        // This doesn't happen but asserts that resolver and rejecter are
        // defined.
        throw new InternalError("Failed to extract resolve/reject from Promise context");
    }

    return {
        promise,
        resolver,
        rejecter,
    };
}

/**
 * Use all promises or promise returning methods and return the first resolved promise or reject when all promises
 * rejected
 */
export function anyPromise<T>(promises: ((() => Promise<T>) | Promise<T>)[]): Promise<T> {
    return new Promise((resolve, reject) => {
        let numberRejected = 0;
        let wasResolved = false;
        for (const entry of promises) {
            const promise = typeof entry === "function" ? entry() : entry;
            promise
                .then(value => {
                    if (!wasResolved) {
                        wasResolved = true;
                        resolve(value);
                    }
                })
                .catch(reason => {
                    numberRejected++;
                    if (!wasResolved && numberRejected === promises.length) {
                        reject(reason);
                    }
                });
        }
    });
}
/**
 * Return type for functions that are optionally asynchronous.
 */
export type MaybePromise<T = void> = T | Promise<T>;

/**
 * Promise-like version of above.
 */
export type MaybePromiseLike<T = void> = T | PromiseLike<T>;

export namespace MaybePromise {
    /**
     * Determine whether a {@link MaybePromiseLike} is a {@link Promise}.
     */
    export function is<T>(value: MaybePromiseLike<T>): value is PromiseLike<T> {
        return typeof value === "object" && typeof (value as { then?: any; }).then === "function";
    }

    /**
     * Chained MaybePromise.  Invokes the resolve function immediately if the
     * {@link MaybePromise} is not a {@link Promise}, otherwise the same as a
     * normal {@link Promise.then}.
     */
    export function then<I, O>(value: MaybePromise<I>, resolve: (input: I) => O): MaybePromise<O> {
        if (is(value)) {
            return value.then(resolve);
        }
        return resolve(value);
    }
}

/**
 * A registry for promises.
 * 
 * Stores unfulfilled promises with metadata useful for diagnosing process
 * state.
 */
export class Tracker implements Environment.Task {
    #parent: Tracker | undefined;
    #tracked = new Map<Promise<unknown>, Tracker.Descriptor>;
    
    get name() {
        return "Unfulfilled tracked promises";
    }

    get [Diagnostic.value]() {
        if (!this.#tracked?.size) {
            return Diagnostic.list([ "(none)" ]);
        }
        return [ "Unfulfilled tracked promises", Diagnostic.list(this.#tracked.values()) ];
    }

    static global = new Tracker(undefined);

    /**
     * Create a new tracker.
     * 
     * @param parent if supplied, promises will be tracked by parent too
     * @param environment if supplied, hooked to support diagnostics
     */
    constructor(parent: Tracker | undefined = Tracker.global) {
        this.#parent = parent;
    }

    /**
     * Create a tracked promise.
     */
    of<T>(
        executor: Tracker.Executor<T>,
        detail?: {},
    ) {
        return this.track(new Promise(executor), detail);
    }

    /**
     * Track a promise.
     */
    track<T>(promise: MaybePromise<T>, detail?: unknown): MaybePromise<T> {
        if (!MaybePromise.is(promise)) {
            return promise;
        }
        if (this.#parent) {
            promise = this.#parent?.track(promise, detail) as Promise<T>;
        }
        this.#tracked.set(promise, {
            promise,
            detail,
            elapsed: Diagnostic.elapsed(),

            get [Diagnostic.value]() {
                let label = labelFor(this.detail);
                if (label === undefined) {
                    label = labelFor(this.promise);
                    if (label === undefined) {
                        label = this.detail?.toString();
                        if (label === undefined || label === null || label === "") {
                            label = "(anon)";
                        }
                    }
                }
                return [ label, Diagnostic.dict({ uptime: this.elapsed }) ];
            }
        });

        return promise.finally(() => this.#tracked.delete(promise as Promise<T>));
    }
}

function labelFor(value: unknown): string | undefined {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    if (typeof value !== "object") {
        return value.toString();
    }
    if ("description" in value) {
        return labelFor((value as { description: unknown}).description);
    }
    return value.toString();
}

export namespace Tracker {
    /**
     * Information about a tracked promise.
     */
    export interface Descriptor {
        promise: Promise<any>;
        detail?: unknown;
        elapsed: Diagnostic.Elapsed;
        [Diagnostic.value]: unknown
    }

    export interface Executor<T> {
        (
            resolve: (value: T | PromiseLike<T>) => void,
            reject: (reason?: any) => void,
        ): PromiseLike<T>;
    }
}

/**
 * Track a {@link Promise}}.
 * 
 * Registers the promise with the default {@link Tracker}.
 */
export function track(promise: Promise<unknown>, what?: {}) {
    Tracker.global.track(promise, what);
}

DiagnosticSource.add(Tracker.global);
