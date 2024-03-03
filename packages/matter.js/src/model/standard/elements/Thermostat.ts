/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "Thermostat", id: 0x201, classification: "application", description: "Thermostat",
    details: "This cluster provides an interface to the functionality of a thermostat.",
    xref: { document: "cluster", section: "4.3" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "4.3.3.1" },

            children: [
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
                    details: "Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute"
                })
            ]
        }),

        Attribute({
            name: "LocalTemperature", id: 0x0, type: "temperature", access: "R V", conformance: "M",
            constraint: "min 0", default: null, quality: "X P",

            details: "This attribute indicates the current LocalTemperature value, when available. The value may be " +
                "local, or remote, depending on the value of the RemoteSensing attribute when supported." +
                "\n" +
                "  • If the LTNE feature is not supported:" +
                "\n" +
                "    ◦ If the temperature measurement is invalid or currently unavailable, the attribute shall " +
                "      report null." +
                "\n" +
                "    ◦ If the temperature measurement is valid, the attribute shall report that value." +
                "\n" +
                "  • Otherwise, if the LTNE feature is supported, there is no feedback externally available for the " +
                "    LocalTemperature value. In that case, the LocalTemperature attribute shall always report null.",

            xref: { document: "cluster", section: "4.3.7.2" }
        }),

        Attribute({
            name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "O",
            constraint: "min 0", default: null, quality: "X",
            details: "This attribute represents the outdoor temperature, as measured locally or remotely (over the " +
                "network).",
            xref: { document: "cluster", section: "4.3.7.3" }
        }),

        Attribute({
            name: "Occupancy", id: 0x2, type: "map8", access: "R V", conformance: "OCC", constraint: "desc",
            default: 1,
            details: "This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or " +
                "remotely (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other " +
                "bits are reserved.",
            xref: { document: "cluster", section: "4.3.7.4" },
            children: [Field({ name: "occupied", constraint: "0" })]
        }),

        Attribute({
            name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V", conformance: "[HEAT]",
            constraint: "min 0", default: { type: "celsius", value: 7 }, quality: "F",
            details: "This attribute specifies the absolute minimum level that the heating setpoint may be set to. This " +
                "is a limitation imposed by the manufacturer." +
                "\n" +
                "Refer to Setpoint Limits for constraints",
            xref: { document: "cluster", section: "4.3.7.5" }
        }),

        Attribute({
            name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V", conformance: "[HEAT]",
            constraint: "min 0", default: { type: "celsius", value: 30 }, quality: "F",
            details: "This attribute specifies the absolute maximum level that the heating setpoint may be set to. This " +
                "is a limitation imposed by the manufacturer." +
                "\n" +
                "Refer to Setpoint Limits for constraints",
            xref: { document: "cluster", section: "4.3.7.6" }
        }),

        Attribute({
            name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V", conformance: "[COOL]",
            constraint: "min 0", default: { type: "celsius", value: 16 }, quality: "F",
            details: "This attribute specifies the absolute minimum level that the cooling setpoint may be set to. This " +
                "is a limitation imposed by the manufacturer." +
                "\n" +
                "Refer to Setpoint Limits for constraints",
            xref: { document: "cluster", section: "4.3.7.7" }
        }),

        Attribute({
            name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V", conformance: "[COOL]",
            constraint: "min 0", default: { type: "celsius", value: 32 }, quality: "F",
            details: "This attribute specifies the absolute maximum level that the cooling setpoint may be set to. This " +
                "is a limitation imposed by the manufacturer." +
                "\n" +
                "Refer to Setpoint Limits for constraints",
            xref: { document: "cluster", section: "4.3.7.8" }
        }),

        Attribute({
            name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V", conformance: "[COOL]",
            constraint: "0 to 100", quality: "P",
            details: "This attribute specifies the level of cooling demanded by the PI (proportional integral) control " +
                "loop in use by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” " +
                "or “heating” mode." +
                "\n" +
                "This attribute is reported regularly and may be used to control a cooling device.",
            xref: { document: "cluster", section: "4.3.7.9" }
        }),

        Attribute({
            name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V", conformance: "[HEAT]",
            constraint: "0 to 100", quality: "P",
            details: "This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 " +
                "when the thermostat is in “off” or “cooling” mode." +
                "\n" +
                "This attribute is reported regularly and may be used to control a heating device.",
            xref: { document: "cluster", section: "4.3.7.10" }
        }),

        Attribute({
            name: "HvacSystemTypeConfiguration", id: 0x9, type: "map8", access: "R[W] VM", conformance: "D",
            constraint: "desc", default: 0, quality: "N",

            details: "This attribute specifies the HVAC system type controlled by the thermostat. If the thermostat uses " +
                "physical DIP switches to set these parameters, this information shall be available read-only from " +
                "the DIP switches. If these parameters are set via software, there shall be read/write access in " +
                "order to provide remote programming capability. The meanings of individual bits are detailed below. " +
                "Each bit represents a type of system configuration." +
                "\n" +
                "Table 71. HVAC System Type Configuration Values",

            xref: { document: "cluster", section: "4.3.7.11" },

            children: [
                Field({
                    name: "CoolingStage", constraint: "0 to 2",
                    description: "00 – Cool Stage 101 – Cool Stage 210 – Cool Stage 311 – Reserved"
                }),
                Field({
                    name: "HeatingStage", constraint: "2 to 4",
                    description: "00 – Heat Stage 101 – Heat Stage 210 – Heat Stage 311 – Reserved"
                }),
                Field({ name: "HeatingType", constraint: "4", description: "0 – Conventional1 – Heat Pump" }),
                Field({ name: "HeatingFuel", constraint: "5", description: "0 – Electric / B1 – Gas / O" })
            ]
        }),

        Attribute({
            name: "LocalTemperatureCalibration", id: 0x10, type: "temp-s8", access: "RW VM",
            conformance: "[!LTNE]", constraint: "-2.5°C to 2.5°C", default: { type: "celsius", value: 0 },
            quality: "N",

            details: "This attribute specifies the offset the Thermostat server shall make to the measured temperature " +
                "(locally or remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting " +
                "it." +
                "\n" +
                "The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s " +
                "preferences (e.g., to match if there are multiple servers displaying different values for the same " +
                "HVAC area) or compensate for variability amongst temperature sensors." +
                "\n" +
                "If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported " +
                "value (e.g., out of the range supported by the Thermostat server), the Thermostat server shall " +
                "respond with a status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or " +
                "lower limit reached.",

            xref: { document: "cluster", section: "4.3.7.12" }
        }),

        Attribute({
            name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
            conformance: "COOL", constraint: "min -27315", default: { type: "celsius", value: 26 },
            quality: "N S",

            details: "This attribute specifies the cooling mode setpoint when the room is occupied." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode " +
                "setpoint.",

            xref: { document: "cluster", section: "4.3.7.13" }
        }),

        Attribute({
            name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
            conformance: "HEAT", constraint: "min -27315", default: { type: "celsius", value: 20 },
            quality: "N S",

            details: "This attribute specifies the heating mode setpoint when the room is occupied." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If the occupancy status of the room is unknown, this attribute shall be used as the heating mode " +
                "setpoint.",

            xref: { document: "cluster", section: "4.3.7.14" }
        }),

        Attribute({
            name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
            conformance: "COOL & OCC", constraint: "min -27315", default: { type: "celsius", value: 26 },
            quality: "N",

            details: "This attribute specifies the cooling mode setpoint when the room is unoccupied." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If the occupancy status of the room is unknown, this attribute shall not be used.",

            xref: { document: "cluster", section: "4.3.7.15" }
        }),

        Attribute({
            name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
            conformance: "HEAT & OCC", constraint: "min -27315", default: { type: "celsius", value: 20 },
            quality: "N",

            details: "This attribute specifies the heating mode setpoint when the room is unoccupied." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If the occupancy status of the room is unknown, this attribute shall not be used.",

            xref: { document: "cluster", section: "4.3.7.16" }
        }),

        Attribute({
            name: "MinHeatSetpointLimit", id: 0x15, type: "temperature", access: "RW VM", conformance: "[HEAT]",
            constraint: "min -27315", default: { type: "reference", name: "AbsMinHeatSetpointLimit" },
            quality: "N",

            details: "This attribute specifies the minimum level that the heating setpoint may be set to." +
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

            xref: { document: "cluster", section: "4.3.7.17" }
        }),

        Attribute({
            name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM", conformance: "[HEAT]",
            constraint: "min -27315", default: { type: "reference", name: "AbsMaxHeatSetpointLimit" },
            quality: "N",

            details: "This attribute specifies the maximum level that the heating setpoint may be set to." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

            xref: { document: "cluster", section: "4.3.7.18" }
        }),

        Attribute({
            name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM", conformance: "[COOL]",
            constraint: "min -27315", default: { type: "reference", name: "AbsMinCoolSetpointLimit" },
            quality: "N",

            details: "This attribute specifies the minimum level that the cooling setpoint may be set to." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

            xref: { document: "cluster", section: "4.3.7.19" }
        }),

        Attribute({
            name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM", conformance: "[COOL]",
            constraint: "min -27315", default: { type: "reference", name: "AbsMaxCoolSetpointLimit" },
            quality: "N",

            details: "This attribute specifies the maximum level that the cooling setpoint may be set to." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                "modifying setpoints" +
                "\n" +
                "then a response with the status code CONSTRAINT_ERROR shall be returned.",

            xref: { document: "cluster", section: "4.3.7.20" }
        }),

        Attribute({
            name: "MinSetpointDeadBand", id: 0x19, type: "temp-s8", access: "R[W] VM", conformance: "AUTO",
            constraint: "0°C to 2.5°C", default: { type: "celsius", value: 2 }, quality: "N",

            details: "On devices which support the AUTO feature, this attribute specifies the minimum difference between " +
                "the Heat Setpoint and the Cool Setpoint." +
                "\n" +
                "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned.",

            xref: { document: "cluster", section: "4.3.7.21" }
        }),

        Attribute({
            name: "RemoteSensing", id: 0x1a, type: "map8", access: "RW VM", conformance: "O", constraint: "0",
            default: 0, quality: "N",

            details: "This attribute indicates when the local temperature, outdoor temperature and occupancy are being " +
                "sensed by remote networked sensors, rather than internal sensors." +
                "\n" +
                "A bit set to 1 indicates remote sensing of the relevant value." +
                "\n" +
                "Table 72. RemoteSensing Attribute Bit Values" +
                "\n" +
                "If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall " +
                "always report a value of 0." +
                "\n" +
                "If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is " +
                "present, the write shall fail and the server shall report a CONSTRAINT_ERROR.",

            xref: { document: "cluster", section: "4.3.7.22" },

            children: [
                Field({
                    name: "LocalTemperature", constraint: "0",
                    description: "When set, LocalTemperature Value is derived from a remote node"
                }),
                Field({
                    name: "OutdoorTemperature", constraint: "1",
                    description: "When set, OutdoorTemperature is derived from a remote node"
                }),
                Field({
                    name: "Occupancy", constraint: "2",
                    description: "When set, Occupancy is derived from a remote node"
                })
            ]
        }),

        Attribute({
            name: "ControlSequenceOfOperation", id: 0x1b, type: "enum8", access: "RW VM", conformance: "M",
            constraint: "desc", default: 4, quality: "N",

            details: "This attribute specifies the overall operating environment of the thermostat, and thus the possible " +
                "system modes that the thermostat can operate in. It shall be set to one of the following values." +
                "\n" +
                "Table 73. ControlSequenceOfOperation Values" +
                "\n" +
                "NOTE" +
                "\n" +
                "CoolingAndHeating" +
                "\n" +
                "A thermostat indicating it supports CoolingAndHeating (or CoolingAndHeatingWithReheat) SHOULD be " +
                "able to request heating or cooling on demand and will usually support the Auto SystemMode." +
                "\n" +
                "Systems which support cooling or heating, requiring external intervention to change modes or where " +
                "the whole building must be in the same mode, SHOULD report CoolingOnly or HeatingOnly based on the " +
                "current capability.",

            xref: { document: "cluster", section: "4.3.7.23" },

            children: [
                Field({
                    name: "CoolingOnly", id: 0x0, conformance: "[COOL]",
                    description: "Heat and Emergency are not possible"
                }),
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
                Field({
                    name: "CoolingAndHeating", id: 0x4, conformance: "[HEAT & COOL]",
                    description: "All modes are possible"
                }),
                Field({
                    name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "[HEAT & COOL]",
                    description: "All modes are possible"
                })
            ]
        }),

        Attribute({
            name: "SystemMode", id: 0x1c, type: "enum8", access: "RW VM", conformance: "M", constraint: "desc",
            default: 1, quality: "N S",

            details: "This attribute specifies the current operating mode of the thermostat, It shall be set to one of " +
                "the following values, as limited by the ControlSequenceOfOperation Attribute." +
                "\n" +
                "NOTE It is not mandatory to support all values." +
                "\n" +
                "Table 75. Interpretation of Heat, Cool and Auto SystemMode Values",

            xref: { document: "cluster", section: "4.3.7.24" },

            children: [
                Field({
                    name: "Off", id: 0x0, conformance: "O",
                    description: "The Thermostat does not generate demand for Cooling or Heating"
                }),
                Field({
                    name: "Auto", id: 0x1, conformance: "AUTO",
                    description: "Demand is generated for either Cooling or Heating, as required"
                }),
                Field({
                    name: "Cool", id: 0x3, conformance: "[COOL]", description: "Demand is only generated for Cooling"
                }),
                Field({
                    name: "Heat", id: 0x4, conformance: "[HEAT]", description: "Demand is only generated for Heating"
                }),
                Field({
                    name: "EmergencyHeat", id: 0x5, conformance: "[HEAT]",
                    description: "2nd stage heating is in use to achieve desired temperature"
                }),
                Field({ name: "Precooling", id: 0x6, conformance: "[COOL]", description: "(see Terms)" }),
                Field({ name: "FanOnly", id: 0x7, conformance: "O" }),
                Field({ name: "Dry", id: 0x8, conformance: "O" }),
                Field({ name: "Sleep", id: 0x9, conformance: "O" })
            ]
        }),

        Attribute({
            name: "AlarmMask", id: 0x1d, type: "map8", access: "R V", conformance: "O", constraint: "desc",
            default: 0,

            details: "This attribute specifies whether each of the alarms listed below is enabled. When the bit number " +
                "corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not " +
                "corresponding to a code in the table are reserved." +
                "\n" +
                "When the Alarms cluster is implemented on a device, and one of the alarm conditions included in " +
                "this table occurs, an alarm notification is generated, with the alarm code field set as listed in " +
                "the table." +
                "\n" +
                "Table 76. Alarm Codes",

            xref: { document: "cluster", section: "4.3.7.25" },
            children: [
                Field({ name: "InitializationFailure", constraint: "0" }),
                Field({ name: "HardwareFailure", constraint: "1" }),
                Field({ name: "SelfCalibrationFailure", constraint: "2" })
            ]
        }),

        Attribute({
            name: "ThermostatRunningMode", id: 0x1e, type: "enum8", access: "R V", conformance: "[AUTO]",
            constraint: "desc", default: 0,
            xref: { document: "cluster", section: "4.3.7" },
            children: [
                Field({ name: "Off", id: 0x0, conformance: "M" }),
                Field({ name: "Cool", id: 0x3, conformance: "M" }),
                Field({ name: "Heat", id: 0x4, conformance: "M" })
            ]
        }),

        Attribute({
            name: "StartOfWeek", id: 0x20, type: "enum8", access: "R V", conformance: "SCH", constraint: "desc",
            quality: "F",

            details: "This attribute represents the day of the week that this thermostat considers to be the start of " +
                "week for weekly set point scheduling." +
                "\n" +
                "Table 77. StartofWeek Values" +
                "\n" +
                "This attribute may be able to be used as the base to determine if the device supports weekly " +
                "scheduling by reading the attribute. Successful response means that the weekly scheduling is " +
                "supported.",

            xref: { document: "cluster", section: "4.3.7.27" },

            children: [
                Field({ name: "Sunday", id: 0x0, conformance: "M" }),
                Field({ name: "Monday", id: 0x1, conformance: "M" }),
                Field({ name: "Tuesday", id: 0x2, conformance: "M" }),
                Field({ name: "Wednesday", id: 0x3, conformance: "M" }),
                Field({ name: "Thursday", id: 0x4, conformance: "M" }),
                Field({ name: "Friday", id: 0x5, conformance: "M" }),
                Field({ name: "Saturday", id: 0x6, conformance: "M" })
            ]
        }),

        Attribute({
            name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V", conformance: "SCH",
            default: 0, quality: "F",
            details: "This attribute determines how many weekly schedule transitions the thermostat is capable of " +
                "handling.",
            xref: { document: "cluster", section: "4.3.7.28" }
        }),

        Attribute({
            name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V", conformance: "SCH",
            default: 0, quality: "F",
            details: "This attribute determines how many daily schedule transitions the thermostat is capable of handling.",
            xref: { document: "cluster", section: "4.3.7.29" }
        }),

        Attribute({
            name: "TemperatureSetpointHold", id: 0x23, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", default: 0, quality: "N",

            details: "This attribute specifies the temperature hold status on the thermostat. If hold status is on, the " +
                "thermostat SHOULD maintain the temperature set point for the current mode until a system mode " +
                "change. If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by " +
                "its internal scheduling program. If the thermostat supports setpoint hold for a specific duration, " +
                "it SHOULD also implement the TemperatureSetpointHoldDuration attribute." +
                "\n" +
                "Table 78. TemperatureSetpointHold Values",

            xref: { document: "cluster", section: "4.3.7.30" },

            children: [
                Field({ name: "SetpointHoldOff", id: 0x0, conformance: "M", description: "Follow scheduling program" }),
                Field({
                    name: "SetpointHoldOn", id: 0x1, conformance: "M",
                    description: "Maintain current setpoint, regardless of schedule transitions"
                })
            ]
        }),

        Attribute({
            name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16", access: "RW VM",
            conformance: "O", constraint: "0 to 1440", default: null, quality: "X N",
            details: "This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that " +
                "support hold for a specified duration SHOULD implement this attribute. The null value indicates the " +
                "field is unused. All other values are reserved.",
            xref: { document: "cluster", section: "4.3.7.31" }
        }),

        Attribute({
            name: "ThermostatProgrammingOperationMode", id: 0x25, type: "map8", access: "RW VM",
            conformance: "O", constraint: "desc", default: 0, quality: "P",

            details: "This attribute determines the operational state of the thermostat’s programming. The thermostat " +
                "shall modify its programming operation when this attribute is modified by a client and update this " +
                "attribute when its programming operation is modified locally by a user. The thermostat may support " +
                "more than one active ThermostatProgrammingOperationMode. For example, the thermostat may operate " +
                "simultaneously in Schedule Programming Mode and Recovery Mode." +
                "\n" +
                "Thermostats which contain a schedule may use this attribute to control how that schedule is used, " +
                "even if they do not support the Schedule Configuration feature." +
                "\n" +
                "Table 79. ThermostatProgrammingOperationMode Attribute Values" +
                "\n" +
                "When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the " +
                "thermostat or remotely, not by internal schedule programming." +
                "\n" +
                "NOTE Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming " +
                "configurations.",

            xref: { document: "cluster", section: "4.3.7.32" },

            children: [
                Field({
                    name: "ScheduleActive", constraint: "0",
                    description: "Schedule programming mode. This enables any programmed weekly schedule configurations."
                }),
                Field({ name: "AutoRecovery", constraint: "1", description: "Auto/recovery mode" }),
                Field({ name: "Economy", constraint: "2", description: "Economy/EnergyStar mode" })
            ]
        }),

        Attribute({
            name: "ThermostatRunningState", id: 0x29, type: "map16", access: "R V", conformance: "O",
            constraint: "desc",
            details: "This attribute represents the current relay state of the heat, cool, and fan relays." +
                "\n" +
                "Table 80. HVAC Relay State Values" +
                "\n" +
                "Unimplemented outputs shall be treated as if they were Off.",
            xref: { document: "cluster", section: "4.3.7.33" },

            children: [
                Field({ name: "Heat", constraint: "0", description: "Heat State On" }),
                Field({ name: "Cool", constraint: "1", description: "Cool State On" }),
                Field({ name: "Fan", constraint: "2", description: "Fan State On" }),
                Field({ name: "HeatStage2", constraint: "3", description: "Heat 2nd Stage State On" }),
                Field({ name: "CoolStage2", constraint: "4", description: "Cool 2nd Stage State On" }),
                Field({ name: "FanStage2", constraint: "5", description: "Fan 2nd Stage State On" }),
                Field({ name: "FanStage3", constraint: "6", description: "Fan 3rd Stage Stage On" })
            ]
        }),

        Attribute({
            name: "SetpointChangeSource", id: 0x30, type: "enum8", access: "R V", conformance: "O",
            constraint: "desc", default: 0,

            details: "This attribute specifies the source of the current active OccupiedCoolingSetpoint or " +
                "OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint)." +
                "\n" +
                "This attribute enables service providers to determine whether changes to setpoints were initiated " +
                "due to occupant comfort, scheduled programming or some other source (e.g., electric utility or " +
                "other service provider). Because automation services may initiate frequent setpoint changes, this " +
                "attribute clearly differentiates the source of setpoint changes made at the thermostat." +
                "\n" +
                "Table 81. SetpointChangeSource Values",

            xref: { document: "cluster", section: "4.3.7.34" },

            children: [
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
            ]
        }),

        Attribute({
            name: "SetpointChangeAmount", id: 0x31, type: "temp-diff", access: "R V", conformance: "O",
            default: null, quality: "X",

            details: "This attribute specifies the delta between the current active OccupiedCoolingSetpoint or " +
                "OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the " +
                "SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement " +
                "SetpointChangeSource." +
                "\n" +
                "The null value indicates that the previous setpoint was unknown.",

            xref: { document: "cluster", section: "4.3.7.35" }
        }),

        Attribute({
            name: "SetpointChangeSourceTimestamp", id: 0x32, type: "utc", access: "R V", conformance: "O",
            default: 0,
            details: "This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change " +
                "was recorded.",
            xref: { document: "cluster", section: "4.3.7.36" }
        }),

        Attribute({
            name: "OccupiedSetback", id: 0x34, type: "temp-u8", access: "RW VM", conformance: "SB",
            constraint: "occupiedSetbackMin to occupiedSetbackMax", default: null, quality: "X N",

            details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature " +
                "Value to float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or " +
                "below the OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a " +
                "state change to bring the temperature back to the user’s desired setpoint. This attribute is " +
                "sometimes also referred to as the “span.”" +
                "\n" +
                "The purpose of this attribute is to allow remote configuration of the span between the desired set" +
                "\n" +
                "point and the measured temperature to help prevent over-cycling and reduce energy bills, though " +
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

            xref: { document: "cluster", section: "4.3.7.37" }
        }),

        Attribute({
            name: "OccupiedSetbackMin", id: 0x35, type: "temp-u8", access: "R V", conformance: "SB",
            constraint: "0 to occupiedSetbackMax", default: null, quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server will allow the " +
                "OccupiedSetback attribute to be configured by a user." +
                "\n" +
                "The null value indicates the attribute is unused.",
            xref: { document: "cluster", section: "4.3.7.38" }
        }),

        Attribute({
            name: "OccupiedSetbackMax", id: 0x36, type: "temp-u8", access: "R V", conformance: "SB",
            constraint: "occupiedSetbackMin to 25.4°C", default: null, quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server will allow the " +
                "OccupiedSetback attribute to be configured by a user." +
                "\n" +
                "The null value indicates the attribute is unused.",
            xref: { document: "cluster", section: "4.3.7.39" }
        }),

        Attribute({
            name: "UnoccupiedSetback", id: 0x37, type: "temp-u8", access: "RW VM", conformance: "SB & OCC",
            constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax", default: null, quality: "X N",

            details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature " +
                "Value to float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) " +
                "or below the UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before " +
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

            xref: { document: "cluster", section: "4.3.7.40" }
        }),

        Attribute({
            name: "UnoccupiedSetbackMin", id: 0x38, type: "temp-u8", access: "R V", conformance: "SB & OCC",
            constraint: "0 to unoccupiedSetbackMax", default: null, quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server will allow the " +
                "UnoccupiedSetback attribute to be configured by a user." +
                "\n" +
                "The null value indicates the attribute is unused.",
            xref: { document: "cluster", section: "4.3.7.41" }
        }),

        Attribute({
            name: "UnoccupiedSetbackMax", id: 0x39, type: "temp-u8", access: "R V", conformance: "SB & OCC",
            constraint: "unoccupiedSetbackMin to 25.4°C", default: null, quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server will allow the " +
                "UnoccupiedSetback attribute to be configured by a user." +
                "\n" +
                "The null value indicates the attribute is unused.",
            xref: { document: "cluster", section: "4.3.7.42" }
        }),

        Attribute({
            name: "EmergencyHeatDelta", id: 0x3a, type: "temp-u8", access: "RW VM", conformance: "O",
            default: { type: "celsius", value: 25 }, quality: "N",

            details: "This attribute specifies the delta between the LocalTemperature Value and the " +
                "OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will " +
                "operate in emergency heat mode." +
                "\n" +
                "If the difference between LocalTemperature Value and Un/OccupiedHeatingSetpoint is greater than or " +
                "equal to the EmergencyHeatDelta and the Thermostat server’s SystemMode attribute is in a " +
                "heating-related mode, then the Thermostat server shall immediately switch to the SystemMode " +
                "attribute value that provides the highest stage of heating (e.g., emergency heat) and continue " +
                "operating in that running state until the OccupiedHeatingSetpoint value is reached. For example:" +
                "\n" +
                "  • LocalTemperature = 10.0°C" +
                "\n" +
                "  • OccupiedHeatingSetpoint = 16.0°C" +
                "\n" +
                "  • EmergencyHeatDelta = 2.0°C" +
                "\n" +
                "⇒ OccupiedHeatingSetpoint - LocalTemperature ≥? EmergencyHeatDelta" +
                "\n" +
                "⇒ 16°C - 10°C ≥? 2°C" +
                "\n" +
                "⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode" +
                "\n" +
                "The purpose of this attribute is to provide Thermostat clients the ability to configure rapid " +
                "heating when a setpoint is of a specified amount greater than the measured temperature. This allows " +
                "the heated space to be quickly heated to the desired level set by the user.",

            xref: { document: "cluster", section: "4.3.7.43" }
        }),

        Attribute({
            name: "AcType", id: 0x40, type: "enum8", access: "RW VM", conformance: "O", constraint: "desc",
            default: 0, quality: "N",
            details: "This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how " +
                "Cooling and Heating condition is achieved by Mini Split AC." +
                "\n" +
                "Table 82. ACType Values",
            xref: { document: "cluster", section: "4.3.7.44" },

            children: [
                Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown AC Type" }),
                Field({ name: "CoolingFixed", id: 0x1, conformance: "O", description: "Cooling and Fixed Speed" }),
                Field({ name: "HeatPumpFixed", id: 0x2, conformance: "O", description: "Heat Pump and Fixed Speed" }),
                Field({ name: "CoolingInverter", id: 0x3, conformance: "O", description: "Cooling and Inverter" }),
                Field({ name: "HeatPumpInverter", id: 0x4, conformance: "O", description: "Heat Pump and Inverter" })
            ]
        }),

        Attribute({
            name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O", default: 0,
            quality: "N",
            details: "This attribute indicates capacity of Mini Split AC in terms of the format defined by the " +
                "ACCapacityFormat attribute",
            xref: { document: "cluster", section: "4.3.7.45" }
        }),

        Attribute({
            name: "AcRefrigerantType", id: 0x42, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates type of refrigerant used within the Mini Split AC." +
                "\n" +
                "Table 83. ACRefrigerantType Values",
            xref: { document: "cluster", section: "4.3.7.46" },

            children: [
                Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown Refrigerant Type" }),
                Field({ name: "R22", id: 0x1, conformance: "O", description: "R22 Refrigerant" }),
                Field({ name: "R410A", id: 0x2, conformance: "O", description: "R410a Refrigerant" }),
                Field({ name: "R407C", id: 0x3, conformance: "O", description: "R407c Refrigerant" })
            ]
        }),

        Attribute({
            name: "AcCompressorType", id: 0x43, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates type of Compressor used within the Mini Split AC." +
                "\n" +
                "Table 84. ACCompressorType Values",
            xref: { document: "cluster", section: "4.3.7.47" },

            children: [
                Field({ name: "Unknown", id: 0x0, conformance: "O", description: "Unknown compressor type" }),
                Field({ name: "T1", id: 0x1, conformance: "O", description: "Max working ambient 43 °C" }),
                Field({ name: "T2", id: 0x2, conformance: "O", description: "Max working ambient 35 °C" }),
                Field({ name: "T3", id: 0x3, conformance: "O", description: "Max working ambient 52 °C" })
            ]
        }),

        Attribute({
            name: "AcErrorCode", id: 0x44, type: "map32", access: "RW VM", conformance: "O", default: 0,
            details: "This attribute indicates the type of errors encountered within the Mini Split AC. Error values are " +
                "reported with four bytes values. Each bit within the four bytes indicates the unique error." +
                "\n" +
                "Table 85. ACErrorCode Values",
            xref: { document: "cluster", section: "4.3.7.48" },

            children: [
                Field({
                    name: "CompressorFail", constraint: "0", description: "Compressor Failure or Refrigerant Leakage"
                }),
                Field({ name: "RoomSensorFail", constraint: "1", description: "Room Temperature Sensor Failure" }),
                Field({ name: "OutdoorSensorFail", constraint: "2", description: "Outdoor Temperature Sensor Failure" }),
                Field({ name: "CoilSensorFail", constraint: "3", description: "Indoor Coil Temperature Sensor Failure" }),
                Field({ name: "FanFail", constraint: "4", description: "Fan Failure" })
            ]
        }),

        Attribute({
            name: "AcLouverPosition", id: 0x45, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates the position of Louver on the AC." +
                "\n" +
                "Table 86. ACLouverPosition Values",
            xref: { document: "cluster", section: "4.3.7.49" },

            children: [
                Field({ name: "Closed", id: 0x1, conformance: "O", description: "Fully Closed" }),
                Field({ name: "Open", id: 0x2, conformance: "O", description: "Fully Open" }),
                Field({ name: "Quarter", id: 0x3, conformance: "O", description: "Quarter Open" }),
                Field({ name: "Half", id: 0x4, conformance: "O", description: "Half Open" }),
                Field({ name: "ThreeQuarters", id: 0x5, conformance: "O", description: "Three Quarters Open" })
            ]
        }),

        Attribute({
            name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V", conformance: "O",
            constraint: "min -27315", default: null, quality: "X",
            details: "This attribute represents the temperature of the AC coil, as measured locally or remotely (over the " +
                "network).",
            xref: { document: "cluster", section: "4.3.7.50" }
        }),

        Attribute({
            name: "AcCapacityFormat", id: 0x47, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", default: 0, quality: "N",
            details: "This attribute specifies the format for the ACCapacity attribute." +
                "\n" +
                "Table 87. ACCapacity Values",
            xref: { document: "cluster", section: "4.3.7.51" },
            children: [Field({ name: "BtUh", id: 0x0, conformance: "O", description: "British Thermal Unit per Hour" })]
        }),

        Command({
            name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                Field({ name: "Mode", type: "SetpointAdjustMode", conformance: "M" }),
                Field({ name: "Amount", type: "int8", conformance: "M" })
            ]
        }),

        Command({
            name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "4.3.8" },

            children: [
                Field({ name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" }),
                Field({ name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" }),
                Field({ name: "ModeForSequence", type: "ModeForSequence", conformance: "M" }),
                Field({
                    name: "Transitions", type: "list", conformance: "M",
                    children: [Field({ name: "entry", type: "ThermostatScheduleTransition" })]
                })
            ]
        }),

        Command({
            name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH", direction: "request",
            response: "GetWeeklyScheduleResponse",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                Field({ name: "DaysToReturn", type: "DayOfWeek", conformance: "M" }),
                Field({ name: "ModeToReturn", type: "ModeForSequence", conformance: "M" })
            ]
        }),

        Command({
            name: "ClearWeeklySchedule", id: 0x3, access: "M", conformance: "SCH", direction: "request",
            xref: { document: "cluster", section: "4.3.8" }
        }),
        Command({
            name: "GetRelayStatusLog", id: 0x4, access: "O", conformance: "O", direction: "request",
            response: "GetRelayStatusLogResponse",
            xref: { document: "cluster", section: "4.3.8" }
        }),

        Command({
            name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH", direction: "response",
            xref: { document: "cluster", section: "4.3.8" },

            children: [
                Field({ name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" }),
                Field({ name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" }),
                Field({ name: "ModeForSequence", type: "ModeForSequence", conformance: "M" }),
                Field({
                    name: "Transitions", type: "list", conformance: "M",
                    children: [Field({ name: "entry", type: "ThermostatScheduleTransition" })]
                })
            ]
        }),

        Command({
            name: "GetRelayStatusLogResponse", id: 0x1, conformance: "O", direction: "response",
            xref: { document: "cluster", section: "4.3.8" }
        }),

        Datatype({
            name: "temperature", type: "int16", description: "Temperature",

            details: "This type represents a temperature on the Celsius scale with a resolution of 0.01°C." +
                "\n" +
                "  • value = (temperature in °C) x 100" +
                "\n" +
                "  • -4°C ⇒ -400" +
                "\n" +
                "  • 123.45°C ⇒ 12345" +
                "\n" +
                "The range is constrained by absolute zero: -273.15°C to 327.67°C.",

            xref: { document: "cluster", section: "4.3.9.1" }
        }),

        Datatype({
            name: "temp-diff", type: "int16", description: "Temperature Difference",

            details: "This type represents a temperature difference with a resolution of 0.01°C." +
                "\n" +
                "  • value = (temperature in °C) x 100" +
                "\n" +
                "  • -4°C ⇒ -400" +
                "\n" +
                "  • 123.45°C ⇒ 12345" +
                "\n" +
                "The full (non-null) range of -327.67°C to 327.67°C may be used.",

            xref: { document: "cluster", section: "4.3.9.2" }
        }),

        Datatype({
            name: "temp-s8", type: "int8", description: "Signed Temperature (°C x 10)",

            details: "This type represents a temperature from -12.7°C to 12.7°C with a resolution of 0.1°C." +
                "\n" +
                "  • value = (temperature in °C) x 10" +
                "\n" +
                "  • -4°C ⇒ -40" +
                "\n" +
                "  • 12.3°C ⇒ 123" +
                "\n" +
                "This type is employed where compactness of representation is important and where the resolution and " +
                "range are still satisfactory.",

            xref: { document: "cluster", section: "4.3.9.3" }
        }),

        Datatype({
            name: "temp-u8", type: "uint8", description: "Unsigned Temperature (°C x 10)",

            details: "This type represents a temperature from 0°C to 25.5°C with a resolution of 0.1°C." +
                "\n" +
                "  • value = (temperature in °C) x 10" +
                "\n" +
                "  • 4°C ⇒ 40" +
                "\n" +
                "  • 12.3°C ⇒ 123" +
                "\n" +
                "This type is employed where compactness of representation is important and where the resolution and " +
                "range are still satisfactory.",

            xref: { document: "cluster", section: "4.3.9.4" }
        }),

        Datatype({
            name: "ThermostatScheduleTransition", type: "struct", conformance: "M",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.9.5" },

            children: [
                Field({
                    name: "TransitionTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
                    constraint: "0 to 1439",
                    details: "This field represents the start time of the schedule transition during the associated day. The time " +
                        "will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For " +
                        "example, 6am will be represented by 360 minutes since midnight and 11:30pm will be represented by " +
                        "1410 minutes since midnight.",
                    xref: { document: "cluster", section: "4.3.9.5.1" }
                }),

                Field({ name: "HeatSetpoint", id: 0x1, type: "temperature", access: "RW", conformance: "M", quality: "X" }),
                Field({ name: "CoolSetpoint", id: 0x2, type: "temperature", access: "RW", conformance: "M", quality: "X" })
            ]
        }),

        Datatype({
            name: "SetpointAdjustMode", type: "enum8", conformance: "M",
            children: [
                Field({ name: "Heat", id: 0x0, conformance: "M" }),
                Field({ name: "Cool", id: 0x1, conformance: "M" }),
                Field({ name: "Both", id: 0x2, conformance: "M" })
            ]
        }),

        Datatype({
            name: "DayOfWeek", type: "map8", conformance: "M",

            children: [
                Field({ name: "Sunday", constraint: "0" }),
                Field({ name: "Monday", constraint: "1" }),
                Field({ name: "Tuesday", constraint: "2" }),
                Field({ name: "Wednesday", constraint: "3" }),
                Field({ name: "Thursday", constraint: "4" }),
                Field({ name: "Friday", constraint: "5" }),
                Field({ name: "Saturday", constraint: "6" }),
                Field({ name: "Away", constraint: "7" })
            ]
        }),

        Datatype({
            name: "ModeForSequence", type: "map8", conformance: "M",
            children: [
                Field({ name: "HeatSetpointPresent", constraint: "0" }),
                Field({ name: "CoolSetpointPresent", constraint: "1" })
            ]
        })
    ]
}));
