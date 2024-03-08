/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace LowPower {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x508,
        name: "LowPower",
        revision: 1,

        commands: {
            /**
             * This command shall put the device into low power mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
             */
            sleep: Command(0x0, TlvNoArguments, 0x0, TlvNoResponse)
        }
    })

    /**
     * Low Power
     *
     * This cluster provides an interface for managing low power mode on a device.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type LowPowerCluster = LowPower.Cluster;
export const LowPowerCluster = LowPower.Cluster;
ClusterRegistry.register(LowPower.Complete);
