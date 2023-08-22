/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterClientObj } from "./cluster/client/ClusterClientTypes.js";
import { Attributes, Cluster, Commands, Events } from "./cluster/Cluster.js";
import { ClusterServerObj } from "./cluster/server/ClusterServerTypes.js";
import { EndpointNumber } from "./datatype/EndpointNumber.js";
import { RootEndpoint } from "./device/Device.js";
import { Endpoint } from "./device/Endpoint.js";
import { MdnsBroadcaster } from "./mdns/MdnsBroadcaster.js";
import { MdnsScanner } from "./mdns/MdnsScanner.js";
import { BitSchema, TypeFromPartialBitSchema } from "./schema/BitmapSchema.js";

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
    addRootClusterServer<A extends Attributes, E extends Events>(cluster: ClusterServerObj<A, E>) {
        this.rootEndpoint.addClusterServer(cluster);
    }

    /**
     * Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterServer to get or undefined if not existing
     */
    getRootClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterServerObj<A, E> | undefined {
        return this.rootEndpoint.getClusterServer(cluster);
    }

    /**
     * Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient object to add
     */
    addRootClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: ClusterClientObj<F, A, C, E>,
    ) {
        this.rootEndpoint.addClusterClient(cluster);
    }

    /**
     * Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.
     *
     * @param cluster ClusterClient to get or undefined if not existing
     */
    getRootClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(cluster: Cluster<F, SF, A, C, E>): ClusterClientObj<F, A, C, E> | undefined {
        return this.rootEndpoint.getClusterClient(cluster);
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
    protected getChildEndpoint(endpointId: EndpointNumber): Endpoint | undefined {
        return this.rootEndpoint.getChildEndpoint(endpointId);
    }

    abstract close(): Promise<void>;

    abstract getPort(): number | undefined;

    abstract start(): Promise<void>;

    abstract setMdnsBroadcaster(mdnsBroadcaster: MdnsBroadcaster): void;

    abstract setMdnsScanner(mdnsScanner: MdnsScanner): void;
}
