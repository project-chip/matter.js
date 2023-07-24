/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Switch", id: 0x3b, classification: "application", description: "Switch",

    details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions " +
        "by other devices." +
        "\n" +
        "Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary " +
        "switch (e.g. push button), distinguished with their feature flags." +
        "\n" +
        "Interactions with the switch device are exposed as attributes (for the latching switch) and as " +
        "events (for both types of switches)." +
        "\n" +
        "An interested client may subscribe to these attributes/events and thus be informed of the " +
        "interactions, and can perform actions based on this, for example by sending commands to perform an " +
        "action such as controlling a light or a window shade.",

    xref: { document: "cluster", section: "1.11" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.11.4" },

            children: [
                { tag: "datatype", name: "LS", conformance: "O.a", constraint: "0", description: "LatchingSwitch" },
                { tag: "datatype", name: "MS", conformance: "O.a", constraint: "1", description: "MomentarySwitch" },
                {
                    tag: "datatype", name: "MSR", conformance: "[MS]", constraint: "2",
                    description: "MomentarySwitchRelease"
                },
                {
                    tag: "datatype", name: "MSL", conformance: "[MS & MSR]", constraint: "3",
                    description: "MomentarySwitchLongPress"
                },
                {
                    tag: "datatype", name: "MSM", conformance: "[MS & MSR]", constraint: "4",
                    description: "MomentarySwitchMultiPress"
                }
            ]
        },

        {
            tag: "attribute", name: "NumberOfPositions", id: 0x0, type: "uint8", conformance: "M",
            constraint: "min 2", default: 2, quality: "F",
            details: "This attribute shall indicate the maximum number of positions the switch has. Any kind of switch " +
                "has a minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case " +
                "NumberOfPositions>2.",
            xref: { document: "cluster", section: "1.11.5.1" }
        },

        {
            tag: "attribute", name: "CurrentPosition", id: 0x1, type: "uint8", conformance: "M",
            constraint: "0 to NumberOfPositions1", default: 0, quality: "N",
            details: "This attribute shall indicate the position of the switch. The valid range is zero to " +
                "NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the " +
                "switch: for example the \"open\" state of a rocker switch, or the \"idle\" state of a push button " +
                "switch.",
            xref: { document: "cluster", section: "1.11.5.2" }
        },

        {
            tag: "attribute", name: "MultiPressMax", id: 0x2, type: "uint8", conformance: "MSM",
            constraint: "min 2", default: 2, quality: "F",
            details: "This attribute shall indicate how many consecutive presses can be detected and reported by a " +
                "momentary switch which supports multi-press (e.g. it will report the value 3 if it can detect " +
                "single press, double press and triple press, but not quad press and beyond).",
            xref: { document: "cluster", section: "1.11.5.3" }
        },

        {
            tag: "event", name: "SwitchLatched", id: 0x0, access: "V", conformance: "LS", priority: "info",
            details: "This event shall be generated, when the latching switch is moved to a new position. It may have " +
                "been delayed by debouncing within the switch." +
                "\n" +
                "The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. after the " +
                "move.",
            xref: { document: "cluster", section: "1.11.7.1" },
            children: [{
                tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to NumberOfPositions1"
            }]
        },

        {
            tag: "event", name: "InitialPress", id: 0x1, access: "V", conformance: "MS", priority: "info",
            details: "This event shall be generated, when the momentary switch starts to be pressed (after debouncing)." +
                "\n" +
                "The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while " +
                "pressed.",
            xref: { document: "cluster", section: "1.11.7.2" },
            children: [{
                tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to NumberOfPositions1"
            }]
        },

        {
            tag: "event", name: "LongPress", id: 0x2, access: "V", conformance: "MSL", priority: "info",
            details: "This event shall be generated, when the momentary switch has been pressed for a \"long\" time (this " +
                "time interval is manufacturer determined (e.g. since it depends on the switch physics))." +
                "\n" +
                "The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while " +
                "pressed.",
            xref: { document: "cluster", section: "1.11.7.3" },
            children: [{
                tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to NumberOfPositions1"
            }]
        },

        {
            tag: "event", name: "ShortRelease", id: 0x3, access: "V", conformance: "MSR", priority: "info",

            details: "This event shall be generated, when the momentary switch has been released (after debouncing)." +
                "\n" +
                "  • If the server supports the Momentary Switch LongPress (MSL) feature, this event shall be " +
                "    generated when the switch is released if no LongPress event had been generated since the " +
                "    previous InitialPress event." +
                "\n" +
                "  • If the server does not support the Momentary Switch LongPress (MSL) feature, this event shall " +
                "    be generated when the switch is released - even when the switch was pressed for a long time." +
                "\n" +
                "  • Also see Section 1.11.8, “Sequence of generated events”." +
                "\n" +
                "The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. " +
                "just prior to release.",

            xref: { document: "cluster", section: "1.11.7.4" },
            children: [{
                tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to NumberOfPositions1"
            }]
        },

        {
            tag: "event", name: "LongRelease", id: 0x4, access: "V", conformance: "MSL", priority: "info",

            details: "This event shall be generated, when the momentary switch has been released (after debouncing) and " +
                "after having been pressed for a long time, i.e. this event shall be generated when the switch is " +
                "released if a LongPress event has been generated since since the previous InitialPress event. Also " +
                "see Section 1.11.8, “Sequence of generated events”." +
                "\n" +
                "The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. " +
                "just prior to release.",

            xref: { document: "cluster", section: "1.11.7.5" },
            children: [{
                tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to NumberOfPositions1"
            }]
        },

        {
            tag: "event", name: "MultiPressOngoing", id: 0x5, access: "V", conformance: "MSM", priority: "info",

            details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                "multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress” " +
                "below." +
                "\n" +
                "The NewPosition field shall indicate the new value of the CurrentPosition attribute, i.e. while " +
                "pressed." +
                "\n" +
                "The CurrentNumberOfPressesCounted field shall contain:" +
                "\n" +
                "  • a value of 2 when the second press of a multi-press sequence has been detected," +
                "\n" +
                "  • a value of 3 when the third press of a multi-press sequence has been detected," +
                "\n" +
                "  • a value of N when the Nth press of a multi-press sequence has been detected.",

            xref: { document: "cluster", section: "1.11.7.6" },

            children: [
                {
                    tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "0 to NumberOfPositions1"
                },
                {
                    tag: "datatype", name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "2 to MultiPressMax"
                }
            ]
        },

        {
            tag: "event", name: "MultiPressComplete", id: 0x6, access: "V", conformance: "MSM",
            priority: "info",

            details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                "multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9, " +
                "“Sequence of events for MultiPress” below." +
                "\n" +
                "The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. " +
                "just prior to release." +
                "\n" +
                "The TotalNumberOfPressesCounted field shall contain:" +
                "\n" +
                "  • a value of 1 when there was one press in a multi-press sequence (and the sequence has ended)," +
                "\n" +
                "    i.e. there was no double press (or more)," +
                "\n" +
                "  • a value of 2 when there were exactly two presses in a multi-press sequence (and the sequence " +
                "    has ended)," +
                "\n" +
                "  • a value of 3 when there were exactly three presses in a multi-press sequence (and the sequence " +
                "    has ended)," +
                "\n" +
                "  • a value of N when there were exactly N presses in a multi-press sequence (and the sequence has " +
                "    ended).",

            xref: { document: "cluster", section: "1.11.7.7" },

            children: [
                {
                    tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "0 to NumberOfPositions1"
                },
                {
                    tag: "datatype", name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "1 to MultiPressMax"
                }
            ]
        }
    ]
});
