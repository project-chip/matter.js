/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Command, TlvNoResponse } from "../Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { ModeBase } from "./ModeBaseCluster.js";
import { TlvUInt8 } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace RvcCleanMode {
    /**
     * These are optional features supported by RvcCleanModeCluster.
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

    export enum ModeChangeStatus {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.3.7.1
         */
        CleaningInProgress = 64
    }

    export enum ModeTag {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.3.7.2
         */
        DeepClean = 16384,

        /**
         * The device’s vacuuming feature is enabled in this mode.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.3.7.2.2
         */
        Vacuum = 16385,

        /**
         * The device’s mopping feature is enabled in this mode.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.3.7.2.3
         */
        Mop = 16386
    }

    /**
     * These elements and properties are present in all RvcCleanMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x55,
        name: "RvcCleanMode",
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
             * @see {@link MatterSpecification.v13.Cluster} § 7.3.6
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.3.6
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
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
         * This metadata controls which RvcCleanModeCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions()
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner devices. It
     * also defines a namespace for the cleaning type for these devices.
     *
     * RvcCleanModeCluster supports optional features that you can enable with the RvcCleanModeCluster.with() factory
     * method.
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
