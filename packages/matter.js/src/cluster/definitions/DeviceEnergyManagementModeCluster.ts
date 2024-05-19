/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace DeviceEnergyManagementMode {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x9f, name: "DeviceEnergyManagementMode", revision: 1 })

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for Device Energy Management devices.
     *
     * NOTE Support for Device Energy Management Mode cluster is provisional.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 9.6
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type DeviceEnergyManagementModeCluster = DeviceEnergyManagementMode.Cluster;
export const DeviceEnergyManagementModeCluster = DeviceEnergyManagementMode.Cluster;
ClusterRegistry.register(DeviceEnergyManagementMode.Complete);
