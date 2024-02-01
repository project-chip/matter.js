/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
 *
 * TODO - as currently defined MaybePromise of a Promise incorrectly wraps as a Promise of a Promise
 */
export type MaybePromise<T = void> = T | PromiseLike<T>;

/**
 * Promise-like version of above.
 */
export type MaybePromiseLike<T = void> = T | PromiseLike<T>;

export const MaybePromise = {
    /**
     * Determine whether a {@link MaybePromiseLike} is a {@link Promise}.
     */
    is<T>(value: MaybePromise<T>): value is PromiseLike<T> {
        return typeof value === "object" && typeof (value as { then?: unknown }).then === "function";
    },

    /**
     * Chained MaybePromise.  Invokes the resolve function immediately if the {@link MaybePromise} is not a
     * {@link Promise}, otherwise the same as a normal {@link Promise.then}.
     */
    then<I, O1 = never, O2 = never>(
        producer: MaybePromise<I> | (() => MaybePromise<I>),
        resolve?: ((input: I) => MaybePromise<O1>) | null,
        reject?: ((error: any) => MaybePromise<O2>) | null,
    ): MaybePromise<O1 | O2> {
        try {
            let value;
            if (producer instanceof Function) {
                value = producer();
            } else {
                value = producer;
            }
            if (MaybePromise.is(value)) {
                return value.then(resolve, reject);
            }
            if (resolve) {
                return resolve(value);
            }
        } catch (e) {
            if (reject) {
                return reject(e);
            }
            throw e;
        }

        // Make TypeScript happy
        return undefined as MaybePromise<O1 | O2>;
    },

    /**
     * Equivalent of {@link Promise.catch}.
     */
    catch<T, TResult = never>(
        producer: MaybePromise<T> | (() => MaybePromise<T>),
        onrejected?: ((reason: any) => MaybePromise<TResult>) | undefined | null,
    ) {
        return this.then(producer, undefined, onrejected);
    },

    /**
     * Equivalent of {@link Promise.finally}.
     */
    finally<T>(
        producer: MaybePromise<T> | (() => MaybePromise<T>),
        onfinally?: (() => void) | undefined | null,
    ): MaybePromise<T> {
        try {
            if (typeof producer === "function") {
                producer = (producer as () => MaybePromise<T>)();
            }
        } finally {
            if (MaybePromise.is(producer)) {
                if (typeof (producer as Promise<any>).finally === "function") {
                    return (producer as Promise<T>).finally(onfinally);
                } else {
                    producer = producer.then(
                        value =>
                            MaybePromise.then(
                                () => onfinally?.(),
                                () => value,
                            ),
                        error =>
                            MaybePromise.then(
                                () => onfinally?.(),
                                () => {
                                    throw error;
                                },
                            ),
                    );
                }
            } else {
                onfinally?.();
            }
        }
        return producer;
    },
};

/**
 * A registry for promises.
 *
 * Stores unfulfilled promises with metadata useful for diagnosing process state.
 */
export class Tracker {
    #parent: Tracker | undefined;
    #tracked = new Map<PromiseLike<unknown>, Tracker.Descriptor>();

    get name() {
        return "Unfulfilled tracked promises";
    }

    get [Diagnostic.value]() {
        if (!this.#tracked?.size) {
            return Diagnostic.list(["(none)"]);
        }
        return ["Unfulfilled tracked promises", Diagnostic.list(this.#tracked.values())];
    }

    static global = new Tracker(undefined);

    /**
     * Create a new tracker.
     *
     * @param parent if supplied, promises will be tracked by parent too
     */
    constructor(parent: Tracker | undefined = Tracker.global) {
        this.#parent = parent;
    }

    /**
     * Create a tracked promise.
     */
    of<T>(executor: Tracker.Executor<T>, detail?: {}) {
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
                        label = "(anon)";
                    }
                }
                return [label, Diagnostic.dict({ uptime: this.elapsed })];
            },
        });

        return MaybePromise.finally(promise, () => this.#tracked.delete(promise as Promise<T>));
    }
}

function labelFor(value: unknown) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }
    if ((value as Diagnostic)[Diagnostic.value]) {
        return (value as Diagnostic)[Diagnostic.value];
    }
    if (typeof value !== "object") {
        return value.toString();
    }
    if ("description" in value) {
        return labelFor((value as { description: unknown }).description);
    }
    return value.toString();
}

export namespace Tracker {
    /**
     * Information about a tracked promise.
     */
    export interface Descriptor {
        promise: PromiseLike<any>;
        detail?: unknown;
        elapsed: Diagnostic.Elapsed;
        [Diagnostic.value]: unknown;
    }

    export interface Executor<T> {
        (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void): PromiseLike<T>;
    }
}

/**
 * Track a {@link Promise}}.
 *
 * Registers the promise with the default {@link Tracker}.
 */
export function track<const T>(value: MaybePromise<T>, what?: {}): MaybePromise<T> {
    if (MaybePromise.is(value)) {
        return Tracker.global.track(value, what) as T;
    }
    return value;
}

DiagnosticSource.add(Tracker.global);
