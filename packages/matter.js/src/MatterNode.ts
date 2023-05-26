/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RootEndpoint } from "./device/Device.js";
import { Endpoint } from "./device/Endpoint.js";
import { BitSchema, TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "./cluster/Cluster.js";
import { ClusterClientObj } from "./cluster/client/ClusterClient.js";
import { ClusterServerObj } from "./cluster/server/ClusterServer.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";

/**
 * Abstract base class that represents a node in the matter ecosystem.
 */
export abstract class MatterNode {
    protected readonly rootEndpoint = new RootEndpoint();

    /**
     * Add a cluster to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterServer object to add
     */
    addRootClusterServer<A extends Attributes, C extends Commands, E extends Events>(cluster: ClusterServerObj<A, C, E>) {
        this.rootEndpoint.addClusterServer(cluster);
    }

    /**
     * Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterServer to get or undefined if not existing
     */
    getRootClusterServer<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>
    ): ClusterServerObj<A, C, E> | undefined {
        return this.rootEndpoint.getClusterServer(cluster);
    }

    /**
     * Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient object to add
     */
    addRootClusterClient<A extends Attributes, C extends Commands, E extends Events>(cluster: ClusterClientObj<A, C, E>) {
        this.rootEndpoint.addClusterClient(cluster);
    }

    /**
     * Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient to get or undefined if not existing
     * @param interactionClient Optional InteractionClient to use for the cluster client. If not provided, the default
     *                          InteractionClient of the root endpoint is used.
     */
    getRootClusterClient<F extends BitSchema, SF extends TypeFromPartialBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, SF, A, C, E>,
        interactionClient?: InteractionClient
    ): ClusterClientObj<A, C, E> | undefined {
        return this.rootEndpoint.getClusterClient(cluster, interactionClient);
    }

    /**
     * Get the root endpoint of the node.
     */
    getRootEndpoint() {
        return this.rootEndpoint;
    }

    /**
     * Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpoint Endpoint to add
     * @protected
     */
    protected addEndpoint(endpoint: Endpoint) {
        this.rootEndpoint.addChildEndpoint(endpoint);
    }

    /**
     * Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param endpointId Endpoint ID of the child endpoint to get
     * @protected
     */
    protected getChildEndpoint(endpointId: number): Endpoint | undefined {
        return this.rootEndpoint.getChildEndpoint(endpointId);
    }

    abstract close(): Promise<void>;
}
