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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const BooleanStateConfiguration = Cluster(
    {
        name: "BooleanStateConfiguration", id: 0x80, classification: "application", pics: "BOOLCFG",
        details: "This cluster is used to configure a boolean sensor, including optional state change alarm features " +
            "and configuration of the sensitivity level associated with the sensor.",
        xref: { document: "cluster", section: "1.8" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.8.4" } },
        Field({ name: "VIS", conformance: "O", constraint: "0", description: "Visual", details: "Supports visual alarms" }),
        Field({ name: "AUD", conformance: "O", constraint: "1", description: "Audible", details: "Supports audible alarms" }),

        Field({
            name: "SPRS", conformance: "[VIS | AUD]", constraint: "2", description: "AlarmSuppress",

            details: "This feature shall indicate that the device is able to suppress the supported alarm modes, when the " +
                "user acknowledges the alarm. This is intended to stop visual and/or audible alarms, when the user " +
                "has become aware that the sensor is triggered, but it is no longer desired to have the alarm modes " +
                "active on the device, e.g.:" +
                "\n" +
                "  • The triggering cause have been resolved by the user, but the sensor has not yet stopped " +
                "    detecting the triggering cause." +
                "\n" +
                "  • The user is not able to address the triggering cause, but is aware of the alarm and " +
                "    suppress/acknowledge it be addressed at a later point." +
                "\n" +
                "Acknowledge of alarms will for the remainder of this cluster be referred to as suppress." +
                "\n" +
                "A suppressed alarm is still considered active and will remain so unless it is actively disabled or " +
                "the triggering condition is not longer present. The action of suppressing an alarm mode is only " +
                "applicable to and is intended to stop the physical alarming, e.g. emitting a sound or blinking a " +
                "light; it does not impact alarm reporting in AlarmsActive.",

            xref: { document: "cluster", section: "1.8.4.1" }
        }),

        Field({
            name: "SENSLVL", conformance: "O", constraint: "3", description: "SensitivityLevel",
            details: "Supports ability to set sensor sensitivity"
        })
    ),

    Attribute({
        name: "CurrentSensitivityLevel", id: 0x0, type: "uint8", access: "RW VO", conformance: "SENSLVL",
        constraint: "max supportedSensitivityLevels - 1", quality: "N",
        details: "Indicates the currently selected sensitivity level." +
            "\n" +
            "If a write interaction to this attribute contains an unsupported sensitivity value, a " +
            "CONSTRAINT_ERROR status shall be returned.",
        xref: { document: "cluster", section: "1.8.6.1" }
    }),

    Attribute({
        name: "SupportedSensitivityLevels", id: 0x1, type: "uint8", access: "R V", conformance: "SENSLVL",
        constraint: "2 to 10", quality: "F",

        details: "Indicates the number of supported sensitivity levels by the device." +
            "\n" +
            "These supported sensitivity levels shall be ordered by sensitivity, where a value of 0 shall be " +
            "considered the lowest sensitivity level (least sensitive) and the highest supported value shall be " +
            "considered the highest sensitivity level." +
            "\n" +
            "The number of supported sensitivity levels SHOULD represent unique sensitivity levels supported by " +
            "the device.",

        xref: { document: "cluster", section: "1.8.6.2" }
    }),

    Attribute({
        name: "DefaultSensitivityLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[SENSLVL]",
        constraint: "max supportedSensitivityLevels - 1", quality: "F",
        details: "Indicates the default sensitivity level selected by the manufacturer.",
        xref: { document: "cluster", section: "1.8.6.3" }
    }),

    Attribute(
        {
            name: "AlarmsActive", id: 0x3, type: "AlarmModeBitmap", access: "R V", conformance: "VIS | AUD",
            default: 0,

            details: "Indicates which specific alarm modes on the server are currently active. When the sensor is no " +
                "longer triggered, this attribute shall be set to the inactive state, by setting the bit to 0, for " +
                "all supported alarm modes." +
                "\n" +
                "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit shall " +
                "indicate whether the alarm mode inactive or not:" +
                "\n" +
                "  • 0 = Inactive" +
                "\n" +
                "  • 1 = Active",

            xref: { document: "cluster", section: "1.8.6.4" }
        }
    ),

    Attribute(
        {
            name: "AlarmsSuppressed", id: 0x4, type: "AlarmModeBitmap", access: "R V", conformance: "SPRS",
            default: 0,

            details: "Indicates which specific alarm modes on the server are currently suppressed. When the sensor is no " +
                "longer triggered, this attribute shall be set to the unsuppressed state, by setting the bit to 0, " +
                "for all supported alarm modes." +
                "\n" +
                "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit shall " +
                "indicate whether the alarm mode is suppressed or not:" +
                "\n" +
                "  • 0 = Not suppressed" +
                "\n" +
                "  • 1 = Suppressed",

            xref: { document: "cluster", section: "1.8.6.5" }
        }
    ),

    Attribute(
        {
            name: "AlarmsEnabled", id: 0x5, type: "AlarmModeBitmap", access: "R V", conformance: "[VIS | AUD]",
            quality: "N",

            details: "Indicates the alarm modes that will be emitted if the sensor is triggered. If an alarm mode is not " +
                "supported, the bit indicating this alarm mode shall always be 0." +
                "\n" +
                "A bit shall indicate whether the alarm mode is enabled or disabled:" +
                "\n" +
                "  • 0 = Disabled" +
                "\n" +
                "  • 1 = Enabled",

            xref: { document: "cluster", section: "1.8.6.6" }
        }
    ),

    Attribute(
        {
            name: "AlarmsSupported", id: 0x6, type: "AlarmModeBitmap", access: "R V", conformance: "VIS | AUD",
            default: 0, quality: "F",

            details: "Indicates the alarms supported by the sensor. A bit shall indicate whether the alarm mode is " +
                "supported:" +
                "\n" +
                "  • 0 = Not supported" +
                "\n" +
                "  • 1 = Supported",

            xref: { document: "cluster", section: "1.8.6.7" }
        }
    ),

    Attribute({
        name: "SensorFault", id: 0x7, type: "SensorFaultBitmap", access: "R V", conformance: "O",
        default: 0,
        details: "Indicates any faults registered by the device.",
        xref: { document: "cluster", section: "1.8.6.8" }
    }),

    Event(
        {
            name: "AlarmsStateChanged", id: 0x0, access: "V", conformance: "VIS | AUD", priority: "info",

            details: "This event shall be generated after any bits in the AlarmsActive and/or AlarmsSuppressed attributes " +
                "change. This may occur in situations such as when internal processing by the server determines that " +
                "an alarm mode becomes active or inactive, or when the SuppressAlarm or EnableDisableAlarm commands " +
                "are processed in a way that some alarm modes becomes suppressed, active or inactive." +
                "\n" +
                "If several alarm modes change state at the same time, a single event combining multiple changes may " +
                "be emitted instead of multiple events each representing a single change.",

            xref: { document: "cluster", section: "1.8.8.1" }
        },

        Field({
            name: "AlarmsActive", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
            details: "This field shall indicate the state of active alarm modes, as indicated by the AlarmsActive " +
                "attribute, at the time the event was generated.",
            xref: { document: "cluster", section: "1.8.8.1.1" }
        }),

        Field({
            name: "AlarmsSuppressed", id: 0x1, type: "AlarmModeBitmap", conformance: "SPRS",
            details: "This field shall indicate the state of suppressed alarm modes, as indicated by the AlarmsSuppressed " +
                "attribute, at the time the event was generated.",
            xref: { document: "cluster", section: "1.8.8.1.2" }
        })
    ),

    Event(
        {
            name: "SensorFault", id: 0x1, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when the device registers or clears a fault.",
            xref: { document: "cluster", section: "1.8.8.2" }
        },

        Field({
            name: "SensorFault", id: 0x0, type: "SensorFaultBitmap", conformance: "M",
            details: "This field shall indicate the value of the SensorFault attribute, at the time this event is " +
                "generated.",
            xref: { document: "cluster", section: "1.8.8.2.1" }
        })
    ),

    Command(
        {
            name: "SuppressAlarm", id: 0x0, access: "O", conformance: "SPRS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.8.7.1" }
        },
        Field({
            name: "AlarmsToSuppress", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
            details: "This field shall indicate the alarm modes to suppress.",
            xref: { document: "cluster", section: "1.8.7.1.1" }
        })
    ),

    Command(
        {
            name: "EnableDisableAlarm", id: 0x1, access: "O", conformance: "VIS | AUD", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.8.7.2" }
        },

        Field({
            name: "AlarmsToEnableDisable", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
            details: "This field shall indicate the alarm modes to either enable or disable depending on the bit status, " +
                "as specified for the AlarmsEnabled attribute.",
            xref: { document: "cluster", section: "1.8.7.2.1" }
        })
    ),

    Datatype(
        { name: "AlarmModeBitmap", type: "map8", xref: { document: "cluster", section: "1.8.5.1" } },
        Field({ name: "Visual", constraint: "0", description: "Visual alarming" }),
        Field({ name: "Audible", constraint: "1", description: "Audible alarming" })
    ),
    Datatype(
        { name: "SensorFaultBitmap", type: "map16", xref: { document: "cluster", section: "1.8.5.2" } },
        Field({ name: "GeneralFault", constraint: "0", description: "Unspecified fault detected" })
    )
);

MatterDefinition.children.push(BooleanStateConfiguration);
