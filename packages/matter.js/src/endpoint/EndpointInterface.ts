/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attributes, Cluster, Commands, Events } from "../cluster/Cluster.js";
import { ClusterType } from "../cluster/ClusterType.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { ClusterServerObj } from "../cluster/server/ClusterServerTypes.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { BitSchema, TypeFromPartialBitSchema } from "../schema/BitmapSchema.js";

/**
 * The primary interface for Matter.js endpoint implementations.
 *
 * TODO - this interface represents a wad of deferred architectural decisions,
 * a quick way to redirect to generated device cluster management
 */
export interface EndpointInterface {
    id: EndpointNumber | undefined;
    name: string;
    getId(): EndpointNumber;
    removeFromStructure(): void;
    updatePartsList(): EndpointNumber[];
    getChildEndpoints(): EndpointInterface[];
    determineUniqueID(): string | undefined;
    verifyRequiredClusters(): void;
    destroy(): void;
    setStructureChangedCallback(callback: () => void): void;

    addClusterServer<A extends Attributes, E extends Events>(server: ClusterServerObj<A, E>): void;
    hasClusterServer(cluster: ClusterType): boolean;
    getClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(
        cluster: Cluster<F, SF, A, C, E>,
    ): ClusterServerObj<A, E> | undefined;
    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined;
    getAllClusterServers(): ClusterServerObj<Attributes, Events>[];

    addClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        client: ClusterClientObj<F, A, C, E>,
    ): void;
    getClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(
        cluster: Cluster<F, SF, A, C, E>,
    ): ClusterClientObj<F, A, C, E> | undefined;
    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[];

    addChildEndpoint(endpoint: EndpointInterface): void;
    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined;
}
