/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace DishwasherAlarm {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x5d, name: "DishwasherAlarm", revision: 1 })

    /**
     * This cluster is a derived cluster of the Alarm Base cluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.4
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type DishwasherAlarmCluster = DishwasherAlarm.Cluster;
export const DishwasherAlarmCluster = DishwasherAlarm.Cluster;
ClusterRegistry.register(DishwasherAlarm.Complete);
