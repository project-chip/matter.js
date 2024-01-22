/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/internal/BehaviorBacking.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { PartLifecycle } from "./PartLifecycle.js";
import { Val } from "../../behavior/state/managed/Val.js";
import { ImplementationError, ReadOnlyError } from "../../common/MatterError.js";
import { BasicSet } from "../../util/Set.js";
import { camelize, describeList } from "../../util/String.js";
import { MaybePromise } from "../../util/Promises.js";
import type { Agent } from "../Agent.js";
import type { Part } from "../Part.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";
import { PartInitializer } from "./PartInitializer.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { LifecycleStatus } from "../../common/Lifecycle.js";
import { DescriptorServer } from "../../behavior/definitions/descriptor/DescriptorServer.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";

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

    get status() {
        const status = {} as Record<string, LifecycleStatus>;
        for (const key in this.#supported) {
            status[key] = this.#backings[key]?.status ?? LifecycleStatus.Inactive;
        }
        return status;
    }

    get [Diagnostic.value]() {
        return Diagnostic.lifecycleList(this.status);
    }

    constructor(part: Part, supported: SupportedBehaviors, options: Record<string, object | undefined>) {
        if (typeof supported !== "object") {
            throw new ImplementationError('Part "behaviors" option must be an array of Behavior.Type instances');
        }

        this.#part = part;
        this.#supported = supported;
        this.#options = options;

        for (const id in supported) {
            const type = supported[id];
            if (!(type.prototype instanceof Behavior)) {
                throw new ImplementationError(`${part}.${id}" is not a Behavior.Type`);
            }
            if (typeof type.id !== "string") {
                throw new ImplementationError(`${part}.${id} has no ID`);
            }
            this.#augmentPartState(type);
        }

        // DescriptorBehavior is mandatory for all parts
        if (!this.#supported.descriptor) {
            this.#supported.descriptor = DescriptorServer;
        }
    }

    /**
     * Obtain the initial state for a particular behavior if supported.  This is state values as present when the
     * behavior is first initialized for a new part.
     */
    initialStateFor<const T extends Behavior.Type>(type: T) {
        if (this.#supported[type.id]?.supports(type)) {
            return {
                ...type.defaults,
                ...this.#options[type.id],
            } as Behavior.StateOf<T>;
        }
    }

    /**
     * Activate any behaviors designated for immediate activation.  Returns a promise iff any behaviors have ongoing
     * initialization.
     */
    initialize(agent: Agent): MaybePromise {
        for (const type of Object.values(this.supported)) {
            const backing = this.#backings[type.id];

            // If we already have a backing, our part has reset and we need to reset the backing
            if (backing) {
                backing.reset(agent);
                continue;
            }

            // If we don't yet have a backing but the behavior requires immediate activation, activate now
            if (type.immediate) {
                this.activate(type, agent);
            }
        }

        // If all behaviors are initialized then we complete synchronously
        const initializing = this.#initializing;
        if (!initializing?.size) {
            return;
        }

        // Return a promise that fulfills once all behaviors complete initialization
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
                    `Cannot require ${this.#part}.${type.id} because incompatible implementation already exists`,
                );
            }
            return;
        }

        this.#supported[type.id] = type;

        this.#part.lifecycle.change(PartLifecycle.Change.ServersChanged);

        if (type.immediate && this.#part.lifecycle.isInstalled) {
            this.#part.offline(agent => {
                this.activate(type, agent);
            })
        }
    }

    /**
     * Create a behavior synchronously.  Fails if the behavior is not fully
     * initialized.
     */
    createSync(type: Behavior.Type, agent: Agent) {
        const behavior = this.createMaybeAsync(type, agent);
        if (MaybePromise.is(behavior)) {
            throw new ImplementationError(
                `Synchronous access to ${this.#part}.${type.id} is impossible because it is still initializing`
            );
        }
        return behavior;
    }

    /**
     * Create a behavior asynchronously.  Waits for the behavior to complete initialization.
     */
    async createAsync(type: Behavior.Type, agent: Agent) {
        return MaybePromise.then(
            () => this.createMaybeAsync(type, agent),
            undefined,
            e => {
                // We log the actual error produced by the backing.  Here we want the error to present as incapacitated
                // access with a proper stack trace
                const backing = this.#backings[type.id];
                if (!backing) {
                    throw e;
                }
                backing.construction.assert(backing.toString());
            }
        )
    }

    /**
     * Create a behavior, possibly asynchronously.
     *
     * This method returns a {@link Promise} only if await is necessary so the behavior can be used immediately if
     * possible.
     */
    createMaybeAsync(type: Behavior.Type, agent: Agent): MaybePromise<Behavior> {
        this.activate(type, agent);
        let backing = this.#backings[type.id];

        if (!backing.construction.ready) {
            return backing.construction
                .then(() => backing.createBehavior(agent, type))
                .catch(() => {
                    // The backing logs the actual error so here the error should just throw "unavailable due to
                    // initialization error"
                    backing.construction.assert(backing.toString());

                    // Shouldn't get here but catch result type needs to be a behavior
                    return backing.createBehavior(agent, type);
                });
        }
        
        backing.construction.assert(backing.toString());

        return backing.createBehavior(agent, type);
    }

    /**
     * Activate a behavior.
     *
     * Semantically identical to createAsync() but does not return a {@link Promise} or throw an error.
     *
     * Behaviors that fail initialization will be marked as incapacitated in {@link status}.
     */
    activate(type: Behavior.Type, agent: Agent) {
        let backing = this.#backings[type.id];

        if (!backing) {
            backing = this.#createBacking(type, agent);
        }
        
        return backing.construction;
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
        this.#part.offline(async agent => {
            for (const id in this.#backings) {
                await this.#backings[id].destroy(agent);
            }

            this.#backings = {};

            // Commit any state changes that occurred during destructino
            const transaction = agent.context.transaction;
            if (transaction.status !== Transaction.Status.Exclusive) {
                await transaction.commit();
            }
        });
    }

    /**
     * Ensure a set of behavior requirements are met.  Throws an error detailing missing requirements.
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
                `${this.#part} is missing required behaviors: ${describeList("and", ...missing)}`,
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

    #createBacking(type: Behavior.Type, agent: Agent) {
        // Ensure the type is supported.  If it is, we instantiate with our type rather than the specified type because
        // our type might be an extension
        const myType = this.#getBehaviorType(type);
        if (!myType) {
            throw new ImplementationError(`Request for unsupported behavior ${this.#part}${type.id}}`);
        }

        // Ask the owner to create the backing.  This is specialized for the owner (e.g. client or server)
        if (!this.#part.owner) {
            throw new ImplementationError(`Attempted initialization of ${this.#part}${type.id} of uninstalled part`);
        }

        const backing = this.#part.serviceFor(PartInitializer).createBacking(this.#part, myType);
        this.#backings[type.id] = backing;

        this.#initializeBacking(backing, agent);

        return backing;
    }

    #initializeBacking(backing: BehaviorBacking, agent: Agent) {
        backing.initialize(agent);

        // Initialize backing state
        if (!backing.construction.ready) {
            if (!this.#initializing) {
                this.#initializing = new BasicSet;
            }
            this.#initializing.add(backing);

            backing.construction
                .finally(() => {
                    this.#initializing?.delete(backing);
                });
        }

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

    #augmentPartState(type: Behavior.Type) {
        Object.defineProperty(this.#part.state, type.id, {
            get: () => {
                this.#backings[type.id]?.stateView ?? {};
            },

            set() {
                throw new ReadOnlyError();
            },

            enumerable: true,
        })
    }
}
