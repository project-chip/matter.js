/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "TargetNavigator", id: 0x505, classification: "application",
    description: "Target Navigator",
    details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
        "endpoint.",
    xref: { document: "cluster", section: "6.11" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "TargetList", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 254",
            details: "The TargetList attribute shall represent a list of targets that can be navigated to within the " +
                "experience presented to the user by the Endpoint (Video Player or Content App). The list shall not " +
                "contain any entries with the same Identifier in the TargetInfoStruct object.",
            xref: { document: "cluster", section: "6.11.3.1" },
            children: [{ tag: "datatype", name: "entry", type: "TargetInfoStruct" }]
        },

        {
            tag: "attribute", name: "CurrentTarget", id: 0x1, type: "uint8", access: "R V", conformance: "O",
            constraint: "desc", default: null, quality: "X",

            details: "The CurrentTarget attribute shall represent the Identifier for the target which is currently in " +
                "foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no " +
                "target is in the foreground." +
                "\n" +
                "When not null, the CurrentTarget shall be an Identifier value contained within one of the " +
                "TargetInfoStruct objects in the TargetList attribute list.",

            xref: { document: "cluster", section: "6.11.3.2" }
        },

        {
            tag: "command", name: "NavigateTarget", id: 0x0, access: "O", conformance: "M",
            direction: "request", response: "NavigateTargetResponse",
            details: "Upon receipt, this shall navigation the UX to the target identified.",
            xref: { document: "cluster", section: "6.11.4.1" },

            children: [
                {
                    tag: "datatype", name: "Target", id: 0x0, type: "uint8", conformance: "M",
                    details: "This shall indicate the Identifier for the target for UX navigation. The Target shall be an " +
                        "Identifier value contained within one of the TargetInfoStruct objects in the TargetList attribute " +
                        "list.",
                    xref: { document: "cluster", section: "6.11.4.1.1" }
                },

                {
                    tag: "datatype", name: "Data", id: 0x1, type: "string", conformance: "O",
                    details: "This shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.11.4.1.2" }
                }
            ]
        },

        {
            tag: "command", name: "NavigateTargetResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command shall be generated in response to NavigateTarget command.",
            xref: { document: "cluster", section: "6.11.4.2" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                    details: "This shall indicate the of the command.",
                    xref: { document: "cluster", section: "6.11.4.2.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "string", conformance: "O",
                    details: "This shall indicate Optional app-specific data.",
                    xref: { document: "cluster", section: "6.11.4.2.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "TargetInfoStruct", type: "struct", conformance: "M",
            details: "This indicates an object describing the navigable target.",
            xref: { document: "cluster", section: "6.11.5.1" },

            children: [
                {
                    tag: "datatype", name: "Identifier", id: 0x0, type: "uint8", conformance: "M",
                    details: "An unique id within the TargetList.",
                    xref: { document: "cluster", section: "6.11.5.1.1" }
                },
                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32",
                    details: "A name string for the TargetInfoStruct.",
                    xref: { document: "cluster", section: "6.11.5.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.11.5.2" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "TargetNotFound", id: 0x1, conformance: "M",
                    description: "Requested target was not found in the TargetList"
                },
                {
                    tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M",
                    description: "Target request is not allowed in current state."
                }
            ]
        }
    ]
});
