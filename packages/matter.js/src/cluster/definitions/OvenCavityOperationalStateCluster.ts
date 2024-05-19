/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace OvenCavityOperationalState {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x48, name: "OvenCavityOperationalState", revision: 1 })

    /**
     * This cluster provides an interface for monitoring the operational state of an oven.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.10
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type OvenCavityOperationalStateCluster = OvenCavityOperationalState.Cluster;
export const OvenCavityOperationalStateCluster = OvenCavityOperationalState.Cluster;
ClusterRegistry.register(OvenCavityOperationalState.Complete);
