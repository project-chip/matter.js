/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ExtensibleCluster,
    validateFeatureSelection,
    extendCluster,
    preventCluster,
    ClusterForBaseCluster,
    AsConditional
} from "../../cluster/ClusterFactory.js";
import { BitFlag, BitsFromPartial, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    Attribute,
    OptionalAttribute,
    OptionalWritableAttribute,
    AccessLevel,
    WritableAttribute,
    Command,
    TlvNoResponse,
    OptionalCommand,
    OptionalFixedAttribute,
    FixedAttribute,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt8, TlvBitmap, TlvEnum, TlvUInt16, TlvUInt32, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvArray } from "../../tlv/TlvArray.js";

export namespace Thermostat {
    /**
     * The value of the Thermostat remoteSensing attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.22
     */
    export const RemoteSensing = {
        /**
         * When set, LocalTemperature Value is derived from a remote node
         */
        localTemperature: BitFlag(0),

        /**
         * When set, OutdoorTemperature is derived from a remote node
         */
        outdoorTemperature: BitFlag(1),

        /**
         * When set, Occupancy is derived from a remote node
         */
        occupancy: BitFlag(2)
    };

    /**
     * The value of the Thermostat controlSequenceOfOperation attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.23
     */
    export const enum ControlSequenceOfOperation {
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
     * The value of the Thermostat systemMode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.24
     */
    export const enum SystemMode {
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
     * The value of the Thermostat alarmMask attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.25
     */
    export const AlarmMask = {
        initializationFailure: BitFlag(0),
        hardwareFailure: BitFlag(1),
        selfCalibrationFailure: BitFlag(2)
    };

    /**
     * The value of the Thermostat temperatureSetpointHold attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.30
     */
    export const enum TemperatureSetpointHold {
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
     * The value of the Thermostat thermostatProgrammingOperationMode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.32
     */
    export const ThermostatProgrammingOperationMode = {
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
     * The value of the Thermostat thermostatRunningState attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.33
     */
    export const ThermostatRunningState = {
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
         * Heat 2nd Stage State On
         */
        heatStage2: BitFlag(3),

        /**
         * Cool 2nd Stage State On
         */
        coolStage2: BitFlag(4),

        /**
         * Fan 2nd Stage State On
         */
        fanStage2: BitFlag(5),

        /**
         * Fan 3rd Stage Stage On
         */
        fanStage3: BitFlag(6)
    };

    /**
     * The value of the Thermostat setpointChangeSource attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.34
     */
    export const enum SetpointChangeSource {
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
     * The value of the Thermostat acType attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.44
     */
    export const enum AcType {
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
     * The value of the Thermostat acRefrigerantType attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.46
     */
    export const enum AcRefrigerantType {
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
     * The value of the Thermostat acCompressorType attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.47
     */
    export const enum AcCompressorType {
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
     * The value of the Thermostat acErrorCode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.48
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
     * The value of the Thermostat acLouverPosition attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.49
     */
    export const enum AcLouverPosition {
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
     * The value of the Thermostat acCapacityFormat attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.51
     */
    export const enum AcCapacityFormat {
        /**
         * British Thermal Unit per Hour
         */
        BtUh = 0
    }

    export const enum SetpointAdjustMode {
        Heat = 0,
        Cool = 1,
        Both = 2
    }

    /**
     * Input to the Thermostat setpointRaiseLower command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
     */
    export const TlvSetpointRaiseLowerRequest = TlvObject({
        mode: TlvField(0, TlvEnum<SetpointAdjustMode>()),
        amount: TlvField(1, TlvInt8)
    });

    /**
     * The value of the Thermostat occupancy attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.4
     */
    export const Occupancy = { occupied: BitFlag(0) };

    /**
     * The value of the Thermostat thermostatRunningMode attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7
     */
    export const enum ThermostatRunningMode {
        Off = 0,
        Cool = 3,
        Heat = 4
    }

    /**
     * The value of the Thermostat startOfWeek attribute
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.27
     */
    export const enum StartOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }

    export const DayOfWeek = {
        sunday: BitFlag(0),
        monday: BitFlag(1),
        tuesday: BitFlag(2),
        wednesday: BitFlag(3),
        thursday: BitFlag(4),
        friday: BitFlag(5),
        saturday: BitFlag(6),
        away: BitFlag(7)
    };

    export const ModeForSequence = { heatSetpointPresent: BitFlag(0), coolSetpointPresent: BitFlag(1) };

    /**
     * This represents a single transition in a Thermostat schedule
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.9.5
     */
    export const TlvThermostatScheduleTransition = TlvObject({
        /**
         * This field represents the start time of the schedule transition during the associated day. The time will be
         * represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
         * represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.9.5.1
         */
        transitionTime: TlvField(0, TlvUInt16.bound({ max: 1439 })),

        heatSetpoint: TlvField(1, TlvNullable(TlvInt16)),
        coolSetpoint: TlvField(2, TlvNullable(TlvInt16))
    });

    /**
     * Input to the Thermostat setWeeklySchedule command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
     */
    export const TlvSetWeeklyScheduleRequest = TlvObject({
        numberOfTransitionsForSequence: TlvField(0, TlvUInt8),
        dayOfWeekForSequence: TlvField(1, TlvBitmap(TlvUInt8, DayOfWeek)),
        modeForSequence: TlvField(2, TlvBitmap(TlvUInt8, ModeForSequence)),
        transitions: TlvField(3, TlvArray(TlvThermostatScheduleTransition))
    });

    /**
     * Input to the Thermostat getWeeklySchedule command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
     */
    export const TlvGetWeeklyScheduleRequest = TlvObject({
        daysToReturn: TlvField(0, TlvBitmap(TlvUInt8, DayOfWeek)),
        modeToReturn: TlvField(1, TlvBitmap(TlvUInt8, ModeForSequence))
    });

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
     */
    export const TlvGetWeeklyScheduleResponse = TlvObject({
        numberOfTransitionsForSequence: TlvField(0, TlvUInt8),
        dayOfWeekForSequence: TlvField(1, TlvBitmap(TlvUInt8, DayOfWeek)),
        modeForSequence: TlvField(2, TlvBitmap(TlvUInt8, ModeForSequence)),
        transitions: TlvField(3, TlvArray(TlvThermostatScheduleTransition))
    });

    /**
     * These are optional features supported by ThermostatCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.3.1
     */
    export enum Feature {
        /**
         * Heating
         *
         * Thermostat is capable of managing a heating device
         */
        Heating = "Heating",

        /**
         * Cooling
         *
         * Thermostat is capable of managing a cooling device
         */
        Cooling = "Cooling",

        /**
         * Occupancy
         *
         * Supports Occupied and Unoccupied setpoints
         */
        Occupancy = "Occupancy",

        /**
         * ScheduleConfiguration
         *
         * Supports remote configuration of a weekly schedule of setpoint transitions
         */
        ScheduleConfiguration = "ScheduleConfiguration",

        /**
         * Setback
         *
         * Supports configurable setback (or span)
         */
        Setback = "Setback",

        /**
         * AutoMode
         *
         * Supports a System Mode of Auto
         */
        AutoMode = "AutoMode",

        /**
         * LocalTemperatureNotExposed
         *
         * Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute
         */
        LocalTemperatureNotExposed = "LocalTemperatureNotExposed"
    }

    /**
     * These elements and properties are present in all Thermostat clusters.
     */
    export const Base = BaseClusterComponent({
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
             * Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute
             */
            localTemperatureNotExposed: BitFlag(6)
        },

        attributes: {
            /**
             * This attribute indicates the current LocalTemperature value, when available. The value may be local, or
             * remote, depending on the value of the RemoteSensing attribute when supported.
             *
             *   • If the LTNE feature is not supported:
             *
             *     ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall report
             *       null.
             *
             *     ◦ If the temperature measurement is valid, the attribute shall report that value.
             *
             *   • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the
             *     LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.2
             */
            localTemperature: Attribute(0x0, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute represents the outdoor temperature, as measured locally or remotely (over the network).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.3
             */
            outdoorTemperature: OptionalAttribute(0x1, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed
             * by remote networked sensors, rather than internal sensors.
             *
             * A bit set to 1 indicates remote sensing of the relevant value.
             *
             * Table 72. RemoteSensing Attribute Bit Values
             *
             * If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall always
             * report a value of 0.
             *
             * If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is present,
             * the write shall fail and the server shall report a CONSTRAINT_ERROR.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.22
             */
            remoteSensing: OptionalWritableAttribute(
                0x1a,
                TlvBitmap(TlvUInt8, RemoteSensing),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the overall operating environment of the thermostat, and thus the possible
             * system modes that the thermostat can operate in. It shall be set to one of the following values.
             *
             * Table 73. ControlSequenceOfOperation Values
             *
             * NOTE
             *
             * CoolingAndHeating
             *
             * A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be able to
             * request heating or cooling on demand and will usually support the Auto SystemMode.
             *
             * Systems which support cooling or heating, requiring external intervention to change modes or where the
             * whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the current
             * capability.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.23
             */
            controlSequenceOfOperation: WritableAttribute(
                0x1b,
                TlvEnum<ControlSequenceOfOperation>(),
                {
                    persistent: true,
                    default: ControlSequenceOfOperation.CoolingAndHeating,
                    writeAcl: AccessLevel.Manage
                }
            ),

            /**
             * This attribute specifies the current operating mode of the thermostat, It shall be set to one of the
             * following values, as limited by the ControlSequenceOfOperation Attribute.
             *
             * NOTE It is not mandatory to support all values.
             *
             * Table 75. Interpretation of Heat, Cool and Auto SystemMode Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.24
             */
            systemMode: WritableAttribute(
                0x1c,
                TlvEnum<SystemMode>(),
                { scene: true, persistent: true, default: SystemMode.Auto, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies whether each of the alarms listed below is enabled. When the bit number
             * corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
             * corresponding to a code in the table are reserved.
             *
             * When the Alarms cluster is implemented on a device, and one of the alarm conditions included in this
             * table occurs, an alarm notification is generated, with the alarm code field set as listed in the table.
             *
             * Table 76. Alarm Codes
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.25
             */
            alarmMask: OptionalAttribute(0x1d, TlvBitmap(TlvUInt8, AlarmMask)),

            /**
             * This attribute specifies the temperature hold status on the thermostat. If hold status is on, the
             * thermostat SHOULD maintain the temperature set point for the current mode until a system mode change. If
             * hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal
             * scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also
             * implement the TemperatureSetpointHoldDuration attribute.
             *
             * Table 78. TemperatureSetpointHold Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.30
             */
            temperatureSetpointHold: OptionalWritableAttribute(
                0x23,
                TlvEnum<TemperatureSetpointHold>(),
                { persistent: true, default: TemperatureSetpointHold.SetpointHoldOff, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support
             * hold for a specified duration SHOULD implement this attribute. The null value indicates the field is
             * unused. All other values are reserved.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.31
             */
            temperatureSetpointHoldDuration: OptionalWritableAttribute(
                0x24,
                TlvNullable(TlvUInt16.bound({ max: 1440 })),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute determines the operational state of the thermostat’s programming. The thermostat shall
             * modify its programming operation when this attribute is modified by a client and update this attribute
             * when its programming operation is modified locally by a user. The thermostat may support more than one
             * active ThermostatProgrammingOperationMode. For example, the thermostat may operate simultaneously in
             * Schedule Programming Mode and Recovery Mode.
             *
             * Thermostats which contain a schedule may use this attribute to control how that schedule is used, even
             * if they do not support the Schedule Configuration feature.
             *
             * Table 79. ThermostatProgrammingOperationMode Attribute Values
             *
             * When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the thermostat
             * or remotely, not by internal schedule programming.
             *
             * NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming
             * configurations.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.32
             */
            thermostatProgrammingOperationMode: OptionalWritableAttribute(
                0x25,
                TlvBitmap(TlvUInt8, ThermostatProgrammingOperationMode),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute represents the current relay state of the heat, cool, and fan relays.
             *
             * Table 80. HVAC Relay State Values
             *
             * Unimplemented outputs shall be treated as if they were Off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.33
             */
            thermostatRunningState: OptionalAttribute(0x29, TlvBitmap(TlvUInt16, ThermostatRunningState)),

            /**
             * This attribute specifies the source of the current active OccupiedCoolingSetpoint or
             * OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).
             *
             * This attribute enables service providers to determine whether changes to setpoints were initiated due to
             * occupant comfort, scheduled programming or some other source (e.g., electric utility or other service
             * provider). Because automation services may initiate frequent setpoint changes, this attribute clearly
             * differentiates the source of setpoint changes made at the thermostat.
             *
             * Table 81. SetpointChangeSource Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.34
             */
            setpointChangeSource: OptionalAttribute(
                0x30,
                TlvEnum<SetpointChangeSource>(),
                { default: SetpointChangeSource.Manual }
            ),

            /**
             * This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
             * OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
             * SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
             * SetpointChangeSource.
             *
             * The null value indicates that the previous setpoint was unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.35
             */
            setpointChangeAmount: OptionalAttribute(0x31, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
             * recorded.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.36
             */
            setpointChangeSourceTimestamp: OptionalAttribute(0x32, TlvUInt32, { default: 0 }),

            /**
             * This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
             * UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.
             *
             * If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or equal
             * to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a heating-related mode,
             * then the Thermostat server shall immediately switch to the SystemMode attribute value that provides the
             * highest stage of heating (e.g., emergency heat) and continue operating in that running state until the
             * OccupiedHeatingSetpoint value is reached. For example:
             *
             *   • LocalTemperature = 10.0°C
             *
             *   • OccupiedHeatingSetpoint = 16.0°C
             *
             *   • EmergencyHeatDelta = 2.0°C
             *
             * ⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta
             *
             * ⇒ 16°C - 10°C ≥? 2°C
             *
             * ⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode
             *
             * The purpose of this attribute is to provide Thermostat clients the ability to configure rapid heating
             * when a setpoint is of a specified amount greater than the measured temperature. This allows the heated
             * space to be quickly heated to the desired level set by the user.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.43
             */
            emergencyHeatDelta: OptionalWritableAttribute(
                0x3a,
                TlvUInt8,
                { persistent: true, default: 250, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how
             * Cooling and Heating condition is achieved by Mini Split AC.
             *
             * Table 82. ACType Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.44
             */
            acType: OptionalWritableAttribute(
                0x40,
                TlvEnum<AcType>(),
                { persistent: true, default: AcType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates capacity of Mini Split AC in terms of the format defined by the
             * ACCapacityFormat attribute
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.45
             */
            acCapacity: OptionalWritableAttribute(
                0x41,
                TlvUInt16,
                { persistent: true, default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates type of refrigerant used within the Mini Split AC.
             *
             * Table 83. ACRefrigerantType Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.46
             */
            acRefrigerantType: OptionalWritableAttribute(
                0x42,
                TlvEnum<AcRefrigerantType>(),
                { persistent: true, default: AcRefrigerantType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates type of Compressor used within the Mini Split AC.
             *
             * Table 84. ACCompressorType Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.47
             */
            acCompressorType: OptionalWritableAttribute(
                0x43,
                TlvEnum<AcCompressorType>(),
                { persistent: true, default: AcCompressorType.Unknown, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates the type of errors encountered within the Mini Split AC. Error values are
             * reported with four bytes values. Each bit within the four bytes indicates the unique error.
             *
             * Table 85. ACErrorCode Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.48
             */
            acErrorCode: OptionalWritableAttribute(
                0x44,
                TlvBitmap(TlvUInt32, AcErrorCode),
                { writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute indicates the position of Louver on the AC.
             *
             * Table 86. ACLouverPosition Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.49
             */
            acLouverPosition: OptionalWritableAttribute(
                0x45,
                TlvEnum<AcLouverPosition>(),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute represents the temperature of the AC coil, as measured locally or remotely (over the
             * network).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.50
             */
            acCoilTemperature: OptionalAttribute(0x46, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: null }),

            /**
             * This attribute specifies the format for the ACCapacity attribute.
             *
             * Table 87. ACCapacity Values
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.51
             */
            acCapacityFormat: OptionalWritableAttribute(
                0x47,
                TlvEnum<AcCapacityFormat>(),
                { persistent: true, default: AcCapacityFormat.BtUh, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
             */
            setpointRaiseLower: Command(0x0, TlvSetpointRaiseLowerRequest, 0x0, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
             */
            getRelayStatusLog: OptionalCommand(0x4, TlvNoArguments, 0x1, TlvNoArguments)
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Occupancy.
     */
    export const OccupancyComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or
             * remotely (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other bits
             * are reserved.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.4
             */
            occupancy: Attribute(
                0x2,
                TlvBitmap(TlvUInt8, Occupancy),
                { default: BitsFromPartial(Occupancy, { occupied: true }) }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Heating.
     */
    export const HeatingComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the absolute minimum level that the heating setpoint may be set to. This is a
             * limitation imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.5
             */
            absMinHeatSetpointLimit: OptionalFixedAttribute(0x3, TlvInt16, { default: 700 }),

            /**
             * This attribute specifies the absolute maximum level that the heating setpoint may be set to. This is a
             * limitation imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.6
             */
            absMaxHeatSetpointLimit: OptionalFixedAttribute(0x4, TlvInt16, { default: 3000 }),

            /**
             * This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 when
             * the thermostat is in “off” or “cooling” mode.
             *
             * This attribute is reported regularly and may be used to control a heating device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.10
             */
            piHeatingDemand: OptionalAttribute(0x8, TlvUInt8.bound({ max: 100 })),

            /**
             * This attribute specifies the heating mode setpoint when the room is occupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall be used as the heating mode
             * setpoint.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.14
             */
            occupiedHeatingSetpoint: WritableAttribute(
                0x12,
                TlvInt16.bound({ min: -27315 }),
                { scene: true, persistent: true, default: 2000 }
            ),

            /**
             * This attribute specifies the minimum level that the heating setpoint may be set to.
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
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.17
             */
            minHeatSetpointLimit: OptionalWritableAttribute(
                0x15,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the maximum level that the heating setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.18
             */
            maxHeatSetpointLimit: OptionalWritableAttribute(
                0x16,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Cooling.
     */
    export const CoolingComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the absolute minimum level that the cooling setpoint may be set to. This is a
             * limitation imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.7
             */
            absMinCoolSetpointLimit: OptionalFixedAttribute(0x5, TlvInt16, { default: 1600 }),

            /**
             * This attribute specifies the absolute maximum level that the cooling setpoint may be set to. This is a
             * limitation imposed by the manufacturer.
             *
             * Refer to Setpoint Limits for constraints
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.8
             */
            absMaxCoolSetpointLimit: OptionalFixedAttribute(0x6, TlvInt16, { default: 3200 }),

            /**
             * This attribute specifies the level of cooling demanded by the PI (proportional integral) control loop in
             * use by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating”
             * mode.
             *
             * This attribute is reported regularly and may be used to control a cooling device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.9
             */
            piCoolingDemand: OptionalAttribute(0x7, TlvUInt8.bound({ max: 100 })),

            /**
             * This attribute specifies the cooling mode setpoint when the room is occupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode
             * setpoint.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.13
             */
            occupiedCoolingSetpoint: WritableAttribute(
                0x11,
                TlvInt16.bound({ min: -27315 }),
                { scene: true, persistent: true, default: 2600 }
            ),

            /**
             * This attribute specifies the minimum level that the cooling setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.19
             */
            minCoolSetpointLimit: OptionalWritableAttribute(
                0x17,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the maximum level that the cooling setpoint may be set to.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints
             *
             * then a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.20
             */
            maxCoolSetpointLimit: OptionalWritableAttribute(
                0x18,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if doesn't support feature LTNE.
     */
    export const NotLocalTemperatureNotExposedComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the offset the Thermostat server shall make to the measured temperature
             * (locally or remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting it.
             *
             * The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s
             * preferences (e.g., to match if there are multiple servers displaying different values for the same HVAC
             * area) or compensate for variability amongst temperature sensors.
             *
             * If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported value
             * (e.g., out of the range supported by the Thermostat server), the Thermostat server shall respond with a
             * status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or lower limit reached.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.12
             */
            localTemperatureCalibration: OptionalWritableAttribute(
                0x10,
                TlvInt8.bound({ min: -25, max: 25 }),
                { persistent: true, default: 0, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Cooling and Occupancy.
     */
    export const CoolingAndOccupancyComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the cooling mode setpoint when the room is unoccupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall not be used.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.15
             */
            unoccupiedCoolingSetpoint: WritableAttribute(
                0x13,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, default: 2600 }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Heating and Occupancy.
     */
    export const HeatingAndOccupancyComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the heating mode setpoint when the room is unoccupied.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that these
             * constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * If the occupancy status of the room is unknown, this attribute shall not be used.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.16
             */
            unoccupiedHeatingSetpoint: WritableAttribute(
                0x14,
                TlvInt16.bound({ min: -27315 }),
                { persistent: true, default: 2000 }
            )
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature AutoMode.
     */
    export const AutoModeComponent = ClusterComponent({
        attributes: {
            /**
             * On devices which support the AUTO feature, this attribute specifies the minimum difference between the
             * Heat Setpoint and the Cool Setpoint.
             *
             * Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value which
             * conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to permit
             * this attribute to be set to the desired value. If an attempt is made to set this attribute to a value
             * which is not consistent with the constraints and cannot be resolved by modifying setpoints then a
             * response with the status code CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.21
             */
            minSetpointDeadBand: WritableAttribute(
                0x19,
                TlvInt8.bound({ min: 0, max: 25 }),
                { persistent: true, default: 20, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7
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
    export const ScheduleConfigurationComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute represents the day of the week that this thermostat considers to be the start of week for
             * weekly set point scheduling.
             *
             * Table 77. StartofWeek Values
             *
             * This attribute may be able to be used as the base to determine if the device supports weekly scheduling
             * by reading the attribute. Successful response means that the weekly scheduling is supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.27
             */
            startOfWeek: FixedAttribute(0x20, TlvEnum<StartOfWeek>()),

            /**
             * This attribute determines how many weekly schedule transitions the thermostat is capable of handling.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.28
             */
            numberOfWeeklyTransitions: FixedAttribute(0x21, TlvUInt8, { default: 0 }),

            /**
             * This attribute determines how many daily schedule transitions the thermostat is capable of handling.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.29
             */
            numberOfDailyTransitions: FixedAttribute(0x22, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
             */
            setWeeklySchedule: Command(
                0x1,
                TlvSetWeeklyScheduleRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
             */
            getWeeklySchedule: Command(0x2, TlvGetWeeklyScheduleRequest, 0x0, TlvGetWeeklyScheduleResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
             */
            clearWeeklySchedule: Command(0x3, TlvNoArguments, 0x3, TlvNoResponse, { invokeAcl: AccessLevel.Manage })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports feature Setback.
     */
    export const SetbackComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
             * float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the
             * OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a state change to
             * bring the temperature back to the user’s desired setpoint. This attribute is sometimes also referred to
             * as the “span.”
             *
             * The purpose of this attribute is to allow remote configuration of the span between the desired set
             *
             * point and the measured temperature to help prevent over-cycling and reduce energy bills, though this may
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
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.37
             */
            occupiedSetback: WritableAttribute(
                0x34,
                TlvNullable(TlvUInt8.bound({ max: 254 })),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the minimum value that the Thermostat server will allow the OccupiedSetback
             * attribute to be configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.38
             */
            occupiedSetbackMin: FixedAttribute(
                0x35,
                TlvNullable(TlvUInt8.bound({ min: 0, max: 254 })),
                { default: null }
            ),

            /**
             * This attribute specifies the maximum value that the Thermostat server will allow the OccupiedSetback
             * attribute to be configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.39
             */
            occupiedSetbackMax: FixedAttribute(0x36, TlvNullable(TlvUInt8.bound({ max: 254 })), { default: null })
        }
    });

    /**
     * A ThermostatCluster supports these elements if it supports features Setback and Occupancy.
     */
    export const SetbackAndOccupancyComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
             * float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the
             * UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before initiating a state
             * change to bring the temperature back to the user’s desired setpoint. This attribute is sometimes also
             * referred to as the “span.”
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
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.40
             */
            unoccupiedSetback: WritableAttribute(
                0x37,
                TlvNullable(TlvUInt8.bound({ max: 254 })),
                { persistent: true, default: null, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the minimum value that the Thermostat server will allow the UnoccupiedSetback
             * attribute to be configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.41
             */
            unoccupiedSetbackMin: FixedAttribute(
                0x38,
                TlvNullable(TlvUInt8.bound({ min: 0, max: 254 })),
                { default: null }
            ),

            /**
             * This attribute specifies the maximum value that the Thermostat server will allow the UnoccupiedSetback
             * attribute to be configured by a user.
             *
             * The null value indicates the attribute is unused.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.42
             */
            unoccupiedSetbackMax: FixedAttribute(0x39, TlvNullable(TlvUInt8.bound({ max: 254 })), { default: null })
        }
    });

    /**
     * Thermostat
     *
     * This cluster provides an interface to the functionality of a thermostat.
     *
     * ThermostatCluster supports optional features that you can enable with the ThermostatCluster.with() factory
     * method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a Thermostat cluster with support for optional features. Include each
         * {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a Thermostat cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, OccupancyComponent, { occupancy: true });
            extendCluster(cluster, HeatingComponent, { heating: true });
            extendCluster(cluster, CoolingComponent, { cooling: true });
            extendCluster(cluster, NotLocalTemperatureNotExposedComponent, { localTemperatureNotExposed: false });
            extendCluster(cluster, CoolingAndOccupancyComponent, { cooling: true, occupancy: true });
            extendCluster(cluster, HeatingAndOccupancyComponent, { heating: true, occupancy: true });
            extendCluster(cluster, AutoModeComponent, { autoMode: true });
            extendCluster(cluster, ScheduleConfigurationComponent, { scheduleConfiguration: true });
            extendCluster(cluster, SetbackComponent, { setback: true });
            extendCluster(cluster, SetbackAndOccupancyComponent, { setback: true, occupancy: true });

            preventCluster(
                cluster,
                { autoMode: true, heating: false },
                { autoMode: true, cooling: false },
                { heating: false, cooling: false }
            );

            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { occupancy: true } ? typeof OccupancyComponent : {})
        & (SF extends { heating: true } ? typeof HeatingComponent : {})
        & (SF extends { cooling: true } ? typeof CoolingComponent : {})
        & (SF extends { localTemperatureNotExposed: false } ? typeof NotLocalTemperatureNotExposedComponent : {})
        & (SF extends { cooling: true, occupancy: true } ? typeof CoolingAndOccupancyComponent : {})
        & (SF extends { heating: true, occupancy: true } ? typeof HeatingAndOccupancyComponent : {})
        & (SF extends { autoMode: true } ? typeof AutoModeComponent : {})
        & (SF extends { scheduleConfiguration: true } ? typeof ScheduleConfigurationComponent : {})
        & (SF extends { setback: true } ? typeof SetbackComponent : {})
        & (SF extends { setback: true, occupancy: true } ? typeof SetbackAndOccupancyComponent : {})
        & (SF extends { autoMode: true, heating: false } ? never : {})
        & (SF extends { autoMode: true, cooling: false } ? never : {})
        & (SF extends { heating: false, cooling: false } ? never : {});

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
     * This cluster supports all Thermostat features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = CreateCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,

        attributes: {
            ...Cluster.attributes,
            occupancy: AsConditional(OccupancyComponent.attributes.occupancy, { mandatoryIf: [OCC] }),
            absMinHeatSetpointLimit: AsConditional(
                HeatingComponent.attributes.absMinHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            absMaxHeatSetpointLimit: AsConditional(
                HeatingComponent.attributes.absMaxHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            absMinCoolSetpointLimit: AsConditional(
                CoolingComponent.attributes.absMinCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            absMaxCoolSetpointLimit: AsConditional(
                CoolingComponent.attributes.absMaxCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            piCoolingDemand: AsConditional(CoolingComponent.attributes.piCoolingDemand, { optionalIf: [COOL] }),
            piHeatingDemand: AsConditional(HeatingComponent.attributes.piHeatingDemand, { optionalIf: [HEAT] }),
            localTemperatureCalibration: AsConditional(
                NotLocalTemperatureNotExposedComponent.attributes.localTemperatureCalibration,
                { optionalIf: [] }
            ),
            occupiedCoolingSetpoint: AsConditional(
                CoolingComponent.attributes.occupiedCoolingSetpoint,
                { mandatoryIf: [COOL] }
            ),
            occupiedHeatingSetpoint: AsConditional(
                HeatingComponent.attributes.occupiedHeatingSetpoint,
                { mandatoryIf: [HEAT] }
            ),
            unoccupiedCoolingSetpoint: AsConditional(
                CoolingAndOccupancyComponent.attributes.unoccupiedCoolingSetpoint,
                { mandatoryIf: [COOL_OCC] }
            ),
            unoccupiedHeatingSetpoint: AsConditional(
                HeatingAndOccupancyComponent.attributes.unoccupiedHeatingSetpoint,
                { mandatoryIf: [HEAT_OCC] }
            ),
            minHeatSetpointLimit: AsConditional(
                HeatingComponent.attributes.minHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            maxHeatSetpointLimit: AsConditional(
                HeatingComponent.attributes.maxHeatSetpointLimit,
                { optionalIf: [HEAT] }
            ),
            minCoolSetpointLimit: AsConditional(
                CoolingComponent.attributes.minCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            maxCoolSetpointLimit: AsConditional(
                CoolingComponent.attributes.maxCoolSetpointLimit,
                { optionalIf: [COOL] }
            ),
            minSetpointDeadBand: AsConditional(
                AutoModeComponent.attributes.minSetpointDeadBand,
                { mandatoryIf: [AUTO] }
            ),
            thermostatRunningMode: AsConditional(
                AutoModeComponent.attributes.thermostatRunningMode,
                { optionalIf: [AUTO] }
            ),
            startOfWeek: AsConditional(ScheduleConfigurationComponent.attributes.startOfWeek, { mandatoryIf: [SCH] }),
            numberOfWeeklyTransitions: AsConditional(
                ScheduleConfigurationComponent.attributes.numberOfWeeklyTransitions,
                { mandatoryIf: [SCH] }
            ),
            numberOfDailyTransitions: AsConditional(
                ScheduleConfigurationComponent.attributes.numberOfDailyTransitions,
                { mandatoryIf: [SCH] }
            ),
            occupiedSetback: AsConditional(SetbackComponent.attributes.occupiedSetback, { mandatoryIf: [SB] }),
            occupiedSetbackMin: AsConditional(SetbackComponent.attributes.occupiedSetbackMin, { mandatoryIf: [SB] }),
            occupiedSetbackMax: AsConditional(SetbackComponent.attributes.occupiedSetbackMax, { mandatoryIf: [SB] }),
            unoccupiedSetback: AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetback,
                { mandatoryIf: [SB_OCC] }
            ),
            unoccupiedSetbackMin: AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetbackMin,
                { mandatoryIf: [SB_OCC] }
            ),
            unoccupiedSetbackMax: AsConditional(
                SetbackAndOccupancyComponent.attributes.unoccupiedSetbackMax,
                { mandatoryIf: [SB_OCC] }
            )
        },

        commands: {
            ...Cluster.commands,
            setWeeklySchedule: AsConditional(
                ScheduleConfigurationComponent.commands.setWeeklySchedule,
                { mandatoryIf: [SCH] }
            ),
            getWeeklySchedule: AsConditional(
                ScheduleConfigurationComponent.commands.getWeeklySchedule,
                { mandatoryIf: [SCH] }
            ),
            clearWeeklySchedule: AsConditional(
                ScheduleConfigurationComponent.commands.clearWeeklySchedule,
                { mandatoryIf: [SCH] }
            )
        }
    });
}

export type ThermostatCluster = typeof Thermostat.Cluster;
export const ThermostatCluster = Thermostat.Cluster;
