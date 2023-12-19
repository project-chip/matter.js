/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../behavior/AccessControl.js";
import { Behavior } from "../behavior/Behavior.js";
import { BehaviorBacking } from "../behavior/BehaviorBacking.js";
import type { InvocationContext } from "../behavior/InvocationContext.js";
import { BasicInformationBehavior } from "../behavior/definitions/basic-information/BasicInformationBehavior.js";
import { BridgedDeviceBasicInformationBehavior } from "../behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationBehavior.js";
import { LifecycleBehavior } from "../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { PartsBehavior } from "../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Agent } from "./Agent.js";
import { Behaviors } from "./part/Behaviors.js";
import type { PartOwner } from "./part/PartOwner.js";
import { EndpointType } from "./type/EndpointType.js";

/**
 * Endpoints consist of a root part and one or more child parts.  This class
 * manages the current state of a single part.
 *
 * You can interact with endpoints using an {@link Agent} created
 * with {@link Part.getAgent}.  Agents are stateless and designed for quick
 * instantiation so you can create them as needed then discard.
 */
export class Part<T extends EndpointType = EndpointType.Empty> implements PartOwner {
    #id?: EndpointNumber;
    #key?: string | undefined;
    #type: EndpointType;
    #owner?: PartOwner;
    #agentType?: Agent.Type<T["behaviors"]>;
    #offlineAgent?: Agent.Instance<T["behaviors"]>;
    #behaviors: Behaviors;

    constructor(type: T, options?: Part.Options) {
        if (type === null || typeof type !== "object") {
            throw new ImplementationError(`Part type is not an object`);
        }

        this.#type = type;

        if (options?.id !== undefined) {
            this.id = EndpointNumber(options.id);
        }

        if (options?.key !== undefined) {
            // Any other limitations?
            if (typeof options.key !== "string" || !options.key.length) {
                throw new ImplementationError(`Illegal part identifier ${options.key}`);
            }
            this.#key = options.key;
        }

        const behaviors = type.behaviors ?? [];

        this.#behaviors = new Behaviors(this, behaviors);

        this.#behaviors.require(LifecycleBehavior);
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely
     * identifies the {@link Part} in the scope of the Matter node.
     */
    get id() {
        return this.#id;
    }

    /**
     * A string that uniquely identifies a part.  This is an alternative ID
     * that is unique across the Matter node.
     */
    get key() {
        return this.#key;
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
        if (this.#owner === undefined) {
            throw new ImplementationError("Cannot access owner of uninstalled part");
        }
        return this.#owner;
    }

    /**
     * Set the part's owner.  Once set, the owner is responsible for managing
     * the part's lifecycle.
     */
    set owner(owner: PartOwner) {
        if (this.#owner !== undefined) {
            throw new ImplementationError(`Cannot reparent installed part`);
        }
        this.#owner = owner;

        if (this.#id !== undefined) {
            this.agent.get(LifecycleBehavior).state.installed = true;
        }
    }

    /**
     * Set endpoint ID.  TS requires us to allow undefined here but it is not
     * a legal argument type.
     */
    set id(value: EndpointNumber | undefined) {
        if (typeof value !== "number") {
            throw new ImplementationError(`Illegal endpoint ID type "${typeof value}"`);
        }
        if (value < 1 || value > 65535) {
            throw new ImplementationError(`Endpoint ID ${value} is out of bounds`);
        }
        if (this.#id !== undefined && this.#id !== value) {
            throw new ImplementationError(`Illegal attempt to reassign endpoint ${this.#id} ID to ${value}`);
        }
        this.#id = value;

        if (this.#owner !== undefined) {
            this.agent.get(LifecycleBehavior).state.installed = true;
        }
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        return this.#behaviors;
    }

    /**
     * Returns a human-readable name for the part.
     */
    get description() {
        let description;
        if (this.key) {
            description = ` ${this.key}`;
        }
        if (this.id) {
            if (description) {
                description = `${description} (#${this.id})`;
            } else {
                description = ` #${this.id}`;
            }
        }
        description = `Endpoint ${description ?? ""} of type ${
            this.type.name
        } (device type 0x${this.type.deviceType.toString(16)})`;

        return description;
    }

    toString() {
        const ident = Array<string>();
        if (this.key) {
            ident.push(this.key);
        }
        if (this.id) {
            ident.push(`#${this.id}`);
        }
        if (!ident.length) {
            ident.push("anon");
        }
        return `${this.type.name}<${ident.join("; ")}>`;
    }

    /**
     * Obtain the key used to identify this part across invocations.
     *
     * @returns the key, or undefined if the key is unavailable
     */
    get uniqueId() {
        if (this.key) {
            return `custom-${this.key}`;
        }

        const agent = this.agent;
        let basicInfo:
            | InstanceType<typeof BasicInformationBehavior.State>
            | InstanceType<typeof BridgedDeviceBasicInformationBehavior.State>;
        if (agent.has(BasicInformationBehavior)) {
            basicInfo = agent.get(BasicInformationBehavior).state;
        } else if (agent.has(BridgedDeviceBasicInformationBehavior)) {
            basicInfo = agent.get(BridgedDeviceBasicInformationBehavior).state;
        } else {
            return;
        }

        const uniqueId = basicInfo.uniqueId;
        if (uniqueId) {
            return `unique-${uniqueId}`;
        }

        const serialNumber = basicInfo.serialNumber;
        if (serialNumber) {
            return `serial-${serialNumber}`;
        }

        const owner = this.owner;
        if (owner) {
            const index = this.#owner?.indexOf(this);
            return `index-${index}`;
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
        if (!context.associatedFabric) {
            throw new ImplementationError(`Cannot obtain agent for part ${this} without associated fabric`);
        }
        return new this.agentType(this, context);
    }

    /**
     * Access an offline {@link Agent}.  An offline agent enforces no ACLs and
     * all state is read/write..
     *
     * This should only be used for local purposes.  All network interaction
     * should use {@link getAgent} to create a context-aware agent.
     */
    get agent() {
        if (!this.#offlineAgent) {
            this.#offlineAgent = new this.agentType(this, AccessControl.OfflineSession);
        }
        return this.#offlineAgent;
    }

    async destroy() {
        await this[Symbol.asyncDispose]();
    }

    async [Symbol.asyncDispose]() {
        const destroyedEvent = this.agent.get(LifecycleBehavior).events.destroyed;
        await this.behaviors[Symbol.asyncDispose]();
        destroyedEvent.emit(this);
    }

    getAncestor<T>(type: new (...arg: any[]) => T): T {
        if (this instanceof type) {
            return this;
        }
        return this.owner.getAncestor(type);
    }

    indexOf(part: Part) {
        let index = 0;
        for (const child of this.agent.get(PartsBehavior)) {
            if (child === part) {
                return index;
            }
            index++;
        }
    }

    createBacking(part: Part, behavior: Behavior.Type): BehaviorBacking {
        return this.owner.createBacking(part, behavior);
    }

    private get agentType() {
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
    export interface Options {
        key?: string;
        id?: number;
    }
}
