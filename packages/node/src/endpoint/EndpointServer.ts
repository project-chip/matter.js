/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { ClusterServerBacking } from "#behavior/internal/ClusterServerBacking.js";
import { ServerBehaviorBacking } from "#behavior/internal/ServerBehaviorBacking.js";
import { ImplementationError, InternalError, NotImplementedError } from "#general";
import { ClusterClientObj, ClusterServer, EndpointInterface } from "#protocol";
import { ClusterId, ClusterType, EndpointNumber } from "#types";
import { Endpoint } from "./Endpoint.js";

const SERVER = Symbol("server");
interface ServerEndpoint extends Endpoint {
    [SERVER]?: EndpointServer;
}

/**
 * EndpointServer makes an {@link Endpoint} available for remote access as an Endpoint on a Matter network.
 */
export class EndpointServer implements EndpointInterface {
    #endpoint: Endpoint;
    #name = "";
    readonly #clusterServers = new Map<ClusterId, ClusterServer>();

    get endpoint() {
        return this.#endpoint;
    }

    get deviceType() {
        return this.#endpoint.type.deviceType;
    }

    constructor(endpoint: Endpoint) {
        (endpoint as ServerEndpoint)[SERVER] = this;
        this.#endpoint = endpoint;
        this.#name = endpoint.type.name;
    }

    createBacking(type: Behavior.Type): BehaviorBacking {
        let backing: BehaviorBacking;
        if (type.prototype instanceof ClusterBehavior) {
            const cluster = (type as ClusterBehavior.Type).cluster;

            // Sanity check
            if (this.#clusterServers.has(cluster.id)) {
                throw new InternalError(`${this.#endpoint}.${cluster.id} initialized multiple times`);
            }

            backing = new ClusterServerBacking(this, type as ClusterBehavior.Type);
        } else {
            backing = new ServerBehaviorBacking(this.#endpoint, type, this.#endpoint.behaviors.optionsFor(type));
        }
        return backing;
    }

    get number() {
        return this.#endpoint.number;
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
        if (this.#endpoint.hasParts) {
            const parts = this.#endpoint.parts;
            return [...parts].map(endpoint => EndpointServer.forEndpoint(endpoint));
        }
        return [];
    }

    determineUniqueID(): string | undefined {
        return this.#endpoint.id;
    }

    verifyRequiredClusters(): void {
        this.#endpoint.behaviors.validateRequirements(this.#endpoint.type.requirements.server?.mandatory);
    }

    close(): void {
        // This is in EndpointInterface but we handle destruction asynchronously so just ignore
    }

    async [Symbol.asyncDispose]() {
        // I believe the cluster servers are effectively disposed when the structure is emptied
        this.#clusterServers.clear();
        delete (this.#endpoint as ServerEndpoint)[SERVER];
        for (const endpoint of this.#endpoint.parts) {
            const server = (endpoint as ServerEndpoint)[SERVER];
            if (server) {
                await server[Symbol.asyncDispose]();
            }
        }
    }

    setStructureChangedCallback(): void {
        // Unused, should move out of EndpointInterface
    }

    addClusterServer(server: ClusterServer): void {
        this.#clusterServers.set(server.id, server);
    }

    hasClusterServer(cluster: ClusterType): boolean {
        return this.#clusterServers.has(cluster.id);
    }

    getClusterServer(cluster: ClusterType): ClusterServer | undefined {
        const server = this.#clusterServers.get(cluster.id);
        if (server !== undefined) {
            return server;
        }
    }

    getClusterServerById(clusterId: ClusterId): ClusterServer | undefined {
        return this.#clusterServers.get(clusterId);
    }

    getAllClusterServers(): ClusterServer[] {
        return [...this.#clusterServers.values()];
    }

    getAllClusterClients(): ClusterClientObj[] {
        // TODO -- no binding support yet (or client behaviors)
        return [];
    }

    addClusterClient(): void {
        throw new NotImplementedError("Cluster clients unavailable on EndpointServer");
    }

    getClusterClient(): any {
        throw new NotImplementedError("Cluster clients unavailable on EndpointServer");
    }

    addChildEndpoint(endpoint: EndpointInterface): void {
        if (endpoint instanceof EndpointServer) {
            this.#endpoint.parts.add(endpoint.#endpoint);
        } else {
            throw new ImplementationError("Attempt to add unmanaged endpoint as child of Endpoint");
        }
    }

    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined {
        if (!this.#endpoint.hasParts) {
            return;
        }
        for (const endpoint of this.#endpoint.parts) {
            if (endpoint.number === id) {
                return EndpointServer.forEndpoint(endpoint);
            }
        }
    }

    /**
     * Retrieve the server for an endpoint.
     */
    static forEndpoint(endpoint: Endpoint) {
        let server = (endpoint as ServerEndpoint)[SERVER];
        if (!server) {
            server = (endpoint as ServerEndpoint)[SERVER] = new EndpointServer(endpoint);
        }
        return server;
    }
}
