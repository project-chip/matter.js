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

export namespace RvcRunMode {
    /**
     * These are optional features supported by RvcRunModeCluster.
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
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        Stuck = 65,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinMissing = 66,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinFull = 67,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankEmpty = 68,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankMissing = 69,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankLidOpen = 70,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        MopCleaningPadMissing = 71,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        BatteryLow = 72
    }

    export enum ModeTag {
        /**
         * The device is not performing any of the main operations of the other modes. However, auxiliary actions, such
         * as seeking the charger or charging, may occur.
         *
         * For example, the device has completed cleaning, successfully or not, on its own or due to a command, or has
         * not been asked to clean after a restart.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.1
         */
        Idle = 16384,

        /**
         * The device was asked to clean so it may be actively running, or paused due to an error, due to a pause
         * command, or for recharging etc. If currently paused and the device can resume it will continue to clean.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.2
         */
        Cleaning = 16385,

        /**
         * The device was asked to create a map of the space it is located in, so it may be actively running, or paused
         * due to an error, due to a pause command, or for recharging etc. If currently paused and the device can
         * resume, it will continue to map.
         *
         * NOTE
         *
         * this mode is intended to be used so the current space can be mapped by the device if the robot has not
         * previously done that, or if the layout has substantially changed, for an optimal subsequent cleaning
         * experience.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.3
         */
        Mapping = 16386
    }

    /**
     * These elements and properties are present in all RvcRunMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x54,
        name: "RvcRunMode",
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
             * @see {@link MatterSpecification.v13.Cluster} § 7.2.6
             */
            supportedModes: FixedAttribute(
                0x0,
                TlvArray(ModeBase.TlvModeOption, { minLength: 2, maxLength: 255 }),
                { default: [] }
            ),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 7.2.6
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
         * This metadata controls which RvcRunModeCluster elements matter.js activates for specific feature
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
     * also defines a namespace for the running modes of these devices.
     *
     * RvcRunModeCluster supports optional features that you can enable with the RvcRunModeCluster.with() factory
     * method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type RvcRunModeCluster = RvcRunMode.Cluster;
export const RvcRunModeCluster = RvcRunMode.Cluster;
ClusterRegistry.register(RvcRunMode.Complete);
