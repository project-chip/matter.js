/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute } from "../Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { ModeBase } from "./ModeBaseCluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace MicrowaveOvenMode {
    /**
     * These are optional features supported by MicrowaveOvenModeCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.4
     */
    export enum Feature {
        /**
         * OnOff (DEPONOFF)
         *
         * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the same
         * endpoint. See OnMode for more information.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
         */
        OnOff = "OnOff"
    }

    export enum ModeTag {
        /**
         * The normal mode of operation
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.12.6.1
         */
        Normal = 16384,

        /**
         * A mode optimized for defrosting foods
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.12.6.1
         */
        Defrost = 16385
    }

    /**
     * These elements and properties are present in all MicrowaveOvenMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x5e,
        name: "MicrowaveOvenMode",
        revision: 1,

        features: {
            /**
             * OnOff
             *
             * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the
             * same endpoint. See OnMode for more information.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
             */
            onOff: BitFlag(0)
        },

        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.12.4
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.12.4
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        },

        /**
         * This metadata controls which MicrowaveOvenModeCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions()
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for Microwave Oven devices.
     *
     * MicrowaveOvenModeCluster supports optional features that you can enable with the MicrowaveOvenModeCluster.with()
     * factory method.
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
