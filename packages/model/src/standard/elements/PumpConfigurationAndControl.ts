/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const PumpConfigurationAndControl = Cluster(
    {
        name: "PumpConfigurationAndControl", id: 0x200, classification: "application", pics: "PCC",

        details: "The Pump Configuration and Control cluster provides an interface for the setup and control of pump " +
            "devices, and the automatic reporting of pump status information. Note that control of pump speed is " +
            "not included – speed is controlled by the On/Off and Level Control clusters." +
            "\n" +
            "### Pump controller Pump" +
            "\n" +
            "C Pump configuration and control S C Level control S" +
            "\n" +
            "C On/Off S" +
            "\n" +
            "C = Client S = Server" +
            "\n" +
            "Note: Device names are examples for illustration purposes only" +
            "\n" +
            "Figure 14. Typical Usage of Pump Configuration and Control Cluster",

        xref: { document: "cluster", section: "4.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "4.2.4" } },
        Field({
            name: "PRSCONST", conformance: "O.a+", constraint: "0", description: "ConstantPressure",
            details: "Supports operating in constant pressure mode"
        }),
        Field({
            name: "PRSCOMP", conformance: "O.a+", constraint: "1", description: "CompensatedPressure",
            details: "Supports operating in compensated pressure mode"
        }),
        Field({
            name: "FLW", conformance: "O.a+", constraint: "2", description: "ConstantFlow",
            details: "Supports operating in constant flow mode"
        }),
        Field({
            name: "SPD", conformance: "O.a+", constraint: "3", description: "ConstantSpeed",
            details: "Supports operating in constant speed mode"
        }),
        Field({
            name: "TEMP", conformance: "O.a+", constraint: "4", description: "ConstantTemperature",
            details: "Supports operating in constant temperature mode"
        }),
        Field({
            name: "AUTO", conformance: "O", constraint: "5", description: "Automatic",
            details: "Supports operating in automatic mode"
        }),
        Field({
            name: "LOCAL", conformance: "O", constraint: "6", description: "LocalOperation",
            details: "Supports operating using local settings"
        })
    ),

    Attribute({
        name: "MaxPressure", id: 0x0, type: "int16", access: "R V", conformance: "M", default: null,
        quality: "X F",
        details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does " +
            "not apply to any specific control mode or operation mode." +
            "\n" +
            "Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.1" }
    }),

    Attribute({
        name: "MaxSpeed", id: 0x1, type: "uint16", access: "R V", conformance: "M", default: null,
        quality: "X F",
        details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does " +
            "not apply to any specific control mode or operation mode." +
            "\n" +
            "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.2" }
    }),

    Attribute({
        name: "MaxFlow", id: 0x2, type: "uint16", access: "R V", conformance: "M", default: null,
        quality: "X F",
        details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not " +
            "apply to any specific control mode or operation mode." +
            "\n" +
            "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.3" }
    }),

    Attribute({
        name: "MinConstPressure", id: 0x3, type: "int16", access: "R V", conformance: "PRSCONST, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the " +
            "ControlMode attribute set to ConstantPressure." +
            "\n" +
            "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.4" }
    }),

    Attribute({
        name: "MaxConstPressure", id: 0x4, type: "int16", access: "R V", conformance: "PRSCONST, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the " +
            "ControlMode attribute set to ConstantPressure." +
            "\n" +
            "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.5" }
    }),

    Attribute({
        name: "MinCompPressure", id: 0x5, type: "int16", access: "R V", conformance: "PRSCOMP, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working " +
            "with the ControlMode attribute set to ProportionalPressure." +
            "\n" +
            "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.6" }
    }),

    Attribute({
        name: "MaxCompPressure", id: 0x6, type: "int16", access: "R V", conformance: "PRSCOMP, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working " +
            "with the ControlMode attribute set to ProportionalPressure." +
            "\n" +
            "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.7" }
    }),

    Attribute({
        name: "MinConstSpeed", id: 0x7, type: "uint16", access: "R V", conformance: "SPD, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the minimum speed the pump can achieve when it is working with the Con" +
            "\n" +
            "trolMode attribute set to ConstantSpeed." +
            "\n" +
            "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.8" }
    }),

    Attribute({
        name: "MaxConstSpeed", id: 0x8, type: "uint16", access: "R V", conformance: "SPD, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the maximum speed the pump can achieve when it is working with the " +
            "ControlMode attribute set to ConstantSpeed." +
            "\n" +
            "Valid range is 0 to 65,534 RPM (steps of 1 RPM). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.9" }
    }),

    Attribute({
        name: "MinConstFlow", id: 0x9, type: "uint16", access: "R V", conformance: "FLW, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the minimum flow the pump can achieve when it is working with the " +
            "ControlMode attribute set to ConstantFlow." +
            "\n" +
            "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.10" }
    }),

    Attribute({
        name: "MaxConstFlow", id: 0xa, type: "uint16", access: "R V", conformance: "FLW, [AUTO]",
        default: null, quality: "X F",
        details: "This attribute specifies the maximum flow the pump can achieve when it is working with the " +
            "ControlMode attribute set to ConstantFlow." +
            "\n" +
            "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.11" }
    }),

    Attribute({
        name: "MinConstTemp", id: 0xb, type: "int16", access: "R V", conformance: "TEMP, [AUTO]",
        constraint: "min -27315", default: null, quality: "X F",
        details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is " +
            "working with the ControlMode attribute set to ConstantTemperature." +
            "\n" +
            "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). Null if the value is invalid.",
        xref: { document: "cluster", section: "4.2.7.12" }
    }),

    Attribute({
        name: "MaxConstTemp", id: 0xc, type: "int16", access: "R V", conformance: "TEMP, [AUTO]",
        constraint: "min -27315", default: null, quality: "X F",

        details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is " +
            "working with the ControlMode attribute set to ConstantTemperature." +
            "\n" +
            "MaxConstTemp shall be greater than or equal to MinConstTemp" +
            "\n" +
            "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). Null if the value is invalid.",

        xref: { document: "cluster", section: "4.2.7.13" }
    }),

    Attribute({
        name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap", access: "R V", conformance: "O",
        constraint: "desc", default: 0, quality: "P",
        details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. " +
            "Where a pump controller function is active, the corresponding bit shall be set to 1. Where a pump" +
            "\n" +
            "controller function is not active, the corresponding bit shall be set to 0.",
        xref: { document: "cluster", section: "4.2.7.14" }
    }),

    Attribute({
        name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum", access: "R V",
        conformance: "M", constraint: "desc", quality: "N",

        details: "This attribute specifies current effective operation mode of the pump as defined in " +
            "OperationModeEnum." +
            "\n" +
            "The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, unless " +
            "one of the following points are true:" +
            "\n" +
            "  • The pump is physically set to run with the local settings" +
            "\n" +
            "  • The LocalOverride bit in the PumpStatus attribute is set," +
            "\n" +
            "See OperationMode and ControlMode attributes for a detailed description of the operation and control " +
            "of the pump.",

        xref: { document: "cluster", section: "4.2.7.15" }
    }),

    Attribute({
        name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum", access: "R V", conformance: "M",
        constraint: "desc", quality: "N",

        details: "This attribute specifies the current effective control mode of the pump as defined in " +
            "ControlModeEnum." +
            "\n" +
            "This attribute contains the control mode that currently applies to the pump. It will have the value " +
            "of the ControlMode attribute, unless one of the following points are true:" +
            "\n" +
            "  • The ControlMode attribute is set to Automatic. In this case, the value of the " +
            "    EffectiveControlMode shall match the behavior of the pump." +
            "\n" +
            "  • A remote sensor is used as the sensor for regulation of the pump. In this case, " +
            "    EffectiveControlMode will display ConstantPressure, ConstantFlow or ConstantTemperature if the " +
            "    remote sensor is a pressure sensor, a flow sensor or a temperature sensor respectively, " +
            "    regardless of the value of the ControlMode attribute." +
            "\n" +
            "In case the ControlMode attribute is not included on the device and no remote sensors are connected, " +
            "the value of the EffectiveControlMode shall match the vendor-specific behavior of the pump." +
            "\n" +
            "See OperationMode and ControlMode attributes for detailed a description of the operation and control " +
            "of the pump.",

        xref: { document: "cluster", section: "4.2.7.16" }
    }),

    Attribute({
        name: "Capacity", id: 0x13, type: "int16", access: "R V", conformance: "M", default: null,
        quality: "X P",

        details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum " +
            "setpoint value. It is updated dynamically as the speed of the pump changes." +
            "\n" +
            "If the value is not available (the measurement or estimation of the speed is done in the pump), this " +
            "attribute will indicate the null value." +
            "\n" +
            "Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, " +
            "values of capacity less than zero have no physical meaning.",

        xref: { document: "cluster", section: "4.2.7.17" }
    }),

    Attribute({
        name: "Speed", id: 0x14, type: "uint16", access: "R V", conformance: "O", default: null,
        quality: "X",

        details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as " +
            "the speed of the pump changes." +
            "\n" +
            "If the value is not available (the measurement or estimation of the speed is done in the pump), this " +
            "attribute will indicate the null value." +
            "\n" +
            "Valid range is 0 to 65,534 RPM.",

        xref: { document: "cluster", section: "4.2.7.18" }
    }),

    Attribute({
        name: "LifetimeRunningHours", id: 0x15, type: "uint24", access: "RW VM", conformance: "O",
        default: 0, quality: "X N",

        details: "This attribute specifies the accumulated number of hours that the pump has been powered and the " +
            "motor has been running. It is updated dynamically as it increases. It is preserved over power cycles " +
            "of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 " +
            "(zero)." +
            "\n" +
            "This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If " +
            "the value is not available, this attribute will indicate the null value." +
            "\n" +
            "Valid range is 0 to 16,777,214 hrs.",

        xref: { document: "cluster", section: "4.2.7.19" }
    }),

    Attribute({
        name: "Power", id: 0x16, type: "uint24", access: "R V", conformance: "O", default: null,
        quality: "X",

        details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this " +
            "attribute is updated dynamically as the power consumption of the pump changes." +
            "\n" +
            "This attribute is read only. If the value is not available (the measurement of power consumption is " +
            "not done in the pump), this attribute will indicate the null value." +
            "\n" +
            "Valid range is 0 to 16,777,214 Watts.",

        xref: { document: "cluster", section: "4.2.7.20" }
    }),

    Attribute({
        name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32", access: "RW VM", conformance: "O",
        default: 0, quality: "X N",

        details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime " +
            "of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the " +
            "energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it " +
            "“rolls over” and starts at 0 (zero)." +
            "\n" +
            "This attribute is writeable, in order to allow setting to an appropriate value after maintenance." +
            "\n" +
            "Valid range is 0 kWh to 4,294,967,294 kWh." +
            "\n" +
            "Null if the value is unknown.",

        xref: { document: "cluster", section: "4.2.7.21" }
    }),

    Attribute({
        name: "OperationMode", id: 0x20, type: "OperationModeEnum", access: "RW VM", conformance: "M",
        constraint: "desc", default: 0, quality: "N",

        details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum." +
            "\n" +
            "The actual operating mode of the pump is a result of the setting of the attributes OperationMode, " +
            "ControlMode and the optional connection of a remote sensor. The operation and control is prioritized " +
            "as shown in the scheme below:" +
            "\n" +
            "Priority Scheme of Pump Operation and Control" +
            "\n" +
            "If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is " +
            "operated." +
            "\n" +
            "If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote " +
            "sensor decides the control mode of the pump. A connected remote pressure sensor will make the pump " +
            "run in control mode Constant pressure and vice versa for flow and temperature type sensors. This is " +
            "regardless of the setting of the ControlMode attribute." +
            "\n" +
            "If this attribute is Normal and no remote sensor is connected, the control mode of the pump is " +
            "decided by the ControlMode attribute." +
            "\n" +
            "OperationMode may be changed at any time, even when the pump is running. The behavior of the pump at " +
            "the point of changing the value of this attribute is vendor-specific." +
            "\n" +
            "In the case a device does not support a specific operation mode, the write interaction to this " +
            "attribute with an unsupported operation mode value shall be ignored and a response containing the " +
            "status of CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.2.7.22" }
    }),

    Attribute({
        name: "ControlMode", id: 0x21, type: "ControlModeEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",

        details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum." +
            "\n" +
            "See the OperationMode attribute for a detailed description of the operation and control of the pump." +
            "\n" +
            "ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at " +
            "the point of changing is vendor-specific." +
            "\n" +
            "In the case a device does not support a specific control mode, the write interaction to this " +
            "attribute with an unsupported control mode value shall be ignored and a response containing the " +
            "status of CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.2.7.23" }
    }),

    Attribute({ name: "AlarmMask", id: 0x22, type: "uint16", conformance: "D", xref: { document: "cluster", section: "4.2.7" } }),
    Event({
        name: "SupplyVoltageLow", id: 0x0, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "SupplyVoltageHigh", id: 0x1, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "PowerMissingPhase", id: 0x2, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "SystemPressureLow", id: 0x3, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "SystemPressureHigh", id: 0x4, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "DryRunning", id: 0x5, access: "V", conformance: "O", priority: "critical",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "MotorTemperatureHigh", id: 0x6, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "PumpMotorFatalFailure", id: 0x7, access: "V", conformance: "O", priority: "critical",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "ElectronicTemperatureHigh", id: 0x8, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "PumpBlocked", id: 0x9, access: "V", conformance: "O", priority: "critical",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "SensorFailure", id: 0xa, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "ElectronicNonFatalFailure", id: 0xb, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "ElectronicFatalFailure", id: 0xc, access: "V", conformance: "O", priority: "critical",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "GeneralFault", id: 0xd, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "Leakage", id: 0xe, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "AirDetection", id: 0xf, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),
    Event({
        name: "TurbineOperation", id: 0x10, access: "V", conformance: "O", priority: "info",
        xref: { document: "cluster", section: "4.2.8" }
    }),

    Datatype(
        { name: "PumpStatusBitmap", type: "map16", xref: { document: "cluster", section: "4.2.6.1" } },

        Field({
            name: "DeviceFault", constraint: "0",
            description: "A fault related to the system or pump device is detected.",
            details: "If this bit is set, it may correspond to an event in the range 2-16, see Events.",
            xref: { document: "cluster", section: "4.2.6.1.1" }
        }),

        Field({
            name: "SupplyFault", constraint: "1",
            description: "A fault related to the supply to the pump is detected.",
            details: "If this bit is set, it may correspond to an event in the range 0-1 or 13, see Events.",
            xref: { document: "cluster", section: "4.2.6.1.2" }
        }),

        Field({ name: "SpeedLow", constraint: "2", description: "Setpoint is too low to achieve." }),
        Field({ name: "SpeedHigh", constraint: "3", description: "Setpoint is too high to achieve." }),

        Field({
            name: "LocalOverride", constraint: "4",
            description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
            details: "While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing " +
                "OperationMode shall generate a FAILURE error status until LocalOverride is cleared on the physical " +
                "device. When LocalOverride is cleared, the device shall return to the operation mode set in " +
                "OperationMode.",
            xref: { document: "cluster", section: "4.2.6.1.3" }
        }),

        Field({ name: "Running", constraint: "5", description: "Pump is currently running" }),

        Field({
            name: "RemotePressure", constraint: "6",
            description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
            details: "If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is " +
                "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                "MaxMeasuredValue]).",
            xref: { document: "cluster", section: "4.2.6.1.4" }
        }),

        Field({
            name: "RemoteFlow", constraint: "7",
            description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
            details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is " +
                "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                "MaxMeasuredValue]).",
            xref: { document: "cluster", section: "4.2.6.1.5" }
        }),

        Field({
            name: "RemoteTemperature", constraint: "8",
            description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
            details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is " +
                "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                "MaxMeasuredValue])",
            xref: { document: "cluster", section: "4.2.6.1.6" }
        })
    ),

    Datatype(
        { name: "OperationModeEnum", type: "enum8", xref: { document: "cluster", section: "4.2.6.2" } },

        Field({
            name: "Normal", id: 0x0, conformance: "M",
            description: "The pump is controlled by a setpoint, as defined by a connected remote sensor or by the ControlMode attribute.",
            details: "If the pump is running in this operation mode the setpoint is an internal variable which may be " +
                "controlled between 0% and 100%, e.g., by means of the Level Control cluster",
            xref: { document: "cluster", section: "4.2.6.2.1" }
        }),

        Field({
            name: "Minimum", id: 0x1, conformance: "SPD",
            description: "This value sets the pump to run at the minimum possible speed it can without being stopped."
        }),
        Field({
            name: "Maximum", id: 0x2, conformance: "SPD",
            description: "This value sets the pump to run at its maximum possible speed."
        }),
        Field({
            name: "Local", id: 0x3, conformance: "LOCAL",
            description: "This value sets the pump to run with the local settings of the pump, regardless of what these are."
        })
    ),

    Datatype(
        { name: "ControlModeEnum", type: "enum8", xref: { document: "cluster", section: "4.2.6.3" } },

        Field({
            name: "ConstantSpeed", id: 0x0, conformance: "SPD",
            description: "The pump is running at a constant speed.",
            details: "The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – " +
                "MaxConstSpeed] attributes.",
            xref: { document: "cluster", section: "4.2.6.3.1" }
        }),

        Field({
            name: "ConstantPressure", id: 0x1, conformance: "PRSCONST",
            description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges.",
            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                "In case of the internal pressure sensor, this will be the range derived from the [MinConstPressure – " +
                "MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived " +
                "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.",
            xref: { document: "cluster", section: "4.2.6.3.2" }
        }),

        Field({
            name: "ProportionalPressure", id: 0x2, conformance: "PRSCOMP",
            description: "The pump will regulate its speed to maintain a constant differential pressure over its flanges.",
            details: "The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – Max" +
                "\n" +
                "CompPressure] attributes. The internal setpoint will be lowered (compensated) dependent on the flow " +
                "in the pump (lower flow ⇒ lower internal setpoint).",
            xref: { document: "cluster", section: "4.2.6.3.3" }
        }),

        Field({
            name: "ConstantFlow", id: 0x3, conformance: "FLW",
            description: "The pump will regulate its speed to maintain a constant flow through the pump.",
            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                "In case of the internal flow sensor, this will be the range derived from the [MinConstFlow – " +
                "MaxConstFlow] attributes. In case of a remote flow sensor, this will be the range derived from the " +
                "[MinMeasuredValue – MaxMeasuredValue] attributes of the remote flow sensor.",
            xref: { document: "cluster", section: "4.2.6.3.4" }
        }),

        Field({
            name: "ConstantTemperature", id: 0x5, conformance: "TEMP",
            description: "The pump will regulate its speed to maintain a constant temperature.",
            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                "In case of the internal temperature sensor, this will be the range derived from the [MinConstTemp – " +
                "MaxConstTemp] attributes. In case of a remote temperature sensor, this will be the range derived " +
                "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.",
            xref: { document: "cluster", section: "4.2.6.3.5" }
        }),

        Field({
            name: "Automatic", id: 0x7, conformance: "AUTO",
            description: "The operation of the pump is automatically optimized to provide the most suitable performance with respect to comfort and energy savings.",
            details: "This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level " +
                "control cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the " +
                "speed of the pump is entirely determined by the pump.",
            xref: { document: "cluster", section: "4.2.6.3.6" }
        })
    )
);

MatterDefinition.children.push(PumpConfigurationAndControl);
