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

export const TargetNavigator = Cluster(
    {
        name: "TargetNavigator", id: 0x505, classification: "application", pics: "TGTNAV",

        details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
            "endpoint." +
            "\n" +
            "This cluster would be supported on Video Player devices or devices with navigable user interfaces. " +
            "This cluster would also be supported on endpoints with navigable user interfaces such as a Content " +
            "App. It supports listing a set of navigation targets, tracking and changing the current target." +
            "\n" +
            "The cluster server for Target Navigator is implemented by endpoints on a device that support UX " +
            "navigation." +
            "\n" +
            "When this cluster is implemented for a Content App endpoint, the Video Player device containing the " +
            "endpoint shall launch the Content App when a client invokes the NavigateTarget command.",

        xref: { document: "cluster", section: "6.11" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        {
            name: "TargetList", id: 0x0, type: "list", access: "R V", conformance: "M",
            details: "Indicates a list of targets that can be navigated to within the experience presented to the user by " +
                "the Endpoint (Video Player or Content App). The list shall NOT contain any entries with the same " +
                "Identifier in the TargetInfoStruct object.",
            xref: { document: "cluster", section: "6.11.5.1" }
        },

        Field({ name: "entry", type: "TargetInfoStruct" })
    ),

    Attribute({
        name: "CurrentTarget", id: 0x1, type: "uint8", access: "R V", conformance: "O", constraint: "desc",
        default: 255,
        details: "Indicates the Identifier for the target which is currently in foreground on the corresponding " +
            "Endpoint (Video Player or Content App), or 0xFF to indicate that no target is in the foreground." +
            "\n" +
            "When not 0xFF, the CurrentTarget shall be an Identifier value contained within one of the " +
            "TargetInfoStruct objects in the TargetList attribute.",
        xref: { document: "cluster", section: "6.11.5.2" }
    }),

    Event(
        {
            name: "TargetUpdated", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "This event shall be generated when there is a change in either the active target or the list of " +
                "available targets or both.",
            xref: { document: "cluster", section: "6.11.7.1" }
        },

        Field(
            { name: "TargetList", id: 0x0, type: "list", conformance: "O" },
            Field({ name: "entry", type: "TargetInfoStruct" })
        ),
        Field({ name: "CurrentTarget", id: 0x1, type: "uint8", conformance: "O", constraint: "desc", default: 255 }),
        Field({ name: "Data", id: 0x2, type: "octstr", conformance: "O", constraint: "max 900" })
    ),

    Command(
        {
            name: "NavigateTarget", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "NavigateTargetResponse",
            details: "Upon receipt, this shall navigation the UX to the target identified.",
            xref: { document: "cluster", section: "6.11.6.1" }
        },

        Field({
            name: "Target", id: 0x0, type: "uint8", conformance: "M",
            details: "This field shall indicate the Identifier for the target for UX navigation. The Target shall be an " +
                "Identifier value contained within one of the TargetInfoStruct objects in the TargetList attribute.",
            xref: { document: "cluster", section: "6.11.6.1.1" }
        }),

        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.11.6.1.2" }
        })
    ),

    Command(
        {
            name: "NavigateTargetResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command shall be generated in response to NavigateTarget command.",
            xref: { document: "cluster", section: "6.11.6.2" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
            details: "This field shall indicate the of the command.",
            xref: { document: "cluster", section: "6.11.6.2.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "string", conformance: "O", constraint: "any",
            details: "This field shall indicate Optional app-specific data.",
            xref: { document: "cluster", section: "6.11.6.2.2" }
        })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.11.4.1" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" }),
        Field({
            name: "TargetNotFound", id: 0x1, conformance: "M",
            description: "Requested target was not found in the TargetList"
        }),
        Field({
            name: "NotAllowed", id: 0x2, conformance: "M",
            description: "Target request is not allowed in current state."
        })
    ),

    Datatype(
        {
            name: "TargetInfoStruct", type: "struct",
            details: "This indicates an object describing the navigable target.",
            xref: { document: "cluster", section: "6.11.4.2" }
        },
        Field({
            name: "Identifier", id: 0x0, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall contain an unique id within the TargetList.",
            xref: { document: "cluster", section: "6.11.4.2.1" }
        }),
        Field({
            name: "Name", id: 0x1, type: "string", conformance: "M",
            details: "This field shall contain a name string for the TargetInfoStruct.",
            xref: { document: "cluster", section: "6.11.4.2.2" }
        })
    )
);

MatterDefinition.children.push(TargetNavigator);
