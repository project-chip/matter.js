/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LifecycleStatus } from "../common/Lifecycle.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
import type { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { EventEmitter } from "../util/Observable.js";
import { MaybePromise } from "../util/Promises.js";
import { camelize } from "../util/String.js";
import type { Behavior } from "./Behavior.js";
import { SchemaViolationError } from "./errors.js";
import { Datasource } from "./state/managed/Datasource.js";
import { Transaction } from "./state/transaction/Transaction.js";

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
     * Called by Behaviors once the backing is installed.
     */
    initialize() {
        this.#initialize();
    }

    /**
     * Reset state to uninstalled (and thus uninitialized).
     * 
     * @param nonvolatile resets nonvolatile state as well
     */
    reset() {
        this.#initialize(async () => {
            // Allow application logic to clean up
            await this.#invokeDestroy();

            // Revert to uninstalled state
            this.construction.setStatus(LifecycleStatus.Inactive);

            // Reset state
            await this.resetState();
        });
    }

    /**
     * Perform final teardown.  We might invoke {@link Behavior.destroy} multiple times but this method is final.
     */
    async [Symbol.asyncDispose]() {
        await this.#invokeDestroy();
        this.#internal = this.#events = this.#options = this.#datasource = undefined;
        this.construction.setStatus(LifecycleStatus.Destroyed);
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
    protected async resetState() {}

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
            this.#datasource = Datasource({
                name: `${this.part}.${this.type.id}.state`,
                supervisor: this.type.supervisor,
                type: this.type.State,
                events: this.events as unknown as Datasource.Events,
                defaults: this.part.behaviors.defaultsFor(this.type),
                store: this.store,
                versioning: this.type.versioning,
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
     * Inject behavior location into an error.
     */
    injectErrorSource(cause: any) {
        if (cause instanceof SchemaViolationError) {
            const match = cause.message.match(/(\w+) ([\w\.\$]+): (.*?)(\(\d+\))?^/);
            if (!match) {
                return cause;
            }

            const where = match[2].split(".").map(n => camelize(n));
            where[0] = this.toString();

            cause.message = Diagnostic.upgrade(
                cause.message,
                () => Diagnostic.squash(
                    match[1],
                    " ",
                    Diagnostic.strong(where.join(".")),
                    ": ",
                    match[3],
                    match[4] ? Diagnostic.weak(match[4]) : "",
                )
            )
        }
        return cause;
    }

    /**
     * Internal initialization logic.  Broken out from {@link initialize} for the convenience of moving
     * de-initialization logic into {@link AsyncConstruction} during factory reset.
     * 
     * @param before used for factory reset to revert the backing's state
     */
    #initialize(before?: () => MaybePromise<void>) {
        const init = () => {
            // We use this behavior for initialization.  Do not use agent.get() to access the behavior because it
            // will throw if the behavior isn't initialized
            const behavior = this.createBehavior(this.part.agent, this.#type);

            // Perform actual initialization
            return this.invokeInitializer(behavior, this.#options);
        };

        MaybePromise.then(
            () => this.construction.start(() => {
                if (before) {
                    return MaybePromise.then(before, init);
                }
                return init();
            }),
            undefined,
            e => {
                logger.error(this.injectErrorSource(e));
            }
        );
    }

    /**
     * Invoke {@link Behavior.destroy} to clean up application logic.
     */
    async #invokeDestroy() {
        switch (this.#construction.status) {
            case LifecycleStatus.Active:
                break;

            case LifecycleStatus.Initializing:
                // If the behavior is still initializing it's probably stuck.  So may want to take this out and take our
                // chances, but will leave in for now as the correct behavior is definitely not to destroy while still
                // initializing
                await this.#construction;
                break;

            case LifecycleStatus.Destroyed:
                // Destroyed state is permanent; we can't recover
                throw new InternalError(`Behavior ${this} already destroyed`);

            default:
                // A little sketchy if incapacitated (previous initialization error) but we'll take our chances
                return;
        }

        try {
            const behavior = (this.#part.agent as unknown as Record<string, Behavior>)[this.type.id];
            await behavior?.[Symbol.asyncDispose]();
        } catch (e) {
            logger.error(`Destroying ${this}:`, this.injectErrorSource(e));
        }
    }
}
