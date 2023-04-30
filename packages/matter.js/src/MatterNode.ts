/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DEVICE } from "./common/DeviceTypes.js";
import { ClusterServer } from "./protocol/interaction/InteractionServer.js";
import { Device, RootEndpoint } from "./device/Device.js";
import { Endpoint } from "./device/Endpoint.js";
import { ClusterClient } from "./protocol/interaction/InteractionClient.js";
import { BitSchema } from "./schema/BitmapSchema.js";
import { Attributes, Cluster, Commands, Events } from "./cluster/Cluster.js";

export abstract class MatterNode {
    protected readonly rootEndpoint: Device = new RootEndpoint(DEVICE.ROOT, [], 0x00);

    constructor() {
        //TODO
    }

    addRootClusterServer(cluster: ClusterServer<any, any, any, any>) {
        this.rootEndpoint.addClusterServer(cluster);
    }

    getRootClusterServer<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): ClusterServer<F, A, C, E> | undefined {
        return this.rootEndpoint.getClusterServer(cluster);
    }

    addRootClusterClient(cluster: ClusterClient<any, any>) {
        this.rootEndpoint.addClusterClient(cluster);
    }

    getRootClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        cluster: Cluster<F, A, C, E>
    ): ClusterClient<C, A> | undefined {
        return this.rootEndpoint.getClusterClient(cluster);
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
