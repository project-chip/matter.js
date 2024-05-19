/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace RefrigeratorAlarm {
    /**
     * These are optional features supported by RefrigeratorAlarmCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.8.4
     */
    export enum Feature {
        /**
         * Reset
         *
         * Supports the ability to reset alarms
         */
        Reset = "Reset"
    }

    /**
     * These elements and properties are present in all RefrigeratorAlarm clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x57,
        name: "RefrigeratorAlarm",
        revision: 1,

        features: {
            /**
             * Reset
             *
             * Supports the ability to reset alarms
             */
            reset: BitFlag(0)
        },

        /**
         * This metadata controls which RefrigeratorAlarmCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { reset: true }, component: false })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ ...Base });

    /**
     * This cluster is a derived cluster of Alarm Base cluster.
     *
     * RefrigeratorAlarmCluster supports optional features that you can enable with the RefrigeratorAlarmCluster.with()
     * factory method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.8
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type RefrigeratorAlarmCluster = RefrigeratorAlarm.Cluster;
export const RefrigeratorAlarmCluster = RefrigeratorAlarm.Cluster;
ClusterRegistry.register(RefrigeratorAlarm.Complete);
