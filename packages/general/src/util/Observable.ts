/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../MatterError.js";
import { Logger } from "../log/Logger.js";
import "../polyfills/disposable.js";
import { asError } from "./Error.js";
import { MaybePromise } from "./Promises.js";

const logger = Logger.get("Observable");

/**
 * A callback function for observables.
 *
 * The observer return value effects how an {@link Observable} emits:
 *
 *   - If an observer returns undefined the {@link Observable} invokes the next observer immediately.
 *
 *   - If an observer returns a {@link Promise}, the {@link Observable} awaits the return value then continues as
 *     described here.  The emitter must then await the {@link Promise} returned by {@link Observable.emit}.
 *
 *   - Any other return value is returned by {@link Observable.emit} and subsequent observers do not see emission.
 *
 * @param payload a list of arguments to be emitted
 */
export interface Observer<T extends any[] = any[], R = void> {
    (...payload: T): MaybePromise<R | undefined>;
    [observant]?: boolean;
}

/**
 * A discrete event that may be monitored via callback.  Could call it "event" but that could be confused with Matter
 * cluster events and/or DOM events.
 *
 * @param T arguments, should be a named tuple
 */
export interface Observable<T extends any[] = any[], R = void> extends AsyncIterable<T>, PromiseLike<T> {
    /**
     * Notify observers.
     */
    emit(...args: T): R | undefined;

    /**
     * Add an observer.
     */
    on(observer: Observer<T, R>): void;

    /**
     * Remove an observer.
     */
    off(observer: Observer<T, R>): void;

    /**
     * Add an observer that emits once then is unregistered.
     */
    once(observer: Observer<T, R>): void;

    /**
     * True if there is at least one observer registered.
     */
    isObserved: boolean;

    /**
     * Determine whether an observer is registered.
     */
    isObservedBy(observer: Observer<T, R>): boolean;

    /**
     * This flag indicates whether the observable is asynchronous.  Any observable that accepts promise returns may
     * be asynchronous but this information is not available at runtime unless you specify here, typically via
     * {@link AsyncObservable}.
     */
    isAsync?: boolean;

    /**
     * Observable supports standard "for await (const value of observable").
     *
     * Using an observer in this manner limits your listener to the first parameter normally emitted and your observer
     * cannot return a value.
     */
    [Symbol.asyncIterator](): AsyncIterator<T[0]>;

    /**
     * Release resources associated with the observable.
     */
    [Symbol.dispose](): void;
}

/**
 * An observer may designate itself as "not observant" for the purposes of {@link Observable.isObserved} by returning
 * false from this field.
 */
export const observant = Symbol("consider-observed");

/**
 * An {@link Observable} that explicitly supports asynchronous observers.
 */
export interface AsyncObservable<T extends any[] = any[], R = void> extends Observable<T, MaybePromise<R>> {
    isAsync: true;
}

function defaultErrorHandler(error: Error) {
    throw error;
}

export type ObserverErrorHandler = (error: Error, observer: Observer<any[], any>) => void;

/**
 * A concrete {@link Observable} implementation.
 */
export class BasicObservable<T extends any[] = any[], R = void> implements Observable<T, R> {
    #errorHandler: ObserverErrorHandler;
    #observers?: Set<Observer<T, R>>;
    #once?: Set<Observer<T, R>>;
    #isAsync?: boolean;

    #joinIteration?: () => Promise<Next<T>>;
    #removeIterator?: () => void;
    #stopIteration?: () => void;

    constructor(errorHandler?: ObserverErrorHandler, isAsync?: boolean) {
        this.#errorHandler = errorHandler ?? defaultErrorHandler;
        this.#isAsync = isAsync;
    }

    [Symbol.dispose]() {
        this.#observers = this.#once = undefined;

        this.#stopIteration?.();
    }

    get isAsync() {
        return this.#isAsync;
    }

    set isAsync(isAsync: boolean | undefined) {
        this.#isAsync = isAsync;
    }

    get isObserved() {
        if (this.#observers) {
            for (const observer of this.#observers) {
                if (observer[observant] !== false) {
                    return true;
                }
            }
        }

        if (this.#once) {
            for (const observer of this.#once) {
                if (observer[observant] !== false) {
                    return true;
                }
            }
        }

        return false;
    }

    isObservedBy(observer: Observer<T, R>) {
        return !!this.#observers?.has(observer);
    }

    emit(...payload: T): R | undefined {
        if (!this.#observers) {
            return;
        }

        // Iterate over a clone of observers so we do not trigger new observers added during observation
        const iterator = [...this.#observers][Symbol.iterator]();

        const emitNext = (previousEmitResult?: R): R | undefined => {
            if (previousEmitResult !== undefined) {
                return previousEmitResult;
            }

            for (let iteration = iterator.next(); !iteration.done; iteration = iterator.next()) {
                let result;

                const observer = iteration.value;

                try {
                    result = observer(...payload);
                } catch (e) {
                    this.#errorHandler(asError(e), observer);
                }

                if (this.#once?.has(observer)) {
                    this.#once.delete(observer);
                    this.#observers?.delete(observer);
                }

                if (result === undefined) {
                    continue;
                }

                if (MaybePromise.is(result)) {
                    if (!this.isAsync) {
                        let identity: string;
                        if (observer.name) {
                            identity = ` "${observer.name}"`;
                        } else {
                            identity = "";
                        }

                        result.then(undefined, error =>
                            logger.error(`Unhandled error in async observer${identity}:`, error),
                        );

                        continue;
                    }

                    return result.then(result => {
                        if (result === undefined) {
                            return emitNext();
                        }
                        return result;
                    }) as R;
                }

                return result;
            }
        };

        return emitNext();
    }

    on(observer: Observer<T, R>) {
        if (!this.#observers) {
            this.#observers = new Set();
        }
        this.#observers.add(observer);
    }

    off(observer: Observer<T, R>) {
        this.#observers?.delete(observer);
    }

    once(observer: Observer<T, R>) {
        this.on(observer);
        if (!this.#once) {
            this.#once = new Set();
        }
        this.#once.add(observer);
    }

    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): PromiseLike<TResult1 | TResult2> {
        return new Promise<T>(resolve => {
            this.once((...payload): undefined => {
                resolve(payload);
            });
        }).then(onfulfilled, onrejected);
    }

    async *[Symbol.asyncIterator](): AsyncIterator<T[0]> {
        let promise = this.#addIterator();

        try {
            while (promise) {
                const next = await promise;
                if (next) {
                    promise = next.promise;
                    yield next.value;
                }
            }
        } finally {
            this.#removeIterator?.();
        }
    }

    #addIterator() {
        if (this.#joinIteration) {
            return this.#joinIteration();
        }

        let resolve: (next: Next<T>) => void;
        let iteratorCount = 1;

        function newPromise() {
            return new Promise<Next<T>>(r => (resolve = r));
        }

        let promise = newPromise();

        function observer(...args: T): undefined {
            const oldResolve = resolve;
            promise = newPromise();
            oldResolve({ value: args[0], promise });
        }

        this.on(observer);

        this.#joinIteration = () => {
            iteratorCount++;
            return promise;
        };

        this.#removeIterator = () => {
            if (!iteratorCount--) {
                this.#stopIteration?.();
            }
        };

        this.#stopIteration = () => {
            this.off(observer);
            resolve(undefined);
            this.#stopIteration = undefined;
            this.#removeIterator = undefined;
        };
    }
}

type Next<T> = undefined | { value: T; promise: Promise<Next<T>> };

function constructObservable(errorHandler?: ObserverErrorHandler) {
    return new BasicObservable(errorHandler);
}

/**
 * Create an {@link Observable}.
 */
export const Observable = constructObservable as unknown as {
    new <T extends any[], R = void>(errorHandler?: ObserverErrorHandler): Observable<T, R>;
    <T extends any[], R = void>(errorHandler?: ObserverErrorHandler): Observable<T, R>;
};

function constructAsyncObservable(errorHandler?: ObserverErrorHandler) {
    return new BasicObservable(errorHandler, true);
}

/**
 * Create an {@link AsyncObservable} that explicitly supports asynchronous results
 */
export const AsyncObservable = constructAsyncObservable as unknown as {
    new <T extends any[], R = void>(errorHandler?: ObserverErrorHandler): AsyncObservable<T, R>;
    <T extends any[], R = void>(errorHandler?: ObserverErrorHandler): AsyncObservable<T, R>;
};

function event<E, N extends string>(emitter: E, name: N) {
    const observer = (emitter as any)[name];
    if (typeof !observer?.on !== "function") {
        throw new ImplementationError(`Invalid event name ${name}`);
    }
    return observer as Observable;
}

/**
 * A set of observables.  You can bind events using individual observables or the methods emulating a subset Node's
 * EventEmitter.
 *
 * To maintain type safety, implementers define events as observable child properties.
 */
export class EventEmitter {
    emit<This, N extends EventEmitter.NamesOf<This>>(this: This, name: N, ...payload: EventEmitter.PayloadOf<This, N>) {
        event(this, name).emit(...payload);
    }

    addListener<This, N extends EventEmitter.NamesOf<This>>(
        this: This,
        name: N,
        handler: EventEmitter.ObserverOf<This, N>,
    ) {
        event(this, name).on(handler as any);
    }

    removeListener<This, N extends EventEmitter.NamesOf<This>>(
        this: This,
        name: N,
        handler: EventEmitter.ObserverOf<This, N>,
    ) {
        event(this, name).off(handler as any);
    }

    get eventNames() {
        return Object.keys(this).filter(k => typeof (this as any)[k]?.on === "function");
    }

    [Symbol.dispose]() {
        for (const name of this.eventNames) {
            (this as unknown as Record<string, Observable>)[name][Symbol.dispose]?.();
        }
    }
}

export namespace EventEmitter {
    /**
     * Legal event names.  If there are no events defined, assume this is an
     * untyped instance and allow any argument.
     */
    export type NamesOf<This> = [EventNames<This>] extends [never] ? string : EventNames<This>;

    export type EventNames<This> = string &
        keyof {
            [K in keyof This as This[K] extends Observable ? K : never]: true;
        };

    /**
     * Arguments for an event.  If there are no events defined, assume this is
     * an untyped emitter and allow any argument.
     */
    export type PayloadOf<This, E extends string> = [EventPayload<This, E>] extends [never]
        ? any[]
        : EventPayload<This, E>;

    export type EventPayload<This, E extends string> = This extends { [K in E]: Observable<infer T extends any[]> }
        ? T
        : never;

    export type ObserverOf<This, E extends string> = Observable<PayloadOf<This, E>>;
}

/**
 * An {@link Observable} that proxies to another {@link Observable}.
 *
 * Emits emitted here instead emit on the target {@link Observable}.  Events emitted on the target emit locally via
 * a listener installed by the proxy.
 *
 * This is useful for managing a subset of {@link Observer}s for an {@link Observable}.
 *
 * Note that this "proxy" acts as a proxy but is not a JS {@link Proxy}.
 */
export class ObservableProxy extends BasicObservable {
    #target: Observable;
    #emitter = super.emit.bind(this);

    constructor(target: Observable) {
        super();

        Object.defineProperty(this.#emitter, observant, {
            get() {
                return super.isObserved;
            },
        });

        this.#target = target;
        this.#target.on(this.#emitter);
        this.emit = this.#target.emit.bind(this.#target);
    }

    override [Symbol.dispose]() {
        this.#target.off(this.#emitter);
        super[Symbol.dispose]();
    }

    override get isAsync() {
        return this.#target.isAsync;
    }

    override get isObserved(): boolean {
        return this.#target.isObserved;
    }

    override emit: (...payload: any) => any | undefined;
}

/**
 * A collection of observers managed as a unit.  This makes it convenient to deregister multiple observers when an
 * object closes.
 */
export class ObserverGroup {
    #defaultTarget?: {};
    #observers = new Map<Observable<any[], any> | AsyncObservable<any>, Observer<any[], any>[]>();
    #boundObservers = new Map<Observer<any[], any>, Map<{}, Observer<any[]>>>();

    constructor(target?: {}) {
        this.#defaultTarget = target;
    }

    /**
     * Add an observer.
     *
     * @param observable the observable to observe
     * @param observer the observer function
     * @param target optional "this" to bind the observer
     */
    on<T extends any[], R>(
        observable: Observable<T, R> | AsyncObservable<T, R>,
        observer: Observer<ObserverGroup.VarArgs<NoInfer<T>>, NoInfer<R>>,
        target = this.#defaultTarget,
    ) {
        if (target !== undefined) {
            observer = observer.bind(target);
        }
        observable.on(observer as Observer<T, R>);
        const observers = this.#observers.get(observable);
        if (observers === undefined) {
            this.#observers.set(observable, [observer]);
        } else {
            observers.push(observer);
        }
    }

    /**
     * Remove a single observer.
     *
     * @param observable the observable to observe
     * @param observer the observer function
     * @param target if the observer was bound in {@link on} this must match the bound target
     */
    off<T extends any[]>(
        observable: Observable<T> | AsyncObservable<T>,
        observer: Observer<NoInfer<T>>,
        target = this.#defaultTarget,
    ) {
        if (target) {
            const observers = this.#boundObservers.get(observer);
            if (observers === undefined) {
                return;
            }
            const bound = observers.get(target);
            if (bound === undefined) {
                return;
            }
            observers.delete(target);
            if (observers.size === 0) {
                this.#boundObservers.delete(observer);
            }
        }
        const observers = this.#observers.get(observable);
        if (observers) {
            const index = observers.indexOf(observer);
            if (index !== -1) {
                observers?.splice(index, 1);
            }
        }
        observable.off(observer);
    }

    /**
     * Remove all observers.
     */
    close() {
        for (const [observable, observers] of this.#observers.entries()) {
            for (const observer of observers) {
                observable.off(observer);
            }
        }
        this.#observers.clear();
        this.#boundObservers.clear();
    }
}

export namespace ObserverGroup {
    /**
     * This is a workaround for a TS bug, without this the observer must provide a full argument set even if it does not
     * use all arguments.
     */
    export type VarArgs<T extends any[]> = T extends [...infer R, infer A] ? [...R, A] : T extends [infer A] ? A : [];
}
