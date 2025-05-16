/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add(
    {
        tag: "cluster", name: "BallastConfiguration", classification: "application", pics: "BC",
        xref: "cluster§3.3",
        details: "This cluster is used for configuring a lighting ballast.",

        children: [
            {
                tag: "attribute", name: "PhysicalMinLevel", xref: "cluster§3.3.6.1",
                details: "This attribute shall specify the minimum light output the ballast can achieve according to the " +
                    "dimming light curve (see Dimming Curve)."
            },
            {
                tag: "attribute", name: "PhysicalMaxLevel", xref: "cluster§3.3.6.2",
                details: "This attribute shall specify the maximum light output the ballast can achieve according to the " +
                    "dimming light curve (see Dimming Curve)."
            },
            {
                tag: "attribute", name: "BallastStatus", xref: "cluster§3.3.6.3",
                details: "This attribute shall specify the status of various aspects of the ballast or the connected lights, " +
                    "see BallastStatusBitmap."
            },

            {
                tag: "attribute", name: "MinLevel", xref: "cluster§3.3.6.4",

                details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
                    "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and the " +
                    "On/Off Cluster’s OnOff attribute equals to TRUE)." +
                    "\n" +
                    "The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than or " +
                    "equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions are " +
                    "not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall " +
                    "NOT be set."
            },

            {
                tag: "attribute", name: "MaxLevel", xref: "cluster§3.3.6.5",

                details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
                    "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and the " +
                    "On/Off Cluster’s OnOff attribute equals to TRUE)." +
                    "\n" +
                    "The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than or " +
                    "equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions are " +
                    "not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level shall " +
                    "NOT be set."
            },

            { tag: "attribute", name: "PowerOnLevel", xref: "cluster§3.3.6" },
            { tag: "attribute", name: "PowerOnFadeTime", xref: "cluster§3.3.6" },

            {
                tag: "attribute", name: "IntrinsicBallastFactor", xref: "cluster§3.3.6.6",
                details: "This attribute shall specify the ballast factor, as a percentage, of the ballast/lamp combination, " +
                    "prior to any adjustment." +
                    "\n" +
                    "A value of null indicates in invalid value."
            },

            {
                tag: "attribute", name: "BallastFactorAdjustment", xref: "cluster§3.3.6.7",

                details: "This attribute shall specify the multiplication factor, as a percentage, to be applied to the " +
                    "configured light output of the lamps. A typical use for this attribute is to compensate for " +
                    "reduction in efficiency over the lifetime of a lamp." +
                    "\n" +
                    "### The light output is given by" +
                    "\n" +
                    "actual light output = configured light output x BallastFactorAdjustment / 100%" +
                    "\n" +
                    "The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute " +
                    "to a level that cannot be supported, a response shall be returned with status code set to " +
                    "CONSTRAINT_ERROR, and the level shall NOT be changed. The value of null indicates that ballast " +
                    "factor scaling is not in use."
            },

            {
                tag: "attribute", name: "LampQuantity", xref: "cluster§3.3.6.8",
                details: "This attribute shall specify the number of lamps connected to this ballast. (Note 1: this number " +
                    "does not take into account whether lamps are actually in their sockets or not)."
            },
            {
                tag: "attribute", name: "LampType", xref: "cluster§3.3.6.9",
                details: "This attribute shall specify the type of lamps (including their wattage) connected to the ballast."
            },
            {
                tag: "attribute", name: "LampManufacturer", xref: "cluster§3.3.6.10",
                details: "This attribute shall specify the name of the manufacturer of the currently connected lamps."
            },

            {
                tag: "attribute", name: "LampRatedHours", xref: "cluster§3.3.6.11",
                details: "This attribute shall specify the number of hours of use the lamps are rated for by the manufacturer." +
                    "\n" +
                    "A value of null indicates an invalid or unknown time."
            },

            {
                tag: "attribute", name: "LampBurnHours", xref: "cluster§3.3.6.12",

                details: "This attribute shall specify the length of time, in hours, the currently connected lamps have been " +
                    "operated, cumulative since the last re-lamping. Burn hours shall NOT be accumulated if the lamps are " +
                    "off." +
                    "\n" +
                    "This attribute SHOULD be reset to zero (e.g., remotely) when the lamps are changed. If partially " +
                    "used lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps." +
                    "\n" +
                    "A value of null indicates an invalid or unknown time."
            },

            {
                tag: "attribute", name: "LampAlarmMode", xref: "cluster§3.3.6.13",
                details: "This attribute shall specify which attributes may cause an alarm notification to be generated. Ain " +
                    "each bit position means that its associated attribute is able to generate an alarm."
            },

            {
                tag: "attribute", name: "LampBurnHoursTripPoint", xref: "cluster§3.3.6.14",

                details: "This attribute shall specify the number of hours the LampBurnHours attribute may reach before an " +
                    "alarm is generated." +
                    "\n" +
                    "If the Alarms cluster is not present on the same device this attribute is not used and thus may be " +
                    "omitted (see Dependencies)." +
                    "\n" +
                    "The Alarm Code field included in the generated alarm shall be 0x01." +
                    "\n" +
                    "If this attribute has the value of null, then this alarm shall NOT be generated."
            },

            {
                tag: "datatype", name: "BallastStatusBitmap", xref: "cluster§3.3.5.1",

                children: [
                    {
                        tag: "field", name: "BallastNonOperational", description: "Operational state of the ballast.",
                        xref: "cluster§3.3.5.1.1",
                        details: "This bit shall indicate whether the ballast is operational." +
                            "\n" +
                            "  • 0 = The ballast is fully operational" +
                            "\n" +
                            "  • 1 = The ballast is not fully operational"
                    },

                    {
                        tag: "field", name: "LampFailure", description: "Operational state of the lamps.",
                        xref: "cluster§3.3.5.1.2",
                        details: "This bit shall indicate whether all lamps is operational." +
                            "\n" +
                            "  • 0 = All lamps are operational" +
                            "\n" +
                            "  • 1 = One or more lamp is not in its socket or is faulty"
                    }
                ]
            },

            {
                tag: "datatype", name: "LampAlarmModeBitmap", xref: "cluster§3.3.5.2",
                children: [{
                    tag: "field", name: "LampBurnHours", description: "State of LampBurnHours alarm generation",
                    xref: "cluster§3.3.5.2.1",
                    details: "This bit shall indicate that the LampBurnHours attribute may generate an alarm."
                }]
            }
        ]
    }
);
