/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Logger } from "../log/Logger.js";

const logger = Logger.get("Event");

/**
 * A callback function for observables.
 */
export type Observer<T extends any[] = any[]> = (...payload: T) => void;

/**
 * A discrete event that may be monitored via callback.  Could call it "event"
 * but that could be confused with Matter cluster events and/or DOM events.
 *
 * @param T arguments, should be a named tuple
 */
export interface Observable<T extends any[] = any[]> {
    /**
     * Notify observers.
     */
    emit(...args: T): void;

    /**
     * Add an observer.
     */
    on(observer: Observer<T>): void;

    /**
     * Remove an observer.
     */
    off(observer: Observer<T>): void;

    /**
     * Add an observer that emits once then is unregistered.
     */
    once(observer: Observer<T>): void;
}

function defaultErrorHandler(error: Error) {
    logger.error(`Error invoking event observer`, error);
}

export type ObserverErrorHandler = (error: Error, observer: Observer) => void;

class Event<T extends any[] = any[]> implements Observable<T> {
    #errorHandler: ObserverErrorHandler;
    #observers?: Set<Observer<T>>;
    #once?: Set<Observer<T>>;

    constructor(errorHandler?: ObserverErrorHandler) {
        this.#errorHandler = errorHandler ?? defaultErrorHandler;
    }

    emit(...payload: T) {
        if (this.#observers) {
            for (const observer of this.#observers) {
                try {
                    observer(...payload);
                } catch (e) {
                    if (!(e instanceof Error)) {
                        e = new Error(`${e}`);
                    }
                    this.#errorHandler(e as Error, observer as Observer);
                }
                if (this.#once?.has(observer)) {
                    this.#once.delete(observer);
                    this.#observers.delete(observer);
                }
            }
        }
    }

    on(observer: Observer<T>) {
        if (!this.#observers) {
            this.#observers = new Set();
        }
        this.#observers.add(observer);
    }

    off(observer: Observer<T>) {
        this.#observers?.delete(observer);
    }

    once(observer: Observer<T>) {
        this.on(observer);
        if (!this.#once) {
            this.#once = new Set();
        }
        this.#once.add(observer);
    }
}

function constructObservable(errorHandler?: ObserverErrorHandler) {
    return new Event(errorHandler);
}

/**
 * A general implementation of {@link Observable}.
 */
export const Observable = constructObservable as unknown as {
    new <T extends any[]>(errorHandler?: ObserverErrorHandler): Observable<T>;
    <T extends any[]>(errorHandler?: ObserverErrorHandler): Observable<T>;
};

function event<E, N extends string>(emitter: E, name: N) {
    const observer = (emitter as any)[name];
    if (typeof !observer?.on !== "function") {
        throw new ImplementationError(`Invalid event name ${name}`);
    }
    return observer as Observable;
}

/**
 * A set of observables.  You can bind events using individual observables or
 * the methods emulating a subset Node's EventEmitter.
 *
 * To maintain type safety, implementers define events as observable child
 * properties.
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
