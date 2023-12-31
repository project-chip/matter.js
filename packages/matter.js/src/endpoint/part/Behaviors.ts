/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import type { ClusterBehavior } from "../../behavior/cluster/ClusterBehavior.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { Val } from "../../behavior/state/managed/Val.js";
import { ImplementationError } from "../../common/MatterError.js";
import { Observable } from "../../util/Observable.js";
import { camelize, describeList } from "../../util/String.js";
import { MaybePromise } from "../../util/Type.js";
import type { Agent } from "../Agent.js";
import type { Part } from "../Part.js";
import type { SupportedBehaviors } from "./SupportedBehaviors.js";

/**
 * This class manages {@link Behavior} instances owned by a {@link Part}.
 */
export class Behaviors {
    #part: Part;
    #supported: SupportedBehaviors;
    #backings: Record<string, BehaviorBacking> = {};
    #supportAdded = Observable<[type: Behavior.Type]>();
    #options: Record<string, object | undefined>;

    /**
     * Event emitted when support is added for a new behavior.
     */
    get supportAdded() {
        return this.#supportAdded;
    }

    constructor(part: Part, supported: SupportedBehaviors, options: Record<string, object | undefined>) {
        if (typeof supported !== "object") {
            throw new ImplementationError('Part "behaviors" option must be an array of Behavior.Type instances');
        }
        for (const id in supported) {
            if (!(supported[id].prototype instanceof Behavior)) {
                throw new ImplementationError(`Part behavior #${id} is not a Behavior.Type`);
            }
            if (typeof supported[id].id !== "string") {
                throw new ImplementationError(`Part behavior #${id} has no ID`);
            }
        }

        this.#part = part;
        this.#supported = supported;
        this.#options = options;
    }

    /**
     * List the {@link SupportedBehaviors} of the {@link Part}.
     */
    get supported() {
        return this.#supported;
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
        if (this.#supported[type.id]) {
            if (!this.has(type)) {
                throw new ImplementationError(
                    `Cannot require behavior ${type.id} because incompatible implementation already exists`,
                );
            }
        } else {
            if (!type.supports(LifecycleBehavior)) {
                if (this.#part.agent.get(LifecycleBehavior).state.online) {
                    throw new ImplementationError(`Cannot add behavior ${type.id} after part is online`);
                }
            }
            this.#supported[type.id] = type;
            this.#supportAdded.emit(type);
        }
        if (options) {
            this.#options[type.id] = options;
        }
    }

    /**
     * Create a behavior.  {@link Agent} obtains behaviors via this method.
     */
    create(type: Behavior.Type, agent: Agent) {
        const behavior = this.createWhenReady(type, agent);
        if (MaybePromise.is(behavior)) {
            throw new ImplementationError(`Cannot access behavior ${type.id} because it is still initializing`);
        }
        return behavior;
    }

    /**
     * Create a behavior, waiting for the behavior to initialize if necessary.
     *
     * This method returns a {@link Promise} only if await is necessary so the
     * behavior can be used immediately if necessary.
     */
    createWhenReady(type: Behavior.Type, agent: Agent): MaybePromise<Behavior> {
        let backing = this.#backings[type.id];

        if (!backing) {
            backing = this.#createBacking(type);
        }

        if (backing.initializing) {
            return backing.initializing.then(() => backing.createBehavior(agent, type));
        }

        return backing.createBehavior(agent, type);
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
                `${this.#part.description} is missing required clusters: ${describeList("and", ...missing)}`,
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

    #createBacking(type: Behavior.Type) {
        // Ensure the type is supported.  If it is, we instantiate with our
        // type rather than the specified type because our type might be an
        // extension
        const myType = this.#getBehaviorType(type);
        if (!myType) {
            throw new ImplementationError(`Request for unsupported behavior ${type.id}`);
        }

        // Ask the owner to create the backing.  This is specialized for the
        // owner (e.g. client or server)
        const backing = this.#part.owner.initializeBehavior(this.#part, myType);
        this.#backings[type.id] = backing;

        // Initialize backing state
        backing.initialize(this.#options[myType.id]);

        // Our shiny new backing is ready
        return backing;
    }

    #getBehaviorType(type: Behavior.Type) {
        const myType = this.#supported[type.id];

        if (myType === undefined) {
            return myType;
        }

        if (typeof myType !== "function" || !(myType.prototype instanceof Behavior)) {
            throw new ImplementationError(`Endpoint behavior ${type.id} implementation is not a Behavior`);
        }

        return myType;
    }
}
