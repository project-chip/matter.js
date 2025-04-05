/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Endpoint } from "#endpoint/Endpoint.js";
import {
    asError,
    AsyncObservable,
    BasicObservable,
    camelize,
    EventEmitter,
    ImplementationError,
    Logger,
    Observable,
    ObserverErrorHandler,
    ObserverPromiseHandler,
    QuietObservable,
    type Observer,
} from "#general";
import { ElementTag, type AttributeElement, type EventElement, type ValueModel } from "#model";
import type { Behavior } from "./Behavior.js";
import { NodeActivity } from "./context/NodeActivity.js";

const logger = Logger.get("Logger");

/**
 * Events emitted by a {@link Behavior}.
 */
export class Events extends EventEmitter {
    #endpoint?: Endpoint;
    #behavior?: Behavior.Type;

    setContext(endpoint: Endpoint, behavior: Behavior.Type) {
        this.#endpoint = endpoint;
        this.#behavior = behavior;
    }

    /**
     * Emitted when state associated with this behavior is first mutated by a specific interaction.
     */
    interactionBegin = Observable<[]>();

    /**
     * Emitted when a mutating interaction completes.
     */
    interactionEnd = AsyncObservable<[]>();

    get endpoint() {
        return this.#endpoint;
    }

    get behavior() {
        return this.#behavior;
    }

    override toString() {
        return `${this.#endpoint ?? "?"}.${this.#behavior?.id ?? "?"}.events`;
    }
}

export namespace Events {
    export interface Context {}
}

/**
 * An event associated with a specific matter element such as an {@link AttributeElement} or {@link EventElement}.
 */
export class ElementEvent<T extends any[] = any[], S extends ValueModel = ValueModel> extends BasicObservable<T> {
    #schema: S;
    #owner: Events;

    constructor(
        schema: S,
        owner: Events,
        errorHandler?: ObserverErrorHandler,
        promiseHandler?: ObserverPromiseHandler,
    ) {
        super(errorHandler, promiseHandler);

        this.#schema = schema;
        this.#owner = owner;
    }

    /**
     * The element that triggers this event.
     */
    get schema() {
        return this.#schema;
    }

    protected get owner() {
        return this.#owner;
    }
}

/**
 * An {@link  ElementEvent} that emits locally.
 *
 * Observers that throw errors will terminate the emitter.
 */
export class OfflineEvent<T extends any[] = any[], S extends ValueModel = ValueModel> extends ElementEvent<T> {
    constructor(schema: S, owner: Events) {
        super(
            schema,
            owner,

            undefined,

            async (promise, observer) => {
                using _actor = this.owner.endpoint?.env.get(NodeActivity).begin(descriptionOf(this, observer));
                await promise;
            },
        );
    }
}

/**
 * An {@link ElementEvent} that transmits to other Matter nodes.
 *
 * Online events emit externally.  Observers run sequentially and if async register as node activity but otherwise have
 * no affect on the emitter.
 */
export class OnlineEvent<T extends any[] = any[], S extends ValueModel = ValueModel> extends ElementEvent<T> {
    readonly isQuieter: boolean = false;

    constructor(schema: S, owner: Events) {
        super(
            schema,
            owner,

            (error, observer) => {
                logger.error(`Error in ${descriptionOf(this, observer)}`, error);
            },

            async (promise, observer) => {
                using _actor = this.owner.endpoint?.env.get(NodeActivity).begin(descriptionOf(this, observer));
                try {
                    await promise;
                } catch (e) {
                    this.handleError(asError(e), observer);
                }
            },
        );
    }

    /**
     * An {@link Observable} that emits only those events conveyed between nodes.
     *
     * Normally this is the {@link OnlineEvent}, but in the case of server-side elements that are
     * {@link Quality.quieter} this is {@link quiet}.
     */
    get online(): Observable<T> {
        return this;
    }

    /**
     * A quieter version of the {@link OnlineEvent}.
     *
     * Throws if the node is not a server or the associated element is not {@link Quality.quieter}.
     *
     * By default emits latest changes once per second but you can reconfigure via {@link QuietObservable} properties
     * and/or trigger emits using {@link QuietObservable.emitNow} and {@link QuietObservable.emitSoon}.
     */
    get quiet(): QuietObservable<T> {
        throw new ImplementationError(`Matter does not define ${this} with "quieter" (Q) quality`);
    }

    override toString() {
        const base = `${this.owner.toString()}.${camelize(this.schema.name)}`;
        if (this.schema.tag === ElementTag.Attribute || this.schema.tag === ElementTag.Field) {
            return `${base}$Changed`;
        }
        return base;
    }
}

/**
 * An {@link OnlineEvent} for elements marked with {@link Quality#quieter}.
 *
 * Quiet events provide a second observable for {@link online} that implements configurable rate limiting.
 */
export class QuietEvent<T extends any[] = any[], S extends ValueModel = ValueModel> extends OnlineEvent<T, S> {
    override readonly isQuieter = true;

    #quiet: QuietObservable<T>;

    constructor(schema: S, owner: Events, config?: QuietObservable.Configuration<T>) {
        super(schema, owner);
        this.#quiet = new QuietObservable({
            shouldEmit(...args: T) {
                const [oldValue, newValue] = args;

                return oldValue === null || (newValue === null && oldValue !== newValue) ? "now" : true;
            },

            ...config,

            source: this,
        });
    }

    override get online(): Observable<T> {
        return this.#quiet;
    }

    override get quiet(): QuietObservable<T> {
        return this.#quiet;
    }

    override [Symbol.dispose]() {
        this.#quiet[Symbol.dispose]();
        super[Symbol.dispose]();
    }
}

function descriptionOf(observable: Observable, observer: Observer) {
    let desc = `${observable} observer`;
    if (observer.name) {
        desc = `${desc} ${observer.name}`;
    }
    return desc;
}
