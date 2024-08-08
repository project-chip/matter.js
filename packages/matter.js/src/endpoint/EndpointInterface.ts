/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterType } from "../cluster/ClusterType.js";
import { ClusterClientObj } from "../cluster/client/ClusterClientTypes.js";
import { ClusterServer } from "../cluster/server/ClusterServer.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { DeviceTypeId } from "../datatype/DeviceTypeId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";

/**
 * The primary interface for Matter.js endpoint implementations.
 *
 * TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API
 */
export interface EndpointInterface {
    name: string;
    number: EndpointNumber | undefined;
    deviceType: DeviceTypeId;
    getNumber(): EndpointNumber;
    removeFromStructure(): void;
    updatePartsList(): EndpointNumber[];
    getChildEndpoints(): EndpointInterface[];
    determineUniqueID(): string | undefined;
    verifyRequiredClusters(): void;
    close(): void;
    setStructureChangedCallback(callback: () => void): void;

    addClusterServer(server: ClusterServer): void;
    hasClusterServer(cluster: ClusterType): boolean;
    getClusterServer<T extends ClusterType>(cluster: T): ClusterServer<T> | undefined;
    getClusterServerById(clusterId: ClusterId): ClusterServer | undefined;
    getAllClusterServers(): ClusterServer[];

    addClusterClient(client: ClusterClientObj): void;
    getClusterClient<const T extends ClusterType>(cluster: T): ClusterClientObj<T> | undefined;
    getAllClusterClients(): ClusterClientObj[];

    addChildEndpoint(endpoint: EndpointInterface): void;
    getChildEndpoint(id: EndpointNumber): EndpointInterface | undefined;
}
