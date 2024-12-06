/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event
} from "../../elements/index.js";

export const Switch = Cluster(
    {
        name: "Switch", id: 0x3b, classification: "application", pics: "SWTCH",

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

        xref: { document: "cluster", section: "1.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.13.4" } },
        Field({
            name: "LS", conformance: "O.a", constraint: "0", description: "LatchingSwitch",
            details: "This feature is for a switch that maintains its position after being pressed (or turned).",
            xref: { document: "cluster", section: "1.13.4.1" }
        }),

        Field({
            name: "MS", conformance: "O.a", constraint: "1", description: "MomentarySwitch",
            details: "This feature is for a switch that does not maintain its position after being pressed (or turned). " +
                "After releasing, it goes back to its idle position.",
            xref: { document: "cluster", section: "1.13.4.2" }
        }),

        Field({
            name: "MSR", conformance: "[MS]", constraint: "2", description: "MomentarySwitchRelease",
            details: "This feature is for a momentary switch that can distinguish and report release events. When this " +
                "feature flag MSR is present, MS shall be present as well.",
            xref: { document: "cluster", section: "1.13.4.3" }
        }),

        Field({
            name: "MSL", conformance: "[MS & MSR]", constraint: "3", description: "MomentarySwitchLongPress",
            details: "This feature is for a momentary switch that can distinguish and report long presses from short " +
                "presses. When this feature flag MSL is present, MS and MSR shall be present as well.",
            xref: { document: "cluster", section: "1.13.4.4" }
        }),

        Field({
            name: "MSM", conformance: "[MS & MSR]", constraint: "4", description: "MomentarySwitchMultiPress",
            details: "This feature is for a momentary switch that can distinguish and report double press and potentially " +
                "multiple presses with more events, such as triple press, etc. When this feature flag MSM is " +
                "present, MS and MSR shall be present as well.",
            xref: { document: "cluster", section: "1.13.4.5" }
        })
    ),

    Attribute({
        name: "NumberOfPositions", id: 0x0, type: "uint8", access: "R V", conformance: "M",
        constraint: "min 2", default: 2, quality: "F",
        details: "Indicates the maximum number of positions the switch has. Any kind of switch has a minimum of 2 " +
            "positions. Also see Multi Position Details for the case NumberOfPositions>2.",
        xref: { document: "cluster", section: "1.13.5.1" }
    }),

    Attribute({
        name: "CurrentPosition", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        constraint: "max numberOfPositions1", default: 0, quality: "N",
        details: "Indicates the position of the switch. The valid range is zero to NumberOfPositions-1. " +
            "CurrentPosition value 0 shall be assigned to the default position of the switch: for example the " +
            "\"open\" state of a rocker switch, or the \"idle\" state of a push button switch.",
        xref: { document: "cluster", section: "1.13.5.2" }
    }),

    Attribute({
        name: "MultiPressMax", id: 0x2, type: "uint8", access: "R V", conformance: "MSM",
        constraint: "min 2", default: 2, quality: "F",
        details: "Indicates how many consecutive presses can be detected and reported by a momentary switch which " +
            "supports multi-press (e.g. it will report the value 3 if it can detect single press, double press " +
            "and triple press, but not quad press and beyond).",
        xref: { document: "cluster", section: "1.13.5.3" }
    }),

    Event(
        {
            name: "SwitchLatched", id: 0x0, access: "V", conformance: "LS", priority: "info",
            details: "This event shall be generated, when the latching switch is moved to a new position. It may have " +
                "been delayed by debouncing within the switch.",
            xref: { document: "cluster", section: "1.13.6.1" }
        },

        Field({
            name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.",
            xref: { document: "cluster", section: "1.13.6.1.1" }
        })
    ),

    Event(
        {
            name: "InitialPress", id: 0x1, access: "V", conformance: "MS", priority: "info",
            details: "This event shall be generated, when the momentary switch starts to be pressed (after debouncing).",
            xref: { document: "cluster", section: "1.13.6.2" }
        },

        Field({
            name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
            xref: { document: "cluster", section: "1.13.6.2.1" }
        })
    ),

    Event(
        {
            name: "LongPress", id: 0x2, access: "V", conformance: "MSL", priority: "info",
            details: "This event shall be generated, when the momentary switch has been pressed for a \"long\" time (this " +
                "time interval is manufacturer determined (e.g. since it depends on the switch physics)).",
            xref: { document: "cluster", section: "1.13.6.3" }
        },

        Field({
            name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
            xref: { document: "cluster", section: "1.13.6.3.1" }
        })
    ),

    Event(
        {
            name: "ShortRelease", id: 0x3, access: "V", conformance: "MSR", priority: "info",

            details: "This event shall be generated, when the momentary switch has been released (after debouncing)." +
                "\n" +
                "  • If the server supports the Momentary Switch LongPress (MSL) feature, this event shall be " +
                "    generated when the switch is released if no LongPress event had been generated since the " +
                "    previous InitialPress event." +
                "\n" +
                "  • If the server does not support the Momentary Switch LongPress (MSL) feature, this event shall " +
                "    be generated when the switch is released - even when the switch was pressed for a long time." +
                "\n" +
                "  • Also see Section 1.13.7, “Sequence of generated events”.",

            xref: { document: "cluster", section: "1.13.6.4" }
        },

        Field({
            name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                "release.",
            xref: { document: "cluster", section: "1.13.6.4.1" }
        })
    ),

    Event(
        {
            name: "LongRelease", id: 0x4, access: "V", conformance: "MSL", priority: "info",
            details: "This event shall be generated, when the momentary switch has been released (after debouncing) and " +
                "after having been pressed for a long time, i.e. this event shall be generated when the switch is " +
                "released if a LongPress event has been generated since the previous InitialPress event. Also see " +
                "Section 1.13.7, “Sequence of generated events”.",
            xref: { document: "cluster", section: "1.13.6.5" }
        },

        Field({
            name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                "release.",
            xref: { document: "cluster", section: "1.13.6.5.1" }
        })
    ),

    Event(
        {
            name: "MultiPressOngoing", id: 0x5, access: "V", conformance: "MSM", priority: "info",
            details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                "multi-press sequence, during that sequence. See Multi Press Details below.",
            xref: { document: "cluster", section: "1.13.6.6" }
        },

        Field({
            name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
            constraint: "0 to numberOfPositions1",
            details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
            xref: { document: "cluster", section: "1.13.6.6.1" }
        }),

        Field({
            name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
            constraint: "2 to multiPressMax",

            details: "This field shall contain:" +
                "\n" +
                "  • a value of 2 when the second press of a multi-press sequence has been detected," +
                "\n" +
                "  • a value of 3 when the third press of a multi-press sequence has been detected," +
                "\n" +
                "  • a value of N when the Nth press of a multi-press sequence has been detected.",

            xref: { document: "cluster", section: "1.13.6.6.2" }
        })
    ),

    Event(
        {
            name: "MultiPressComplete", id: 0x6, access: "V", conformance: "MSM", priority: "info",

            details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                "multi-press sequence, after it has been detected that the sequence has ended. See Multi Press " +
                "Details." +
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

            xref: { document: "cluster", section: "1.13.6.7" }
        },

        Field({ name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to numberOfPositions1" }),
        Field({
            name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
            constraint: "1 to multiPressMax"
        })
    )
);

MatterDefinition.children.push(Switch);
