/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeActivity } from "../behavior/context/server/NodeActivity.js";
import { CommissioningBehavior } from "../behavior/system/commissioning/CommissioningBehavior.js";
import { NetworkServer } from "../behavior/system/network/NetworkServer.js";
import { ServerNetworkRuntime } from "../behavior/system/network/ServerNetworkRuntime.js";
import { ProductDescriptionServer } from "../behavior/system/product-description/ProductDescriptionServer.js";
import { SessionsBehavior } from "../behavior/system/sessions/SessionsBehavior.js";
import { Agent } from "../endpoint/Agent.js";
import { Endpoint } from "../endpoint/Endpoint.js";
import { EndpointServer } from "../endpoint/EndpointServer.js";
import { RootEndpoint as BaseRootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { EndpointInitializer } from "../endpoint/properties/EndpointInitializer.js";
import { EndpointLifecycle } from "../endpoint/properties/EndpointLifecycle.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import type { MatterCoreSpecificationV1_2 } from "../spec/Specifications.js";
import { Mutex } from "../util/Mutex.js";
import { Identity } from "../util/Type.js";
import { Node } from "./Node.js";
import { IdentityService } from "./server/IdentityService.js";
import { ServerEndpointInitializer } from "./server/ServerEndpointInitializer.js";
import { ServerStore } from "./server/storage/ServerStore.js";

const logger = Logger.get("ServerNode");

/**
 * A server-side Matter {@link Node}.
 *
 * The Matter specification often refers to server-side nodes as "devices".
 */
export class ServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends Node<T> {
    #mutex: Mutex;
    #crashed = false;

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
        this.#mutex = new Mutex(this, this.construction);
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
        const node = new this(definition, options);

        if (!node.lifecycle.isTreeReady) {
            await node.lifecycle.treeReady;
        }

        const activity = node.env.get(NodeActivity);
        if (activity.isActive) {
            await activity.inactive;
        }

        return node as ServerNode<T>;
    }

    /**
     * Bring the server online.
     *
     * If you add the server as a worker to {@link Environment.runtime} this happens automatically.
     */
    start() {
        this.#mutex.run(async () => {
            if (this.#crashed) {
                this.#crashed = false;
                this.#reportCrashTermination();
                return;
            }

            if (!this.lifecycle.isTreeReady) {
                await this.lifecycle.treeReady;
            }

            await new ServerNetworkRuntime(this).run();
        });
    }

    /**
     * Take the server offline but leave state and structure intact.
     *
     * This happens automatically on close.
     */
    cancel() {
        if (this.behaviors.isActive(NetworkServer)) {
            const runtime = this.behaviors.internalsOf(NetworkServer).runtime;

            if (runtime) {
                // Note that we call close() immediately -- not once the mutex is free -- because the mutex is probably
                // held by the network's run() promise
                this.#mutex.run(runtime.close());
            }
        }
    }

    override async close() {
        this.cancel();

        this.#mutex.terminate(async () => {
            await super.close();

            if (this.env.has(ServerStore)) {
                const store = this.env.get(ServerStore);
                await store.close();
                this.env.delete(ServerStore, store);
            }
        });

        await this.#mutex;
    }

    /**
     * Perform a factory reset of the node.
     */
    async factoryReset() {
        // Do not reset whilst online, but note online state and restart after reset
        const isOnline = this.lifecycle.isOnline;
        if (isOnline) {
            this.cancel();
        }

        this.#mutex.run(async () => {
            // Inform user
            this.statusUpdate("resetting to factory defaults");

            // Destroy the PartServer hierarchy
            await EndpointServer.forEndpoint(this)[Symbol.asyncDispose]();

            // Reset in-memory state
            await this.reset();

            // Reset storage
            await this.resetStorage();

            // Reset puts parts back into inactive state; set to "installed" to trigger re-initialization
            this.lifecycle.change(EndpointLifecycle.Change.Installed);

            // Go back online if we were online at time of reset
            if (isOnline) {
                this.start();
            }
        });

        await this.#mutex;
    }

    async advertiseNow() {
        await this.act(agent => agent.get(NetworkServer).advertiseNow());
    }

    protected override async initialize(agent: Agent.Instance<T>) {
        // Load the environment with node-specific services
        const serverStore = await ServerStore.create(this.env, this.id);

        this.env.set(ServerStore, serverStore);

        this.env.set(EndpointInitializer, new ServerEndpointInitializer(this.env));

        this.env.set(IdentityService, new IdentityService(this));

        return super.initialize(agent);
    }

    protected override endpointCrashed(endpoint: Endpoint) {
        // Endpoint crashes may be disabled by event handlers except for the node
        if (super.endpointCrashed(endpoint) === false && endpoint !== this) {
            return false;
        }

        if (this.lifecycle.isOnline) {
            this.#reportCrashTermination();
        } else {
            this.#crashed = true;
        }
    }

    /**
     * By default on factory reset we erase all stored data.
     *
     * If this is inappropriate for your application you may override to alter the behavior.   Matter requires that all
     * "security- and privacy-related data and key material" is removed on factory reset.
     *
     * {@see {@link MatterCoreSpecificationV1_2} § 13.4}
     */
    protected async resetStorage() {
        await this.env.get(ServerStore).erase();
    }

    #reportCrashTermination() {
        logger.info("Aborting", Diagnostic.strong(this.toString()), "due to endpoint error");
        this.construction.onSuccess(() => this.construction.crashed(new Error(`Aborted ${this} due to error`), false));
    }
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(
        CommissioningBehavior,
        NetworkServer,
        ProductDescriptionServer,
        SessionsBehavior,
    );

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
