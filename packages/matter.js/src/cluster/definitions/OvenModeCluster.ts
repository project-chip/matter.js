/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace OvenMode {
    export enum ModeTag {
        /**
         * This mode sets the device into baking mode for baking food items.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.1
         */
        Bake = 16384,

        /**
         * This mode sets the device into convection mode which creates an airflow within the device during the cooking
         * duration.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.2
         */
        Convection = 16385,

        /**
         * This mode sets the device into grill mode for grilling food items. This is the same as Broil for many
         * regions.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.3
         */
        Grill = 16386,

        /**
         * This mode sets the device into roast mode for roasting food items.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.4
         */
        Roast = 16387,

        /**
         * This mode sets the device into cleaning mode to clean the internal components of the appliance.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.5
         */
        Clean = 16388,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        ConvectionBake = 16389,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        ConvectionRoast = 16390,

        /**
         * This mode sets the device into a warming mode which begins warming the cavity.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.8
         */
        Warming = 16391,

        /**
         * This mode sets the device into proofing mode which creates an environment ready for proofing.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1.9
         */
        Proofing = 16392,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 8.11.4.1
         */
        Steam = 16393
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x49, name: "OvenMode", revision: 1 });

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for oven devices.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.11
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OvenModeCluster = OvenMode.Cluster;
export const OvenModeCluster = OvenMode.Cluster;
ClusterRegistry.register(OvenMode.Complete);
