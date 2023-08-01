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
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import {
    FixedAttribute,
    OptionalAttribute,
    Attribute,
    OptionalWritableAttribute,
    AccessLevel,
    WritableAttribute,
    OptionalEvent,
    EventPriority,
    OptionalFixedAttribute,
    Cluster as CreateCluster
} from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16, TlvBitmap, TlvEnum, TlvUInt24, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace PumpConfigurationAndControl {
    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1
     */
    export const PumpStatusBitmap = {
        /**
         * A fault related to the system or pump device is detected.
         *
         * If this bit is set, it may correspond to an event in the range 2-16, see Events.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.1
         */
        deviceFault: BitFlag(0),

        /**
         * A fault related to the supply to the pump is detected.
         *
         * If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.2
         */
        supplyFault: BitFlag(1),

        /**
         * Setpoint is too low to achieve.
         */
        speedLow: BitFlag(2),

        /**
         * Setpoint is too high to achieve.
         */
        speedHigh: BitFlag(3),

        /**
         * Device control is overridden by hardware, such as an external STOP button or via a local HMI.
         *
         * While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode
         * shall generate a FAILURE error status until LocalOverride is cleared on the physical device. When
         * LocalOverride is cleared, the device shall return to the operation mode set in OperationMode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.3
         */
        localOverride: BitFlag(4),

        /**
         * Pump is currently running
         */
        running: BitFlag(5),

        /**
         * A remote pressure sensor is used as the sensor for the regulation of the pump.
         *
         * If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as
         * a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.4
         */
        remotePressure: BitFlag(6),

        /**
         * A remote flow sensor is used as the sensor for the regulation of the pump.
         *
         * If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a
         * percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.5
         */
        remoteFlow: BitFlag(7),

        /**
         * A remote temperature sensor is used as the sensor for the regulation of the pump.
         *
         * If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is
         * interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue])
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.6
         */
        remoteTemperature: BitFlag(8)
    };

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.2
     */
    export const enum OperationMode {
        /**
         * The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode
         * attribute.
         *
         * If the pump is running in this operation mode the setpoint is an internal variable which may be controlled
         * between 0% and 100%, e.g., by means of the Level Control cluster
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.2.1
         */
        Normal = 0,

        /**
         * This value sets the pump to run at the minimum possible speed it can without being stopped.
         */
        Minimum = 1,

        /**
         * This value sets the pump to run at its maximum possible speed.
         */
        Maximum = 2,

        /**
         * This value sets the pump to run with the local settings of the pump, regardless of what these are.
         */
        Local = 3
    }

    /**
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3
     */
    export const enum ControlMode {
        /**
         * The pump is running at a constant speed.
         *
         * The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – MaxConstSpeed]
         * attributes.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.1
         */
        ConstantSpeed = 0,

        /**
         * The pump will regulate its speed to maintain a constant differential pressure over its flanges.
         *
         * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
         * of the internal pressure sensor, this will be the range derived from the [MinConstPressure –
         * MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived from the
         * [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.2
         */
        ConstantPressure = 1,

        /**
         * The pump will regulate its speed to maintain a constant differential pressure over its flanges.
         *
         * The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – MaxCompPressure]
         * attributes. The internal setpoint will be lowered (compensated) dependent on the flow in the pump (lower
         * flow ⇒ lower internal setpoint).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.3
         */
        ProportionalPressure = 2,

        /**
         * The pump will regulate its speed to maintain a constant flow through the pump.
         *
         * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
         * of the internal flow sensor, this will be the range derived from the [MinConstFlow – MaxConstFlow]
         * attributes. In case of a remote flow sensor, this will be the range derived from the [MinMeasuredValue –
         * MaxMeasuredValue] attributes of the remote flow sensor.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.4
         */
        ConstantFlow = 3,

        /**
         * The pump will regulate its speed to maintain a constant temperature.
         *
         * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case
         * of the internal temperature sensor, this will be the range derived from the [MinConstTemp – MaxConstTemp]
         * attributes. In case of a remote temperature sensor, this will be the range derived from the
         * [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.5
         */
        ConstantTemperature = 5,

        /**
         * The operation of the pump is automatically optimized to provide the most suitable performance with respect
         * to comfort and energy savings.
         *
         * This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level control
         * cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the speed of the
         * pump is entirely determined by the pump.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.6
         */
        Automatic = 7
    }

    /**
     * These are optional features supported by PumpConfigurationAndControlCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.4
     */
    export enum Feature {
        /**
         * ConstantPressure
         *
         * Supports operating in constant pressure mode
         */
        ConstantPressure = "ConstantPressure",

        /**
         * CompensatedPressure
         *
         * Supports operating in compensated pressure mode
         */
        CompensatedPressure = "CompensatedPressure",

        /**
         * ConstantFlow
         *
         * Supports operating in constant flow mode
         */
        ConstantFlow = "ConstantFlow",

        /**
         * ConstantSpeed
         *
         * Supports operating in constant speed mode
         */
        ConstantSpeed = "ConstantSpeed",

        /**
         * ConstantTemperature
         *
         * Supports operating in constant temperature mode
         */
        ConstantTemperature = "ConstantTemperature",

        /**
         * Automatic
         *
         * Supports operating in automatic mode
         */
        Automatic = "Automatic",

        /**
         * LocalOperation
         *
         * Supports operating using local settings
         */
        LocalOperation = "LocalOperation"
    }

    /**
     * These elements and properties are present in all PumpConfigurationAndControl clusters.
     */
    export const Base = BaseClusterComponent({
        id: 0x200,
        name: "PumpConfigurationAndControl",
        revision: 4,

        features: {
            /**
             * ConstantPressure
             *
             * Supports operating in constant pressure mode
             */
            constantPressure: BitFlag(0),

            /**
             * CompensatedPressure
             *
             * Supports operating in compensated pressure mode
             */
            compensatedPressure: BitFlag(1),

            /**
             * ConstantFlow
             *
             * Supports operating in constant flow mode
             */
            constantFlow: BitFlag(2),

            /**
             * ConstantSpeed
             *
             * Supports operating in constant speed mode
             */
            constantSpeed: BitFlag(3),

            /**
             * ConstantTemperature
             *
             * Supports operating in constant temperature mode
             */
            constantTemperature: BitFlag(4),

            /**
             * Automatic
             *
             * Supports operating in automatic mode
             */
            automatic: BitFlag(5),

            /**
             * LocalOperation
             *
             * Supports operating using local settings
             */
            localOperation: BitFlag(6)
        },

        attributes: {
            /**
             * This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.1
             */
            maxPressure: FixedAttribute(0x0, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.2
             */
            maxSpeed: FixedAttribute(0x1, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.3
             */
            maxFlow: FixedAttribute(0x2, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
             * a pump controller function is active, the corresponding bit shall be set to 1. Where a pump controller
             * function is not active, the corresponding bit shall be set to 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.14
             */
            pumpStatus: OptionalAttribute(0x10, TlvBitmap(TlvUInt16, PumpStatusBitmap)),

            /**
             * This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.
             *
             * The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless one
             * of the following points are true:
             *
             *   • The pump is physically set to run with the local settings
             *
             *   • The LocalOverride bit in the PumpStatus attribute is set,
             *
             * See OperationMode and ControlMode attributes for a detailed description of the operation and control of
             * the pump.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.15
             */
            effectiveOperationMode: Attribute(0x11, TlvEnum<OperationMode>(), { persistent: true }),

            /**
             * This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.
             *
             * This attribute contains the control mode that currently applies to the pump. It will have the value of
             * the ControlMode attribute, unless one of the following points are true:
             *
             *   • The ControlMode attribute is set to Automatic. In this case, the value of the EffectiveControlMode
             *     shall match the behavior of the pump.
             *
             *   • A remote sensor is used as the sensor for regulation of the pump. In this case, EffectiveControlMode
             *     will display ConstantPressure, ConstantFlow or ConstantTemperature if the remote sensor is a
             *     pressure sensor, a flow sensor or a temperature sensor respectively, regardless of the value of the
             *     ControlMode attribute.
             *
             * In case the ControlMode attribute is not included on the device and no remote sensors are connected, the
             * value of the EffectiveControlMode shall match the vendor-specific behavior of the pump.
             *
             * See OperationMode and ControlMode attributes for detailed a description of the operation and control of
             * the pump.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.16
             */
            effectiveControlMode: Attribute(0x12, TlvEnum<ControlMode>(), { persistent: true }),

            /**
             * This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
             * setpoint value. It is updated dynamically as the speed of the pump changes.
             *
             * If the value is not available (the measurement or estimation of the speed is done in the pump), this
             * attribute will indicate the null value.
             *
             * Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, values
             * of capacity less than zero have no physical meaning.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.17
             */
            capacity: Attribute(0x13, TlvNullable(TlvInt16.bound({ min: 0 })), { default: null }),

            /**
             * This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
             * speed of the pump changes.
             *
             * If the value is not available (the measurement or estimation of the speed is done in the pump), this
             * attribute will indicate the null value.
             *
             * Valid range is 0 to 65.534 RPM.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.18
             */
            speed: OptionalAttribute(0x14, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the accumulated number of hours that the pump has been powered and the motor
             * has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
             * pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).
             *
             * This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If
             *
             * the value is not available, this attribute will indicate the null value. Valid range is 0 to 16,777,214
             * hrs.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.19
             */
            lifetimeRunningHours: OptionalWritableAttribute(
                0x15,
                TlvNullable(TlvUInt24),
                { persistent: true, default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
             * is updated dynamically as the power consumption of the pump changes.
             *
             * This attribute is read only. If the value is not available (the measurement of power consumption is not
             * done in the pump), this attribute will indicate the null value.
             *
             * Valid range is 0 to 16,777,214 Watts.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.20
             */
            power: OptionalAttribute(0x16, TlvNullable(TlvUInt24), { default: null }),

            /**
             * This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
             * the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
             * consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
             * and starts at 0 (zero).
             *
             * This attribute is writeable, in order to allow setting to an appropriate value after maintenance.
             *
             * Valid range is 0 kWh to 4,294,967,294 kWh.
             *
             * This attribute shall be null if the value is unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.21
             */
            lifetimeEnergyConsumed: OptionalWritableAttribute(
                0x17,
                TlvNullable(TlvUInt32),
                { persistent: true, default: 0, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the operation mode of the pump as defined in OperationModeEnum.
             *
             * The actual operating mode of the pump is a result of the setting of the attributes OperationMode,
             * ControlMode and the optional connection of a remote sensor. The operation and control is prioritized as
             * shown in the scheme below:
             *
             * Priority Scheme of Pump Operation and Control
             *
             * If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is
             * operated.
             *
             * If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote sensor
             * decides the control mode of the pump. A connected remote pressure sensor will make the pump run in
             * control mode Constant pressure and vice versa for flow and temperature type sensors. This is regardless
             * of the setting of the ControlMode attribute.
             *
             * If this attribute is Normal and no remote sensor is connected, the control mode of the pump is decided
             * by the ControlMode attribute.
             *
             * OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at the
             * point of changing the value of this attribute is vendor-specific.
             *
             * In the case a device does not support a specific operation mode, the write interaction to this attribute
             * with an unsupported operation mode value shall be ignored and a response containing the status of
             * CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.22
             */
            operationMode: WritableAttribute(
                0x20,
                TlvEnum<OperationMode>(),
                { persistent: true, default: OperationMode.Normal, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the control mode of the pump as defined in ControlModeEnum.
             *
             * See the OperationMode attribute for a detailed description of the operation and control of the
             *
             * pump.
             *
             * ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at the
             * point of changing is vendor-specific.
             *
             * In the case a device does not support a specific control mode, the write interaction to this attribute
             * with an unsupported control mode value shall be ignored and a response containing the status of
             * CONSTRAINT_ERROR shall be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.23
             */
            controlMode: OptionalWritableAttribute(
                0x21,
                TlvEnum<ControlMode>(),
                { persistent: true, default: ControlMode.ConstantSpeed, writeAcl: AccessLevel.Manage }
            )
        },

        events: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            supplyVoltageLow: OptionalEvent(0x0, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            supplyVoltageHigh: OptionalEvent(0x1, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            powerMissingPhase: OptionalEvent(0x2, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            systemPressureLow: OptionalEvent(0x3, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            systemPressureHigh: OptionalEvent(0x4, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            dryRunning: OptionalEvent(0x5, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            motorTemperatureHigh: OptionalEvent(0x6, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            pumpMotorFatalFailure: OptionalEvent(0x7, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicTemperatureHigh: OptionalEvent(0x8, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            pumpBlocked: OptionalEvent(0x9, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            sensorFailure: OptionalEvent(0xa, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicNonFatalFailure: OptionalEvent(0xb, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicFatalFailure: OptionalEvent(0xc, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            generalFault: OptionalEvent(0xd, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            leakage: OptionalEvent(0xe, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            airDetection: OptionalEvent(0xf, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            turbineOperation: OptionalEvent(0x10, EventPriority.Info, TlvNoArguments)
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantPressure.
     */
    export const ConstantPressureComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.4
             */
            minConstPressure: FixedAttribute(0x3, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the maximum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.5
             */
            maxConstPressure: FixedAttribute(0x4, TlvNullable(TlvInt16), { default: null })
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature Automatic.
     */
    export const AutomaticComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.4
             */
            minConstPressure: OptionalFixedAttribute(0x3, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the maximum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.5
             */
            maxConstPressure: OptionalFixedAttribute(0x4, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.6
             */
            minCompPressure: OptionalFixedAttribute(0x5, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.7
             */
            maxCompPressure: OptionalFixedAttribute(0x6, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.8
             */
            minConstSpeed: OptionalFixedAttribute(0x7, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.9
             */
            maxConstSpeed: OptionalFixedAttribute(0x8, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the minimum flow the pump can achieve when it is working with the Con
             *
             * trolMode attribute set to ConstantFlow.
             *
             * Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.10
             */
            minConstFlow: OptionalFixedAttribute(0x9, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantFlow.
             *
             * Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.11
             */
            maxConstFlow: OptionalFixedAttribute(0xa, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the minimum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.12
             */
            minConstTemp: OptionalFixedAttribute(0xb, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: null }),

            /**
             * This attribute specifies the maximum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * MaxConstTemp shall be greater than or equal to MinConstTemp
             *
             * Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.13
             */
            maxConstTemp: OptionalFixedAttribute(0xc, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: null })
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature CompensatedPressure.
     */
    export const CompensatedPressureComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.6
             */
            minCompPressure: FixedAttribute(0x5, TlvNullable(TlvInt16), { default: null }),

            /**
             * This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the value
             * is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.7
             */
            maxCompPressure: FixedAttribute(0x6, TlvNullable(TlvInt16), { default: null })
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantSpeed.
     */
    export const ConstantSpeedComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.8
             */
            minConstSpeed: FixedAttribute(0x7, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.9
             */
            maxConstSpeed: FixedAttribute(0x8, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null })
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantFlow.
     */
    export const ConstantFlowComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum flow the pump can achieve when it is working with the Con
             *
             * trolMode attribute set to ConstantFlow.
             *
             * Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.10
             */
            minConstFlow: FixedAttribute(0x9, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null }),

            /**
             * This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantFlow.
             *
             * Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.11
             */
            maxConstFlow: FixedAttribute(0xa, TlvNullable(TlvUInt16.bound({ max: 65534 })), { default: null })
        }
    });

    /**
     * A PumpConfigurationAndControlCluster supports these elements if it supports feature ConstantTemperature.
     */
    export const ConstantTemperatureComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute specifies the minimum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.12
             */
            minConstTemp: FixedAttribute(0xb, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: null }),

            /**
             * This attribute specifies the maximum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * MaxConstTemp shall be greater than or equal to MinConstTemp
             *
             * Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the value is
             * invalid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.13
             */
            maxConstTemp: FixedAttribute(0xc, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: null })
        }
    });

    /**
     * Pump Configuration and Control
     *
     * The Pump Configuration and Control cluster provides an interface for the setup and control of pump devices, and
     * the automatic reporting of pump status information. Note that control of pump speed is not included – speed is
     * controlled by the On/Off and Level Control clusters.
     *
     * PumpConfigurationAndControlCluster supports optional features that you can enable with the
     * PumpConfigurationAndControlCluster.with() factory method.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2
     */
    export const Cluster = ExtensibleCluster({
        ...Base,

        /**
         * Use this factory method to create a PumpConfigurationAndControl cluster with support for optional features.
         * Include each {@link Feature} you wish to support.
         *
         * @param features the optional features to support
         * @returns a PumpConfigurationAndControl cluster with specified features enabled
         * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
         */
        factory: <T extends `${Feature}`[]>(...features: [...T]) => {
            validateFeatureSelection(features, Feature);
            const cluster = CreateCluster({ ...Base, supportedFeatures: BitFlags(Base.features, ...features) });
            extendCluster(cluster, ConstantPressureComponent, { constantPressure: true });
            extendCluster(cluster, AutomaticComponent, { automatic: true });
            extendCluster(cluster, CompensatedPressureComponent, { compensatedPressure: true });
            extendCluster(cluster, ConstantSpeedComponent, { constantSpeed: true });
            extendCluster(cluster, ConstantFlowComponent, { constantFlow: true });
            extendCluster(cluster, ConstantTemperatureComponent, { constantTemperature: true });

            preventCluster(
                cluster,

                {
                    constantPressure: false,
                    compensatedPressure: false,
                    constantFlow: false,
                    constantSpeed: false,
                    constantTemperature: false
                }
            );

            return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>;
        }
    });

    export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =
        ClusterForBaseCluster<typeof Base, SF>
        & { supportedFeatures: SF }
        & (SF extends { constantPressure: true } ? typeof ConstantPressureComponent : {})
        & (SF extends { automatic: true } ? typeof AutomaticComponent : {})
        & (SF extends { compensatedPressure: true } ? typeof CompensatedPressureComponent : {})
        & (SF extends { constantSpeed: true } ? typeof ConstantSpeedComponent : {})
        & (SF extends { constantFlow: true } ? typeof ConstantFlowComponent : {})
        & (SF extends { constantTemperature: true } ? typeof ConstantTemperatureComponent : {})
        & (SF extends { constantPressure: false, compensatedPressure: false, constantFlow: false, constantSpeed: false, constantTemperature: false } ? never : {});

    const PRSCONST = { constantPressure: true };
    const AUTO = { automatic: true };
    const PRSCOMP = { compensatedPressure: true };
    const SPD = { constantSpeed: true };
    const FLW = { constantFlow: true };
    const TEMP = { constantTemperature: true };

    /**
     * This cluster supports all PumpConfigurationAndControl features. It may support illegal feature combinations.
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
            minConstPressure: AsConditional(
                ConstantPressureComponent.attributes.minConstPressure,
                { mandatoryIf: [PRSCONST], optionalIf: [AUTO] }
            ),
            maxConstPressure: AsConditional(
                ConstantPressureComponent.attributes.maxConstPressure,
                { mandatoryIf: [PRSCONST], optionalIf: [AUTO] }
            ),
            minCompPressure: AsConditional(
                AutomaticComponent.attributes.minCompPressure,
                { optionalIf: [AUTO], mandatoryIf: [PRSCOMP] }
            ),
            maxCompPressure: AsConditional(
                AutomaticComponent.attributes.maxCompPressure,
                { optionalIf: [AUTO], mandatoryIf: [PRSCOMP] }
            ),
            minConstSpeed: AsConditional(
                AutomaticComponent.attributes.minConstSpeed,
                { optionalIf: [AUTO], mandatoryIf: [SPD] }
            ),
            maxConstSpeed: AsConditional(
                AutomaticComponent.attributes.maxConstSpeed,
                { optionalIf: [AUTO], mandatoryIf: [SPD] }
            ),
            minConstFlow: AsConditional(
                AutomaticComponent.attributes.minConstFlow,
                { optionalIf: [AUTO], mandatoryIf: [FLW] }
            ),
            maxConstFlow: AsConditional(
                AutomaticComponent.attributes.maxConstFlow,
                { optionalIf: [AUTO], mandatoryIf: [FLW] }
            ),
            minConstTemp: AsConditional(
                AutomaticComponent.attributes.minConstTemp,
                { optionalIf: [AUTO], mandatoryIf: [TEMP] }
            ),
            maxConstTemp: AsConditional(
                AutomaticComponent.attributes.maxConstTemp,
                { optionalIf: [AUTO], mandatoryIf: [TEMP] }
            )
        },

        events: Cluster.events
    });
}

export type PumpConfigurationAndControlCluster = typeof PumpConfigurationAndControl.Cluster;
export const PumpConfigurationAndControlCluster = PumpConfigurationAndControl.Cluster;
