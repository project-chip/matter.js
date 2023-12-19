/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, InternalError } from "../common/MatterError.js";
import { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { EventEmitter } from "../util/Observable.js";
import type { Behavior } from "./Behavior.js";
import type { InvocationContext } from "./InvocationContext.js";
import { Val } from "./state/managed/Val.js";

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
     * Promise that resolves when the behavior is finished initializing, or
     * undefined if initialization is complete.
     */
    get initializing() {
        return this.#initializing;
    }

    /**
     * Set or clear the initialization promise.
     */
    set initializing(promise: Promise<void> | undefined) {
        if (this.#initializing) {
            throw new InternalError("Conflicting initialization promises must be resolved");
        }
        this.#initializing = promise;
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
