/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "FanControl", classification: "application", pics: "FAN", xref: "cluster§4.4",
    details: "This cluster specifies an interface to control the speed of a fan.",

    children: [
        {
            tag: "attribute", name: "FeatureMap", xref: "cluster§4.4.4",

            children: [
                {
                    tag: "field", name: "SPD", xref: "cluster§4.4.4.1",

                    details: "Legacy Fan Control cluster revision 0-1 defined 3 speeds (low, medium and high) plus automatic speed " +
                        "control but left it up to the implementer to decide what was supported. Therefore, it is assumed " +
                        "that legacy client implementations are capable of determining, from the server, the number of speeds " +
                        "supported between 1, 2, or 3, and whether automatic speed control is supported." +
                        "\n" +
                        "The MultiSpeed feature includes new attributes that support a running fan speed value from 0 to " +
                        "SpeedMax, which has a maximum of 100." +
                        "\n" +
                        "See Section 4.4.6.6.1 for more details."
                },

                { tag: "field", name: "AUT", details: "Automatic mode supported for fan speed" },
                { tag: "field", name: "RCK", details: "Rocking movement supported" },
                { tag: "field", name: "WND", details: "Wind emulation supported" },
                { tag: "field", name: "STEP", details: "Step command supported" },
                { tag: "field", name: "DIR", details: "Airflow Direction attribute is supported" }
            ]
        },

        {
            tag: "attribute", name: "FanMode", xref: "cluster§4.4.6.1",

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
                "present) shall indicate the actual currently operating fan speed, unless otherwise specified below."
        },

        {
            tag: "attribute", name: "FanModeSequence", xref: "cluster§4.4.6.2",
            details: "This attribute indicates the fan speed ranges that shall be supported."
        },

        {
            tag: "attribute", name: "PercentSetting", xref: "cluster§4.4.6.3",

            details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
                "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
                "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
                "PercentSetting can be changed to the requested value." +
                "\n" +
                "If this is successfully written to 0, the server shall set the FanMode attribute value to Off."
        },

        {
            tag: "attribute", name: "PercentCurrent", xref: "cluster§4.4.6.4",
            details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
                "may be a temporary mismatch between the value of this attribute and the value of the PercentSetting " +
                "attribute due to other system requirements that would not allow the fan to operate at the requested " +
                "setting. See Section 4.4.6.3.1 for more details."
        },

        {
            tag: "attribute", name: "SpeedMax", xref: "cluster§4.4.6.5",
            details: "Indicates that the fan has one speed (value of 1) or the maximum speed, if the fan is capable of " +
                "multiple speeds."
        },

        {
            tag: "attribute", name: "SpeedSetting", xref: "cluster§4.4.6.6",

            details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
                "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
                "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
                "SpeedSetting can be changed to the requested value." +
                "\n" +
                "If this is successfully written to 0, the server shall set the FanMode attribute value to Off. " +
                "Please see the Section 4.4.6.6.1 for details on other values."
        },

        {
            tag: "attribute", name: "SpeedCurrent", xref: "cluster§4.4.6.7",
            details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
                "may be a temporary mismatch between the value of this attribute and the value of the SpeedSetting " +
                "attribute due to other system requirements that would not allow the fan to operate at the requested " +
                "setting."
        },

        {
            tag: "attribute", name: "RockSupport", xref: "cluster§4.4.6.8",
            details: "This attribute is a bitmap that indicates what rocking motions the server supports."
        },

        {
            tag: "attribute", name: "RockSetting", xref: "cluster§4.4.6.9",

            details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise " +
                "a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If RockUpDown and RockRound are both set, but this combination is not possible, then " +
                "only RockUpDown becomes active."
        },

        {
            tag: "attribute", name: "WindSupport", xref: "cluster§4.4.6.10",
            details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                "mode bit shall be set."
        },

        {
            tag: "attribute", name: "WindSetting", xref: "cluster§4.4.6.11",

            details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise " +
                "a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then only " +
                "Sleep Wind becomes active."
        },

        {
            tag: "attribute", name: "AirflowDirection", xref: "cluster§4.4.6.12",
            details: "Indicates the current airflow direction of the fan. This attribute may be written by the client to " +
                "indicate a new airflow direction for the fan. This attribute shall be set to one of the values in " +
                "the AirflowDirectionEnum table."
        },

        {
            tag: "command", name: "Step", xref: "cluster§4.4.7.1",

            details: "This command speeds up or slows down the fan, in steps, without the client having to know the fan " +
                "speed. This command supports, for example, a user operated wall switch, where the user provides the " +
                "feedback or control to stop sending this command when the proper speed is reached. The step speed " +
                "values are implementation specific. How many step speeds are implemented is implementation specific." +
                "\n" +
                "This command supports these fields:",

            children: [
                {
                    tag: "field", name: "Direction", xref: "cluster§4.4.7.1.1",
                    details: "This field shall indicate whether the fan speed increases or decreases to the next step value."
                },
                {
                    tag: "field", name: "Wrap", xref: "cluster§4.4.7.1.2",
                    details: "This field shall indicate if the fan speed wraps between highest and lowest step value."
                },
                {
                    tag: "field", name: "LowestOff", xref: "cluster§4.4.7.1.3",
                    details: "This field shall indicate that the fan being off (speed value 0) is included as a step value."
                }
            ]
        },

        {
            tag: "datatype", name: "RockBitmap", xref: "cluster§4.4.5.1",
            children: [
                { tag: "field", name: "RockLeftRight", description: "Indicate rock left to right" },
                { tag: "field", name: "RockUpDown", description: "Indicate rock up and down" },
                { tag: "field", name: "RockRound", description: "Indicate rock around" }
            ]
        },

        {
            tag: "datatype", name: "WindBitmap", xref: "cluster§4.4.5.2",
            children: [
                { tag: "field", name: "SleepWind", description: "Indicate sleep wind" },
                { tag: "field", name: "NaturalWind", description: "Indicate natural wind" }
            ]
        },

        {
            tag: "datatype", name: "StepDirectionEnum", xref: "cluster§4.4.5.3",
            children: [
                { tag: "field", name: "Increase", description: "Step moves in increasing direction" },
                { tag: "field", name: "Decrease", description: "Step moves in decreasing direction" }
            ]
        },

        {
            tag: "datatype", name: "AirflowDirectionEnum", xref: "cluster§4.4.5.4",
            children: [
                { tag: "field", name: "Forward", description: "Airflow is in the forward direction" },
                { tag: "field", name: "Reverse", description: "Airflow is in the reverse direction" }
            ]
        },

        {
            tag: "datatype", name: "FanModeEnum", xref: "cluster§4.4.5.5",

            children: [
                { tag: "field", name: "Off", description: "Fan is off" },

                {
                    tag: "field", name: "Low", description: "Fan using low speed", xref: "cluster§4.4.5.5.1",
                    details: "If the fan supports 2 or more speeds, the Low value shall be supported." +
                        "\n" +
                        "The Low value shall be supported if and only if the FanModeSequence attribute value is less than 4."
                },

                {
                    tag: "field", name: "Medium", description: "Fan using medium speed", xref: "cluster§4.4.5.5.2",
                    details: "If the fan supports 3 or more speeds, the Medium value shall be supported." +
                        "\n" +
                        "The Medium value shall be supported if and only if the FanModeSequence attribute value is 0 or 2."
                },

                { tag: "field", name: "High", description: "Fan using high speed" },
                { tag: "field", name: "Auto", description: "Fan is using auto mode" },
                { tag: "field", name: "Smart", description: "Fan is using smart mode" }
            ]
        },

        {
            tag: "datatype", name: "FanModeSequenceEnum", xref: "cluster§4.4.5.6",

            children: [
                {
                    tag: "field", name: "OffLowMedHigh",
                    description: "Fan is capable of off, low, medium and high modes"
                },
                { tag: "field", name: "OffLowHigh", description: "Fan is capable of off, low and high modes" },
                {
                    tag: "field", name: "OffLowMedHighAuto",
                    description: "Fan is capable of off, low, medium, high and auto modes"
                },
                {
                    tag: "field", name: "OffLowHighAuto",
                    description: "Fan is capable of off, low, high and auto modes"
                },
                { tag: "field", name: "OffHighAuto", description: "Fan is capable of off, high and auto modes" },
                { tag: "field", name: "OffHigh", description: "Fan is capable of off and high modes" }
            ]
        }
    ]
});
