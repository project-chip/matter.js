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
    EventElement as Event,
    FieldElement as Field
} from "../../elements/index.js";

export const BridgedDeviceBasicInformation = Cluster(
    {
        name: "BridgedDeviceBasicInformation", id: 0x39, type: "BasicInformation",
        classification: "endpoint", pics: "BRBINFO",

        details: "This Cluster serves two purposes towards a Node communicating with a Bridge:" +
            "\n" +
            "  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged " +
            "    from a non-Matter technology, and" +
            "\n" +
            "  • Provide a centralized collection of attributes that the Node may collect to aid in conveying " +
            "    information regarding the Bridged Device to a user, such as the vendor name, the model name, or " +
            "    user-assigned name." +
            "\n" +
            "This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When " +
            "the functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall " +
            "only be exposed on the Endpoint which is at the top of the hierarchy for the functionality of that " +
            "Bridged Device." +
            "\n" +
            "This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an " +
            "endpoint with an Aggregator device type." +
            "\n" +
            "This cluster has been derived from the Basic Information Cluster, and provides generic information " +
            "about the Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant " +
            "for a Bridged Device (e.g. ProductID since it is not a Matter device). For other attributes, the " +
            "information which is listed as Mandatory for the Basic Information Cluster, may not be available " +
            "when the Bridged Device does not provide it to the Bridge, and the Bridge has no other means to " +
            "determine it. For such cases where the information for a particular attribute is not available, the " +
            "Bridge SHOULD NOT include the attribute in the cluster for this Bridged Device. See below for " +
            "Conformance details.",

        xref: { document: "core", section: "9.13" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),
    Attribute({ name: "DataModelRevision", id: 0x0, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "VendorName", id: 0x1, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "VendorId", id: 0x2, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ProductName", id: 0x3, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ProductId", id: 0x4, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "NodeLabel", id: 0x5, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "Location", id: 0x6, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "HardwareVersion", id: 0x7, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "HardwareVersionString", id: 0x8, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "SoftwareVersion", id: 0x9, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "SoftwareVersionString", id: 0xa, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ManufacturingDate", id: 0xb, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "PartNumber", id: 0xc, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ProductUrl", id: 0xd, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ProductLabel", id: 0xe, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "SerialNumber", id: 0xf, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "LocalConfigDisabled", id: 0x10, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "Reachable", id: 0x11, conformance: "M", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "UniqueId", id: 0x12, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "CapabilityMinima", id: 0x13, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "ProductAppearance", id: 0x14, conformance: "O", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "SpecificationVersion", id: 0x15, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Attribute({ name: "MaxPathsPerInvoke", id: 0x16, conformance: "X", xref: { document: "core", section: "9.13.4" } }),
    Event({ name: "StartUp", id: 0x0, conformance: "O", priority: "critical", xref: { document: "core", section: "9.13.5" } }),
    Event({
        name: "ShutDown", id: 0x1, conformance: "O", priority: "critical",
        xref: { document: "core", section: "9.13.5" }
    }),

    Event(
        {
            name: "Leave", id: 0x2, conformance: "O", priority: "critical",

            details: "The Leave event SHOULD be generated by the bridge when it detects that the associated device has " +
                "left the non-Matter network." +
                "\n" +
                "NOTE" +
                "\n" +
                "The FabricIndex field has the X conformance, indicating it shall NOT be present. This event, in the " +
                "context of Bridged Device Basic Information cluster, has no usable fields, but the original Basic " +
                "Information cluster’s field definition is kept for completeness.",

            xref: { document: "core", section: "9.13.5.1" }
        },

        Field({ name: "FabricIndex", id: 0x0, conformance: "X" })
    ),

    Event({
        name: "ReachableChanged", id: 0x3, conformance: "M", priority: "critical",
        details: "This event shall be generated when there is a change in the Reachable attribute. Its purpose is to " +
            "provide an indication towards interested parties that the reachability of a bridged device (over " +
            "the non-Matter network) has changed, so they may take appropriate action." +
            "\n" +
            "After (re)start of a bridge this event may be generated.",
        xref: { document: "core", section: "9.13.5.2" }
    })
)

MatterDefinition.children.push(BridgedDeviceBasicInformation);
