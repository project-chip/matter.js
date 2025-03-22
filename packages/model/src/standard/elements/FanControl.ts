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

export const FanControl = Cluster(
    {
        name: "FanControl", id: 0x202, classification: "application", pics: "FAN",
        details: "This cluster specifies an interface to control the speed of a fan.",
        xref: { document: "cluster", section: "4.4" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "4.4.4" } },

        Field({
            name: "SPD", constraint: "0", description: "MultiSpeed",

            details: "Legacy Fan Control cluster revision 0-1 defined 3 speeds (low, medium and high) plus automatic speed " +
                "control but left it up to the implementer to decide what was supported. Therefore, it is assumed " +
                "that legacy client implementations are capable of determining, from the server, the number of speeds " +
                "supported between 1, 2, or 3, and whether automatic speed control is supported." +
                "\n" +
                "The MultiSpeed feature includes new attributes that support a running fan speed value from 0 to " +
                "SpeedMax, which has a maximum of 100." +
                "\n" +
                "See Section 4.4.6.6.1 for more details.",

            xref: { document: "cluster", section: "4.4.4.1" }
        }),

        Field({ name: "AUT", constraint: "1", description: "Auto", details: "Automatic mode supported for fan speed" }),
        Field({ name: "RCK", constraint: "2", description: "Rocking", details: "Rocking movement supported" }),
        Field({ name: "WND", constraint: "3", description: "Wind", details: "Wind emulation supported" }),
        Field({ name: "STEP", constraint: "4", description: "Step", details: "Step command supported" }),
        Field({
            name: "DIR", constraint: "5", description: "AirflowDirection",
            details: "Airflow Direction attribute is supported"
        })
    ),

    Attribute({
        name: "FanMode", id: 0x0, type: "FanModeEnum", access: "RW VO", conformance: "M", default: 0,
        quality: "N",

        details: "Indicates the current speed mode of the fan. This attribute may be written by the client to request " +
            "a different fan mode. A server shall return INVALID_IN_STATE to indicate that the fan is not in a " +
            "state where the FanMode can be changed to the requested value. A server may have FanMode values that " +
            "it can never be set to. For example, where this cluster appears on the same or another endpoint as " +
            "other clusters with a system dependency, for example the Thermostat cluster, attempting to set the " +
            "FanMode attribute of this cluster to Off may not be allowed by the system." +
            "\n" +
            "This attribute shall be set to one of the values in FanModeEnum." +
            "\n" +
            "When the FanMode attribute is successfully written to, the PercentSetting and SpeedSetting (if " +
            "present) attributes shall be set to appropriate values, as defined by the Section 4.4.6.3.1 and " +
            "Section 4.4.6.6.1 respectively, unless otherwise specified below." +
            "\n" +
            "When the FanMode attribute is set to any given mode, the PercentCurrent and SpeedCurrent (if " +
            "present) shall indicate the actual currently operating fan speed, unless otherwise specified below.",

        xref: { document: "cluster", section: "4.4.6.1" }
    }),

    Attribute({
        name: "FanModeSequence", id: 0x1, type: "FanModeSequenceEnum", access: "R V", conformance: "M",
        quality: "F",
        details: "This attribute indicates the fan speed ranges that shall be supported.",
        xref: { document: "cluster", section: "4.4.6.2" }
    }),

    Attribute({
        name: "PercentSetting", id: 0x2, type: "percent", access: "RW VO", conformance: "M",
        constraint: "max 100", default: 0, quality: "X",

        details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
            "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
            "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
            "PercentSetting can be changed to the requested value." +
            "\n" +
            "If this is successfully written to 0, the server shall set the FanMode attribute value to Off.",

        xref: { document: "cluster", section: "4.4.6.3" }
    }),

    Attribute({
        name: "PercentCurrent", id: 0x3, type: "percent", access: "R V", conformance: "M",
        constraint: "max 100",
        details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
            "may be a temporary mismatch between the value of this attribute and the value of the PercentSetting " +
            "attribute due to other system requirements that would not allow the fan to operate at the requested " +
            "setting. See Section 4.4.6.3.1 for more details.",
        xref: { document: "cluster", section: "4.4.6.4" }
    }),

    Attribute({
        name: "SpeedMax", id: 0x4, type: "uint8", access: "R V", conformance: "SPD", constraint: "1 to 100",
        quality: "F",
        details: "Indicates that the fan has one speed (value of 1) or the maximum speed, if the fan is capable of " +
            "multiple speeds.",
        xref: { document: "cluster", section: "4.4.6.5" }
    }),

    Attribute({
        name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW VO", conformance: "SPD",
        constraint: "max speedMax", default: 0, quality: "X",

        details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
            "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
            "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
            "SpeedSetting can be changed to the requested value." +
            "\n" +
            "If this is successfully written to 0, the server shall set the FanMode attribute value to Off. " +
            "Please see the Section 4.4.6.6.1 for details on other values.",

        xref: { document: "cluster", section: "4.4.6.6" }
    }),

    Attribute({
        name: "SpeedCurrent", id: 0x6, type: "uint8", access: "R V", conformance: "SPD",
        constraint: "max speedMax", quality: "P",
        details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
            "may be a temporary mismatch between the value of this attribute and the value of the SpeedSetting " +
            "attribute due to other system requirements that would not allow the fan to operate at the requested " +
            "setting.",
        xref: { document: "cluster", section: "4.4.6.7" }
    }),

    Attribute({
        name: "RockSupport", id: 0x7, type: "RockBitmap", access: "R V", conformance: "RCK",
        constraint: "desc", default: 0, quality: "F",
        details: "This attribute is a bitmap that indicates what rocking motions the server supports.",
        xref: { document: "cluster", section: "4.4.6.8" }
    }),

    Attribute({
        name: "RockSetting", id: 0x8, type: "RockBitmap", access: "RW VO", conformance: "RCK",
        constraint: "desc", default: 0, quality: "P",

        details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
            "shall only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise " +
            "a status code of CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If a combination of supported bits is set by the client, and the server does not support the " +
            "combination, the lowest supported single bit in the combination shall be set and active, and all " +
            "other bits shall indicate zero." +
            "\n" +
            "For example: If RockUpDown and RockRound are both set, but this combination is not possible, then " +
            "only RockUpDown becomes active.",

        xref: { document: "cluster", section: "4.4.6.9" }
    }),

    Attribute({
        name: "WindSupport", id: 0x9, type: "WindBitmap", access: "R V", conformance: "WND",
        constraint: "desc", default: 0, quality: "F",
        details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
            "mode bit shall be set.",
        xref: { document: "cluster", section: "4.4.6.10" }
    }),

    Attribute({
        name: "WindSetting", id: 0xa, type: "WindBitmap", access: "RW VO", conformance: "WND",
        constraint: "desc", default: 0, quality: "P",

        details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
            "shall only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise " +
            "a status code of CONSTRAINT_ERROR shall be returned." +
            "\n" +
            "If a combination of supported bits is set by the client, and the server does not support the " +
            "combination, the lowest supported single bit in the combination shall be set and active, and all " +
            "other bits shall indicate zero." +
            "\n" +
            "For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then only " +
            "Sleep Wind becomes active.",

        xref: { document: "cluster", section: "4.4.6.11" }
    }),

    Attribute({
        name: "AirflowDirection", id: 0xb, type: "AirflowDirectionEnum", access: "RW VO",
        conformance: "DIR", constraint: "desc", default: 0, quality: "P",
        details: "Indicates the current airflow direction of the fan. This attribute may be written by the client to " +
            "indicate a new airflow direction for the fan. This attribute shall be set to one of the values in " +
            "the AirflowDirectionEnum table.",
        xref: { document: "cluster", section: "4.4.6.12" }
    }),

    Command(
        {
            name: "Step", id: 0x0, access: "O", conformance: "STEP", direction: "request", response: "status",

            details: "This command speeds up or slows down the fan, in steps, without the client having to know the fan " +
                "speed. This command supports, for example, a user operated wall switch, where the user provides the " +
                "feedback or control to stop sending this command when the proper speed is reached. The step speed " +
                "values are implementation specific. How many step speeds are implemented is implementation specific." +
                "\n" +
                "This command supports these fields:",

            xref: { document: "cluster", section: "4.4.7.1" }
        },

        Field({
            name: "Direction", id: 0x0, type: "StepDirectionEnum", conformance: "M", default: 0,
            details: "This field shall indicate whether the fan speed increases or decreases to the next step value.",
            xref: { document: "cluster", section: "4.4.7.1.1" }
        }),
        Field({
            name: "Wrap", id: 0x1, type: "bool", conformance: "O", default: false,
            details: "This field shall indicate if the fan speed wraps between highest and lowest step value.",
            xref: { document: "cluster", section: "4.4.7.1.2" }
        }),
        Field({
            name: "LowestOff", id: 0x2, type: "bool", conformance: "O", default: true,
            details: "This field shall indicate that the fan being off (speed value 0) is included as a step value.",
            xref: { document: "cluster", section: "4.4.7.1.3" }
        })
    ),

    Datatype(
        { name: "RockBitmap", type: "map8", xref: { document: "cluster", section: "4.4.5.1" } },
        Field({ name: "RockLeftRight", constraint: "0", description: "Indicate rock left to right" }),
        Field({ name: "RockUpDown", constraint: "1", description: "Indicate rock up and down" }),
        Field({ name: "RockRound", constraint: "2", description: "Indicate rock around" })
    ),

    Datatype(
        { name: "WindBitmap", type: "map8", xref: { document: "cluster", section: "4.4.5.2" } },
        Field({ name: "SleepWind", constraint: "0", description: "Indicate sleep wind" }),
        Field({ name: "NaturalWind", constraint: "1", description: "Indicate natural wind" })
    ),
    Datatype(
        { name: "StepDirectionEnum", type: "enum8", xref: { document: "cluster", section: "4.4.5.3" } },
        Field({ name: "Increase", id: 0x0, conformance: "M", description: "Step moves in increasing direction" }),
        Field({ name: "Decrease", id: 0x1, conformance: "M", description: "Step moves in decreasing direction" })
    ),
    Datatype(
        { name: "AirflowDirectionEnum", type: "enum8", xref: { document: "cluster", section: "4.4.5.4" } },
        Field({ name: "Forward", id: 0x0, conformance: "M", description: "Airflow is in the forward direction" }),
        Field({ name: "Reverse", id: 0x1, conformance: "M", description: "Airflow is in the reverse direction" })
    ),

    Datatype(
        { name: "FanModeEnum", type: "enum8", xref: { document: "cluster", section: "4.4.5.5" } },
        Field({ name: "Off", id: 0x0, conformance: "M", description: "Fan is off" }),

        Field({
            name: "Low", id: 0x1, conformance: "desc", description: "Fan using low speed",
            details: "If the fan supports 2 or more speeds, the Low value shall be supported." +
                "\n" +
                "The Low value shall be supported if and only if the FanModeSequence attribute value is less than 4.",
            xref: { document: "cluster", section: "4.4.5.5.1" }
        }),

        Field({
            name: "Medium", id: 0x2, conformance: "desc", description: "Fan using medium speed",
            details: "If the fan supports 3 or more speeds, the Medium value shall be supported." +
                "\n" +
                "The Medium value shall be supported if and only if the FanModeSequence attribute value is 0 or 2.",
            xref: { document: "cluster", section: "4.4.5.5.2" }
        }),

        Field({ name: "High", id: 0x3, conformance: "M", description: "Fan using high speed" }),
        Field({ name: "On", id: 0x4, conformance: "D" }),
        Field({ name: "Auto", id: 0x5, conformance: "AUT", description: "Fan is using auto mode" }),
        Field({ name: "Smart", id: 0x6, conformance: "D", description: "Fan is using smart mode" })
    ),

    Datatype(
        { name: "FanModeSequenceEnum", type: "enum8", xref: { document: "cluster", section: "4.4.5.6" } },
        Field({
            name: "OffLowMedHigh", id: 0x0, conformance: "[!AUT].a",
            description: "Fan is capable of off, low, medium and high modes"
        }),
        Field({
            name: "OffLowHigh", id: 0x1, conformance: "[!AUT].a",
            description: "Fan is capable of off, low and high modes"
        }),
        Field({
            name: "OffLowMedHighAuto", id: 0x2, conformance: "[AUT].a",
            description: "Fan is capable of off, low, medium, high and auto modes"
        }),
        Field({
            name: "OffLowHighAuto", id: 0x3, conformance: "[AUT].a",
            description: "Fan is capable of off, low, high and auto modes"
        }),
        Field({
            name: "OffHighAuto", id: 0x4, conformance: "[AUT].a",
            description: "Fan is capable of off, high and auto modes"
        }),
        Field({ name: "OffHigh", id: 0x5, conformance: "[!AUT].a", description: "Fan is capable of off and high modes" })
    )
);

MatterDefinition.children.push(FanControl);
