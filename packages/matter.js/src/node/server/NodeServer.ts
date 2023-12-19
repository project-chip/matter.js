/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../behavior/Behavior.js";
import { BehaviorBacking } from "../../behavior/BehaviorBacking.js";
import { BasicInformationBehavior } from "../../behavior/definitions/basic-information/BasicInformationBehavior.js";
import { LifecycleBehavior } from "../../behavior/definitions/lifecycle/LifecycleBehavior.js";
import { DeviceCertification } from "../../behavior/definitions/operational-credentials/DeviceCertification.js";
import { PartsBehavior } from "../../behavior/definitions/parts/PartsBehavior.js";
import { ImplementationError, InternalError } from "../../common/MatterError.js";
import { EndpointNumber } from "../../datatype/EndpointNumber.js";
import { FabricIndex } from "../../datatype/FabricIndex.js";
import { VendorId } from "../../datatype/VendorId.js";
import { Part } from "../../endpoint/Part.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { PartServer } from "../../endpoint/server/PartServer.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { Logger } from "../../log/Logger.js";
import { StorageContext } from "../../storage/StorageContext.js";
import { Host } from "../Host.js";
import { Node } from "../Node.js";
import { CommissioningOptions } from "../options/CommissioningOptions.js";
import { ServerOptions } from "../options/ServerOptions.js";
import { BaseNodeServer } from "./BaseNodeServer.js";
import { TransactionalInteractionServer } from "./TransactionalInteractionServer.js";

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
    #commissioningConfig?: CommissioningOptions.Configuration;
    #certification?: DeviceCertification;
    #commissioningStorage?: StorageContext;

    get configuration() {
        return this.#configuration;
    }

    protected override get networkConfig() {
        return this.#configuration.network;
    }

    protected override get subscriptionConfig() {
        return this.#configuration.subscription;
    }

    protected override get commissioningConfig() {
        if (this.#commissioningConfig === undefined) {
            throw new InternalError("Commissioning attempted prior to commissioning configuration");
        }
        return this.#commissioningConfig;
    }

    protected override get rootEndpoint() {
        if (!this.#rootServer) {
            this.#rootServer = PartServer.forPart(this.#root);
        }
        return this.#rootServer;
    }

    protected override get nextEndpointId() {
        return this.#nextEndpointId;
    }

    protected override set nextEndpointId(id: EndpointNumber) {
        this.nextEndpointId = id;
    }

    protected override get advertiseOnStartup() {
        return this.#configuration.commissioning?.automaticAnnouncement !== false;
    }

    protected override emitCommissioningChanged(_fabric: FabricIndex): void {}

    protected override emitActiveSessionsChanged(_fabric: FabricIndex): void {}

    get certification() {
        if (this.#certification === undefined) {
            throw new InternalError("Certification attempted prior to certification configuration");
        }
        return this.#certification;
    }

    constructor(options?: ServerOptions.Configuration) {
        super();

        this.#configuration = ServerOptions.configurationFor(options);
        this.#root = this.#configuration.root;
        this.#root.owner = this;
        this.#nextEndpointId = this.#configuration.nextEndpointId;
    }

    indexOf(): undefined {}

    /**
     * Add an endpoint.
     */
    add(endpoint: Part | EndpointType) {
        if (typeof endpoint === "function") {
            this.root.agent.get(PartsBehavior).add(endpoint);
        }
    }

    /**
     * Access the root endpoint {@link Part}.
     */
    get root() {
        return this.#root;
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
     * Terminate after starting with run().
     */
    abort() {
        if (!this.#host) {
            throw new ImplementationError("Not running");
        }
        this.#host.abort();
    }

    async [Symbol.asyncDispose]() {
        await this.#rootServer?.[Symbol.asyncDispose]();
    }

    getAncestor<T>(type: new (...args: any[]) => T) {
        if (this instanceof type) {
            return this;
        }
        throw new ImplementationError(`Behavior is not owned by ${type.name}`);
    }

    createBacking(part: Part, behavior: Behavior.Type): BehaviorBacking {
        return PartServer.forPart(part).createBacking(behavior);
    }

    override async start() {
        this.configureProduct();
        this.configureCommissioning();

        await super.start();
        this.#root.agent.get(LifecycleBehavior).state.online = true;
    }

    override async close() {
        this.#root.agent.get(LifecycleBehavior).state.online = false;
        await super.close();
    }

    override setStorage(storage: StorageContext) {
        super.setStorage(storage);
        this.#commissioningStorage = storage.createContext("Commissioning");
    }

    protected configureCommissioning() {
        if (this.#commissioningStorage === undefined) {
            throw new InternalError("Cannot configure commissioning because commissioning storage is not configured");
        }

        const config = { ...this.#configuration.commissioning };

        if (config.passcode === undefined) {
            config.passcode = this.#commissioningStorage.get("passcode");
        }
        if (config.discriminator === undefined) {
            config.discriminator = this.#commissioningStorage.get("discriminator");
        }

        this.#commissioningConfig = CommissioningOptions.finalConfigurationFor(
            this.#configuration.commissioning,
            this.root,
        );

        this.#certification = new DeviceCertification(
            this.#configuration.certification,
            this.#commissioningConfig.productDescription,
        );

        this.#commissioningStorage.set("passcode", this.#commissioningConfig.passcode);
        this.#commissioningStorage.set("discriminator", this.#commissioningConfig.discriminator);
    }

    protected configureProduct() {
        const bi = this.root.agent.get(BasicInformationBehavior).state;

        const defaultsSet = {} as Record<string, any>;

        function setDefault<T extends keyof typeof bi>(name: T, value: (typeof bi)[T]) {
            if (bi[name] === undefined) {
                bi[name] = value;
                defaultsSet[name] = value;
            }
        }

        setDefault("vendorId", VendorId(0xfff1));
        setDefault("vendorName", "Matter.js Test Vendor");
        setDefault("productId", 0x8000);
        setDefault("productName", "Matter.js Test Product");

        if (Object.keys(defaultsSet).length) {
            logger.warn("Using development values for some BasicInformation attributes:", Logger.dict(defaultsSet));
        }

        setDefault("productLabel", bi.productName);
        setDefault("nodeLabel", bi.productName);
        setDefault("dataModelRevision", 1);
        setDefault("hardwareVersionString", bi.hardwareVersion.toString());
        setDefault("softwareVersionString", bi.softwareVersion.toString());
    }

    protected override createInteractionServer(storage: StorageContext) {
        return new TransactionalInteractionServer(storage, this.subscriptionConfig);
    }
}
