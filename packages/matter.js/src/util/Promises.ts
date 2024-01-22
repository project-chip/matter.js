/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Environment } from "../common/Environment.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
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

export const MaybePromise = {
    /**
     * Determine whether a {@link MaybePromiseLike} is a {@link Promise}.
     */
    is<T>(value: MaybePromiseLike<T>): value is PromiseLike<T> {
        return typeof value === "object" && typeof (value as { then?: unknown; }).then === "function";
    },

    /**
     * Chained MaybePromise.  Invokes the resolve function immediately if the {@link MaybePromise} is not a
     * {@link Promise}, otherwise the same as a normal {@link Promise.then}.
     */
    then<I, O1 = never, O2 = never>(
        producer: MaybePromise<I> | (() => MaybePromise<I>),
        resolve?: (input: I) => MaybePromise<O1>,
        reject?: (error: any) => MaybePromise<O2>
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
     * Equivalent of {@link Promise.finally}.
     */
    finally<T>(
        producer: MaybePromise<any> | (() => MaybePromise<any>),
        onfinally?: (() => void) | undefined | null
    ): MaybePromise<T> {
        try {
            if (typeof producer === "function") {
                producer = producer();
            }
        } finally {
            if (MaybePromise.is(producer)) {
                if (typeof (producer as Promise<any>).finally === "function") {
                    return (producer as Promise<T>).finally(onfinally);
                } else {
                    producer.then(
                        value => {
                            onfinally?.();
                            return value;
                        },
                        error => {
                            onfinally?.();
                            throw error;
                        }
                    )
                }
            } else {
                onfinally?.();
            }
        }
        return producer;
    }
}

/**
 * A registry for promises.
 * 
 * Stores unfulfilled promises with metadata useful for diagnosing process state.
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
                        label = "(anon)";
                    }
                }
                return [ label, Diagnostic.dict({ uptime: this.elapsed }) ];
            }
        });

        return promise.finally(() => this.#tracked.delete(promise as Promise<T>));
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
export function track<const T>(value: MaybePromise<T>, what?: {}): MaybePromise<T> {
    if (MaybePromise.is(value)) {
        return Tracker.global.track(value, what) as T;
    }
    return value;
}

DiagnosticSource.add(Tracker.global);

declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;

/**
 * A PromiseLike that behaves like a Promise.
 * 
 * Supports a few edge cases like immediate execution and support for rejection without the requirement of installing a
 * rejection handler.
 * 
 * TODO - could use for nicer MaybePromise API but haven't implemented yet
 */
export function MimicPromise<T>(
    executor: (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (reason?: any) => void
    ) => void
): Promise<T> {
    let resolves: undefined | Array<(value: T) => void>;
    let rejects: undefined | Array<(reason: any) => void>;

    let resolved = false;
    let resolvedValue: undefined | T;

    let rejected = false;
    let rejectedCause: undefined | any;

    // The promise implementation
    const result: Promise<T> = {
        // Standard Promise.then
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): Promise<TResult1 | TResult2> {
            // "then" always results in a new promise
            return MimicPromise((resolve, reject) => {
                function invoke(param: any, fn: (param: any) => MaybePromise<any>) {
                    MaybePromise.then(
                        () => fn(param),
                        value => resolve(value),
                        cause => reject(cause),
                    )
                }

                // Resolve immediately if promise is resolved
                if (resolved) {
                    return invoke(resolvedValue, resolve);
                }
                
                // Reject immediately if promise is rejected
                if (rejected) {
                    return invoke(rejectedCause, reject);
                }

                function res(value: T) {
                    if (onfulfilled) {
                        invoke(value, onfulfilled);
                    } else {
                        resolve(value as any);
                    }
                }
    
                if (resolves) {
                    resolves.push(res);
                } else {
                    resolves = [ res ];
                }
    
                function rej(cause: any) {
                    if (onrejected) {
                        invoke(cause, onrejected);
                    } else {
                        reject(cause);
                    }
                }
    
                if (rejects) {
                    rejects.push(rej);
                } else {
                    rejects = [ rej ];
                }
            });
        },

        // Standard Promise.catch
        catch(onrejected) {
            return this.then(undefined, onrejected);
        },

        // Standard Promise.finally
        finally(onfinally) {
            this.then(onfinally, onfinally);
            return this;
        },

        // Exciting newish JS innovation
        get [Symbol.toStringTag]() {
            return "Promise";
        },
    }

    // Limit to a single callback invocation
    function assertOngoing() {
        if (resolved) {
            throw new ImplementationError("Already resolved");
        }
        if (rejected) {
            throw new ImplementationError("Already rejected");
        }
    }

    // Handle resolution
    function resolve(value: T) {
        resolved = true;
        resolvedValue = value;

        if (resolves) {
            for (const resolve of resolves) {
                resolve(value)
            }
        }
    }

    // Handle rejection
    function reject(cause: any) {
        rejected = true;
        rejectedCause = cause;

        if (rejects) {
            for (const reject of rejects) {
                reject(cause);
            }
        }
    }

    // Pass reject and resolve functions to the executor
    executor(
        value => {
            assertOngoing();
            if (MaybePromise.is(value)) {
                value.then(resolve, reject)
            } else {
                resolve(value);
            }
        },
        cause => {
            assertOngoing();
            reject(cause);
        }
    );

    return result;
}
