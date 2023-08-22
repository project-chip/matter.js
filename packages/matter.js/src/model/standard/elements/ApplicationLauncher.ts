/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ApplicationLauncher", id: 0x50c, classification: "application",
    description: "Application Launcher",
    details: "This cluster provides an interface for launching applications on a Video Player device such as a TV.",
    xref: { document: "cluster", section: "6.4" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "6.4.2" },
            children: [{
                tag: "datatype", name: "AP", constraint: "0", description: "ApplicationPlatform",
                details: "Support for attributes and commands required for endpoint to support launching any application " +
                    "within the supported application catalogs"
            }]
        },

        {
            tag: "attribute", name: "CatalogList", id: 0x0, type: "list", access: "R V", conformance: "AP",
            constraint: "None", quality: "N",

            details: "This attribute shall specify the list of supported application catalogs, where each entry in the " +
                "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use " +
                "value 0x0000." +
                "\n" +
                "It is expected that Content App Platform providers will have their own catalog vendor ID (set to " +
                "their own Vendor ID) and will assign an ApplicationID to each Content App.",

            xref: { document: "cluster", section: "6.4.3.1" },
            children: [{ tag: "datatype", name: "entry", type: "uint16" }]
        },

        {
            tag: "attribute", name: "CurrentApp", id: 0x1, type: "ApplicationEPStruct", access: "R V",
            conformance: "O", constraint: "desc", default: null, quality: "X",
            details: "This attribute shall specify the current in-focus application, identified using an Application ID, " +
                "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
                "Content App endpoint. A null shall be used to indicate there is no current in-focus application.",
            xref: { document: "cluster", section: "6.4.3.2" }
        },

        {
            tag: "command", name: "LaunchApp", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall launch the application with optional data. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint shall launch and bring to foreground the requisite application if the application is " +
                "not already launched and in foreground. The Status attribute shall be updated to " +
                "ACTIVE_VISIBLE_FOCUS on the Application Basic cluster of the Endpoint corresponding to the launched " +
                "application. The Status attribute shall be updated on any other application whose Status may have " +
                "changed as a result of this command. The CurrentApp attribute, if supported, shall be updated to " +
                "reflect the new application in the foreground." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.4.1" },

            children: [
                {
                    tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                    constraint: "desc",
                    details: "This field shall specify the Application to launch.",
                    xref: { document: "cluster", section: "6.4.4.1.1" }
                },

                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O",

                    details: "This field shall specify optional app-specific data to be sent to the app." +
                        "\n" +
                        "Note: This format and meaning of this value is proprietary and outside the specification. It " +
                        "provides a transition path for device makers that use other protocols (like DIAL) which allow for " +
                        "proprietary data. Apps that are not yet Matter aware can be launched via Matter, while retaining " +
                        "the existing ability to launch with proprietary data.",

                    xref: { document: "cluster", section: "6.4.4.1.2" }
                }
            ]
        },

        {
            tag: "command", name: "StopApp", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall stop the application if it is running. The " +
                "application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint " +
                "corresponding to the stopped application. The Status attribute shall be updated on any other " +
                "application whose Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.4.2" },

            children: [{
                tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                constraint: "desc",
                details: "This field shall specify the Application to stop.",
                xref: { document: "cluster", section: "6.4.4.2.1" }
            }]
        },

        {
            tag: "command", name: "HideApp", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",

            details: "Upon receipt of this command, the server shall hide the application. The application shall be either" +
                "\n" +
                "  • the specified application, if the Application Platform feature is supported;" +
                "\n" +
                "  • otherwise the application corresponding to the endpoint." +
                "\n" +
                "The endpoint may decide to stop the application based on manufacturer specific behavior or resource " +
                "constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on " +
                "the action taken, on the Application Basic cluster of the Endpoint corresponding to the application " +
                "on which the action was taken. The Status attribute shall be updated on any other application whose " +
                "Status may have changed as a result of this command." +
                "\n" +
                "This command returns a Launcher Response.",

            xref: { document: "cluster", section: "6.4.4.3" },

            children: [{
                tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                constraint: "desc",
                details: "This field shall specify the Application to hide.",
                xref: { document: "cluster", section: "6.4.4.3.1" }
            }]
        },

        {
            tag: "command", name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
            details: "This command shall be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: { document: "cluster", section: "6.4.4.4" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                    details: "This shall indicate the status of the command which resulted in this response.",
                    xref: { document: "cluster", section: "6.4.4.4.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O",
                    details: "This shall specify Optional app-specific data.",
                    xref: { document: "cluster", section: "6.4.4.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "6.4.5.1" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded" },
                {
                    tag: "datatype", name: "AppNotAvailable", id: 0x1, conformance: "M",
                    description: "Requested app is not available."
                },
                {
                    tag: "datatype", name: "SystemBusy", id: 0x2, conformance: "M",
                    description: "Video platform unable to honor command."
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationStruct", type: "struct", conformance: "M",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.4.5.2" },

            children: [
                {
                    tag: "datatype", name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
                    details: "This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value " +
                        "0x0000." +
                        "\n" +
                        "Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) " +
                        "and will assign an ApplicationID to each Content App.",
                    xref: { document: "cluster", section: "6.4.5.2.1" }
                },

                {
                    tag: "datatype", name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
                    details: "This shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                        "\"Company X\". This field shall be unique within a catalog." +
                        "\n" +
                        "For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).",
                    xref: { document: "cluster", section: "6.4.5.2.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationEPStruct", type: "struct", conformance: "M",
            details: "This specifies an app along with its corresponding endpoint.",
            xref: { document: "cluster", section: "6.4.5.3" },
            children: [
                { tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "M" },
                { tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "O" }
            ]
        }
    ]
});
