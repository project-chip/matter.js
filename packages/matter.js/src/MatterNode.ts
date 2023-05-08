/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeviceTypes } from "./device/DeviceTypes.js";
import { RootEndpoint } from "./device/Device.js";
import { Endpoint } from "./device/Endpoint.js";
import { BitSchema } from "./schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "./cluster/Cluster.js";
import { ClusterClientObj } from "./cluster/client/ClusterClient.js";
import { ClusterServerObj } from "./cluster/server/ClusterServer.js";
import { InteractionClient } from "./protocol/interaction/InteractionClient.js";

export abstract class MatterNode {
    protected readonly rootEndpoint = new RootEndpoint(DeviceTypes.ROOT, [], 0x00);

    constructor() {
        //TODO
    }

    addRootClusterServer<A extends Attributes>(cluster: ClusterServerObj<A>) {
        this.rootEndpoint.addClusterServer(cluster);
    }

    getRootClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): ClusterServerObj<A> | undefined {
        return this.rootEndpoint.getClusterServer(cluster);
    }

    addRootClusterClient<A extends Attributes, C extends Commands>(cluster: ClusterClientObj<A, C>) {
        this.rootEndpoint.addClusterClient(cluster);
    }

    getRootClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>,
        interactionClient?: InteractionClient
    ): ClusterClientObj<A, C> | undefined {
        return this.rootEndpoint.getClusterClient(cluster, interactionClient);
    }

    getRootEndpoint() {
        return this.rootEndpoint;
    }

    protected addEndpoint(endpoint: Endpoint) {
        this.rootEndpoint.addChildEndpoint(endpoint);
    }

    protected getChildEndpoint(endpointId: number): Endpoint | undefined {
        return this.rootEndpoint.getChildEndpoint(endpointId);
    }

    abstract close(): Promise<void>;
}
