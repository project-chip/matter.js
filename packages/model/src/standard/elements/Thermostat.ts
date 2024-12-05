/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
        details: "This cluster provides an interface to the functionality of a thermostat.",
        xref: { document: "cluster", section: "4.3" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

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

        xref: { document: "cluster", section: "4.3.9.3" }
    }),

    Attribute({
        name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the outdoor temperature, as measured locally or remotely (over the network).",
        xref: { document: "cluster", section: "4.3.9.4" }
    }),

    Attribute({
        name: "Occupancy", id: 0x2, type: "OccupancyBitmap", access: "R V", conformance: "OCC",
        constraint: "desc", default: 1,
        details: "Indicates whether the heated/cooled space is occupied or not, as measured locally or remotely (over " +
            "the network).",
        xref: { document: "cluster", section: "4.3.9.5" }
    }),

    Attribute({
        name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V", conformance: "[HEAT]",
        constraint: "desc", default: { type: "celsius", value: 7 }, quality: "F",
        xref: { document: "cluster", section: "4.3.9" }
    }),
    Attribute({
        name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V", conformance: "[HEAT]",
        constraint: "desc", default: { type: "celsius", value: 30 }, quality: "F",
        xref: { document: "cluster", section: "4.3.9" }
    }),

    Attribute({
        name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V", conformance: "[COOL]",
        constraint: "desc", default: { type: "celsius", value: 16 }, quality: "F",
        details: "Indicates the absolute minimum level that the cooling setpoint may be set to. This is a limitation " +
            "imposed by the manufacturer." +
            "\n" +
            "Refer to Setpoint Limits for constraints",
        xref: { document: "cluster", section: "4.3.9.8" }
    }),

    Attribute({
        name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V", conformance: "[COOL]",
        constraint: "desc", default: { type: "celsius", value: 32 }, quality: "F",
        details: "Indicates the absolute maximum level that the cooling setpoint may be set to. This is a limitation " +
            "imposed by the manufacturer." +
            "\n" +
            "Refer to Setpoint Limits for constraints",
        xref: { document: "cluster", section: "4.3.9.9" }
    }),

    Attribute({
        name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V", conformance: "[COOL]",
        constraint: "0 to 100", quality: "P",
        details: "Indicates the level of cooling demanded by the PI (proportional integral) control loop in use by " +
            "the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating” " +
            "mode." +
            "\n" +
            "This attribute is reported regularly and may be used to control a cooling device.",
        xref: { document: "cluster", section: "4.3.9.10" }
    }),

    Attribute({
        name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V", conformance: "[HEAT]",
        constraint: "0 to 100", quality: "P",
        details: "Indicates the level of heating demanded by the PI loop in percent. This value is 0 when the " +
            "thermostat is in “off” or “cooling” mode." +
            "\n" +
            "This attribute is reported regularly and may be used to control a heating device.",
        xref: { document: "cluster", section: "4.3.9.11" }
    }),

    Attribute({
        name: "HvacSystemTypeConfiguration", id: 0x9, type: "HVACSystemTypeBitmap", access: "R[W] VM",
        conformance: "D", constraint: "desc", default: 0, quality: "N",
        details: "Indicates the HVAC system type controlled by the thermostat. If the thermostat uses physical DIP " +
            "switches to set these parameters, this information shall be available read-only from the DIP " +
            "switches. If these parameters are set via software, there shall be read/write access in order to " +
            "provide remote programming capability.",
        xref: { document: "cluster", section: "4.3.9.12" }
    }),

    Attribute({
        name: "LocalTemperatureCalibration", id: 0x10, type: "SignedTemperature", access: "RW VM",
        conformance: "[!LTNE]", constraint: "-2.5°C to 2.5°C", default: { type: "celsius", value: 0 },
        quality: "N",

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
            "lower limit reached.",

        xref: { document: "cluster", section: "4.3.9.13" }
    }),

    Attribute({
        name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
        conformance: "COOL", constraint: "desc", default: { type: "celsius", value: 26 }, quality: "N S",

        details: "Indicates the cooling mode setpoint when the room is occupied." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
            "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode " +
            "setpoint.",

        xref: { document: "cluster", section: "4.3.9.14" }
    }),

    Attribute({
        name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
        conformance: "HEAT", constraint: "desc", default: { type: "celsius", value: 20 }, quality: "N S",

        details: "Indicates the heating mode setpoint when the room is occupied." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
            "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall be used as the heating mode " +
            "setpoint.",

        xref: { document: "cluster", section: "4.3.9.15" }
    }),

    Attribute({
        name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
        conformance: "COOL & OCC", constraint: "desc", default: { type: "celsius", value: 26 },
        quality: "N",

        details: "Indicates the cooling mode setpoint when the room is unoccupied." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
            "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall NOT be used.",

        xref: { document: "cluster", section: "4.3.9.16" }
    }),

    Attribute({
        name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
        conformance: "HEAT & OCC", constraint: "desc", default: { type: "celsius", value: 20 },
        quality: "N",

        details: "Indicates the heating mode setpoint when the room is unoccupied." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
            "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If the occupancy status of the room is unknown, this attribute shall NOT be used.",

        xref: { document: "cluster", section: "4.3.9.17" }
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
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
            "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
            "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
            "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.18" }
    }),

    Attribute({
        name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM", conformance: "[HEAT]",
        constraint: "desc", default: { type: "reference", name: "AbsMaxHeatSetpointLimit" }, quality: "N",

        details: "Indicates the maximum level that the heating setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
            "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
            "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
            "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.19" }
    }),

    Attribute({
        name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM", conformance: "[COOL]",
        constraint: "desc", default: { type: "reference", name: "AbsMinCoolSetpointLimit" }, quality: "N",

        details: "Indicates the minimum level that the cooling setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
            "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
            "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
            "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.20" }
    }),

    Attribute({
        name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM", conformance: "[COOL]",
        constraint: "desc", default: { type: "reference", name: "AbsMaxCoolSetpointLimit" }, quality: "N",

        details: "Indicates the maximum level that the cooling setpoint may be set to." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
            "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
            "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
            "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.21" }
    }),

    Attribute({
        name: "MinSetpointDeadBand", id: 0x19, type: "SignedTemperature", access: "R[W] VM",
        conformance: "AUTO", constraint: "0°C to 2.5°C", default: { type: "celsius", value: 2 },
        quality: "N",

        details: "On devices which support the AUTO feature, this attribute shall indicate the minimum difference " +
            "between the Heat Setpoint and the Cool Setpoint." +
            "\n" +
            "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
            "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
            "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
            "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
            "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

        xref: { document: "cluster", section: "4.3.9.22" }
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

        xref: { document: "cluster", section: "4.3.9.23" }
    }),

    Attribute({
        name: "ControlSequenceOfOperation", id: 0x1b, type: "ControlSequenceOfOperationEnum",
        access: "RW VM", conformance: "M", constraint: "desc", quality: "N",
        details: "Indicates the overall operating environment of the thermostat, and thus the possible system modes " +
            "that the thermostat can operate in.",
        xref: { document: "cluster", section: "4.3.9.24" }
    }),

    Attribute({
        name: "SystemMode", id: 0x1c, type: "SystemModeEnum", access: "RW VM", conformance: "M",
        constraint: "desc", default: 1, quality: "N S",
        details: "Indicates the current operating mode of the thermostat. Its value shall be limited by the " +
            "ControlSequenceOfOperation attribute.",
        xref: { document: "cluster", section: "4.3.9.25" }
    }),

    Attribute({
        name: "ThermostatRunningMode", id: 0x1e, type: "ThermostatRunningModeEnum", access: "R V",
        conformance: "[AUTO]", constraint: "desc", default: 0,
        details: "Indicates the running mode of the thermostat. This attribute uses the same values as SystemModeEnum " +
            "but can only be Off, Cool or Heat. This attribute is intended to provide additional information " +
            "when the thermostat’s system mode is in auto mode.",
        xref: { document: "cluster", section: "4.3.9.27" }
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

        xref: { document: "cluster", section: "4.3.9.28" }
    }),

    Attribute({
        name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V", conformance: "SCH",
        default: 0, quality: "F",
        details: "Indicates how many weekly schedule transitions the thermostat is capable of handling.",
        xref: { document: "cluster", section: "4.3.9.29" }
    }),

    Attribute({
        name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V", conformance: "SCH",
        default: 0, quality: "F",
        details: "Indicates how many daily schedule transitions the thermostat is capable of handling.",
        xref: { document: "cluster", section: "4.3.9.30" }
    }),

    Attribute({
        name: "TemperatureSetpointHold", id: 0x23, type: "TemperatureSetpointHoldEnum", access: "RW VM",
        conformance: "O", constraint: "desc", default: 0, quality: "N",
        details: "Indicates the temperature hold status on the thermostat. If hold status is on, the thermostat " +
            "SHOULD maintain the temperature setpoint for the current mode until a system mode change. If hold " +
            "status is off, the thermostat SHOULD follow the setpoint transitions specified by its internal " +
            "scheduling program. If the thermostat supports setpoint hold for a specific duration, it SHOULD " +
            "also implement the TemperatureSetpointHoldDuration attribute.",
        xref: { document: "cluster", section: "4.3.9.31" }
    }),

    Attribute({
        name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16", access: "RW VM",
        conformance: "O", constraint: "max 1440", default: null, quality: "X N",
        details: "Indicates the period in minutes for which a setpoint hold is active. Thermostats that support hold " +
            "for a specified duration SHOULD implement this attribute. The null value indicates the field is " +
            "unused. All other values are reserved.",
        xref: { document: "cluster", section: "4.3.9.32" }
    }),

    Attribute({
        name: "ThermostatProgrammingOperationMode", id: 0x25, type: "ProgrammingOperationModeBitmap",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P",

        details: "Indicates the operational state of the thermostat’s programming. The thermostat shall modify its " +
            "programming operation when this attribute is modified by a client and update this attribute when " +
            "its programming operation is modified locally by a user. The thermostat may support more than one " +
            "active ProgrammingOperationModeBitmap. For example, the thermostat may operate simultaneously in " +
            "Schedule Programming Mode and Recovery Mode." +
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

        xref: { document: "cluster", section: "4.3.9.33" }
    }),

    Attribute({
        name: "ThermostatRunningState", id: 0x29, type: "RelayStateBitmap", access: "R V", conformance: "O",
        constraint: "desc",
        details: "Indicates the current relay state of the heat, cool, and fan relays. Unimplemented outputs shall be " +
            "treated as if they were Off.",
        xref: { document: "cluster", section: "4.3.9.34" }
    }),

    Attribute({
        name: "SetpointChangeSource", id: 0x30, type: "SetpointChangeSourceEnum", access: "R V",
        conformance: "O", constraint: "desc", default: 0,

        details: "Indicates the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint " +
            "(i.e., who or what determined the current setpoint)." +
            "\n" +
            "This attribute enables service providers to determine whether changes to setpoints were initiated " +
            "due to occupant comfort, scheduled programming or some other source (e.g., electric utility or " +
            "other service provider). Because automation services may initiate frequent setpoint changes, this " +
            "attribute clearly differentiates the source of setpoint changes made at the thermostat.",

        xref: { document: "cluster", section: "4.3.9.35" }
    }),

    Attribute({
        name: "SetpointChangeAmount", id: 0x31, type: "TemperatureDifference", access: "R V",
        conformance: "O", default: null, quality: "X",
        details: "Indicates the delta between the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint " +
            "and the previous active setpoint. This attribute is meant to accompany the SetpointChangeSource " +
            "attribute; devices implementing SetpointChangeAmount SHOULD also implement SetpointChangeSource." +
            "\n" +
            "The null value indicates that the previous setpoint was unknown.",
        xref: { document: "cluster", section: "4.3.9.36" }
    }),

    Attribute({
        name: "SetpointChangeSourceTimestamp", id: 0x32, type: "epoch-s", access: "R V", conformance: "O",
        default: 0,
        details: "Indicates the time in UTC at which the SetpointChangeAmount attribute change was recorded.",
        xref: { document: "cluster", section: "4.3.9.37" }
    }),

    Attribute({
        name: "OccupiedSetback", id: 0x34, type: "UnsignedTemperature", access: "RW VM", conformance: "SB",
        constraint: "occupiedSetbackMin to occupiedSetbackMax", default: null, quality: "X N",

        details: "Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to " +
            "float above the OccupiedCoolingSetpoint (i.e., OccupiedCoolingSetpoint + OccupiedSetback) or below " +
            "the OccupiedHeatingSetpoint setpoint (i.e., OccupiedHeatingSetpoint – OccupiedSetback) before " +
            "initiating a state change to bring the temperature back to the user’s desired setpoint. This " +
            "attribute is sometimes also referred to as the “span.”" +
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

        xref: { document: "cluster", section: "4.3.9.38" }
    }),

    Attribute({
        name: "OccupiedSetbackMin", id: 0x35, type: "UnsignedTemperature", access: "R V", conformance: "SB",
        constraint: "max occupiedSetbackMax", default: null, quality: "X F",
        details: "Indicates the minimum value that the Thermostat server will allow the OccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.39" }
    }),

    Attribute({
        name: "OccupiedSetbackMax", id: 0x36, type: "UnsignedTemperature", access: "R V", conformance: "SB",
        constraint: "occupiedSetbackMin to 25.4°C", default: null, quality: "X F",
        details: "Indicates the maximum value that the Thermostat server will allow the OccupiedSetback attribute to " +
            "be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.40" }
    }),

    Attribute({
        name: "UnoccupiedSetback", id: 0x37, type: "UnsignedTemperature", access: "RW VM",
        conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax", default: null,
        quality: "X N",

        details: "Indicates the amount that the Thermostat server will allow the Calculated Local Temperature to " +
            "float above the UnoccupiedCoolingSetpoint (i.e., UnoccupiedCoolingSetpoint + UnoccupiedSetback) or " +
            "below the UnoccupiedHeatingSetpoint setpoint (i.e., UnoccupiedHeatingSetpoint - UnoccupiedSetback) " +
            "before initiating a state change to bring the temperature back to the user’s desired setpoint. This " +
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

        xref: { document: "cluster", section: "4.3.9.41" }
    }),

    Attribute({
        name: "UnoccupiedSetbackMin", id: 0x38, type: "UnsignedTemperature", access: "R V",
        conformance: "SB & OCC", constraint: "max unoccupiedSetbackMax", default: null, quality: "X F",
        details: "Indicates the minimum value that the Thermostat server will allow the UnoccupiedSetback attribute " +
            "to be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.42" }
    }),

    Attribute({
        name: "UnoccupiedSetbackMax", id: 0x39, type: "UnsignedTemperature", access: "R V",
        conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to 25.4°C", default: null,
        quality: "X F",
        details: "Indicates the maximum value that the Thermostat server will allow the UnoccupiedSetback attribute " +
            "to be configured by a user." +
            "\n" +
            "The null value indicates the attribute is unused.",
        xref: { document: "cluster", section: "4.3.9.43" }
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

            xref: { document: "cluster", section: "4.3.9.44" }
        }
    ),

    Attribute({
        name: "AcType", id: 0x40, type: "ACTypeEnum", access: "RW VM", conformance: "O", constraint: "desc",
        default: 0, quality: "N",
        details: "Indicates the type of Mini Split ACTypeEnum of Mini Split AC is defined depending on how Cooling " +
            "and Heating condition is achieved by Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.45" }
    }),

    Attribute({
        name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O", default: 0,
        quality: "N",
        details: "Indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat attribute",
        xref: { document: "cluster", section: "4.3.9.46" }
    }),

    Attribute({
        name: "AcRefrigerantType", id: 0x42, type: "ACRefrigerantTypeEnum", access: "RW VM",
        conformance: "O", constraint: "desc", default: 0, quality: "N",
        details: "Indicates type of refrigerant used within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.47" }
    }),

    Attribute({
        name: "AcCompressorType", id: 0x43, type: "ACCompressorTypeEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the type of compressor used within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.48" }
    }),

    Attribute({
        name: "AcErrorCode", id: 0x44, type: "ACErrorCodeBitmap", access: "RW VM", conformance: "O",
        default: 0,
        details: "Indicates the type of errors encountered within the Mini Split AC.",
        xref: { document: "cluster", section: "4.3.9.49" }
    }),

    Attribute({
        name: "AcLouverPosition", id: 0x45, type: "ACLouverPositionEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the position of Louver on the AC.",
        xref: { document: "cluster", section: "4.3.9.50" }
    }),

    Attribute({
        name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V", conformance: "O",
        default: null, quality: "X",
        details: "Indicates the temperature of the AC coil, as measured locally or remotely (over the network).",
        xref: { document: "cluster", section: "4.3.9.51" }
    }),

    Attribute({
        name: "AcCapacityFormat", id: 0x47, type: "ACCapacityFormatEnum", access: "RW VM", conformance: "O",
        constraint: "desc", default: 0, quality: "N",
        details: "Indicates the format for the ACCapacity attribute.",
        xref: { document: "cluster", section: "4.3.9.52" }
    }),

    Command(
        {
            name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt, the attributes for the indicated setpoint(s) shall have the amount specified in the " +
                "Amount field added to them. If the resulting value is outside the limits imposed by " +
                "MinCoolSetpointLimit, MaxCoolSetpointLimit, MinHeatSetpointLimit and MaxHeatSetpointLimit, the " +
                "value is clamped to those limits. This is not considered an error condition.",
            xref: { document: "cluster", section: "4.3.10.1" }
        },

        Field({ name: "Mode", id: 0x0, type: "SetpointRaiseLowerModeEnum", conformance: "M", constraint: "desc" }),
        Field({ name: "Amount", id: 0x1, type: "int8", conformance: "M" })
    ),

    Command(
        {
            name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH", direction: "request",
            response: "status",

            details: "Upon receipt, the weekly schedule for updating setpoints shall be stored in the thermostat and " +
                "SHOULD begin at the time of receipt. A status code shall be sent in response." +
                "\n" +
                "When a command is received that requires a total number of transitions greater than the device " +
                "supports, the status of the response shall be INSUFFICIENT_SPACE." +
                "\n" +
                "When any of the setpoints sent in the sequence is out of range (AbsMin/MaxSetPointLimit), or when " +
                "the Mode for Sequence field includes a mode not supported by the device, the status of the response " +
                "shall be CONSTRAINT_ERROR and no setpoints from the entire sequence SHOULD be used." +
                "\n" +
                "When an overlapping transition is detected, the status of the response shall be FAILURE." +
                "\n" +
                "When a device which does not support multiple days in a command receives a command with more than " +
                "one bit set in the DayOfWeekForSequence field, or when a device which does not support multiple " +
                "modes in a command receives a command with more than one bit set in the ModeForSequence field, or " +
                "when the contents of the Transitions field does not agree with NumberOfTransitionsForSequence, " +
                "DayOfWeekForSequence or ModeForSequence, the status of the response shall be INVALID_COMMAND." +
                "\n" +
                "When the transitions could be added successfully, the status of the response shall be SUCCESS." +
                "\n" +
                "The set weekly schedule command is used to update the thermostat weekly setpoint schedule from a " +
                "management system. If the thermostat already has a weekly setpoint schedule programmed, then it " +
                "SHOULD replace each daily setpoint set as it receives the updates from the management system. For " +
                "example, if the thermostat has 4 setpoints for every day of the week and is sent a Set Weekly " +
                "Schedule command with one setpoint for Saturday then the thermostat SHOULD remove all 4 setpoints " +
                "for Saturday and replace those with the updated setpoint but leave all other days unchanged. If the " +
                "schedule is larger than what fits in one frame or contains more than 10 transitions, the schedule " +
                "shall then be sent using multiple Set Weekly Schedule Commands.",

            xref: { document: "cluster", section: "4.3.10.4" }
        },

        Field({
            name: "NumberOfTransitionsForSequence", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate how many individual transitions to expect for this sequence of commands. " +
                "If a device supports more than 10 transitions in its schedule they can send this by sending more " +
                "than 1 “Set Weekly Schedule” command, each containing the separate information that the device " +
                "needs to set.",
            xref: { document: "cluster", section: "4.3.10.4.1" }
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

            xref: { document: "cluster", section: "4.3.10.4.2" }
        }),

        Field({
            name: "ModeForSequence", id: 0x2, type: "ScheduleModeBitmap", conformance: "M", constraint: "desc",

            details: "This field shall indicate how the application decodes the setpoint fields of each transition in the " +
                "Transitions list." +
                "\n" +
                "If the HeatSetpointPresent bit is On, the HeatSetpoint field shall NOT be null in every entry of " +
                "the Transitions list." +
                "\n" +
                "If the HeatSetpointPresent bit is Off, the HeatSetpoint field shall be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "If the CoolSetpointPresent bit is On, the CoolSetpoint field shall NOT be null in every entry of " +
                "the Transitions list." +
                "\n" +
                "If the CoolSetpointPresent bit is Off, the CoolSetpoint field shall be null in every entry of the " +
                "Transitions list." +
                "\n" +
                "At least one of the bits in the Mode For Sequence byte shall be on." +
                "\n" +
                "Both bits must be respected, even if the HEAT or COOL feature is not supported, to ensure the " +
                "command is decoded and handled correctly.",

            xref: { document: "cluster", section: "4.3.10.4.3" }
        }),

        Field(
            {
                name: "Transitions", id: 0x3, type: "list", conformance: "M", constraint: "max 10",
                details: "This field shall contain the list of setpoint transitions used to update the specified daily " +
                    "schedules",
                xref: { document: "cluster", section: "4.3.10.4.4" }
            },

            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command(
        {
            name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH", direction: "request",
            response: "GetWeeklyScheduleResponse",
            details: "Upon receipt, the unit SHOULD send in return the Get Weekly Schedule Response command. The Days to " +
                "Return and Mode to Return fields are defined as bitmask for the flexibility to support multiple " +
                "days and multiple modes within one command. If thermostat cannot handle incoming command with " +
                "multiple days and/or multiple modes within one command, it shall send default response of " +
                "INVALID_COMMAND in return.",
            xref: { document: "cluster", section: "4.3.10.5" }
        },

        Field({
            name: "DaysToReturn", id: 0x0, type: "ScheduleDayOfWeekBitmap", conformance: "M",
            constraint: "desc",
            details: "This field shall indicate the number of days the client would like to return the setpoint values " +
                "for and could be any combination of single days or the entire week.",
            xref: { document: "cluster", section: "4.3.10.5.1" }
        }),

        Field({
            name: "ModeToReturn", id: 0x1, type: "ScheduleModeBitmap", conformance: "M", constraint: "desc",
            details: "This field shall indicate the mode the client would like to return the set point values for and " +
                "could be any combination of heat only, cool only or heat & cool.",
            xref: { document: "cluster", section: "4.3.10.5.2" }
        })
    ),

    Command(
        {
            name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH", direction: "response",
            details: "This command has the same payload format as the Set Weekly Schedule.",
            xref: { document: "cluster", section: "4.3.10.6" }
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
        xref: { document: "cluster", section: "4.3.10.7" }
    }),

    Command(
        {
            name: "GetRelayStatusLogResponse", id: 0x1, conformance: "GetRelayStatusLog", direction: "response",
            details: "This command is sent from the thermostat cluster server in response to the Get Relay Status Log. " +
                "After the Relay Status Entry is sent over the air to the requesting client, the specific entry will " +
                "be cleared from the thermostat internal log.",
            xref: { document: "cluster", section: "4.3.10.9" }
        },

        Field({
            name: "TimeOfDay", id: 0x0, type: "uint16", conformance: "M", constraint: "max 1439",
            details: "This field shall indicate the sample time of the day, in minutes since midnight, when the relay " +
                "status was captured for this associated log entry. For example, 6am will be represented by 360 " +
                "minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.",
            xref: { document: "cluster", section: "4.3.10.9.1" }
        }),

        Field({
            name: "RelayStatus", id: 0x1, type: "RelayStateBitmap", conformance: "M", constraint: "desc",
            details: "This field shall indicate the relay status for thermostat when the log is captured. Each bit " +
                "represents one relay used by the thermostat. If the bit is on, the associated relay is on and " +
                "active. Each thermostat manufacturer can create its own mapping between the bitmap and the " +
                "associated relay.",
            xref: { document: "cluster", section: "4.3.10.9.2" }
        }),

        Field({
            name: "LocalTemperature", id: 0x2, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall indicate the LocalTemperature when the log is captured. The null value indicates " +
                "that LocalTemperature was invalid or unavailable.",
            xref: { document: "cluster", section: "4.3.10.9.3" }
        }),

        Field({
            name: "HumidityInPercentage", id: 0x3, type: "uint8", conformance: "M", constraint: "0 to 100",
            quality: "X"
        }),
        Field({
            name: "SetPoint", id: 0x4, type: "temperature", conformance: "M",
            details: "This field shall indicate the target setpoint temperature when the log is captured.",
            xref: { document: "cluster", section: "4.3.10.9.5" }
        }),
        Field({
            name: "UnreadEntries", id: 0x5, type: "uint16", conformance: "M",
            details: "This field shall indicate the number of unread entries within the thermostat internal log system.",
            xref: { document: "cluster", section: "4.3.10.9.6" }
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
                name: "CoolingStage", constraint: "0 to 2",
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
                name: "HeatingStage", constraint: "2 to 4",
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
        { name: "ProgrammingOperationModeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.7" } },
        Field({
            name: "ScheduleActive", constraint: "0",
            description: "Schedule programming mode. This enables any programmed weekly schedule configurations."
        }),
        Field({ name: "AutoRecovery", constraint: "1", description: "Auto/recovery mode" }),
        Field({ name: "Economy", constraint: "2", description: "Economy/EnergyStar mode" })
    ),

    Datatype(
        { name: "RelayStateBitmap", type: "map16", xref: { document: "cluster", section: "4.3.8.8" } },
        Field({ name: "Heat", constraint: "0", description: "Heat State On" }),
        Field({ name: "Cool", constraint: "1", description: "Cool State On" }),
        Field({ name: "Fan", constraint: "2", description: "Fan State On" }),
        Field({ name: "HeatStage2", constraint: "3", description: "Heat 2nd State On" }),
        Field({ name: "CoolStage2", constraint: "4", description: "Cool 2nd State On" }),
        Field({ name: "FanStage2", constraint: "5", description: "Fan 2nd State On" }),
        Field({ name: "FanStage3", constraint: "6", description: "Fan 3rd Stage On" })
    ),

    Datatype(
        { name: "RemoteSensingBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.9" } },
        Field({
            name: "LocalTemperature", constraint: "0",
            description: "Calculated Local Temperature is derived from a remote node"
        }),

        Field({
            name: "OutdoorTemperature", constraint: "1",
            description: "OutdoorTemperature is derived from a remote node",
            details: "This bit shall be supported if the OutdoorTemperature attribute is supported.",
            xref: { document: "cluster", section: "4.3.8.9.1" }
        }),

        Field({ name: "Occupancy", constraint: "2", description: "Occupancy is derived from a remote node" })
    ),

    Datatype(
        { name: "ScheduleDayOfWeekBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.10" } },
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
        { name: "ScheduleModeBitmap", type: "map8", xref: { document: "cluster", section: "4.3.8.11" } },
        Field({ name: "HeatSetpointPresent", constraint: "0", description: "Adjust Heat Setpoint" }),
        Field({ name: "CoolSetpointPresent", constraint: "1", description: "Adjust Cool Setpoint" })
    ),
    Datatype(
        { name: "ACCapacityFormatEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.12" } },
        Field({ name: "BtUh", id: 0x0, conformance: "O", description: "British Thermal Unit per Hour" })
    ),

    Datatype(
        { name: "ACCompressorTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.13" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown compressor type" }),
        Field({ name: "T1", id: 0x1, conformance: "O", description: "Max working ambient 43 °C" }),
        Field({ name: "T2", id: 0x2, conformance: "O", description: "Max working ambient 35 °C" }),
        Field({ name: "T3", id: 0x3, conformance: "O", description: "Max working ambient 52 °C" })
    ),

    Datatype(
        { name: "ACLouverPositionEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.14" } },
        Field({ name: "Closed", id: 0x1, conformance: "O", description: "Fully Closed" }),
        Field({ name: "Open", id: 0x2, conformance: "O", description: "Fully Open" }),
        Field({ name: "Quarter", id: 0x3, conformance: "O", description: "Quarter Open" }),
        Field({ name: "Half", id: 0x4, conformance: "O", description: "Half Open" }),
        Field({ name: "ThreeQuarters", id: 0x5, conformance: "O", description: "Three Quarters Open" })
    ),

    Datatype(
        { name: "ACRefrigerantTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.15" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown Refrigerant Type" }),
        Field({ name: "R22", id: 0x1, conformance: "O", description: "R22 Refrigerant" }),
        Field({ name: "R410A", id: 0x2, conformance: "O", description: "R410a Refrigerant" }),
        Field({ name: "R407C", id: 0x3, conformance: "O", description: "R407c Refrigerant" })
    ),

    Datatype(
        { name: "ACTypeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.16" } },
        Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown AC Type" }),
        Field({ name: "CoolingFixed", id: 0x1, conformance: "O", description: "Cooling and Fixed Speed" }),
        Field({ name: "HeatPumpFixed", id: 0x2, conformance: "O", description: "Heat Pump and Fixed Speed" }),
        Field({ name: "CoolingInverter", id: 0x3, conformance: "O", description: "Cooling and Inverter" }),
        Field({ name: "HeatPumpInverter", id: 0x4, conformance: "O", description: "Heat Pump and Inverter" })
    ),

    Datatype(
        { name: "SetpointRaiseLowerModeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.17" } },
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

            xref: { document: "cluster", section: "4.3.8.18" }
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
        { name: "SetpointChangeSourceEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.19" } },
        Field({
            name: "Manual", id: 0x0, conformance: "O",
            description: "Manual, user-initiated setpoint change via the thermostat"
        }),
        Field({
            name: "Schedule", id: 0x1, conformance: "[SCH]",
            description: "Schedule/internal programming-initiated setpoint change"
        }),
        Field({
            name: "External", id: 0x2, conformance: "O",
            description: "Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)"
        })
    ),

    Datatype(
        { name: "StartOfWeekEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.20" } },
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
            details: "Table 35. Interpretation of Heat, Cool and Auto SystemModeEnum Values",
            xref: { document: "cluster", section: "4.3.8.21" }
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
        { name: "ThermostatRunningModeEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.22" } },
        Field({
            name: "Off", id: 0x0, conformance: "O",
            description: "The Thermostat does not generate demand for Cooling or Heating"
        }),
        Field({ name: "Cool", id: 0x3, conformance: "[COOL]", description: "Demand is only generated for Cooling" }),
        Field({ name: "Heat", id: 0x4, conformance: "[HEAT]", description: "Demand is only generated for Heating" })
    ),

    Datatype(
        { name: "TemperatureSetpointHoldEnum", type: "enum8", xref: { document: "cluster", section: "4.3.8.23" } },
        Field({ name: "SetpointHoldOff", id: 0x0, conformance: "M", description: "Follow scheduling program" }),
        Field({
            name: "SetpointHoldOn", id: 0x1, conformance: "M",
            description: "Maintain current setpoint, regardless of schedule transitions"
        })
    ),

    Datatype(
        {
            name: "WeeklyScheduleTransitionStruct", type: "struct",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.8.24" }
        },

        Field({
            name: "TransitionTime", id: 0x0, type: "uint16", conformance: "M", constraint: "max 1439",
            details: "This field shall represent the start time of the schedule transition during the associated day. The " +
                "time will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For " +
                "example, 6am will be represented by 360 minutes since midnight and 11:30pm will be represented by " +
                "1410 minutes since midnight.",
            xref: { document: "cluster", section: "4.3.8.24.1" }
        }),

        Field({
            name: "HeatSetpoint", id: 0x1, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall represent the heat setpoint to be applied at this associated transition start time.",
            xref: { document: "cluster", section: "4.3.8.24.2" }
        }),
        Field({
            name: "CoolSetpoint", id: 0x2, type: "temperature", conformance: "M", quality: "X",
            details: "This field shall represent the cool setpoint to be applied at this associated transition start time.",
            xref: { document: "cluster", section: "4.3.8.24.3" }
        })
    ),

    Datatype({ name: "OccupancyBitmap", type: "OccupancySensing.OccupancyBitmap" })
);

MatterDefinition.children.push(Thermostat);
