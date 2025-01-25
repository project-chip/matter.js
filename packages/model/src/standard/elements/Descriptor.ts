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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Descriptor = Cluster(
    {
        name: "Descriptor", id: 0x1d, classification: "endpoint", pics: "DESC",

        details: "NOTE" +
            "\n" +
            "The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
            "describing a node, its endpoints and clusters." +
            "\n" +
            "This cluster describes an endpoint instance on the node, independently from other endpoints, but " +
            "also allows composition of endpoints to conform to complex device type patterns." +
            "\n" +
            "This cluster supports a list of one or more device type identifiers that represent conformance to " +
            "device type specifications." +
            "\n" +
            "The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a " +
            "composed device type.",

        xref: { document: "core", section: "9.5" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "9.5.4" } },

        Field({
            name: "TAGLIST", conformance: "desc", constraint: "0", description: "TagList",
            details: "See the Disambiguation section in the System Model spec for conformance requirements for this " +
                "feature and the corresponding attribute.",
            xref: { document: "core", section: "9.5.4.1" }
        })
    ),

    Attribute(
        {
            name: "DeviceTypeList", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "min 1",
            quality: "F",

            details: "This is a list of device types and corresponding revisions declaring endpoint conformance (see " +
                "DeviceTypeStruct). At least one device type entry shall be present." +
                "\n" +
                "An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that " +
                "is in common for more than one device type in the DeviceTypeList shall be supported as a shared " +
                "cluster instance on the endpoint.",

            xref: { document: "core", section: "9.5.6.1" }
        },

        Field({ name: "entry", type: "DeviceTypeStruct" })
    ),

    Attribute(
        {
            name: "ServerList", id: 0x1, type: "list", access: "R V", conformance: "M", default: [],
            quality: "F",
            details: "This attribute shall list each cluster ID for the server clusters present on the endpoint instance.",
            xref: { document: "core", section: "9.5.6.2" }
        },

        Field({ name: "entry", type: "cluster-id" })
    ),

    Attribute(
        {
            name: "ClientList", id: 0x2, type: "list", access: "R V", conformance: "M", default: [],
            quality: "F",
            details: "This attribute shall list each cluster ID for the client clusters present on the endpoint instance.",
            xref: { document: "core", section: "9.5.6.3" }
        },

        Field({ name: "entry", type: "cluster-id" })
    ),

    Attribute(
        {
            name: "PartsList", id: 0x3, type: "list", access: "R V", conformance: "M", default: [],
            details: "This attribute indicates composition of the device type instance. Device type instance composition " +
                "shall include the endpoints in this list." +
                "\n" +
                "See Endpoint Composition for more information about which endpoints to include in this list.",
            xref: { document: "core", section: "9.5.6.4" }
        },

        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            name: "TagList", id: 0x4, type: "list", access: "R V", conformance: "TAGLIST", constraint: "1 to 6",
            quality: "F",

            details: "This attribute shall be used to disambiguate sibling endpoints in certain situations, as defined in " +
                "the Disambiguation section in the System Model specification. An example of such a situation might " +
                "be a device with two buttons, with this attribute being used to indicate which of the two endpoints " +
                "corresponds to the button on the left side." +
                "\n" +
                "It may also be used to provide information about an endpoint (e.g. the relative location of a " +
                "Temperature sensor in a Temperature Controlled Cabinet)." +
                "\n" +
                "  • A client SHOULD use these tags to convey disambiguation information and other relevant " +
                "    information to the user (e.g. showing it in a user interface), as appropriate." +
                "\n" +
                "  • A client SHOULD use these tags in its logic to make decisions, as appropriate." +
                "\n" +
                "For example, a client may identify which endpoint maps to a certain function, orientation or " +
                "labeling." +
                "\n" +
                "A client may use the Label field of each SemanticTagStruct, if present in each structure, to " +
                "indicate characteristics of an endpoint, or to augment what is provided in the TagID field of the " +
                "same structure.",

            xref: { document: "core", section: "9.5.6.5" }
        },

        Field({ name: "entry", type: "semtag" })
    ),

    Datatype(
        {
            name: "DeviceTypeStruct", type: "struct",
            details: "The device type and revision define endpoint conformance to a release of a device type definition. " +
                "See the Data Model specification for more information.",
            xref: { document: "core", section: "9.5.5.1" }
        },

        Field({
            name: "DeviceType", id: 0x0, type: "devtype-id", conformance: "M",
            details: "This shall indicate the device type definition. The endpoint shall conform to the device type " +
                "definition and cluster specifications required by the device type.",
            xref: { document: "core", section: "9.5.5.1.1" }
        }),

        Field({
            name: "Revision", id: 0x1, type: "uint16", conformance: "M", constraint: "min 1",
            details: "This is the implemented revision of the device type definition. The endpoint shall conform to this " +
                "revision of the device type.",
            xref: { document: "core", section: "9.5.5.1.2" }
        })
    )
);

MatterDefinition.children.push(Descriptor);
