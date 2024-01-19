/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../../behavior/definitions/commissioning/CommissioningBehavior.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { IndexBehavior } from "../../behavior/definitions/index/IndexBehavior.js";
import { PartServer } from "../../endpoint/PartServer.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { BaseNodeServer } from "./BaseNodeServer.js";
import { ServerStore } from "./storage/ServerStore.js";
import { AsyncConstruction, asyncNew } from "../../util/AsyncConstruction.js";
import { PartLifecycle } from "../../endpoint/part/PartLifecycle.js";
import { PartInitializer } from "../../endpoint/part/PartInitializer.js";
import { ServerBehaviorInitializer } from "./ServerBehaviorInitializer.js";
import { PartStoreService } from "./storage/PartStoreService.js";
import { EventHandler } from "../../protocol/interaction/EventHandler.js";
import { IdentityService } from "./IdentityService.js";
import { Diagnostic } from "../../log/Diagnostic.js";
import { TransactionalInteractionServer } from "./TransactionalInteractionServer.js";
import { UninitializedDependencyError } from "../../common/Lifecycle.js";
import { ServerResetService } from "./ServerResetService.js";

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
    #resetService?: ServerResetService;
    #store?: ServerStore;
    #construction: AsyncConstruction<NodeServer>;
    #behaviorInitializer?: PartInitializer;
    #identityService?: IdentityService;
    #uptime?: Diagnostic.Elapsed;
    #interactionServer?: TransactionalInteractionServer;

    get id() {
        return this.#root.id;
    }

    get owner() {
        return undefined;
    }

    get root() {
        return this.rootPart.agent;
    }

    get rootPart() {
        if (!this.#root) {
            throw new UninitializedDependencyError(
                this.constructor.name,
                "is unavailable because initialization is incomplete; await the NodeServer to avoid this error"
            );
        }
        return this.#root;
    }

    get store() {
        if (this.#store === undefined) {
            throw new ImplementationError(`Storage for ${this} accessed prior to initialization`);
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

        const root = this.#root = Part.partFor(this.#configuration.root);

        if (!root.lifecycle.hasId) {
            root.id = this.#configuration.environment.allocateFallbackNodeId();
        }

        if (root.type.deviceType !== RootEndpoint.deviceType) {
            throw new ImplementationError(`Root node device type must be a ${RootEndpoint.deviceType}`);
        }

        root.owner = this;
    
        if (!root.lifecycle.hasNumber) {
            root.number = EndpointNumber(0);
        } else if (root.number !== 0) {
            throw new ImplementationError(`Root node ID must be 0`);
        }

        if (!root.lifecycle.hasId) {
            root.id = this.#configuration.environment.allocateFallbackNodeId();
        }
    
        root.behaviors.require(CommissioningBehavior);
        root.behaviors.require(IndexBehavior);
        this.#nextEndpointId = this.#configuration.nextEndpointNumber;

        this.#construction = AsyncConstruction(
            this,
            async () => {
                this.#store = await ServerStore.create(
                    this.#configuration.environment,
                    root.id,
                    this.#configuration.nextEndpointNumber,
                );
                
                root.lifecycle.change(PartLifecycle.Change.Installed);

                await this.#root.construction;
            }
        );
    }

    /**
     * Create a new NodeServer and wait for initialization to complete.
     */
    static async create(options?: ServerOptions.Configuration) {
        return asyncNew(NodeServer, options);
    }

    /**
     * Bring the device online.
     * 
     * TODO - should acquire some type of OS- or FS-level while running
     */
    override async start() {
        if (this.#uptime) {
            throw new ImplementationError("Already started");
        }
        this.#uptime = Diagnostic.elapsed();

        await this.construction;

        const agent = this.root;

        await this.advertise();

        if (!this.commissioned) {
            try {
                const commissioning = await agent.load(CommissioningBehavior);
                commissioning.initiateCommissioning();
            } catch (e) {
                if (e instanceof Error) {
                    Diagnostic.prefixError("Cannot initiate commissioning", e);
                }
                throw e;
            }
        }

        logger.notice(Diagnostic.strong(this.toString()), "is online");
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
        const host = new Host(this.#configuration);
        host.add(this);

        try {
            await host.run();
        } catch (e) {
            logger.error("Node server terminated due to error:", e);
        }
    }

    /**
     * Add an endpoint that implements a {@link EndpointType}.
     */
    add<T extends EndpointType>(type: T, options?: Part.Options<T>): void;

    /**
     * Add an endpoint implemented by a {@link Part}.
     */
    add(part: Part): void;

    add(endpoint: Part.Definition) {
        this.rootPart.parts.add(endpoint);
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
        logger.notice("Node", Diagnostic.strong(this.toString()), "going offline");

        await this.close();
    }

    override async close() {
        await super.close();
        await this.#interactionServer?.[Symbol.asyncDispose]();
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
            throw new InternalError("Root has no ID");
        } else if (part.owner instanceof Part) {
            let index = 0;
            for (const part2 of part.owner.parts) {
                if (part2 === part) {
                    const id = `part${index}`;
                    const desc = part.owner instanceof Part ? `${part.owner}.${id}` : id;
                    logger.warn(`Using fallback for ${desc}; set part ID to remove this warning`);
                    return id;
                }
                index++;
            }
        }
        throw new ImplementationError(`Cannot determine ID for ${part}`);
    }

    serviceFor<T>(type: abstract new (...args: any[]) => T): T {
        switch (type as unknown) {
            case PartInitializer:
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
                    this.#identityService = new IdentityService(this.#root, this.toString(), this.port);
                }
                return this.#identityService as T;

            case ServerResetService:
                if (this.#store && this.#host) {
                    if (!this.#resetService) {
                        this.#resetService = new ServerResetService(this, this.#store, this.#host);
                    }
                    return this.#resetService as T;
                }
        }

        throw new ImplementationError(`Unsupported service ${type.name}`);
    }

    set host(host: Host) {
        if (this.#host) {
            throw new ImplementationError(`Node ${this} already installed in host`);
        }
        this.#host = host;
    }

    async getMdnsBroadcaster() {
        if (this.#host === undefined) {
            throw new ImplementationError("Cannot start NodeServer without installed host");
        }
        return this.#host.mdnsBroadcaster;
    }

    async getMdnsScanner() {
        if (this.#host === undefined) {
            throw new ImplementationError("Cannot start NodeServer without installed host");
        }
        return this.#host.mdnsScanner;
    }

    /**
     * Textual description of the node used in diagnostic messages.
     */
    override toString() {
        return `${this.constructor.name}#${this.id}`
    }

    get [Diagnostic.value]() {
        return [
            this.toString(),
            Diagnostic.dict({ port: this.port, uptime: this.#uptime }),
            Diagnostic.list([
                this.rootEndpoint[Diagnostic.value],
            ])
        ]
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

    protected override get sessionStorage(): StorageContext {
        return this.store.sessionStorage;
    }

    protected override get fabricStorage(): StorageContext {
        return this.store.fabricStorage;
    }

    protected override async clearStorage() {
        await this.serviceFor(ServerResetService).factoryReset();
    }

    protected override async createMatterDevice() {
        this.#interactionServer = new TransactionalInteractionServer(
            this.rootPart,
            this.store,
            this.#configuration.subscription
        );

        return (await super.createMatterDevice())
            .addProtocolHandler(this.#interactionServer);
    }
}
