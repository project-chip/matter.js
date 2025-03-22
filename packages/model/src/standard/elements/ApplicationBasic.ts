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

export const ApplicationBasic = Cluster(
    {
        name: "ApplicationBasic", id: 0x50d, classification: "application", pics: "APBSC",

        details: "This cluster provides information about a Content App running on a Video Player device which is " +
            "represented as an endpoint (see Device Type Library document)." +
            "\n" +
            "The cluster server for this cluster should be supported on each endpoint that represents a Content " +
            "App on a Video Player device. This cluster provides identification information about the Content App " +
            "such as vendor and product.",

        xref: { document: "cluster", section: "6.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute({
        name: "VendorName", id: 0x0, type: "string", access: "R V", conformance: "O", constraint: "max 32",
        quality: "F",
        details: "This attribute shall specify a human readable (displayable) name of the vendor for the Content App.",
        xref: { document: "cluster", section: "6.3.5.1" }
    }),

    Attribute({
        name: "VendorId", id: 0x1, type: "vendor-id", access: "R V", conformance: "O", quality: "F",
        details: "This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for " +
            "the Content App.",
        xref: { document: "cluster", section: "6.3.5.2" }
    }),

    Attribute({
        name: "ApplicationName", id: 0x2, type: "string", access: "R V", conformance: "M",
        constraint: "desc", quality: "F",
        details: "This attribute shall specify a human readable (displayable) name of the Content App assigned by the " +
            "vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 " +
            "bytes of UTF-8 characters.",
        xref: { document: "cluster", section: "6.3.5.3" }
    }),

    Attribute({
        name: "ProductId", id: 0x3, type: "uint16", access: "R V", conformance: "O", quality: "F",
        details: "This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific " +
            "Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, " +
            "then this would be the Product ID as specified by the vendor for the certification.",
        xref: { document: "cluster", section: "6.3.5.4" }
    }),

    Attribute({
        name: "Application", id: 0x4, type: "ApplicationStruct", access: "R V", conformance: "M",
        constraint: "desc", quality: "F",
        details: "This attribute shall specify a Content App which consists of an Application ID using a specified " +
            "catalog.",
        xref: { document: "cluster", section: "6.3.5.5" }
    }),

    Attribute({
        name: "Status", id: 0x5, type: "ApplicationStatusEnum", access: "R V", conformance: "M",
        constraint: "desc",
        details: "This attribute shall specify the current running status of the application.",
        xref: { document: "cluster", section: "6.3.5.6" }
    }),

    Attribute({
        name: "ApplicationVersion", id: 0x6, type: "string", access: "R V", conformance: "M",
        constraint: "max 32", quality: "F",
        details: "This attribute shall specify a human readable (displayable) version of the Content App assigned by " +
            "the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.",
        xref: { document: "cluster", section: "6.3.5.7" }
    }),

    Attribute(
        {
            name: "AllowedVendorList", id: 0x7, type: "list", access: "R A", conformance: "M", quality: "F",
            details: "This attribute is a list of vendor IDs. Each entry is a vendor-id.",
            xref: { document: "cluster", section: "6.3.5.8" }
        },
        Field({ name: "entry", type: "vendor-id" })
    ),

    Datatype(
        { name: "ApplicationStatusEnum", type: "enum8", xref: { document: "cluster", section: "6.3.4.1" } },
        Field({ name: "Stopped", id: 0x0, conformance: "M", description: "Application is not running." }),
        Field({
            name: "ActiveVisibleFocus", id: 0x1, conformance: "M",
            description: "Application is running, is visible to the user, and is the active target for input."
        }),
        Field({
            name: "ActiveHidden", id: 0x2, conformance: "M",
            description: "Application is running but not visible to the user."
        }),
        Field({
            name: "ActiveVisibleNotFocus", id: 0x3, conformance: "M",
            description: "Application is running and visible, but is not the active target for input."
        })
    ),

    Datatype(
        {
            name: "ApplicationStruct", type: "struct",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.3.4.2" }
        },

        Field({
            name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",

            details: "This field shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The " +
                "DIAL registry shall use value 0x0000." +
                "\n" +
                "It is assumed that Content App Platform providers (see Video Player Architecture section in " +
                "[MatterDevLib]) will have their own catalog vendor ID (set to their own Vendor ID) and will assign " +
                "an ApplicationID to each Content App.",

            xref: { document: "cluster", section: "6.3.4.2.1" }
        }),

        Field({
            name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
            details: "This field shall indicate the application identifier, expressed as a string, such as \"123456-5433\", " +
                "\"PruneVideo\" or \"Company X\". This field shall be unique within a catalog." +
                "\n" +
                "For the DIAL registry catalog, this value shall be the DIAL prefix.",
            xref: { document: "cluster", section: "6.3.4.2.2" }
        })
    )
);

MatterDefinition.children.push(ApplicationBasic);
