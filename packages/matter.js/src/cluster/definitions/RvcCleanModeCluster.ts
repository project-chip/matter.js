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

export namespace RvcCleanMode {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x55,
        name: "RvcCleanMode",
        revision: 2,

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.3.6
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOptionStruct, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.3.6
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        }
    })

    /**
     * This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner devices. It
     * also defines a namespace for the cleaning type for these devices.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.3
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type RvcCleanModeCluster = RvcCleanMode.Cluster;
export const RvcCleanModeCluster = RvcCleanMode.Cluster;
ClusterRegistry.register(RvcCleanMode.Complete);
