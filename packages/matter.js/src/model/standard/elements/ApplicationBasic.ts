/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ApplicationBasic", id: 0x50d, classification: "application",
    description: "Application Basic",
    details: "This cluster provides information about a Content App running on a Video Player device which is " +
        "represented as an endpoint (see Device Type Library document).",
    xref: { document: "cluster", section: "6.3" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "VendorName", id: 0x0, type: "string", access: "R V", conformance: "O",
            constraint: "max 32", default: "", quality: "F",
            details: "This attribute shall specify a human readable (displayable) name of the vendor for the Content App.",
            xref: { document: "cluster", section: "6.3.3.1" }
        },

        {
            tag: "attribute", name: "VendorId", id: 0x1, type: "vendor-id", access: "R V", conformance: "O",
            default: 0, quality: "F",
            details: "This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID " +
                "for the Content App.",
            xref: { document: "cluster", section: "6.3.3.2" }
        },

        {
            tag: "attribute", name: "ApplicationName", id: 0x2, type: "string", access: "R V", conformance: "M",
            constraint: "max 32", quality: "F",
            details: "This attribute shall specify a human readable (displayable) name of the Content App assigned by the " +
                "vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 " +
                "bytes of UTF-8 characters.",
            xref: { document: "cluster", section: "6.3.3.3" }
        },

        {
            tag: "attribute", name: "ProductId", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            default: 0, quality: "F",
            details: "This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a " +
                "specific Content App made by them. If the Content App is certified by the Connectivity Standards " +
                "Alliance, then this would be the Product ID as specified by the vendor for the certification.",
            xref: { document: "cluster", section: "6.3.3.4" }
        },

        {
            tag: "attribute", name: "Application", id: 0x4, type: "ApplicationStruct", access: "R V",
            conformance: "M", constraint: "desc", quality: "F",
            details: "This attribute shall specify a Content App which consists of an Application ID using a specified " +
                "catalog.",
            xref: { document: "cluster", section: "6.3.3.5" }
        },

        {
            tag: "attribute", name: "Status", id: 0x5, type: "ApplicationStatusEnum", access: "R V",
            conformance: "M", constraint: "desc", default: 1,
            details: "This attribute shall specify the current running status of the application.",
            xref: { document: "cluster", section: "6.3.3.6" }
        },

        {
            tag: "attribute", name: "ApplicationVersion", id: 0x6, type: "string", access: "R V",
            conformance: "M", constraint: "max 32", quality: "F",
            details: "This attribute shall specify a human readable (displayable) version of the Content App assigned by " +
                "the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.",
            xref: { document: "cluster", section: "6.3.3.7" }
        },

        {
            tag: "attribute", name: "AllowedVendorList", id: 0x7, type: "list", access: "R A", conformance: "M",
            constraint: "None", quality: "F",
            details: "This is a list of vendor IDs. Each entry is a vendor-id.",
            xref: { document: "cluster", section: "6.3.3.8" },
            children: [{ tag: "datatype", name: "entry", type: "vendor-id" }]
        },

        {
            tag: "datatype", name: "ApplicationStruct", type: "struct", conformance: "M",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.3.4.1" },

            children: [
                {
                    tag: "datatype", name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",

                    details: "This shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL " +
                        "registry shall use value 0x0000." +
                        "\n" +
                        "It is assumed that Content App Platform providers (see Video Player Architecture section in " +
                        "[MatterDevLib] ) will have their own catalog vendor ID (set to their own Vendor ID) and will assign " +
                        "an ApplicationID to each Content App.",

                    xref: { document: "cluster", section: "6.3.4.1.1" }
                },

                {
                    tag: "datatype", name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
                    details: "This shall indicate the application identifier, expressed as a string, such as \"123456-5433\", " +
                        "\"PruneVideo\" or \"Company X\". This field shall be unique within a catalog." +
                        "\n" +
                        "For the DIAL registry catalog, this value shall be the DIAL prefix.",
                    xref: { document: "cluster", section: "6.3.4.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationStatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.3.4.2" },

            children: [
                {
                    tag: "datatype", name: "Stopped", id: 0x0, conformance: "M",
                    description: "Application is not running."
                },
                {
                    tag: "datatype", name: "ActiveVisibleFocus", id: 0x1, conformance: "M",
                    description: "Application is running, is visible to the user, and is the active target for input."
                },
                {
                    tag: "datatype", name: "ActiveHidden", id: 0x2, conformance: "M",
                    description: "Application is running but not visible to the user."
                },
                {
                    tag: "datatype", name: "ActiveVisibleNotFocus", id: 0x3, conformance: "M",
                    description: "Application is running and visible, but is not the active target for input."
                }
            ]
        }
    ]
});
