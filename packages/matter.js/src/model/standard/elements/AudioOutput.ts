/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "AudioOutput", id: 0x50b, classification: "application", description: "Audio Output",
    details: "This cluster provides an interface for controlling the Output on a Video Player device such as a TV.",
    xref: { document: "cluster", section: "6.5" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.5.2" },
            children: [Field({
                name: "NU", constraint: "0", description: "NameUpdates",
                details: "Supports updates to output names"
            })]
        }),

        Attribute({
            name: "OutputList", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "none",
            details: "This list provides the outputs supported by the device.",
            xref: { document: "cluster", section: "6.5.3.1" },
            children: [Field({ name: "entry", type: "OutputInfoStruct" })]
        }),

        Attribute({
            name: "CurrentOutput", id: 0x1, type: "uint8", access: "R V", conformance: "M", default: 0,
            details: "This field contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: { document: "cluster", section: "6.5.3.2" }
        }),

        Command({
            name: "SelectOutput", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "6.5.4" },
            children: [Field({ name: "Index", type: "uint8", conformance: "M" })]
        }),

        Command({
            name: "RenameOutput", id: 0x1, access: "M", conformance: "NU", direction: "request",
            response: "status",
            details: "Upon receipt, this shall rename the output at a specific index in the Output List." +
                "\n" +
                "Updates to the output name shall appear in the device’s settings menus. Name updates may " +
                "automatically be sent to the actual device to which the output connects.",
            xref: { document: "cluster", section: "6.5.4.2" },
            children: [
                Field({ name: "Index", id: 0x0, type: "uint8", conformance: "M" }),
                Field({ name: "Name", id: 0x1, type: "string", conformance: "M" })
            ]
        }),

        Datatype({
            name: "OutputInfoStruct", type: "struct", conformance: "M",
            details: "This contains information about an output.",
            xref: { document: "cluster", section: "6.5.5.1" },

            children: [
                Field({
                    name: "Index", id: 0x0, type: "uint8", conformance: "M",
                    details: "This shall indicate the unique index into the list of outputs.",
                    xref: { document: "cluster", section: "6.5.5.1.1" }
                }),
                Field({
                    name: "OutputType", id: 0x1, type: "OutputTypeEnum", conformance: "M", constraint: "desc",
                    details: "This shall indicate the type of output",
                    xref: { document: "cluster", section: "6.5.5.1.2" }
                }),

                Field({
                    name: "Name", id: 0x2, type: "string", conformance: "M", constraint: "max 32",
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be " +
                        "blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.5.5.1.3" }
                })
            ]
        }),

        Datatype({
            name: "OutputTypeEnum", type: "enum8", conformance: "M",
            details: "The type of output, expressed as an enum, with the following values:",
            xref: { document: "cluster", section: "6.5.5.2" },

            children: [
                Field({ name: "Hdmi", id: 0x0, conformance: "M", description: "HDMI" }),
                Field({ name: "Bt", id: 0x1, conformance: "M" }),
                Field({ name: "Optical", id: 0x2, conformance: "M" }),
                Field({ name: "Headphone", id: 0x3, conformance: "M" }),
                Field({ name: "Internal", id: 0x4, conformance: "M" }),
                Field({ name: "Other", id: 0x5, conformance: "M" })
            ]
        })
    ]
}));
