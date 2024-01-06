/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { InvocationContext } from "../behavior/InvocationContext.js";
import { GeneratedClass } from "../util/GeneratedClass.js";
import { MaybePromise } from "../util/Promises.js";
import type { Part } from "./Part.js";
import type { SupportedBehaviors } from "./part/SupportedBehaviors.js";

/**
 * An Agent offers interaction with a single endpoint.  This is the operational
 * interface to endpoints.  It is separate from the {@link Part} because the
 * agent is context-aware with access to at most one fabric.
 *
 * An endpoint agent manages one or more {@link Behavior} instances that
 * implement a discrete subset of the agent's functionality.
 *
 * Each endpoint agent has an associated {@link Agent.Type} that
 * defines each {@link Behavior.Type} the endpoint supports.
 *
 * {@link Agent.Type} is a permanent feature of an endpoint but agent instances
 * themselves are transitory and there is no guarantee they will exist beyond
 * the lifecycle of a single transaction.
 */
export class Agent {
    #part: Part;
    #context: InvocationContext;
    #behaviors = {} as Record<string, Behavior>;

    constructor(part: Part, context: InvocationContext) {
        this.#part = part;
        this.#context = context;
    }

    /**
     * Access the {@link Part} this agent acts on behalf of.
     */
    get part() {
        return this.#part;
    }

    /**
     * Access the agent's {@link InvocationContext}.
     */
    get context() {
        return this.#context;
    }

    /**
     * Test to see if a {@link Behavior.Type} is supported by this agent.
     */
    has<BehaviorT extends Behavior.Type>(type: BehaviorT): this is InstanceType<BehaviorT> {
        return this.#part.behaviors.has(type);
    }

    /**
     * Obtain a {@link Behavior} supported by this agent.  Throws an error if
     * the {@link Behavior.Type} isn't supported or is still initializing.
     *
     * You may also access behaviors using normal property access, e.g.
     * `agent.descriptor` is the same as `agent.get(DescriptorBehavior)`.
     *
     * Property access is available in TypeScript when the set of behaviors
     * is defined statically.
     */
    get<T extends Behavior.Type>(type: T) {
        let behavior = this.#behaviors[type.id];
        if (!behavior) {
            behavior = this.#part.behaviors.create(type, this);
            this.#behaviors[type.id] = behavior;
        }
        return behavior as InstanceType<T>;
    }

    /**
     * Obtain a behavior supported by this agent.  Throws an error if the
     * {@link Behavior.Type} isn't supported.  Waits if the behavior is not yet
     * initialized.
     */
    waitFor<T extends Behavior.Type>(type: T): MaybePromise<InstanceType<T>> {
        const behavior = this.#behaviors[type.id];
        if (behavior) {
            return behavior as InstanceType<T>;
        }

        return this.#part.behaviors.createAsync(type, this) as MaybePromise<InstanceType<T>>;
    }

    /**
     * Trigger initialization of a supported {@link Behavior.Type}.
     * 
     * Functionally identical to {@link waitFor} but has no return value.
     */
    activate(type: Behavior.Type): void {
        this.#part.behaviors.activate(type);
    }

    /**
     * Add support for a {@link Behavior.Type}.
     */
    require<T extends Behavior.Type>(type: T, options?: Behavior.Options<T>) {
        this.#part.behaviors.require(type, options);
    }

    /**
     * Create a new {@link Agent} that supports the specified behaviors.
     */
    static for<B extends SupportedBehaviors>(name: string, behaviors: SupportedBehaviors) {
        const props = {} as PropertyDescriptorMap;
        Object.values(behaviors).forEach(behavior => {
            props[behavior.id] = {
                get(this: Agent) {
                    return this.get(behavior);
                },

                enumerable: true,
            };
        });

        return GeneratedClass({
            name: `${name}Agent`,
            base: Agent,
            instanceDescriptors: props,
        }) as Agent.Type<B>;
    }
}

export namespace Agent {
    /**
     * Static type for {@link Agent} with a property for each statically
     * defined behavior.
     *
     * Behaviors available at construction time are available as instance
     * properties.  You must use {@link Agent.get} or
     * {@link Agent.require} to acquire behaviors added via
     * {@link Agent.require}.
     */
    export interface Type<B extends SupportedBehaviors = {}> {
        new (part: Part, context: InvocationContext): Instance<B>;
    }

    export type Instance<B extends SupportedBehaviors = {}> = Agent & {
        readonly [K in keyof B & string]: InstanceType<B[K]>;
    };
}
