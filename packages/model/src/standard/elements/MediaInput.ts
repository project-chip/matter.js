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

export const MediaInput = Cluster(
    {
        name: "MediaInput", id: 0x507, classification: "application", pics: "MEDIAINPUT",

        details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
            "Video Player." +
            "\n" +
            "This cluster would be implemented on TV and other media streaming devices, as well as devices that " +
            "provide input to or output from such devices." +
            "\n" +
            "This cluster provides the list of available inputs and provides commands for selecting and renaming " +
            "them." +
            "\n" +
            "The cluster server for Media Input is implemented by a device that has selectable input, such as a " +
            "Video Player device.",

        xref: { document: "cluster", section: "6.9" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.9.4" } },
        Field({ name: "NU", constraint: "0", description: "NameUpdates", details: "Supports updates to the input names" })
    ),

    Attribute(
        {
            name: "InputList", id: 0x0, type: "list", access: "R V", conformance: "M",
            details: "This attribute shall provide a list of the media inputs supported by the device.",
            xref: { document: "cluster", section: "6.9.6.1" }
        },
        Field({ name: "entry", type: "InputInfoStruct" })
    ),

    Attribute({
        name: "CurrentInput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
        details: "This attribute shall contain the value of the index field of the currently selected InputInfoStruct.",
        xref: { document: "cluster", section: "6.9.6.2" }
    }),

    Command(
        {
            name: "SelectInput", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt, this command shall change the media input on the device to the input at a specific" +
                "\n" +
                "index in the Input List.",
            xref: { document: "cluster", section: "6.9.7.1" }
        },

        Field({
            name: "Index", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate the index field of the InputInfoStruct from the InputList attribute in " +
                "which to change to.",
            xref: { document: "cluster", section: "6.9.7.1.1" }
        })
    ),

    Command({
        name: "ShowInputStatus", id: 0x1, access: "O", conformance: "M", direction: "request",
        response: "status",
        details: "Upon receipt, this command shall display the active status of the input list on screen.",
        xref: { document: "cluster", section: "6.9.7.2" }
    }),

    Command({
        name: "HideInputStatus", id: 0x2, access: "O", conformance: "M", direction: "request",
        response: "status",
        details: "Upon receipt, this command shall hide the input list from the screen.",
        xref: { document: "cluster", section: "6.9.7.3" }
    }),

    Command(
        {
            name: "RenameInput", id: 0x3, access: "M", conformance: "NU", direction: "request",
            response: "status",
            details: "Upon receipt, this command shall rename the input at a specific index in the Input List. Updates to " +
                "the input name shall appear in the device’s settings menus.",
            xref: { document: "cluster", section: "6.9.7.4" }
        },

        Field({ name: "Index", id: 0x0, type: "uint8", conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", conformance: "M" })
    ),

    Datatype(
        { name: "InputTypeEnum", type: "enum8", xref: { document: "cluster", section: "6.9.5.1" } },
        Field({
            name: "Internal", id: 0x0, conformance: "M",
            description: "Indicates content not coming from a physical input."
        }),
        Field({ name: "Aux", id: 0x1, conformance: "M" }),
        Field({ name: "Coax", id: 0x2, conformance: "M" }),
        Field({ name: "Composite", id: 0x3, conformance: "M" }),
        Field({ name: "Hdmi", id: 0x4, conformance: "M" }),
        Field({ name: "Input", id: 0x5, conformance: "M" }),
        Field({ name: "Line", id: 0x6, conformance: "M" }),
        Field({ name: "Optical", id: 0x7, conformance: "M" }),
        Field({ name: "Video", id: 0x8, conformance: "M" }),
        Field({ name: "Scart", id: 0x9, conformance: "M" }),
        Field({ name: "Usb", id: 0xa, conformance: "M" }),
        Field({ name: "Other", id: 0xb, conformance: "M" })
    ),

    Datatype(
        {
            name: "InputInfoStruct", type: "struct",
            details: "This contains information about an input.",
            xref: { document: "cluster", section: "6.9.5.2" }
        },
        Field({
            name: "Index", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate the unique index into the list of Inputs.",
            xref: { document: "cluster", section: "6.9.5.2.1" }
        }),
        Field({
            name: "InputType", id: 0x1, type: "InputTypeEnum", conformance: "M", constraint: "desc",
            details: "This field shall indicate the type of input",
            xref: { document: "cluster", section: "6.9.5.2.2" }
        }),

        Field({
            name: "Name", id: 0x2, type: "string", conformance: "M",
            details: "This field shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be " +
                "provided when known.",
            xref: { document: "cluster", section: "6.9.5.2.3" }
        }),

        Field({
            name: "Description", id: 0x3, type: "string", conformance: "M",
            details: "This field shall indicate the user editable input description, such as “Living room Playstation”. " +
                "This field may be blank, but SHOULD be provided when known.",
            xref: { document: "cluster", section: "6.9.5.2.4" }
        })
    )
);

MatterDefinition.children.push(MediaInput);
