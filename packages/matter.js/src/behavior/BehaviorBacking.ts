/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";
import { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { EventEmitter } from "../util/Observable.js";
import { MaybePromise } from "../util/Type.js";
import type { Behavior } from "./Behavior.js";
import type { InvocationContext } from "./InvocationContext.js";
import { LifecycleBehavior } from "./definitions/lifecycle/LifecycleBehavior.js";
import { Val } from "./state/managed/Val.js";
import { Transaction } from "./state/transaction/Transaction.js";

/**
 * The "backing" for a behavior manages those portions of behavior that endure
 * for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #part: Part;
    #type: Behavior.Type;
    #initializing?: Promise<void>;
    #internal?: object;
    #events?: EventEmitter;

    constructor(part: Part, type: Behavior.Type) {
        this.#part = part;
        this.#type = type;
    }

    /**
     * Initialize state by applying values from options and invoking the
     * behavior's initialize() function.
     * 
     * Initialization may be asynchronous but this function is synchronous.
     * If initialization is ongoing the backing's {@link initializing} promise
     * is set.
     */
    initialize(options?: Behavior.Options): MaybePromise {
        // We initialize in a transaction so behaviors can update persistent
        // state values during initialization
        const transaction = new Transaction();

        // The default agent for initialization is non-transactional to keep
        // things as synchronous as possible.  This means initializers that
        // write non-volatile values need to create a transactional agent
        // themselves
        const agent = this.part.agent;

        // We use this behavior for initialization
        const behavior = agent.get(this.type);

        // Perform actual initialization
        let promise;
        try {
            promise = this.invokeInitializer(behavior, transaction, options);
        } catch (e) {
            // We don't commit here because initialization may be async.
            // However if there's a synchronous error we do want to perform
            // rollback if in a write transaction
            if (transaction.status === Transaction.Status.Exclusive) {
                // Rollback is asynchronous so return the promise that will
                // register as initializing just so we track the promise
                promise = transaction.rollback().then(() => { throw e });
            } else {
                throw e;
            }
        }

        // For async initialization set the initializing promise and register
        // with the part's lifecycle behavior
        if (promise) {
            const lifecycle = this.#part.agent.get(LifecycleBehavior);
            lifecycle.state.initializingBehaviors.add(behavior);
            this.#initializing = promise
                .catch(e => {
                    e.message = `Error initializing ${this.#type.name}: ${e.message}`;
                    throw e;
                })
                .finally(() => {
                    lifecycle.state.initializingBehaviors.delete(behavior);
                    this.#initializing = undefined;
                });
        }
    }

    /**
     * Set state from options and invoke {@link Behavior.initialize}.
     */
    protected invokeInitializer(behavior: Behavior, transaction: Transaction, options?: Behavior.Options) {
        // Invoke initialize().  If the backing is already in initializing
        // state we defer initialization until the backing is initialized;
        // otherwise we trigger immediately
        let promise: MaybePromise = this.#initializing;
        if (promise) {
            promise = promise.then(() => behavior.initialize(options));
        } else {
            promise = behavior.initialize(options);
        }

        // Handle commit and rollback
        if (promise) {
            // Chain commit/rollback to the promise
            promise
                .then(() => {
                    if (transaction.status === Transaction.Status.Exclusive) {
                        return transaction.commit();
                    }
                })
                .catch(e => {
                    if (transaction.status === Transaction.Status.Exclusive) {
                        return transaction.rollback().then(() => {
                            throw e
                        });
                    }
                });
        } else if (transaction.status === Transaction.Status.Exclusive) {
            // Commit is always async but we start it synchronously
            promise = transaction.commit();
        }

        return promise;
    }

    /**
     * A promise that resolves when the behavior is finished initializing, or
     * undefined if initialization is complete.
     */
    get initializing() {
        return this.#initializing;
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
     * Obtain state for a behavior instance.
     */
    abstract referenceState(context: InvocationContext): Val.Struct;

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
