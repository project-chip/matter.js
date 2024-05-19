/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace EnergyEvseMode {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x9d, name: "EnergyEvseMode", revision: 1 })

    /**
     * This cluster is derived from the Mode Base cluster which also defines a namespace for the operation of EVSE
     * devices.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 9.4
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type EnergyEvseModeCluster = EnergyEvseMode.Cluster;
export const EnergyEvseModeCluster = EnergyEvseMode.Cluster;
ClusterRegistry.register(EnergyEvseMode.Complete);
