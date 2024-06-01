/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { OptionalCommand } from "../Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { OperationalState as OperationalStateNamespace } from "./OperationalStateCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace RvcOperationalState {
    /**
     * The values defined herein are applicable to this derived cluster of Operational State only and are additional to
     * the set of values defined in Operational State itself.
     *
     * RVC Pause Compatibility defines the compatibility of the states this cluster defines with the Pause command.
     *
     * ### Table 39. RVC Pause Compatibility
     *
     * RVC Resume Compatibility defines the compatibility of the states this cluster defines with the Resume command.
     *
     * ### Table 40. RVC Resume Compatibility
     *
     * While in the Charging or Docked states, the device shall NOT attempt to resume unless it transitioned to those
     * states while operating and can resume, such as, for example, if it is recharging while in a cleaning cycle.
     * Else, if the operational state is Charging or Docked but there’s no operation to resume or the operation can’t
     * be resumed, the device shall respond with an OperationalCommandResponse command with an ErrorStateID of
     * CommandInvalidInState but take no further action.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.4.4.1
     */
    export enum OperationalState {
        /**
         * The device is en route to the charging dock
         */
        SeekingCharger = 64,

        /**
         * The device is charging
         */
        Charging = 65,

        /**
         * The device is on the dock, not charging
         */
        Docked = 66
    }

    /**
     * The values defined herein are applicable to this derived cluster of Operational State only and are additional to
     * the set of values defined in Operational State itself.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.4.4.2
     */
    export enum ErrorState {
        /**
         * The device has failed to find or reach the charging dock
         */
        FailedToFindChargingDock = 64,

        /**
         * The device is stuck and requires manual intervention
         */
        Stuck = 65,

        /**
         * The device has detected that its dust bin is missing
         */
        DustBinMissing = 66,

        /**
         * The device has detected that its dust bin is full
         */
        DustBinFull = 67,

        /**
         * The device has detected that its water tank is empty
         */
        WaterTankEmpty = 68,

        /**
         * The device has detected that its water tank is missing
         */
        WaterTankMissing = 69,

        /**
         * The device has detected that its water tank lid is open
         */
        WaterTankLidOpen = 70,

        /**
         * The device has detected that its cleaning pad is missing
         */
        MopCleaningPadMissing = 71
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x61,
        name: "RvcOperationalState",
        revision: 2,

        commands: {
            /**
             * On receipt of this command, the device shall start seeking the charging dock, if possible in the current
             * state of the device.
             *
             * If this command is received when already in the SeekingCharger state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but the command shall have no other
             * effect.
             *
             * A device that receives this command in any state which does not allow seeking the charger, such as
             * Charging or Docked, shall respond with an OperationalCommandResponse command with an ErrorStateID of
             * CommandInvalidInState and shall have no other effect.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to SeekingCharger.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 7.4.5.1
             */
            goHome: OptionalCommand(0x80, TlvNoArguments, 0x4, OperationalStateNamespace.TlvOperationalCommandResponse)
        }
    });

    /**
     * This cluster provides an interface for monitoring the operational state of a Robotic Vacuum Cleaner.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.4
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type RvcOperationalStateCluster = RvcOperationalState.Cluster;
export const RvcOperationalStateCluster = RvcOperationalState.Cluster;
ClusterRegistry.register(RvcOperationalState.Complete);
