/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { ImplementationError, InternalError, NotImplementedError } from "#general";
import { ClusterClientObj, ClusterServer, EndpointInterface } from "#protocol";
import { ClusterId, ClusterType, EndpointNumber } from "#types";
import { Endpoint } from "../Endpoint.js";
import { BehaviorServer } from "./BehaviorServer.js";

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
    readonly #clusterServers = new Map<ClusterId, BehaviorServer>();

    get endpoint() {
        return this.#endpoint;
    }

    get deviceType() {
        return this.#endpoint.type.deviceType;
    }

    constructor(endpoint: Endpoint) {
        // Sanity checks
        if ((endpoint as ServerEndpoint)[SERVER] !== undefined) {
            throw new InternalError(`Server creation attempted on ${endpoint} that is already served`);
        }
        if (!endpoint.lifecycle.isReady) {
            throw new InternalError(`Server creation attempted before ${endpoint} is ready`);
        }

        this.#endpoint = endpoint;
        this.#name = endpoint.type.name;

        (endpoint as ServerEndpoint)[SERVER] = this;

        for (const type of Object.values(endpoint.behaviors.supported)) {
            if (!(type.prototype instanceof ClusterBehavior)) {
                continue;
            }

            this.#serve(type);
        }
    }

    get number() {
        return this.#endpoint.number;
    }

    get name() {
        return this.#name;
    }

    updateServers() {
        for (const type of Object.values(this.#endpoint.behaviors.supported)) {
            if (!(type.prototype instanceof ClusterBehavior)) {
                continue;
            }

            if (this.#clusterServers.has((type as ClusterBehavior.Type).cluster?.id)) {
                continue;
            }

            this.#serve(type);
        }
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
            return [...parts]
                .filter(endpoint => endpoint.lifecycle.isReady)
                .map(endpoint => EndpointServer.forEndpoint(endpoint));
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
        for (const server of this.#clusterServers.values()) {
            server.close();
        }
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

    addClusterServer(server: BehaviorServer): void {
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
     * Install a ClusterServer for a behavior.
     */
    #serve(type: Behavior.Type) {
        // Sanity checks
        const { cluster } = type as ClusterBehavior.Type;
        if (cluster === undefined) {
            throw new InternalError(`Cannot serve ${this.endpoint} behavior ${type.id}} because it is not a cluster`);
        }
        if (this.#clusterServers.has(cluster.id)) {
            throw new ImplementationError(`Duplicate behaviors for ${this.endpoint} define cluster ${cluster.id}`);
        }

        // Create ClusterServer
        const clusterServer = BehaviorServer(this, type as ClusterBehavior.Type);
        this.#clusterServers.set(cluster.id, clusterServer);
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
