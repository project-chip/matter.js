/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { Lifecycle } from "./Lifecycle.js";
import { Val } from "../../behavior/state/managed/Val.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { BasicSet } from "../../util/Set.js";
import { camelize, describeList } from "../../util/String.js";
import { MaybePromise } from "../../util/Promises.js";
import type { Agent } from "../Agent.js";
import type { Part } from "../Part.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { BehaviorInitializer } from "./BehaviorInitializer.js";

const logger = Logger.get("Behaviors");

/**
 * This class manages {@link Behavior} instances owned by a {@link Part}.
 */
export class Behaviors {
    #part: Part;
    #supported: SupportedBehaviors;
    #backings: Record<string, BehaviorBacking> = {};
    #options: Record<string, object | undefined>;
    #initializing?: BasicSet<BehaviorBacking>;

    /**
     * The {@link SupportedBehaviors} of the {@link Part}.
     */
    get supported() {
        return this.#supported;
    }

    /**
     * The IDs of active {@link Behavior}s. 
     */
    get active() {
        return Object.keys(this.#backings);
    }

    /**
     * The IDs of inactive {@link Behavior}s.
     */
    get inactive() {
        const inactive = new Set(Object.keys(this.#supported));
        for (const key of Object.keys(this.#backings)) {
            inactive.delete(key);
        }
        return [ ...inactive ];
    }

    constructor(part: Part, supported: SupportedBehaviors, options: Record<string, object | undefined>) {
        if (typeof supported !== "object") {
            throw new ImplementationError('Part "behaviors" option must be an array of Behavior.Type instances');
        }
        for (const id in supported) {
            if (!(supported[id].prototype instanceof Behavior)) {
                throw new ImplementationError(`Part behavior "${id}" is not a Behavior.Type`);
            }
            if (typeof supported[id].id !== "string") {
                throw new ImplementationError(`Part behavior "${id}" has no ID`);
            }
        }

        this.#part = part;
        this.#supported = supported;
        this.#options = options;
    }

    /**
     * Activate any behaviors designated for immediate activation.  Returns a
     * promise iff any behaviors have ongoing initialization.
     */
    initialize(): MaybePromise {
        for (const type of Object.values(this.supported)) {
            if (type.immediate) {
                this.#part.agent.activate(type);
            }
        }

        const initializing = this.#initializing;
        if (!initializing?.size) {
            return;
        }

        return new Promise<void>((fulfilled) => {
            const initializationListener = () => {
                if (initializing.size === 0) {
                    initializing.deleted.off(initializationListener);
                    fulfilled();
                }
            }

            initializing.deleted.on(initializationListener);
        });
    }

    /**
     * Does the {@link Part} support a specified behavior?
     */
    has<T extends Behavior.Type>(type: T) {
        const myType = this.#supported[type.id];
        return myType === type || myType?.supports(type);
    }

    /**
     * Add behavior support dynamically at runtime.  Typically called via
     * {@link Agent.require}.
     */
    require<T extends Behavior.Type>(type: T, options?: Behavior.Options<T>) {
        if (options) {
            this.#options[type.id] = options;
        }

        if (this.#supported[type.id]) {
            if (!this.has(type)) {
                throw new ImplementationError(
                    `Cannot require behavior "${type.id}" because incompatible implementation already exists`,
                );
            }
            return;
        }

        this.#supported[type.id] = type;

        this.#part.lifecycle.change(Lifecycle.Change.ServersChanged);
            
        if (type.immediate && this.#part.lifecycle.isInstalled) {
            this.#part.agent.activate(type);
        }
    }

    /**
     * Create a behavior.  {@link Agent} obtains behaviors via this method.
     */
    create(type: Behavior.Type, agent: Agent) {
        const behavior = this.createAsync(type, agent);
        if (MaybePromise.is(behavior)) {
            throw new ImplementationError(`Cannot access behavior "${type.id}" because it is still initializing`);
        }
        return behavior;
    }

    /**
     * Create a behavior, waiting for the behavior to initialize if necessary.
     *
     * This method returns a {@link Promise} only if await is necessary so the
     * behavior can be used immediately if possible.
     */
    createAsync(type: Behavior.Type, agent: Agent): MaybePromise<Behavior> {
        this.activate(type);
        let backing = this.#backings[type.id];

        if (!backing.construction.ready) {
            return backing.construction.then(() => backing.createBehavior(agent, type));
        }

        return backing.createBehavior(agent, type);
    }

    /**
     * Activate a behavior.
     */
    activate(type: Behavior.Type) {
        let backing = this.#backings[type.id];

        if (!backing) {
            backing = this.#createBacking(type);
        }
    }

    /**
     * Determine if a specified behavior is supported and active.
     */
    isActive(type: Behavior.Type) {
        const backing = this.#backings[type.id];
        return !!backing && backing.type.supports(type);
    }

    /**
     * Destroy all behaviors that are initialized (have backings present).
     */
    async [Symbol.asyncDispose]() {
        for (const id in this.#backings) {
            const behavior = (this.#part.agent as unknown as Record<string, Behavior>)[id];
            await behavior?.destroy();
        }
        this.#backings = {};
    }

    /**
     * Ensure a set of behavior requirements are met.  Throws an error
     * detailing missing requirements.
     */
    validateRequirements(requirements?: SupportedBehaviors) {
        if (!requirements) {
            return;
        }

        const missing = Array<string>();
        for (const requirement of Object.values(requirements)) {
            let name = camelize(requirement.name, true);

            const cluster = (requirement as ClusterBehavior.Type).cluster;
            if (cluster) {
                name = `${name} (0x${cluster.id.toString(16)})`;
            }

            if (!this.#part.behaviors.has(requirement)) {
                missing.push(name);
            }
        }

        if (missing.length) {
            throw new ImplementationError(
                `Part ${this.#part.description} is missing required behaviors: ${describeList("and", ...missing)}`,
            );
        }
    }

    /**
     * Obtain default values for a behavior.
     */
    defaultsFor(type: Behavior.Type) {
        const options = this.#options[type.id];
        let defaults: Val.Struct | undefined;
        if (options) {
            for (const key in type.defaults) {
                if (key in options) {
                    if (!defaults) {
                        defaults = {};
                    }
                    defaults[key] = (options as Val.Struct)[key];
                }
            }
        }
        return defaults;
    }

    /**
     * If there are dirty values, join a transaction to save them.
     */
    save(transaction: Transaction) {
        for (const index in this.#backings) {
            this.#backings[index].save(transaction);
        }
    }

    #createBacking(type: Behavior.Type) {
        // Ensure the type is supported.  If it is, we instantiate with our
        // type rather than the specified type because our type might be an
        // extension
        const myType = this.#getBehaviorType(type);
        if (!myType) {
            throw new ImplementationError(`Request for unsupported behavior "${type.id}"`);
        }

        // Ask the owner to create the backing.  This is specialized for the
        // owner (e.g. client or server)
        if (!this.#part.owner) {
            throw new ImplementationError(`Attempted initialization of behavior "${type.id}" of uninstalled part`);
        }
        const backing = this.#part.serviceFor(BehaviorInitializer).createBacking(this.#part, myType);
        this.#backings[type.id] = backing;
        backing.initialize();

        // Initialize backing state
        if (!backing.construction.ready) {
            if (!this.#initializing) {
                this.#initializing = new BasicSet;
            }
            this.#initializing.add(backing);

            backing.construction
                .catch(e => {
                    logger.error(`Error initializing part ${this.#part.description} behavior "${myType.id}"`, e);
                    throw e;
                })
                .finally(() => {
                    this.#initializing?.delete(backing);
                });
        }

        // Our shiny new backing is ready
        return backing;
    }

    #getBehaviorType(type: Behavior.Type) {
        const myType = this.#supported[type.id];

        if (myType === undefined) {
            return myType;
        }

        if (typeof myType !== "function" || !(myType.prototype instanceof Behavior)) {
            throw new ImplementationError(`Endpoint behavior "${type.id}" implementation is not a Behavior`);
        }

        return myType;
    }
}
