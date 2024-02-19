/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { ClusterBehavior } from "../behavior/cluster/ClusterBehavior.js";
import { BehaviorBacking } from "../behavior/internal/BehaviorBacking.js";
import { ClusterServerBehaviorBacking } from "../behavior/internal/ClusterServerBacking.js";
import { ServerBehaviorBacking } from "../behavior/internal/ServerBacking.js";
import { Attributes, Commands, Events } from "../cluster/Cluster.js";
import { ClusterType } from "../cluster/ClusterType.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../cluster/server/ClusterServerTypes.js";
import { ImplementationError, InternalError, NotImplementedError } from "../common/MatterError.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { Diagnostic } from "../log/Diagnostic.js";
import { EndpointInterface } from "./EndpointInterface.js";
import { Part } from "./Part.js";

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
    readonly #clusterServers = new Map<ClusterId, ClusterServerObj<Attributes, Events>>();

    get part() {
        return this.#part;
    }

    constructor(part: Part) {
        (part as ServerPart)[SERVER] = this;
        this.#part = part;
        this.#name = part.type.name;
    }

    createBacking(type: Behavior.Type): BehaviorBacking {
        let backing: BehaviorBacking;
        if (type.prototype instanceof ClusterBehavior) {
            const cluster = (type as ClusterBehavior.Type).cluster;

            // Sanity check
            if (this.#clusterServers.has(cluster.id)) {
                throw new InternalError(`${this.#part}.${cluster.id} cluster ${cluster.id} initialized multiple times`);
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
        // Unused
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

    close(): void {
        // This is in EndpointInterface but we handle destruction asynchronously so just ignore
    }

    async [Symbol.asyncDispose]() {
        // I believe the cluster servers are effectively disposed when the structure is emptied
        this.#clusterServers.clear();
        delete (this.#part as ServerPart)[SERVER];
        for (const part of this.#part.parts) {
            const server = (part as ServerPart)[SERVER];
            if (server) {
                await server[Symbol.asyncDispose]();
            }
        }
    }

    setStructureChangedCallback(): void {
        // Unused, should move out of EndpointInterface
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
        const diagnostics = ["Part", Diagnostic.strong(this.#part.id), this.#part.diagnosticDict];
        if (this.#part.parts.size) {
            diagnostics.push(
                Diagnostic.list([...this.#part.parts].map(part => PartServer.forPart(part)[Diagnostic.value])),
            );
        }
        return diagnostics as unknown;
    }
}
