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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Thermostat = Cluster(
    {
        name: "Thermostat", id: 0x201, asOf: "1.3", classification: "application", pics: "TSTAT",

        details: "This cluster provides an interface to the functionality of a thermostat." +
            "\n" +
            "Optional temperature, humidity and occupancy sensors" +
            "\n" +
            "Thermostat" +
            "\n" +
            "Heating / cooling control panel" +
            "\n" +
            "C" +
            "\n" +
            "Dehumidification configuration" +
            "\n" +
            "Dehumidification notification" +
            "\n" +
            "ThermostatS" +
            "\n" +
            "Heating / cooling device (e.g. indoor air handler)" +
            "\n" +
            "S" +
            "\n" +
            "user interface S" +
            "\n" +
            "configuration" +
            "\n" +
            "C" +
            "\n" +
            "Configuration tool" +
            "\n" +
            "Thermostat configuration" +
            "\n" +
            "C C Fan control S" +
            "\n" +
            "ThermostatS notification C" +
            "\n" +
            "C = Client S = Server" +
            "\n" +
            "Note: Device names are examples for illustration purposes only" +
            "\n" +
            "Figure 15. Example Usage of the Thermostat and Related Clusters\"",

        xref: { document: "cluster", section: "4.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 8 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "4.3.4" } },
        Field({
            name: "HEAT", conformance: "AUTO, O.a+", constraint: "0", description: "Heating",
            details: "Thermostat is capable of managing a heating device"
        }),
        Field({
            name: "COOL", conformance: "AUTO, O.a+", constraint: "1", description: "Cooling",
            details: "Thermostat is capable of managing a cooling device"
        }),
        Field({
            name: "OCC", conformance: "O", constraint: "2", description: "Occupancy",
            details: "Supports Occupied and Unoccupied setpoints"
        }),
        Field({
            name: "SCH", conformance: "O", constraint: "3", description: "ScheduleConfiguration",
            details: "Supports remote configuration of a weekly schedule of setpoint transitions"
        }),
        Field({
            name: "SB", conformance: "O", constraint: "4", description: "Setback",
            details: "Supports configurable setback (or span)"
        }),
        Field({
            name: "AUTO", conformance: "O", constraint: "5", description: "AutoMode",
            details: "Supports a System Mode of Auto"
        }),

        Field({
            name: "LTNE", conformance: "O", constraint: "6", description: "LocalTemperatureNotExposed",
            details: "This feature indicates that the Calculated Local Temperature used internally is unavailable to " +
                "report externally, for example due to the temperature control being done by a separate subsystem " +
                "which does not offer a view into the currently measured temperature, but allows setpoints to be " +
                "provided.",
            xref: { document: "cluster", section: "4.3.4.1" }
        }),

        Field({
            name: "MSCH", conformance: "O", constraint: "7", description: "MatterScheduleConfiguration",
            details: "Supports enhanced schedules"
        }),
        Field({
            name: "PRES", conformance: "O", constraint: "8", description: "Presets",
            details: "Thermostat supports setpoint presets"
        })
    ),

    Attribute({
        name: "LocalTemperature", id: 0x0, type: "temperature", access: "R V", conformance: "M",
        default: null, quality: "X P",

        details: "Indicates the current Calculated Local Temperature, when available." +
            "\n" +
            "  • If the LTNE feature is not supported:" +
            "\n" +
            "    ◦ If the LocalTemperatureCalibration is invalid or currently unavailable, the attribute shall " +
            "      report null." +
            "\n" +
            "    ◦ If the LocalTemperatureCalibration is valid, the attribute shall report that value." +
            "\n" +
            "  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the " +
            "    LocalTemperatureCalibration. In that case, the LocalTemperature attribute shall always report " +
            "    null.",

        xref: { document: "cluster", section: "4.3.9.2" }
    }),

    Attribute({
        name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the outdoor temperature, as measured locally or remotely (over the network).",
        xref: { document: "cluster", section: "4.3.9.3" }
    }),

    Attribute({
        name: "Occupancy", id: 0x2, type: "OccupancyBitmap", access: "R V", conformance: "OCC", default: 1,
        details: "Indicates whether the heated/cooled space is occupied or not, as measured locally or remotely (over " +
            "the network).",
        xref: { document: "cluster", section: "4.3.9.4" }
    }),

    Attribute({
        name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V", conformance: "[HEAT]",
        constraint: "desc", default: { type: "celsius", value: 7 }, quality: "F",
        details: "Indicates the absolute minimum level that the heating setpoint may be set to. This is a limitation " +
            "imposed by the manufacturer." +
            "\n" +
            "Refer to Setpoint Limits for constraints",
        xref: { document: "cluster", section: "4.3.9.5" }
    }),

    Attribute({
        name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V", conformance: "[HEAT]",
        constraint: "desc", default: { type: "celsius", value: 30 }, quality: "F",
        xref: { document: "cluster", section: "4.3.9" }
    }),
    Attribute({
        name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V", conformance: "[COOL]",
        constraint: "desc", default: { type: "celsius", value: 16 }, quality: "F",
        xref: { document: "cluster", section: "4.3.9" }
    }),

    Attribute({
        name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V", conformance: "[COOL]",
        constraint: "desc", default: { type: "celsius", value: 32 }, quality: "F",
        details: "Indicates the absolute maximum level that the cooling setpoint may be set to. This is a limitation " +
            "imposed by the manufacturer." +
            "\n" +
            "Refer to Setpoint Limits for constraints",
        xref: { document: "cluster", section: "4.3.9.8" }
    }),

    Attribute({
        name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V", conformance: "[COOL]",
        constraint: "0% to 100%", quality: "P",
        details: "Indicates the level of cooling demanded by the PI (proportional integral) control loop in use by the " +
            "thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating” mode." +
            "\n" +
            "This attribute is reported regularly and may be used to control a cooling device.",
        xref: { document: "cluster", section: "4.3.9.9" }
    }),

    Attribute({
        name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V", conformance: "[HEAT]",
        constraint: "0% to 100%", quality: "P",
        details: "Indicates the level of heating demanded by the PI loop in percent. This value is 0 when the " +
            "thermostat is in “off” or “cooling” mode." +
            "\n" +
            "This attribute is reported regularly and may be used to control a heating device.",
        xref: { document: "cluster", section: "4.3.9.10" }
    }),

    Attribute({
        name: "HvacSystemTypeConfiguration", id: 0x9, type: "HVACSystemTypeBitmap", access: "R[W] VM",
        conformance: "D", constraint: "desc", default: 0, quality: "N",
        details: "Indicates the HVAC system type controlled by the thermostat. If the thermostat uses physical DIP " +
            "switches to set these parameters, this information shall be available read-only" +
            "\n" +
            "from the DIP switches. If these parameters are set via software, there shall be read/write access in " +
            "order to provide remote programming capability.",
        xref: { document: "cluster", section: "4.3.9.11" }
    }),

    Attribute({
        name: "LocalTemperatureCalibration", id: 0x10, type: "SignedTemperature", access: "RW VM",
        conformance: "[!LTNE]", default: { type: "celsius", value: 0 }, quality: "N",

        details: "Indicates the offset the Thermostat server shall make to the measured temperature (locally or " +
            "remotely) to adjust the Calculated Local Temperature prior to using, displaying or reporting it." +
            "\n" +
            "The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s " +
            "preferences (e.g., to match if there are multiple servers displaying different values for the same " +
            "HVAC area) or compensate for variability amongst temperature sensors." +
            "\n" +
            "If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported " +
            "value (e.g., out of the range supported by the Thermostat server), the Thermostat server shall " +
            "respond with a status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or " +
            "lower limit reached." +
            "\n" +
            "NOTE" +
            "\n" +
            "Prior to revision 8 of this cluster specification the value of this attribute was constrained to a " +
            "range of -2.5°C to 2.5°C.",

        xref: { document: "cluster", section: "4.3.9.12" }
    }),

    Attribute({
        name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
        conformance: "COOL", constraint: "desc", default: { type: "celsius", value: 26 }, quality: "N",

        details: "Indicates the cooling mode setpoint when the room is occupied. Refer to Setpoint Limits for " +
            "constraints." +
            "\n" +
            "If an attempt is made to set this attribute to a value greater than MaxCoolSetpointLimit or less " +
            "than MinCoolSetpointLimit, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If this attribute is set to a value that is less than (OccupiedHeatingSetpoint + " +
            "MinSetpointDeadBand), the value of OccupiedHeatingSetpoint shall be adjusted to " +
            "(OccupiedCoolingSetpoint - MinSetpointDeadBand)." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode " +
            "setpoint." +
            "\n" +
            "If a client changes the value of this attribute, the server supports the PRES feature, and the " +
            "server either does not support the OCC feature or the Occupied bit is set on the Occupancy " +
            "attribute, the value of the ActivePresetHandle attribute shall be set to null.",

        xref: { document: "cluster", section: "4.3.9.13" }
    }),

    Attribute({
        name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
        conformance: "HEAT", constraint: "desc", default: { type: "celsius", value: 20 }, quality: "N",

        details: "Indicates the heating mode setpoint when the room is occupied. Refer to Setpoint Limits for " +
            "constraints." +
            "\n" +
            "If an attempt is made to set this attribute to a value greater than MaxHeatSetpointLimit or less " +
            "than MinHeatSetpointLimit, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If this attribute is set to a value that is greater than" +
            "\n" +
            "Band), the value of OccupiedCoolingSetpoint shall be adjusted to (OccupiedHeatingSetpoint + " +
            "MinSetpointDeadBand)." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall be used as the heating mode " +
            "setpoint." +
            "\n" +
            "If a client changes the value of this attribute, the server supports the PRES feature, and the " +
            "server either does not support the OCC feature or the Occupied bit is set on the Occupancy " +
            "attribute, the value of the ActivePresetHandle attribute shall be set to null.",

        xref: { document: "cluster", section: "4.3.9.14" }
    }),

    Attribute({
        name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
        conformance: "COOL & OCC", constraint: "desc", default: { type: "celsius", value: 26 },
        quality: "N",

        details: "Indicates the cooling mode setpoint when the room is unoccupied. Refer to Setpoint Limits for " +
            "constraints." +
            "\n" +
            "If an attempt is made to set this attribute to a value greater than MaxCoolSetpointLimit or less " +
            "than MinCoolSetpointLimit, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If this attribute is set to a value that is less than (UnoccupiedHeatingSetpoint + " +
            "MinSetpointDeadBand), the value of UnoccupiedHeatingSetpoint shall be adjusted to " +
            "(UnoccupiedCoolingSetpoint - MinSetpointDeadBand)." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall NOT be used." +
            "\n" +
            "If a client changes the value of this attribute, the server supports the PRES and OCC features, and " +
            "the Occupied bit is not set on the Occupancy attribute, the value of the ActivePresetHandle " +
            "attribute shall be set to null.",

        xref: { document: "cluster", section: "4.3.9.15" }
    }),

    Attribute({
        name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
        conformance: "HEAT & OCC", constraint: "desc", default: { type: "celsius", value: 20 },
        quality: "N",

        details: "Indicates the heating mode setpoint when the room is unoccupied. Refer to Setpoint Limits for " +
            "constraints." +
            "\n" +
            "If an attempt is made to set this attribute to a value greater than MaxHeatSetpointLimit or less " +
            "than MinHeatSetpointLimit, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If this attribute is set to a value that is greater than (UnoccupiedCoolingSetpoint - " +
            "MinSetpointDeadBand), the value of UnoccupiedCoolingSetpoint shall be adjusted to" +
            "\n" +
            "+ MinSetpointDeadBand)." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall NOT be used." +
            "\n" +
            "If a client changes the value of this attribute, the server supports the PRES and OCC features, and " +
            "the Occupied bit is not set on the Occupancy attribute, the value of the ActivePresetHandle " +
            "attribute shall be set to null.",

        xref: { document: "cluster", section: "4.3.9.16" }
    }),

    Attribute({
        name: "MinHeatSetpointLimit", id: 0x15, type: "temperature", access: "RW VM", conformance: "[HEAT]",
        constraint: "desc", default: { type: "reference", name: "AbsMinHeatSetpointLimit" }, quality: "N",

        details: "Indicates the minimum level that the heating setpoint may be set to." +
            "\n" +
            "This attribute, and the following three attributes, allow the user to define setpoint limits more " +
            "constrictive than the manufacturer imposed ones. Limiting users (e.g., in a commercial building) to " +
            "such setpoint limits can help conserve power." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to " +
            "permit this attribute to be set to the desired value. If an attempt is made to set this attribute to " +
            "a value which is not consistent with the constraints and cannot be resolved by modifying setpoints " +
            "then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.17" }
    }),

    Attribute({
        name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM", conformance: "[HEAT]",
        constraint: "desc", default: { type: "reference", name: "AbsMaxHeatSetpointLimit" }, quality: "N",

        details: "Indicates the maximum level that the heating setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to " +
            "permit this attribute to be set to the desired value. If an attempt is made to set this attribute to " +
            "a value which is not consistent with the constraints and cannot be resolved by modifying setpoints " +
            "then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.18" }
    }),

    Attribute({
        name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM", conformance: "[COOL]",
        constraint: "desc", default: { type: "reference", name: "AbsMinCoolSetpointLimit" }, quality: "N",

        details: "Indicates the minimum level that the cooling setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to " +
            "permit this attribute to be set to the desired value. If an attempt is made to set this attribute to " +
            "a value which is not consistent with the constraints and cannot be resolved by modifying setpoints " +
            "then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.19" }
    }),

    Attribute({
        name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM", conformance: "[COOL]",
        constraint: "desc", default: { type: "reference", name: "AbsMaxCoolSetpointLimit" }, quality: "N",

        details: "Indicates the maximum level that the cooling setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount to " +
            "permit this attribute to be set to the desired value. If an attempt is made to set this attribute to " +
            "a value which is not consistent with the constraints and cannot be resolved by modifying setpoints " +
            "then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.20" }
    }),

    Attribute({
        name: "MinSetpointDeadBand", id: 0x19, type: "SignedTemperature", access: "R[W] VM",
        conformance: "AUTO", constraint: "0 to 12.7°C", default: { type: "celsius", value: 2 },
        quality: "N",

        details: "On devices which support the AUTO feature, this attribute shall indicate the minimum difference " +
            "between the Heat Setpoint and the Cool Setpoint." +
            "\n" +
            "Refer to Setpoint Limits for constraints." +
            "\n" +
            "NOTE" +
            "\n" +
            "Prior to revision 8 of this cluster specification the value of this attribute was constrained to a " +
            "range of 0°C to 2.5°C." +
            "\n" +
            "NOTE" +
            "\n" +
            "For backwards compatibility, this attribute is optionally writeable. However any writes to this " +
            "attribute shall be silently ignored.",

        xref: { document: "cluster", section: "4.3.9.21" }
    }),

    Attribute({
        name: "RemoteSensing", id: 0x1a, type: "RemoteSensingBitmap", access: "RW VM", conformance: "O",
        default: 0, quality: "N",

        details: "Indicates when the local temperature, outdoor temperature and occupancy are being sensed by remote " +
            "networked sensors, rather than internal sensors." +
            "\n" +
            "If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall " +
            "always report a value of 0." +
            "\n" +
            "If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is " +
            "present, the write shall fail and the server shall report a CONSTRAINT_ERROR.",

        xref: { document: "cluster", section: "4.3.9.22" }
    }),

    Attribute({
        name: "ControlSequenceOfOperation", id: 0x1b, type: "ControlSequenceOfOperationEnum",
        access: "RW VM", conformance: "M", constraint: "desc", quality: "N",

        details: "Indicates the overall operating environment of the thermostat, and thus the possible system modes " +
            "that the thermostat can operate in." +
            "\n" +
            "If an attempt is made to write to this attribute, the server shall silently ignore the write and the " +
            "value of this attribute shall remain unchanged. This behavior is in place for backwards " +
            "compatibility with existing thermostats.",

        xref: { document: "cluster", section: "4.3.9.23" }
    }),

    Attribute({
        name: "SystemMode", id: 0x1c, type: "SystemModeEnum", access: "RW VM", conformance: "M",
        constraint: "desc", default: 1, quality: "N",
        details: "Indicates the current operating mode of the thermostat. Its value shall be limited by the " +
            "ControlSequenceOfOperation attribute.",
        xref: { document: "cluster", section: "4.3.9.24" }
    }),

    Attribute({
        name: "ThermostatRunningMode", id: 0x1e, type: "ThermostatRunningModeEnum", access: "R V",
        conformance: "[AUTO]", constraint: "desc", default: 0,
        details: "Indicates the running mode of the thermostat. This attribute uses the same values as SystemModeEnum " +
            "but can only be Off, Cool or Heat. This attribute is intended to provide additional information when " +
            "the thermostat’s system mode is in auto mode.",
        xref: { document: "cluster", section: "4.3.9.26" }
    }),

    Attribute({
        name: "StartOfWeek", id: 0x20, type: "StartOfWeekEnum", access: "R V", conformance: "SCH",
        constraint: "desc", quality: "F",

        details: "Indicates the day of the week that this thermostat considers to be the start of week for weekly " +
            "setpoint scheduling." +
            "\n" +
            "This attribute may be able to be used as the base to determine if the device supports weekly " +
            "scheduling by reading the attribute. Successful response means that the weekly scheduling is " +
            "supported.",

        xref: { document: "cluster", section: "4.3.9.27" }
    }),

    Attribute({
        name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V", conformance: "SCH",
        default: 0, quality: "F",
        details: "Indicates how many weekly schedule transitions the thermostat is capable of handling.",
        xref: { document: "cluster", section: "4.3.9.28" }
    }),

    Attribute({
        name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V", conformance: "SCH",
        default: 0, quality: "F",
        details: "Indicates how many daily schedule transitions the thermostat is capable of handling.",
        xref: { document: "cluster", section: "4.3.9.29" }
    }),

    Attribute({
        name: "TemperatureSetpointHold", id: 0x23, type: "TemperatureSetpointHoldEnum", access: "RW VM",
        conformance: "O", constraint: "desc", default: 0, quality: "N",

        details: "Indicates the temperature hold status on the thermostat. If hold status is on, the thermostat SHOULD " +
            "maintain the temperature setpoint for the current mode until a system mode change. If hold status is " +
            "off, the thermostat SHOULD follow the setpoint transitions specified by its internal scheduling " +
            "program. If the thermostat supports setpoint hold for a specific duration, it SHOULD also implement " +
            "the TemperatureSetpointHoldDuration attribute." +
            "\n" +
            "If the server supports a setpoint hold for a specific duration, it SHOULD also implement the " +
            "SetpointHoldExpiryTimestamp attribute." +
            "\n" +
            "If this attribute is updated to SetpointHoldOn and the TemperatureSetpointHoldDuration has a non- " +
            "null value and the SetpointHoldExpiryTimestamp is supported, the server shall update the " +
            "SetpointHoldExpiryTimestamp with a value of current UTC timestamp, in seconds, plus the value in " +
            "TemperatureSetpointHoldDuration multiplied by 60." +
            "\n" +
            "If this attribute is updated to SetpointHoldOff and the SetpointHoldExpiryTimestamp is supported, " +
            "the server shall set the SetpointHoldExpiryTimestamp to null.",

        xref: { document: "cluster", section: "4.3.9.30" }
    }),

    Attribute({
        name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16", access: "RW VM",
        conformance: "O", constraint: "max 1440", default: null, quality: "X N",

        details: "Indicates the period in minutes for which a setpoint hold is active. Thermostats that support hold " +
            "for a specified duration SHOULD implement this attribute. The null value indicates the field is " +
            "unused. All other values are reserved." +
            "\n" +
            "If this attribute is updated to a non-null value and the TemperatureSetpointHold is set to " +
            "SetpointHoldOn and the SetpointHoldExpiryTimestamp is supported, the server shall update " +
            "SetpointHoldExpiryTimestamp with a value of current UTC timestamp, in seconds, plus the new value of " +
            "this attribute multiplied by 60." +
            "\n" +
            "If this attribute is set to null and the SetpointHoldExpiryTimestamp is supported, the server shall " +
            "set the SetpointHoldExpiryTimestamp to null.",

        xref: { document: "cluster", section: "4.3.9.31" }
    }),

    Attribute({
        name: "ThermostatProgrammingOperationMode", id: 0x25, type: "ProgrammingOperationModeBitmap",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P",

        details: "Indicates the operational state of the thermostat’s programming. The thermostat shall modify its " +
            "programming operation when this attribute is modified by a client and update this attribute when its " +
            "programming operation is modified locally by a user. The thermostat may support more than one active " +
            "ProgrammingOperationModeBitmap. For example, the thermostat may operate simultaneously in Schedule " +
            "Programming Mode and Recovery Mode." +
            "\n" +
            "Thermostats which contain a schedule may use this attribute to control how that schedule is used, " +
            "even if they do not support the ScheduleConfiguration feature." +
            "\n" +
            "When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the " +
            "thermostat or remotely, not by internal schedule programming." +
            "\n" +
            "NOTE" +
            "\n" +
            "Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming " +
            "configurations.",

        xref: { document: "cluster", section: "4.3.9.32" }
    }),

    Attribute({
        name: "ThermostatRunningState", id: 0x29, type: "RelayStateBitmap", access: "R V", conformance: "O",
        constraint: "desc",
        details: "Indicates the current relay state of the heat, cool, and fan relays. Unimplemented outputs shall be " +
            "treated as if they were Off.",
        xref: { document: "cluster", section: "4.3.9.33" }
    }),

    Attribute({
        name: "SetpointChangeSource", id: 0x30, type: "SetpointChangeSourceEnum", access: "R V",
        conformance: "O", constraint: "desc", default: 0,

        details: "Indicates the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., " +
            "who or what determined the current setpoint)." +
            "\n" +
            "This attribute enables service providers to determine whether changes to setpoints were initiated " +
            "due to occupant comfort, scheduled programming or some other source (e.g., electric utility or other " +
            "service provider). Because automation services may initiate frequent setpoint changes, this " +
            "attribute clearly differentiates the source of setpoint changes made at the thermostat.",

        xref: { document: "cluster", section: "4.3.9.34" }
    }),

    Attribute({
        name: "SetpointChangeAmount", id: 0x31, type: "TemperatureDifference", access: "R V",
        conformance: "O", default: null, quality: "X",
        details: "Indicates the delta between the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint " +
            "and the previous active setpoint. This attribute is meant to accompany the SetpointChangeSource " +
            "attribute; devices implementing SetpointChangeAmount SHOULD also implement SetpointChangeSource." +
            "\n" +
            "The null value indicates that the previous setpoint was unknown.",
        xref: { document: "cluster", section: "4.3.9.35" }
    }),

    Attribute({
        name: "SetpointChangeSourceTimestamp", id: 0x32, type: "epoch-s", access: "R V", conformance: "O",
        default: 0,
        details: "Indicates the time in UTC at which the SetpointChangeAmount attribute change was recorded.",
        xref: { document: "cluster", section: "4.3.9.36" }
    }),

    Attribute({
        name: "OccupiedSetback", id: 0x34, type: "UnsignedTemperature", access: "RW VM", conformance: "SB",
        constraint: "occupiedSetbackMin to occupiedSetbackMax", default: null, quality: "X N",

        details: "Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to float " +
            "above the OccupiedCoolingSetpoint (i.e., OccupiedCoolingSetpoint + OccupiedSetback) or below the " +
            "OccupiedHeatingSetpoint setpoint (i.e., OccupiedHeatingSetpoint – OccupiedSetback) before initiating " +
            "a state change to bring the temperature back to the user’s desired setpoint. This attribute is " +
            "sometimes also referred to as the “span.”" +
            "\n" +
            "The purpose of this attribute is to allow remote configuration of the span between the desired " +
            "setpoint and the measured temperature to help prevent over-cycling and reduce energy bills, though " +
            "this may result in lower comfort on the part of some users." +
            "\n" +
            "The null value indicates the attribute is unused." +
            "\n" +
            "If the Thermostat client attempts to write OccupiedSetback to a value greater than " +
            "OccupiedSetbackMax, the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMax " +
            "and shall send a Write Attribute Response command with a Status Code field enumeration of SUCCESS " +
            "response." +
            "\n" +
            "If the Thermostat client attempts to write OccupiedSetback to a value less than OccupiedSetbackMin, " +
            "the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMin and shall send a " +
            "Write Attribute Response command with a Status Code field enumeration of SUCCESS response.",

        xref: { document: "cluster", section: "4.3.9.37" }
    }),

    Attribute({
        name: "OccupiedSetbackMin", id: 0x35, type: "UnsignedTemperature", access: "R V", conformance: "SB",
        constraint: "max occupiedSetbackMax", default: null, quality: "X F",
        details: "Indicates the minimum value that the Thermostat server will allow the OccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.38" }
    }),

    Attribute({
        name: "OccupiedSetbackMax", id: 0x36, type: "UnsignedTemperature", access: "R V", conformance: "SB",
        constraint: "occupiedSetbackMin to 25.4°C", default: null, quality: "X F",
        details: "Indicates the maximum value that the Thermostat server will allow the OccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.39" }
    }),

    Attribute({
        name: "UnoccupiedSetback", id: 0x37, type: "UnsignedTemperature", access: "RW VM",
        conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax", default: null,
        quality: "X N",

        details: "Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to float " +
            "above the UnoccupiedCoolingSetpoint (i.e., UnoccupiedCoolingSetpoint + UnoccupiedSetback) or below " +
            "the UnoccupiedHeatingSetpoint setpoint (i.e., UnoccupiedHeatingSetpoint - UnoccupiedSetback) before " +
            "initiating a state change to bring the temperature back to the user’s desired setpoint. This " +
            "attribute is sometimes also referred to as the “span.”" +
            "\n" +
            "The purpose of this attribute is to allow remote configuration of the span between the desired " +
            "setpoint and the measured temperature to help prevent over-cycling and reduce energy bills, though " +
            "this may result in lower comfort on the part of some users." +
            "\n" +
            "The null value indicates the attribute is unused." +
            "\n" +
            "If the Thermostat client attempts to write UnoccupiedSetback to a value greater than " +
            "UnoccupiedSetbackMax, the Thermostat server shall set its UnoccupiedSetback value to " +
            "UnoccupiedSetbackMax and shall send a Write Attribute Response command with a Status Code field " +
            "enumeration of SUCCESS response." +
            "\n" +
            "If the Thermostat client attempts to write UnoccupiedSetback to a value less than " +
            "UnoccupiedSetbackMin, the Thermostat server shall set its UnoccupiedSetback value to " +
            "UnoccupiedSetbackMin and shall send a Write Attribute Response command with a Status Code field " +
            "enumeration of SUCCESS response.",

        xref: { document: "cluster", section: "4.3.9.40" }
    }),

    Attribute({
        name: "UnoccupiedSetbackMin", id: 0x38, type: "UnsignedTemperature", access: "R V",
        conformance: "SB & OCC", constraint: "max unoccupiedSetbackMax", default: null, quality: "X F",
        details: "Indicates the minimum value that the Thermostat server will allow the UnoccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.41" }
    }),

    Attribute({
        name: "UnoccupiedSetbackMax", id: 0x39, type: "UnsignedTemperature", access: "R V",
        conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to 25.4°C", default: null,
        quality: "X F",
        details: "Indicates the maximum value that the Thermostat server will allow the UnoccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.42" }
    }),

    Attribute(
        {
            name: "EmergencyHeatDelta", id: 0x3a, type: "UnsignedTemperature", access: "RW VM",
            conformance: "O", default: { type: "celsius", value: 25 }, quality: "N",

            details: "Indicates the delta between the Calculated Local Temperature and the OccupiedHeatingSetpoint or " +
                "UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat " +
                "mode." +
                "\n" +
                "If the difference between the Calculated Local Temperature and OccupiedCoolingSetpoint or " +
                "UnoccupiedCoolingSetpoint is greater than or equal to the EmergencyHeatDelta and the Thermostat " +
                "server’s SystemMode attribute is in a heating-related mode, then the Thermostat server shall " +
                "immediately switch to the SystemMode attribute value that provides the highest stage of heating " +
                "(e.g., emergency heat) and continue operating in that running state until the " +
                "OccupiedHeatingSetpoint value is reached. For example:" +
                "\n" +
                "  • Calculated Local Temperature = 10.0°C" +
                "\n" +
                "  • OccupiedHeatingSetpoint = 16.0°C" +
                "\n" +
                "  • EmergencyHeatDelta = 2.0°C" +
                "\n" +
                "⇒ OccupiedHeatingSetpoint - Calculated Local Temperature ≥? EmergencyHeatDelta" +
                "\n" +
                "⇒ 16°C - 10°C ≥? 2°C" +
                "\n" +
                "⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode" +
                "\n" +
                "The purpose of this attribute is to provide Thermostat clients the ability to configure rapid " +
                "heating when a setpoint is of a specified amount greater than the measured temperature. This allows " +
                "the heated space to be quickly heated to the desired level set by the user.",

            xref: { document: "cluster", section: "4.3.9.43" }
        }
    ),

    Attribute({
        name: "AcType", id: 0x40, type: "ACTypeEnum", access: "RW VM", conformance: "O", constraint: "desc",
        default: 0, quality: "N",
        details: "Indicates the type of Mini Split ACTypeEnum of Mini Split AC is defined depending on how Cooling and " +
            "Heating condition is achieved by Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.44" }
    }),

    Attribute({
        name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O", default: 0,
        quality: "N",
        details: "Indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat attribute",
        xref: { document: "cluster", section: "4.3.9.45" }
    }),

    Attribute({
        name: "AcRefrigerantType", id: 0x42, type: "ACRefrigerantTypeEnum", access: "RW VM",
        conformance: "O", constraint: "desc", default: 0, quality: "N",
        details: "Indicates type of refrigerant used within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.46" }
    }),

    Attribute({
        name: "AcCompressorType", id: 0x43, type: "ACCompressorTypeEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the type of compressor used within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.47" }
    }),

    Attribute({
        name: "AcErrorCode", id: 0x44, type: "ACErrorCodeBitmap", access: "RW VM", conformance: "O",
        default: 0,
        details: "Indicates the type of errors encountered within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.48" }
    }),

    Attribute({
        name: "AcLouverPosition", id: 0x45, type: "ACLouverPositionEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the position of Louver on the AC.",
        xref: { document: "cluster", section: "4.3.9.49" }
    }),

    Attribute({
        name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the temperature of the AC coil, as measured locally or remotely (over the network).",
        xref: { document: "cluster", section: "4.3.9.50" }
    }),

    Attribute({
        name: "AcCapacityFormat", id: 0x47, type: "ACCapacityFormatEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the format for the ACCapacity attribute.",
        xref: { document: "cluster", section: "4.3.9.51" }
    }),

    Attribute(
        {
            name: "PresetTypes", id: 0x48, type: "list", access: "R V", conformance: "PRES", constraint: "desc",
            quality: "F",
            details: "Indicates the supported PresetScenarioEnum values, limits on how many presets can be created for " +
                "each PresetScenarioEnum, and whether or not a thermostat can transition automatically to a given " +
                "scenario.",
            xref: { document: "cluster", section: "4.3.9.52" }
        },

        Field({ name: "entry", type: "PresetTypeStruct" })
    ),

    Attribute(
        {
            name: "ScheduleTypes", id: 0x49, type: "list", access: "R V", conformance: "MSCH",
            constraint: "desc", quality: "F",
            details: "Indicates the supported SystemMode values for Schedules, limits on how many schedules can be created " +
                "for each SystemMode value, and whether or not a given SystemMode value supports transitions to " +
                "Presets, target setpoints, or both.",
            xref: { document: "cluster", section: "4.3.9.53" }
        },

        Field({ name: "entry", type: "ScheduleTypeStruct" })
    ),

    Attribute({
        name: "NumberOfPresets", id: 0x4a, type: "uint8", access: "R V", conformance: "PRES", default: 0,
        quality: "F",
        details: "Indicates the maximum number of entries supported by the Presets attribute.",
        xref: { document: "cluster", section: "4.3.9.54" }
    }),

    Attribute({
        name: "NumberOfSchedules", id: 0x4b, type: "uint8", access: "R V", conformance: "MSCH", default: 0,
        quality: "F",
        details: "Indicates the maximum number of entries supported by the Schedules attribute.",
        xref: { document: "cluster", section: "4.3.9.55" }
    }),

    Attribute({
        name: "NumberOfScheduleTransitions", id: 0x4c, type: "uint8", access: "R V", conformance: "MSCH",
        default: 0, quality: "F",
        details: "Indicates the maximum number of transitions per Schedules attribute entry.",
        xref: { document: "cluster", section: "4.3.9.56" }
    }),

    Attribute({
        name: "NumberOfScheduleTransitionPerDay", id: 0x4d, type: "uint8", access: "R V",
        conformance: "MSCH", default: null, quality: "X F",
        xref: { document: "cluster", section: "4.3.9" }
    }),

    Attribute({
        name: "ActivePresetHandle", id: 0x4e, type: "octstr", access: "R V", conformance: "PRES",
        constraint: "max 16", default: null, quality: "X N",
        details: "Indicates the PresetHandle of the active preset. If this attribute is null, then there is no active " +
            "preset.",
        xref: { document: "cluster", section: "4.3.9.58" }
    }),

    Attribute({
        name: "ActiveScheduleHandle", id: 0x4f, type: "octstr", access: "R V", conformance: "MSCH",
        constraint: "max 16", default: null, quality: "X N",
        details: "Indicates the ScheduleHandle of the active schedule. A null value in this attribute indicates that " +
            "there is no active schedule.",
        xref: { document: "cluster", section: "4.3.9.59" }
    }),

    Attribute(
        {
            name: "Presets", id: 0x50, type: "list", access: "RW VM", conformance: "PRES",
            constraint: "max numberOfPresets", default: [], quality: "N T",

            details: "This attribute shall contain the current list of configured presets. On receipt of a write request:" +
                "\n" +
                "  1. If the PresetHandle field is null, the PresetStruct shall be treated as an added preset, and " +
                "     the device shall create a new unique value for the PresetHandle field." +
                "\n" +
                "    a. If the BuiltIn field is true, a response with the status code CONSTRAINT_ERROR shall be " +
                "       returned." +
                "\n" +
                "  2. If the PresetHandle field is not null, the PresetStruct shall be treated as a modification of " +
                "     an existing preset." +
                "\n" +
                "    a. If the value of the PresetHandle field does not match any of the existing presets, a response " +
                "       with the status code NOT_FOUND shall be returned." +
                "\n" +
                "    b. If the value of the PresetHandle field is duplicated on multiple presets in the updated list, " +
                "       a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    c. If the BuiltIn field is true, and the PresetStruct in the current value with a matching " +
                "       PresetHandle field has a BuiltIn field set to false, a response with the status code " +
                "       CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    d. If the BuiltIn field is false, and the PresetStruct in the current value with a matching " +
                "       PresetHandle field has a BuiltIn field set to true, a response with the status code " +
                "       CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "  3. If the specified PresetScenarioEnum value does not exist in PresetTypes, a response with the " +
                "     status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "  4. If the Name is set, but the associated PresetTypeStruct does not have the SupportsNames bit " +
                "     set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "  5. If appending the received PresetStruct to the pending list of Presets would cause the total " +
                "     number of pending presets to exceed the value of the NumberOfPresets attribute, a response with " +
                "     the status code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "  6. If appending the received PresetStruct to the pending list of Presets would cause the total " +
                "     number of pending presets whose PresetScenario field matches the appended preset’s " +
                "     PresetScenario field to exceed the value of the NumberOfPresets field on the PresetTypeStruct " +
                "     whose PresetScenario matches the appended preset’s PresetScenario field, a response with the " +
                "     status code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "  7. Otherwise, the write shall be pended until receipt of a commit request, and the status code " +
                "     SUCCESS shall be returned." +
                "\n" +
                "    a. If the BuiltIn field is null:" +
                "\n" +
                "      i. If there is a PresetStruct in the current value with a matching PresetHandle field, the " +
                "          BuiltIn field on the pending PresetStruct shall be set to the value of the BuiltIn on the " +
                "          matching PresetStruct." +
                "\n" +
                "      ii. Otherwise, the BuiltIn field on the pending PresetStruct shall be set to false." +
                "\n" +
                "On an attempt to commit, the status of this attribute shall be determined as follows:" +
                "\n" +
                "  1. For all existing presets:" +
                "\n" +
                "    a. If, after applying all pending changes, the updated value of the Presets attribute would not " +
                "       contain a PresetStruct with a matching PresetHandle field, indicating the removal of the " +
                "       PresetStruct, the server shall check for invalid removal of the PresetStruct:" +
                "\n" +
                "      i. If the BuiltIn field is true on the removed PresetStruct, the attribute status shall be " +
                "           CONSTRAINT_ERROR." +
                "\n" +
                "      ii. If the MSCH feature is supported and the removed PresetHandle would be referenced by any " +
                "           PresetHandle on any ScheduleTransitionStruct on any ScheduleStruct in the updated value " +
                "           of the Schedules attribute, the attribute status shall be INVALID_IN_STATE." +
                "\n" +
                "      iii. If the removed PresetHandle is equal to the value of the ActivePresetHandle attribute, " +
                "           the attribute status shall be INVALID_IN_STATE." +
                "\n" +
                "  2. Otherwise, the attribute status shall be SUCCESS.",

            xref: { document: "cluster", section: "4.3.9.60" }
        },

        Field({ name: "entry", type: "PresetStruct" })
    ),

    Attribute(
        {
            name: "Schedules", id: 0x51, type: "list", access: "RW VM", conformance: "MSCH", constraint: "desc",
            default: [], quality: "N T",

            details: "This attribute shall contain a list of ScheduleStructs. On receipt of a write request:" +
                "\n" +
                "  1. For all schedules in the write request:" +
                "\n" +
                "    a. If the ScheduleHandle field is null, the ScheduleStruct shall be treated as an added " +
                "       schedule, and the device shall create a new unique value for the ScheduleHandle field." +
                "\n" +
                "      i. If the BuiltIn field is true, a response with the status code CONSTRAINT_ERROR shall be " +
                "         returned." +
                "\n" +
                "    b. Otherwise, if the ScheduleHandle field is not null, the ScheduleStruct shall be treated as a " +
                "       modification of an existing schedule." +
                "\n" +
                "      i. If the value of the ScheduleHandle field does not match any of the existing schedules, a " +
                "           response with the status code NOT_FOUND shall be returned." +
                "\n" +
                "      ii. If the BuiltIn field is true, and the ScheduleStruct in the current value with a matching " +
                "           ScheduleHandle field has a BuiltIn field set to false, a response with the status code " +
                "           CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "      iii. If the BuiltIn field is false, and the ScheduleStruct in the current value with a " +
                "           matching ScheduleHandle field has a BuiltIn field set to true, a response with the status " +
                "           code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    c. If the specified SystemMode does not exist in ScheduleTypes, a response with the status code " +
                "       CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    d. If the number of transitions exceeds the NumberOfScheduleTransitions value, a response with " +
                "       the status code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "    e. If the value of the NumberOfScheduleTransitionsPerDay attribute is not null, and the number " +
                "       of transitions on any single day of the week exceeds the NumberOfScheduleTransitionsPerDay " +
                "       value, a response with the status code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "    f. If the PresetHandle field is present, but the associated ScheduleTypeStruct does not have the " +
                "       SupportsPresets bit set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    g. If the PresetHandle field is present, but after applying all pending changes, the Presets " +
                "       attribute would not contain a PresetStruct whose PresetHandle field matches the value of the " +
                "       PresetHandle field, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    h. If the Name is set, but the associated ScheduleTypeStruct does not have the SupportsNames bit " +
                "       set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "      i. For all transitions in all schedules in the write request:" +
                "\n" +
                "      i. If the PresetHandle field is present, but the ScheduleTypeStruct matching the value of the " +
                "         SystemMode field on the encompassing ScheduleStruct does not have the SupportsPresets bit " +
                "         set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    j. If the PresetHandle field is present, but after applying all pending changes, the Presets " +
                "       attribute would not contain a PresetStruct whose PresetHandle field matches the value of the " +
                "       PresetHandle field, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "      i. If the SystemMode field is present, but the ScheduleTypeStruct matching the value of the " +
                "          SystemMode field on the encompassing ScheduleStruct does not have the SupportsSetpoints " +
                "          bit set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "      ii. If the SystemMode field is has a value of SystemModeOff, but the ScheduleTypeStruct " +
                "          matching the value of the SystemMode field on the encompassing ScheduleStruct does not " +
                "          have the SupportsOff bit set, a response with the status code CONSTRAINT_ERROR shall be " +
                "          returned." +
                "\n" +
                "    k. If the HeatingSetpoint field is present, but the ScheduleTypeStruct matching the value of the " +
                "       SystemMode field on the encompassing ScheduleStruct does not have the SupportsSetpoints bit " +
                "       set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "    l. If the CoolingSetpoint field is present, but the ScheduleTypeStruct matching the value of the " +
                "       SystemMode field on the encompassing ScheduleStruct does not have the SupportsSetpoints bit " +
                "       set, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "  2. If appending the received ScheduleStruct to the pending list of Schedules would cause the total " +
                "     number of pending schedules to exceed the value of the NumberOfSchedules attribute, a response " +
                "     with the status code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "  3. If appending the received ScheduleStruct to the pending list of Schedules would cause the total " +
                "     number of pending schedules whose SystemMode field matches the appended schedule’s SystemMode " +
                "     field to exceed the value of the NumberOfSchedules field on the ScheduleTypeStruct whose " +
                "     SystemMode field matches the appended schedule’s SystemMode field, a response with the status " +
                "     code RESOURCE_EXHAUSTED shall be returned." +
                "\n" +
                "  4. Otherwise, the write shall be pended until receipt of a commit request, and the attribute " +
                "     status shall be SUCCESS." +
                "\n" +
                "    a. If the BuiltIn field is null:" +
                "\n" +
                "      i. If there is a ScheduleStruct in the current value with a matching ScheduleHandle field, the " +
                "          BuiltIn field on the pending ScheduleStruct shall be set to the value of the BuiltIn on " +
                "          the matching ScheduleStruct." +
                "\n" +
                "      ii. Otherwise, the BuiltIn field on the pending ScheduleStruct shall be set to false." +
                "\n" +
                "On an attempt to commit, the status of this attribute shall be determined as follows:" +
                "\n" +
                "  1. For all existing schedules:" +
                "\n" +
                "    a. If, after applying all pending changes, the updated value of the Schedules attribute would " +
                "       not contain a ScheduleStruct with a matching ScheduleHandle field, indicating the removal of " +
                "       the ScheduleStruct, the server shall check for invalid removal of the ScheduleStruct:" +
                "\n" +
                "      i. If the BuiltIn field is true on the removed ScheduleStruct, the attribute status shall be " +
                "          CONSTRAINT_ERROR." +
                "\n" +
                "      ii. If the removed ScheduleHandle is equal to the value of the ActiveScheduleHandle attribute, " +
                "          the attribute status shall be INVALID_IN_STATE." +
                "\n" +
                "  2. Otherwise, the attribute status shall be SUCCESS.",

            xref: { document: "cluster", section: "4.3.9.61" }
        },

        Field({ name: "entry", type: "ScheduleStruct" })
    ),

    Attribute({
        name: "SetpointHoldExpiryTimestamp", id: 0x52, type: "epoch-s", access: "R V", conformance: "O",
        default: null, quality: "X N",

        details: "If there is a known time when the TemperatureSetpointHold shall be cleared, this attribute shall " +
            "contain the timestamp in UTC indicating when that will happen. If there is no such known time, this " +
            "attribute shall be null." +
            "\n" +
            "If the TemperatureSetpointHold is set to SetpointHoldOff or the TemperatureSetpointHoldDuration is " +
            "set to null, this attribute shall be set to null indicating there is no hold on the Thermostat " +
            "either with or without a duration.",

        xref: { document: "cluster", section: "4.3.9.62" }
    }),

    Command(
        {
            name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "4.3.10.1" }
        },
        Field({
            name: "Mode", id: 0x0, type: "SetpointRaiseLowerModeEnum", conformance: "M", constraint: "desc",
            details: "The field shall specify which setpoints are to be adjusted.",
            xref: { document: "cluster", section: "4.3.10.1.1" }
        }),

        Field({
            name: "Amount", id: 0x1, type: "int8", conformance: "M",
            details: "This field shall indicate the amount (possibly negative) that should be added to the setpoint(s), in " +
                "steps of 0.1°C.",
            xref: { document: "cluster", section: "4.3.10.1.2" }
        })
    ),

    Command(
        {
            name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH", direction: "request",
            response: "status",

            details: "This command is used to update the thermostat weekly setpoint schedule from a management system. If " +
                "the thermostat already has a weekly setpoint schedule programmed, then it SHOULD replace each daily " +
                "setpoint set as it receives the updates from the management system. For example, if the thermostat " +
                "has 4 setpoints for every day of the week and is sent a SetWeeklySchedule command with one setpoint " +
                "for Saturday then the thermostat SHOULD remove all 4 setpoints for Saturday and replace those with " +
                "the updated setpoint but leave all other days unchanged. If the schedule is larger than what fits in " +
                "one frame or contains more than 10 transitions, the schedule shall then be sent using multiple " +
                "SetWeeklySchedule Commands.",

            xref: { document: "cluster", section: "4.3.10.2" }
        },

        Field({
            name: "NumberOfTransitionsForSequence", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate how many individual transitions to expect for this sequence of commands. " +
                "If a device supports more than 10 transitions in its schedule they can send this by sending more " +
                "than 1 “Set Weekly Schedule” command, each containing the separate information that the device needs " +
                "to set.",
            xref: { document: "cluster", section: "4.3.10.2.1" }
        }),

        Field({
            name: "DayOfWeekForSequence", id: 0x1, type: "ScheduleDayOfWeekBitmap", conformance: "M",
            constraint: "desc",

            details: "This field shall represent the day of the week at which all the transitions within the payload of " +
                "the command SHOULD be associated to. This field is a bitmap and therefore the associated setpoint " +
                "could overlap onto multiple days (you could set one transition time for all “week days” or whatever " +
                "combination of days the implementation requests)." +
                "\n" +
                "Each setpoint transition will begin with the day of week for this transition. There can be up to 10 " +
                "transitions for each command.",

            xref: { document: "cluster", section: "4.3.10.2.2" }
        }),

        Field({
            name: "ModeForSequence", id: 0x2, type: "ScheduleModeBitmap", conformance: "M", constraint: "desc",

            details: "This field shall indicate how the application decodes the setpoint fields of each transition in the " +
                "Transitions list." +
                "\n" +
                "If the HeatSetpointPresent bit is On, the HeatSetpoint field shall NOT be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "If the HeatSetpointPresent bit is Off, the HeatSetpoint field shall be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "If the CoolSetpointPresent bit is On, the CoolSetpoint field shall NOT be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "If the CoolSetpointPresent bit is Off, the CoolSetpoint field shall be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "At least one of the bits in the Mode For Sequence byte shall be on." +
                "\n" +
                "Both bits must be respected, even if the HEAT or COOL feature is not supported, to ensure the " +
                "command is decoded and handled correctly.",

            xref: { document: "cluster", section: "4.3.10.2.3" }
        }),

        Field(
            {
                name: "Transitions", id: 0x3, type: "list", conformance: "M", constraint: "max 10",
                details: "This field shall contain the list of setpoint transitions used to update the specified daily " +
                    "schedules",
                xref: { document: "cluster", section: "4.3.10.2.4" }
            },

            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command(
        {
            name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH", direction: "request",
            response: "GetWeeklyScheduleResponse",
            xref: { document: "cluster", section: "4.3.10.3" }
        },

        Field({
            name: "DaysToReturn", id: 0x0, type: "ScheduleDayOfWeekBitmap", conformance: "M",
            constraint: "desc",
            details: "This field shall indicate the number of days the client would like to return the setpoint values for " +
                "and could be any combination of single days or the entire week.",
            xref: { document: "cluster", section: "4.3.10.3.1" }
        }),

        Field({
            name: "ModeToReturn", id: 0x1, type: "ScheduleModeBitmap", conformance: "M", constraint: "desc",
            details: "This field shall indicate the mode the client would like to return the set point values for and " +
                "could be any combination of heat only, cool only or heat & cool.",
            xref: { document: "cluster", section: "4.3.10.3.2" }
        })
    ),

    Command(
        {
            name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH", direction: "response",
            details: "This command has the same payload format as the Set Weekly Schedule.",
            xref: { document: "cluster", section: "4.3.10.4" }
        },
        Field({ name: "NumberOfTransitionsForSequence", id: 0x0, type: "uint8", conformance: "M" }),
        Field({
            name: "DayOfWeekForSequence", id: 0x1, type: "ScheduleDayOfWeekBitmap", conformance: "M",
            constraint: "desc"
        }),
        Field({ name: "ModeForSequence", id: 0x2, type: "ScheduleModeBitmap", conformance: "M", constraint: "desc" }),
        Field(
            { name: "Transitions", id: 0x3, type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command({
        name: "ClearWeeklySchedule", id: 0x3, access: "M", conformance: "SCH", direction: "request",
        response: "status",
        details: "This command is used to clear the weekly schedule. The Clear weekly schedule has no payload." +
            "\n" +
            "Upon receipt, all transitions currently stored shall be cleared and a default response of SUCCESS " +
            "shall be sent in response. There are no error responses to this command.",
        xref: { document: "cluster", section: "4.3.10.5" }
    }),

    Command(
        {
            name: "GetRelayStatusLogResponse", id: 0x1, conformance: "GetRelayStatusLog", direction: "response",
            details: "This command is sent from the thermostat cluster server in response to the Get Relay Status Log. " +
                "After the Relay Status Entry is sent over the air to the requesting client, the specific entry will " +
                "be cleared from the thermostat internal log.",
            xref: { document: "cluster", section: "4.3.10.7" }
        },

        Field({
            name: "TimeOfDay", id: 0x0, type: "uint16", conformance: "M", constraint: "max 1439",
            details: "This field shall indicate the sample time of the day, in minutes since midnight, when the relay " +
                "status was captured for this associated log entry. For example, 6am will be represented by 360 " +
                "minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.",
            xref: { document: "cluster", section: "4.3.10.7.1" }
        }),

        Field({
            name: "RelayStatus", id: 0x1, type: "RelayStateBitmap", conformance: "M", constraint: "desc",
            details: "This field shall indicate the relay status for thermostat when the log is captured. Each bit " +
                "represents one relay used by the thermostat. If the bit is on, the associated relay is on and " +
                "active. Each thermostat manufacturer can create its own mapping between the bitmap and the " +
                "associated relay.",
            xref: { document: "cluster", section: "4.3.10.7.2" }
        }),

        Field({
            name: "LocalTemperature", id: 0x2, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall indicate the LocalTemperature when the log is captured. The null value indicates " +
                "that LocalTemperature was invalid or unavailable.",
            xref: { document: "cluster", section: "4.3.10.7.3" }
        }),

        Field({
            name: "HumidityInPercentage", id: 0x3, type: "uint8", conformance: "M", constraint: "0% to 100%",
            quality: "X"
        }),
        Field({
            name: "SetPoint", id: 0x4, type: "temperature", conformance: "M",
            details: "This field shall indicate the target setpoint temperature when the log is captured.",
            xref: { document: "cluster", section: "4.3.10.7.5" }
        }),
        Field({
            name: "UnreadEntries", id: 0x5, type: "uint16", conformance: "M",
            details: "This field shall indicate the number of unread entries within the thermostat internal log system.",
            xref: { document: "cluster", section: "4.3.10.7.6" }
        })
    ),

    Command(
        {
            name: "SetActiveScheduleRequest", id: 0x5, access: "O", conformance: "MSCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "4.3.10.8" }
        },

        Field({
            name: "ScheduleHandle", id: 0x0, type: "octstr", conformance: "M", constraint: "max 16",
            details: "This field shall specify the value of the ScheduleHandle field on the ScheduleStruct to be made " +
                "active.",
            xref: { document: "cluster", section: "4.3.10.8.1" }
        })
    ),

    Command(
        {
            name: "SetActivePresetRequest", id: 0x6, access: "O", conformance: "PRES", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "4.3.10.9" }
        },

        Field({
            name: "PresetHandle", id: 0x0, type: "octstr", conformance: "M", constraint: "max 16", quality: "X",
            details: "This field shall specify the value of the PresetHandle field on the PresetStruct to be made active. " +
                "If the field is set to null, that indicates there should be no active preset.",
            xref: { document: "cluster", section: "4.3.10.9.1" }
        })
    ),

    Datatype(
        {
            name: "TemperatureDifference", type: "int16",

            details: "This data type is derived from int16 and represents a temperature difference with a resolution of " +
                "0.01°C." +
                "\n" +
                "  • value = (temperature in °C) x 100" +
                "\n" +
                "  • -4°C ⇒ -400" +
                "\n" +
                "  • 123.45°C ⇒ 12345" +
                "\n" +
                "The full (non-null) range of -327.67°C to 327.67°C may be used.",

            xref: { document: "cluster", section: "4.3.8.1" }
        }
    ),

    Datatype(
        {
            name: "SignedTemperature", type: "int8",

            details: "This data type is derived from int8 and represents a temperature from -12.7°C to 12.7°C with a " +
                "resolution of 0.1°C." +
                "\n" +
                "  • value = (temperature in °C) x 10" +
                "\n" +
                "  • -4°C ⇒ -40" +
                "\n" +
                "  • 12.3°C ⇒ 123" +
                "\n" +
                "This type is employed where compactness of representation is important and where the resolution and " +
                "range are still satisfactory.",

            xref: { document: "cluster", section: "4.3.8.2" }
        }
    ),

    Datatype(
        {
            name: "UnsignedTemperature", type: "uint8",

            details: "This data type is derived from uint8 and represents a temperature from 0°C to 25.5°C with a " +
                "resolution of 0.1°C." +
                "\n" +
                "  • value = (temperature in °C) x 10" +
                "\n" +
                "  • 4°C ⇒ 40" +
                "\n" +
                "  • 12.3°C ⇒ 123" +
                "\n" +
                "This type is employed where compactness of representation is important and where the resolution and " +
                "range are still satisfactory.",

            xref: { document: "cluster", section: "4.3.8.3" }
        }
    ),

    Datatype(
        { name: "ACErrorCodeBitmap", type: "map32", xref: { document: "cluster", section: "4.3.8.4" } },
        Field({ name: "CompressorFail", constraint: "0", description: "Compressor Failure or Refrigerant Leakage" }),
        Field({ name: "RoomSensorFail", constraint: "1", description: "Room Temperature Sensor Failure" }),
        Field({ name: "OutdoorSensorFail", constraint: "2", description: "Outdoor Temperature Sensor Failure" }),
        Field({ name: "CoilSensorFail", constraint: "3", description: "Indoor Coil Temperature Sensor Failure" }),
        Field({ name: "FanFail", constraint: "4", description: "Fan Failure" })
    ),

    Datatype(
        { name: "AlarmCodeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.5" } },
        Field({
            name: "Initialization", constraint: "0",
            description: "Initialization failure. The device failed to complete initialization at power-up."
        }),
        Field({ name: "Hardware", constraint: "1", description: "Hardware failure" }),
        Field({ name: "SelfCalibration", constraint: "2", description: "Self-calibration failure" })
    ),

    Datatype(
        { name: "HVACSystemTypeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.6" } },

        Field(
            {
                name: "CoolingStage", constraint: "0 to 1",
                description: "Stage of cooling the HVAC system is using.",

                details: "These bits shall indicate what stage of cooling the HVAC system is using." +
                    "\n" +
                    "  • 00 = Cool Stage 1" +
                    "\n" +
                    "  • 01 = Cool Stage 2" +
                    "\n" +
                    "  • 10 = Cool Stage 3" +
                    "\n" +
                    "  • 11 = Reserved",

                xref: { document: "cluster", section: "4.3.8.6.1" }
            }
        ),

        Field(
            {
                name: "HeatingStage", constraint: "2 to 3",
                description: "Stage of heating the HVAC system is using.",

                details: "These bits shall indicate what stage of heating the HVAC system is using." +
                    "\n" +
                    "  • 00 = Heat Stage 1" +
                    "\n" +
                    "  • 01 = Heat Stage 2" +
                    "\n" +
                    "  • 10 = Heat Stage 3" +
                    "\n" +
                    "  • 11 = Reserved",

                xref: { document: "cluster", section: "4.3.8.6.2" }
            }
        ),

        Field(
            {
                name: "HeatingIsHeatPump", constraint: "4", description: "Is the heating type Heat Pump.",
                details: "This bit shall indicate whether the HVAC system is conventional or a heat pump." +
                    "\n" +
                    "  • 0 = Conventional" +
                    "\n" +
                    "  • 1 = Heat Pump",
                xref: { document: "cluster", section: "4.3.8.6.3" }
            }
        ),

        Field(
            {
                name: "HeatingUsesFuel", constraint: "5", description: "Does the HVAC system use fuel.",
                details: "This bit shall indicate whether the HVAC system uses fuel." +
                    "\n" +
                    "  • 0 = Does not use fuel" +
                    "\n" +
                    "  • 1 = Uses fuel",
                xref: { document: "cluster", section: "4.3.8.6.4" }
            }
        )
    ),

    Datatype(
        { name: "OccupancyBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.7" } },

        Field({
            name: "Occupied", constraint: "0", description: "Indicates the occupancy state",
            details: "If this bit is set, it shall indicate the occupied state else if the bit if not set, it shall " +
                "indicate the unoccupied state.",
            xref: { document: "cluster", section: "4.3.8.7.1" }
        })
    ),

    Datatype(
        { name: "PresetTypeFeaturesBitmap", type: "map16", xref: { document: "cluster", section: "4.3.8.8" } },
        Field({ name: "Automatic", constraint: "0", description: "Preset may be automatically activated by the thermostat" }),
        Field({ name: "SupportsNames", constraint: "1", description: "Preset supports user- provided names" })
    ),

    Datatype(
        { name: "ProgrammingOperationModeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.9" } },
        Field({
            name: "ScheduleActive", constraint: "0",
            description: "Schedule programming mode. This enables any programmed weekly schedule configurations."
        }),
        Field({ name: "AutoRecovery", constraint: "1", description: "Auto/recovery mode" }),
        Field({ name: "Economy", constraint: "2", description: "Economy/EnergyStar mode" })
    ),

    Datatype(
        { name: "RelayStateBitmap", type: "map16", xref: { document: "cluster", section: "4.3.8.10" } },
        Field({ name: "Heat", constraint: "0", description: "Heat Stage On" }),
        Field({ name: "Cool", constraint: "1", description: "Cool Stage On" }),
        Field({ name: "Fan", constraint: "2", description: "Fan Stage On" }),
        Field({ name: "HeatStage2", constraint: "3", description: "Heat 2nd Stage On" }),
        Field({ name: "CoolStage2", constraint: "4", description: "Cool 2nd Stage On" }),
        Field({ name: "FanStage2", constraint: "5", description: "Fan 2nd Stage On" }),
        Field({ name: "FanStage3", constraint: "6", description: "Fan 3rd Stage On" })
    ),

    Datatype(
        { name: "RemoteSensingBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.11" } },
        Field({
            name: "LocalTemperature", constraint: "0",
            description: "Calculated Local Temperature is derived from a remote node"
        }),

        Field({
            name: "OutdoorTemperature", constraint: "1",
            description: "OutdoorTemperature is derived from a remote node",
            details: "This bit shall be supported if the OutdoorTemperature attribute is supported.",
            xref: { document: "cluster", section: "4.3.8.11.1" }
        }),

        Field({ name: "Occupancy", constraint: "2", description: "Occupancy is derived from a remote node" })
    ),

    Datatype(
        { name: "ScheduleTypeFeaturesBitmap", type: "map16", xref: { document: "cluster", section: "4.3.8.12" } },

        Field({
            name: "SupportsPresets", constraint: "0", description: "Supports presets",
            details: "This bit shall indicate that any ScheduleStruct with a SystemMode field whose value matches the " +
                "SystemMode field on the encompassing ScheduleTypeStruct supports specifying presets on " +
                "ScheduleTransitionStructs contained in its Transitions field.",
            xref: { document: "cluster", section: "4.3.8.12.1" }
        }),

        Field({
            name: "SupportsSetpoints", constraint: "1", description: "Supports setpoints",
            details: "This bit shall indicate that any ScheduleStruct with a SystemMode field whose value matches the " +
                "SystemMode field on the encompassing ScheduleTypeStruct supports specifying setpoints on " +
                "ScheduleTransitionStructs contained in its Transitions field.",
            xref: { document: "cluster", section: "4.3.8.12.2" }
        }),

        Field({
            name: "SupportsNames", constraint: "2", description: "Supports user-provided names",
            details: "This bit shall indicate that any ScheduleStruct with a SystemMode field whose value matches the " +
                "SystemMode field on the encompassing ScheduleTypeStruct supports setting the value of the Name " +
                "field.",
            xref: { document: "cluster", section: "4.3.8.12.3" }
        }),

        Field({
            name: "SupportsOff", constraint: "3", description: "Supports transitioning to SystemModeOff",
            details: "This bit shall indicate that any ScheduleStruct with a SystemMode field whose value matches the " +
                "SystemMode field on the encompassing ScheduleTypeStruct supports setting its SystemMode field to " +
                "Off.",
            xref: { document: "cluster", section: "4.3.8.12.4" }
        })
    ),

    Datatype(
        { name: "ScheduleDayOfWeekBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.13" } },
        Field({ name: "Sunday", constraint: "0", description: "Sunday" }),
        Field({ name: "Monday", constraint: "1", description: "Monday" }),
        Field({ name: "Tuesday", constraint: "2", description: "Tuesday" }),
        Field({ name: "Wednesday", constraint: "3", description: "Wednesday" }),
        Field({ name: "Thursday", constraint: "4", description: "Thursday" }),
        Field({ name: "Friday", constraint: "5", description: "Friday" }),
        Field({ name: "Saturday", constraint: "6", description: "Saturday" }),
        Field({ name: "Away", constraint: "7", description: "Away or Vacation" })
    ),

    Datatype(
        { name: "ScheduleModeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.14" } },
        Field({ name: "HeatSetpointPresent", constraint: "0", description: "Adjust Heat Setpoint" }),
        Field({ name: "CoolSetpointPresent", constraint: "1", description: "Adjust Cool Setpoint" })
    ),
    Datatype(
        { name: "ACCapacityFormatEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.15" } },
        Field({ name: "BtUh", id: 0x0, conformance: "O", description: "British Thermal Unit per Hour" })
    ),

    Datatype(
        { name: "ACCompressorTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.16" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown compressor type" }),
        Field({ name: "T1", id: 0x1, conformance: "O", description: "Max working ambient 43 °C" }),
        Field({ name: "T2", id: 0x2, conformance: "O", description: "Max working ambient 35 °C" }),
        Field({ name: "T3", id: 0x3, conformance: "O", description: "Max working ambient 52 °C" })
    ),

    Datatype(
        { name: "ACLouverPositionEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.17" } },
        Field({ name: "Closed", id: 0x1, conformance: "O", description: "Fully Closed" }),
        Field({ name: "Open", id: 0x2, conformance: "O", description: "Fully Open" }),
        Field({ name: "Quarter", id: 0x3, conformance: "O", description: "Quarter Open" }),
        Field({ name: "Half", id: 0x4, conformance: "O", description: "Half Open" }),
        Field({ name: "ThreeQuarters", id: 0x5, conformance: "O", description: "Three Quarters Open" })
    ),

    Datatype(
        { name: "ACRefrigerantTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.18" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown Refrigerant Type" }),
        Field({ name: "R22", id: 0x1, conformance: "O", description: "R22 Refrigerant" }),
        Field({ name: "R410A", id: 0x2, conformance: "O", description: "R410a Refrigerant" }),
        Field({ name: "R407C", id: 0x3, conformance: "O", description: "R407c Refrigerant" })
    ),

    Datatype(
        { name: "ACTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.19" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown AC Type" }),
        Field({ name: "CoolingFixed", id: 0x1, conformance: "O", description: "Cooling and Fixed Speed" }),
        Field({ name: "HeatPumpFixed", id: 0x2, conformance: "O", description: "Heat Pump and Fixed Speed" }),
        Field({ name: "CoolingInverter", id: 0x3, conformance: "O", description: "Cooling and Inverter" }),
        Field({ name: "HeatPumpInverter", id: 0x4, conformance: "O", description: "Heat Pump and Inverter" })
    ),

    Datatype(
        { name: "SetpointRaiseLowerModeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.20" } },
        Field({ name: "Heat", id: 0x0, conformance: "HEAT", description: "Adjust Heat Setpoint" }),
        Field({ name: "Cool", id: 0x1, conformance: "COOL", description: "Adjust Cool Setpoint" }),
        Field({ name: "Both", id: 0x2, conformance: "HEAT | COOL", description: "Adjust Heat Setpoint and Cool Setpoint" })
    ),

    Datatype(
        {
            name: "ControlSequenceOfOperationEnum", type: "enum8",

            details: "NOTE" +
                "\n" +
                "CoolingAndHeating" +
                "\n" +
                "A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be " +
                "able to request heating or cooling on demand and will usually support the Auto SystemMode." +
                "\n" +
                "Systems which support cooling or heating, requiring external intervention to change modes or where " +
                "the whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the " +
                "current capability.",

            xref: { document: "cluster", section: "4.3.8.21" }
        },

        Field({ name: "CoolingOnly", id: 0x0, conformance: "[COOL]", description: "Heat and Emergency are not possible" }),
        Field({
            name: "CoolingWithReheat", id: 0x1, conformance: "[COOL]",
            description: "Heat and Emergency are not possible"
        }),
        Field({
            name: "HeatingOnly", id: 0x2, conformance: "[HEAT]",
            description: "Cool and precooling (see Terms) are not possible"
        }),
        Field({
            name: "HeatingWithReheat", id: 0x3, conformance: "[HEAT]",
            description: "Cool and precooling are not possible"
        }),
        Field({ name: "CoolingAndHeating", id: 0x4, conformance: "[HEAT & COOL]", description: "All modes are possible" }),
        Field({
            name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "[HEAT & COOL]",
            description: "All modes are possible"
        })
    ),

    Datatype(
        { name: "PresetScenarioEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.22" } },

        Field({
            name: "Occupied", id: 0x1, conformance: "M",
            description: "The thermostat-controlled area is occupied",
            details: "This value shall indicate the preset for periods when the thermostat’s temperature-controlled area " +
                "is occupied. It is intended for thermostats that can automatically determine occupancy.",
            xref: { document: "cluster", section: "4.3.8.22.2" }
        }),

        Field({
            name: "Unoccupied", id: 0x2, conformance: "M",
            description: "The thermostat-controlled area is unoccupied",
            details: "This value shall indicate the preset for periods when the thermostat’s temperature-controlled area " +
                "is unoccupied. It is intended for thermostats that can automatically determine occupancy.",
            xref: { document: "cluster", section: "4.3.8.22.3" }
        }),

        Field({
            name: "Sleep", id: 0x3, conformance: "M", description: "Users are likely to be sleeping",
            details: "This value shall indicate the preset for periods when users are likely to be asleep.",
            xref: { document: "cluster", section: "4.3.8.22.4" }
        }),
        Field({
            name: "Wake", id: 0x4, conformance: "M", description: "Users are likely to be waking up",
            details: "This value shall indicate the preset for periods when users are likely to be waking up.",
            xref: { document: "cluster", section: "4.3.8.22.5" }
        }),

        Field({
            name: "Vacation", id: 0x5, conformance: "M", description: "Users are on vacation",
            details: "This value shall indicate the preset for periods when users are on vacation, or otherwise out-of- " +
                "home for extended periods of time.",
            xref: { document: "cluster", section: "4.3.8.22.6" }
        }),

        Field({
            name: "GoingToSleep", id: 0x6, conformance: "M",
            description: "Users are likely to be going to sleep",
            details: "This value shall indicate the preset for periods when users are likely to be going to sleep.",
            xref: { document: "cluster", section: "4.3.8.22.7" }
        }),

        Field({
            name: "UserDefined", id: 0xfe, conformance: "M", description: "Custom presets",
            details: "This value shall indicate a free-form preset; when set, the Name field on PresetStruct shall NOT be " +
                "null.",
            xref: { document: "cluster", section: "4.3.8.22.8" }
        })
    ),

    Datatype(
        { name: "SetpointChangeSourceEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.23" } },
        Field({
            name: "Manual", id: 0x0, conformance: "O",
            description: "Manual, user-initiated setpoint change via the thermostat"
        }),
        Field({
            name: "Schedule", id: 0x1, conformance: "[SCH | MSCH]",
            description: "Schedule/internal programming-initiated setpoint change"
        }),
        Field({
            name: "External", id: 0x2, conformance: "O",
            description: "Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)"
        })
    ),

    Datatype(
        { name: "StartOfWeekEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.24" } },
        Field({ name: "Sunday", id: 0x0, conformance: "M" }),
        Field({ name: "Monday", id: 0x1, conformance: "M" }),
        Field({ name: "Tuesday", id: 0x2, conformance: "M" }),
        Field({ name: "Wednesday", id: 0x3, conformance: "M" }),
        Field({ name: "Thursday", id: 0x4, conformance: "M" }),
        Field({ name: "Friday", id: 0x5, conformance: "M" }),
        Field({ name: "Saturday", id: 0x6, conformance: "M" })
    ),

    Datatype(
        {
            name: "SystemModeEnum", type: "enum8",
            details: "Table 9. Interpretation of Heat, Cool and Auto SystemModeEnum Values",
            xref: { document: "cluster", section: "4.3.8.25" }
        },
        Field({
            name: "Off", id: 0x0, conformance: "O",
            description: "The Thermostat does not generate demand for Cooling or Heating"
        }),
        Field({
            name: "Auto", id: 0x1, conformance: "AUTO",
            description: "Demand is generated for either Cooling or Heating, as required"
        }),
        Field({ name: "Cool", id: 0x3, conformance: "[COOL]", description: "Demand is only generated for Cooling" }),
        Field({ name: "Heat", id: 0x4, conformance: "[HEAT]", description: "Demand is only generated for Heating" }),
        Field({
            name: "EmergencyHeat", id: 0x5, conformance: "[HEAT]",
            description: "2nd stage heating is in use to achieve desired temperature"
        }),
        Field({ name: "Precooling", id: 0x6, conformance: "[COOL]", description: "(see Terms)" }),
        Field({ name: "FanOnly", id: 0x7, conformance: "O" }),
        Field({ name: "Dry", id: 0x8, conformance: "O" }),
        Field({ name: "Sleep", id: 0x9, conformance: "O" })
    ),

    Datatype(
        { name: "ThermostatRunningModeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.26" } },
        Field({
            name: "Off", id: 0x0, conformance: "O",
            description: "The Thermostat does not generate demand for Cooling or Heating"
        }),
        Field({ name: "Cool", id: 0x3, conformance: "[COOL]", description: "Demand is only generated for Cooling" }),
        Field({ name: "Heat", id: 0x4, conformance: "[HEAT]", description: "Demand is only generated for Heating" })
    ),

    Datatype(
        { name: "TemperatureSetpointHoldEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.27" } },
        Field({ name: "SetpointHoldOff", id: 0x0, conformance: "M", description: "Follow scheduling program" }),
        Field({
            name: "SetpointHoldOn", id: 0x1, conformance: "M",
            description: "Maintain current setpoint, regardless of schedule transitions"
        })
    ),

    Datatype(
        { name: "PresetStruct", type: "struct", xref: { document: "cluster", section: "4.3.8.28" } },

        Field({
            name: "PresetHandle", id: 0x0, type: "octstr", conformance: "M", constraint: "max 16", quality: "X",

            details: "This field shall indicate a device generated identifier for this preset. It shall be unique on the " +
                "device, and shall NOT be reused after the associated preset has been deleted." +
                "\n" +
                "This field shall only be null when the encompassing PresetStruct is appended to the Presets " +
                "attribute for the purpose of creating a new Preset. Refer to Presets for the creation of Preset " +
                "handles.",

            xref: { document: "cluster", section: "4.3.8.28.1" }
        }),

        Field({
            name: "PresetScenario", id: 0x1, type: "PresetScenarioEnum", conformance: "M",
            details: "This field shall indicate the associated PresetScenarioEnum value for this preset.",
            xref: { document: "cluster", section: "4.3.8.28.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "max 64", default: null,
            quality: "X",
            details: "This field shall indicate a name provided by a user. The null value shall indicate no name." +
                "\n" +
                "Within each subset of presets sharing the same PresetScenario field value, there shall NOT be any " +
                "presets with the same value, including null as a value, in the Name field.",
            xref: { document: "cluster", section: "4.3.8.28.3" }
        }),

        Field({
            name: "CoolingSetpoint", id: 0x3, type: "temperature", conformance: "COOL", constraint: "desc",
            default: { type: "celsius", value: 26 },
            details: "This field shall indicate the cooling setpoint for the preset. Refer to Setpoint Limits for value " +
                "constraints.",
            xref: { document: "cluster", section: "4.3.8.28.4" }
        }),

        Field({
            name: "HeatingSetpoint", id: 0x4, type: "temperature", conformance: "HEAT", constraint: "desc",
            default: { type: "celsius", value: 20 },
            details: "This field shall indicate the heating setpoint for the preset. Refer to Setpoint Limits for value " +
                "constraints.",
            xref: { document: "cluster", section: "4.3.8.28.5" }
        }),

        Field({
            name: "BuiltIn", id: 0x5, type: "bool", conformance: "M", default: false, quality: "X",
            details: "This field shall indicate whether the preset is marked as \"built-in\", meaning that it can be " +
                "modified, but it cannot be deleted.",
            xref: { document: "cluster", section: "4.3.8.28.6" }
        })
    ),

    Datatype(
        { name: "PresetTypeStruct", type: "struct", xref: { document: "cluster", section: "4.3.8.29" } },
        Field({
            name: "PresetScenario", id: 0x0, type: "PresetScenarioEnum", conformance: "M",
            details: "This field shall specify a PresetScenarioEnum value supported by this thermostat.",
            xref: { document: "cluster", section: "4.3.8.29.1" }
        }),
        Field({
            name: "NumberOfPresets", id: 0x1, type: "uint8", conformance: "M", default: 0,
            details: "This field shall specify a limit for the number of presets for this PresetScenarioEnum.",
            xref: { document: "cluster", section: "4.3.8.29.2" }
        }),
        Field({
            name: "PresetTypeFeatures", id: 0x2, type: "PresetTypeFeaturesBitmap", conformance: "M", default: 0,
            details: "This field shall specify a bitmap of features for this PresetTypeStruct.",
            xref: { document: "cluster", section: "4.3.8.29.3" }
        })
    ),

    Datatype(
        {
            name: "WeeklyScheduleTransitionStruct", type: "struct",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.8.30" }
        },

        Field({
            name: "TransitionTime", id: 0x0, type: "uint16", conformance: "M", constraint: "max 1439",
            details: "This field shall represent the start time of the schedule transition during the associated day. The " +
                "time will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For " +
                "example, 6am will be represented by 360 minutes since midnight and 11:30pm will be represented by " +
                "1410 minutes since midnight.",
            xref: { document: "cluster", section: "4.3.8.30.1" }
        }),

        Field({
            name: "HeatSetpoint", id: 0x1, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall represent the heat setpoint to be applied at this associated transition start time.",
            xref: { document: "cluster", section: "4.3.8.30.2" }
        }),
        Field({
            name: "CoolSetpoint", id: 0x2, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall represent the cool setpoint to be applied at this associated transition start time.",
            xref: { document: "cluster", section: "4.3.8.30.3" }
        })
    ),

    Datatype(
        { name: "ScheduleStruct", type: "struct", xref: { document: "cluster", section: "4.3.8.31" } },

        Field({
            name: "ScheduleHandle", id: 0x0, type: "octstr", conformance: "M", constraint: "max 16",
            quality: "X",

            details: "This field shall indicate a device generated identifier for this schedule. It shall be unique on the " +
                "device, and shall NOT be reused after the associated schedule has been deleted." +
                "\n" +
                "This field shall only be null when the encompassing ScheduleStruct is appended to the Schedules " +
                "attribute for the purpose of creating a new Schedule. Refer to Schedules for the creation of " +
                "Schedule handles.",

            xref: { document: "cluster", section: "4.3.8.31.1" }
        }),

        Field({
            name: "SystemMode", id: 0x1, type: "SystemModeEnum", conformance: "M", constraint: "desc",
            details: "This field shall specify the default thermostat system mode for transitions in this schedule. The " +
                "only valid values for this field shall be Auto, Heat, and Cool.",
            xref: { document: "cluster", section: "4.3.8.31.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "max 64",
            details: "This field shall specify a name for the ScheduleStruct.",
            xref: { document: "cluster", section: "4.3.8.31.3" }
        }),
        Field({
            name: "PresetHandle", id: 0x3, type: "octstr", conformance: "O", constraint: "max 16",
            details: "This field shall indicate the default PresetHandle value for transitions in this schedule.",
            xref: { document: "cluster", section: "4.3.8.31.4" }
        }),

        Field(
            {
                name: "Transitions", id: 0x4, type: "list", conformance: "M",
                constraint: "1 to numberOfScheduleTransitions", default: [],

                details: "This field shall specify a list of transitions for the schedule." +
                    "\n" +
                    "This field shall NOT contain more than one ScheduleStruct with the same TransitionTime field and " +
                    "overlapping DayOfWeek fields; i.e. there shall be no duplicate transitions." +
                    "\n" +
                    "If the NumberOfScheduleTransitionsPerDay attribute is not null, then for each bit in " +
                    "ScheduleDayOfWeekBitmap, the number of transitions with that bit set in DayOfWeek shall NOT be " +
                    "greater than the value of the NumberOfScheduleTransitionsPerDay attribute." +
                    "\n" +
                    "For the purposes of determining which ScheduleStruct in this list is currently active, the current " +
                    "time shall be the number of minutes past midnight in the display value of the current time, not the " +
                    "actual number of minutes that have elapsed since midnight. On days which transition into or out of " +
                    "daylight saving time, certain values may repeat or not occur during the transition period." +
                    "\n" +
                    "A ScheduleTransitionStruct in this list shall be active if the current day of the week matches its " +
                    "DayOfWeek field and the current time is greater than or equal to the TransitionTime, but less than " +
                    "the TransitionTime on any other ScheduleTransitionStruct in the Transitions field whose DayOfWeek " +
                    "field also matches the current day of the week." +
                    "\n" +
                    "If the current time is less than every ScheduleTransitionStruct whose DayOfWeek field also matches " +
                    "the current day of the week, the server shall attempt the same process to identify the active " +
                    "ScheduleTransitionStruct for the day preceding the previously attempted day of the week, repeating " +
                    "until an active ScheduleTransitionStruct is found or the attempted day is the current day of the " +
                    "week again. If no active ScheduleTransitionStruct is found, then the active ScheduleTransitionStruct " +
                    "shall be the ScheduleTransitionStruct with the largest TransitionTime field from the set of " +
                    "ScheduleTransitionStructs whose DayOfWeek field matches the current day of the week.",

                xref: { document: "cluster", section: "4.3.8.31.5" }
            },

            Field({ name: "entry", type: "ScheduleTransitionStruct" })
        ),

        Field({
            name: "BuiltIn", id: 0x5, type: "bool", conformance: "M", default: false, quality: "X",
            details: "This field shall indicate whether the schedule is marked as \"built-in\", meaning that it can be " +
                "modified, but it cannot be deleted.",
            xref: { document: "cluster", section: "4.3.8.31.6" }
        })
    ),

    Datatype(
        {
            name: "ScheduleTransitionStruct", type: "struct",

            details: "This struct provides a time of day and a set of days of the week for a state transition within a " +
                "schedule. The thermostat shall use the following order of precedence for determining a new setpoint " +
                "at the time of transition:" +
                "\n" +
                "  1. If the PresetHandle field is provided, then the setpoint for the PresetStruct in the Presets " +
                "     attribute with that identifier shall be used" +
                "\n" +
                "  2. If either the HeatingSetpoint or CoolingSetpoint is provided, then it shall be used" +
                "\n" +
                "    a. If the SystemMode field is provided, the HeatingSetpoint and CoolingSetpoint fields shall be " +
                "       interpreted using the SystemMode field" +
                "\n" +
                "    b. If the SystemMode field is not provided, the HeatingSetpoint and CoolingSetpoint fields shall " +
                "       be interpreted using the SystemMode field on the parent ScheduleStruct" +
                "\n" +
                "  3. If neither the PresetHandle field or any Setpoint field is provided, then the PresetHandle " +
                "     field on the parent ScheduleStruct shall be used to determine the active PresetStruct" +
                "\n" +
                "  4. If the PresetHandle is not indicated and no setpoint is provided for the current SystemMode, " +
                "     the server shall use a default value for the current SystemMode." +
                "\n" +
                "If the setpoint was derived from a preset, then the ActivePresetHandle shall be set to the " +
                "PresetHandle of that preset." +
                "\n" +
                "If a CoolingSetpoint was used to determine the cooling setpoint:" +
                "\n" +
                "  • If the server supports the OCC feature, and the Occupied bit is not set on the Occupancy " +
                "    attribute, then the UnoccupiedCoolingSetpoint attribute shall be set to the CoolingSetpoint" +
                "\n" +
                "  • Otherwise, the OccupiedCoolingSetpoint attribute shall be set to the CoolingSetpoint If a " +
                "    HeatingSetpoint was used to determine the heating setpoint:" +
                "\n" +
                "  • If the server supports the OCC feature, and the Occupied bit is not set on the Occupancy " +
                "    attribute, then the UnoccupiedHeatingSetpoint attribute shall be set to the HeatingSetpoint" +
                "\n" +
                "  • Otherwise, the OccupiedHeatingSetpoint attribute shall be set to the HeatingSetpoint The " +
                "    ScheduleTransitionStruct shall be invalid if all the following are true:" +
                "\n" +
                "  • The HeatingSetpoint field is not provided" +
                "\n" +
                "  • The PresetHandle field is not provided" +
                "\n" +
                "  • The PresetHandle field on the encompassing ScheduleStruct is not provided" +
                "\n" +
                "  • The SystemMode field is provided and has the value Heat or Auto, or the SystemMode field on the " +
                "    parent ScheduleStruct has the value Heat or Auto" +
                "\n" +
                "The ScheduleTransitionStruct shall be invalid if all the following are true:" +
                "\n" +
                "  • The CoolingSetpoint field is not provided" +
                "\n" +
                "  • The PresetHandle field is not provided" +
                "\n" +
                "  • The PresetHandle field on the encompassing ScheduleStruct is not provided" +
                "\n" +
                "  • The SystemMode field is provided and has the value Cool or Auto, or the SystemMode field on the " +
                "    parent ScheduleStruct has the value Cool or Auto",

            xref: { document: "cluster", section: "4.3.8.32" }
        },

        Field({
            name: "DayOfWeek", id: 0x0, type: "ScheduleDayOfWeekBitmap", conformance: "M", constraint: "desc",
            details: "This field shall specify a bitmask of days of the week that the transition applies to. The Vacation " +
                "bit shall NOT be set; vacation schedules shall be set via the vacation preset.",
            xref: { document: "cluster", section: "4.3.8.32.1" }
        }),

        Field({
            name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", constraint: "max 1439",
            details: "This shall specify the time of day at which the transition becomes active, in terms of minutes " +
                "within the day representing the wall clock, where 0 is 00:00:00, 1 is 00:01:00 and 1439 is 23:59:00." +
                "\n" +
                "Handling of transitions during the changeover of Daylight Saving Time is implementation-dependent.",
            xref: { document: "cluster", section: "4.3.8.32.2" }
        }),

        Field({
            name: "PresetHandle", id: 0x2, type: "octstr", conformance: "[PRES]", constraint: "max 16",
            details: "This field shall specify the preset used at the TransitionTime. If this field is provided, then the " +
                "SystemMode, CoolingSetpoint and HeatingSetpoint fields shall NOT be provided.",
            xref: { document: "cluster", section: "4.3.8.32.3" }
        }),

        Field({
            name: "SystemMode", id: 0x3, type: "SystemModeEnum", conformance: "O", constraint: "desc",
            details: "This shall specify the default mode to which the thermostat will switch for this transition, " +
                "overriding the default for the schedule. The only valid values for this field shall be Auto, Heat, " +
                "Cool and Off. This field shall only be included when the required system mode differs from the " +
                "schedule’s default SystemMode.",
            xref: { document: "cluster", section: "4.3.8.32.4" }
        }),

        Field({
            name: "CoolingSetpoint", id: 0x4, type: "temperature", conformance: "[COOL]", constraint: "desc",
            details: "This field shall specify the cooling setpoint for the transition. If PresetHandle is set, this field " +
                "shall NOT be included. Refer to Setpoint Limits for value constraints.",
            xref: { document: "cluster", section: "4.3.8.32.5" }
        }),

        Field({
            name: "HeatingSetpoint", id: 0x5, type: "temperature", conformance: "[HEAT]", constraint: "desc",
            details: "This field shall specify the cooling setpoint for the transition. If PresetHandle is set, this field " +
                "shall NOT be included. Refer to Setpoint Limits for value constraints.",
            xref: { document: "cluster", section: "4.3.8.32.6" }
        })
    ),

    Datatype(
        { name: "ScheduleTypeStruct", type: "struct", xref: { document: "cluster", section: "4.3.8.33" } },

        Field({
            name: "SystemMode", id: 0x0, type: "SystemModeEnum", conformance: "M", constraint: "desc",
            details: "This field shall specify a SystemModeEnum supported by this thermostat for Schedules. The only valid " +
                "values for this field shall be Auto, Heat, and Cool.",
            xref: { document: "cluster", section: "4.3.8.33.1" }
        }),

        Field({
            name: "NumberOfSchedules", id: 0x1, type: "uint8", conformance: "M",
            constraint: "max numberOfSchedules", default: 0,
            details: "This field shall specify a limit for the number of Schedules for this SystemMode.",
            xref: { document: "cluster", section: "4.3.8.33.2" }
        }),

        Field({
            name: "ScheduleTypeFeatures", id: 0x2, type: "ScheduleTypeFeaturesBitmap", conformance: "M",
            constraint: "desc", default: 0,
            details: "This field shall specify a bitmap of features for this schedule entry. At least one of " +
                "SupportsPresets and SupportsSetpoints shall be set.",
            xref: { document: "cluster", section: "4.3.8.33.3" }
        })
    )
);

MatterDefinition.children.push(Thermostat);
