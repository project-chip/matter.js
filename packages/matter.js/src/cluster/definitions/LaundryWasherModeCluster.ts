/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, WritableAttribute, Command, TlvNoResponse } from "../Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { ModeBase } from "./ModeBaseCluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace LaundryWasherMode {
    /**
     * These are optional features supported by LaundryWasherModeCluster.
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
         * The normal regime of operation.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.5.6.1.1
         */
        Normal = 16384,

        /**
         * Mode optimized for washing delicate garments.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.5.6.1.2
         */
        Delicate = 16385,

        /**
         * Mode optimized for heavy washing.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.5.6.1.3
         */
        Heavy = 16386,

        /**
         * Mode optimized for stain removal on white fabrics.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.5.6.1.4
         */
        Whites = 16387
    }

    /**
     * These elements and properties are present in all LaundryWasherMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x51,
        name: "LaundryWasherMode",
        revision: 2,

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
             * @see {@link MatterSpecification.v13.Cluster} § 8.5.5
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.5.5
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true }),

            /**
             * If this attribute is supported, the device SHOULD initially set this to one of the supported modes that
             * has the Normal tag associated with it. See the Mode Base cluster specification for full details about
             * the StartUpMode attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 8.5.5.1
             */
            startUpMode: WritableAttribute(0x2, TlvUInt8, { persistent: true }),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.5.5
             */
            onMode: WritableAttribute(0x3, TlvUInt8, { persistent: true })
        },

        commands: {
            /**
             * This command is used to change device modes.
             *
             * On receipt of this command the device shall respond with a ChangeToModeResponse command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.1
             */
            changeToMode: Command(0x0, ModeBase.TlvChangeToModeRequest, 0x0, TlvNoResponse)
        },

        /**
         * This metadata controls which LaundryWasherModeCluster elements matter.js activates for specific feature
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
     * values for laundry washer as well as laundry dryer devices.
     *
     * LaundryWasherModeCluster supports optional features that you can enable with the LaundryWasherModeCluster.with()
     * factory method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.5
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type LaundryWasherModeCluster = LaundryWasherMode.Cluster;
export const LaundryWasherModeCluster = LaundryWasherMode.Cluster;
ClusterRegistry.register(LaundryWasherMode.Complete);
