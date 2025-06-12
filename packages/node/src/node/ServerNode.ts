/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { ActionContext } from "#behavior/context/ActionContext.js";
import { CommissioningServer } from "#behavior/system/commissioning/CommissioningServer.js";
import { ControllerBehavior } from "#behavior/system/controller/ControllerBehavior.js";
import { EventsBehavior } from "#behavior/system/events/EventsBehavior.js";
import { NetworkServer } from "#behavior/system/network/NetworkServer.js";
import { ServerNetworkRuntime } from "#behavior/system/network/ServerNetworkRuntime.js";
import { ProductDescriptionServer } from "#behavior/system/product-description/ProductDescriptionServer.js";
import { SessionsBehavior } from "#behavior/system/sessions/SessionsBehavior.js";
import { SubscriptionBehavior } from "#behavior/system/subscription/SubscriptionBehavior.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import type { Environment } from "#general";
import {
    asyncNew,
    Construction,
    createPromise,
    deepCopy,
    DiagnosticSource,
    errorOf,
    Identity,
    isObject,
    Logger,
    MatterError,
    MaybePromise,
} from "#general";
import {
    Fabric,
    FabricManager,
    Interactable,
    OccurrenceManager,
    ServerInteraction,
    SessionManager,
    Val,
} from "#protocol";
import { ObjectSchema } from "#types";
import { RootEndpoint as BaseRootEndpoint } from "../endpoints/root.js";
import { Node } from "./Node.js";
import { ClientNodes } from "./client/ClientNodes.js";
import { ServerEnvironment } from "./server/ServerEnvironment.js";
import { ServerNodeStore } from "./storage/ServerNodeStore.js";

const logger = Logger.get("ServerNode");

/**
 * Thrown when there is an error during factory reset.
 */
class FactoryResetError extends MatterError {
    constructor(message: string, cause: any) {
        super(message);
        this.cause = errorOf(cause);
    }
}

/**
 * A server-side Matter {@link Node}.
 *
 * The Matter specification often refers to server-side nodes as "devices".
 */
export class ServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends Node<T> {
    #nodes?: ClientNodes;
    #interaction?: Interactable<ActionContext>;

    /**
     * Construct a new ServerNode.
     *
     * You can use {@link create} to construct the node and wait for it to initialize fully.
     *
     * @param type the variation of {@link RootEndpoint} that defines the root endpoint's behavior
     * @param options root endpoint options and the node's environment
     */
    constructor(type?: T, options?: Node.Options<T>);

    /**
     * Construct a new ServerNode.
     *
     * You can use {@link create} to construct the node and wait for it to initialize fully.
     *
     * @param config a {@link Endpoint.Configuration} for the root endpoint
     */
    constructor(config: Partial<Node.Configuration<T>>);

    constructor(definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        super(Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options));

        this.env.set(ServerNode, this);

        DiagnosticSource.add(this);

        this.construction.start();
    }

    /**
     * Create a new ServerNode.
     *
     * @param type the variation of {@link RootEndpoint} that defines the root endpoint's behavior
     * @param options root endpoint configuration and, optionally, the node's environment
     */
    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, type?: T, options?: Node.Options<T>): Promise<ServerNode<T>>;

    /**
     * Create a new ServerNode.
     *
     * @param config root endpoint configuration and, optionally, the node's {@link Environment}
     */
    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, config: Partial<Node.Configuration<T>>): Promise<ServerNode<T>>;

    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        return await asyncNew(this, definition, options);
    }

    protected createRuntime(): ServerNetworkRuntime {
        return new ServerNetworkRuntime(this);
    }

    override async [Construction.destruct]() {
        await super[Construction.destruct]();
        await ServerEnvironment.close(this);
    }

    override async prepareRuntimeShutdown() {
        const sessions = this.env.get(SessionManager);
        await sessions.close();
    }

    /**
     * Perform a factory reset of the node.
     */
    override async erase() {
        await this.lifecycle.mutex.produce(this.eraseWithMutex.bind(this));
    }

    protected async eraseWithMutex() {
        try {
            await this.construction;

            // Go offline before performing reset
            const isOnline = this.lifecycle.isOnline;
            if (isOnline) {
                await this.cancelWithMutex();
            }

            // Inform user
            this.statusUpdate("resetting to factory defaults");

            // Reset in-memory state
            await this.resetWithMutex();

            // Reset persistent state
            await this.resetStorage();

            // Reset reverts node to inactive state; now reinitialize
            this.construction.start();

            // Go back online if we were online at time of reset, otherwise just await reinitialization
            if (isOnline) {
                await this.startWithMutex();
            } else {
                await this.construction.ready;
            }
        } catch (e) {
            this.construction.crash();
            throw new FactoryResetError(`Error during factory reset of ${this}`, e);
        }
    }

    /**
     * Access other nodes on the fabric.
     */
    get nodes() {
        if (!this.#nodes) {
            this.#nodes = new ClientNodes(this);
            this.#nodes.initialize();
        }

        return this.#nodes;
    }

    get interaction() {
        if (this.#interaction === undefined) {
            this.#interaction = new ServerInteraction<ActionContext>(this.protocol);
        }
        return this.#interaction;
    }

    async advertiseNow() {
        await this.act(`advertiseNow<${this}>`, agent => agent.get(NetworkServer).advertiseNow());
    }

    protected override async initialize() {
        await ServerEnvironment.initialize(this);

        this.env.get(FabricManager).events.deleted.on(fabric => this.#sanitizeFabricData(fabric));

        await super.initialize();
    }

    /**
     * Sanitize Fabric scoped data and events when a fabric is removed.
     * The logic walks through all endpoints and removes relevant fabric-scoped attribute values for the relevant fabric
     * from the state. After all state changes are processed, it removes all occurrences of fabric-scoped events.
     */
    async #sanitizeFabricData(fabric: Fabric) {
        const fabricIndex = fabric.fabricIndex;
        const fabricRelevantEvents = new Set<string>();
        const stateUpdatePromises = new Array<Promise<void>>();
        let sanitizedAttributes = 0;
        await this.visit(async endpoint => {
            for (const type of Object.values(endpoint.behaviors.supported)) {
                const cluster = (type as ClusterBehavior.Type)?.cluster;
                if (!cluster) {
                    continue;
                }
                const stateUpdate = {} as Val.Struct;
                const elements = endpoint.behaviors.elementsOf(type);
                if (elements.attributes.size) {
                    // Iterate over all attributes and check if they are fabric-scoped
                    for (const attributeName of elements.attributes) {
                        const attr = cluster.attributes[attributeName];
                        if (attr.fabricScoped) {
                            const value = (endpoint.stateOf(type) as Val.Struct)[attributeName];
                            // If the value contains data for the fabric being removed, remove the data
                            if (Array.isArray(value) && value.length > 0) {
                                const filtered = deepCopy(value).filter(entry => entry.fabricIndex !== fabricIndex);
                                if (filtered.length !== value.length) {
                                    sanitizedAttributes++;
                                    stateUpdate[attributeName] = filtered;
                                }
                            }
                        }
                    }
                    // If we have any state updates for this behavior, we need to set the state.
                    // Errors are being logged and ignored
                    if (Object.keys(stateUpdate).length > 0) {
                        const { resolver, promise } = createPromise<void>();
                        (endpoint.eventsOf(type) as any).stateChanged?.on(resolver);
                        try {
                            await endpoint.setStateOf(type, stateUpdate);
                            stateUpdatePromises.push(promise);
                        } catch (error) {
                            logger.warn(
                                `Could not sanitize fabric-scoped attributes for cluster ${cluster.name} on endpoint ${endpoint.id}`,
                                error,
                            );
                        }
                    }
                }
                if (elements.events.size) {
                    // If we have events also check if they are fabric scoped and collect them
                    for (const eventName of elements.events) {
                        const event = cluster.events[eventName];
                        if ((event.schema as ObjectSchema<any>).isFabricScoped) {
                            fabricRelevantEvents.add(`${cluster.id}-${event.id}`);
                        }
                    }
                }
            }
        });

        // Wait for all state changed to be executed before processing events
        await Promise.allSettled(stateUpdatePromises);

        let sanitizedEvents = 0;
        // Now we can remove all occurrences of fabric-scoped events when payload is bound to this fabric index
        if (fabricRelevantEvents.size > 0) {
            const occurrences = this.env.get(OccurrenceManager);
            for await (const event of occurrences.get()) {
                if (
                    fabricRelevantEvents.has(`${event.clusterId}-${event.eventId}`) &&
                    isObject(event.payload) &&
                    event.payload.fabricIndex === fabricIndex
                ) {
                    // Remove occurrences of fabric-scoped events
                    const result = occurrences.remove(event.number);
                    if (MaybePromise.is(result)) {
                        await result;
                    }
                    sanitizedEvents++;
                }
            }
        }
        logger.info(
            `Sanitized ${sanitizedAttributes} attributes and ${sanitizedEvents} events because of fabric removal (index ${fabricIndex})`,
        );
    }

    /**
     * By default, on factory reset we erase all stored data.
     *
     * If this is inappropriate for your application, you may override to alter the behavior.  Matter requires that all
     * "security- and privacy-related data and key material" is removed on factory reset.
     *
     * @see {@link MatterSpecification.v12.Core} § 13.4
     */
    protected async resetStorage() {
        await this.env.get(SessionManager).clear();
        await this.env.get(FabricManager).clear();
        await this.env.get(OccurrenceManager).clear();
        await this.env.get(ServerNodeStore).erase();
    }

    /**
     * Normal endpoints must have an owner to complete construction but server nodes have no such precondition for
     * construction.
     */
    protected override assertConstructable() {}
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(
        CommissioningServer,
        NetworkServer,
        ProductDescriptionServer,
        SubscriptionBehavior,
        SessionsBehavior,
        EventsBehavior,
        ControllerBehavior,
    );

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
