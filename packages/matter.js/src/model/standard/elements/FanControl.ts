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
    FieldElement as Field
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "FanControl", id: 0x202, classification: "application", description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    xref: { document: "cluster", section: "4.4" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "4.4.5" },

            children: [
                Field({ name: "SPD", constraint: "0", description: "MultiSpeed", details: "1-100 speeds" }),
                Field({
                    name: "AUT", constraint: "1", description: "Auto",
                    details: "Automatic mode supported for fan speed"
                }),
                Field({ name: "RCK", constraint: "2", description: "Rocking", details: "Rocking movement supported" }),
                Field({ name: "WND", constraint: "3", description: "Wind", details: "Wind emulation supported" })
            ]
        }),

        Attribute({
            name: "FanMode", id: 0x0, type: "enum8", access: "RW VO", conformance: "M", constraint: "0 to 6",
            default: 0, quality: "N",
            details: "This attribute shall indicate the current speed mode of the fan. This attribute may be written by " +
                "the client to indicate a new speed mode of the fan. This attribute shall be set to one of the " +
                "values in the table below.",
            xref: { document: "cluster", section: "4.4.6.1" },

            children: [
                Field({
                    name: "Off", id: 0x0, conformance: "M",

                    details: "Setting the attribute value to Off shall set the values of these attributes to 0 (zero):" +
                        "\n" +
                        "  • PercentSetting" +
                        "\n" +
                        "  • PercentCurrent" +
                        "\n" +
                        "  • SpeedSetting (if present)" +
                        "\n" +
                        "  • SpeedCurrent (if present)" +
                        "\n" +
                        "4.4.6.1.2. Low, Medium, High or Unsupported" +
                        "\n" +
                        "If the fan only supports 1 speed then:" +
                        "\n" +
                        "  • only the High attribute value shall be supported" +
                        "\n" +
                        "  • SpeedMax attribute, if present, shall be 1" +
                        "\n" +
                        "If the fan only supports 2 speeds then only the Low and High attribute values shall be supported." +
                        "\n" +
                        "If a client attempts to write an unsupported value (such as On), the FanMode attribute shall be set " +
                        "to High." +
                        "\n" +
                        "If the value is High, Medium, or Low the server shall set these percent speed attributes to a " +
                        "single value in the corresponding range as defined in the percent rules:" +
                        "\n" +
                        "  • PercentSetting" +
                        "\n" +
                        "  • PercentCurrent" +
                        "\n" +
                        "If the value is High, Medium, or Low the server shall set these speed attributes to a single value " +
                        "in the corresponding range as defined in Speed Rules>:" +
                        "\n" +
                        "  • SpeedSetting (if present)" +
                        "\n" +
                        "  • SpeedCurrent (if present)",

                    xref: { document: "cluster", section: "4.4.6.1.1" }
                }),

                Field({ name: "Low", id: 0x1, conformance: "desc" }),
                Field({ name: "Medium", id: 0x2, conformance: "desc" }),
                Field({ name: "High", id: 0x3, conformance: "desc" }),
                Field({ name: "On", id: 0x4, conformance: "D" }),

                Field({
                    name: "Auto", id: 0x5, conformance: "AUT",

                    details: "Setting the attribute value to Auto shall set the values of these attributes to null:" +
                        "\n" +
                        "  • PercentSetting" +
                        "\n" +
                        "  • SpeedSetting (if present)" +
                        "\n" +
                        "These attributes shall indicate the current state of the fan while this attribute value is Auto:" +
                        "\n" +
                        "  • PercentCurrent" +
                        "\n" +
                        "  • SpeedCurrent (if present)",

                    xref: { document: "cluster", section: "4.4.6.1.3" }
                }),

                Field({ name: "Smart", id: 0x6, conformance: "D" })
            ]
        }),

        Attribute({
            name: "FanModeSequence", id: 0x1, type: "enum8", access: "R[W] VO", conformance: "M",
            constraint: "0 to 5", default: 2, quality: "N",
            details: "This indicates the fan speed ranges that shall be supported.",
            xref: { document: "cluster", section: "4.4.6.2" },

            children: [
                Field({ name: "OffLowMedHigh", id: 0x0, conformance: "O.a" }),
                Field({ name: "OffLowHigh", id: 0x1, conformance: "O.a" }),
                Field({ name: "OffLowMedHighAuto", id: 0x2, conformance: "[AUT].a" }),
                Field({ name: "OffLowHighAuto", id: 0x3, conformance: "[AUT].a" }),
                Field({ name: "OffOnAuto", id: 0x4, conformance: "[AUT].a" }),
                Field({ name: "OffOn", id: 0x5, conformance: "O.a" })
            ]
        }),

        Attribute({
            name: "PercentSetting", id: 0x2, type: "uint8", access: "RW VO", conformance: "M",
            constraint: "0 to 100", default: 0, quality: "X",
            details: "This attribute shall indicate the speed setting for the fan. This attribute may be written by the " +
                "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                "value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to " +
                "Off.",
            xref: { document: "cluster", section: "4.4.6.3" }
        }),

        Attribute({
            name: "PercentCurrent", id: 0x3, type: "uint8", access: "R V", conformance: "M",
            constraint: "0 to 100", default: 0,
            details: "This attribute shall indicate the actual currently operating fan speed, or zero to indicate that " +
                "the fan is off. See Section 4.4.6.3.1 for more details.",
            xref: { document: "cluster", section: "4.4.6.4" }
        }),

        Attribute({
            name: "SpeedMax", id: 0x4, type: "uint8", access: "R V", conformance: "SPD", constraint: "1 to 100",
            default: 1, quality: "F",
            details: "This attribute shall indicate that the fan has one speed (value of 1) or the maximum speed, if the " +
                "fan is capable of multiple speeds.",
            xref: { document: "cluster", section: "4.4.6.5" }
        }),

        Attribute({
            name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW VO", conformance: "SPD",
            constraint: "0 to speedMax", default: 0, quality: "X",
            details: "This attribute shall indicate the speed setting for the fan. This attribute may be written by the " +
                "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                "value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to " +
                "Off. Please see the Section 4.4.6.6.1 for details on other values.",
            xref: { document: "cluster", section: "4.4.6.6" }
        }),

        Attribute({
            name: "SpeedCurrent", id: 0x6, type: "uint8", access: "R V", conformance: "SPD",
            constraint: "0 to speedMax", default: 0, quality: "P",
            details: "This attribute shall indicate the actual currently operating fan speed, or zero to indicate that " +
                "the fan is off.",
            xref: { document: "cluster", section: "4.4.6.7" }
        }),

        Attribute({
            name: "RockSupport", id: 0x7, type: "map8", access: "R V", conformance: "RCK", constraint: "desc",
            default: 0, quality: "F",
            details: "This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is " +
                "shown in the table below.",
            xref: { document: "cluster", section: "4.4.6.8" },
            children: [
                Field({ name: "RockLeftRight", constraint: "0" }),
                Field({ name: "RockUpDown", constraint: "1" }),
                Field({ name: "RockRound", constraint: "2" })
            ]
        }),

        Attribute({
            name: "RockSetting", id: 0x8, type: "map8", access: "RW VO", conformance: "RCK", constraint: "desc",
            default: 0, quality: "P",

            details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, " +
                "otherwise a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If RockUpDown and RockRound are both set, but this combination is not possible, then " +
                "only RockUpDown becomes active." +
                "\n" +
                "The bitmap is shown in the table below.",

            xref: { document: "cluster", section: "4.4.6.9" },
            children: [
                Field({ name: "RockLeftRight", constraint: "0" }),
                Field({ name: "RockUpDown", constraint: "1" }),
                Field({ name: "RockRound", constraint: "2" })
            ]
        }),

        Attribute({
            name: "WindSupport", id: 0x9, type: "map8", access: "R V", conformance: "WND", constraint: "desc",
            default: 0, quality: "F",
            details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                "mode bit shall be set. The bitmap is shown in the table below.",
            xref: { document: "cluster", section: "4.4.6.10" },
            children: [
                Field({ name: "SleepWind", constraint: "0" }),
                Field({ name: "NaturalWind", constraint: "1" })
            ]
        }),

        Attribute({
            name: "WindSetting", id: 0xa, type: "map8", access: "RW VO", conformance: "WND", constraint: "desc",
            default: 0, quality: "P",

            details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, " +
                "otherwise a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then " +
                "only Sleep Wind becomes active." +
                "\n" +
                "The bitmap is shown in the table below.",

            xref: { document: "cluster", section: "4.4.6.11" },
            children: [
                Field({ name: "SleepWind", constraint: "0" }),
                Field({ name: "NaturalWind", constraint: "1" })
            ]
        })
    ]
}));
