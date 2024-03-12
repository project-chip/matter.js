/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CrashedDependencyError, Lifecycle } from "../common/Lifecycle.js";
import { ImplementationError } from "../common/MatterError.js";
import { Logger } from "../log/Logger.js";
import { Observable } from "./Observable.js";
import { MaybePromise } from "./Promises.js";

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
    start(initializer?: () => MaybePromise): void;

    /**
     * Invoke destruction logic then move to destroyed status.
     */
    close(destructor: () => MaybePromise): this;

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
    setStatus(status: Lifecycle.Status): void;

    /**
     * Force "crashed" state with the specified error.
     */
    crashed(cause: any, invokeDefaultHandler?: boolean): void;

    /**
     * Invoke a method after construction completes successfully.
     *
     * Any error in this callback will crash construction.
     */
    onSuccess(actor: () => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes unsuccessfully.
     *
     * Any error in this callback will replace the crash cause.
     */
    onError(actor: (error: Error) => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes successfully or onsuccessfully.
     *
     * Any error in this callback will crash construction or replace the crash cause.
     */
    onCompletion(actor: () => void): void;

    toString(): string;
}

export function AsyncConstruction<T extends AsyncConstructable<any>>(
    subject: T,
    initializer?: () => MaybePromise,
    options?: AsyncConstruction.Options,
): AsyncConstruction<T> {
    let promise: Promise<void> | undefined;
    let error: any;
    let started = false;
    let ready = false;
    let canceled = false;
    let placeholderResolve: undefined | (() => void);
    let placeholderReject: undefined | ((error: any) => void);
    let status = Lifecycle.Status.Initializing;
    let change: Observable<[status: Lifecycle.Status, subject: T]> | undefined;

    const onerror =
        options?.onerror ??
        ((error: Error) => {
            const logger = Logger.get(subject.constructor.name);
            logger.error(error);
        });

    // As a PromiseLike, rejections have the stack trace of the original error.  This can be confusing.  So instead we
    // log the error (or pass to options.onerror) and throw a new CrashedDependencyError for each listener.  This
    // captures the original error but also the trace for the secondary error.
    function crashedError() {
        let what;
        if (subject.toString === Object.prototype.toString) {
            what = subject.constructor.name;
        } else {
            what = subject.toString();
        }
        throw new CrashedDependencyError(what, "unavailable due to initialization error");
    }

    function setStatus(newStatus: Lifecycle.Status) {
        if (status === newStatus) {
            return;
        }

        status = newStatus;

        if (change) {
            change.emit(status, subject);
        }
    }

    const self: AsyncConstruction<any> = {
        [Symbol.toStringTag]: "AsyncConstruction",

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

                const initSuccess = () => {
                    ready = true;
                    if (status === Lifecycle.Status.Initializing) {
                        setStatus(Lifecycle.Status.Active);
                    }
                };

                const initFailure = (cause: any) => {
                    ready = true;
                    if (status !== Lifecycle.Status.Destroying && status !== Lifecycle.Status.Destroyed) {
                        this.crashed(cause);
                    }
                    throw crashedError();
                };

                initialization = Promise.resolve(initialization.then(initSuccess, initFailure));

                if (promise) {
                    void initialization.then(placeholderResolve, placeholderReject);
                } else {
                    promise = initialization;
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
                let error;
                if (e instanceof Error) {
                    error = e;
                } else {
                    error = new ImplementationError(e?.toString() ?? "(unknown error)");
                }
                error.message = `Cannot access ${description}: ${error.message}`;
                throw error;
            }
            return dependency;
        },

        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): Promise<TResult1 | TResult2> {
            // If initialization has not started we need to create a placeholder promise
            if (!started) {
                promise = new Promise((resolve, reject) => {
                    placeholderResolve = resolve;
                    placeholderReject = reject;
                });
            }

            // If there is a promise then construction is ongoing
            if (promise) {
                return Promise.resolve(promise.then(() => subject).then(onfulfilled, onrejected));
            }

            // If there is an error then construction crashed
            if (error) {
                return Promise.reject(error).catch(onrejected);
            }

            // Construction is complete
            return Promise.resolve(subject).then(onfulfilled);
        },

        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        onSuccess(actor: () => MaybePromise<void>) {
            const onSuccess = () => {
                const errorHandler = hookErrorHandler("onSuccess");

                try {
                    const result = actor();
                    if (MaybePromise.is(result)) {
                        return Promise.resolve(result).catch(errorHandler);
                    }
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.then(onSuccess).catch(e => {
                // Failure should result in a CrashedDependencyError which simply means initialization failed.  The
                // actual error is logged so we can safely ignore
                if (e instanceof CrashedDependencyError) {
                    return;
                }

                // If the error was not a CrashedDependencyError then it is unexpected.  We rethrow which will result in
                // the process exiting with an unexpected error
                throw e;
            });
        },

        onError(actor: (error: Error) => MaybePromise<void>) {
            const onError = (error: any) => {
                const errorHandler = hookErrorHandler("onError");

                try {
                    const result = actor(error);
                    if (MaybePromise.is(result)) {
                        return Promise.resolve(result).catch(errorHandler);
                    }
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.catch(onError);
        },

        onCompletion(actor: () => void) {
            const onCompletion = () => {
                const errorHandler = hookErrorHandler("onCompletion");

                try {
                    actor();
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.finally(onCompletion);
        },

        close(destructor) {
            if (status === Lifecycle.Status.Destroying || status === Lifecycle.Status.Destroyed) {
                return this;
            }

            error = undefined;
            status = Lifecycle.Status.Destroying;

            const destruction = MaybePromise.finally(
                promise,

                () =>
                    MaybePromise.finally(
                        () => destructor(),
                        () => setStatus(Lifecycle.Status.Destroyed),
                    ),
            );

            if (destruction) {
                promise = Promise.resolve(destruction);
            }

            return this;
        },

        finally(onfinally: () => void): Promise<T> {
            return Promise.prototype.finally.call(this, onfinally);
        },

        crashed(cause: any) {
            error = cause;
            setStatus(Lifecycle.Status.Crashed);
            onerror(error);
        },

        setStatus(newStatus: Lifecycle.Status) {
            if (this.status === newStatus) {
                return;
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
        },
    };

    function hookErrorHandler(name: string) {
        return (e: any) => {
            if (e instanceof Error) {
                e.message = `Uhandled error in ${self}.${name} hook: ${e.message}`;
            } else {
                e = new Error(`Unhandled error in ${self}.${name} hook: ${e}`);
            }
            self.crashed(e);
        };
    }

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
