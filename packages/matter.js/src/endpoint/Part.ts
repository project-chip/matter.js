/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { OfflineContext } from "../behavior/context/server/OfflineContext.js";
import { UninitializedDependencyError } from "../common/Lifecycle.js";
import { ImplementationError } from "../common/MatterError.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Environment } from "../environment/Environment.js";
import { IdentityService } from "../node/server/IdentityService.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { MaybePromise } from "../util/Promises.js";
import { Agent } from "./Agent.js";
import { DataModelPath } from "./DataModelPath.js";
import { RootEndpoint } from "./definitions/system/RootEndpoint.js";
import { Behaviors } from "./part/Behaviors.js";
import { PartInitializer } from "./part/PartInitializer.js";
import { PartLifecycle } from "./part/PartLifecycle.js";
import { Parts } from "./part/Parts.js";
import { SupportedBehaviors } from "./part/SupportedBehaviors.js";
import { EndpointType } from "./type/EndpointType.js";

/**
 * Endpoints consist of a hierarchy of parts.  This class manages the current state of a single part.
 *
 * You can interact with endpoints using an {@link Agent} created with {@link Part.agentFor}.  Agents are stateless and
 * designed for quick instantiation so you can create them as needed then discard.
 *
 * Most often direct access to {@link Agent} is transparent as Matter.js acquires an agent as necessary for
 * {@link Behavior} interactions.
 */
export class Part<T extends EndpointType = EndpointType.Empty> {
    #type: EndpointType;
    #id?: string;
    #number?: EndpointNumber;
    #owner?: Part;
    #agentType?: Agent.Type<T>;
    #behaviors?: Behaviors;
    #lifecycle: PartLifecycle;
    #parts?: Parts;
    #construction: AsyncConstruction<Part<T>>;
    #stateView = {} as SupportedBehaviors.StateOf<T["behaviors"]>;
    #eventsView = {} as SupportedBehaviors.EventsOf<T["behaviors"]>;

    /**
     * A string that uniquely identifies a Part.
     *
     * This ID must be unique amongst all Parts with the same owner.
     */
    get id() {
        if (this.#id === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "part ID is not yet assigned; set ID or await part.construction to avoid this error",
            );
        }
        return this.#id;
    }

    /**
     * The Matter {@link EndpointNumber} of the endpoint.  This uniquely identifies the {@link Part} in the scope of the
     * Matter node.
     */
    get number(): EndpointNumber {
        if (this.#number === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "part number is not yet assigned; set number or await part.construction to avoid this error",
            );
        }
        return this.#number;
    }

    /**
     * The owner of the part.
     */
    get owner(): Part | undefined {
        return this.#owner;
    }

    /**
     * The part's environment.  Part implementations use the environment to access platform components such as storage
     * and network components.
     */
    get env(): Environment {
        if (this.owner) {
            return this.owner.env;
        }
        return Environment.default;
    }

    /**
     * Access the pool of behaviors supported by this part.
     */
    get behaviors() {
        if (this.#behaviors === undefined) {
            throw new UninitializedDependencyError(
                this.toString(),
                "behaviors are not yet initialized; await part.construction to avoid this error",
            );
        }
        return this.#behaviors;
    }

    /**
     * Current state values for all behaviors.  This view is read-only.
     *
     * If a behavior is not fully initalized its state may be incomplete.
     */
    get state() {
        return this.#stateView;
    }

    /**
     * Events for all behaviors.
     */
    get events() {
        return this.#eventsView;
    }

    get construction() {
        return this.#construction;
    }

    constructor(config: Part.Configuration<T> | T);

    constructor(type: T, options?: Part.Options<T>);

    constructor(definition: T | Part.Configuration<T>, options?: Part.Options<T>) {
        // Create construction early so parts and behaviors can hook events
        this.#construction = AsyncConstruction(this);

        const config = Part.configurationFor(definition, options);

        this.#type = config.type;
        this.#lifecycle = this.createLifecycle();

        this.#behaviors = new Behaviors(this, this.#type.behaviors, config as Record<string, object | undefined>);

        if (config.id !== undefined) {
            this.id = config.id;
        }

        if (config.number !== undefined) {
            this.number = config.number;
        }

        if (config.owner) {
            this.owner = config.owner instanceof Agent ? config.owner.part : config.owner;
        }

        if (config.parts) {
            for (const part of config.parts) {
                this.parts.add(part);
            }
        }

        this.#construction.start(() => {
            if (this.lifecycle.isInstalled) {
                // Immediate initialization
                return this.#initialize();
            }

            // Deferred initialization -- wait for installation
            return new Promise<void>((fulfilled, rejected) => {
                this.lifecycle.installed.once(() => {
                    MaybePromise.then(() => this.#initialize(), fulfilled, rejected);
                });
            });
        });
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
            this.owner.parts.assertIdAvailable(id, this);
        }

        this.#id = id;
        this.lifecycle.change(PartLifecycle.Change.IdAssigned);
    }

    set number(number: number) {
        if (this.#number === number) {
            return;
        }
        if (this.#number !== undefined) {
            throw new ImplementationError(
                `${this} endpoint number ${this.#number} is already assigned, cannot reassign`,
            );
        }
        if (typeof number !== "number") {
            throw new ImplementationError(`Illegal endpoint number type "${typeof number}"`);
        }
        if (!Number.isInteger(number)) {
            throw new ImplementationError(`Endpoint number ${number} is not an integer`);
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
                this.env.get(IdentityService).assertNumberAvailable(number, this);
            }
        }

        this.#number = EndpointNumber(number);

        this.lifecycle.change(PartLifecycle.Change.NumberAssigned);
    }

    set owner(owner: Part | undefined) {
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
            owner.parts.add(this);
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
     * Part information that varies as the part initializes.
     */
    get lifecycle() {
        return this.#lifecycle;
    }

    protected createLifecycle() {
        return new PartLifecycle(this);
    }

    /**
     * Create an {@link Agent.Type} for the part.
     */
    get agentType() {
        if (!this.#agentType) {
            this.#agentType = Agent.for(this.type, this.behaviors.supported);
        }
        return this.#agentType;
    }

    /**
     * Perform offline work on the part.  When offline, ACLs are ignored and all state is read/write.
     *
     * This should only be used for local purposes.  All network interaction should use OnlineContext.
     */
    offline<R>(actor: (agent: Agent.Instance<T>) => MaybePromise<R>): MaybePromise<R> {
        this.construction.assert("Part");

        return OfflineContext.act("offline", context => {
            return actor(context.agentFor(this));
        });
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

    async destroy() {
        await this.construction.destroy(async () => {
            await this.parts[Symbol.asyncDispose]();
            await this.behaviors[Symbol.asyncDispose]();
            this.lifecycle.change(PartLifecycle.Change.Destroyed);
            this.#owner = undefined;
        });
    }

    async [Symbol.asyncDispose]() {
        await this.destroy();
    }

    toString() {
        return this.path.toString();
    }

    /**
     * Path identifying the part in the Matter data model.
     */
    get path(): DataModelPath {
        let ident;
        if (this.lifecycle.hasId) {
            ident = this.id;
        } else if (this.lifecycle.hasNumber) {
            ident = this.number;
        } else {
            ident = "?";
        }

        if (this.#owner) {
            return this.#owner.path.at(ident, this.#type.name);
        }

        return DataModelPath(ident, this.type.name);
    }

    /**
     * Asynchronous initialization.
     *
     * Derivatives may override to perform async construction prior to full initialization.
     */
    protected initialize(agent: Agent.Instance<T>) {
        this.env.get(PartInitializer).initializeDescendent(this);
        return this.behaviors.initialize(agent);
    }

    #initialize() {
        return MaybePromise.then(
            // Initialize myself and behaviors in a single offline transaction
            () =>
                OfflineContext.act(`initialize`, context => this.initialize(context.agentFor(this)), {
                    unversionedVolatiles: true,
                }),

            // Update lifecycle indicating initialization is complete
            () => this.lifecycle.change(PartLifecycle.Change.Ready),
        );
    }
}

export namespace Part {
    export type BehaviorOptions<T extends EndpointType = EndpointType.Empty, O extends PartOptions = PartOptions> = {
        [K in keyof T["behaviors"] as K extends keyof O ? never : K]?: Behavior.Options<T["behaviors"][K]>;
    };

    export interface PartOptions {
        owner?: Part | Agent;
        id?: string;
        number?: number;
        parts?: Iterable<Part.Definition>;
    }

    export type Options<
        T extends EndpointType = EndpointType.Empty,
        O extends PartOptions = PartOptions,
    > = BehaviorOptions<T, O> & O;

    export type Configuration<
        T extends EndpointType = EndpointType.Empty,
        O extends PartOptions = PartOptions,
    > = Options<T, O> & { type: T };

    /**
     * Definition of a Part.  May be an {@link EndpointType}, {@link Configuration}, or a {@link Part} instance.
     */
    export type Definition<T extends EndpointType = EndpointType.Empty> = T | Configuration<T> | Part<T>;

    /**
     * Obtain a configuration from constructor parameters.
     */
    export function configurationFor<T extends EndpointType>(
        definition: T | Part.Configuration<T>,
        options?: Part.Options<T>,
    ) {
        if ((definition as EndpointType).deviceType) {
            return {
                ...options,
                type: definition as T,
            } as Configuration<T>;
        }
        return definition as Configuration<T>;
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
