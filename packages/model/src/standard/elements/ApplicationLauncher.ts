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

export const ApplicationLauncher = Cluster(
    {
        name: "ApplicationLauncher", id: 0x50c, classification: "application", pics: "APPLAUNCHER",

        details: "This cluster provides an interface for launching applications on a Video Player device such as a TV." +
            "\n" +
            "This cluster is supported on endpoints that can launch Applications, such as a Casting Video Player " +
            "device with a Content App Platform. It supports identifying an Application by global identifier from " +
            "a given catalog, and launching it. It also supports tracking the currently in-focus Application." +
            "\n" +
            "Depending on the support for the Application Platform feature, the cluster can either support " +
            "launching the application corresponding to the endpoint on which the cluster is supported (AP " +
            "feature not supported) or it can support launching any application (AP feature supported).",

        xref: { document: "cluster", section: "6.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "6.4.4" } },
        Field({
            name: "AP", constraint: "0", description: "ApplicationPlatform",
            details: "Support for attributes and commands required for endpoint to support launching any application " +
                "within the supported application catalogs"
        })
    ),

    Attribute(
        {
            name: "CatalogList", id: 0x0, type: "list", access: "R V", conformance: "AP", quality: "N",

            details: "This attribute shall specify the list of supported application catalogs, where each entry in the " +
                "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use " +
                "value 0x0000." +
                "\n" +
                "It is expected that Content App Platform providers will have their own catalog vendor ID (set to " +
                "their own Vendor ID) and will assign an ApplicationID to each Content App.",

            xref: { document: "cluster", section: "6.4.6.1" }
        },

        Field({ name: "entry", type: "uint16" })
    ),

    Attribute({
        name: "CurrentApp", id: 0x1, type: "ApplicationEPStruct", access: "R V", conformance: "O",
        constraint: "desc", default: null, quality: "X",
        details: "This attribute shall specify the current in-focus application, identified using an Application ID, " +
            "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
            "Content App endpoint. A null shall be used to indicate there is no current in-focus application.",
        xref: { document: "cluster", section: "6.4.6.2" }
    }),

    Command(
        {
            name: "LaunchApp", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall launch the application with optional data. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint shall launch and bring to foreground the requisite application if the application is " +
                "not already launched and in foreground. The Status attribute shall be updated to ActiveVisibleFocus " +
                "on the Application Basic cluster of the Endpoint corresponding to the launched application. The " +
                "Status attribute shall be updated on any other application whose Status may have changed as a result " +
                "of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new " +
                "application in the foreground." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.7.1" }
        },

        Field({
            name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
            details: "This field shall specify the Application to launch.",
            xref: { document: "cluster", section: "6.4.7.1.1" }
        }),

        Field({
            name: "Data", id: 0x1, type: "octstr", conformance: "O",

            details: "This field shall specify optional app-specific data to be sent to the app." +
                "\n" +
                "NOTE" +
                "\n" +
                "This format and meaning of this value is proprietary and outside the specification. It provides a " +
                "transition path for device makers that use other protocols (like DIAL) which allow for proprietary " +
                "data. Apps that are not yet Matter aware can be launched via Matter, while retaining the existing " +
                "ability to launch with proprietary data.",

            xref: { document: "cluster", section: "6.4.7.1.2" }
        })
    ),

    Command(
        {
            name: "StopApp", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall stop the application if it is running. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The Status attribute shall be updated to Stopped on the Application Basic cluster of the Endpoint " +
                "corresponding to the stopped application. The Status attribute shall be updated on any other " +
                "application whose Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.7.2" }
        },

        Field({
            name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
            details: "This field shall specify the Application to stop.",
            xref: { document: "cluster", section: "6.4.7.2.1" }
        })
    ),

    Command(
        {
            name: "HideApp", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall hide the application. The application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint may decide to stop the application based on manufacturer specific behavior or resource " +
                "constraints if any. The Status attribute shall be updated to ActiveHidden or Stopped, depending on " +
                "the action taken, on the Application Basic cluster of the Endpoint corresponding to the application " +
                "on which the action was taken. The Status attribute shall be updated on any other application whose " +
                "Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.7.3" }
        },

        Field({
            name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
            details: "This field shall specify the Application to hide.",
            xref: { document: "cluster", section: "6.4.7.3.1" }
        })
    ),

    Command(
        {
            name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
            details: "This command shall be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: { document: "cluster", section: "6.4.7.4" }
        },
        Field({
            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
            details: "This field shall indicate the status of the command which resulted in this response.",
            xref: { document: "cluster", section: "6.4.7.4.1" }
        }),
        Field({
            name: "Data", id: 0x1, type: "octstr", conformance: "O",
            details: "This field shall specify Optional app-specific data.",
            xref: { document: "cluster", section: "6.4.7.4.2" }
        })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8", xref: { document: "cluster", section: "6.4.5.1" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" }),
        Field({ name: "AppNotAvailable", id: 0x1, conformance: "M", description: "Requested app is not available" }),
        Field({ name: "SystemBusy", id: 0x2, conformance: "M", description: "Video platform unable to honor command" }),
        Field({
            name: "PendingUserApproval", id: 0x3, conformance: "M",
            description: "User approval for app download is pending"
        }),
        Field({ name: "Downloading", id: 0x4, conformance: "M", description: "Downloading the requested app" }),
        Field({ name: "Installing", id: 0x5, conformance: "M", description: "Installing the requested app" })
    ),

    Datatype(
        {
            name: "ApplicationStruct", type: "struct",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.4.5.2" }
        },

        Field({
            name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use " +
                "value 0x0000." +
                "\n" +
                "Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) " +
                "and will assign an ApplicationID to each Content App.",
            xref: { document: "cluster", section: "6.4.5.2.1" }
        }),

        Field({
            name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
            details: "This field shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                "\"Company X\". This field shall be unique within a catalog." +
                "\n" +
                "For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).",
            xref: { document: "cluster", section: "6.4.5.2.2" }
        })
    ),

    Datatype(
        {
            name: "ApplicationEPStruct", type: "struct",
            details: "This specifies an app along with its corresponding endpoint.",
            xref: { document: "cluster", section: "6.4.5.3" }
        },
        Field({ name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "M" }),
        Field({ name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "O" })
    )
);

MatterDefinition.children.push(ApplicationLauncher);
