/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { EventEmitter } from "../util/Observable.js";
import type { Behavior } from "./Behavior.js";
import { Datasource } from "./state/managed/Datasource.js";
import { Transaction } from "./state/transaction/Transaction.js";

/**
 * The "backing" for a behavior manages those portions of behavior that endure
 * for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #part: Part;
    #type: Behavior.Type;
    #internal?: object;
    #events?: EventEmitter;
    #options?: Behavior.Options;
    #datasource?: Datasource;
    #construction: AsyncConstruction<BehaviorBacking>;

    get construction() {
        return this.#construction;
    }

    constructor(part: Part, type: Behavior.Type, options?: Behavior.Options) {
        this.#part = part;
        this.#type = type;
        this.#options = options;

        this.#construction = AsyncConstruction(this);
    }

    /**
     * Initialize state by applying values from options and invoking the
     * behavior's initialize() function.
     * 
     * Called by Behaviors once the backing is installed.
     */
    initialize() {
        this.construction.start(() => {
            // We use this behavior for initialization.  Do not use agent.get()
            // to access the behavior because it will throw if the behavior
            // isn't initialized
            const behavior = this.createBehavior(this.part.agent, this.#type);

            // Perform actual initialization
            return this.invokeInitializer(behavior, this.#options);
        });
    }

    /**
     * Set state from options and invoke {@link Behavior.initialize}.
     */
    protected invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return behavior.initialize(options);
    }

    /**
     * The {@link Part} that owns the behavior.
     */
    get part() {
        return this.#part;
    }

    /**
     * The {@link Behavior.Type} backed.
     */
    get type() {
        return this.#type;
    }

    /**
     * Create an instance of the backed {@link Behavior}.
     *
     * Derivatives may override to perform additional setup beyond simple
     * instantiation.
     */
    createBehavior(agent: Agent, type: Behavior.Type) {
        const behavior = new this.#type(agent, this);
        if (behavior instanceof type) {
            return behavior;
        }

        throw new ImplementationError(
            `Cannot create behavior ${type.id} because installed implementation is incompatible`,
        );
    }

    /**
     * The source of raw data that backs managed state instances.
     */
    get datasource() {
        if (!this.#datasource) {
            this.#datasource = Datasource({
                supervisor: this.type.supervisor,
                type: this.type.State,
                events: this.events as unknown as Datasource.Events,
                defaults: this.part.behaviors.defaultsFor(this.type),
                store: this.store,
            });
        }

        return this.#datasource;
    }

    /**
     * Persist dirty values.
     */
    save(transaction: Transaction) {
        if (this.#datasource?.dirty) {
            this.#datasource.save(transaction);
        }
    }

    /**
     * The data provider for {@link datasource}.
     */
    protected abstract readonly store?: Datasource.Store;

    /**
     * Obtain internal state for a behavior instance.
     */
    getInternal() {
        if (!this.#internal) {
            this.#internal = new this.#type.InternalState();
        }

        return this.#internal;
    }

    /**
     * Access the event object.  Unlike state, the events object does not vary
     * by instance.
     */
    get events() {
        if (!this.#events) {
            this.#events = new this.#type.Events();
        }
        return this.#events;
    }
}
