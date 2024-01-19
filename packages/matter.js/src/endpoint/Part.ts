/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl } from "../behavior/AccessControl.js";
import { Behavior } from "../behavior/Behavior.js";
import type { ActionContext } from "../behavior/ActionContext.js";
import { UninitializedDependencyError } from "../common/Lifecycle.js";
import { ImplementationError, InternalError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { IdentityService } from "../node/server/IdentityService.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { MaybePromise } from "../util/Promises.js";
import { Agent } from "./Agent.js";
import { RootEndpoint } from "./definitions/system/RootEndpoint.js";
import { PartInitializer } from "./part/PartInitializer.js";
import { Behaviors } from "./part/Behaviors.js";
import { PartLifecycle } from "./part/PartLifecycle.js";
import type { PartOwner } from "./part/PartOwner.js";
import { Parts } from "./part/Parts.js";
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
    #type: EndpointType;
    #id?: string;
    #number?: EndpointNumber;
    #owner?: PartOwner;
    #agentType?: Agent.Type<T["behaviors"]>;
    #offlineAgent?: Agent.Instance<T["behaviors"]>;
    #behaviors?: Behaviors;
    #lifecycle: PartLifecycle;
    #parts?: Parts;
    #construction: AsyncConstruction<Part<T>>;

    /**
     * A string that uniquely identifies a Part.
     * 
     * This ID must be unique amongst all Parts with the same owner.
     */
    get id() {
        if (this.#id === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "part ID is not yet assigned; set ID or await part.construction to avoid this error"
            );
        }
        return this.#id;
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely
     * identifies the {@link Part} in the scope of the Matter node.
     */
    get number(): EndpointNumber {
        if (this.#number === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "part number is not yet assigned; set number or await part.construction to avoid this error"
            );
        }
        return this.#number;
    }

    /**
     * The owner of the part.
     */
    get owner(): PartOwner {
        if (!this.#owner) {
            throw new ImplementationError(
                "Part owner is not available until node is installed"
            );
        }
        return this.#owner;
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        if (this.#behaviors === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "behaviors are not yet initialized; await part.construction to avoid this error"
            );
        }
        return this.#behaviors;
    }
    
    get construction() {
        return this.#construction;
    }

    constructor(config: Part.Configuration<T> | T);

    constructor(type: T, options: Part.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Part.Options<T>) {
        // Create construction early so parts and behaviors can hook events
        this.#construction = AsyncConstruction(this);

        if (Part.isConfiguration(definition)) {
            options = definition;
            definition = definition.type
        }

        this.#type = definition;
        const behaviors = this.#type.behaviors ?? [];
        this.#behaviors = new Behaviors(this, behaviors, { ...options?.config });

        this.#lifecycle = new PartLifecycle(this);

        if (options?.id !== undefined) {
            this.id = options?.id;
        }

        if (options?.number !== undefined) {
            this.number = options?.number;
        }

        if (options?.owner) {
            this.owner = options.owner instanceof Agent ? options.owner.part : options.owner;
        }

        if (options?.parts) {
            for (const part of options.parts) {
                this.parts.add(part);
            }
        }

        this.#construction.start(() => {
            if (this.#lifecycle.isInstalled) {
                // Immediate initialization
                return this.#initialize();
            }
 
            // Deferred initialization -- wait for installation
            return new Promise<void>((fulfilled, rejected) => {
                this.#lifecycle.installed.once(() => {
                    MaybePromise.then(
                        () => this.#initialize(),
                        fulfilled,
                        rejected,
                    );
                });
            });
        });
    }

    #initialize() {
        if (!this.owner) {
            // Shouldn't be possible
            throw new InternalError("Part initialized without owner");
        }

        let promise = MaybePromise.then(
            () => {
                this.owner.serviceFor(PartInitializer).initializeDescendent(this);
                return this.behaviors.initialize();
            },
            () => this.lifecycle.change(PartLifecycle.Change.Ready),
        );

        return promise;
    }

    set id(id: string) {
        if (this.#id === id) {
            return;
        }
        if (this.#id !== undefined) {
            throw new ImplementationError(`${this} ID is already assigned, cannot reassign`);
        }
        if (typeof id !== "string") {
            throw new ImplementationError(`Illegal endpoint ID type "${typeof id}"`);
        }
        if (id === "") {
            throw new ImplementationError("Endpoint ID may not be empty");
        }
        if (id.includes(".")) {
            throw new ImplementationError('Endpoint ID may not include "."');
        }

        if (this.lifecycle.isInstalled && this.owner instanceof Part) {
            this.owner.parts.assertIdAvailable(id);
        }
        
        this.#id = id;
        this.lifecycle.change(PartLifecycle.Change.IdAssigned);
    }

    set number(number: number) {
        if (this.#number === number) {
            return;
        }
        if (this.#number !== undefined) {
            throw new ImplementationError(`${this} endpoint number ${this.#number} is already assigned, cannot reassign`)
        }
        if (typeof number !== "number") {
            throw new ImplementationError(`Illegal endpoint number type "${typeof number}"`);
        }
        if (!Number.isInteger(number)) {
            throw new ImplementationError(`Endpoint number ${number} is not an integer`)
        }
        if (number < 0) {
            throw new ImplementationError(`Endpoint number ${number} is negative`);
        }
        if (number > 0xffff) {
            throw new ImplementationError(`Endpoint number ${number} is greater than the maximum of 65535`);
        }

        if (this.type.deviceClass === RootEndpoint.deviceClass) {
            if (number !== 0) {
                throw new ImplementationError("The root endpoint must have ID 0");
            }
        } else {
            if (number === 0) {
                throw new ImplementationError("Only root endpoint may have ID 0");
            }

            if (this.lifecycle.isInstalled) {
                this.serviceFor(IdentityService).assertNumberAvailable(number, this);
            }
        }

        this.#number = EndpointNumber(number);

        this.lifecycle.change(PartLifecycle.Change.NumberAssigned);
    }

    set owner(owner: PartOwner | undefined) {
        if (this.#owner === owner) {
            return;
        }
        if (this.#owner) {
            throw new ImplementationError("Part owner cannot be reassigned");
        }
        if (owner === undefined) {
            throw new ImplementationError("Part owner must be defined");
        }

        this.#owner = owner;
        
        try {
            owner.adoptChild(this);
        } catch (e) {
            this.#owner = undefined;
            throw e;
        }
    }

    /**
     * The type of endpoint this part implements.
     */
    get type() {
        return this.#type;
    }

    /**
     * Access child parts.
     */
    get parts() {
        if (!this.#parts) {
            this.#parts = new Parts(this);
        }
        return this.#parts;
    }

    /**
     * Is this a parent Part?
     */
    get hasParts() {
        return !!this.#parts?.size;
    }

    /**
     * Access lifecycle information.
     */
    get lifecycle() {
        return this.#lifecycle;
    }

    /**
     * Create an {@link Agent}.  This is the primary means of
     * interacting with an endpoint.
     *
     * If {@link ActionContext.fabric} is not present the operation will
     * fail.
     */
    getAgent(context: ActionContext): Agent.Instance<T["behaviors"]> {
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

    /**
     * Apply a depth-first visitor function to myself and all descendents.
     */
    visit(visitor: (part: Part) => void) {
        visitor(this);
        if (this.hasParts) {
            for (const part of this.parts) {
                part.visit(visitor);
            }
        }
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
        await this.behaviors[Symbol.asyncDispose]();
        this.lifecycle.change(PartLifecycle.Change.Destroyed);
        this.#owner = undefined;
    }

    adoptChild(part: Part) {
        this.parts.add(part);
    }

    serviceFor<T>(type: abstract new(...args: any[]) => T): T {
        if (!this.#owner) {
            throw new ImplementationError("Cannot access services because owner is not installed");
        }
        return this.#owner.serviceFor(type);
    }

    toString() {
        let owner;
        if (this.lifecycle.isInstalled && this.owner instanceof Part) {
            owner = `${this.owner}.`;
        } else {
            owner = "";
        }

        let id;
        if (this.#lifecycle.hasId) {
            id = this.id;
        } else if (this.#lifecycle.hasNumber) {
            id = `#${this.number}`;
        } else {
            id = "?";
        }

        return `${owner}${this.#type.name}#${id}`;
    }

    get #resolvedAgentType() {
        if (!this.#agentType) {
            this.#agentType = Agent.for(this.type.name, this.behaviors.supported);
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
            owner?: PartOwner | Agent;
            id?: string;
            number?: number;
            config?: BehaviorConfigurations<T>;
            parts?: Iterable<Part.Definition>;
        };

    /**
     * Options with embedded type.
     */
     export type Configuration<T extends EndpointType = EndpointType.Empty> =
        & { type: T }
        & Options<T>;

    export type BehaviorConfigurations<T extends EndpointType> = {
        [id in keyof T["behaviors"]]?: Behavior.Options<T["behaviors"][id]>
    }    

    /**
     * Definition of a Part.  May be an {@link EndpointType},
     * {@link Configuration}, or a {@link Part} instance.
     */
    export type Definition<T extends EndpointType = EndpointType.Empty> =
        | T
        | Configuration<T>
        | Part<T>;

    /**
     * Determine whether a {@link Definition} is a {@link Configuration}.
     */
    export function isConfiguration<T extends EndpointType>(
        definition: Definition<T>
    ): definition is Configuration<T> {
        return !(definition instanceof Part) && !!(definition as Configuration<T>).type;
    }

    /**
     * Obtain a part for the given {@link Definition}.
     */
    export function partFor<T extends EndpointType>(definition: Definition<T>): Part<T> {
        if (definition instanceof Part) {
            return definition;
        }

        return new Part(definition);
    }
}
