/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CrashedDependencyError, Lifecycle } from "../../common/Lifecycle.js";
import { ImplementationError } from "../../common/MatterError.js";
import { type Agent } from "../../endpoint/Agent.js";
import type { Endpoint } from "../../endpoint/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import { AsyncConstruction } from "../../util/AsyncConstruction.js";
import { EventEmitter, Observable } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import type { Behavior } from "../Behavior.js";
import { Reactor } from "../Reactor.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Reactors } from "./Reactors.js";

const logger = Logger.get("BehaviorBacking");

/**
 * The "backing" for a behavior manages those portions of behavior that endure for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #endpoint: Endpoint;
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

    constructor(endpoint: Endpoint, type: Behavior.Type, options?: Behavior.Options) {
        this.#endpoint = endpoint;
        this.#type = type;
        this.#options = options;

        this.#construction = AsyncConstruction(this);
    }

    toString() {
        return this.path.toString();
    }

    get path() {
        return this.#endpoint.path.at(this.type.id);
    }

    /**
     * Initialize state by applying values from options and invoking the behavior's initialize() function.
     *
     * Called by Behaviors class once the backing is installed.
     */
    initialize(agent: Agent) {
        this.construction.start(() => {
            // We use this behavior for initialization.  Do not use agent.get() to access the behavior because it
            // will throw if the behavior isn't initialized
            const behavior = this.#lifecycleInstance(agent);

            // Perform actual initialization
            return this.invokeInitializer(behavior, this.#options);
        });

        this.construction.onError(e => {
            // This is the only error we should see here...
            if (!(e instanceof CrashedDependencyError)) {
                // ...but if not, log
                logger.error("Unhandled error initializing behavior", e);
            }
        });
    }

    /**
     * Destroy the backing.
     */
    close(agent: Agent, invokeClose = true) {
        const initialized = this.construction.status === Lifecycle.Status.Active;
        if (!initialized) {
            invokeClose = false;
        }

        return this.construction.close(() => {
            let result = MaybePromise.then(
                () => this.#reactors?.close(),
                () => {
                    this.#reactors = undefined;
                },
            );

            if (invokeClose) {
                result = MaybePromise.then(result, () => this.#invokeClose(agent));
            }

            return result;
        });
    }

    /**
     * Set state from options and invoke {@link Behavior.initialize}.
     *
     * This is an optional extension point for derivatives.  Errors thrown here are recorded and place the behavior into
     * crashed state.
     */
    protected invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return behavior.initialize(options);
    }

    /**
     * The {@link Endpoint} that owns the behavior.
     */
    get endpoint() {
        return this.#endpoint;
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
            `Cannot create ${this.#endpoint}.${type.id} because installed implementation is incompatible`,
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

    protected get datasourceOptions(): Datasource.Options {
        return {
            path: this.#endpoint.path.at(this.#type.id).at("state"),
            supervisor: this.type.supervisor,
            type: this.type.State,
            events: this.events as unknown as Datasource.Events,
            defaults: this.#endpoint.behaviors.defaultsFor(this.type),
            store: this.store,
            owner: this.#endpoint,
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
    #invokeClose(agent: Agent): MaybePromise {
        // Do not use Agent.get because backing is in "destroying" state
        const behavior = this.#lifecycleInstance(agent);

        return MaybePromise.then(
            () => behavior?.[Symbol.asyncDispose](),
            undefined,
            e => logger.error(`Destroying ${this}:`, e),
        );
    }

    /**
     * Obtain a behavior instance for lifecycle methods (initialize and close).
     *
     * Under these circumstances we can't use {@link Agent.get} because it will throw if the endpoint is initializing
     * or closing.
     *
     * Instead we use a "friend" method of agent to retrieve any existing behavior or create a new one.
     */
    #lifecycleInstance(agent: Agent) {
        if (agent.isLoaded(this.#type)) {
            return agent.get(this.#type);
        }
        const behavior = this.createBehavior(agent, this.#type);
        return behavior;
    }
}
