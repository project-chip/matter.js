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

export const ResourceMonitoring = Cluster(
    {
        name: "ResourceMonitoring", classification: "application", pics: "REPM",

        details: "This generic cluster provides an interface to the current condition of a resource. A resource is a" +
            "\n" +
            "component of a device that is designed to be replaced, refilled, or emptied when exhausted or full. " +
            "Examples of resources include filters, cartridges, and water tanks. While batteries fit this " +
            "definition they are not intended to be used with this cluster. Use the power source cluster for " +
            "batteries instead." +
            "\n" +
            "NOTE" +
            "\n" +
            "This cluster is not meant to be used for monitoring of the system resources, such as processing, " +
            "memory utilization, networking properties, etc." +
            "\n" +
            "This cluster shall be used via an alias to a specific resource type (see Cluster IDs).",

        xref: { document: "cluster", section: "2.8" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.8.4" } },
        Field({
            name: "CON", conformance: "O", constraint: "0", description: "Condition",
            details: "Supports monitoring the condition of the resource in percentage"
        }),
        Field({
            name: "WRN", conformance: "O", constraint: "1", description: "Warning",
            details: "Supports warning indication"
        }),
        Field({
            name: "REP", conformance: "O", constraint: "2", description: "ReplacementProductList",
            details: "Supports specifying the list of replacement products"
        })
    ),

    Attribute({
        name: "Condition", id: 0x0, type: "percent", access: "R V", conformance: "CON",
        details: "Indicates the current condition of the resource in percent.",
        xref: { document: "cluster", section: "2.8.6.1" }
    }),

    Attribute({
        name: "DegradationDirection", id: 0x1, type: "DegradationDirectionEnum", access: "R V",
        conformance: "CON", constraint: "desc", quality: "F",
        details: "Indicates the direction of change for the condition of the resource over time, which helps to " +
            "determine whether a higher or lower condition value is considered optimal.",
        xref: { document: "cluster", section: "2.8.6.2" }
    }),

    Attribute({
        name: "ChangeIndication", id: 0x2, type: "ChangeIndicationEnum", access: "R V", conformance: "M",
        default: 0,
        details: "This attribute shall be populated with a value from ChangeIndicationEnum that is indicative of the " +
            "current requirement to change the resource.",
        xref: { document: "cluster", section: "2.8.6.3" }
    }),

    Attribute({
        name: "InPlaceIndicator", id: 0x3, type: "bool", access: "R V", conformance: "O",
        details: "Indicates whether a resource is currently installed. A value of true shall indicate that a resource " +
            "is installed. A value of false shall indicate that a resource is not installed.",
        xref: { document: "cluster", section: "2.8.6.4" }
    }),

    Attribute({
        name: "LastChangedTime", id: 0x4, type: "epoch-s", access: "RW VO", conformance: "O", default: null,
        quality: "X N",
        details: "This attribute may indicates the time at which the resource has been changed, if supported by the " +
            "server. The attribute shall be null if it was never set or is unknown.",
        xref: { document: "cluster", section: "2.8.6.5" }
    }),

    Attribute(
        {
            name: "ReplacementProductList", id: 0x5, type: "list", access: "R V", conformance: "REP",
            constraint: "max 5", quality: "F",
            details: "Indicates the list of supported products that may be used as replacements for the current resource. " +
                "Each item in this list represents a unique ReplacementProductStruct.",
            xref: { document: "cluster", section: "2.8.6.6" }
        },

        Field({ name: "entry", type: "ReplacementProductStruct" })
    ),

    Command({
        name: "ResetCondition", id: 0x0, access: "O", conformance: "O", direction: "request",
        response: "status",
        details: "Upon receipt, the device shall reset the Condition and ChangeIndicator attributes, indicating full " +
            "resource availability and readiness for use, as initially configured. Invocation of this command may " +
            "cause the LastChangedTime to be updated automatically based on the clock of the server, if the " +
            "server supports setting the attribute.",
        xref: { document: "cluster", section: "2.8.7.1" }
    }),

    Datatype(
        {
            name: "DegradationDirectionEnum", type: "enum8",
            details: "Indicates the direction in which the condition of the resource changes over time.",
            xref: { document: "cluster", section: "2.8.5.1" }
        },
        Field({
            name: "Up", id: 0x0, conformance: "M",
            description: "The degradation of the resource is indicated by an upwards moving/increasing value"
        }),
        Field({
            name: "Down", id: 0x1, conformance: "M",
            description: "The degradation of the resource is indicated by a downwards moving/decreasing value"
        })
    ),

    Datatype(
        { name: "ChangeIndicationEnum", type: "enum8", xref: { document: "cluster", section: "2.8.5.2" } },
        Field({
            name: "Ok", id: 0x0, conformance: "M",
            description: "Resource is in good condition, no intervention required"
        }),
        Field({
            name: "Warning", id: 0x1, conformance: "WRN",
            description: "Resource will be exhausted soon, intervention will shortly be required"
        }),
        Field({
            name: "Critical", id: 0x2, conformance: "M",
            description: "Resource is exhausted, immediate intervention is required"
        })
    ),

    Datatype(
        {
            name: "ProductIdentifierTypeEnum", type: "enum8",
            details: "Indicate the type of identifier used to describe the product. Devices SHOULD use globally-recognized " +
                "IDs over OEM specific ones.",
            xref: { document: "cluster", section: "2.8.5.3" }
        },

        Field({ name: "Upc", id: 0x0, conformance: "M", description: "12-digit Universal Product Code" }),
        Field({ name: "Gtin8", id: 0x1, conformance: "M", description: "8-digit Global Trade Item Number" }),
        Field({ name: "Ean", id: 0x2, conformance: "M", description: "13-digit European Article Number" }),
        Field({ name: "Gtin14", id: 0x3, conformance: "M", description: "14-digit Global Trade Item Number" }),
        Field({ name: "Oem", id: 0x4, conformance: "M", description: "Original Equipment Manufacturer part number" })
    ),

    Datatype(
        {
            name: "ReplacementProductStruct", type: "struct",
            details: "Indicates the product identifier that can be used as a replacement for the resource.",
            xref: { document: "cluster", section: "2.8.5.4" }
        },
        Field({
            name: "ProductIdentifierType", id: 0x0, type: "ProductIdentifierTypeEnum", conformance: "M",
            constraint: "desc"
        }),
        Field({ name: "ProductIdentifierValue", id: 0x1, type: "string", conformance: "M", constraint: "max 20" })
    )
);

MatterDefinition.children.push(ResourceMonitoring);
