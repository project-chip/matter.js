/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../behavior/AccessControl.js";
import { Behavior } from "../behavior/Behavior.js";
import { BehaviorBacking } from "../behavior/BehaviorBacking.js";
import type { InvocationContext } from "../behavior/InvocationContext.js";
import { IndexBehavior } from "../behavior/definitions/index/IndexBehavior.js";
import { LifecycleBehavior } from "../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { StructuralChangeType } from "../behavior/definitions/lifecycle/StructuralChangeType.js";
import { PartsBehavior } from "../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Agent } from "./Agent.js";
import { RootEndpoint } from "./definitions/system/RootEndpoint.js";
import { Behaviors } from "./part/Behaviors.js";
import type { PartOwner } from "./part/PartOwner.js";
import { EndpointType } from "./type/EndpointType.js";

/**
 * Endpoints consist of a hierarchy of parts.  This class manages the current
 * state of a single part.
 *
 * You can interact with endpoints using an {@link Agent} created
 * with {@link Part.getAgent}.  Agents are stateless and designed for quick
 * instantiation so you can create them as needed then discard.
 * 
 * Most often direct access to {@link Agent} is transparent as Matter.js
 * acquires an agent as necessary for {@link Behavior} interactions.
 */
export class Part<T extends EndpointType = EndpointType.Empty> implements PartOwner {
    #id?: string | undefined;
    #number?: EndpointNumber;
    #type: EndpointType;
    #owner?: PartOwner;
    #agentType?: Agent.Type<T["behaviors"]>;
    #offlineAgent?: Agent.Instance<T["behaviors"]>;
    #behaviors: Behaviors;
    #parts?: PartsBehavior;
    #lifecycle?: LifecycleBehavior;

    constructor(type: T, options?: Part.Options<T>) {
        if (type === null || typeof type !== "object") {
            throw new ImplementationError(`Part type is not an object`);
        }

        this.#type = type;

        if (options?.number !== undefined) {
            this.#number = EndpointNumber(options.number);
        }

        if (options?.id !== undefined) {
            this.id = options.id;
        }

        const behaviors = type.behaviors ?? [];

        this.#behaviors = new Behaviors(this, behaviors, { ...options });

        this.#behaviors.require(LifecycleBehavior);
    }

    /**
     * Initialize the part.  Must be called after server structure is complete.
     */
    initialize() {
        if (this.#owner === undefined) {
            throw new ImplementationError("Cannot initialize uninstalled part");
        }

        this.#owner.initializePart(this);

        if (this.#id === undefined) {
            throw new ImplementationError("No part ID assigned after initialization");
        }

        if (this.number === undefined) {
            throw new ImplementationError("No part number assigned after initialization");
        }

        this.lifecycle.state.installed = true;

        for (const type of Object.values(this.behaviors.supported)) {
            if (type.immediate) {
                this.agent.load(type);
            }
        }
    }

    /**
     * A string that uniquely identifies a part.  This ID must be unique across
     * the Matter node.
     */
    get id() {
        return this.#id;
    }

    /**
     * Assign the endpoint ID.  The endpoint ID must be unique across all
     * endpoints in a node.  Once assigned the endpoint ID is permanent.
     */
    set id(id: string | undefined) {
        if (typeof id !== "string") {
            throw new ImplementationError(`Illegal endpoint ID type "${typeof id}"`);
        }
        if (id === "") {
            throw new ImplementationError("Endpoint ID may not be empty");
        }
        if (id.includes(".")) {
            throw new ImplementationError('Endpoint ID may not include "."');
        }

        this.root?.agent.get(IndexBehavior).assertIdAvailable(id, this);
        
        this.#id = id;
        this.lifecycle.events.structure$Change.emit(
            StructuralChangeType.IdAssigned,
            this
        );
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely
     * identifies the {@link Part} in the scope of the Matter node.
     */
    get number() {
        return this.#number;
    }

    /**
     * Assign the endpoint number.  The endpoint number must be unique across
     * all endpoints in a node.  Once assigned the endpoint number is
     * permanent.
     * 
     * TS requires us to allow undefined here but it is not a legal argument type.
     */
    set number(number: EndpointNumber | undefined) {
        if (typeof number !== "number") {
            throw new ImplementationError(`Illegal endpoint number type "${typeof number}"`);
        }
        if (number < 0 || number > 0xffff) {
            throw new ImplementationError(`Endpoint number ${number} is out of bounds`);
        }
        if (this.#number !== undefined && this.#number !== number) {
            throw new ImplementationError(`Illegal attempt to reassign endpoint number ${this.#number} to ${number}`);
        }

        this.root?.agent.get(IndexBehavior).assertNumberAvailable(number, this);

        this.#number = number;

        if (this.#owner !== undefined) {
            this.lifecycle.state.installed = true;
        }

        this.lifecycle.events.structure$Change.emit(
            StructuralChangeType.NumberAssigned,
            this
        );
    }

    /**
     * The type of endpoint this part implements.
     */
    get type() {
        return this.#type;
    }

    /**
     * Access the owner of the part.  The part will only have an owner if it
     * is installed in a Node.
     */
    get owner() {
        return this.#owner;
    }

    /**
     * Set the part's owner.  Once set, the owner is responsible for managing
     * the part's lifecycle.
     */
    set owner(owner: PartOwner | undefined) {
        if (owner === undefined) {
            throw new ImplementationError("Cannot set owner to undefined");
        }
        if (this.#owner !== undefined) {
            throw new ImplementationError("Cannot reparent installed part");
        }
        this.#owner = owner;

        if (this.#number !== undefined) {
            this.lifecycle.state.installed = true;
        }
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        return this.#behaviors;
    }

    /**
     * Access child parts.
     */
    get parts() {
        if (!this.#parts) {
            this.#agent.require(PartsBehavior);
            this.#parts = this.#agent.get(PartsBehavior);
        }
        return this.#parts;
    }

    /**
     * Access lifecycle information.
     */
    get lifecycle() {
        if (!this.#lifecycle) {
            this.#lifecycle = this.#agent.get(LifecycleBehavior);
        }
        return this.#lifecycle;
    }

    /**
     * Returns a human-readable name for the part.
     */
    get description() {
        let description;
        if (this.id) {
            description = ` ${this.id}`;
        }
        if (this.number) {
            if (description) {
                description = `${description} (#${this.number})`;
            } else {
                description = ` #${this.number}`;
            }
        }
        description = `Endpoint ${description ?? ""} of type ${
            this.type.name
        } (device type 0x${this.type.deviceType.toString(16)})`;

        return description;
    }

    /**
     * Access the root of the part hierarchy.
     */
    get root(): Part<RootEndpoint> | undefined {
        for (let part: PartOwner | undefined = this; part = part; part = part.owner) {
            if (part instanceof Part && part.type.deviceClass === RootEndpoint.deviceClass) {
                return part as Part<RootEndpoint>;
            }
        }
    }

    /**
     * Create an {@link Agent}.  This is the primary means of
     * interacting with an endpoint.
     *
     * If {@link InvocationContext.fabric} is not present the operation will
     * fail.
     */
    getAgent(context: InvocationContext): Agent.Instance<T["behaviors"]> {
        return new this.#resolvedAgentType(this, context);
    }

    /**
     * Access an offline {@link Agent}.  An offline agent enforces no ACLs and
     * all state is read/write.
     *
     * This should only be used for local purposes.  All network interaction
     * should use {@link getAgent} to create a context-aware agent.
     */
    get agent() {
        return this.#agent;
    }

    toString() {
        const ident = Array<string>();
        if (this.id) {
            ident.push(this.id);
        }
        if (this.number) {
            ident.push(`#${this.number}`);
        }
        if (!ident.length) {
            ident.push("anon");
        }
        return `${this.type.name}<${ident.join("; ")}>`;
    }

    get #agent() {
        if (!this.#offlineAgent) {
            this.#offlineAgent = new this.#resolvedAgentType(this, AccessControl.OfflineSession);
        }
        return this.#offlineAgent;
    }

    async destroy() {
        await this[Symbol.asyncDispose]();
    }

    async [Symbol.asyncDispose]() {
        const destroyedEvent = this.lifecycle.events.destroyed;
        await this.behaviors[Symbol.asyncDispose]();
        this.#owner = undefined;
        destroyedEvent.emit(this);
    }

    initializePart(part: Part) {
        if (!this.owner) {
            throw new ImplementationError("Cannot initialize part because parent is not installed");
        }
        this.owner.initializePart(part);
    }

    initializeBehavior(part: Part, behavior: Behavior.Type): BehaviorBacking {
        if (!this.owner) {
            throw new ImplementationError("Cannot initialize behavior because parent is not installed");
        }
        return this.owner.initializeBehavior(part, behavior);
    }

    get #resolvedAgentType() {
        if (!this.#agentType) {
            this.#agentType = Agent.for(this.type.name, this.#behaviors.supported);
        }
        return this.#agentType;
    }
}

export namespace Part {
    /**
     * Construction options for {@link Part}.
     */
    export type Options<T extends EndpointType = EndpointType.Empty> = 
        & {
            id?: string;
            number?: number;
        }
        & {
            [id in keyof T["behaviors"]]?: Behavior.Options<T["behaviors"][id]>
        }
}
