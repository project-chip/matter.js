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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AudioOutput = Cluster(
    {
        name: "AudioOutput", id: 0x50b, classification: "application", pics: "AUDIOOUTPUT",

        details: "This cluster provides an interface for controlling the Output on a Video Player device such as a TV." +
            "\n" +
            "This cluster would be supported on a device with audio outputs like a Video Player device (Smart TV, " +
            "TV Setup Top Box, Smart Speaker, etc)." +
            "\n" +
            "This cluster provides the list of available outputs and provides commands for selecting and renaming " +
            "them." +
            "\n" +
            "The cluster server for Audio Output is implemented by a device that has configurable audio output.",

        xref: { document: "cluster", section: "6.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.5.4" } },
        Field({ name: "NU", constraint: "0", description: "NameUpdates", details: "Supports updates to output names" })
    ),

    Attribute(
        {
            name: "OutputList", id: 0x0, type: "list", access: "R V", conformance: "M",
            details: "This attribute provides the list of outputs supported by the device.",
            xref: { document: "cluster", section: "6.5.6.1" }
        },
        Field({ name: "entry", type: "OutputInfoStruct" })
    ),

    Attribute({
        name: "CurrentOutput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        details: "This attribute contains the value of the index field of the currently selected OutputInfoStruct.",
        xref: { document: "cluster", section: "6.5.6.2" }
    }),

    Command(
        {
            name: "SelectOutput", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",

            details: "Upon receipt, this shall change the output on the device to the output at a specific index in the " +
                "Output List." +
                "\n" +
                "Note that when the current output is set to an output of type HDMI, adjustments to volume via a " +
                "Speaker endpoint on the same node may cause HDMI volume up/down commands to be sent to the given " +
                "HDMI output.",

            xref: { document: "cluster", section: "6.5.7.1" }
        },

        Field({
            name: "Index", id: 0x0, type: "uint8", conformance: "M",
            details: "This shall indicate the index field of the OutputInfoStruct from the OutputList attribute in which " +
                "to change to.",
            xref: { document: "cluster", section: "6.5.7.1.1" }
        })
    ),

    Command(
        {
            name: "RenameOutput", id: 0x1, access: "M", conformance: "NU", direction: "request",
            response: "status",
            details: "Upon receipt, this shall rename the output at a specific index in the Output List." +
                "\n" +
                "Updates to the output name shall appear in the device’s settings menus. Name updates may " +
                "automatically be sent to the actual device to which the output connects.",
            xref: { document: "cluster", section: "6.5.7.2" }
        },

        Field({ name: "Index", id: 0x0, type: "uint8", conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", conformance: "M" })
    ),

    Datatype(
        {
            name: "OutputTypeEnum", type: "enum8",
            details: "The type of output, expressed as an enum, with the following values:",
            xref: { document: "cluster", section: "6.5.5.1" }
        },
        Field({ name: "Hdmi", id: 0x0, conformance: "M", description: "HDMI" }),
        Field({ name: "Bt", id: 0x1, conformance: "M" }),
        Field({ name: "Optical", id: 0x2, conformance: "M" }),
        Field({ name: "Headphone", id: 0x3, conformance: "M" }),
        Field({ name: "Internal", id: 0x4, conformance: "M" }),
        Field({ name: "Other", id: 0x5, conformance: "M" })
    ),

    Datatype(
        {
            name: "OutputInfoStruct", type: "struct",
            details: "This contains information about an output.",
            xref: { document: "cluster", section: "6.5.5.2" }
        },
        Field({
            name: "Index", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate the unique index into the list of outputs.",
            xref: { document: "cluster", section: "6.5.5.2.1" }
        }),
        Field({
            name: "OutputType", id: 0x1, type: "OutputTypeEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the type of output.",
            xref: { document: "cluster", section: "6.5.5.2.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "M",
            details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be " +
                "blank, but SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.5.5.2.3" }
        })
    )
);

MatterDefinition.children.push(AudioOutput);
