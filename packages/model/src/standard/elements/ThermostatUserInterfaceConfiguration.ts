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

export const ThermostatUserInterfaceConfiguration = Cluster(
    {
        name: "ThermostatUserInterfaceConfiguration", id: 0x204, classification: "application",
        pics: "TSUIC",
        details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, or " +
            "a thermostat controller device, that supports a keypad and LCD screen.",
        xref: { document: "cluster", section: "4.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute({
        name: "TemperatureDisplayMode", id: 0x0, type: "TemperatureDisplayModeEnum", access: "RW VO",
        conformance: "M", default: 0,
        details: "Indicates the units of the temperature displayed on the thermostat screen.",
        xref: { document: "cluster", section: "4.5.6.1" }
    }),

    Attribute({
        name: "KeypadLockout", id: 0x1, type: "KeypadLockoutEnum", access: "RW VM", conformance: "M",
        default: 0,
        details: "Indicates the level of functionality that is available to the user via the keypad.",
        xref: { document: "cluster", section: "4.5.6.2" }
    }),

    Attribute({
        name: "ScheduleProgrammingVisibility", id: 0x2, type: "ScheduleProgrammingVisibilityEnum",
        access: "RW VM", conformance: "O", default: 0,

        details: "This attribute is used to hide the weekly schedule programming functionality or menu on a thermostat " +
            "from a user to prevent local user programming of the weekly schedule. The schedule programming may " +
            "still be performed via a remote interface, and the thermostat may operate in schedule programming " +
            "mode." +
            "\n" +
            "This attribute is designed to prevent local tampering with or disabling of schedules that may have " +
            "been programmed by users or service providers via a more capable remote interface. The programming " +
            "schedule shall continue to run even though it is not visible to the user locally at the thermostat.",

        xref: { document: "cluster", section: "4.5.6.3" }
    }),

    Datatype(
        { name: "TemperatureDisplayModeEnum", type: "enum8", xref: { document: "cluster", section: "4.5.5.1" } },
        Field({ name: "Celsius", id: 0x0, conformance: "M", description: "Temperature displayed in °C" }),
        Field({ name: "Fahrenheit", id: 0x1, conformance: "M", description: "Temperature displayed in °F" })
    ),

    Datatype(
        {
            name: "KeypadLockoutEnum", type: "enum8",
            details: "The interpretation of the various levels is device-dependent.",
            xref: { document: "cluster", section: "4.5.5.2" }
        },
        Field({ name: "NoLockout", id: 0x0, conformance: "M", description: "All functionality available to the user" }),
        Field({ name: "Lockout1", id: 0x1, conformance: "M", description: "Level 1 reduced functionality" }),
        Field({ name: "Lockout2", id: 0x2, conformance: "M", description: "Level 2 reduced functionality" }),
        Field({ name: "Lockout3", id: 0x3, conformance: "M", description: "Level 3 reduced functionality" }),
        Field({ name: "Lockout4", id: 0x4, conformance: "M", description: "Level 4 reduced functionality" }),
        Field({ name: "Lockout5", id: 0x5, conformance: "M", description: "Least functionality available to the user" })
    ),

    Datatype(
        { name: "ScheduleProgrammingVisibilityEnum", type: "enum8", xref: { document: "cluster", section: "4.5.5.3" } },
        Field({
            name: "ScheduleProgrammingPermitted", id: 0x0, conformance: "M",
            description: "Local schedule programming functionality is enabled at the thermostat"
        }),
        Field({
            name: "ScheduleProgrammingDenied", id: 0x1, conformance: "M",
            description: "Local schedule programming functionality is disabled at the thermostat"
        })
    )
);

MatterDefinition.children.push(ThermostatUserInterfaceConfiguration);
