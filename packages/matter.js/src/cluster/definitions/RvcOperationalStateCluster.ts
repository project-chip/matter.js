/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { Attribute, OptionalAttribute, OptionalCommand, Event, EventPriority, OptionalEvent } from "../Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { OperationalState as OperationalStateNamespace } from "./OperationalStateCluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
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

        attributes: {
            /**
             * Indicates a list of names of different phases that the device can go through for the selected function
             * or mode. The list may not be in sequence order. For example in a washing machine this could include
             * items such as "pre-soak", "rinse", and "spin". These phases are manufacturer specific and may change
             * when a different function or mode is selected.
             *
             * A null value indicates that the device does not present phases during its operation. When this
             * attribute’s value is null, the CurrentPhase attribute shall also be set to null.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.1
             */
            phaseList: Attribute(0x0, TlvNullable(TlvArray(TlvString, { maxLength: 32 }))),

            /**
             * This attribute represents the current phase of operation being performed by the server. This shall be
             * the positional index representing the value from the set provided in the PhaseList Attribute, where the
             * first item in that list is an index of 0. Thus, this attribute shall have a maximum value that is
             * "length(PhaseList) - 1".
             *
             * Null if the PhaseList attribute is null or if the PhaseList attribute is an empty list.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.2
             */
            currentPhase: Attribute(0x1, TlvNullable(TlvUInt8)),

            /**
             * Indicates the estimated time left before the operation is completed, in seconds. Changes to this value
             * shall NOT be reported in a subscription (note the C Quality). A Client implementation may periodically
             * poll this value to ensure alignment of any local rendering of the CountdownTime with the device provided
             * value.
             *
             * A value of 0 means that the operation has completed.
             *
             * When this attribute is null, that represents that there is no time currently defined until operation
             * completion. This may happen, for example, because no operation is in progress or because the completion
             * time is unknown.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.3
             */
            countdownTime: OptionalAttribute(
                0x2,
                TlvNullable(TlvUInt32.bound({ max: 259200 })),
                { omitChanges: true, default: null }
            ),

            /**
             * This attribute describes the set of possible operational states that the device exposes. An operational
             * state is a fundamental device state such as Running or Error. Details of the phase of a device when, for
             * example, in a state of Running are provided by the CurrentPhase attribute.
             *
             * All devices shall, at a minimum, expose the set of states matching the commands that are also supported
             * by the cluster instance, in addition to Error. The set of possible device states are defined in the
             * OperationalStateEnum. A device type requiring implementation of this cluster shall define the set of
             * states that are applicable to that specific device type.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.4
             */
            operationalStateList: Attribute(
                0x3,
                TlvArray(OperationalStateNamespace.TlvOperationalStateStruct),
                { default: [] }
            ),

            /**
             * This attribute specifies the current operational state of a device. This shall be populated with a valid
             * OperationalStateID from the set of values in the OperationalStateList Attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.5
             */
            operationalState: Attribute(0x4, TlvUInt8),

            /**
             * This attribute shall specify the details of any current error condition being experienced on the device
             * when the OperationalState attribute is populated with Error. Please see ErrorStateStruct for general
             * requirements on the population of this attribute.
             *
             * When there is no error detected, this shall have an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.5.6
             */
            operationalError: Attribute(0x5, OperationalStateNamespace.TlvErrorState)
        },

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
        },

        events: {
            /**
             * This event is generated when a reportable error condition is detected. A device that generates this
             * event shall also set the OperationalState attribute to Error, indicating an error condition.
             *
             * This event shall contain the following fields:
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.7.1
             */
            operationalError: Event(0x0, EventPriority.Critical, OperationalStateNamespace.TlvOperationalErrorEvent),

            /**
             * This event is generated when the overall operation ends, successfully or otherwise. For example, the
             * completion of a cleaning operation in a Robot Vacuum Cleaner, or the completion of a wash cycle in a
             * Washing Machine.
             *
             * This event shall contain the following fields:
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.7.2
             */
            operationCompletion: OptionalEvent(
                0x1,
                EventPriority.Info,
                OperationalStateNamespace.TlvOperationCompletionEvent
            )
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
