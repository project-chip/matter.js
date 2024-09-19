/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { Thermostat } from "#clusters/thermostat";

export namespace ThermostatInterface {
    export interface Base {
        /**
         * Upon receipt, the attributes for the indicated setpoint(s) shall have the amount specified in the Amount
         * field added to them. If the resulting value is outside the limits imposed by MinCoolSetpointLimit,
         * MaxCoolSetpointLimit, MinHeatSetpointLimit and MaxHeatSetpointLimit, the value is clamped to those limits.
         * This is not considered an error condition.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.1
         */
        setpointRaiseLower(request: Thermostat.SetpointRaiseLowerRequest): MaybePromise;
    }

    export interface ScheduleConfiguration {
        /**
         * Upon receipt, the weekly schedule for updating setpoints shall be stored in the thermostat and SHOULD begin
         * at the time of receipt. A status code shall be sent in response.
         *
         * When a command is received that requires a total number of transitions greater than the device supports, the
         * status of the response shall be INSUFFICIENT_SPACE.
         *
         * When any of the setpoints sent in the sequence is out of range (AbsMin/MaxSetPointLimit), or when the Mode
         * for Sequence field includes a mode not supported by the device, the status of the response shall be
         * CONSTRAINT_ERROR and no setpoints from the entire sequence SHOULD be used.
         *
         * When an overlapping transition is detected, the status of the response shall be FAILURE.
         *
         * When a device which does not support multiple days in a command receives a command with more than one bit
         * set in the DayOfWeekForSequence field, or when a device which does not support multiple modes in a command
         * receives a command with more than one bit set in the ModeForSequence field, or when the contents of the
         * Transitions field does not agree with NumberOfTransitionsForSequence, DayOfWeekForSequence or
         * ModeForSequence, the status of the response shall be INVALID_COMMAND.
         *
         * When the transitions could be added successfully, the status of the response shall be SUCCESS.
         *
         * The set weekly schedule command is used to update the thermostat weekly setpoint schedule from a management
         * system. If the thermostat already has a weekly setpoint schedule programmed, then it SHOULD replace each
         * daily setpoint set as it receives the updates from the management system. For example, if the thermostat has
         * 4 setpoints for every day of the week and is sent a Set Weekly Schedule command with one setpoint for
         * Saturday then the thermostat SHOULD remove all 4 setpoints for Saturday and replace those with the updated
         * setpoint but leave all other days unchanged. If the schedule is larger than what fits in one frame or
         * contains more than 10 transitions, the schedule shall then be sent using multiple Set Weekly Schedule
         * Commands.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4
         */
        setWeeklySchedule(request: Thermostat.SetWeeklyScheduleRequest): MaybePromise;

        /**
         * Upon receipt, the unit SHOULD send in return the Get Weekly Schedule Response command. The Days to Return
         * and Mode to Return fields are defined as bitmask for the flexibility to support multiple days and multiple
         * modes within one command. If thermostat cannot handle incoming command with multiple days and/or multiple
         * modes within one command, it shall send default response of INVALID_COMMAND in return.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5
         */
        getWeeklySchedule(request: Thermostat.GetWeeklyScheduleRequest): MaybePromise<Thermostat.GetWeeklyScheduleResponse>;

        /**
         * This command is used to clear the weekly schedule. The Clear weekly schedule has no payload.
         *
         * Upon receipt, all transitions currently stored shall be cleared and a default response of SUCCESS shall be
         * sent in response. There are no error responses to this command.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.7
         */
        clearWeeklySchedule(): MaybePromise;
    }
}

export type ThermostatInterface = {
    components: [
        { flags: {}, methods: ThermostatInterface.Base },
        { flags: { scheduleConfiguration: true }, methods: ThermostatInterface.ScheduleConfiguration }
    ]
};
