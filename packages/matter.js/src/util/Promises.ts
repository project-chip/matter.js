/**
 * Utils for promises.
 *
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../common/MatterError.js";

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
