/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace LowPower {
    /**
     * Low Power
     *
     * This cluster provides an interface for managing low power mode on a device.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
     */
    export const Cluster = CreateCluster({
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
}

export type LowPowerCluster = typeof LowPower.Cluster;
export const LowPowerCluster = LowPower.Cluster;
