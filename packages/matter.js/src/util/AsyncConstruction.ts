/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CrashedDependencyError, Lifecycle } from "../common/Lifecycle.js";
import { ImplementationError } from "../common/MatterError.js";
import { Logger } from "../log/Logger.js";
import { Observable } from "./Observable.js";
import { MaybePromise, Tracker } from "./Promises.js";

/**
 * Create an instance of a class implementing the {@link AsyncConstructable} pattern.
 */
export async function asyncNew<const A extends any[], const C extends new (...args: A) => AsyncConstructable<any>>(
    constructable: C,
    ...args: A
) {
    return await new constructable(...args).construction;
}

/**
 * AsyncConstructable implements a pattern for asynchronous object initialization.
 *
 * Async construction happens in the initializer parameter of {@link AsyncConstruction}.  You invoke in your constructor
 * and place in a property called "construction".
 *
 * If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
 * synchronously.
 *
 * To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
 * MyConstructable().construction`. {@link asyncNew} is shorthand for this.
 *
 * Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
 * Matter.js conventions and library users can ignore the complexities associated with async creation.
 *
 * Methods that cannot be used prior to construction can use {@link AsyncConstruction.assert} to ensure construction has
 * completed. High-visibility public APIs can instead check {@link AsyncConstruction.ready} and throw a more specific
 * error.
 *
 * Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
 * {@link AsyncConstruction}.  Then initialization can be canceled via {@link AsyncConstruction.cancel}.
 *
 * To determine if initialization is complete synchronously you can check {@link AsyncConstruction.ready}.
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
     * Status of the constructed object.
     */
    readonly status: Lifecycle.Status;

    /**
     * Notifications of state change.  Normally you just await construction but this offers more granular events.
     */
    readonly change: Observable<[status: Lifecycle.Status, subject: T]>;

    /**
     * If you omit the initializer parameter to {@link AsyncConstruction} execution is deferred until you invoke this
     * method.
     */
    start(initializer?: () => MaybePromise): this;

    /**
     * Invoke destruction logic then move to destroyed status.
     */
    destroy(destructor: () => MaybePromise): this;

    /**
     * AsyncConstruction may be cancellable.  If not this method does nothing.  Regardless you must wait for promise
     * resolution even if canceled.
     */
    cancel(): void;

    /**
     * Throws an error if construction is ongoing or incomplete.
     */
    assert(description?: string): void;

    /**
     * Asserts construction is complete and that an object is defined.
     */
    assert<T>(description: string, dependency: T | undefined): T;

    /**
     * Manually force a specific {@link status}.
     *
     * This offers flexibility in component lifecycle management including resetting component to inactive state and
     * broadcasting lifecycle changes.
     *
     * This method fails if initialization is ongoing; await completion first.
     */
    setStatus(status: Lifecycle.Status): this;

    /**
     * Force "crashed" state with the specified error.
     */
    crashed(cause: any): this;

    toString(): string;
}

export function AsyncConstruction<T extends AsyncConstructable<any>>(
    subject: T,
    initializer?: () => MaybePromise,
    options?: AsyncConstruction.Options,
): AsyncConstruction<T> {
    let promise: MaybePromise;
    let error: any;
    let started = false;
    let ready = false;
    let canceled = false;
    let placeholderResolve: undefined | (() => void);
    let placeholderReject: undefined | ((error: any) => void);
    let status = Lifecycle.Status.Initializing;
    let change: Observable<[status: Lifecycle.Status, subject: T]> | undefined;

    const onerror = options?.onerror ?? ((error: Error) => {
        const logger = Logger.get(subject.constructor.name);
        logger.error(error);
    });

    // As a PromiseLike, rejections have the stack trace of the original error.  This can be confusing.  So instead we
    // log the error (or pass to options.onerror) and throw a new CrashedDependencyError for each listener.  This
    // captures the original error but also the trace for the secondary error.
    function crashedError() {
        let what;
        if (subject.toString === Object.toString) {
            what = subject.constructor.name;
        } else {
            what = subject.toString();
        }
        throw new CrashedDependencyError(what, "unavailable due to initialization error");
    }

    function setStatus(newStatus: Lifecycle.Status) {
        status = newStatus;
        if (change) {
            change.emit(status, subject);
        }
    }

    const self: AsyncConstruction<any> = {
        toString() {
            return `construction<${subject}>`;
        },

        get ready() {
            return ready;
        },

        get error() {
            return error;
        },

        get status() {
            return status;
        },

        get change() {
            if (change === undefined) {
                change = new Observable();
            }
            return change;
        },

        start(init?: () => MaybePromise) {
            if (started) {
                throw new ImplementationError(`Initialization of ${subject} has already started`);
            }

            if (init) {
                initializer = init;
            }
            if (!initializer) {
                throw new ImplementationError(`No initializer available for ${subject}`);
            }

            started = true;

            let initialization;
            try {
                initialization = initializer();
            } catch (e) {
                this.crashed(e);
                ready = true;
                if (placeholderReject) {
                    const reject = placeholderReject;
                    placeholderResolve = placeholderReject = undefined;
                    reject(e);
                }
                throw crashedError();
            }

            if (MaybePromise.is(initialization)) {
                ready = false;
                initialization = initialization.then(
                    () => {
                        ready = true;
                        if (status === Lifecycle.Status.Initializing) {
                            setStatus(Lifecycle.Status.Active);
                        }
                    },
                    e => {
                        ready = true;
                        if (status !== Lifecycle.Status.Destroying && status !== Lifecycle.Status.Destroyed) {
                            this.crashed(e);
                        }
                        throw crashedError();
                    },
                );
                if (promise) {
                    initialization.then(placeholderResolve, placeholderReject);
                } else {
                    promise = Tracker.global.track(initialization, `${subject.constructor.name} construction`);
                }
            } else {
                ready = true;
                if (status === Lifecycle.Status.Initializing) {
                    setStatus(Lifecycle.Status.Active);
                }
                if (placeholderResolve) {
                    const resolve = placeholderResolve;
                    placeholderResolve = placeholderReject = undefined;
                    promise = undefined;
                    resolve();
                }
            }

            return this;
        },

        cancel: () => {
            if (ready || canceled) {
                return;
            }
            if (options?.cancel) {
                canceled = true;
                if (status === Lifecycle.Status.Initializing) {
                    setStatus(Lifecycle.Status.Destroyed);
                }
                options.cancel();
            }
        },

        assert(description?: string, dependency?: any) {
            Lifecycle.assertActive(status, description ?? subject.constructor.name);

            if (arguments.length < 2) {
                return;
            }

            try {
                if (dependency === undefined) {
                    throw new ImplementationError(`Property is undefined`);
                }
            } catch (e) {
                if (!(e instanceof Error)) {
                    e = new ImplementationError((e ?? "(unknown error)").toString());
                }
                if (e instanceof Error) {
                    e.message = `Cannot access ${description}: ${e.message}`;
                }
                throw e;
            }
            return dependency;
        },

        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): Promise<TResult1 | TResult2> {
            if (!started) {
                // Initialization has not started so we need to create a
                // placeholder promise

                promise = new Promise((resolve, reject) => {
                    placeholderResolve = resolve;
                    placeholderReject = reject;
                });

                promise = Tracker.global.track(promise, `${subject.constructor.name} construction`);
            }
            if (promise) {
                return Promise.resolve(promise)
                    .then(() => subject)
                    .then(onfulfilled, onrejected);
            }

            if (error) {
                onrejected?.(error);
            } else {
                onfulfilled?.(subject);
            }

            return this;
        },

        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        destroy(destructor) {
            if (status === Lifecycle.Status.Destroying || status === Lifecycle.Status.Destroyed) {
                return this;
            }

            status = Lifecycle.Status.Destroying;
            promise = MaybePromise.finally(
                promise,

                () =>
                    MaybePromise.finally(
                        () => destructor(),
                        () => setStatus(Lifecycle.Status.Destroyed),
                    ),
            );

            return this;
        },

        finally(onfinally: () => void): Promise<T> {
            return Promise.prototype.finally.call(this, onfinally);
        },

        crashed(cause: any) {
            error = cause;
            setStatus(Lifecycle.Status.Crashed);
            onerror(error);
            return this;
        },

        setStatus(newStatus: Lifecycle.Status) {
            if (this.status === newStatus) {
                return this;
            }

            if (status === Lifecycle.Status.Destroyed) {
                throw new ImplementationError("Cannot change status because destruction is final");
            }

            switch (newStatus) {
                case Lifecycle.Status.Inactive:
                    promise = undefined;
                    started = ready = canceled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Initializing:
                    throw new ImplementationError("Cannot change status because initialization is ongoing");

                case Lifecycle.Status.Active:
                    promise = undefined;
                    started = ready = true;
                    canceled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Destroying:
                    break;

                case Lifecycle.Status.Destroyed:
                    break;

                default:
                    started = ready = true;
                    break;
            }

            setStatus(status);

            return this;
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

export namespace AsyncConstruction {
    export interface Options {
        /**
         * Cancellation callback if the subject supports cancellation.
         */
        cancel?: () => void;

        /**
         * If the subject contributes to a composite object, crashes propagate to parent indicated here.
         */
        parent?: AsyncConstruction<any>;

        /**
         * By default unhandled initialization errors are logged.  You can override by supplying an error handler here.
         */
        onerror?: (error: Error) => void;
    }
}
