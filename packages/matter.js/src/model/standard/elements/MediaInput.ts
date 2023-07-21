/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "MediaInput", id: 0x507, classification: "application",
    description: "Media Input",
    details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
        "Video Player.",
    xref: { document: "cluster", section: "6.9" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.9.2" },
            children: [{
                tag: "datatype", name: "NU", constraint: "0", description: "NameUpdates",
                details: "Supports updates to the input names"
            }]
        },

        {
            tag: "attribute", name: "InputList", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 254",
            details: "This list provides the media inputs supported by the device.",
            xref: { document: "cluster", section: "6.9.3.1" },
            children: [{ tag: "datatype", name: "entry", type: "InputInfoStruct" }]
        },

        {
            tag: "attribute", name: "CurrentInput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
            default: 0,
            details: "This field contains the value of the index field of the currently selected InputInfoStruct.",
            xref: { document: "cluster", section: "6.9.3.2" }
        },

        {
            tag: "command", name: "SelectInput", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "Upon receipt, this shall change the media input on the device to the input at a specific index in " +
                "the Input List.",
            xref: { document: "cluster", section: "6.9.4.1" },

            children: [{
                tag: "datatype", name: "Index", id: 0x0, type: "uint8", conformance: "M",
                details: "This shall indicate the index field of the InputInfoStruct from the InputList attribute in which to " +
                    "change to.",
                xref: { document: "cluster", section: "6.9.4.1.1" }
            }]
        },

        {
            tag: "command", name: "ShowInputStatus", id: 0x1, access: "O", conformance: "M",
            direction: "request", response: "status",
            details: "Upon receipt, this shall display the active status of the input list on screen.",
            xref: { document: "cluster", section: "6.9.4.2" }
        },

        {
            tag: "command", name: "HideInputStatus", id: 0x2, access: "O", conformance: "M",
            direction: "request", response: "status",
            details: "Upon receipt, this shall hide the input list from the screen.",
            xref: { document: "cluster", section: "6.9.4.3" }
        },

        {
            tag: "command", name: "RenameInput", id: 0x3, access: "M", conformance: "NU", direction: "request",
            response: "status",
            details: "Upon receipt, this shall rename the input at a specific index in the Input List. Updates to the " +
                "input name shall appear in the device’s settings menus.",
            xref: { document: "cluster", section: "6.9.4.4" },
            children: [
                { tag: "datatype", name: "Index", id: 0x0, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "InputInfoStruct", type: "struct", conformance: "M",
            details: "This contains information about an input.",
            xref: { document: "cluster", section: "6.9.5.1" },

            children: [
                {
                    tag: "datatype", name: "Index", id: 0x0, type: "uint8", conformance: "M",
                    details: "This shall indicate the unique index into the list of Inputs.",
                    xref: { document: "cluster", section: "6.9.5.1.1" }
                },

                {
                    tag: "datatype", name: "InputType", id: 0x1, type: "InputTypeEnum", conformance: "M",
                    constraint: "desc",
                    details: "This shall indicate the type of input",
                    xref: { document: "cluster", section: "6.9.5.1.2" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "M", constraint: "max 32",
                    details: "This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be " +
                        "provided when known.",
                    xref: { document: "cluster", section: "6.9.5.1.3" }
                },

                {
                    tag: "datatype", name: "Description", id: 0x3, type: "string", conformance: "M",
                    constraint: "max 32",
                    details: "This shall indicate the user editable input description, such as “Living room Playstation”. This " +
                        "field may be blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.9.5.1.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "InputTypeEnum", type: "enum8", conformance: "M",
            details: "The type of input, expressed as an enum, with the following values:",
            xref: { document: "cluster", section: "6.9.5.2" },

            children: [
                {
                    tag: "datatype", name: "Internal", id: 0x0, conformance: "M",
                    description: "Indicates content not coming from a physical input."
                },
                { tag: "datatype", name: "Aux", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Coax", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Composite", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Hdmi", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Input", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Line", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "Optical", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "Video", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Scart", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "Usb", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "Other", id: 0xb, conformance: "M" }
            ]
        }
    ]
});
