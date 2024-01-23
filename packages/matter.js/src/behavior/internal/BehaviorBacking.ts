/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleStatus } from "../../common/Lifecycle.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import type { Agent } from "../../endpoint/Agent.js";
import type { Part } from "../../endpoint/Part.js";
import { Logger } from "../../log/Logger.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { EventEmitter, Observable } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import type { Behavior } from "../Behavior.js";
import { Reactor } from "../Reactor.js";
import { ActionContext } from "../context/ActionContext.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Reactors } from "./Reactors.js";

const logger = Logger.get("BehaviorBacking");

/**
 * The "backing" for a behavior manages those portions of behavior that endure for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #part: Part;
    #type: Behavior.Type;
    #internal?: object;
    #events?: EventEmitter;
    #options?: Behavior.Options;
    #datasource?: Datasource;
    #reactors?: Reactors;
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

    toString() {
        return `${this.part}.${this.type.id}`;
    }

    /**
     * Initialize state by applying values from options and invoking the behavior's initialize() function.
     *
     * Called by Behaviors class once the backing is installed.
     */
    initialize(agent: Agent) {
        return MaybePromise.then(
            () => this.construction.start(() => {
                // We use this behavior for initialization.  Do not use agent.get() to access the behavior because it
                // will throw if the behavior isn't initialized
                const behavior = this.createBehavior(agent, this.#type);

                // Perform actual initialization
                return this.invokeInitializer(behavior, this.#options);
            }),
            undefined,
            e => logger.error(e),
        );
    }

    /**
     * Perform final teardown.  We might invoke {@link Behavior.destroy} multiple times but this method is final.
     */
    destroy(agent: Agent) {
        return MaybePromise.then(
            () => this.#invokeDestroy(agent),
            () => {
                this.#internal = this.#events = this.#options = this.#datasource = undefined;
                this.construction.setStatus(LifecycleStatus.Destroyed);
            }
        )
    }

    /**
     * Set state from options and invoke {@link Behavior.initialize}.
     *
     * This is an optional extension point for derivatives.  Errors thrown here are recorded and place the behavior into
     * incapacitated state.
     */
    protected invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return behavior.initialize(options);
    }

    /**
     * Reset state during a reset.
     * 
     * This is an optional extension point for derivatives.
     */
    factoryReset(_context: ActionContext): MaybePromise {}

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
     * Derivatives may override to perform additional setup beyond simple instantiation.
     */
    createBehavior(agent: Agent, type: Behavior.Type) {
        const behavior = new this.#type(agent, this);
        if (behavior instanceof type) {
            return behavior;
        }

        throw new ImplementationError(
            `Cannot create ${this.#part}.${type.id} because installed implementation is incompatible`,
        );
    }

    /**
     * The source of raw data that backs managed state instances.
     */
    get datasource() {
        if (!this.#datasource) {
            this.#datasource = Datasource(this.datasourceOptions);
        }

        return this.#datasource;
    }

    protected get datasourceOptions() {
        return {
            name: `${this.part}.${this.type.id}.state`,
            supervisor: this.type.supervisor,
            type: this.type.State,
            events: this.events as unknown as Datasource.Events,
            defaults: this.part.behaviors.defaultsFor(this.type),
            store: this.store,
            versioning: this.type.versioning,
        };
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
            this.#internal = new this.#type.Internal();
        }

        return this.#internal;
    }

    /**
     * Access the event object.  Unlike state, the events object does not vary by instance.
     */
    get events() {
        if (!this.#events) {
            this.#events = new this.#type.Events();
        }
        return this.#events;
    }

    /**
     * The status of the behavior.
     */
    get status() {
        return this.construction.status;
    }

    /**
     * A read-only offline view of behavior state.
     */
    get stateView() {
        return this.#datasource?.view ?? {};
    }

    /**
     * Install a reactor.
     */
    reactTo<O extends Observable<any[], any>>(
        observable: O,
        reactor: Reactor<Parameters<O["emit"]>, ReturnType<O["emit"]>>,
        options?: Reactor.Options,
    ) {
        if (!this.#reactors) {
            this.#reactors = new Reactors(this);
        }
        this.#reactors.add(observable, reactor, options);
    }

    /**
     * Invoke {@link Behavior.destroy} to clean up application logic.
     */
    #invokeDestroy(agent: Agent): MaybePromise {
        switch (this.#construction.status) {
            case LifecycleStatus.Active:
                break;

            case LifecycleStatus.Initializing:
                // If the behavior is still initializing its probably stuck.  Throwing isn't a solution but probably
                // better than destroying while still initializing
                throw new InternalError(`Behavior ${this} destroyed while still initializing`);

            case LifecycleStatus.Destroyed:
                // Destroyed state is permanent; we can't recover
                throw new InternalError(`Behavior ${this} already destroyed`);

            default:
                // A little sketchy if incapacitated (previous initialization error) but we'll take our chances
                return;
        }

        const behavior = (agent as unknown as Record<string, Behavior>)[this.type.id];

        let result = MaybePromise.then(
            () => {
                this.#reactors?.[Symbol.asyncDispose]();
            },
            () => {
                this.#reactors = undefined;
            }
        );

        result = MaybePromise.then(
            result,
            () => behavior?.[Symbol.asyncDispose](),
            e => logger.error(`Destroying ${this}:`, e),
        )

        return result;
    }
}
