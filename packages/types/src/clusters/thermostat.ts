/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import {
    Attribute,
    OptionalFixedAttribute,
    OptionalAttribute,
    WritableAttribute,
    OptionalWritableAttribute,
    FixedAttribute,
    Command,
    TlvNoResponse
} from "../cluster/Cluster.js";
import { OccupancySensing } from "./occupancy-sensing.js";
import { TlvUInt8, TlvBitmap, TlvInt16, TlvInt8, TlvEnum, TlvUInt16, TlvEpochS, TlvUInt32 } from "../tlv/TlvNumber.js";
import { BitsFromPartial, BitFlag, BitField } from "../schema/BitmapSchema.js";
import { AccessLevel } from "#model";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvNoArguments } from "../tlv/TlvNoArguments.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace Thermostat {
    /**
     * These are optional features supported by ThermostatCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.4
     */
    export enum Feature {
        /**
         * Heating (HEAT)
         *
         * Thermostat is capable of managing a heating device
         */
        Heating = "Heating",

        /**
         * Cooling (COOL)
         *
         * Thermostat is capable of managing a cooling device
         */
        Cooling = "Cooling",

        /**
         * Occupancy (OCC)
         *
         * Supports Occupied and Unoccupied setpoints
         */
        Occupancy = "Occupancy",

        /**
         * ScheduleConfiguration (SCH)
         *
         * Supports remote configuration of a weekly schedule of setpoint transitions
         */
        ScheduleConfiguration = "ScheduleConfiguration",

        /**
         * Setback (SB)
         *
         * Supports configurable setback (or span)
         */
        Setback = "Setback",

        /**
         * AutoMode (AUTO)
         *
         * Supports a System Mode of Auto
         */
        AutoMode = "AutoMode",

        /**
         * LocalTemperatureNotExposed (LTNE)
         *
         * This feature indicates that the Calculated Local Temperature used internally is unavailable to report
         * externally, for example due to the temperature control being done by a separate subsystem which does not
         * offer a view into the currently measured temperature, but allows setpoints to be provided.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.4.1
         */
        LocalTemperatureNotExposed = "LocalTemperatureNotExposed"
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.22
     */
    export enum ThermostatRunningMode {
        /**
         * The Thermostat does not generate demand for Cooling or Heating
         */
        Off = 0,

        /**
         * Demand is only generated for Cooling
         */
        Cool = 3,

        /**
         * Demand is only generated for Heating
         */
        Heat = 4
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.20
     */
    export enum StartOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.10
     */
    export const ScheduleDayOfWeek = {
        /**
         * Sunday
         */
        sunday: BitFlag(0),

        /**
         * Monday
         */
        monday: BitFlag(1),

        /**
         * Tuesday
         */
        tuesday: BitFlag(2),

        /**
         * Wednesday
         */
        wednesday: BitFlag(3),

        /**
         * Thursday
         */
        thursday: BitFlag(4),

        /**
         * Friday
         */
        friday: BitFlag(5),

        /**
         * Saturday
         */
        saturday: BitFlag(6),

        /**
         * Away or Vacation
         */
        away: BitFlag(7)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.11
     */
    export const ScheduleMode = {
        /**
         * Adjust Heat Setpoint
         */
        heatSetpointPresent: BitFlag(0),

        /**
         * Adjust Cool Setpoint
         */
        coolSetpointPresent: BitFlag(1)
    };

    /**
     * This represents a single transition in a Thermostat schedule
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.24
     */
    export const TlvWeeklyScheduleTransition = TlvObject({
        /**
         * This field shall represent the start time of the schedule transition during the associated day. The time
         * will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am
         * will be represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since
         * midnight.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.24.1
         */
        transitionTime: TlvField(0, TlvUInt16.bound({ max: 1439 })),

        /**
         * This field shall represent the heat setpoint to be applied at this associated transition start time.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.24.2
         */
        heatSetpoint: TlvField(1, TlvNullable(TlvInt16)),

        /**
         * This field shall represent the cool setpoint to be applied at this associated transition start time.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.24.3
         */
        coolSetpoint: TlvField(2, TlvNullable(TlvInt16))
    });

    /**
     * This represents a single transition in a Thermostat schedule
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.24
     */
    export interface WeeklyScheduleTransition extends TypeFromSchema<typeof TlvWeeklyScheduleTransition> {}

    /**
     * Input to the Thermostat setWeeklySchedule command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4
     */
    export const TlvSetWeeklyScheduleRequest = TlvObject({
        /**
         * This field shall indicate how many individual transitions to expect for this sequence of commands. If a
         * device supports more than 10 transitions in its schedule they can send this by sending more than 1 “Set
         * Weekly Schedule” command, each containing the separate information that the device needs to set.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4.1
         */
        numberOfTransitionsForSequence: TlvField(0, TlvUInt8),

        /**
         * This field shall represent the day of the week at which all the transitions within the payload of the
         * command SHOULD be associated to. This field is a bitmap and therefore the associated setpoint could overlap
         * onto multiple days (you could set one transition time for all “week days” or whatever combination of days
         * the implementation requests).
         *
         * Each setpoint transition will begin with the day of week for this transition. There can be up to 10
         * transitions for each command.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4.2
         */
        dayOfWeekForSequence: TlvField(1, TlvBitmap(TlvUInt8, ScheduleDayOfWeek)),

        /**
         * This field shall indicate how the application decodes the setpoint fields of each transition in the
         * Transitions list.
         *
         * If the HeatSetpointPresent bit is On, the HeatSetpoint field shall NOT be null in every entry of the
         * Transitions list.
         *
         * If the HeatSetpointPresent bit is Off, the HeatSetpoint field shall be null in every entry of the
         * Transitions list.
         *
         * If the CoolSetpointPresent bit is On, the CoolSetpoint field shall NOT be null in every entry of the
         * Transitions list.
         *
         * If the CoolSetpointPresent bit is Off, the CoolSetpoint field shall be null in every entry of the
         * Transitions list.
         *
         * At least one of the bits in the Mode For Sequence byte shall be on.
         *
         * Both bits must be respected, even if the HEAT or COOL feature is not supported, to ensure the command is
         * decoded and handled correctly.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4.3
         */
        modeForSequence: TlvField(2, TlvBitmap(TlvUInt8, ScheduleMode)),

        /**
         * This field shall contain the list of setpoint transitions used to update the specified daily schedules
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4.4
         */
        transitions: TlvField(3, TlvArray(TlvWeeklyScheduleTransition, { maxLength: 10 }))
    });

    /**
     * Input to the Thermostat setWeeklySchedule command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4
     */
    export interface SetWeeklyScheduleRequest extends TypeFromSchema<typeof TlvSetWeeklyScheduleRequest> {}

    /**
     * Input to the Thermostat getWeeklySchedule command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5
     */
    export const TlvGetWeeklyScheduleRequest = TlvObject({
        /**
         * This field shall indicate the number of days the client would like to return the setpoint values for and
         * could be any combination of single days or the entire week.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5.1
         */
        daysToReturn: TlvField(0, TlvBitmap(TlvUInt8, ScheduleDayOfWeek)),

        /**
         * This field shall indicate the mode the client would like to return the set point values for and could be any
         * combination of heat only, cool only or heat & cool.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5.2
         */
        modeToReturn: TlvField(1, TlvBitmap(TlvUInt8, ScheduleMode))
    });

    /**
     * Input to the Thermostat getWeeklySchedule command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5
     */
    export interface GetWeeklyScheduleRequest extends TypeFromSchema<typeof TlvGetWeeklyScheduleRequest> {}

    /**
     * This command has the same payload format as the Set Weekly Schedule.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.6
     */
    export const TlvGetWeeklyScheduleResponse = TlvObject({
        numberOfTransitionsForSequence: TlvField(0, TlvUInt8),
        dayOfWeekForSequence: TlvField(1, TlvBitmap(TlvUInt8, ScheduleDayOfWeek)),
        modeForSequence: TlvField(2, TlvBitmap(TlvUInt8, ScheduleMode)),
        transitions: TlvField(3, TlvArray(TlvWeeklyScheduleTransition, { maxLength: 10 }))
    });

    /**
     * This command has the same payload format as the Set Weekly Schedule.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.6
     */
    export interface GetWeeklyScheduleResponse extends TypeFromSchema<typeof TlvGetWeeklyScheduleResponse> {}

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.6
     */
    export const HvacSystemType = {
        /**
         * Stage of cooling the HVAC system is using.
         *
         * These bits shall indicate what stage of cooling the HVAC system is using.
         *
         *   • 00 = Cool Stage 1
         *
         *   • 01 = Cool Stage 2
         *
         *   • 10 = Cool Stage 3
         *
         *   • 11 = Reserved
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.6.1
         */
        coolingStage: BitField(0, 2),

        /**
         * Stage of heating the HVAC system is using.
         *
         * These bits shall indicate what stage of heating the HVAC system is using.
         *
         *   • 00 = Heat Stage 1
         *
         *   • 01 = Heat Stage 2
         *
         *   • 10 = Heat Stage 3
         *
         *   • 11 = Reserved
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.6.2
         */
        heatingStage: BitField(2, 2),

        /**
         * Is the heating type Heat Pump.
         *
         * This bit shall indicate whether the HVAC system is conventional or a heat pump.
         *
         *   • 0 = Conventional
         *
         *   • 1 = Heat Pump
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.6.3
         */
        heatingIsHeatPump: BitFlag(4),

        /**
         * Does the HVAC system use fuel.
         *
         * This bit shall indicate whether the HVAC system uses fuel.
         *
         *   • 0 = Does not use fuel
         *
         *   • 1 = Uses fuel
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.6.4
         */
        heatingUsesFuel: BitFlag(5)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.9
     */
    export const RemoteSensing = {
        /**
         * Calculated Local Temperature is derived from a remote node
         */
        localTemperature: BitFlag(0),

        /**
         * OutdoorTemperature is derived from a remote node
         *
         * This bit shall be supported if the OutdoorTemperature attribute is supported.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.9.1
         */
        outdoorTemperature: BitFlag(1),

        /**
         * Occupancy is derived from a remote node
         */
        occupancy: BitFlag(2)
    };

    /**
     * NOTE
     *
     * CoolingAndHeating
     *
     * A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to request
     * heating or cooling on demand and will usually support the Auto SystemMode.
     *
     * Systems which support cooling or heating, requiring external intervention to change modes or where the whole
     * building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current capability.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.18
     */
    export enum ControlSequenceOfOperation {
        /**
         * Heat and Emergency are not possible
         */
        CoolingOnly = 0,

        /**
         * Heat and Emergency are not possible
         */
        CoolingWithReheat = 1,

        /**
         * Cool and precooling (see Terms) are not possible
         */
        HeatingOnly = 2,

        /**
         * Cool and precooling are not possible
         */
        HeatingWithReheat = 3,

        /**
         * All modes are possible
         */
        CoolingAndHeating = 4,

        /**
         * All modes are possible
         */
        CoolingAndHeatingWithReheat = 5
    }

    /**
     * Table 35. Interpretation of Heat, Cool and Auto SystemModeEnum Values
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.21
     */
    export enum SystemMode {
        /**
         * The Thermostat does not generate demand for Cooling or Heating
         */
        Off = 0,

        /**
         * Demand is generated for either Cooling or Heating, as required
         */
        Auto = 1,

        /**
         * Demand is only generated for Cooling
         */
        Cool = 3,

        /**
         * Demand is only generated for Heating
         */
        Heat = 4,

        /**
         * 2nd stage heating is in use to achieve desired temperature
         */
        EmergencyHeat = 5,

        /**
         * (see Terms)
         */
        Precooling = 6,

        FanOnly = 7,
        Dry = 8,
        Sleep = 9
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.23
     */
    export enum TemperatureSetpointHold {
        /**
         * Follow scheduling program
         */
        SetpointHoldOff = 0,

        /**
         * Maintain current setpoint, regardless of schedule transitions
         */
        SetpointHoldOn = 1
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.7
     */
    export const ProgrammingOperationMode = {
        /**
         * Schedule programming mode. This enables any programmed weekly schedule configurations.
         */
        scheduleActive: BitFlag(0),

        /**
         * Auto/recovery mode
         */
        autoRecovery: BitFlag(1),

        /**
         * Economy/EnergyStar mode
         */
        economy: BitFlag(2)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.8
     */
    export const RelayState = {
        /**
         * Heat State On
         */
        heat: BitFlag(0),

        /**
         * Cool State On
         */
        cool: BitFlag(1),

        /**
         * Fan State On
         */
        fan: BitFlag(2),

        /**
         * Heat 2nd State On
         */
        heatStage2: BitFlag(3),

        /**
         * Cool 2nd State On
         */
        coolStage2: BitFlag(4),

        /**
         * Fan 2nd State On
         */
        fanStage2: BitFlag(5),

        /**
         * Fan 3rd Stage On
         */
        fanStage3: BitFlag(6)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.19
     */
    export enum SetpointChangeSource {
        /**
         * Manual, user-initiated setpoint change via the thermostat
         */
        Manual = 0,

        /**
         * Schedule/internal programming-initiated setpoint change
         */
        Schedule = 1,

        /**
         * Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)
         */
        External = 2
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.16
     */
    export enum AcType {
        /**
         * Unknown AC Type
         */
        Unknown = 0,

        /**
         * Cooling and Fixed Speed
         */
        CoolingFixed = 1,

        /**
         * Heat Pump and Fixed Speed
         */
        HeatPumpFixed = 2,

        /**
         * Cooling and Inverter
         */
        CoolingInverter = 3,

        /**
         * Heat Pump and Inverter
         */
        HeatPumpInverter = 4
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.15
     */
    export enum AcRefrigerantType {
        /**
         * Unknown Refrigerant Type
         */
        Unknown = 0,

        /**
         * R22 Refrigerant
         */
        R22 = 1,

        /**
         * R410a Refrigerant
         */
        R410A = 2,

        /**
         * R407c Refrigerant
         */
        R407C = 3
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.13
     */
    export enum AcCompressorType {
        /**
         * Unknown compressor type
         */
        Unknown = 0,

        /**
         * Max working ambient 43 °C
         */
        T1 = 1,

        /**
         * Max working ambient 35 °C
         */
        T2 = 2,

        /**
         * Max working ambient 52 °C
         */
        T3 = 3
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.4
     */
    export const AcErrorCode = {
        /**
         * Compressor Failure or Refrigerant Leakage
         */
        compressorFail: BitFlag(0),

        /**
         * Room Temperature Sensor Failure
         */
        roomSensorFail: BitFlag(1),

        /**
         * Outdoor Temperature Sensor Failure
         */
        outdoorSensorFail: BitFlag(2),

        /**
         * Indoor Coil Temperature Sensor Failure
         */
        coilSensorFail: BitFlag(3),

        /**
         * Fan Failure
         */
        fanFail: BitFlag(4)
    };

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.14
     */
    export enum AcLouverPosition {
        /**
         * Fully Closed
         */
        Closed = 1,

        /**
         * Fully Open
         */
        Open = 2,

        /**
         * Quarter Open
         */
        Quarter = 3,

        /**
         * Half Open
         */
        Half = 4,

        /**
         * Three Quarters Open
         */
        ThreeQuarters = 5
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.12
     */
    export enum AcCapacityFormat {
        /**
         * British Thermal Unit per Hour
         */
        BtUh = 0
    }

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.17
     */
    export enum SetpointRaiseLowerMode {
        /**
         * Adjust Heat Setpoint
         */
        Heat = 0,

        /**
         * Adjust Cool Setpoint
         */
        Cool = 1,

        /**
         * Adjust Heat Setpoint and Cool Setpoint
         */
        Both = 2
    }

    /**
     * Input to the Thermostat setpointRaiseLower command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.1
     */
    export const TlvSetpointRaiseLowerRequest = TlvObject({
        mode: TlvField(0, TlvEnum<SetpointRaiseLowerMode>()),
        amount: TlvField(1, TlvInt8)
    });

    /**
     * Input to the Thermostat setpointRaiseLower command
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.1
     */
    export interface SetpointRaiseLowerRequest extends TypeFromSchema<typeof TlvSetpointRaiseLowerRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Cluster} § 4.3.8.5
     */
    export const AlarmCode = {
        /**
         * Initialization failure. The device failed to complete initialization at power-up.
         */
        initialization: BitFlag(0),

        /**
         * Hardware failure
         */
        hardware: BitFlag(1),

        /**
         * Self-calibration failure
         */
        selfCalibration: BitFlag(2)
    };

    /**
     * A ThermostatCluster supports these elements if it supports feature Occupancy.
     */
    export const OccupancyComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates whether the heated/cooled space is occupied or not, as measured locally or remotely (over the
             * network).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.5
             */
            occupancy: Attribute(
                0x2,
                TlvBitmap(TlvUInt8, OccupancySensing.Occupancy),
                { default: BitsFromPartial(OccupancySensing.Occupancy, { occupied: true }) }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Heating.
     */
    export const HeatingComponent = MutableCluster.Component({
        attributes: {
            /**
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9
             */
            absMinHeatSetpointLimit: OptionalFixedAttribute(0x3, TlvInt16, { default: 700 }),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9
             */
            absMaxHeatSetpointLimit: OptionalFixedAttribute(0x4, TlvInt16, { default: 3000 }),

            /**
             * Indicates the level of heating demanded by the PI loop in percent. This value is 0 when the thermostat
             * is in “off” or “cooling” mode.
             *
             * This attribute is reported regularly and may be used to control a heating device.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.11
             */
            piHeatingDemand: OptionalAttribute(0x8, TlvUInt8.bound({ max: 100 })),

            /**
             * Indicates the heating mode setpoint when the room is occupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall be used as the heating mode
             * setpoint.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.15
             */
            occupiedHeatingSetpoint: WritableAttribute(
                0x12,
                TlvInt16,
                { scene: true, persistent: true, default: 2000 }
            ),

            /**
             * Indicates the minimum level that the heating setpoint may be set to.
             *
             * This attribute, and the following three attributes, allow the user to define setpoint limits more
             * constrictive than the manufacturer imposed ones. Limiting users (e.g., in a commercial building) to such
             * setpoint limits can help conserve power.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.18
             */
            minHeatSetpointLimit: OptionalWritableAttribute(
                0x15,
                TlvInt16,
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the maximum level that the heating setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.19
             */
            maxHeatSetpointLimit: OptionalWritableAttribute(
                0x16,
                TlvInt16,
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Cooling.
     */
    export const CoolingComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the absolute minimum level that the cooling setpoint may be set to. This is a limitation
             * imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.8
             */
            absMinCoolSetpointLimit: OptionalFixedAttribute(0x5, TlvInt16, { default: 1600 }),

            /**
             * Indicates the absolute maximum level that the cooling setpoint may be set to. This is a limitation
             * imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.9
             */
            absMaxCoolSetpointLimit: OptionalFixedAttribute(0x6, TlvInt16, { default: 3200 }),

            /**
             * Indicates the level of cooling demanded by the PI (proportional integral) control loop in use by the
             * thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating” mode.
             *
             * This attribute is reported regularly and may be used to control a cooling device.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.10
             */
            piCoolingDemand: OptionalAttribute(0x7, TlvUInt8.bound({ max: 100 })),

            /**
             * Indicates the cooling mode setpoint when the room is occupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode
             * setpoint.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.14
             */
            occupiedCoolingSetpoint: WritableAttribute(
                0x11,
                TlvInt16,
                { scene: true, persistent: true, default: 2600 }
            ),

            /**
             * Indicates the minimum level that the cooling setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.20
             */
            minCoolSetpointLimit: OptionalWritableAttribute(
                0x17,
                TlvInt16,
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the maximum level that the cooling setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.21
             */
            maxCoolSetpointLimit: OptionalWritableAttribute(
                0x18,
                TlvInt16,
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if doesn't support feature LTNE.
     */
    export const NotLocalTemperatureNotExposedComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the offset the Thermostat server shall make to the measured temperature (locally or remotely)
             * to adjust the Calculated Local Temperature prior to using, displaying or reporting it.
             *
             * The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s
             * preferences (e.g., to match if there are multiple servers displaying different values for the same HVAC
             * area) or compensate for variability amongst temperature sensors.
             *
             * If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported value
             * (e.g., out of the range supported by the Thermostat server), the Thermostat server shall respond with a
             * status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or lower limit reached.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.13
             */
            localTemperatureCalibration: OptionalWritableAttribute(
                0x10,
                TlvInt8,
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.
     */
    export const CoolingAndOccupancyComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the cooling mode setpoint when the room is unoccupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall NOT be used.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.16
             */
            unoccupiedCoolingSetpoint: WritableAttribute(0x13, TlvInt16, { persistent: true, default: 2600 })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Heating and Occupancy.
     */
    export const HeatingAndOccupancyComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the heating mode setpoint when the room is unoccupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall NOT be used.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.17
             */
            unoccupiedHeatingSetpoint: WritableAttribute(0x14, TlvInt16, { persistent: true, default: 2000 })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature AutoMode.
     */
    export const AutoModeComponent = MutableCluster.Component({
        attributes: {
            /**
             * On devices which support the AUTO feature, this attribute shall indicate the minimum difference between
             * the Heat Setpoint and the Cool Setpoint.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.22
             */
            minSetpointDeadBand: WritableAttribute(0x19, TlvInt8, { persistent: true, writeAcl: AccessLevel.Manage }),

            /**
             * Indicates the running mode of the thermostat. This attribute uses the same values as SystemModeEnum but
             * can only be Off, Cool or Heat. This attribute is intended to provide additional information when the
             * thermostat’s system mode is in auto mode.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.27
             */
            thermostatRunningMode: OptionalAttribute(
                0x1e,
                TlvEnum<ThermostatRunningMode>(),
                { default: ThermostatRunningMode.Off }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.
     */
    export const ScheduleConfigurationComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the day of the week that this thermostat considers to be the start of week for weekly setpoint
             * scheduling.
             *
             * This attribute may be able to be used as the base to determine if the device supports weekly scheduling
             * by reading the attribute. Successful response means that the weekly scheduling is supported.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.28
             */
            startOfWeek: FixedAttribute(0x20, TlvEnum<StartOfWeek>()),

            /**
             * Indicates how many weekly schedule transitions the thermostat is capable of handling.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.29
             */
            numberOfWeeklyTransitions: FixedAttribute(0x21, TlvUInt8, { default: 0 }),

            /**
             * Indicates how many daily schedule transitions the thermostat is capable of handling.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.30
             */
            numberOfDailyTransitions: FixedAttribute(0x22, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * Upon receipt, the weekly schedule for updating setpoints shall be stored in the thermostat and SHOULD
             * begin at the time of receipt. A status code shall be sent in response.
             *
             * When a command is received that requires a total number of transitions greater than the device supports,
             * the status of the response shall be INSUFFICIENT_SPACE.
             *
             * When any of the setpoints sent in the sequence is out of range (AbsMin/MaxSetPointLimit), or when the
             * Mode for Sequence field includes a mode not supported by the device, the status of the response shall be
             * CONSTRAINT_ERROR and no setpoints from the entire sequence SHOULD be used.
             *
             * When an overlapping transition is detected, the status of the response shall be FAILURE.
             *
             * When a device which does not support multiple days in a command receives a command with more than one
             * bit set in the DayOfWeekForSequence field, or when a device which does not support multiple modes in a
             * command receives a command with more than one bit set in the ModeForSequence field, or when the contents
             * of the Transitions field does not agree with NumberOfTransitionsForSequence, DayOfWeekForSequence or
             * ModeForSequence, the status of the response shall be INVALID_COMMAND.
             *
             * When the transitions could be added successfully, the status of the response shall be SUCCESS.
             *
             * The set weekly schedule command is used to update the thermostat weekly setpoint schedule from a
             * management system. If the thermostat already has a weekly setpoint schedule programmed, then it SHOULD
             * replace each daily setpoint set as it receives the updates from the management system. For example, if
             * the thermostat has 4 setpoints for every day of the week and is sent a Set Weekly Schedule command with
             * one setpoint for Saturday then the thermostat SHOULD remove all 4 setpoints for Saturday and replace
             * those with the updated setpoint but leave all other days unchanged. If the schedule is larger than what
             * fits in one frame or contains more than 10 transitions, the schedule shall then be sent using multiple
             * Set Weekly Schedule Commands.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.4
             */
            setWeeklySchedule: Command(
                0x1,
                TlvSetWeeklyScheduleRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            ),

            /**
             * Upon receipt, the unit SHOULD send in return the Get Weekly Schedule Response command. The Days to
             * Return and Mode to Return fields are defined as bitmask for the flexibility to support multiple days and
             * multiple modes within one command. If thermostat cannot handle incoming command with multiple days
             * and/or multiple modes within one command, it shall send default response of INVALID_COMMAND in return.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.5
             */
            getWeeklySchedule: Command(0x2, TlvGetWeeklyScheduleRequest, 0x0, TlvGetWeeklyScheduleResponse),

            /**
             * This command is used to clear the weekly schedule. The Clear weekly schedule has no payload.
             *
             * Upon receipt, all transitions currently stored shall be cleared and a default response of SUCCESS shall
             * be sent in response. There are no error responses to this command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.7
             */
            clearWeeklySchedule: Command(0x3, TlvNoArguments, 0x3, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Setback.
     */
    export const SetbackComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to float
             * above the OccupiedCoolingSetpoint (i.e., OccupiedCoolingSetpoint + OccupiedSetback) or below the
             * OccupiedHeatingSetpoint setpoint (i.e., OccupiedHeatingSetpoint – OccupiedSetback) before initiating a
             * state change to bring the temperature back to the user’s desired setpoint. This attribute is sometimes
             * also referred to as the “span.”
             *
             * The purpose of this attribute is to allow remote configuration of the span between the desired setpoint
             * and the measured temperature to help prevent over-cycling and reduce energy bills, though this may
             * result in lower comfort on the part of some users.
             *
             * The null value indicates the attribute is unused.
             *
             * If the Thermostat client attempts to write OccupiedSetback to a value greater than OccupiedSetbackMax,
             * the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMax and shall send a Write
             * Attribute Response command with a Status Code field enumeration of SUCCESS response.
             *
             * If the Thermostat client attempts to write OccupiedSetback to a value less than OccupiedSetbackMin, the
             * Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMin and shall send a Write
             * Attribute Response command with a Status Code field enumeration of SUCCESS response.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.38
             */
            occupiedSetback: WritableAttribute(
                0x34,
                TlvNullable(TlvUInt8),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the minimum value that the Thermostat server will allow the OccupiedSetback attribute to be
             * configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.39
             */
            occupiedSetbackMin: FixedAttribute(0x35, TlvNullable(TlvUInt8), { default: null }),

            /**
             * Indicates the maximum value that the Thermostat server will allow the OccupiedSetback attribute to be
             * configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.40
             */
            occupiedSetbackMax: FixedAttribute(0x36, TlvNullable(TlvUInt8), { default: null })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Setback and Occupancy.
     */
    export const SetbackAndOccupancyComponent = MutableCluster.Component({
        attributes: {
            /**
             * Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to float
             * above the UnoccupiedCoolingSetpoint (i.e., UnoccupiedCoolingSetpoint + UnoccupiedSetback) or below the
             * UnoccupiedHeatingSetpoint setpoint (i.e., UnoccupiedHeatingSetpoint - UnoccupiedSetback) before
             * initiating a state change to bring the temperature back to the user’s desired setpoint. This attribute
             * is sometimes also referred to as the “span.”
             *
             * The purpose of this attribute is to allow remote configuration of the span between the desired setpoint
             * and the measured temperature to help prevent over-cycling and reduce energy bills, though this may
             * result in lower comfort on the part of some users.
             *
             * The null value indicates the attribute is unused.
             *
             * If the Thermostat client attempts to write UnoccupiedSetback to a value greater than
             * UnoccupiedSetbackMax, the Thermostat server shall set its UnoccupiedSetback value to
             * UnoccupiedSetbackMax and shall send a Write Attribute Response command with a Status Code field
             * enumeration of SUCCESS response.
             *
             * If the Thermostat client attempts to write UnoccupiedSetback to a value less than UnoccupiedSetbackMin,
             * the Thermostat server shall set its UnoccupiedSetback value to UnoccupiedSetbackMin and shall send a
             * Write Attribute Response command with a Status Code field enumeration of SUCCESS response.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.41
             */
            unoccupiedSetback: WritableAttribute(
                0x37,
                TlvNullable(TlvUInt8),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the minimum value that the Thermostat server will allow the UnoccupiedSetback attribute to be
             * configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.42
             */
            unoccupiedSetbackMin: FixedAttribute(0x38, TlvNullable(TlvUInt8), { default: null }),

            /**
             * Indicates the maximum value that the Thermostat server will allow the UnoccupiedSetback attribute to be
             * configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.43
             */
            unoccupiedSetbackMax: FixedAttribute(0x39, TlvNullable(TlvUInt8), { default: null })
        }
    });

    /**
     * These elements and properties are present in all Thermostat clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x201,
        name: "Thermostat",
        revision: 6,

        features: {
            /**
             * Heating
             *
             * Thermostat is capable of managing a heating device
             */
            heating: BitFlag(0),

            /**
             * Cooling
             *
             * Thermostat is capable of managing a cooling device
             */
            cooling: BitFlag(1),

            /**
             * Occupancy
             *
             * Supports Occupied and Unoccupied setpoints
             */
            occupancy: BitFlag(2),

            /**
             * ScheduleConfiguration
             *
             * Supports remote configuration of a weekly schedule of setpoint transitions
             */
            scheduleConfiguration: BitFlag(3),

            /**
             * Setback
             *
             * Supports configurable setback (or span)
             */
            setback: BitFlag(4),

            /**
             * AutoMode
             *
             * Supports a System Mode of Auto
             */
            autoMode: BitFlag(5),

            /**
             * LocalTemperatureNotExposed
             *
             * This feature indicates that the Calculated Local Temperature used internally is unavailable to report
             * externally, for example due to the temperature control being done by a separate subsystem which does not
             * offer a view into the currently measured temperature, but allows setpoints to be provided.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.4.1
             */
            localTemperatureNotExposed: BitFlag(6)
        },

        attributes: {
            /**
             * Indicates the current Calculated Local Temperature, when available.
             *
             *   • If the LTNE feature is not supported:
             *
             *     ◦ If the LocalTemperatureCalibration is invalid or currently unavailable, the attribute shall report
             *       null.
             *
             *     ◦ If the LocalTemperatureCalibration is valid, the attribute shall report that value.
             *
             *   • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
             *     LocalTemperatureCalibration. In that case, the LocalTemperature attribute shall always report null.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.3
             */
            localTemperature: Attribute(0x0, TlvNullable(TlvInt16), { default: null }),

            /**
             * Indicates the outdoor temperature, as measured locally or remotely (over the network).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.4
             */
            outdoorTemperature: OptionalAttribute(0x1, TlvNullable(TlvInt16), { default: null }),

            /**
             * Indicates the HVAC system type controlled by the thermostat. If the thermostat uses physical DIP
             * switches to set these parameters, this information shall be available read-only from the DIP switches.
             * If these parameters are set via software, there shall be read/write access in order to provide remote
             * programming capability.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.12
             * @deprecated
             */
            hvacSystemTypeConfiguration: OptionalWritableAttribute(
                0x9,
                TlvBitmap(TlvUInt8, HvacSystemType),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates when the local temperature, outdoor temperature and occupancy are being sensed by remote
             * networked sensors, rather than internal sensors.
             *
             * If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
             * report a value of 0.
             *
             * If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
             * the write shall fail and the server shall report a CONSTRAINT_ERROR.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.23
             */
            remoteSensing: OptionalWritableAttribute(
                0x1a,
                TlvBitmap(TlvUInt8, RemoteSensing),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the overall operating environment of the thermostat, and thus the possible system modes that
             * the thermostat can operate in.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.24
             */
            controlSequenceOfOperation: WritableAttribute(
                0x1b,
                TlvEnum<ControlSequenceOfOperation>(),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the current operating mode of the thermostat. Its value shall be limited by the
             * ControlSequenceOfOperation attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.25
             */
            systemMode: WritableAttribute(
                0x1c,
                TlvEnum<SystemMode>(),
                { scene: true, persistent: true, default: SystemMode.Auto, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the temperature hold status on the thermostat. If hold status is on, the thermostat SHOULD
             * maintain the temperature setpoint for the current mode until a system mode change. If hold status is
             * off, the thermostat SHOULD follow the setpoint transitions specified by its internal scheduling program.
             * If the thermostat supports setpoint hold for a specific duration, it SHOULD also implement the
             * TemperatureSetpointHoldDuration attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.31
             */
            temperatureSetpointHold: OptionalWritableAttribute(
                0x23,
                TlvEnum<TemperatureSetpointHold>(),
                { persistent: true, default: TemperatureSetpointHold.SetpointHoldOff, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the period in minutes for which a setpoint hold is active. Thermostats that support hold for a
             * specified duration SHOULD implement this attribute. The null value indicates the field is unused. All
             * other values are reserved.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.32
             */
            temperatureSetpointHoldDuration: OptionalWritableAttribute(
                0x24,
                TlvNullable(TlvUInt16.bound({ max: 1440 })),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the operational state of the thermostat’s programming. The thermostat shall modify its
             * programming operation when this attribute is modified by a client and update this attribute when its
             * programming operation is modified locally by a user. The thermostat may support more than one active
             * ProgrammingOperationModeBitmap. For example, the thermostat may operate simultaneously in Schedule
             * Programming Mode and Recovery Mode.
             *
             * Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
             * if they do not support the ScheduleConfiguration feature.
             *
             * When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
             * or remotely, not by internal schedule programming.
             *
             * NOTE
             *
             * Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
             * configurations.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.33
             */
            thermostatProgrammingOperationMode: OptionalWritableAttribute(
                0x25,
                TlvBitmap(TlvUInt8, ProgrammingOperationMode),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the current relay state of the heat, cool, and fan relays. Unimplemented outputs shall be
             * treated as if they were Off.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.34
             */
            thermostatRunningState: OptionalAttribute(0x29, TlvBitmap(TlvUInt16, RelayState)),

            /**
             * Indicates the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who
             * or what determined the current setpoint).
             *
             * This attribute enables service providers to determine whether changes to setpoints were initiated due to
             * occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
             * provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
             * differentiates the source of setpoint changes made at the thermostat.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.35
             */
            setpointChangeSource: OptionalAttribute(
                0x30,
                TlvEnum<SetpointChangeSource>(),
                { default: SetpointChangeSource.Manual }
            ),

            /**
             * Indicates the delta between the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and
             * the previous active setpoint. This attribute is meant to accompany the SetpointChangeSource attribute;
             * devices implementing SetpointChangeAmount SHOULD also implement SetpointChangeSource.
             *
             * The null value indicates that the previous setpoint was unknown.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.36
             */
            setpointChangeAmount: OptionalAttribute(0x31, TlvNullable(TlvInt16), { default: null }),

            /**
             * Indicates the time in UTC at which the SetpointChangeAmount attribute change was recorded.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.37
             */
            setpointChangeSourceTimestamp: OptionalAttribute(0x32, TlvEpochS, { default: 0 }),

            /**
             * Indicates the delta between the Calculated Local Temperature and the OccupiedHeatingSetpoint or
             * UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.
             *
             * If the difference between the Calculated Local Temperature and OccupiedCoolingSetpoint or
             * UnoccupiedCoolingSetpoint is greater than or equal to the EmergencyHeatDelta and the Thermostat server’s
             * SystemMode attribute is in a heating-related mode, then the Thermostat server shall immediately switch
             * to the SystemMode attribute value that provides the highest stage of heating (e.g., emergency heat) and
             * continue operating in that running state until the OccupiedHeatingSetpoint value is reached. For example:
             *
             *   • Calculated Local Temperature = 10.0°C
             *
             *   • OccupiedHeatingSetpoint = 16.0°C
             *
             *   • EmergencyHeatDelta = 2.0°C
             *
             * ⇒ OccupiedHeatingSetpoint - Calculated Local Temperature ≥? EmergencyHeatDelta
             *
             * ⇒ 16°C - 10°C ≥? 2°C
             *
             * ⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode
             *
             * The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
             * when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
             * space to be quickly heated to the desired level set by the user.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.44
             */
            emergencyHeatDelta: OptionalWritableAttribute(
                0x3a,
                TlvUInt8,
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the type of Mini Split ACTypeEnum of Mini Split AC is defined depending on how Cooling and
             * Heating condition is achieved by Mini Split AC.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.45
             */
            acType: OptionalWritableAttribute(
                0x40,
                TlvEnum<AcType>(),
                { persistent: true, default: AcType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat attribute
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.46
             */
            acCapacity: OptionalWritableAttribute(
                0x41,
                TlvUInt16,
                { persistent: true, default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates type of refrigerant used within the Mini Split AC.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.47
             */
            acRefrigerantType: OptionalWritableAttribute(
                0x42,
                TlvEnum<AcRefrigerantType>(),
                { persistent: true, default: AcRefrigerantType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the type of compressor used within the Mini Split AC.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.48
             */
            acCompressorType: OptionalWritableAttribute(
                0x43,
                TlvEnum<AcCompressorType>(),
                { persistent: true, default: AcCompressorType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the type of errors encountered within the Mini Split AC.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.49
             */
            acErrorCode: OptionalWritableAttribute(
                0x44,
                TlvBitmap(TlvUInt32, AcErrorCode),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the position of Louver on the AC.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.50
             */
            acLouverPosition: OptionalWritableAttribute(
                0x45,
                TlvEnum<AcLouverPosition>(),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * Indicates the temperature of the AC coil, as measured locally or remotely (over the network).
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.51
             */
            acCoilTemperature: OptionalAttribute(0x46, TlvNullable(TlvInt16), { default: null }),

            /**
             * Indicates the format for the ACCapacity attribute.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.9.52
             */
            acCapacityFormat: OptionalWritableAttribute(
                0x47,
                TlvEnum<AcCapacityFormat>(),
                { persistent: true, default: AcCapacityFormat.BtUh, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * Upon receipt, the attributes for the indicated setpoint(s) shall have the amount specified in the Amount
             * field added to them. If the resulting value is outside the limits imposed by MinCoolSetpointLimit,
             * MaxCoolSetpointLimit, MinHeatSetpointLimit and MaxHeatSetpointLimit, the value is clamped to those
             * limits. This is not considered an error condition.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 4.3.10.1
             */
            setpointRaiseLower: Command(0x0, TlvSetpointRaiseLowerRequest, 0x0, TlvNoResponse)
        },

        /**
         * This metadata controls which ThermostatCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions(
            { flags: { occupancy: true }, component: OccupancyComponent },
            { flags: { heating: true }, component: HeatingComponent },
            { flags: { cooling: true }, component: CoolingComponent },
            { flags: { localTemperatureNotExposed: false }, component: NotLocalTemperatureNotExposedComponent },
            { flags: { cooling: true, occupancy: true }, component: CoolingAndOccupancyComponent },
            { flags: { heating: true, occupancy: true }, component: HeatingAndOccupancyComponent },
            { flags: { autoMode: true }, component: AutoModeComponent },
            { flags: { scheduleConfiguration: true }, component: ScheduleConfigurationComponent },
            { flags: { setback: true }, component: SetbackComponent },
            { flags: { setback: true, occupancy: true }, component: SetbackAndOccupancyComponent },
            { flags: { autoMode: true, heating: false }, component: false },
            { flags: { autoMode: true, cooling: false }, component: false },
            { flags: { heating: false, cooling: false }, component: false }
        )
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster.ExtensibleOnly(Base);

    /**
     * This cluster provides an interface to the functionality of a thermostat.
     *
     * Per the Matter specification you cannot use {@link ThermostatCluster} without enabling certain feature
     * combinations. You must use the {@link with} factory method to obtain a working cluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 4.3
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const OCC = { occupancy: true };
    const HEAT = { heating: true };
    const COOL = { cooling: true };
    const COOL_OCC = { cooling: true, occupancy: true };
    const HEAT_OCC = { heating: true, occupancy: true };
    const AUTO = { autoMode: true };
    const SCH = { scheduleConfiguration: true };
    const SB = { setback: true };
    const SB_OCC = { setback: true, occupancy: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Base.id,
        name: Base.name,
        revision: Base.revision,
        features: Base.features,

        attributes: {
            ...Base.attributes,
            occupancy: MutableCluster.AsConditional(OccupancyComponent.attributes.occupancy, { mandatoryIf: [OCC] }),
            absMinHeatSetpointLimit: MutableCluster.AsConditional(
                HeatingComponent.attributes.absMinHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            absMaxHeatSetpointLimit: MutableCluster.AsConditional(
                HeatingComponent.attributes.absMaxHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            absMinCoolSetpointLimit: MutableCluster.AsConditional(
                CoolingComponent.attributes.absMinCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            absMaxCoolSetpointLimit: MutableCluster.AsConditional(
                CoolingComponent.attributes.absMaxCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            piCoolingDemand: MutableCluster.AsConditional(
                CoolingComponent.attributes.piCoolingDemand,
                { optionalIf: [COOL] }
            ),
            piHeatingDemand: MutableCluster.AsConditional(
                HeatingComponent.attributes.piHeatingDemand,
                { optionalIf: [HEAT] }
            ),
            localTemperatureCalibration: MutableCluster.AsConditional(
                NotLocalTemperatureNotExposedComponent.attributes.localTemperatureCalibration,
                { optionalIf: [] }
            ),
            occupiedCoolingSetpoint: MutableCluster.AsConditional(
                CoolingComponent.attributes.occupiedCoolingSetpoint,
                { mandatoryIf: [COOL] }
            ),
            occupiedHeatingSetpoint: MutableCluster.AsConditional(
                HeatingComponent.attributes.occupiedHeatingSetpoint,
                { mandatoryIf: [HEAT] }
            ),
            unoccupiedCoolingSetpoint: MutableCluster.AsConditional(
                CoolingAndOccupancyComponent.attributes.unoccupiedCoolingSetpoint,
                { mandatoryIf: [COOL_OCC] }
            ),
            unoccupiedHeatingSetpoint: MutableCluster.AsConditional(
                HeatingAndOccupancyComponent.attributes.unoccupiedHeatingSetpoint,
                { mandatoryIf: [HEAT_OCC] }
            ),
            minHeatSetpointLimit: MutableCluster.AsConditional(
                HeatingComponent.attributes.minHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            maxHeatSetpointLimit: MutableCluster.AsConditional(
                HeatingComponent.attributes.maxHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            minCoolSetpointLimit: MutableCluster.AsConditional(
                CoolingComponent.attributes.minCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            maxCoolSetpointLimit: MutableCluster.AsConditional(
                CoolingComponent.attributes.maxCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            minSetpointDeadBand: MutableCluster.AsConditional(
                AutoModeComponent.attributes.minSetpointDeadBand,
                { mandatoryIf: [AUTO] }
            ),
            thermostatRunningMode: MutableCluster.AsConditional(
                AutoModeComponent.attributes.thermostatRunningMode,
                { optionalIf: [AUTO] }
            ),
            startOfWeek: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.attributes.startOfWeek,
                { mandatoryIf: [SCH] }
            ),
            numberOfWeeklyTransitions: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.attributes.numberOfWeeklyTransitions,
                { mandatoryIf: [SCH] }
            ),
            numberOfDailyTransitions: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.attributes.numberOfDailyTransitions,
                { mandatoryIf: [SCH] }
            ),
            occupiedSetback: MutableCluster.AsConditional(
                SetbackComponent.attributes.occupiedSetback,
                { mandatoryIf: [SB] }
            ),
            occupiedSetbackMin: MutableCluster.AsConditional(
                SetbackComponent.attributes.occupiedSetbackMin,
                { mandatoryIf: [SB] }
            ),
            occupiedSetbackMax: MutableCluster.AsConditional(
                SetbackComponent.attributes.occupiedSetbackMax,
                { mandatoryIf: [SB] }
            ),
            unoccupiedSetback: MutableCluster.AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetback,
                { mandatoryIf: [SB_OCC] }
            ),
            unoccupiedSetbackMin: MutableCluster.AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetbackMin,
                { mandatoryIf: [SB_OCC] }
            ),
            unoccupiedSetbackMax: MutableCluster.AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetbackMax,
                { mandatoryIf: [SB_OCC] }
            )
        },

        commands: {
            ...Base.commands,
            setWeeklySchedule: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.commands.setWeeklySchedule,
                { mandatoryIf: [SCH] }
            ),
            getWeeklySchedule: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.commands.getWeeklySchedule,
                { mandatoryIf: [SCH] }
            ),
            clearWeeklySchedule: MutableCluster.AsConditional(
                ScheduleConfigurationComponent.commands.clearWeeklySchedule,
                { mandatoryIf: [SCH] }
            )
        }
    });

    /**
     * This cluster supports all Thermostat features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type ThermostatCluster = Thermostat.Cluster;
export const ThermostatCluster = Thermostat.Cluster;
ClusterRegistry.register(Thermostat.Complete);
