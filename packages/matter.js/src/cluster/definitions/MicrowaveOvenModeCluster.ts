/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { FixedAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { ModeBase } from "../../cluster/definitions/ModeBaseCluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace MicrowaveOvenMode {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x5e,
        name: "MicrowaveOvenMode",
        revision: 1,

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.12.4
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOptionStruct, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.12.4
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        }
    })

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for Microwave Oven devices.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.12
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type MicrowaveOvenModeCluster = MicrowaveOvenMode.Cluster;
export const MicrowaveOvenModeCluster = MicrowaveOvenMode.Cluster;
ClusterRegistry.register(MicrowaveOvenMode.Complete);
