/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, NotInitializedError } from "../common/MatterError.js";
import { MaybePromise } from "./Promises.js";

/**
 * Create an instance of a class implementing the {@link AsyncConstructable}
 * pattern.
 */
export async function asyncNew<
    const A extends any[],
    const C extends new(...args: A) => AsyncConstructable<any>
>(constructable: C, ...args: A) {
    return await new constructable(...args).construction;
}

/**
 * AsyncConstructable implements a pattern for asynchronous object
 * initialization.
 * 
 * Async construction happens in the initializer parameter of
 * {@link AsyncConstruction}.  You invoke in your constructor and place in a
 * property called "construction".
 * 
 * If construction is not in fact asynchronous (does not return a Promise)
 * AsyncConstruction will complete synchronously.
 * 
 * To ensure an instance is initialized prior to use you may await
 * construction, so e.g. `await new MyConstructable().construction`.
 * {@link asyncNew} is shorthand for this.
 * 
 * Public APIs should provide a static async create() that performs an
 * asyncNew().  The class will then adhere to Matter.js conventions and
 * library users can ignore the complexities associated with async creation.
 * 
 * Methods that cannot be used prior to construction can use
 * {@link AsyncConstruction.assert} to ensure construction has completed.
 * High-visibility public APIs can instead check
 * {@link AsyncConstruction.ready} and throw a more specific error.
 * 
 * Setup optionally supports cancellation of initialization.  To implement,
 * provide a "cancel" function to {@link AsyncConstruction}.  Then
 * initialization can be canceled via {@link AsyncConstruction.cancel}.
 * 
 * To determine if initialization is complete synchronously you can check
 * {@link AsyncConstruction.ready}.
 */
export interface AsyncConstructable<T> {
    readonly construction: AsyncConstruction<T>;
}

/**
 * The promise implemented by an {@link AsyncConstructable}.
 */
export interface AsyncConstruction<T> extends Promise<T> {
    /**
     * Becomes true when construction is finished.
     */
    readonly ready: boolean;

    /**
     * If construction ends with an error, the error is saved here.
     */
    readonly error?: Error;

    /**
     * If you omit the initializer parameter to {@link AsyncConstruction}
     * execution is deferred until you invoke this method.
     */
    start(initializer: () => MaybePromise<void>): void;

    /**
     * AsyncConstruction may be cancellable.  If not this method does nothing.
     * Regardless you must wait for promise resolution even if canceled.
     */
    cancel(): void;

    /**
     * Throws an error if construction is ongoing or incomplete.
     */
    assert(): void;
}

export function AsyncConstruction<T extends AsyncConstructable<any>>(
    target: T,
    initializer?: () => MaybePromise<void>,
    cancel?: () => void
): AsyncConstruction<T> {
    let promise: MaybePromise;
    let error: any;
    let started = false;
    let ready = false;
    let canceled = false;
    let placeholderResolve: undefined | (() => void);
    let placeholderReject: undefined | ((error: any) => void)

    const self: AsyncConstruction<any> = {
        get ready() {
            return ready;
        },

        get error() {
            return error;
        },

        start(initializer: () => MaybePromise<void>) {
            if (started) {
                throw new ImplementationError("Initialization has already started");
            }
            started = true;

            const initialization = initializer();

            if (MaybePromise.is(initialization)) {
                ready = false;
                if (promise) {
                    initialization.then(placeholderResolve, placeholderReject);
                } else {
                    promise = initialization;
                }
                initialization.then(
                    () => ready = true,
                    e => {
                        error = e;
                        ready = true
                    }
                );
            } else {
                ready = true;
            }
        },

        cancel: () => {
            if (ready || canceled) {
                return;
            }
            if (cancel) {
                canceled = true;
                cancel?.();
            }
        },

        assert() {
            if (error) {
                throw new NotInitializedError(`Resource unavailable because of initialization failure: ${error}`);
            }
            if (!ready) {
                throw new NotInitializedError("Resource unavailable because initialization is ongoing");
            }
            if (canceled) {
                throw new NotInitializedError("Resource unavailable because initialization was canceled");
            }
        },
        
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): Promise<TResult1 | TResult2> {
            if (!started) {
                // Initialization has not started so we need to create a
                // placeholder promise
                promise = new Promise((resolve, reject) => {
                    placeholderResolve = resolve;
                    placeholderReject = reject;
                });
            }
            if (promise) {
                return promise.then(() => target).then(onfulfilled, onrejected);
            }

            return Promise.resolve(target).then(onfulfilled, onrejected);
        },

        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        finally(onfinally) {
            return this.then().finally(onfinally);
        },

        get [Symbol.toStringTag]() {
            return "Promise";
        },
    };

    if (initializer) {
        self.start(initializer);
    }

    return self;
}
