/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace DishwasherAlarm {
    /**
     * @see {@link MatterSpecification.v13.Cluster} § 8.4.4.1
     */
    export const Alarm = {
        /**
         * Water inflow is abnormal
         */
        inflowError: BitFlag(0),

        /**
         * Water draining is abnormal
         */
        drainError: BitFlag(1),

        /**
         * Door or door lock is abnormal
         */
        doorError: BitFlag(2),

        /**
         * Unable to reach normal temperature
         */
        tempTooLow: BitFlag(3),

        /**
         * Temperature is too high
         */
        tempTooHigh: BitFlag(4),

        /**
         * Water level is abnormal
         */
        waterLevelError: BitFlag(5)
    };

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x5d, name: "DishwasherAlarm", revision: 1 });

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
