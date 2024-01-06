/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../../behavior/definitions/commissioning/CommissioningBehavior.js";
import { IndexBehavior } from "../../behavior/definitions/index/IndexBehavior.js";
import { Transaction } from "../../behavior/state/transaction/Transaction.js";
import { ImplementationError, NotImplementedError, NotInitializedError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Part } from "../../endpoint/Part.js";
import { PartServer } from "../../endpoint/PartServer.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { BehaviorInitializer } from "../../endpoint/part/BehaviorInitializer.js";
import { Lifecycle } from "../../endpoint/part/Lifecycle.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { Logger } from "../../log/Logger.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { AsyncConstruction, asyncNew } from "../../util/AsyncConstruction.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { BaseNodeServer } from "./BaseNodeServer.js";
import { IdentityService } from "./IdentityService.js";
import { ServerBehaviorInitializer } from "./ServerBehaviorInitializer.js";
import { TransactionalInteractionServer } from "./TransactionalInteractionServer.js";
import { PartStoreService } from "./storage/PartStoreService.js";
import { ServerStore } from "./storage/ServerStore.js";

const logger = Logger.get("NodeServer");

/**
 * Implementation of a Matter Node server.
 *
 * This is this highest-level API Matter.js offers for implementing a Matter
 * Node.
 *
 * This is perhaps more appropriately called "ServerNode" but that gets
 * confusing with the conventions of matter-node.js.
 */
export class NodeServer extends BaseNodeServer implements Node {
    #configuration: ServerOptions.Configuration;
    #root: Part<RootEndpoint>;
    #rootServer?: PartServer;
    #nextEndpointId: EndpointNumber;
    #host?: Host;
    #store?: ServerStore;
    #construction: AsyncConstruction<NodeServer>;
    #behaviorInitializer?: BehaviorInitializer;
    #identityService?: IdentityService;

    get owner() {
        return undefined;
    }

    get root() {
        return this.rootPart.agent;
    }

    get rootPart() {
        if (!this.#root) {
            throw new NotInitializedError(
                "Root part is unavailable because initialization is incomplete; await the NodeServer to avoid this error",
            );
        }
        return this.#root;
    }

    get store() {
        if (this.#store === undefined) {
            throw new ImplementationError(`${this.description}: Storage accessed prior to initialization`);
        }
        return this.#store;
    }

    /**
     * The configuration of the server.
     *
     * This is derived from {@link ServerOptions} during initialization.
     */
    get configuration() {
        return this.#configuration;
    }

    get construction() {
        return this.#construction;
    }

    /**
     * Create a new NodeServer.
     *
     * @param options server configuration options
     */
    constructor(options?: ServerOptions.Configuration) {
        super();

        this.#configuration = ServerOptions.configurationFor(options);

        const root = (this.#root = Part.partFor(this.#configuration.root));

        if (root.type.deviceType !== RootEndpoint.deviceType) {
            throw new ImplementationError(`Root node device type must be a ${RootEndpoint.deviceType}`);
        }

        root.owner = this;

        if (!root.lifecycle.hasNumber) {
            root.number = EndpointNumber(0);
        } else if (root.number !== 0) {
            throw new ImplementationError(`Root node ID must be 0`);
        }

        root.behaviors.require(CommissioningBehavior);
        root.behaviors.require(IndexBehavior);
        this.#nextEndpointId = this.#configuration.nextEndpointNumber;

        this.#construction = AsyncConstruction(this, async () => {
            this.#store = await ServerStore.create(this.#configuration);

            root.lifecycle.change(Lifecycle.Change.Installed);
        });
    }

    static async create(options?: ServerOptions.Configuration): Promise<NodeServer> {
        return asyncNew(this, options);
    }

    /**
     * Bring the device online.
     */
    override async start() {
        await this.construction;

        const agent = this.root;

        if (!this.commissioned) {
            const commissioning = await agent.waitFor(CommissioningBehavior);
            commissioning.initiateCommissioning();
        }

        await this.#saveInitialValues();

        await super.start();

        logger.notice(`Node "${this.description}" is online`);
    }

    /**
     * Run the node in "standalone" mode.
     *
     * This mode creates a {@link Host} dedicated to this node.
     */
    async run() {
        if (this.#host) {
            throw new ImplementationError("Already running");
        }
        const runner = new Host(this.#configuration);
        runner.add(this);
        await runner.run();
    }

    /**
     * Add an endpoint that implements a {@link EndpointType}.
     */
    async add<T extends EndpointType>(type: T, options?: Part.Options<T>): Promise<void>;

    /**
     * Add an endpoint implemented by a {@link Part}.
     */
    async add(part: Part): Promise<void>;

    async add(endpoint: Part.Definition) {
        return this.rootPart.parts.add(endpoint);
    }

    /**
     * Terminate after starting with run().
     */
    abort() {
        if (!this.#host) {
            throw new ImplementationError("Not running");
        }
        this.#host.abort();
    }

    /**
     * An index of all parts.
     */
    get index() {
        return this.root.get(IndexBehavior);
    }

    /**
     * Retrieve a part by number.
     */
    partForNumber(number: number) {
        return this.root.get(IndexBehavior).forNumber(number);
    }

    /**
     * Support for JS "async using".  Cleans up resources when the server is
     * no longer needed.
     */
    async [Symbol.asyncDispose]() {
        await this.#rootServer?.[Symbol.asyncDispose]();
        await this.#store?.[Symbol.asyncDispose]();
    }

    adoptChild(part: Part) {
        if (part !== this.#root) {
            throw new ImplementationError("NodeServer may only have a single root part installed");
        }
    }

    fallbackIdFor(part: Part) {
        if (part === this.#root) {
            return "root";
        } else if (part.owner instanceof Part) {
            let index = 0;
            for (const part2 of part.owner.parts) {
                if (part2 === part) {
                    const id = `${part.owner.id}#${index}`;
                    logger.warn(`Using fallback ID ${id} for unidentified part; set part ID to remove this warning`);
                    return id;
                }
                index++;
            }
        }
        throw new ImplementationError(`${part.description}: Cannot determine ID`);
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        // Not sure why the cast to unknown is necessary here, TS complains
        // that type may not instantiate to T without it which seems incorrect
        switch (type as unknown) {
            case BehaviorInitializer:
                if (!this.#behaviorInitializer) {
                    this.#behaviorInitializer = new ServerBehaviorInitializer(this);
                }
                return this.#behaviorInitializer as T;

            case PartStoreService:
                return this.store.partStores as T;

            case EventHandler:
                return this.store.eventHandler as T;

            case IdentityService:
                if (!this.#identityService) {
                    this.#identityService = new IdentityService(this.#root, this.port);
                }
                return this.#identityService as T;
        }

        throw new ImplementationError(`Unsupported service ${type.name}`);
    }

    /**
     * Textual description of the node used in diagnostic messages.
     */
    get description() {
        return this.commissioningConfig.productDescription.name;
    }

    protected override get commissioningConfig() {
        return this.root.get(CommissioningBehavior).state as CommissioningOptions.Configuration;
    }

    protected override get networkConfig() {
        return this.#configuration.network;
    }

    protected override get rootEndpoint() {
        if (!this.#rootServer) {
            this.#rootServer = PartServer.forPart(this.rootPart);
        }
        return this.#rootServer;
    }

    protected override get nextEndpointId() {
        return this.#nextEndpointId;
    }

    protected override set nextEndpointId(id: EndpointNumber) {
        this.#nextEndpointId = id;
    }

    protected override get advertiseOnStartup() {
        return !!this.root.get(CommissioningBehavior).state.automaticAnnouncement;
    }

    protected override emitCommissioningChanged(_fabric: FabricIndex): void {}

    protected override emitActiveSessionsChanged(_fabric: FabricIndex): void {}

    protected override createInteractionServer() {
        return new TransactionalInteractionServer(this.rootPart, this.store, this.#configuration.subscription);
    }

    protected override get sessionStorage(): StorageContext {
        return this.store.sessionStorage;
    }

    protected override get fabricStorage(): StorageContext {
        return this.store.fabricStorage;
    }

    protected override async initializeEndpoints(): Promise<void> {
        // Nothing to do
    }

    protected override clearStorage(): Promise<void> {
        // TODO
        throw new NotImplementedError();
    }

    /**
     * We don't run behavior initializers transactionally.
     *
     * Instead we save dirty values at server startup.
     */
    async #saveInitialValues() {
        const transaction = new Transaction();
        this.rootPart.visit(part => part.behaviors.save(transaction));
        if (transaction.status === Transaction.Status.Exclusive) {
            await transaction.commit();
        }
    }
}
