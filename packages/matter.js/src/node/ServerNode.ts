/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../behavior/system/commissioning/CommissioningBehavior.js";
import { NetworkServer } from "../behavior/system/networking/NetworkServer.js";
import { ProductDescriptionServer } from "../behavior/system/product-description/ProductDescriptionServer.js";
import { Agent } from "../endpoint/Agent.js";
import { Part } from "../endpoint/Part.js";
import { PartServer } from "../endpoint/PartServer.js";
import { RootEndpoint as BaseRootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { PartInitializer } from "../endpoint/part/PartInitializer.js";
import { PartLifecycle } from "../endpoint/part/PartLifecycle.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { Identity } from "../util/Type.js";
import { Node } from "./Node.js";
import { IdentityService } from "./server/IdentityService.js";
import { ServerPartInitializer } from "./server/ServerPartInitializer.js";
import { ServerStore } from "./server/storage/ServerStore.js";

const logger = Logger.get("ServerNode");

/**
 * A server-side Matter {@link Node}.
 *
 * The Matter specification often refers to server-side nodes as "devices".
 */
export class ServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends Node<T> {
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
     * @param config a {@link Part.Configuration} for the root endpoint
     */
    constructor(config: Partial<Node.Configuration<T>>);

    constructor(definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        super(Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options));
    }

    /**
     * Create a new ServerNode.
     *
     * @param type the variation of {@link RootEndpoint} that defines the root endpoint's behavior
     * @param options root endpoint configuration and, optionally, the node's environment
     */
    static async create<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        type?: T,
        options?: Node.Options<T>,
    ): Promise<ServerNode<T>>;

    /**
     * Create a new ServerNode.
     *
     * @param config root endpoint configuration and, optionally, the node's {@link Environment}
     */
    static async create<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        config: Partial<Node.Configuration<T>>,
    ): Promise<ServerNode<T>>;

    static async create<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint>(
        definition?: T | Node.Configuration<T>,
        options?: Node.Options<T>,
    ) {
        const node = new ServerNode<T>(definition as any, options);

        await node.construction;

        return node;
    }

    /**
     * Bring the server online.
     *
     * If you add the server as a worker to {@link Environment.runtime} this happens automatically.
     */
    start() {
        this.construction.then(() => {
            if (this.#crashed) {
                this.#crashed = false;
                this.#reportCrashTermination();
                return;
            }

            const startNetwork = () => this.offline(agent => agent.get(NetworkServer).start());

            if (this.lifecycle.isTreeReady) {
                startNetwork();
            } else {
                this.lifecycle.treeReady.then(startNetwork);
            }
        });
    }

    /**
     * Take the server offline but leave state and structure intact.
     *
     * This happens automatically on destruction.
     */
    cancel() {
        this.construction.then(() => this.offline(agent => agent.get(NetworkServer).cancel()));
    }

    /**
     * Perform a factory reset of the node.
     */
    async factoryReset() {
        // Do not reset until constructed
        await this.construction;

        // Inform user
        this.statusUpdate("resetting to factory defaults");

        // Do not reset whilst online, but note online state and restart after reset
        const isOnline = this.lifecycle.isOnline;
        if (isOnline) {
            this.cancel();
        }
        if (this.lifecycle.isOnline) {
            await this.lifecycle.offline;
        }

        // Destroy the PartServer hierarchy
        await PartServer.forPart(this)[Symbol.asyncDispose]();

        // Perform the factory reset
        await this.lifecycle.factoryReset();

        // Reset puts parts back into inactive state; set to "installed" to trigger re-initialization
        this.lifecycle.change(PartLifecycle.Change.Installed);

        // Go back online if we were online at time of reset
        if (isOnline) {
            this.start();
        }
    }

    protected override async initialize(agent: Agent.Instance<T>) {
        // Load the environment with node-specific services
        const serverStore = await ServerStore.create(this.env, this.id);

        this.env.set(ServerStore, serverStore);

        this.env.set(PartInitializer, new ServerPartInitializer(this.env));

        this.env.set(IdentityService, new IdentityService(this));

        return super.initialize(agent);
    }

    protected override partCrashed(part: Part) {
        // Part crashes may be disabled by event handlers except for the node
        if (super.partCrashed(part) === false && part !== this) {
            return false;
        }

        if (this.lifecycle.isOnline) {
            this.#reportCrashTermination();
        } else {
            this.#crashed = true;
        }
    }

    #reportCrashTermination() {
        logger.info("Aborting", Diagnostic.strong(this.toString()), "due to endpoint error");
        this.construction.then(() => this.construction.crashed(new Error(`Aborted ${this} due to error`), false));
    }
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(CommissioningBehavior, NetworkServer, ProductDescriptionServer);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
