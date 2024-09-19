/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    Attribute,
    OptionalAttribute,
    OptionalCommand,
    TlvNoResponse,
    Event,
    EventPriority,
    OptionalEvent
} from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvString } from "../tlv/TlvString.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvUInt8, TlvUInt32 } from "../tlv/TlvNumber.js";
import { OperationalState } from "./operational-state.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace OvenCavityOperationalState {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x48,
        name: "OvenCavityOperationalState",
        revision: 1,

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
            operationalStateList: Attribute(0x3, TlvArray(OperationalState.TlvOperationalStateStruct), { default: [] }),

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
            operationalError: Attribute(0x5, OperationalState.TlvErrorState)
        },

        commands: {
            /**
             * This command shall be supported if the device supports remotely pausing the operation. If this command
             * is supported, the Resume command shall also be supported.
             *
             * On receipt of this command, the device shall pause its operation if it is possible based on the current
             * function of the server. For example, if it is at a point where it is safe to do so and/or permitted, but
             * can be restarted from the point at which pause occurred.
             *
             * If this command is received when already in the Paused state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but take no further action.
             *
             * A device that receives this command in any state which is not Pause-compatible shall respond
             *
             * with an OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState and shall take
             * no further action.
             *
             * States are defined as Pause-compatible as follows:
             *
             *   • For states defined in this cluster specification, in Table 3, “Pause Compatibility”.
             *
             *   • For states defined by derived cluster specifications, in the corresponding specifications.
             *
             *   • For manufacturer-specific states, by the manufacturer.
             *
             * A device that is unable to honor the Pause command for whatever reason shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no further
             * action.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to Paused.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * The following table defines the compatibility of this cluster’s states with the Pause command.
             *
             * ### Table 3. Pause Compatibility
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.6.1
             */
            pause: OptionalCommand(0x0, TlvNoArguments, 0x0, TlvNoResponse),

            /**
             * This command shall be supported if the device supports remotely stopping the operation.
             *
             * On receipt of this command, the device shall stop its operation if it is at a position where it is safe
             * to do so and/or permitted. Restart of the device following the receipt of the Stop command shall require
             * attended operation unless remote start is allowed by the device type and any jurisdiction governing
             * remote operation of the device.
             *
             * If this command is received when already in the Stopped state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but take no further action.
             *
             * A device that is unable to honor the Stop command for whatever reason shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no further
             * action.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to Stopped.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.6.2
             */
            stop: OptionalCommand(0x1, TlvNoArguments, 0x1, TlvNoResponse),

            /**
             * This command shall be supported if the device supports remotely starting the operation. If this command
             * is supported, the 'Stop command shall also be supported.
             *
             * On receipt of this command, the device shall start its operation if it is safe to do so and the device
             * is in an operational state from which it can be started. There may be either regulatory or
             * manufacturer-imposed safety and security requirements that first necessitate some specific action at the
             * device before a Start command can be honored. In such instances, a device shall respond with a status
             * code of CommandInvalidInState if a Start command is received prior to the required on- device action.
             *
             * If this command is received when already in the Running state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but take no further action.
             *
             * A device that is unable to honor the Start command for whatever reason shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of UnableToStartOrResume but take no further
             * action.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to Running.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.6.3
             */
            start: OptionalCommand(0x2, TlvNoArguments, 0x2, TlvNoResponse),

            /**
             * This command shall be supported if the device supports remotely resuming the operation. If this command
             * is supported, the Pause command shall also be supported.
             *
             * On receipt of this command, the device shall resume its operation from the point it was at when it
             * received the Pause command, or from the point when it was paused by means outside of this cluster (for
             * example by manual button press).
             *
             * If this command is received when already in the Running state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but take no further action.
             *
             * A device that receives this command in any state which is not Resume-compatible shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState and shall take no
             * further action.
             *
             * States are defined as Resume-compatible as follows:
             *
             *   • For states defined in this cluster specification, in Table 4, “Resume Compatibility”.
             *
             *   • For states defined by derived cluster specifications, in the corresponding specifications.
             *
             *   • For manufacturer-specific states, by the manufacturer.
             *
             * The following table defines the compatibility of this cluster’s states with the Resume command.
             *
             * ### Table 4. Resume Compatibility
             *
             * A device that is unable to honor the Resume command for any other reason shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of UnableToStartOrResume but take no further
             * action.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to the most recent non-Error operational state prior to
             *     entering the Paused state.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.6.4
             */
            resume: OptionalCommand(0x3, TlvNoArguments, 0x3, TlvNoResponse)
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
            operationalError: Event(0x0, EventPriority.Critical, OperationalState.TlvOperationalErrorEvent),

            /**
             * This event is generated when the overall operation ends, successfully or otherwise. For example, the
             * completion of a cleaning operation in a Robot Vacuum Cleaner, or the completion of a wash cycle in a
             * Washing Machine.
             *
             * This event shall contain the following fields:
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.14.7.2
             */
            operationCompletion: OptionalEvent(0x1, EventPriority.Info, OperationalState.TlvOperationCompletionEvent)
        }
    });

    /**
     * This cluster provides an interface for monitoring the operational state of an oven.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.10
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OvenCavityOperationalStateCluster = OvenCavityOperationalState.Cluster;
export const OvenCavityOperationalStateCluster = OvenCavityOperationalState.Cluster;
ClusterRegistry.register(OvenCavityOperationalState.Complete);
