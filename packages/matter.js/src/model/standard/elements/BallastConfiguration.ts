/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BallastConfiguration", id: 0x301, classification: "application",
    description: "Ballast Configuration",
    details: "Attributes and commands for configuring a lighting ballast.",
    xref: { document: "cluster", section: "3.3" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 },

        {
            tag: "attribute", name: "PhysicalMinLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
            constraint: "1 to 254", default: 1,
            details: "The PhysicalMinLevel attribute specifies the minimum light output the ballast can achieve according " +
                "to the dimming light curve (see The Dimming Light Curve).",
            xref: { document: "cluster", section: "3.3.6.1" }
        },

        {
            tag: "attribute", name: "PhysicalMaxLevel", id: 0x1, type: "uint8", access: "R V", conformance: "M",
            constraint: "1 to 254", default: 254,
            details: "The PhysicalMaxLevel attribute specifies the maximum light output the ballast can achieve according " +
                "to the dimming light curve (see The Dimming Light Curve).",
            xref: { document: "cluster", section: "3.3.6.2" }
        },

        {
            tag: "attribute", name: "BallastStatus", id: 0x2, type: "map8", access: "R V", conformance: "O",
            default: 0,
            details: "The BallastStatus attribute specifies the activity status of the ballast functions. The usage of " +
                "the bits is specified in Bit Usage of the BallastStatus Attribute. Where a function is active, the " +
                "corresponding bit shall be set to 1. Where a function is not active, the corresponding bit shall be " +
                "set to 0.",
            xref: { document: "cluster", section: "3.3.6.3" },
            children: [
                { tag: "datatype", name: "BallastNonOperational", constraint: "0" },
                { tag: "datatype", name: "LampFailure", constraint: "1" }
            ]
        },

        {
            tag: "attribute", name: "MinLevel", id: 0x10, type: "uint8", access: "RW VM", conformance: "M",
            constraint: "1 to 254", default: { type: "reference", name: "PhysicalMinLevel" },

            details: "The MinLevel attribute specifies the light output of the ballast according to the dimming light " +
                "curve (see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals " +
                "to 1 (and the On/Off Cluster’s OnOff attribute equals to TRUE)." +
                "\n" +
                "The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than " +
                "or equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions " +
                "are not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level " +
                "shall not be set.",

            xref: { document: "cluster", section: "3.3.7.1" }
        },

        {
            tag: "attribute", name: "MaxLevel", id: 0x11, type: "uint8", access: "RW VM", conformance: "M",
            constraint: "1 to 254", default: { type: "reference", name: "PhysicalMaxLevel" },

            details: "The MaxLevel attribute specifies the light output of the ballast according to the dimming light " +
                "curve (see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals " +
                "to 254 (and the On/Off Cluster’s OnOff attribute equals to TRUE)." +
                "\n" +
                "The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than " +
                "or equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions " +
                "are not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level " +
                "shall not be set.",

            xref: { document: "cluster", section: "3.3.7.2" }
        },

        {
            tag: "attribute", name: "PowerOnLevel", id: 0x12, type: "uint8", access: "RW VM", conformance: "D",
            constraint: "1 to 254", default: { type: "reference", name: "PhysicalMaxLevel" },
            xref: { document: "cluster", section: "3.3.7" }
        },
        {
            tag: "attribute", name: "PowerOnFadeTime", id: 0x13, type: "uint16", access: "RW VM",
            conformance: "D", default: 0,
            xref: { document: "cluster", section: "3.3.7" }
        },

        {
            tag: "attribute", name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW VM",
            conformance: "O", quality: "X",
            details: "The IntrinsicBallastFactor attribute specifies as a percentage the ballast factor of the " +
                "ballast/lamp combination, prior to any adjustment." +
                "\n" +
                "A value of null indicates in invalid value.",
            xref: { document: "cluster", section: "3.3.7.3" }
        },

        {
            tag: "attribute", name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW VM",
            conformance: "O", constraint: "100 to Ms", default: null, quality: "X",

            details: "The BallastFactorAdjustment attribute specifies the multiplication factor, as a percentage, to be " +
                "applied to the configured light output of the lamps. A typical usage of this mechanism is to " +
                "compensate for reduction in efficiency over the lifetime of a lamp." +
                "\n" +
                "The light output is given by" +
                "\n" +
                "actual light output = configured light output x BallastFactorAdjustment / 100%" +
                "\n" +
                "The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute " +
                "to a level that cannot be supported, a response shall be returned with status code set to " +
                "CONSTRAINT_ERROR, and the level shall not be set. The value of null indicates that ballast factor " +
                "scaling is not in use.",

            xref: { document: "cluster", section: "3.3.7.4" }
        },

        {
            tag: "attribute", name: "LampQuantity", id: 0x20, type: "uint8", access: "R V", conformance: "M",
            details: "The LampQuantity attribute and specifies the number of lamps connected to this ballast." +
                "\n" +
                "this number does not take into account whether lamps are actually in their sockets or not).",
            xref: { document: "cluster", section: "3.3.8.1" }
        },

        {
            tag: "attribute", name: "LampType", id: 0x30, type: "string", access: "RW VM", conformance: "O",
            constraint: "max 16", default: "emptystring",
            details: "The LampType attribute specifies the type of lamps (including their wattage) connected to the " +
                "ballast.",
            xref: { document: "cluster", section: "3.3.9.1" }
        },

        {
            tag: "attribute", name: "LampManufacturer", id: 0x31, type: "string", access: "RW VM",
            conformance: "O", constraint: "max 16", default: "emptystring",
            details: "The LampManufacturer attribute specifies the name of the manufacturer of the currently connected " +
                "lamps.",
            xref: { document: "cluster", section: "3.3.9.2" }
        },

        {
            tag: "attribute", name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW VM",
            conformance: "O", default: null, quality: "X",
            details: "The LampRatedHours attribute specifies the number of hours of use the lamps are rated for by the " +
                "manufacturer." +
                "\n" +
                "A value of null indicates an invalid or unknown time.",
            xref: { document: "cluster", section: "3.3.9.3" }
        },

        {
            tag: "attribute", name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW VM",
            conformance: "O", default: 0, quality: "X",

            details: "The LampBurnHours attribute specifies the length of time, in hours, the currently connected lamps " +
                "have been operated, cumulative since the last re-lamping. Burn hours shall not be accumulated if " +
                "the lamps are off." +
                "\n" +
                "This attribute SHOULD be reset to zero (e.g., remotely) when the lamp(s) are changed. If partially " +
                "used lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps." +
                "\n" +
                "A value of null indicates an invalid or unknown time.",

            xref: { document: "cluster", section: "3.3.9.4" }
        },

        {
            tag: "attribute", name: "LampAlarmMode", id: 0x34, type: "map8", access: "RW VM", conformance: "O",
            default: 0,
            details: "The LampAlarmMode attribute specifies which attributes may cause an alarm notification to be " +
                "generated, as listed in Values of the LampAlarmMode Attribute. A ‘1’ in each bit position causes " +
                "its associated attribute to be able to generate an alarm. (Note: All alarms are also logged in the " +
                "alarm table – see Alarms cluster).",
            xref: { document: "cluster", section: "3.3.9.5" },
            children: [{ tag: "datatype", name: "LampBurnHours", constraint: "0" }]
        },

        {
            tag: "attribute", name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW VM",
            conformance: "O", default: null, quality: "X",

            details: "The LampBurnHoursTripPoint attribute specifies the number of hours the LampBurnHours attribute may " +
                "reach before an alarm is generated." +
                "\n" +
                "If the Alarms cluster is not present on the same device this attribute is not used and thus may be " +
                "omitted (see Dependencies)." +
                "\n" +
                "The Alarm Code field included in the generated alarm shall be 0x01." +
                "\n" +
                "If this attribute takes the value of null, then this alarm shall not be generated.",

            xref: { document: "cluster", section: "3.3.9.6" }
        }
    ]
});
