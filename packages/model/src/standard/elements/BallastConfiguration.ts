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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const BallastConfiguration = Cluster(
    {
        name: "BallastConfiguration", id: 0x301, classification: "application", pics: "BC",
        details: "This cluster is used for configuring a lighting ballast." +
            "\n" +
            "NOTE Support for Ballast Configuration cluster is provisional.",
        xref: { document: "cluster", section: "3.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute({
        name: "PhysicalMinLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
        constraint: "1 to 254", default: 1,
        details: "This attribute shall specify the minimum light output the ballast can achieve according to the " +
            "dimming light curve (see Dimming Curve).",
        xref: { document: "cluster", section: "3.3.6.1" }
    }),

    Attribute({
        name: "PhysicalMaxLevel", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        constraint: "1 to 254", default: 254,
        details: "This attribute shall specify the maximum light output the ballast can achieve according to the " +
            "dimming light curve (see Dimming Curve).",
        xref: { document: "cluster", section: "3.3.6.2" }
    }),

    Attribute({
        name: "BallastStatus", id: 0x2, type: "BallastStatusBitmap", access: "R V", conformance: "O",
        default: 0,
        details: "This attribute shall specify the status of various aspects of the ballast or the connected lights, " +
            "see BallastStatusBitmap.",
        xref: { document: "cluster", section: "3.3.6.3" }
    }),

    Attribute({
        name: "MinLevel", id: 0x10, type: "uint8", access: "RW VM", conformance: "M",
        constraint: "physicalMinLevel to maxLevel",
        default: { type: "reference", name: "PhysicalMinLevel" },

        details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
            "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and the " +
            "On/Off Cluster’s OnOff attribute equals to TRUE)." +
            "\n" +
            "The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than or " +
            "equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions are " +
            "not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall " +
            "NOT be set.",

        xref: { document: "cluster", section: "3.3.6.4" }
    }),

    Attribute({
        name: "MaxLevel", id: 0x11, type: "uint8", access: "RW VM", conformance: "M",
        constraint: "minLevel to physicalMaxLevel",
        default: { type: "reference", name: "PhysicalMaxLevel" },

        details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
            "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and the " +
            "On/Off Cluster’s OnOff attribute equals to TRUE)." +
            "\n" +
            "The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than" +
            "\n" +
            "or equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions " +
            "are not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level " +
            "shall NOT be set.",

        xref: { document: "cluster", section: "3.3.6.5" }
    }),

    Attribute({ name: "PowerOnLevel", id: 0x12, conformance: "D", xref: { document: "cluster", section: "3.3.6" } }),
    Attribute({ name: "PowerOnFadeTime", id: 0x13, conformance: "D", xref: { document: "cluster", section: "3.3.6" } }),

    Attribute({
        name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW VM", conformance: "O",
        quality: "X",
        details: "This attribute shall specify the ballast factor, as a percentage, of the ballast/lamp combination, " +
            "prior to any adjustment." +
            "\n" +
            "A value of null indicates in invalid value.",
        xref: { document: "cluster", section: "3.3.6.6" }
    }),

    Attribute(
        {
            name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW VM", conformance: "O",
            constraint: "100 to ms", default: null, quality: "X",

            details: "This attribute shall specify the multiplication factor, as a percentage, to be applied to the " +
                "configured light output of the lamps. A typical use for this attribute is to compensate for " +
                "reduction in efficiency over the lifetime of a lamp." +
                "\n" +
                "The light output is given by" +
                "\n" +
                "actual light output = configured light output x BallastFactorAdjustment / 100%" +
                "\n" +
                "The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute " +
                "to a level that cannot be supported, a response shall be returned with status code set to " +
                "CONSTRAINT_ERROR, and the level shall NOT be changed. The value of null indicates that ballast " +
                "factor scaling is not in use.",

            xref: { document: "cluster", section: "3.3.6.7" }
        }
    ),

    Attribute({
        name: "LampQuantity", id: 0x20, type: "uint8", access: "R V", conformance: "M",
        details: "This attribute shall specify the number of lamps connected to this ballast. (Note 1: this number " +
            "does not take into account whether lamps are actually in their sockets or not).",
        xref: { document: "cluster", section: "3.3.6.8" }
    }),

    Attribute({
        name: "LampType", id: 0x30, type: "string", access: "RW VM", conformance: "O", constraint: "max 16",
        default: "",
        details: "This attribute shall specify the type of lamps (including their wattage) connected to the ballast.",
        xref: { document: "cluster", section: "3.3.6.9" }
    }),

    Attribute({
        name: "LampManufacturer", id: 0x31, type: "string", access: "RW VM", conformance: "O",
        constraint: "max 16", default: "",
        details: "This attribute shall specify the name of the manufacturer of the currently connected lamps.",
        xref: { document: "cluster", section: "3.3.6.10" }
    }),

    Attribute({
        name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW VM", conformance: "O", default: null,
        quality: "X",
        details: "This attribute shall specify the number of hours of use the lamps are rated for by the manufacturer." +
            "\n" +
            "A value of null indicates an invalid or unknown time.",
        xref: { document: "cluster", section: "3.3.6.11" }
    }),

    Attribute({
        name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW VM", conformance: "O", default: 0,
        quality: "X",

        details: "This attribute shall specify the length of time, in hours, the currently connected lamps have been " +
            "operated, cumulative since the last re-lamping. Burn hours shall NOT be accumulated if the lamps are " +
            "off." +
            "\n" +
            "This attribute SHOULD be reset to zero (e.g., remotely) when the lamps are changed. If partially " +
            "used lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps." +
            "\n" +
            "A value of null indicates an invalid or unknown time.",

        xref: { document: "cluster", section: "3.3.6.12" }
    }),

    Attribute({
        name: "LampAlarmMode", id: 0x34, type: "LampAlarmModeBitmap", access: "RW VM", conformance: "O",
        default: 0,
        details: "This attribute shall specify which attributes may cause an alarm notification to be generated. Ain " +
            "each bit position means that its associated attribute is able to generate an alarm." +
            "\n" +
            "NOTE All alarms are also logged in the alarm table – see Alarms cluster.",
        xref: { document: "cluster", section: "3.3.6.13" }
    }),

    Attribute({
        name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW VM", conformance: "O",
        default: null, quality: "X",

        details: "This attribute shall specify the number of hours the LampBurnHours attribute may reach before an " +
            "alarm is generated." +
            "\n" +
            "If the Alarms cluster is not present on the same device this attribute is not used and thus may be " +
            "omitted (see Dependencies)." +
            "\n" +
            "The Alarm Code field included in the generated alarm shall be 0x01." +
            "\n" +
            "If this attribute has the value of null, then this alarm shall NOT be generated.",

        xref: { document: "cluster", section: "3.3.6.14" }
    }),

    Datatype(
        { name: "BallastStatusBitmap", type: "map8", xref: { document: "cluster", section: "3.3.5.1" } },

        Field(
            {
                name: "BallastNonOperational", constraint: "0", description: "Operational state of the ballast.",
                details: "This bit shall indicate whether the ballast is operational." +
                    "\n" +
                    "  • 0 = The ballast is fully operational" +
                    "\n" +
                    "  • 1 = The ballast is not fully operational",
                xref: { document: "cluster", section: "3.3.5.1.1" }
            }
        ),

        Field(
            {
                name: "LampFailure", constraint: "1", description: "Operational state of the lamps.",
                details: "This bit shall indicate whether all lamps is operational." +
                    "\n" +
                    "  • 0 = All lamps are operational" +
                    "\n" +
                    "  • 1 = One or more lamp is not in its socket or is faulty",
                xref: { document: "cluster", section: "3.3.5.1.2" }
            }
        )
    ),

    Datatype(
        { name: "LampAlarmModeBitmap", type: "map8", xref: { document: "cluster", section: "3.3.5.2" } },
        Field({
            name: "LampBurnHours", constraint: "0", description: "State of LampBurnHours alarm generation",
            details: "This bit shall indicate that the LampBurnHours attribute may generate an alarm.",
            xref: { document: "cluster", section: "3.3.5.2.1" }
        })
    )
);

MatterDefinition.children.push(BallastConfiguration);
