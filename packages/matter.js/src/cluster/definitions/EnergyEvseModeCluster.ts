/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace EnergyEvseMode {
    export enum ModeTag {
        /**
         * While in this mode, the EVSE needs to be sent an EnableEvseCharging or EnableEvseDischarging command to make
         * the EVSE start charging or discharging.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 9.4.4.1.1
         */
        Manual = 16384,

        /**
         * While in this mode, the EVSE will attempt to automatically start charging based on the user’s charging
         * targets and a Time of Use tariff to charge at the cheapest times of the day.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 9.4.4.1.2
         */
        TimeOfUse = 16385,

        /**
         * While in this mode, the EVSE will attempt to automatically start charging based on available excess solar PV
         * generation, limiting the charging power to avoid imported energy from the grid.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 9.4.4.1.3
         */
        SolarCharging = 16386
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({ id: 0x9d, name: "EnergyEvseMode", revision: 1 });

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
