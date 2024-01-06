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
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { MaybePromise } from "../util/Promises.js";

/**
 * The primary interface for Matter.js endpoint implementations.
 *
 * TODO - this is a transitional interface that allows us to have multiple
 * endpoint implementations
 */
export interface EndpointInterface {
    name: string;
    number: EndpointNumber | undefined;
    getNumber(): EndpointNumber;
    removeFromStructure(): Promise<void>;
    updatePartsList(): MaybePromise<EndpointNumber[]>;
    getChildEndpoints(): EndpointInterface[];
    determineUniqueID(): MaybePromise<string | undefined>;
    verifyRequiredClusters(): void;
    destroy(): MaybePromise<void>;
    setStructureChangedCallback(callback: () => Promise<void>): void;
    construction: AsyncConstruction<any>;

    addClusterServer<A extends Attributes, E extends Events>(server: ClusterServerObj<A, E>): MaybePromise<void>;
    hasClusterServer(cluster: ClusterType): boolean;
    hasClusterServerById(clusterId: ClusterId): boolean;
    getClusterServer<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(
        cluster: Cluster<F, SF, A, C, E>,
    ): MaybePromise<ClusterServerObj<A, E> | undefined>;
    getClusterServerById(clusterId: ClusterId): ClusterServerObj<Attributes, Events> | undefined;
    getAllClusterServers(): ClusterServerObj<Attributes, Events>[];

    addClusterClient<F extends BitSchema, A extends Attributes, C extends Commands, E extends Events>(
        client: ClusterClientObj<F, A, C, E>,
    ): MaybePromise<void>;
    getClusterClient<
        F extends BitSchema,
        SF extends TypeFromPartialBitSchema<F>,
        A extends Attributes,
        C extends Commands,
        E extends Events,
    >(
        cluster: Cluster<F, SF, A, C, E>,
    ): MaybePromise<ClusterClientObj<F, A, C, E> | undefined>;
    getAllClusterClients(): ClusterClientObj<any, Attributes, Commands, Events>[];

    addChildEndpoint(endpoint: EndpointInterface): Promise<void>;
    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined;
}
