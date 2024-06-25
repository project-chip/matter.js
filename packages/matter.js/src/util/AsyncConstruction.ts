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
): Promise<InstanceType<C>> {
    return await new constructable(...args).construction.initialization;
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
export interface AsyncConstructable<T = any> {
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
     * A promise that resolves or rejects with {@link error}.  Awaiting this promise is identical to awaiting the
     * AsyncConstruction itself except:
     *
     *   - On error this promise rejects with the original error rather than CrashedDependencyError
     *
     *   - Accessing this property disables error logging in the default handler
     *
     * This allows the primary code path to handle initialization errors while dependent code paths only receive errors
     * indicating the dependency is unavailable.
     */
    readonly initialization: Promise<T>;

    /**
     * If you omit the initializer parameter to {@link AsyncConstruction} execution is deferred until you invoke this
     * method.
     */
    start(initializer?: () => MaybePromise): void;

    /**
     * Invoke destruction logic then move to destroyed status.
     */
    close(destructor: () => MaybePromise): MaybePromise;

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
    crashed(cause: any, reportError?: boolean): void;

    /**
     * Invoke a method after construction completes successfully.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onSuccess(actor: () => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes unsuccessfully.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onError(actor: (error: Error) => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes successfully or onsuccessfully.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onCompletion(actor: () => void): void;

    toString(): string;
}

export function AsyncConstruction<T extends AsyncConstructable>(
    subject: T,
    initializer?: () => MaybePromise,
    options?: AsyncConstruction.Options,
): AsyncConstruction<T> {
    // The promise we use to implement AsyncConstructable.initialization
    let initializationPromise: undefined | Promise<T>;
    let initializationResolve: undefined | ((subject: T) => void);
    let initializationReject: undefined | ((error: any) => void);

    // The promise we use to implement AsyncConstructable.then()
    let awaiterPromise: undefined | Promise<T>;
    let awaiterResolve: undefined | ((subject: T) => void);
    let awaiterReject: undefined | ((error: any) => void);

    let error: any;
    let started = false;
    let ready = false;
    let canceled = false;
    let status = Lifecycle.Status.Initializing;
    let change: Observable<[status: Lifecycle.Status, subject: T]> | undefined;
    let errorHandled = false;

    const onerror =
        options?.onerror ??
        ((error: Error) => {
            if (errorHandled) {
                return;
            }
            unhandledError(error);
        });

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
                change = Observable();
            }
            return change;
        },

        start(init?: () => MaybePromise) {
            if (started) {
                throw new ImplementationError(`Initialization of ${subject} is already ongoing`);
            }

            if (init) {
                initializer = init;
            }
            if (!initializer) {
                throw new ImplementationError(`No initializer available for ${subject}`);
            }

            started = true;

            let initializerPromise;
            try {
                initializerPromise = initializer();
            } catch (e) {
                errorHandled = true;
                rejected(e);
                throw e;
            }

            if (MaybePromise.is(initializerPromise)) {
                ready = false;
                initializerPromise.then(resolved, rejected);
            } else {
                resolved();
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
            // On error awaiters receive CrashedDependencyError rather than the original error.  So we can't pass
            // onrejected to the dependency directly.  If there is no error handler we don't want the error unhandled
            // (we handle the cause in the primary code path) so we add an empty error handler.
            const handleRejection = () => onrejected?.(crashedError()) as TResult2;
            if (!ready) {
                if (!awaiterPromise) {
                    awaiterPromise = new Promise<T>((resolve, reject) => {
                        awaiterResolve = resolve;
                        awaiterReject = reject;
                    });
                }

                return awaiterPromise.then(onfulfilled, handleRejection);
            }

            const promise = error ? Promise.reject(crashedError()) : Promise.resolve(subject);
            return promise.then(onfulfilled, handleRejection);
        },

        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        get initialization() {
            if (initializationPromise === undefined) {
                if (!ready) {
                    errorHandled = true;
                    initializationPromise = new Promise<T>((resolve, reject) => {
                        initializationResolve = () => resolve(subject);
                        initializationReject = reject;
                    });
                } else if (error) {
                    initializationPromise = Promise.reject(error);
                } else {
                    initializationPromise = Promise.resolve(subject);
                }
            }

            return initializationPromise;
        },

        onSuccess(actor: () => MaybePromise<void>) {
            const onSuccess = () => {
                const errorHandler = createErrorHandler("onSuccess");

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
                const errorHandler = createErrorHandler("onError");

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
                const errorHandler = createErrorHandler("onCompletion");

                try {
                    actor();
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.finally(onCompletion);
        },

        close(destructor): MaybePromise {
            if (status === Lifecycle.Status.Destroying || status === Lifecycle.Status.Destroyed) {
                return this;
            }

            function invokeDestructor() {
                status = Lifecycle.Status.Destroying;

                return MaybePromise.finally(
                    MaybePromise.catch(destructor, cause =>
                        unhandledError(`Unhandled error during ${self} close`, cause),
                    ),
                    () => setStatus(Lifecycle.Status.Destroyed),
                );
            }

            if (status === Lifecycle.Status.Initializing) {
                return this.then(invokeDestructor, invokeDestructor);
            }

            return invokeDestructor();
        },

        finally(onfinally: () => void): Promise<T> {
            return Promise.prototype.finally.call(this, onfinally);
        },

        crashed(cause: any, report = true) {
            error = cause;
            setStatus(Lifecycle.Status.Crashed);
            if (report) {
                onerror(error);
            }
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
                    awaiterPromise = undefined;
                    started = ready = canceled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Initializing:
                    throw new ImplementationError("Cannot change status because initialization is ongoing");

                case Lifecycle.Status.Active:
                    awaiterPromise = undefined;
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

    // As a PromiseLike, rejections have the stack trace of the original error.  This can be confusing.  So instead we
    // throw a new CrashedDependencyError for each listener.  This captures the original error but also the trace for
    // the secondary error.
    function crashedError() {
        let what;
        if (subject.toString === Object.prototype.toString) {
            what = subject.constructor.name;
        } else {
            what = subject.toString();
        }
        return new CrashedDependencyError(what, "unavailable due to initialization error");
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

    function resolved() {
        ready = true;
        if (status === Lifecycle.Status.Initializing) {
            setStatus(Lifecycle.Status.Active);
        }

        if (initializationResolve) {
            const resolve = initializationResolve;
            initializationResolve = initializationReject = undefined;
            resolve(subject);
        }

        if (awaiterResolve) {
            const resolve = awaiterResolve;
            awaiterResolve = awaiterReject = undefined;
            resolve(subject);
        }
    }

    function rejected(cause: any) {
        ready = true;
        if (status !== Lifecycle.Status.Destroying && status !== Lifecycle.Status.Destroyed) {
            self.crashed(cause);
        }

        if (initializationReject) {
            const reject = initializationReject;
            initializationResolve = initializationReject = undefined;
            reject(cause);
        }

        if (awaiterReject) {
            const reject = awaiterReject;
            awaiterResolve = awaiterReject = undefined;
            reject(cause);
        }
    }

    function unhandledError(...args: any[]) {
        const logger = Logger.get(subject.constructor.name);
        logger.error(...args);
    }

    function createErrorHandler(name: string) {
        return (e: any) => {
            unhandledError(`Unhandled error in ${self} ${name}:`, e);
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
         * By default unhandled initialization errors are logged.  You can override by supplying an error handler here
         * or by handling rejection of {@link AsyncConstruction.initialization}.
         */
        onerror?: (error: Error) => void;
    }
}
