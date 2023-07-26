/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ThermostatUserInterfaceConfiguration", id: 0x204,
    classification: "application", description: "Thermostat User Interface Configuration",
    details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, " +
        "or a thermostat controller device, that supports a keypad and LCD screen.",
    xref: { document: "cluster", section: "4.5" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 },

        {
            tag: "attribute", name: "TemperatureDisplayMode", id: 0x0, type: "enum8", access: "RW VO",
            conformance: "M", constraint: "desc", default: 0,
            details: "The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the " +
                "thermostat screen." +
                "\n" +
                "Table 92. DisplayMode Attribute Values",
            xref: { document: "cluster", section: "4.5.5.1" },

            children: [
                {
                    tag: "datatype", name: "Celsius", id: 0x0, conformance: "M",
                    description: "Temperature displayed in °C"
                },
                {
                    tag: "datatype", name: "Fahrenheit", id: 0x1, conformance: "M",
                    description: "Temperature displayed in °F"
                }
            ]
        },

        {
            tag: "attribute", name: "KeypadLockout", id: 0x1, type: "enum8", access: "RW VM", conformance: "M",
            constraint: "desc", default: 0,

            details: "The KeypadLockout attribute specifies the level of functionality that is available to the user via " +
                "the keypad." +
                "\n" +
                "Table 93. KeypadLockout Attribute Values" +
                "\n" +
                "The interpretation of the various levels is device-dependent.",

            xref: { document: "cluster", section: "4.5.5.2" },

            children: [
                {
                    tag: "datatype", name: "NoLockout", id: 0x0, conformance: "M",
                    description: "All functionality available to the user"
                },
                {
                    tag: "datatype", name: "Lockout1", id: 0x1, conformance: "M",
                    description: "Level 1 reduced functionality"
                },
                {
                    tag: "datatype", name: "Lockout2", id: 0x2, conformance: "M",
                    description: "Level 2 reduced functionality"
                },
                {
                    tag: "datatype", name: "Lockout3", id: 0x3, conformance: "M",
                    description: "Level 3 reduced functionality"
                },
                {
                    tag: "datatype", name: "Lockout4", id: 0x4, conformance: "M",
                    description: "Level 4 reduced functionality"
                },
                {
                    tag: "datatype", name: "Lockout5", id: 0x5, conformance: "M",
                    description: "Least functionality available to the user"
                }
            ]
        },

        {
            tag: "attribute", name: "ScheduleProgrammingVisibility", id: 0x2, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", default: 0,

            details: "The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming " +
                "functionality or menu on a thermostat from a user to prevent local user programming of the weekly " +
                "schedule. The schedule programming may still be performed via a remote interface, and the " +
                "thermostat may operate in schedule programming mode." +
                "\n" +
                "This attribute is designed to prevent local tampering with or disabling of schedules that may have " +
                "been programmed by users or service providers via a more capable remote interface. The programming " +
                "schedule shall continue to run even though it is not visible to the user locally at the thermostat." +
                "\n" +
                "Table 94. ScheduleProgrammingVisibility Attribute Values",

            xref: { document: "cluster", section: "4.5.5.3" },

            children: [
                {
                    tag: "datatype", name: "ScheduleProgrammingPermitted", id: 0x0, conformance: "M",
                    description: "Local schedule programming functionality is enabled at the thermostat"
                },
                {
                    tag: "datatype", name: "ScheduleProgrammingDenied", id: 0x1, conformance: "M",
                    description: "Local schedule programming functionality is disabled at the thermostat"
                }
            ]
        }
    ]
});
