/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { BehaviorBacking } from "../behavior/BehaviorBacking.js";
import { ClusterBehavior } from "../behavior/cluster/ClusterBehavior.js";
import { ClusterServerBehaviorBacking } from "../behavior/server/ClusterServerBehaviorBacking.js";
import { ServerBehaviorBacking } from "../behavior/server/ServerBehaviorBacking.js";
import { Attributes, Commands, Events } from "../cluster/Cluster.js";
import { ClusterType } from "../cluster/ClusterType.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../cluster/server/ClusterServerTypes.js";
import { ImplementationError, InternalError, NotImplementedError } from "../common/MatterError.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { IdentityService } from "../node/server/IdentityService.js";
import { PartStoreService } from "../node/server/storage/PartStoreService.js";
import { EndpointInterface } from "./EndpointInterface.js";
import { Part } from "./Part.js";

const logger = Logger.get("PartServer");

const SERVER = Symbol("server");
interface ServerPart extends Part {
    [SERVER]?: PartServer;
}

/**
 * PartServer makes a {@link Part} available for remote access as an Endpoint on a Matter network.
 */
export class PartServer implements EndpointInterface {
    #part: Part;
    #name = "";
    #structureChangedCallback?: () => void;
    readonly #clusterServers = new Map<ClusterId, ClusterServerObj<Attributes, Events>>;

    get part() {
        return this.#part;
    }

    constructor(part: Part) {
        (part as ServerPart)[SERVER] = this;

        this.#part = part;

        // We listen to ready continuously because it will recur after factory reset
        part.lifecycle.ready.on(() => this.#logPart());

        if (part.lifecycle.isReady) {
            this.#logPart();
        }

        part.lifecycle.changed.on(() => this.#structureChangedCallback?.());
    }

    createBacking(type: Behavior.Type): BehaviorBacking {
        let backing: BehaviorBacking;
        if (type.prototype instanceof ClusterBehavior) {
            const cluster = (type as ClusterBehavior.Type).cluster;

            // Sanity check
            if (this.#clusterServers.has(cluster.id)) {
                throw new InternalError(
                    `${this.#part}.${cluster.id} cluster ${cluster.id} initialized multiple times`,
                );
            }

            backing = new ClusterServerBehaviorBacking(this, type as ClusterBehavior.Type);
        } else {
            backing = new ServerBehaviorBacking(this.#part, type);
        }
        return backing;
    }

    get number() {
        return this.#part.number;
    }

    get name() {
        return this.#name;
    }

    getNumber(): EndpointNumber {
        if (this.number === undefined) {
            throw new InternalError("Endpoint ID has not been assigned yet");
        }
        return this.number;
    }

    removeFromStructure(): void {
        //this.destroy();
        this.#structureChangedCallback = undefined;
    }

    updatePartsList(): EndpointNumber[] {
        // We don't use this
        return [];
    }

    getChildEndpoints(): EndpointInterface[] {
        if (this.#part.hasParts) {
            const parts = this.#part.parts;
            return [...parts].map(part => PartServer.forPart(part));
        }
        return [];
    }

    determineUniqueID(): string | undefined {
        return this.#part.id;
    }

    verifyRequiredClusters(): void {
        this.#part.behaviors.validateRequirements(this.#part.type.requirements.server?.mandatory);
    }

    destroy(): void {
        // This is in EndpointInterface but we handle destruction asynchronously so just ignore
    }

    async [Symbol.asyncDispose]() {
        await this.#part[Symbol.asyncDispose]();
    }

    setStructureChangedCallback(callback: () => void): void {
        this.#structureChangedCallback = callback;
    }

    addClusterServer<A extends Attributes, E extends Events>(server: ClusterServerObj<A, E>): void {
        this.#clusterServers.set(server.id, server);
    }

    hasClusterServer(cluster: ClusterType): boolean {
        return this.#clusterServers.has(cluster.id);
    }

    getClusterServer<const T extends ClusterType>(
        cluster: T,
    ): ClusterServerObj<T["attributes"], T["events"]> | undefined {
        const server = this.#clusterServers.get(cluster.id);
        if (server !== undefined) {
            return server as unknown as ClusterServerObj<T["attributes"], T["events"]>;
        }
    }

    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined {
        return this.#clusterServers.get(clusterId);
    }

    getAllClusterServers(): ClusterServerObj<Attributes, Events>[] {
        return [...this.#clusterServers.values()];
    }

    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[] {
        // TODO -- no binding support yet (or client behaviors)
        return [];
    }

    addClusterClient(): void {
        throw new NotImplementedError("Cluster clients unavailable on PartServer");
    }

    getClusterClient(): any {
        throw new NotImplementedError("Cluster clients unavailable on PartServer");
    }

    addChildEndpoint(endpoint: EndpointInterface): void {
        if (endpoint instanceof PartServer) {
            this.#part.parts.add(endpoint.#part);
        } else {
            throw new ImplementationError("Attempt to add unmanaged endpoint as child of Part");
        }
    }

    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined {
        if (!this.#part.hasParts) {
            return;
        }
        for (const part of this.#part.parts) {
            if (part.number === id) {
                return PartServer.forPart(part);
            }
        }
    }

    /**
     * Retrieve the server for a part.
     */
    static forPart(part: Part) {
        let server = (part as ServerPart)[SERVER];
        if (!server) {
            server = (part as ServerPart)[SERVER] = new PartServer(part);
        }
        return server;
    }

    /**
     * Hierarchical diagnostics of part and children.
     */
    get [Diagnostic.value]() {
        const diagnostics = [ "Part", Diagnostic.strong(this.#part.id), this.#diagnosticDict ];
        if (this.#part.parts.size) {
            diagnostics.push(Diagnostic.list(
                [ ...this.#part.parts ].map(part => PartServer.forPart(part)[Diagnostic.value])
            ));
        }
        return diagnostics as unknown;
    }

    /**
     * Log details of fully initialized part.
     */
    #logPart() {
        logger.info(
            Diagnostic.strong(this.#part),
            "ready",
            this.#diagnosticDict,
        );
    }

    get #diagnosticDict() {
        const isNew = this.#part.owner
            .serviceFor(PartStoreService)
            .storeForPart(this.#part)
            .isNew;

        const port = this.#part.owner
            .serviceFor(IdentityService)
            .port;

        return Diagnostic.dict({
            "endpoint#": this.#part.number,
            type: `${this.#part.type.name} (0x${this.#part.type.deviceType.toString(16)})`,
            port,
            "known": !isNew,
            "behaviors": this.#part.behaviors,
        })
    }
}
