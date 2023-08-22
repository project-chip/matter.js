/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Descriptor", id: 0x1d, classification: "endpoint", description: "Descriptor",

    details: "NOTE The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
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

    xref: { document: "core", section: "9.5" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "DeviceTypeList", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "min 1", quality: "F",

            details: "This is a list of device types and corresponding revisions declaring endpoint conformance (see " +
                "DeviceTypeStruct). At least one device type entry shall be present." +
                "\n" +
                "An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that " +
                "is in common for more than one device type in the DeviceTypeList shall be supported as a shared " +
                "cluster instance on the endpoint.",

            xref: { document: "core", section: "9.5.5.1" },
            children: [{ tag: "datatype", name: "entry", type: "DeviceTypeStruct" }]
        },

        {
            tag: "attribute", name: "ServerList", id: 0x1, type: "list", access: "R V", conformance: "M",
            default: [], quality: "F",
            details: "This attribute shall list each cluster ID for the server clusters present on the endpoint instance.",
            xref: { document: "core", section: "9.5.5.2" },
            children: [{ tag: "datatype", name: "entry", type: "cluster-id" }]
        },

        {
            tag: "attribute", name: "ClientList", id: 0x2, type: "list", access: "R V", conformance: "M",
            default: [], quality: "F",
            details: "This attribute shall list each cluster ID for the client clusters present on the endpoint instance.",
            xref: { document: "core", section: "9.5.5.3" },
            children: [{ tag: "datatype", name: "entry", type: "cluster-id" }]
        },

        {
            tag: "attribute", name: "PartsList", id: 0x3, type: "list", access: "R V", conformance: "M",
            default: [],
            details: "This attribute indicates composition of the device type instance. Device type instance composition " +
                "shall include the endpoints in this list. See Endpoint Composition for more information which " +
                "endpoints to include in this list.",
            xref: { document: "core", section: "9.5.5.4" },
            children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
        },

        {
            tag: "datatype", name: "DeviceTypeStruct", type: "struct", conformance: "M",
            details: "The device type and revision define endpoint conformance to a release of a device type definition. " +
                "See the Data Model specification for more information.",
            xref: { document: "core", section: "9.5.4.1" },

            children: [
                {
                    tag: "datatype", name: "DeviceType", id: 0x0, type: "devtype-id", conformance: "M",
                    details: "This shall indicate the device type definition. The endpoint shall conform to the device type " +
                        "definition and cluster specifications required by the device type.",
                    xref: { document: "core", section: "9.5.4.1.1" }
                },

                {
                    tag: "datatype", name: "Revision", id: 0x1, type: "uint16", conformance: "M", constraint: "min 1",
                    details: "This is the implemented revision of the device type definition. The endpoint shall conform to this " +
                        "revision of the device type.",
                    xref: { document: "core", section: "9.5.4.1.2" }
                }
            ]
        }
    ]
});
