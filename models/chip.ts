/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterElement } from "#matter.js/model/index.js";

export const ChipMatter: MatterElement = {
    tag: "matter", name: "ChipMatter",

    children: [
        {
            tag: "cluster", name: "AccessControl", id: 0x1f, description: "Access Control",
            details: "The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which " +
                "codifies the rules used to manage and enforce Access Control for the Node's endpoints and their " +
                "associated cluster instances.",

            children: [
                {
                    tag: "attribute", name: "Acl", id: 0x0, type: "list", access: "RW A", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "AccessControlEntryStruct" }]
                },
                {
                    tag: "attribute", name: "Extension", id: 0x1, type: "list", access: "RW A", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "AccessControlExtensionStruct" }]
                },
                {
                    tag: "attribute", name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M"
                },
                {
                    tag: "attribute", name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16", access: "R V",
                    conformance: "M"
                },
                {
                    tag: "attribute", name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16", access: "R V",
                    conformance: "M"
                },

                {
                    tag: "event", name: "AccessControlEntryChanged", id: 0x0, access: "R S A", conformance: "M",
                    priority: "info",

                    children: [
                        { tag: "datatype", name: "AdminNodeId", id: 0x1, type: "node-id", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "AdminPasscodeId", id: 0x2, type: "uint16", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "LatestValue", id: 0x4, type: "AccessControlEntryStruct", conformance: "M",
                            quality: "X"
                        }
                    ]
                },

                {
                    tag: "event", name: "AccessControlExtensionChanged", id: 0x1, access: "R S A", conformance: "M",
                    priority: "info",

                    children: [
                        { tag: "datatype", name: "AdminNodeId", id: 0x1, type: "node-id", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "AdminPasscodeId", id: 0x2, type: "uint16", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "LatestValue", id: 0x4, type: "AccessControlExtensionStruct",
                            conformance: "M", quality: "X"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryStruct", type: "struct", access: "R F", conformance: "M",

                    children: [
                        {
                            tag: "datatype", name: "Privilege", id: 0x1, type: "AccessControlEntryPrivilegeEnum", access: "R S",
                            conformance: "M"
                        },
                        {
                            tag: "datatype", name: "AuthMode", id: 0x2, type: "AccessControlEntryAuthModeEnum", access: "R S",
                            conformance: "M"
                        },
                        {
                            tag: "datatype", name: "Subjects", id: 0x3, type: "list", access: "R S", conformance: "M",
                            quality: "X",
                            children: [{ tag: "datatype", name: "entry", type: "uint64" }]
                        },
                        {
                            tag: "datatype", name: "Targets", id: 0x4, type: "list", access: "R S", conformance: "M",
                            quality: "X",
                            children: [{ tag: "datatype", name: "entry", type: "Target" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryPrivilegeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "View", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "ProxyView", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Operate", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Manage", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Administer", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryAuthModeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Pase", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Case", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Group", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "Target", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Cluster", id: 0x0, type: "cluster-id", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "DeviceType", id: 0x2, type: "devtype-id", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlExtensionStruct", type: "struct", access: "R F",
                    conformance: "M",
                    children: [
                        { tag: "datatype", name: "Data", id: 0x1, type: "octstr", access: "R S", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ChangeTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Changed", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Added", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Removed", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AccountLogin", id: 0x50e, description: "Account Login",
            details: "This cluster provides commands that facilitate user account login on a Content App or a node. For " +
                "example, a Content App running on a Video Player device, which is represented as an endpoint (see " +
                "[TV Architecture]), can use this cluster to help make the user account on the Content App match the " +
                "user account on the Client.",

            children: [
                {
                    tag: "command", name: "GetSetupPin", id: 0x0, conformance: "M", direction: "request",
                    response: "GetSetupPinResponse",
                    children: [{
                        tag: "datatype", name: "TempAccountIdentifier", type: "string", conformance: "M",
                        constraint: "max 100"
                    }]
                },

                {
                    tag: "command", name: "Login", id: 0x2, conformance: "M", direction: "request",

                    children: [
                        {
                            tag: "datatype", name: "TempAccountIdentifier", type: "string", conformance: "M",
                            constraint: "max 100"
                        },
                        { tag: "datatype", name: "SetupPin", type: "string", conformance: "M" }
                    ]
                },

                { tag: "command", name: "Logout", id: 0x3, conformance: "M", direction: "request" },
                {
                    tag: "command", name: "GetSetupPinResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [{ tag: "datatype", name: "SetupPin", type: "string", conformance: "M" }]
                }
            ]
        },

        {
            tag: "cluster", name: "Actions", id: 0x25, description: "Actions",
            details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to " +
                "expose action information.",

            children: [
                {
                    tag: "attribute", name: "ActionList", id: 0x0, type: "list", conformance: "M",
                    constraint: "max 256",
                    children: [{ tag: "datatype", name: "entry", type: "ActionStruct" }]
                },
                {
                    tag: "attribute", name: "EndpointList", id: 0x1, type: "list", conformance: "M",
                    constraint: "max 256",
                    children: [{ tag: "datatype", name: "entry", type: "EndpointListStruct" }]
                },
                { tag: "attribute", name: "SetupUrl", id: 0x2, type: "string", conformance: "O", constraint: "max 512" },

                {
                    tag: "command", name: "InstantAction", id: 0x0, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "InstantActionWithTransition", id: 0x1, conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StartAction", id: 0x2, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "StartActionWithDuration", id: 0x3, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "Duration", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StopAction", id: 0x4, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "PauseAction", id: 0x5, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "PauseActionWithDuration", id: 0x6, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "Duration", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ResumeAction", id: 0x7, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "EnableAction", id: 0x8, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "EnableActionWithDuration", id: 0x9, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "Duration", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "DisableAction", id: 0xa, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "DisableActionWithDuration", id: 0xb, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "Duration", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "StateChanged", id: 0x0, conformance: "M", priority: "info",
                    children: [
                        { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "ActionFailed", id: 0x1, conformance: "M", priority: "info",

                    children: [
                        { tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M" },
                        { tag: "datatype", name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ActionStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ActionId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" },
                        { tag: "datatype", name: "Type", type: "ActionTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "EndpointListId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "SupportedCommands", type: "CommandBits", conformance: "M" },
                        { tag: "datatype", name: "State", type: "ActionStateEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ActionTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Scene", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Sequence", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Automation", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Exception", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Notification", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Alarm", id: 0x6, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CommandBits", type: "map16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "InstantAction", constraint: "0" },
                        { tag: "datatype", name: "InstantActionWithTransition", constraint: "1" },
                        { tag: "datatype", name: "StartAction", constraint: "2" },
                        { tag: "datatype", name: "StartActionWithDuration", constraint: "3" },
                        { tag: "datatype", name: "StopAction", constraint: "4" },
                        { tag: "datatype", name: "PauseAction", constraint: "5" },
                        { tag: "datatype", name: "PauseActionWithDuration", constraint: "6" },
                        { tag: "datatype", name: "ResumeAction", constraint: "7" },
                        { tag: "datatype", name: "EnableAction", constraint: "8" },
                        { tag: "datatype", name: "EnableActionWithDuration", constraint: "9" },
                        { tag: "datatype", name: "DisableAction", constraint: "10" },
                        { tag: "datatype", name: "DisableActionWithDuration", constraint: "11" }
                    ]
                },

                {
                    tag: "datatype", name: "ActionStateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Inactive", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Active", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Paused", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Disabled", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "EndpointListStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "EndpointListId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" },
                        { tag: "datatype", name: "Type", type: "EndpointListTypeEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "Endpoints", type: "list", conformance: "M", constraint: "max 256",
                            children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EndpointListTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Room", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Zone", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ActionErrorEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Interrupted", id: 0x1, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AdministratorCommissioning", id: 0x3c,
            description: "Administrator Commissioning",
            details: "Commands to trigger a Node to allow a new Administrator to commission it.",

            children: [
                { tag: "attribute", name: "WindowStatus", id: 0x0, type: "CommissioningWindowStatusEnum", conformance: "M" },
                { tag: "attribute", name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", conformance: "M", quality: "X" },
                { tag: "attribute", name: "AdminVendorId", id: 0x2, type: "uint16", conformance: "M", quality: "X" },

                {
                    tag: "command", name: "OpenCommissioningWindow", id: 0x0, access: "R A", conformance: "M",
                    direction: "request",

                    children: [
                        { tag: "datatype", name: "CommissioningTimeout", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "PakePasscodeVerifier", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Discriminator", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Iterations", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "Salt", type: "octstr", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "OpenBasicCommissioningWindow", id: 0x1, access: "R A", conformance: "O",
                    direction: "request",
                    children: [{ tag: "datatype", name: "CommissioningTimeout", type: "uint16", conformance: "M" }]
                },
                {
                    tag: "command", name: "RevokeCommissioning", id: 0x2, access: "R A", conformance: "M",
                    direction: "request"
                },

                {
                    tag: "datatype", name: "CommissioningWindowStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "WindowNotOpen", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "EnhancedWindowOpen", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "BasicWindowOpen", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ApplicationBasic", id: 0x50d, description: "Application Basic",
            details: "This cluster provides information about an application running on a TV or media player device which " +
                "is represented as an endpoint.",

            children: [
                {
                    tag: "attribute", name: "ApplicationVendorName", id: 0x0, type: "string", conformance: "O",
                    constraint: "max 32", default: ""
                },
                { tag: "attribute", name: "ApplicationVendorId", id: 0x1, type: "vendor-id", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "ApplicationName", id: 0x2, type: "string", conformance: "M",
                    constraint: "max 32"
                },
                { tag: "attribute", name: "ApplicationProductId", id: 0x3, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "ApplicationApp", id: 0x4, type: "ApplicationStruct", conformance: "M" },
                {
                    tag: "attribute", name: "ApplicationStatus", id: 0x5, type: "ApplicationStatusEnum",
                    conformance: "M", default: 1
                },
                {
                    tag: "attribute", name: "ApplicationVersion", id: 0x6, type: "string", conformance: "M",
                    constraint: "max 32"
                },
                {
                    tag: "attribute", name: "ApplicationAllowedVendorList", id: 0x7, type: "list", conformance: "M",
                    constraint: "max 32",
                    children: [{ tag: "datatype", name: "entry", type: "vendor-id" }]
                },

                {
                    tag: "datatype", name: "ApplicationStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "CatalogVendorId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "ApplicationId", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStatusEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Stopped", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "ActiveVisibleFocus", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "ActiveHidden", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ActiveVisibleNotFocus", id: 0x3, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ApplicationLauncher", id: 0x50c, description: "Application Launcher",
            details: "This cluster provides an interface for launching content on a media player device such as a TV or " +
                "Speaker.",

            children: [
                {
                    tag: "attribute", name: "ApplicationLauncherList", id: 0x0, type: "list", conformance: "O",
                    constraint: "max 254", quality: "P",
                    children: [{ tag: "datatype", name: "entry", type: "uint16" }]
                },
                {
                    tag: "attribute", name: "ApplicationLauncherCurrentApp", id: 0x1, type: "ApplicationEpStruct",
                    access: "RW", conformance: "O", default: null, quality: "X"
                },

                {
                    tag: "command", name: "LaunchApp", id: 0x0, conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    children: [
                        { tag: "datatype", name: "Application", type: "ApplicationStruct", conformance: "O" },
                        { tag: "datatype", name: "Data", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "StopApp", id: 0x1, conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    children: [{ tag: "datatype", name: "Application", type: "ApplicationStruct", conformance: "O" }]
                },
                {
                    tag: "command", name: "HideApp", id: 0x2, conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    children: [{ tag: "datatype", name: "Application", type: "ApplicationStruct", conformance: "O" }]
                },

                {
                    tag: "command", name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "ApplicationLauncherStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationEpStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Application", type: "ApplicationStruct", conformance: "M" },
                        { tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "CatalogVendorId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "ApplicationId", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationLauncherStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "AppNotAvailable", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "SystemBusy", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AudioOutput", id: 0x50b, description: "Audio Output",
            details: "This cluster provides an interface for controlling the Output on a media device such as a TV.",

            children: [
                {
                    tag: "attribute", name: "AudioOutputList", id: 0x0, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "OutputInfoStruct" }]
                },
                { tag: "attribute", name: "AudioOutputCurrentOutput", id: 0x1, type: "uint8", conformance: "O", default: 0 },
                {
                    tag: "command", name: "SelectOutput", id: 0x0, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "Index", type: "uint8", conformance: "M" }]
                },

                {
                    tag: "command", name: "RenameOutput", id: 0x1, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "Index", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OutputInfoStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Index", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "OutputType", type: "OutputTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" }
                    ]
                },

                {
                    tag: "datatype", name: "OutputTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Hdmi", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Bt", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Optical", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Headphone", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Internal", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Other", id: 0x5, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BallastConfiguration", id: 0x301, description: "Ballast Configuration",
            details: "Attributes and commands for configuring a lighting ballast.",

            children: [
                {
                    tag: "attribute", name: "PhysicalMinLevel", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "1 to 254", default: 1
                },
                {
                    tag: "attribute", name: "PhysicalMaxLevel", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "1 to 254", default: 0
                },

                {
                    tag: "attribute", name: "BallastStatus", id: 0x2, type: "map8", conformance: "O", default: 0,
                    children: [
                        { tag: "datatype", name: "NonOperational", constraint: "0" },
                        { tag: "datatype", name: "LampNotInSocket", constraint: "1" }
                    ]
                },

                {
                    tag: "attribute", name: "MinLevel", id: 0x10, type: "uint8", access: "RW", conformance: "M",
                    constraint: "1 to 254", default: 1
                },
                {
                    tag: "attribute", name: "MaxLevel", id: 0x11, type: "uint8", access: "RW", conformance: "M",
                    constraint: "1 to 254", default: 0
                },
                {
                    tag: "attribute", name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW",
                    conformance: "O", constraint: "min 100", default: 0, quality: "X"
                },
                { tag: "attribute", name: "LampQuantity", id: 0x20, type: "uint8", conformance: "M" },
                {
                    tag: "attribute", name: "LampType", id: 0x30, type: "string", access: "RW", conformance: "O",
                    constraint: "max 16"
                },
                {
                    tag: "attribute", name: "LampManufacturer", id: 0x31, type: "string", access: "RW",
                    conformance: "O", constraint: "max 16"
                },
                {
                    tag: "attribute", name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "LampAlarmMode", id: 0x34, type: "map8", access: "RW", conformance: "O",
                    default: 0,
                    children: [{ tag: "datatype", name: "lampBurnHours", constraint: "0" }]
                },
                {
                    tag: "attribute", name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW",
                    conformance: "O", default: 0, quality: "X"
                }
            ]
        },

        {
            tag: "cluster", name: "BasicInformation", id: 0x28, description: "Basic Information",
            singleton: true,
            details: "This cluster provides attributes and events for determining basic information about Nodes, which " +
                "supports both Commissioning and operational determination of Node characteristics, such as Vendor " +
                "ID, Product ID and serial number, which apply to the whole Node. Also allows setting user device " +
                "information such as location.",

            children: [
                { tag: "attribute", name: "DataModelRevision", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "attribute", name: "VendorName", id: 0x1, type: "string", conformance: "M", constraint: "max 32" },
                { tag: "attribute", name: "VendorId", id: 0x2, type: "vendor-id", conformance: "M" },
                { tag: "attribute", name: "ProductName", id: 0x3, type: "string", conformance: "M", constraint: "max 32" },
                { tag: "attribute", name: "ProductId", id: 0x4, type: "uint16", conformance: "M" },
                {
                    tag: "attribute", name: "NodeLabel", id: 0x5, type: "string", access: "RW VM", conformance: "M",
                    constraint: "max 32", default: ""
                },
                {
                    tag: "attribute", name: "Location", id: 0x6, type: "string", access: "RW VA", conformance: "M",
                    constraint: "max 2", default: "XX"
                },
                { tag: "attribute", name: "HardwareVersion", id: 0x7, type: "uint16", conformance: "M", default: 0 },
                {
                    tag: "attribute", name: "HardwareVersionString", id: 0x8, type: "string", conformance: "M",
                    constraint: "max 64"
                },
                { tag: "attribute", name: "SoftwareVersion", id: 0x9, type: "uint32", conformance: "M", default: 0 },
                {
                    tag: "attribute", name: "SoftwareVersionString", id: 0xa, type: "string", conformance: "M",
                    constraint: "max 64"
                },
                {
                    tag: "attribute", name: "ManufacturingDate", id: 0xb, type: "string", conformance: "O",
                    constraint: "max 16"
                },
                { tag: "attribute", name: "PartNumber", id: 0xc, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "ProductUrl", id: 0xd, type: "string", conformance: "O", constraint: "max 256" },
                { tag: "attribute", name: "ProductLabel", id: 0xe, type: "string", conformance: "O", constraint: "max 64" },
                { tag: "attribute", name: "SerialNumber", id: 0xf, type: "string", conformance: "O", constraint: "max 32" },
                {
                    tag: "attribute", name: "LocalConfigDisabled", id: 0x10, type: "bool", access: "RW VM",
                    conformance: "O", default: true
                },
                { tag: "attribute", name: "Reachable", id: 0x11, type: "bool", conformance: "O", default: true },
                { tag: "attribute", name: "UniqueId", id: 0x12, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct", conformance: "M" },
                { tag: "attribute", name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct", conformance: "O" },
                {
                    tag: "event", name: "StartUp", id: 0x0, conformance: "M", priority: "critical",
                    children: [{ tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }]
                },
                { tag: "event", name: "ShutDown", id: 0x1, conformance: "O", priority: "critical" },
                {
                    tag: "event", name: "Leave", id: 0x2, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M" }]
                },
                {
                    tag: "event", name: "ReachableChanged", id: 0x3, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "CapabilityMinimaStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ProductAppearanceStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Finish", id: 0x0, type: "ProductFinishEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "PrimaryColor", id: 0x1, type: "ColorEnum", conformance: "M", quality: "X"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductFinishEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Matte", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Satin", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Polished", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Rugged", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Fabric", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ColorEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Black", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Navy", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Green", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Teal", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Maroon", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Purple", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Olive", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Gray", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Blue", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Lime", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Aqua", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "Red", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "Fuchsia", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "Yellow", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "White", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "Nickel", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "Chrome", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "Brass", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "Copper", id: 0x12, conformance: "M" },
                        { tag: "datatype", name: "Silver", id: 0x13, conformance: "M" },
                        { tag: "datatype", name: "Gold", id: 0x14, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Binding", id: 0x1e, description: "Binding",
            details: "The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
                "supporting the binding table.",

            children: [
                {
                    tag: "attribute", name: "BindingList", id: 0x0, type: "list", access: "RW", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "TargetStruct" }]
                },

                {
                    tag: "datatype", name: "TargetStruct", type: "struct", access: "R F", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Node", id: 0x1, type: "node-id", conformance: "O" },
                        { tag: "datatype", name: "Group", id: 0x2, type: "group-id", conformance: "O" },
                        { tag: "datatype", name: "Endpoint", id: 0x3, type: "endpoint-no", conformance: "O" },
                        { tag: "datatype", name: "Cluster", id: 0x4, type: "cluster-id", conformance: "O" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BooleanState", id: 0x45, description: "Boolean State",
            details: "This cluster provides an interface to a boolean state called StateValue.",

            children: [
                { tag: "attribute", name: "StateValue", id: 0x0, type: "bool", conformance: "M", quality: "P" },
                {
                    tag: "event", name: "StateChange", id: 0x0, conformance: "M", priority: "info",
                    children: [{ tag: "datatype", name: "StateValue", id: 0x0, type: "bool", conformance: "M" }]
                }
            ]
        },

        {
            tag: "cluster", name: "BridgedDeviceBasicInformation", id: 0x39,
            description: "Bridged Device Basic Information",
            details: "This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the " +
                "functionality on the Endpoint where it is placed (and its Parts) is bridged from a non-CHIP " +
                "technology; and provide a centralized collection of attributes that the Node MAY collect to aid in " +
                "conveying information regarding the Bridged Device to a user, such as the vendor name, the model " +
                "name, or user-assigned name.",

            children: [
                { tag: "attribute", name: "VendorName", id: 0x1, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "VendorId", id: 0x2, type: "vendor-id", conformance: "O" },
                { tag: "attribute", name: "ProductName", id: 0x3, type: "string", conformance: "O", constraint: "max 32" },
                {
                    tag: "attribute", name: "NodeLabel", id: 0x5, type: "string", access: "RW", conformance: "O",
                    constraint: "max 32", default: ""
                },
                { tag: "attribute", name: "HardwareVersion", id: 0x7, type: "uint16", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "HardwareVersionString", id: 0x8, type: "string", conformance: "O",
                    constraint: "max 64"
                },
                { tag: "attribute", name: "SoftwareVersion", id: 0x9, type: "uint32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "SoftwareVersionString", id: 0xa, type: "string", conformance: "O",
                    constraint: "max 64"
                },
                {
                    tag: "attribute", name: "ManufacturingDate", id: 0xb, type: "string", conformance: "O",
                    constraint: "max 16"
                },
                { tag: "attribute", name: "PartNumber", id: 0xc, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "ProductUrl", id: 0xd, type: "string", conformance: "O", constraint: "max 256" },
                { tag: "attribute", name: "ProductLabel", id: 0xe, type: "string", conformance: "O", constraint: "max 64" },
                { tag: "attribute", name: "SerialNumber", id: 0xf, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "Reachable", id: 0x11, type: "bool", conformance: "M", default: true },
                { tag: "attribute", name: "UniqueId", id: 0x12, type: "string", conformance: "O", constraint: "max 32" },
                { tag: "attribute", name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct", conformance: "O" },
                {
                    tag: "event", name: "StartUp", id: 0x0, conformance: "O", priority: "critical",
                    children: [{ tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }]
                },
                { tag: "event", name: "ShutDown", id: 0x1, conformance: "O", priority: "critical" },
                { tag: "event", name: "Leave", id: 0x2, conformance: "O", priority: "info" },
                {
                    tag: "event", name: "ReachableChanged", id: 0x3, conformance: "M", priority: "info",
                    children: [{ tag: "datatype", name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "ProductAppearanceStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Finish", id: 0x0, type: "ProductFinishEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "PrimaryColor", id: 0x1, type: "ColorEnum", conformance: "M", quality: "X"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ProductFinishEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Matte", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Satin", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Polished", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Rugged", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Fabric", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ColorEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Black", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Navy", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Green", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Teal", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Maroon", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Purple", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Olive", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Gray", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Blue", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Lime", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Aqua", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "Red", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "Fuchsia", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "Yellow", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "White", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "Nickel", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "Chrome", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "Brass", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "Copper", id: 0x12, conformance: "M" },
                        { tag: "datatype", name: "Silver", id: 0x13, conformance: "M" },
                        { tag: "datatype", name: "Gold", id: 0x14, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Channel", id: 0x504, description: "Channel",
            details: "This cluster provides an interface for controlling the current Channel on a device.",

            children: [
                {
                    tag: "attribute", name: "ChannelList", id: 0x0, type: "list", conformance: "O",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "ChannelInfoStruct" }]
                },
                {
                    tag: "attribute", name: "ChannelLineup", id: 0x1, type: "LineupInfoStruct", conformance: "O",
                    default: null, quality: "X"
                },
                {
                    tag: "attribute", name: "ChannelCurrentChannel", id: 0x2, type: "ChannelInfoStruct",
                    conformance: "O", default: null, quality: "X"
                },
                {
                    tag: "command", name: "ChangeChannel", id: 0x0, conformance: "O", direction: "request",
                    response: "ChangeChannelResponse",
                    children: [{ tag: "datatype", name: "Match", type: "string", conformance: "M" }]
                },

                {
                    tag: "command", name: "ChangeChannelByNumber", id: 0x2, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "MajorNumber", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "MinorNumber", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SkipChannel", id: 0x3, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "Count", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "ChangeChannelResponse", id: 0x1, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "ChannelStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "ChannelInfoStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "MajorNumber", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "MinorNumber", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "O" },
                        { tag: "datatype", name: "CallSign", type: "string", conformance: "O" },
                        { tag: "datatype", name: "AffiliateCallSign", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "OperatorName", type: "string", conformance: "M" },
                        { tag: "datatype", name: "LineupName", type: "string", conformance: "O", default: "" },
                        { tag: "datatype", name: "PostalCode", type: "string", conformance: "O", default: "" },
                        { tag: "datatype", name: "LineupInfoType", type: "LineupInfoTypeEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoTypeEnum", type: "enum8", conformance: "M",
                    children: [{ tag: "datatype", name: "Mso", id: 0x0, conformance: "M" }]
                },

                {
                    tag: "datatype", name: "ChannelStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "MultipleMatches", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NoMatches", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OtaSoftwareUpdateProvider", id: 0x29,
            description: "OTA Software Update Provider",
            details: "Provides an interface for providing OTA software updates",

            children: [
                {
                    tag: "command", name: "QueryImage", id: 0x0, conformance: "M", direction: "request",
                    response: "QueryImageResponse",

                    children: [
                        { tag: "datatype", name: "VendorId", type: "vendor-id", conformance: "M" },
                        { tag: "datatype", name: "ProductId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M" },
                        {
                            tag: "datatype", name: "ProtocolsSupported", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "OtaDownloadProtocol" }]
                        },
                        { tag: "datatype", name: "HardwareVersion", type: "uint16", conformance: "O" },
                        { tag: "datatype", name: "Location", type: "string", conformance: "O", constraint: "max 2" },
                        { tag: "datatype", name: "RequestorCanConsent", type: "bool", conformance: "O", default: true },
                        { tag: "datatype", name: "MetadataForProvider", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",

                    children: [
                        { tag: "datatype", name: "Status", type: "OtaQueryStatus", conformance: "M" },
                        { tag: "datatype", name: "DelayedActionTime", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "ImageUri", type: "string", conformance: "O", constraint: "max 256" },
                        { tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "O" },
                        {
                            tag: "datatype", name: "SoftwareVersionString", type: "string", conformance: "O",
                            constraint: "max 64"
                        },
                        { tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "O" },
                        { tag: "datatype", name: "UserConsentNeeded", type: "bool", conformance: "O", default: true },
                        { tag: "datatype", name: "MetadataForRequestor", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
                    response: "ApplyUpdateResponse",
                    children: [
                        { tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "NewVersion", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Action", type: "OtaApplyUpdateAction", conformance: "M" },
                        { tag: "datatype", name: "DelayedActionTime", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "UpdateToken", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaDownloadProtocol", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "BdxSynchronous", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "BdxAsynchronous", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Https", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "VendorSpecific", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaQueryStatus", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "UpdateAvailable", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Busy", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NotAvailable", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "DownloadProtocolNotSupported", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaApplyUpdateAction", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Proceed", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "AwaitNextAction", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Discontinue", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OtaSoftwareUpdateRequestor", id: 0x2a,
            description: "OTA Software Update Requestor",
            details: "Provides an interface for downloading and applying OTA software updates",

            children: [
                {
                    tag: "attribute", name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW",
                    conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "ProviderLocation" }]
                },
                { tag: "attribute", name: "UpdatePossible", id: 0x1, type: "bool", conformance: "M", default: true },
                { tag: "attribute", name: "UpdateState", id: 0x2, type: "OtaUpdateStateEnum", conformance: "M", default: 0 },
                {
                    tag: "attribute", name: "UpdateStateProgress", id: 0x3, type: "uint8", conformance: "M",
                    constraint: "max 100", quality: "X"
                },

                {
                    tag: "command", name: "AnnounceOtaProvider", id: 0x0, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "ProviderNodeId", type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "VendorId", type: "vendor-id", conformance: "M" },
                        { tag: "datatype", name: "AnnouncementReason", type: "OtaAnnouncementReason", conformance: "M" },
                        { tag: "datatype", name: "MetadataForNode", type: "octstr", conformance: "O" },
                        { tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "StateTransition", id: 0x0, conformance: "M", priority: "info",

                    children: [
                        { tag: "datatype", name: "PreviousState", id: 0x0, type: "OtaUpdateStateEnum", conformance: "M" },
                        { tag: "datatype", name: "NewState", id: 0x1, type: "OtaUpdateStateEnum", conformance: "M" },
                        { tag: "datatype", name: "Reason", id: 0x2, type: "OtaChangeReasonEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "TargetSoftwareVersion", id: 0x3, type: "uint32", conformance: "M",
                            quality: "X"
                        }
                    ]
                },

                {
                    tag: "event", name: "VersionApplied", id: 0x1, conformance: "M", priority: "critical",
                    children: [
                        { tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "ProductId", id: 0x1, type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "DownloadError", id: 0x2, conformance: "M", priority: "info",

                    children: [
                        { tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M" },
                        {
                            tag: "datatype", name: "ProgressPercent", id: 0x2, type: "uint8", conformance: "M",
                            constraint: "max 100", quality: "X"
                        },
                        { tag: "datatype", name: "PlatformCode", id: 0x3, type: "int64", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "datatype", name: "ProviderLocation", type: "struct", access: "R F", conformance: "M",
                    children: [
                        { tag: "datatype", name: "ProviderNodeId", id: 0x1, type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "Endpoint", id: 0x2, type: "endpoint-no", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaUpdateStateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Idle", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Querying", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "DelayedOnQuery", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Downloading", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Applying", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "DelayedOnApply", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "RollingBack", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "DelayedOnUserConsent", id: 0x8, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaAnnouncementReason", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "SimpleAnnouncement", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "UpdateAvailable", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "UrgentUpdateAvailable", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OtaChangeReasonEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Success", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Failure", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "TimeOut", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "DelayByProvider", id: 0x4, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ClientMonitoring", id: 0x1046, description: "Client Monitoring",
            details: "Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions " +
                "on the server.",

            children: [
                {
                    tag: "attribute", name: "IdleModeInterval", id: 0x0, type: "uint32", conformance: "M",
                    constraint: "300 to 86400000", default: 18
                },
                {
                    tag: "attribute", name: "ActiveModeInterval", id: 0x1, type: "uint32", conformance: "M",
                    constraint: "300 to 86400000", default: 18
                },
                {
                    tag: "attribute", name: "ActiveModeThreshold", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "300 to 60000", default: 0
                },
                {
                    tag: "attribute", name: "ExpectedClients", id: 0x3, type: "list", conformance: "M",
                    constraint: "max 4",
                    children: [{ tag: "datatype", name: "entry", type: "MonitoringRegistration" }]
                },

                {
                    tag: "command", name: "RegisterClientMonitoring", id: 0x0, access: "R M", conformance: "M",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "ClientNodeId", type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "ICid", type: "uint64", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "UnregisterClientMonitoring", id: 0x1, access: "R M", conformance: "M",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "ClientNodeId", type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "ICid", type: "uint64", conformance: "M" }
                    ]
                },

                { tag: "command", name: "StayAwakeRequest", id: 0x2, access: "R M", conformance: "O", direction: "request" },

                {
                    tag: "datatype", name: "MonitoringRegistration", type: "struct", access: "R F", conformance: "M",
                    children: [
                        { tag: "datatype", name: "ClientNodeId", id: 0x1, type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "ICid", id: 0x2, type: "uint64", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ColorControl", id: 0x300, description: "Color Control",
            details: "Attributes and commands for controlling the color properties of a color-capable light.",

            children: [
                {
                    tag: "attribute", name: "ColorControlCurrentHue", id: 0x0, type: "uint8", conformance: "O",
                    constraint: "max 254", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "ColorControlCurrentSaturation", id: 0x1, type: "uint8", conformance: "O",
                    constraint: "max 254", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "ColorControlRemainingTime", id: 0x2, type: "uint16", conformance: "O",
                    constraint: "max 65534", default: 0
                },
                {
                    tag: "attribute", name: "ColorControlCurrentX", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 65279", default: 1558, quality: "P"
                },
                {
                    tag: "attribute", name: "ColorControlCurrentY", id: 0x4, type: "uint16", conformance: "O",
                    constraint: "max 65279", default: 1543, quality: "P"
                },
                { tag: "attribute", name: "ColorControlDriftCompensation", id: 0x5, type: "enum8", conformance: "O" },
                {
                    tag: "attribute", name: "ColorControlCompensationText", id: 0x6, type: "string", conformance: "O",
                    constraint: "max 254"
                },
                {
                    tag: "attribute", name: "ColorControlColorTemperature", id: 0x7, type: "uint16", conformance: "O",
                    constraint: "max 65279", default: 0, quality: "P"
                },
                { tag: "attribute", name: "ColorControlColorMode", id: 0x8, type: "enum8", conformance: "M", default: 1 },
                {
                    tag: "attribute", name: "ColorControlOptions", id: 0xf, type: "map8", access: "RW",
                    conformance: "M", default: 0,
                    children: [{ tag: "datatype", name: "ExecuteIfOff", id: 0x1, conformance: "M" }]
                },
                {
                    tag: "attribute", name: "ColorControlNumberOfPrimaries", id: 0x10, type: "uint8", conformance: "M",
                    constraint: "max 6", quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary1X", id: 0x11, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary1Y", id: 0x12, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary1Intensity", id: 0x13, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary2X", id: 0x15, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary2Y", id: 0x16, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary2Intensity", id: 0x17, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary3X", id: 0x19, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary3Y", id: 0x1a, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary3Intensity", id: 0x1b, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary4X", id: 0x20, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary4Y", id: 0x21, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary4Intensity", id: 0x22, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary5X", id: 0x24, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary5Y", id: 0x25, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary5Intensity", id: 0x26, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary6X", id: 0x28, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary6Y", id: 0x29, type: "uint16", conformance: "O",
                    constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlPrimary6Intensity", id: 0x2a, type: "uint8", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlWhitePointX", id: 0x30, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlWhitePointY", id: 0x31, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointRX", id: 0x32, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointRY", id: 0x33, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointRIntensity", id: 0x34, type: "uint8",
                    access: "RW VM", conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointGX", id: 0x36, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointGY", id: 0x37, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointGIntensity", id: 0x38, type: "uint8",
                    access: "RW VM", conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointBX", id: 0x3a, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointBY", id: 0x3b, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "max 65279"
                },
                {
                    tag: "attribute", name: "ColorControlColorPointBIntensity", id: 0x3c, type: "uint8",
                    access: "RW VM", conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "ColorControlTemperatureLevelMinMireds", id: 0x400d, type: "uint16",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "StartUpColorTemperatureMireds", id: 0x4010, type: "uint16",
                    access: "RW VM", conformance: "O", constraint: "max 65279", quality: "X"
                },

                {
                    tag: "command", name: "MoveToHue", id: 0x0, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "Hue", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Direction", type: "HueDirection", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveHue", id: 0x1, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "MoveMode", type: "HueMoveMode", conformance: "M" },
                        { tag: "datatype", name: "Rate", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StepHue", id: 0x2, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "StepMode", type: "HueStepMode", conformance: "M" },
                        { tag: "datatype", name: "StepSize", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToSaturation", id: 0x3, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "Saturation", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveSaturation", id: 0x4, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "MoveMode", type: "SaturationMoveMode", conformance: "M" },
                        { tag: "datatype", name: "Rate", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StepSaturation", id: 0x5, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "StepMode", type: "SaturationStepMode", conformance: "M" },
                        { tag: "datatype", name: "StepSize", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToHueAndSaturation", id: 0x6, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "Hue", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Saturation", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToColor", id: 0x7, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "ColorX", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "ColorY", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveColor", id: 0x8, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "RateX", type: "int16", conformance: "M" },
                        { tag: "datatype", name: "RateY", type: "int16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StepColor", id: 0x9, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "StepX", type: "int16", conformance: "M" },
                        { tag: "datatype", name: "StepY", type: "int16", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToColorTemperature", id: 0xa, conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "ColorTemperatureMireds", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OptionsMask", type: "map8", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "map8", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "HueDirection", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ShortestDistance", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "LongestDistance", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Up", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "HueMoveMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Stop", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "HueStepMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "SaturationMoveMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Stop", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "SaturationStepMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x3, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ContentLauncher", id: 0x50a, description: "Content Launcher",
            details: "This cluster provides an interface for launching content on a media player device such as a TV or " +
                "Speaker.",

            children: [
                {
                    tag: "attribute", name: "ContentLauncherAcceptHeader", id: 0x0, type: "list", conformance: "O",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "string" }]
                },
                {
                    tag: "attribute", name: "ContentLauncherSupportedStreamingProtocols", id: 0x1, type: "map32",
                    access: "RW", conformance: "O", default: 0
                },

                {
                    tag: "command", name: "LaunchContent", id: 0x0, conformance: "O", direction: "request",
                    response: "LauncherResponse",
                    children: [
                        { tag: "datatype", name: "Search", type: "ContentSearchStruct", conformance: "M" },
                        { tag: "datatype", name: "AutoPlay", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "LaunchUrl", id: 0x1, conformance: "O", direction: "request",
                    response: "LauncherResponse",

                    children: [
                        { tag: "datatype", name: "ContentUrl", type: "string", conformance: "M" },
                        { tag: "datatype", name: "DisplayString", type: "string", conformance: "O" },
                        {
                            tag: "datatype", name: "BrandingInformation", type: "BrandingInformationStruct", conformance: "O"
                        }
                    ]
                },

                {
                    tag: "command", name: "LauncherResponse", id: 0x2, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "ContentLaunchStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "ContentSearchStruct", type: "struct", conformance: "M",
                    children: [{
                        tag: "datatype", name: "ParameterList", type: "list", conformance: "M",
                        children: [{ tag: "datatype", name: "entry", type: "ParameterStruct" }]
                    }]
                },

                {
                    tag: "datatype", name: "ParameterStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Type", type: "ParameterEnum", conformance: "M" },
                        { tag: "datatype", name: "Value", type: "string", conformance: "M" },
                        {
                            tag: "datatype", name: "ExternalIdList", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "AdditionalInfoStruct" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ParameterEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Actor", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Channel", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Character", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Director", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Event", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Franchise", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Genre", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "League", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Popularity", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Provider", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Sport", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "SportsTeam", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "Type", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "Video", id: 0xd, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "AdditionalInfoStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Name", type: "string", conformance: "M" },
                        { tag: "datatype", name: "Value", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BrandingInformationStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ProviderName", type: "string", conformance: "M" },
                        { tag: "datatype", name: "Background", type: "StyleInformationStruct", conformance: "O" },
                        { tag: "datatype", name: "Logo", type: "StyleInformationStruct", conformance: "O" },
                        { tag: "datatype", name: "ProgressBar", type: "StyleInformationStruct", conformance: "O" },
                        { tag: "datatype", name: "Splash", type: "StyleInformationStruct", conformance: "O" },
                        { tag: "datatype", name: "WaterMark", type: "StyleInformationStruct", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "StyleInformationStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "ImageUrl", type: "string", conformance: "O" },
                        { tag: "datatype", name: "Color", type: "string", conformance: "O" },
                        { tag: "datatype", name: "Size", type: "DimensionStruct", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "DimensionStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Width", type: "double", conformance: "M" },
                        { tag: "datatype", name: "Height", type: "double", conformance: "M" },
                        { tag: "datatype", name: "Metric", type: "MetricTypeEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "MetricTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Pixels", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Percentage", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ContentLaunchStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "UrlNotAvailable", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "AuthFailed", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Descriptor", id: 0x1d, description: "Descriptor",
            details: "The Descriptor Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
                "describing a node, its endpoints and clusters.",

            children: [
                {
                    tag: "attribute", name: "DeviceList", id: 0x0, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "DeviceTypeStruct" }]
                },
                {
                    tag: "attribute", name: "ServerList", id: 0x1, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "cluster-id" }]
                },
                {
                    tag: "attribute", name: "ClientList", id: 0x2, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "cluster-id" }]
                },
                {
                    tag: "attribute", name: "PartsList", id: 0x3, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
                },

                {
                    tag: "datatype", name: "DeviceTypeStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "DeviceType", type: "devtype-id", conformance: "M" },
                        { tag: "datatype", name: "Revision", type: "uint16", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "DiagnosticLogs", id: 0x32, description: "Diagnostic Logs",
            details: "The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be " +
                "used to aid in diagnostics.",

            children: [
                {
                    tag: "command", name: "RetrieveLogsRequest", id: 0x0, conformance: "M", direction: "request",
                    response: "RetrieveLogsResponse",

                    children: [
                        { tag: "datatype", name: "Intent", type: "IntentEnum", conformance: "M" },
                        { tag: "datatype", name: "RequestedProtocol", type: "TransferProtocolEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "TransferFileDesignator", type: "string", conformance: "O",
                            constraint: "max 32"
                        }
                    ]
                },

                {
                    tag: "command", name: "RetrieveLogsResponse", id: 0x1, conformance: "M", direction: "response",

                    children: [
                        { tag: "datatype", name: "Status", type: "StatusEnum", conformance: "M" },
                        { tag: "datatype", name: "LogContent", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "UtcTimeStamp", type: "epoch-us", conformance: "O" },
                        { tag: "datatype", name: "TimeSinceBoot", type: "systime-us", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "IntentEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "EndUserSupport", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "NetworkDiag", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "CrashLogs", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "TransferProtocolEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "ResponsePayload", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Bdx", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Exhausted", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NoLogs", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Busy", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Denied", id: 0x4, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "DoorLock", id: 0x101, description: "Door Lock",
            details: "An interface to a generic way to secure a door",

            children: [
                { tag: "attribute", name: "LockState", id: 0x0, type: "DlLockState", conformance: "M", quality: "X P" },
                { tag: "attribute", name: "LockType", id: 0x1, type: "DlLockType", conformance: "M" },
                { tag: "attribute", name: "ActuatorEnabled", id: 0x2, type: "bool", conformance: "M" },
                { tag: "attribute", name: "DoorState", id: 0x3, type: "DoorStateEnum", conformance: "O", quality: "X P" },
                { tag: "attribute", name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM", conformance: "O" },
                { tag: "attribute", name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM", conformance: "O" },
                { tag: "attribute", name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM", conformance: "O" },
                { tag: "attribute", name: "NumTotalUsersSupported", id: 0x11, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "NumPinUsersSupported", id: 0x12, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "NumRfidUsersSupported", id: 0x13, type: "uint16", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "NumWeekdaySchedulesSupportedPerUser", id: 0x14, type: "uint8",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "NumYeardaySchedulesSupportedPerUser", id: 0x15, type: "uint8",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "NumHolidaySchedulesSupported", id: 0x16, type: "uint8", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "MaxPinLength", id: 0x17, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "MinPinLength", id: 0x18, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "MaxRfidCodeLength", id: 0x19, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "MinRfidCodeLength", id: 0x1a, type: "uint8", conformance: "O" },
                {
                    tag: "attribute", name: "CredentialRulesSupport", id: 0x1b, type: "DlCredentialRuleMask",
                    conformance: "O", default: 1
                },
                {
                    tag: "attribute", name: "NumCredentialsSupportedPerUser", id: 0x1c, type: "uint8", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "Language", id: 0x21, type: "string", access: "RW VM", conformance: "O",
                    constraint: "max 3", quality: "P"
                },
                {
                    tag: "attribute", name: "LedSettings", id: 0x22, type: "uint8", access: "RW VM", conformance: "O",
                    constraint: "max 2", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "AutoRelockTime", id: 0x23, type: "uint32", access: "RW VM",
                    conformance: "M", quality: "P"
                },
                {
                    tag: "attribute", name: "SoundVolume", id: 0x24, type: "uint8", access: "RW VM", conformance: "O",
                    constraint: "max 3", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "OperatingMode", id: 0x25, type: "OperatingModeEnum", access: "RW VM",
                    conformance: "M", quality: "P"
                },
                {
                    tag: "attribute", name: "SupportedOperatingModes", id: 0x26, type: "DlSupportedOperatingModes",
                    conformance: "M", default: 65526
                },
                {
                    tag: "attribute", name: "DefaultConfigurationRegister", id: 0x27,
                    type: "DlDefaultConfigurationRegister", conformance: "O", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "RW VA",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "LocalProgrammingFeatures", id: 0x2c, type: "DlLocalProgrammingFeatures",
                    access: "RW VA", conformance: "O", default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "RW VA",
                    conformance: "O", constraint: "min 1", quality: "P"
                },
                {
                    tag: "attribute", name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "RW VA",
                    conformance: "O", constraint: "min 1", quality: "P"
                },
                {
                    tag: "attribute", name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "RW VA",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "RequirePinForRemoteOperation", id: 0x33, type: "bool", access: "RW VA",
                    conformance: "O", default: true, quality: "P"
                },
                {
                    tag: "attribute", name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "RW VA",
                    conformance: "O", constraint: "1 to 2880", quality: "P"
                },
                {
                    tag: "command", name: "LockDoor", id: 0x0, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" }]
                },
                {
                    tag: "command", name: "UnlockDoor", id: 0x1, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" }]
                },

                {
                    tag: "command", name: "UnlockWithTimeout", id: 0x3, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "Timeout", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "PinCode", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "SetWeekDaySchedule", id: 0xb, access: "R A", conformance: "O",
                    direction: "request",

                    children: [
                        { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "DaysMask", type: "DaysMaskMap", conformance: "M" },
                        { tag: "datatype", name: "StartHour", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "StartMinute", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "EndHour", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "EndMinute", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetWeekDaySchedule", id: 0xc, access: "R A", conformance: "O",
                    direction: "request", response: "GetWeekDayScheduleResponse",
                    children: [
                        { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                        { tag: "datatype", name: "DaysMask", type: "DaysMaskMap", conformance: "O" },
                        { tag: "datatype", name: "StartHour", type: "uint8", conformance: "O" },
                        { tag: "datatype", name: "StartMinute", type: "uint8", conformance: "O" },
                        { tag: "datatype", name: "EndHour", type: "uint8", conformance: "O" },
                        { tag: "datatype", name: "EndMinute", type: "uint8", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ClearWeekDaySchedule", id: 0xd, access: "R A", conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "WeekDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SetYearDaySchedule", id: 0xe, access: "R A", conformance: "O",
                    direction: "request",

                    children: [
                        { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "M" },
                        { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetYearDaySchedule", id: 0xf, access: "R A", conformance: "O",
                    direction: "request", response: "GetYearDayScheduleResponse",
                    children: [
                        { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetYearDayScheduleResponse", id: 0xf, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                        { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "O" },
                        { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ClearYearDaySchedule", id: 0x10, access: "R A", conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "YearDayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SetHolidaySchedule", id: 0x11, access: "R A", conformance: "O",
                    direction: "request",

                    children: [
                        { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "M" },
                        { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "M" },
                        { tag: "datatype", name: "OperatingMode", type: "OperatingModeEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetHolidaySchedule", id: 0x12, access: "R A", conformance: "O",
                    direction: "request", response: "GetHolidayScheduleResponse",
                    children: [{ tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" }]
                },

                {
                    tag: "command", name: "GetHolidayScheduleResponse", id: 0x12, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                        { tag: "datatype", name: "LocalStartTime", type: "epoch-s", conformance: "O" },
                        { tag: "datatype", name: "LocalEndTime", type: "epoch-s", conformance: "O" },
                        { tag: "datatype", name: "OperatingMode", type: "OperatingModeEnum", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ClearHolidaySchedule", id: 0x13, access: "R A", conformance: "O",
                    direction: "request",
                    children: [{ tag: "datatype", name: "HolidayIndex", type: "uint8", conformance: "M" }]
                },

                {
                    tag: "command", name: "SetUser", id: 0x1a, access: "R A", conformance: "O", direction: "request",

                    children: [
                        { tag: "datatype", name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "UserName", type: "string", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X"
                        }
                    ]
                },

                {
                    tag: "command", name: "GetUser", id: 0x1b, access: "R A", conformance: "O", direction: "request",
                    response: "GetUserResponse",
                    children: [{ tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "GetUserResponse", id: 0x1c, conformance: "O", direction: "response",

                    children: [
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "UserName", type: "string", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserUniqueId", type: "uint32", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "CredentialRule", type: "CredentialRuleEnum", conformance: "M", quality: "X"
                        },
                        {
                            tag: "datatype", name: "Credentials", type: "list", conformance: "M", quality: "X",
                            children: [{ tag: "datatype", name: "entry", type: "CredentialStruct" }]
                        },
                        { tag: "datatype", name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M",
                            quality: "X"
                        },
                        { tag: "datatype", name: "NextUserIndex", type: "uint16", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "ClearUser", id: 0x1d, access: "R A", conformance: "O", direction: "request",
                    children: [{ tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "SetCredential", id: 0x22, access: "R A", conformance: "O",
                    direction: "request", response: "SetCredentialResponse",

                    children: [
                        { tag: "datatype", name: "OperationType", type: "DataOperationTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M" },
                        { tag: "datatype", name: "CredentialData", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserStatus", type: "UserStatusEnum", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "UserType", type: "UserTypeEnum", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "SetCredentialResponse", id: 0x23, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "DlStatus", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "GetCredentialStatus", id: 0x24, access: "R A", conformance: "O",
                    direction: "request", response: "GetCredentialStatusResponse",
                    children: [{ tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M" }]
                },

                {
                    tag: "command", name: "GetCredentialStatusResponse", id: 0x25, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "CredentialExists", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "CreatorFabricIndex", type: "fabric-idx", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "LastModifiedFabricIndex", type: "fabric-idx", conformance: "M",
                            quality: "X"
                        },
                        { tag: "datatype", name: "NextCredentialIndex", type: "uint16", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "ClearCredential", id: 0x26, access: "R A", conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "Credential", type: "CredentialStruct", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "event", name: "DoorLockAlarm", id: 0x0, conformance: "M", priority: "critical",
                    children: [{ tag: "datatype", name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M" }]
                },
                {
                    tag: "event", name: "DoorStateChange", id: 0x1, conformance: "O", priority: "critical",
                    children: [{ tag: "datatype", name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M" }]
                },

                {
                    tag: "event", name: "LockOperation", id: 0x2, conformance: "M", priority: "critical",

                    children: [
                        {
                            tag: "datatype", name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum",
                            conformance: "M"
                        },
                        { tag: "datatype", name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "Credentials", id: 0x5, type: "list", conformance: "O", quality: "X",
                            children: [{ tag: "datatype", name: "entry", type: "CredentialStruct" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "LockOperationError", id: 0x3, conformance: "M", priority: "critical",

                    children: [
                        {
                            tag: "datatype", name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum",
                            conformance: "M"
                        },
                        { tag: "datatype", name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M" },
                        { tag: "datatype", name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "Credentials", id: 0x6, type: "list", conformance: "O", quality: "X",
                            children: [{ tag: "datatype", name: "entry", type: "CredentialStruct" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "LockUserChange", id: 0x4, conformance: "M", priority: "info",

                    children: [
                        { tag: "datatype", name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M" },
                        {
                            tag: "datatype", name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum",
                            conformance: "M"
                        },
                        { tag: "datatype", name: "OperationSource", id: 0x2, type: "OperationSourceEnum", conformance: "M" },
                        { tag: "datatype", name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "datatype", name: "DlLockState", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "NotFullyLocked", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Locked", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Unlocked", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DlLockType", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "DeadBolt", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Magnetic", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Other", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Mortise", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Rim", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "LatchBolt", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "CylindricalLock", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "TubularLock", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "InterconnectedLock", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "DeadLatch", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "DoorFurniture", id: 0xa, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DoorStateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "DoorOpen", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "DoorClosed", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "DoorJammed", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "DoorForcedOpen", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "DoorUnspecifiedError", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "DoorAjar", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DlCredentialRuleMask", type: "map8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Single", constraint: "0" },
                        { tag: "datatype", name: "Dual", constraint: "1" },
                        { tag: "datatype", name: "Tri", constraint: "2" }
                    ]
                },

                {
                    tag: "datatype", name: "OperatingModeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Normal", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Vacation", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Privacy", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NoRemoteLockUnlock", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Passage", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DlSupportedOperatingModes", type: "map16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Normal", constraint: "0" },
                        { tag: "datatype", name: "Vacation", constraint: "1" },
                        { tag: "datatype", name: "Privacy", constraint: "2" },
                        { tag: "datatype", name: "NoRemoteLockUnlock", constraint: "3" },
                        { tag: "datatype", name: "Passage", constraint: "4" }
                    ]
                },

                {
                    tag: "datatype", name: "DlDefaultConfigurationRegister", type: "map16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "EnableLocalProgrammingEnabled", constraint: "0" },
                        { tag: "datatype", name: "KeypadInterfaceDefaultAccessEnabled", constraint: "1" },
                        { tag: "datatype", name: "RemoteInterfaceDefaultAccessIsEnabled", constraint: "2" },
                        { tag: "datatype", name: "SoundEnabled", constraint: "5" },
                        { tag: "datatype", name: "AutoRelockTimeSet", constraint: "6" },
                        { tag: "datatype", name: "LEDSettingsSet", constraint: "7" }
                    ]
                },

                {
                    tag: "datatype", name: "DlLocalProgrammingFeatures", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "AddUsersCredentialsSchedulesLocally", constraint: "0" },
                        { tag: "datatype", name: "ModifyUsersCredentialsSchedulesLocally", constraint: "1" },
                        { tag: "datatype", name: "ClearUsersCredentialsSchedulesLocally", constraint: "2" },
                        { tag: "datatype", name: "AdjustLockSettingsLocally", constraint: "3" }
                    ]
                },

                {
                    tag: "datatype", name: "DaysMaskMap", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Sunday", constraint: "0" },
                        { tag: "datatype", name: "Monday", constraint: "1" },
                        { tag: "datatype", name: "Tuesday", constraint: "2" },
                        { tag: "datatype", name: "Wednesday", constraint: "3" },
                        { tag: "datatype", name: "Thursday", constraint: "4" },
                        { tag: "datatype", name: "Friday", constraint: "5" },
                        { tag: "datatype", name: "Saturday", constraint: "6" }
                    ]
                },

                {
                    tag: "datatype", name: "DlStatus", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Failure", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Duplicate", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Occupied", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "InvalidField", id: 0x85, conformance: "M" },
                        { tag: "datatype", name: "ResourceExhausted", id: 0x89, conformance: "M" },
                        { tag: "datatype", name: "NotFound", id: 0x8b, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DataOperationTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Add", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Clear", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Modify", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "UserStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Available", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "OccupiedEnabled", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "OccupiedDisabled", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "UserTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "UnrestrictedUser", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "YearDayScheduleUser", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "WeekDayScheduleUser", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ProgrammingUser", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "NonAccessUser", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "ForcedUser", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "DisposableUser", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "ExpiringUser", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "ScheduleRestrictedUser", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "RemoteOnlyUser", id: 0x9, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialRuleEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Single", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Dual", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Tri", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "CredentialType", type: "CredentialTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "CredentialIndex", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ProgrammingPin", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Pin", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Rfid", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Fingerprint", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "FingerVein", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Face", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "AlarmCodeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "LockJammed", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "LockFactoryReset", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "LockRadioPowerCycled", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "WrongCodeEntryLimit", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "FrontEsceutcheonRemoved", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "DoorForcedOpen", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "DoorAjar", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "ForcedUser", id: 0x8, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "LockOperationTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Lock", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Unlock", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NonAccessUserEvent", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ForcedUserEvent", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OperationSourceEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Manual", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "ProprietaryRemote", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Keypad", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Auto", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Button", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Schedule", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Remote", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Rfid", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Biometric", id: 0x9, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OperationErrorEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "InvalidCredential", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "DisabledUserDenied", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Restricted", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "InsufficientBattery", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "LockDataTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "ProgrammingCode", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "UserIndex", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "WeekDaySchedule", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "YearDaySchedule", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "HolidaySchedule", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Pin", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Rfid", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Fingerprint", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "FingerVein", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Face", id: 0xa, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "EthernetNetworkDiagnostics", id: 0x37,
            description: "Ethernet Network Diagnostics",
            details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
                "metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential " +
                "problems.",

            children: [
                { tag: "attribute", name: "PhyRate", id: 0x0, type: "PhyRateEnum", conformance: "O", quality: "X" },
                { tag: "attribute", name: "FullDuplex", id: 0x1, type: "bool", conformance: "O", quality: "X" },
                { tag: "attribute", name: "PacketRxCount", id: 0x2, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "PacketTxCount", id: 0x3, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxErrCount", id: 0x4, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "CollisionCount", id: 0x5, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "EthernetOverrunCount", id: 0x6, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "CarrierDetect", id: 0x7, type: "bool", conformance: "O", quality: "X" },
                { tag: "attribute", name: "TimeSinceReset", id: 0x8, type: "uint64", conformance: "O", default: 0 },
                { tag: "command", name: "ResetCounts", id: 0x0, conformance: "M", direction: "request" },

                {
                    tag: "datatype", name: "PhyRateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Rate10M", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Rate100M", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Rate1G", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Rate25G", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Rate5G", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Rate10G", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Rate40G", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Rate100G", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Rate200G", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Rate400G", id: 0x9, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "FanControl", id: 0x202, description: "Fan Control",
            details: "An interface for controlling a fan in a heating/cooling system.",

            children: [
                {
                    tag: "attribute", name: "FanMode", id: 0x0, type: "FanModeType", access: "RW", conformance: "M",
                    default: 0
                },
                {
                    tag: "attribute", name: "FanModeSequence", id: 0x1, type: "FanModeSequenceType", access: "RW",
                    conformance: "M", default: 2
                },
                {
                    tag: "attribute", name: "PercentSetting", id: 0x2, type: "uint8", access: "RW", conformance: "M",
                    constraint: "max 100", default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PercentCurrent", id: 0x3, type: "uint8", conformance: "M",
                    constraint: "max 100", default: 0
                },
                {
                    tag: "attribute", name: "SpeedMax", id: 0x4, type: "uint8", conformance: "O",
                    constraint: "1 to 100", default: 1
                },
                {
                    tag: "attribute", name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW", conformance: "O",
                    constraint: "max 100", default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "SpeedCurrent", id: 0x6, type: "uint8", conformance: "O",
                    constraint: "max 100", default: 0
                },

                {
                    tag: "attribute", name: "RockSupport", id: 0x7, type: "map8", conformance: "O", default: 0,
                    children: [
                        { tag: "datatype", name: "RockLeftRight", constraint: "0" },
                        { tag: "datatype", name: "RockUpDown", constraint: "1" },
                        { tag: "datatype", name: "RockRound", constraint: "2" }
                    ]
                },

                { tag: "attribute", name: "RockSetting", id: 0x8, type: "map8", access: "RW", conformance: "O", default: 0 },

                {
                    tag: "attribute", name: "WindSupport", id: 0x9, type: "map8", conformance: "O", default: 0,
                    children: [
                        { tag: "datatype", name: "Sleep Wind", constraint: "0" },
                        { tag: "datatype", name: "Natural Wind", constraint: "1" }
                    ]
                },

                {
                    tag: "attribute", name: "WindSetting", id: 0xa, type: "map8", access: "RW", conformance: "O",
                    default: 0,
                    children: [
                        { tag: "datatype", name: "Sleep Wind", constraint: "0" },
                        { tag: "datatype", name: "Natural Wind", constraint: "1" }
                    ]
                },

                {
                    tag: "datatype", name: "FanModeType", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Off", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Low", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Medium", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "High", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "On", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Auto", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Smart", id: 0x6, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "FanModeSequenceType", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "OffLowMedHigh", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "OffLowHigh", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "OffLowMedHighAuto", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "OffLowHighAuto", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "OffOnAuto", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "OffOn", id: 0x5, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "FaultInjection", id: 0xfff1fc06, description: "Fault Injection",
            details: "The Fault Injection Cluster provide a means for a test harness to configure faults(for example " +
                "triggering a fault in the system).",

            children: [
                {
                    tag: "command", name: "FailAtFault", id: 0x0, access: "R M", conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "Type", type: "FaultType", conformance: "M" },
                        { tag: "datatype", name: "Id", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "NumCallsToSkip", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "NumCallsToFail", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "TakeMutex", type: "bool", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "FailRandomlyAtFault", id: 0x1, access: "R M", conformance: "M",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "Type", type: "FaultType", conformance: "M" },
                        { tag: "datatype", name: "Id", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "Percentage", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "FaultType", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "SystemFault", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "InetFault", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ChipFault", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "CertFault", id: 0x4, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "FixedLabel", id: 0x40, description: "Fixed Label",
            details: "The Fixed Label Cluster provides a feature for the device to tag an endpoint with zero or more read " +
                "only labels.",

            children: [
                {
                    tag: "attribute", name: "LabelList", id: 0x0, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "LabelStruct" }]
                },

                {
                    tag: "datatype", name: "LabelStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Label", type: "string", conformance: "M", constraint: "max 16" },
                        { tag: "datatype", name: "Value", type: "string", conformance: "M", constraint: "max 16" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "FlowMeasurement", id: 0x404, description: "Flow Measurement",
            details: "Attributes and commands for configuring the measurement of flow, and reporting flow measurements.",

            children: [
                { tag: "attribute", name: "FlowMeasuredValue", id: 0x0, type: "uint16", conformance: "M", quality: "X" },
                { tag: "attribute", name: "FlowMinMeasuredValue", id: 0x1, type: "uint16", conformance: "M", quality: "X" },
                { tag: "attribute", name: "FlowMaxMeasuredValue", id: 0x2, type: "uint16", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "FlowTolerance", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 2048", default: 0
                }
            ]
        },

        {
            tag: "cluster", name: "GeneralCommissioning", id: 0x30, description: "General Commissioning",
            details: "This cluster is used to manage global aspects of the Commissioning flow.",

            children: [
                {
                    tag: "attribute", name: "Breadcrumb", id: 0x0, type: "uint64", access: "RW VA", conformance: "M",
                    default: 0
                },
                {
                    tag: "attribute", name: "BasicCommissioningInfo", id: 0x1, type: "BasicCommissioningInfo",
                    conformance: "M"
                },
                { tag: "attribute", name: "RegulatoryConfig", id: 0x2, type: "RegulatoryLocationType", conformance: "M" },
                { tag: "attribute", name: "LocationCapability", id: 0x3, type: "RegulatoryLocationType", conformance: "M" },
                {
                    tag: "attribute", name: "SupportsConcurrentConnection", id: 0x4, type: "bool", conformance: "M",
                    default: true
                },

                {
                    tag: "command", name: "ArmFailSafe", id: 0x0, access: "R A", conformance: "M", direction: "request",
                    response: "ArmFailSafeResponse",
                    children: [
                        { tag: "datatype", name: "ExpiryLengthSeconds", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ArmFailSafeResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "ErrorCode", type: "CommissioningError", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SetRegulatoryConfig", id: 0x2, access: "R A", conformance: "M",
                    direction: "request", response: "SetRegulatoryConfigResponse",
                    children: [
                        { tag: "datatype", name: "NewRegulatoryConfig", type: "RegulatoryLocationType", conformance: "M" },
                        { tag: "datatype", name: "CountryCode", type: "string", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SetRegulatoryConfigResponse", id: 0x3, conformance: "M",
                    direction: "response",
                    children: [
                        { tag: "datatype", name: "ErrorCode", type: "CommissioningError", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "CommissioningComplete", id: 0x4, access: "R F A", conformance: "M",
                    direction: "request", response: "CommissioningCompleteResponse"
                },

                {
                    tag: "command", name: "CommissioningCompleteResponse", id: 0x5, conformance: "M",
                    direction: "response",
                    children: [
                        { tag: "datatype", name: "ErrorCode", type: "CommissioningError", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BasicCommissioningInfo", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "FailSafeExpiryLengthSeconds", id: 0x0, type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "MaxCumulativeFailsafeSeconds", id: 0x1, type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "RegulatoryLocationType", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Indoor", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Outdoor", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "IndoorOutdoor", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CommissioningError", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "ValueOutsideRange", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "InvalidAuthentication", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NoFailSafe", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "BusyWithOtherAdmin", id: 0x4, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "GeneralDiagnostics", id: 0x33, description: "General Diagnostics",
            details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
                "standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node " +
                "in diagnosing potential problems.",

            children: [
                {
                    tag: "attribute", name: "NetworkInterfaces", id: 0x0, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkInterface" }]
                },
                { tag: "attribute", name: "RebootCount", id: 0x1, type: "uint16", conformance: "M", default: 0 },
                { tag: "attribute", name: "UpTime", id: 0x2, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "TotalOperationalHours", id: 0x3, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "BootReasons", id: 0x4, type: "BootReasonEnum", conformance: "O" },
                {
                    tag: "attribute", name: "ActiveHardwareFaults", id: 0x5, type: "list", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
                },
                {
                    tag: "attribute", name: "ActiveRadioFaults", id: 0x6, type: "list", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
                },
                {
                    tag: "attribute", name: "ActiveNetworkFaults", id: 0x7, type: "list", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
                },
                { tag: "attribute", name: "TestEventTriggersEnabled", id: 0x8, type: "bool", conformance: "M" },

                {
                    tag: "command", name: "TestEventTrigger", id: 0x0, access: "R M", conformance: "M",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "EnableKey", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "EventTrigger", type: "uint64", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "HardwareFaultChange", id: 0x0, conformance: "O", priority: "critical",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "RadioFaultChange", id: 0x1, conformance: "O", priority: "critical",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "NetworkFaultChange", id: 0x2, conformance: "O", priority: "critical",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "BootReason", id: 0x3, conformance: "M", priority: "critical",
                    children: [{ tag: "datatype", name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "NetworkInterface", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" },
                        { tag: "datatype", name: "IsOperational", type: "bool", conformance: "M" },
                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv4", type: "bool", conformance: "M",
                            quality: "X"
                        },
                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv6", type: "bool", conformance: "M",
                            quality: "X"
                        },
                        { tag: "datatype", name: "HardwareAddress", type: "octstr", conformance: "M" },
                        {
                            tag: "datatype", name: "IPv4Addresses", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "octstr" }]
                        },
                        {
                            tag: "datatype", name: "IPv6Addresses", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "octstr" }]
                        },
                        { tag: "datatype", name: "Type", type: "InterfaceTypeEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "InterfaceTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "WiFi", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Ethernet", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Cellular", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Thread", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BootReasonEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "PowerOnReboot", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "BrownOutReset", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "SoftwareWatchdogReset", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "HardwareWatchdogReset", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "SoftwareUpdateCompleted", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "SoftwareReset", id: 0x6, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "HardwareFaultEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Radio", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Sensor", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ResettableOverTemp", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "NonResettableOverTemp", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "PowerSource", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "VisualDisplayFault", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "AudioOutputFault", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "UserInterfaceFault", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "NonVolatileMemoryError", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "TamperDetected", id: 0xa, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "RadioFaultEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "WiFiFault", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "CellularFault", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ThreadFault", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "NfcFault", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "BleFault", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "EthernetFault", id: 0x6, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkFaultEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "HardwareFailure", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NetworkJammed", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ConnectionFailed", id: 0x3, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "GroupKeyManagement", id: 0x3f, description: "Group Key Management",
            details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",

            children: [
                {
                    tag: "attribute", name: "GroupKeyMap", id: 0x0, type: "list", access: "RW VM", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "GroupKeyMapStruct" }]
                },
                {
                    tag: "attribute", name: "GroupTable", id: 0x1, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "GroupInfoMapStruct" }]
                },
                { tag: "attribute", name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", conformance: "M" },
                { tag: "attribute", name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", conformance: "M" },
                {
                    tag: "command", name: "KeySetWrite", id: 0x0, access: "R F A", conformance: "M",
                    direction: "request",
                    children: [{ tag: "datatype", name: "GroupKeySet", type: "GroupKeySetStruct", conformance: "M" }]
                },
                {
                    tag: "command", name: "KeySetRead", id: 0x1, access: "R F A", conformance: "M",
                    direction: "request", response: "KeySetReadResponse",
                    children: [{ tag: "datatype", name: "GroupKeySetId", type: "uint16", conformance: "M" }]
                },
                {
                    tag: "command", name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
                    children: [{ tag: "datatype", name: "GroupKeySet", type: "GroupKeySetStruct", conformance: "M" }]
                },
                {
                    tag: "command", name: "KeySetRemove", id: 0x3, access: "R F A", conformance: "M",
                    direction: "request",
                    children: [{ tag: "datatype", name: "GroupKeySetId", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "KeySetReadAllIndices", id: 0x4, access: "R F A", conformance: "M",
                    direction: "request", response: "KeySetReadAllIndicesResponse",
                    children: [{
                        tag: "datatype", name: "GroupKeySetIDs", type: "list", conformance: "M",
                        children: [{ tag: "datatype", name: "entry", type: "uint16" }]
                    }]
                },

                {
                    tag: "command", name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M",
                    direction: "response",
                    children: [{
                        tag: "datatype", name: "GroupKeySetIDs", type: "list", conformance: "M",
                        children: [{ tag: "datatype", name: "entry", type: "uint16" }]
                    }]
                },

                {
                    tag: "datatype", name: "GroupKeyMapStruct", type: "struct", access: "R F", conformance: "M",
                    children: [
                        { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "GroupKeySetId", id: 0x2, type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "GroupInfoMapStruct", type: "struct", access: "R F", conformance: "M",

                    children: [
                        { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                        {
                            tag: "datatype", name: "Endpoints", id: 0x2, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
                        },
                        {
                            tag: "datatype", name: "GroupName", id: 0x3, type: "string", conformance: "O", constraint: "max 16"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySetStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" },
                        {
                            tag: "datatype", name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum",
                            conformance: "M"
                        },
                        { tag: "datatype", name: "EpochKey0", id: 0x2, type: "octstr", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "EpochStartTime0", id: 0x3, type: "epoch-us", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "EpochKey1", id: 0x4, type: "octstr", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "EpochStartTime1", id: 0x5, type: "epoch-us", conformance: "M", quality: "X"
                        },
                        { tag: "datatype", name: "EpochKey2", id: 0x6, type: "octstr", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "EpochStartTime2", id: 0x7, type: "epoch-us", conformance: "M", quality: "X"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicyEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "TrustFirst", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "CacheAndSync", id: 0x1, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Groups", id: 0x4, description: "Groups",
            details: "Attributes and commands for group configuration and manipulation.",

            children: [
                { tag: "attribute", name: "GroupNameSupport", id: 0x0, type: "map8", conformance: "M" },

                {
                    tag: "command", name: "AddGroup", id: 0x0, access: "R F M", conformance: "M", direction: "request",
                    response: "AddGroupResponse",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "GroupName", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ViewGroup", id: 0x1, access: "R F", conformance: "M", direction: "request",
                    response: "ViewGroupResponse",
                    children: [{ tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }]
                },

                {
                    tag: "command", name: "GetGroupMembership", id: 0x2, access: "R F", conformance: "M",
                    direction: "request", response: "GetGroupMembershipResponse",
                    children: [{
                        tag: "datatype", name: "GroupList", type: "list", conformance: "M",
                        children: [{ tag: "datatype", name: "entry", type: "group-id" }]
                    }]
                },

                {
                    tag: "command", name: "RemoveGroup", id: 0x3, access: "R F M", conformance: "M",
                    direction: "request", response: "RemoveGroupResponse",
                    children: [{ tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }]
                },
                {
                    tag: "command", name: "RemoveAllGroups", id: 0x4, access: "R F M", conformance: "M",
                    direction: "request"
                },

                {
                    tag: "command", name: "AddGroupIfIdentifying", id: 0x5, access: "R F M", conformance: "M",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "GroupName", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "GroupName", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetGroupMembershipResponse", id: 0x2, conformance: "M",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "Capacity", type: "uint8", conformance: "M", quality: "X" },
                        {
                            tag: "datatype", name: "GroupList", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "group-id" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Identify", id: 0x3, description: "Identify",
            details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light).",

            children: [
                {
                    tag: "attribute", name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
                    default: 0
                },

                {
                    tag: "attribute", name: "IdentifyType", id: 0x1, type: "enum8", conformance: "M", default: 0,

                    children: [
                        { tag: "datatype", name: "None", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "VisibleLight", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "VisibleLed", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "AudibleBeep", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Display", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Actuator", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "Identify", id: 0x0, access: "R M", conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "IdentifyTime", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "TriggerEffect", id: 0x40, access: "R M", conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "EffectIdentifier", type: "IdentifyEffectIdentifier", conformance: "M" },
                        { tag: "datatype", name: "EffectVariant", type: "IdentifyEffectVariant", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "IdentifyEffectIdentifier", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Blink", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Breathe", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Okay", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ChannelChange", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "FinishEffect", id: 0xfe, conformance: "M" },
                        { tag: "datatype", name: "StopEffect", id: 0xff, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "IdentifyEffectVariant", type: "enum8", conformance: "M",
                    children: [{ tag: "datatype", name: "Default", id: 0x0, conformance: "M" }]
                }
            ]
        },

        {
            tag: "cluster", name: "IlluminanceMeasurement", id: 0x400, description: "Illuminance Measurement",
            details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance " +
                "measurements.",

            children: [
                {
                    tag: "attribute", name: "IllumMeasuredValue", id: 0x0, type: "uint16", conformance: "M", default: 0,
                    quality: "X P"
                },
                {
                    tag: "attribute", name: "IllumMinMeasuredValue", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "1 to 65533", quality: "X"
                },
                {
                    tag: "attribute", name: "IllumMaxMeasuredValue", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "2 to 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "IllumTolerance", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 2048"
                },
                {
                    tag: "attribute", name: "IllumLightSensorType", id: 0x4, type: "enum8", conformance: "O",
                    default: 255, quality: "X"
                }
            ]
        },

        {
            tag: "cluster", name: "KeypadInput", id: 0x509, description: "Keypad Input",
            details: "This cluster provides an interface for controlling a device like a TV using action commands such as " +
                "UP, DOWN, and SELECT.",

            children: [
                {
                    tag: "command", name: "SendKey", id: 0x0, conformance: "M", direction: "request",
                    response: "SendKeyResponse",
                    children: [{ tag: "datatype", name: "KeyCode", type: "CecKeyCode", conformance: "M" }]
                },
                {
                    tag: "command", name: "SendKeyResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [{ tag: "datatype", name: "Status", type: "KeypadInputStatusEnum", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "CecKeyCode", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Select", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Up", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Left", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Right", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "RightUp", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "RightDown", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "LeftUp", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "LeftDown", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "RootMenu", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "SetupMenu", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "ContentsMenu", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "FavoriteMenu", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "Exit", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "MediaTopMenu", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "MediaContextSensitiveMenu", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "NumberEntryMode", id: 0x1d, conformance: "M" },
                        { tag: "datatype", name: "Number11", id: 0x1e, conformance: "M" },
                        { tag: "datatype", name: "Number12", id: 0x1f, conformance: "M" },
                        { tag: "datatype", name: "Number0OrNumber10", id: 0x20, conformance: "M" },
                        { tag: "datatype", name: "Numbers1", id: 0x21, conformance: "M" },
                        { tag: "datatype", name: "Numbers2", id: 0x22, conformance: "M" },
                        { tag: "datatype", name: "Numbers3", id: 0x23, conformance: "M" },
                        { tag: "datatype", name: "Numbers4", id: 0x24, conformance: "M" },
                        { tag: "datatype", name: "Numbers5", id: 0x25, conformance: "M" },
                        { tag: "datatype", name: "Numbers6", id: 0x26, conformance: "M" },
                        { tag: "datatype", name: "Numbers7", id: 0x27, conformance: "M" },
                        { tag: "datatype", name: "Numbers8", id: 0x28, conformance: "M" },
                        { tag: "datatype", name: "Numbers9", id: 0x29, conformance: "M" },
                        { tag: "datatype", name: "Dot", id: 0x2a, conformance: "M" },
                        { tag: "datatype", name: "Enter", id: 0x2b, conformance: "M" },
                        { tag: "datatype", name: "Clear", id: 0x2c, conformance: "M" },
                        { tag: "datatype", name: "NextFavorite", id: 0x2f, conformance: "M" },
                        { tag: "datatype", name: "ChannelUp", id: 0x30, conformance: "M" },
                        { tag: "datatype", name: "ChannelDown", id: 0x31, conformance: "M" },
                        { tag: "datatype", name: "PreviousChannel", id: 0x32, conformance: "M" },
                        { tag: "datatype", name: "SoundSelect", id: 0x33, conformance: "M" },
                        { tag: "datatype", name: "InputSelect", id: 0x34, conformance: "M" },
                        { tag: "datatype", name: "DisplayInformation", id: 0x35, conformance: "M" },
                        { tag: "datatype", name: "Help", id: 0x36, conformance: "M" },
                        { tag: "datatype", name: "PageUp", id: 0x37, conformance: "M" },
                        { tag: "datatype", name: "PageDown", id: 0x38, conformance: "M" },
                        { tag: "datatype", name: "Power", id: 0x40, conformance: "M" },
                        { tag: "datatype", name: "VolumeUp", id: 0x41, conformance: "M" },
                        { tag: "datatype", name: "VolumeDown", id: 0x42, conformance: "M" },
                        { tag: "datatype", name: "Mute", id: 0x43, conformance: "M" },
                        { tag: "datatype", name: "Play", id: 0x44, conformance: "M" },
                        { tag: "datatype", name: "Stop", id: 0x45, conformance: "M" },
                        { tag: "datatype", name: "Pause", id: 0x46, conformance: "M" },
                        { tag: "datatype", name: "Record", id: 0x47, conformance: "M" },
                        { tag: "datatype", name: "Rewind", id: 0x48, conformance: "M" },
                        { tag: "datatype", name: "FastForward", id: 0x49, conformance: "M" },
                        { tag: "datatype", name: "Eject", id: 0x4a, conformance: "M" },
                        { tag: "datatype", name: "Forward", id: 0x4b, conformance: "M" },
                        { tag: "datatype", name: "Backward", id: 0x4c, conformance: "M" },
                        { tag: "datatype", name: "StopRecord", id: 0x4d, conformance: "M" },
                        { tag: "datatype", name: "PauseRecord", id: 0x4e, conformance: "M" },
                        { tag: "datatype", name: "Reserved", id: 0x4f, conformance: "M" },
                        { tag: "datatype", name: "Angle", id: 0x50, conformance: "M" },
                        { tag: "datatype", name: "SubPicture", id: 0x51, conformance: "M" },
                        { tag: "datatype", name: "VideoOnDemand", id: 0x52, conformance: "M" },
                        { tag: "datatype", name: "ElectronicProgramGuide", id: 0x53, conformance: "M" },
                        { tag: "datatype", name: "TimerProgramming", id: 0x54, conformance: "M" },
                        { tag: "datatype", name: "InitialConfiguration", id: 0x55, conformance: "M" },
                        { tag: "datatype", name: "SelectBroadcastType", id: 0x56, conformance: "M" },
                        { tag: "datatype", name: "SelectSoundPresentation", id: 0x57, conformance: "M" },
                        { tag: "datatype", name: "PlayFunction", id: 0x60, conformance: "M" },
                        { tag: "datatype", name: "PausePlayFunction", id: 0x61, conformance: "M" },
                        { tag: "datatype", name: "RecordFunction", id: 0x62, conformance: "M" },
                        { tag: "datatype", name: "PauseRecordFunction", id: 0x63, conformance: "M" },
                        { tag: "datatype", name: "StopFunction", id: 0x64, conformance: "M" },
                        { tag: "datatype", name: "MuteFunction", id: 0x65, conformance: "M" },
                        { tag: "datatype", name: "RestoreVolumeFunction", id: 0x66, conformance: "M" },
                        { tag: "datatype", name: "TuneFunction", id: 0x67, conformance: "M" },
                        { tag: "datatype", name: "SelectMediaFunction", id: 0x68, conformance: "M" },
                        { tag: "datatype", name: "SelectAvInputFunction", id: 0x69, conformance: "M" },
                        { tag: "datatype", name: "SelectAudioInputFunction", id: 0x6a, conformance: "M" },
                        { tag: "datatype", name: "PowerToggleFunction", id: 0x6b, conformance: "M" },
                        { tag: "datatype", name: "PowerOffFunction", id: 0x6c, conformance: "M" },
                        { tag: "datatype", name: "PowerOnFunction", id: 0x6d, conformance: "M" },
                        { tag: "datatype", name: "F1Blue", id: 0x71, conformance: "M" },
                        { tag: "datatype", name: "F2Red", id: 0x72, conformance: "M" },
                        { tag: "datatype", name: "F3Green", id: 0x73, conformance: "M" },
                        { tag: "datatype", name: "F4Yellow", id: 0x74, conformance: "M" },
                        { tag: "datatype", name: "F5", id: 0x75, conformance: "M" },
                        { tag: "datatype", name: "Data", id: 0x76, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "KeypadInputStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "UnsupportedKey", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "InvalidKeyInCurrentState", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "LevelControl", id: 0x8, description: "Level Control",
            details: "Attributes and commands for controlling devices that can be set to a level between fully 'On' and " +
                "fully 'Off.'",

            children: [
                {
                    tag: "attribute", name: "CurrentLevel", id: 0x0, type: "uint8", conformance: "M", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "LevelControlRemainingTime", id: 0x1, type: "uint16", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "MinimumLevel", id: 0x2, type: "uint8", conformance: "O", default: 0 },
                { tag: "attribute", name: "MaximumLevel", id: 0x3, type: "uint8", conformance: "O", default: 0 },
                { tag: "attribute", name: "CurrentFrequency", id: 0x4, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "MinFrequency", id: 0x5, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "MaxFrequency", id: 0x6, type: "uint16", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                { tag: "attribute", name: "OnLevel", id: 0x11, type: "uint8", access: "RW", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "Options", id: 0xf, type: "LevelControlOptions", access: "RW",
                    conformance: "M", default: 0
                },
                {
                    tag: "attribute", name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM",
                    conformance: "O", quality: "X"
                },

                {
                    tag: "command", name: "MoveToLevel", id: 0x0, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "Level", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "Move", id: 0x1, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "MoveMode", type: "MoveMode", conformance: "M" },
                        { tag: "datatype", name: "Rate", type: "uint8", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "Step", id: 0x2, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "StepMode", type: "StepMode", conformance: "M" },
                        { tag: "datatype", name: "StepSize", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "Stop", id: 0x3, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToLevelWithOnOff", id: 0x4, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "Level", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveWithOnOff", id: 0x5, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "MoveMode", type: "MoveMode", conformance: "M" },
                        { tag: "datatype", name: "Rate", type: "uint8", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StepWithOnOff", id: 0x6, conformance: "M", direction: "request",

                    children: [
                        { tag: "datatype", name: "StepMode", type: "StepMode", conformance: "M" },
                        { tag: "datatype", name: "StepSize", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StopWithOnOff", id: 0x7, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "OptionsMask", type: "Options", conformance: "M" },
                        { tag: "datatype", name: "OptionsOverride", type: "Options", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "MoveToClosestFrequency", id: 0x8, conformance: "O", direction: "request",
                    children: [{ tag: "datatype", name: "Frequency", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "LevelControlOptions", type: "map8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "ExecuteIfOff", constraint: "0" },
                        { tag: "datatype", name: "CoupleColorTempToLevel", constraint: "1" }
                    ]
                },

                {
                    tag: "datatype", name: "MoveMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Up", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "StepMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Up", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Down", id: 0x1, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "LocalizationConfiguration", id: 0x2b,
            description: "Localization Configuration",
            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing common languages, units of measurements, and numerical formatting standards. As " +
                "such, Nodes that visually or audibly convey information need a mechanism by which they can be " +
                "configured to use a user’s preferred language, units, etc",

            children: [
                {
                    tag: "attribute", name: "ActiveLocale", id: 0x0, type: "string", access: "RW", conformance: "M",
                    constraint: "max 35"
                },
                {
                    tag: "attribute", name: "SupportedLocales", id: 0x1, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "string" }]
                }
            ]
        },

        {
            tag: "cluster", name: "LowPower", id: 0x508, description: "Low Power",
            details: "This cluster provides an interface for managing low power mode on a device.",
            children: [{ tag: "command", name: "Sleep", id: 0x0, conformance: "M", direction: "request" }]
        },

        {
            tag: "cluster", name: "MediaInput", id: 0x507, description: "Media Input",
            details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
                "TV.",

            children: [
                {
                    tag: "attribute", name: "MediaInputList", id: 0x0, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "InputInfoStruct" }]
                },
                { tag: "attribute", name: "MediaInputCurrentInput", id: 0x1, type: "uint8", conformance: "M", default: 0 },
                {
                    tag: "command", name: "SelectInput", id: 0x0, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "Index", type: "uint8", conformance: "M" }]
                },
                { tag: "command", name: "ShowInputStatus", id: 0x1, conformance: "M", direction: "request" },
                { tag: "command", name: "HideInputStatus", id: 0x2, conformance: "M", direction: "request" },

                {
                    tag: "command", name: "RenameInput", id: 0x3, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "Index", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "InputInfoStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Index", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "InputType", type: "InputTypeEnum", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" },
                        { tag: "datatype", name: "Description", type: "string", conformance: "M", constraint: "max 32" }
                    ]
                },

                {
                    tag: "datatype", name: "InputTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Internal", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Aux", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Coax", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Composite", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Hdmi", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Input", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Line", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Optical", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Video", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Scart", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Usb", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "Other", id: 0xb, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "MediaPlayback", id: 0x506, description: "Media Playback",
            details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
                "device such as a TV or Speaker.",

            children: [
                {
                    tag: "attribute", name: "MediaPlaybackState", id: 0x0, type: "PlaybackStateEnum", conformance: "M",
                    default: 0
                },
                {
                    tag: "attribute", name: "MediaPlaybackStartTime", id: 0x1, type: "epoch-us", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "MediaPlaybackDuration", id: 0x2, type: "uint64", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "MediaPlaybackPlaybackPosition", id: 0x3, type: "PlaybackPositionStruct",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "MediaPlaybackPlaybackSpeed", id: 0x4, type: "single", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "MediaPlaybackPlaybackSeekRangeEnd", id: 0x5, type: "uint64",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "MediaPlaybackPlaybackSeekRangeStart", id: 0x6, type: "uint64",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "command", name: "Play", id: 0x0, conformance: "M", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "Pause", id: 0x1, conformance: "M", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "Stop", id: 0x2, conformance: "M", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "StartOver", id: 0x3, conformance: "O", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "Previous", id: 0x4, conformance: "O", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "Next", id: 0x5, conformance: "O", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "Rewind", id: 0x6, conformance: "O", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "FastForward", id: 0x7, conformance: "O", direction: "request",
                    response: "PlaybackResponse"
                },
                {
                    tag: "command", name: "SkipForward", id: 0x8, conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    children: [{ tag: "datatype", name: "DeltaPositionMilliseconds", type: "uint64", conformance: "M" }]
                },
                {
                    tag: "command", name: "SkipBackward", id: 0x9, conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    children: [{ tag: "datatype", name: "DeltaPositionMilliseconds", type: "uint64", conformance: "M" }]
                },
                {
                    tag: "command", name: "Seek", id: 0xb, conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    children: [{ tag: "datatype", name: "Position", type: "uint64", conformance: "M" }]
                },

                {
                    tag: "command", name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "MediaPlaybackStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "PlaybackStateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Playing", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Paused", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NotPlaying", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Buffering", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "PlaybackPositionStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "UpdatedAt", type: "epoch-us", conformance: "M" },
                        { tag: "datatype", name: "Position", type: "uint64", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "datatype", name: "MediaPlaybackStatusEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "InvalidStateForCommand", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NotActive", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "SpeedOutOfRange", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "SeekOutOfRange", id: 0x5, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ModeSelect", id: 0x50, description: "Mode Select",
            details: "Attributes and commands for selecting a mode from a list of supported options.",

            children: [
                {
                    tag: "attribute", name: "ModeDescription", id: 0x0, type: "string", conformance: "M",
                    constraint: "max 32"
                },
                { tag: "attribute", name: "StandardNamespace", id: 0x1, type: "enum16", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "SupportedModes", id: 0x2, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "ModeOptionStruct" }]
                },
                { tag: "attribute", name: "CurrentMode", id: 0x3, type: "uint8", conformance: "M", quality: "P" },
                {
                    tag: "attribute", name: "StartUpMode", id: 0x4, type: "uint8", access: "RW", conformance: "O",
                    quality: "X"
                },
                { tag: "attribute", name: "OnMode", id: 0x5, type: "uint8", access: "RW", conformance: "O", quality: "X" },
                {
                    tag: "command", name: "ChangeToMode", id: 0x0, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "NewMode", type: "uint8", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "ModeOptionStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Label", type: "string", conformance: "M", constraint: "max 64" },
                        { tag: "datatype", name: "Mode", type: "uint8", conformance: "M" },
                        {
                            tag: "datatype", name: "SemanticTags", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "SemanticTagStruct" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SemanticTagStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "MfgCode", type: "vendor-id", conformance: "M" },
                        { tag: "datatype", name: "Value", type: "enum16", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "NetworkCommissioning", id: 0x31, description: "Network Commissioning",
            details: "Functionality to configure, enable, disable network credentials and access on a Matter device.",

            children: [
                { tag: "attribute", name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M" },
                {
                    tag: "attribute", name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkInfo" }]
                },
                { tag: "attribute", name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA", conformance: "M" },
                {
                    tag: "attribute", name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatus",
                    access: "R A", conformance: "M", quality: "X"
                },
                {
                    tag: "attribute", name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A",
                    conformance: "M", quality: "X"
                },

                {
                    tag: "command", name: "ScanNetworks", id: 0x0, access: "R A", conformance: "M",
                    direction: "request", response: "ScanNetworksResponse",
                    children: [
                        { tag: "datatype", name: "Ssid", type: "octstr", conformance: "O", quality: "X" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ScanNetworksResponse", id: 0x1, conformance: "M", direction: "response",

                    children: [
                        { tag: "datatype", name: "NetworkingStatus", type: "NetworkCommissioningStatus", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "O" },
                        {
                            tag: "datatype", name: "WiFiScanResults", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "WiFiInterfaceScanResult" }]
                        },
                        {
                            tag: "datatype", name: "ThreadScanResults", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "ThreadInterfaceScanResult" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "R A", conformance: "O",
                    direction: "request", response: "NetworkConfigResponse",
                    children: [
                        { tag: "datatype", name: "Ssid", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Credentials", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "AddOrUpdateThreadNetwork", id: 0x3, access: "R A", conformance: "O",
                    direction: "request", response: "NetworkConfigResponse",
                    children: [
                        { tag: "datatype", name: "OperationalDataset", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "RemoveNetwork", id: 0x4, access: "R A", conformance: "M",
                    direction: "request", response: "NetworkConfigResponse",
                    children: [
                        { tag: "datatype", name: "NetworkId", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "NetworkConfigResponse", id: 0x5, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "NetworkingStatus", type: "NetworkCommissioningStatus", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "O", constraint: "max 512" },
                        { tag: "datatype", name: "NetworkIndex", type: "uint8", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ConnectNetwork", id: 0x6, access: "R A", conformance: "M",
                    direction: "request", response: "ConnectNetworkResponse",
                    children: [
                        { tag: "datatype", name: "NetworkId", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "ConnectNetworkResponse", id: 0x7, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "NetworkingStatus", type: "NetworkCommissioningStatus", conformance: "M" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "O" },
                        { tag: "datatype", name: "ErrorValue", type: "int32", conformance: "M", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "ReorderNetwork", id: 0x8, access: "R A", conformance: "M",
                    direction: "request", response: "NetworkConfigResponse",
                    children: [
                        { tag: "datatype", name: "NetworkId", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "NetworkIndex", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Breadcrumb", type: "uint64", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkInfo", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "NetworkId", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Connected", type: "bool", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkCommissioningStatus", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "OutOfRange", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "BoundsExceeded", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NetworkIdNotFound", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "DuplicateNetworkId", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "NetworkNotFound", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "RegulatoryError", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "AuthFailure", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "UnsupportedSecurity", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "OtherConnectionFailure", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Ipv6Failed", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "IpBindFailed", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "UnknownError", id: 0xc, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiInterfaceScanResult", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Security", type: "WiFiSecurity", conformance: "M" },
                        { tag: "datatype", name: "Ssid", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Bssid", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Channel", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "WiFiBand", type: "WiFiBand", conformance: "M" },
                        { tag: "datatype", name: "Rssi", type: "int8", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiSecurity", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unencrypted", constraint: "0" },
                        { tag: "datatype", name: "WEP", constraint: "1" },
                        { tag: "datatype", name: "WPA-PERSONAL", constraint: "2" },
                        { tag: "datatype", name: "WPA2-PERSONAL", constraint: "3" },
                        { tag: "datatype", name: "WPA3-PERSONAL", constraint: "4" }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiBand", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "2G4", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "3G65", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "5G", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "6G", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "60G", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadInterfaceScanResult", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "PanId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "ExtendedPanId", type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "NetworkName", type: "string", conformance: "M", constraint: "max 16" },
                        { tag: "datatype", name: "Channel", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Version", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "ExtendedAddress", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "Rssi", type: "int8", conformance: "M" },
                        { tag: "datatype", name: "Lqi", type: "uint8", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OccupancySensing", id: 0x406, description: "Occupancy Sensing",
            details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status.",

            children: [
                { tag: "attribute", name: "Occupancy", id: 0x0, type: "OccupancyBitmap", conformance: "M", quality: "P" },
                {
                    tag: "attribute", name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum",
                    conformance: "M"
                },
                {
                    tag: "attribute", name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap",
                    conformance: "M"
                },
                {
                    tag: "attribute", name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8",
                    access: "RW VM", conformance: "O", constraint: "1 to 254", default: 1
                },
                {
                    tag: "attribute", name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16",
                    access: "RW VM", conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16",
                    access: "RW VM", conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8",
                    access: "RW VM", conformance: "O", constraint: "1 to 254", default: 1
                },
                {
                    tag: "attribute", name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16",
                    access: "RW VM", conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16",
                    access: "RW VM", conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8",
                    access: "RW VM", conformance: "O", constraint: "1 to 254", default: 1
                },
                {
                    tag: "datatype", name: "OccupancyBitmap", type: "map8", conformance: "M",
                    children: [{ tag: "datatype", name: "Occupied", constraint: "0" }]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Pir", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Ultrasonic", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "PirAndUltrasonic", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "PhysicalContact", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeBitmap", type: "map8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "PIR", constraint: "0" },
                        { tag: "datatype", name: "Ultrasonic", constraint: "1" },
                        { tag: "datatype", name: "PhysicalContact", constraint: "2" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OnOff", id: 0x6, description: "On/Off",
            details: "Attributes and commands for switching devices between 'On' and 'Off' states.",

            children: [
                { tag: "attribute", name: "OnOff", id: 0x0, type: "bool", conformance: "M", default: true, quality: "P" },
                { tag: "attribute", name: "GlobalSceneControl", id: 0x4000, type: "bool", conformance: "O", default: true },
                { tag: "attribute", name: "OnTime", id: 0x4001, type: "uint16", access: "RW", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "OffWaitTime", id: 0x4002, type: "uint16", access: "RW", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "StartUpOnOff", id: 0x4003, type: "OnOffStartUpOnOff", access: "RW VM",
                    conformance: "O", quality: "X"
                },
                { tag: "command", name: "Off", id: 0x0, conformance: "M", direction: "request" },
                { tag: "command", name: "On", id: 0x1, conformance: "M", direction: "request" },
                { tag: "command", name: "Toggle", id: 0x2, conformance: "M", direction: "request" },

                {
                    tag: "command", name: "OffWithEffect", id: 0x40, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "EffectIdentifier", type: "OnOffEffectIdentifier", conformance: "M" },
                        { tag: "datatype", name: "EffectVariant", type: "uint8", conformance: "M" }
                    ]
                },

                { tag: "command", name: "OnWithRecallGlobalScene", id: 0x41, conformance: "O", direction: "request" },

                {
                    tag: "command", name: "OnWithTimedOff", id: 0x42, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "OnOffControl", type: "OnOffControl", conformance: "M" },
                        { tag: "datatype", name: "OnTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "OffWaitTime", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffStartUpOnOff", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Off", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "On", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "TogglePreviousOnOff", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffEffectIdentifier", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "DelayedAllOff", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "DyingLight", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OnOffControl", type: "map8", conformance: "M",
                    children: [{ tag: "datatype", name: "AcceptOnlyWhenOn", constraint: "0" }]
                }
            ]
        },

        {
            tag: "cluster", name: "OperationalCredentials", id: 0x3e, description: "Operational Credentials",
            details: "This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as " +
                "manage the associated Fabrics.",

            children: [
                {
                    tag: "attribute", name: "Nocs", id: 0x0, type: "list", access: "R A", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "NocStruct" }]
                },
                {
                    tag: "attribute", name: "Fabrics", id: 0x1, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "FabricDescriptorStruct" }]
                },
                {
                    tag: "attribute", name: "SupportedFabrics", id: 0x2, type: "uint8", conformance: "M",
                    constraint: "5 to 254"
                },
                { tag: "attribute", name: "CommissionedFabrics", id: 0x3, type: "uint8", conformance: "M" },
                {
                    tag: "attribute", name: "TrustedRootCertificates", id: 0x4, type: "list", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "octstr" }]
                },
                { tag: "attribute", name: "CurrentFabricIndex", id: 0x5, type: "uint8", conformance: "M" },
                {
                    tag: "command", name: "AttestationRequest", id: 0x0, access: "R A", conformance: "M",
                    direction: "request", response: "AttestationResponse",
                    children: [{ tag: "datatype", name: "AttestationNonce", type: "octstr", conformance: "M" }]
                },

                {
                    tag: "command", name: "AttestationResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "AttestationElements", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "AttestationSignature", type: "octstr", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "CertificateChainRequest", id: 0x2, access: "R A", conformance: "M",
                    direction: "request", response: "CertificateChainResponse",
                    children: [
                        { tag: "datatype", name: "CertificateType", type: "CertificateChainTypeEnum", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response",
                    children: [{ tag: "datatype", name: "Certificate", type: "octstr", conformance: "M" }]
                },

                {
                    tag: "command", name: "CsrRequest", id: 0x4, access: "R A", conformance: "M", direction: "request",
                    response: "CsrResponse",
                    children: [
                        { tag: "datatype", name: "CsrNonce", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "IsForUpdateNoc", type: "bool", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "CsrResponse", id: 0x5, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "NocsrElements", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "AttestationSignature", type: "octstr", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "AddNoc", id: 0x6, access: "R A", conformance: "M", direction: "request",
                    response: "NocResponse",

                    children: [
                        { tag: "datatype", name: "NocValue", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "IcacValue", type: "octstr", conformance: "O" },
                        { tag: "datatype", name: "IpkValue", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "CaseAdminSubject", type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "AdminVendorId", type: "vendor-id", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "UpdateNoc", id: 0x7, access: "R F A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    children: [
                        { tag: "datatype", name: "NocValue", type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "IcacValue", type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "NocResponse", id: 0x8, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "StatusCode", type: "NodeOperationalCertStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "FabricIndex", type: "fabric-idx", conformance: "O" },
                        { tag: "datatype", name: "DebugText", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "UpdateFabricLabel", id: 0x9, access: "R F A", conformance: "M",
                    direction: "request", response: "NocResponse",
                    children: [{ tag: "datatype", name: "Label", type: "string", conformance: "M", constraint: "max 32" }]
                },
                {
                    tag: "command", name: "RemoveFabric", id: 0xa, access: "R A", conformance: "M",
                    direction: "request", response: "NocResponse",
                    children: [{ tag: "datatype", name: "FabricIndex", type: "fabric-idx", conformance: "M" }]
                },
                {
                    tag: "command", name: "AddTrustedRootCertificate", id: 0xb, access: "R A", conformance: "M",
                    direction: "request",
                    children: [{ tag: "datatype", name: "RootCaCertificate", type: "octstr", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "NocStruct", type: "struct", access: "R F", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Noc", id: 0x1, type: "octstr", access: "R S", conformance: "M" },
                        {
                            tag: "datatype", name: "Icac", id: 0x2, type: "octstr", access: "R S", conformance: "M",
                            quality: "X"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FabricDescriptorStruct", type: "struct", access: "R F", conformance: "M",

                    children: [
                        { tag: "datatype", name: "RootPublicKey", id: 0x1, type: "octstr", conformance: "M" },
                        { tag: "datatype", name: "VendorId", id: 0x2, type: "vendor-id", conformance: "M" },
                        { tag: "datatype", name: "FabricId", id: 0x3, type: "fabric-id", conformance: "M" },
                        { tag: "datatype", name: "NodeId", id: 0x4, type: "node-id", conformance: "M" },
                        { tag: "datatype", name: "Label", id: 0x5, type: "string", conformance: "M", constraint: "max 32" }
                    ]
                },

                {
                    tag: "datatype", name: "CertificateChainTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "DacCertificate", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "PaiCertificate", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "NodeOperationalCertStatusEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "InvalidPublicKey", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "InvalidNodeOpId", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "InvalidNoc", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "MissingCsr", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "TableFull", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "InvalidAdminSubject", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "FabricConflict", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "LabelConflict", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "InvalidFabricIndex", id: 0xb, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PowerSource", id: 0x2f, description: "Power Source",
            details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
                "provides power to the Node.",

            children: [
                { tag: "attribute", name: "PowerSourceStatus", id: 0x0, type: "PowerSourceStatusEnum", conformance: "M" },
                { tag: "attribute", name: "PowerSourceOrder", id: 0x1, type: "uint8", conformance: "M" },
                {
                    tag: "attribute", name: "PowerSourceDescription", id: 0x2, type: "string", conformance: "M",
                    constraint: "max 60"
                },
                {
                    tag: "attribute", name: "PowerSourceWiredAssessedInputVoltage", id: 0x3, type: "uint32",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceWiredAssessedInputFrequency", id: 0x4, type: "uint16",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceWiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "PowerSourceWiredAssessedCurrent", id: 0x6, type: "uint32",
                    conformance: "O", quality: "X"
                },
                { tag: "attribute", name: "PowerSourceWiredNominalVoltage", id: 0x7, type: "uint32", conformance: "O" },
                { tag: "attribute", name: "PowerSourceWiredMaximumCurrent", id: 0x8, type: "uint32", conformance: "O" },
                { tag: "attribute", name: "PowerSourceWiredPresent", id: 0x9, type: "bool", conformance: "O" },
                {
                    tag: "attribute", name: "PowerSourceActiveWiredFaults", id: 0xa, type: "list", conformance: "O",
                    constraint: "max 8",
                    children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
                },
                { tag: "attribute", name: "PowerSourceBatVoltage", id: 0xb, type: "uint32", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "PowerSourceBatPercentRemaining", id: 0xc, type: "uint8", conformance: "O",
                    constraint: "max 200", quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceBatTimeRemaining", id: 0xd, type: "uint32", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceBatChargeLevel", id: 0xe, type: "BatChargeLevelEnum",
                    conformance: "O"
                },
                { tag: "attribute", name: "PowerSourceBatReplacementNeeded", id: 0xf, type: "bool", conformance: "O" },
                {
                    tag: "attribute", name: "PowerSourceBatReplaceability", id: 0x10, type: "BatReplaceabilityEnum",
                    conformance: "O"
                },
                { tag: "attribute", name: "PowerSourceBatPresent", id: 0x11, type: "bool", conformance: "O" },
                {
                    tag: "attribute", name: "PowerSourceActiveBatFaults", id: 0x12, type: "list", conformance: "O",
                    constraint: "max 8",
                    children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
                },
                {
                    tag: "attribute", name: "PowerSourceBatReplacementDescription", id: 0x13, type: "string",
                    conformance: "O", constraint: "max 60"
                },
                {
                    tag: "attribute", name: "PowerSourceBatCommonDesignation", id: 0x14,
                    type: "BatCommonDesignationEnum", conformance: "O"
                },
                {
                    tag: "attribute", name: "PowerSourceBatAnsiDesignation", id: 0x15, type: "string", conformance: "O",
                    constraint: "max 20"
                },
                {
                    tag: "attribute", name: "PowerSourceBatIecDesignation", id: 0x16, type: "string", conformance: "O",
                    constraint: "max 20"
                },
                {
                    tag: "attribute", name: "PowerSourceBatApprovedChemistry", id: 0x17,
                    type: "BatApprovedChemistryEnum", conformance: "O"
                },
                { tag: "attribute", name: "PowerSourceBatCapacity", id: 0x18, type: "uint32", conformance: "O" },
                { tag: "attribute", name: "PowerSourceBatQuantity", id: 0x19, type: "uint8", conformance: "O" },
                {
                    tag: "attribute", name: "PowerSourceBatChargeState", id: 0x1a, type: "BatChargeStateEnum",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "PowerSourceBatTimeToFullCharge", id: 0x1b, type: "uint32",
                    conformance: "O", quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceBatFunctionalWhileCharging", id: 0x1c, type: "bool",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "PowerSourceBatChargingCurrent", id: 0x1d, type: "uint32", conformance: "O",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PowerSourceActiveBatChargeFaults", id: 0x1e, type: "list",
                    conformance: "O", constraint: "max 16",
                    children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
                },

                {
                    tag: "event", name: "WiredFaultChange", id: 0x0, conformance: "O", priority: "info",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                            children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                            children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "BatFaultChange", id: 0x1, conformance: "O", priority: "info",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                            children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                            children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "event", name: "BatChargeFaultChange", id: 0x2, conformance: "O", priority: "info",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 16",
                            children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 16",
                            children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PowerSourceStatusEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Active", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Standby", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Unavailable", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "WiredCurrentTypeEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Ac", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Dc", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "WiredFaultEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "OverVoltage", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "UnderVoltage", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeLevelEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Warning", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Critical", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatReplaceabilityEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "NotReplaceable", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "UserReplaceable", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "FactoryReplaceable", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatFaultEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "OverTemp", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "UnderTemp", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatCommonDesignationEnum", type: "enum16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Aaa", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Aa", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "C", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "D", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "4V5", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "6V0", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "9V0", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "12Aa", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Aaaa", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "A", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "B", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "F", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "N", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "No6", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "SubC", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "A23", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "A27", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "Ba5800", id: 0x12, conformance: "M" },
                        { tag: "datatype", name: "Duplex", id: 0x13, conformance: "M" },
                        { tag: "datatype", name: "4Sr44", id: 0x14, conformance: "M" },
                        { tag: "datatype", name: "523", id: 0x15, conformance: "M" },
                        { tag: "datatype", name: "531", id: 0x16, conformance: "M" },
                        { tag: "datatype", name: "15V0", id: 0x17, conformance: "M" },
                        { tag: "datatype", name: "22V5", id: 0x18, conformance: "M" },
                        { tag: "datatype", name: "30V0", id: 0x19, conformance: "M" },
                        { tag: "datatype", name: "45V0", id: 0x1a, conformance: "M" },
                        { tag: "datatype", name: "67V5", id: 0x1b, conformance: "M" },
                        { tag: "datatype", name: "J", id: 0x1c, conformance: "M" },
                        { tag: "datatype", name: "Cr123A", id: 0x1d, conformance: "M" },
                        { tag: "datatype", name: "Cr2", id: 0x1e, conformance: "M" },
                        { tag: "datatype", name: "2Cr5", id: 0x1f, conformance: "M" },
                        { tag: "datatype", name: "CrP2", id: 0x20, conformance: "M" },
                        { tag: "datatype", name: "CrV3", id: 0x21, conformance: "M" },
                        { tag: "datatype", name: "Sr41", id: 0x22, conformance: "M" },
                        { tag: "datatype", name: "Sr43", id: 0x23, conformance: "M" },
                        { tag: "datatype", name: "Sr44", id: 0x24, conformance: "M" },
                        { tag: "datatype", name: "Sr45", id: 0x25, conformance: "M" },
                        { tag: "datatype", name: "Sr48", id: 0x26, conformance: "M" },
                        { tag: "datatype", name: "Sr54", id: 0x27, conformance: "M" },
                        { tag: "datatype", name: "Sr55", id: 0x28, conformance: "M" },
                        { tag: "datatype", name: "Sr57", id: 0x29, conformance: "M" },
                        { tag: "datatype", name: "Sr58", id: 0x2a, conformance: "M" },
                        { tag: "datatype", name: "Sr59", id: 0x2b, conformance: "M" },
                        { tag: "datatype", name: "Sr60", id: 0x2c, conformance: "M" },
                        { tag: "datatype", name: "Sr63", id: 0x2d, conformance: "M" },
                        { tag: "datatype", name: "Sr64", id: 0x2e, conformance: "M" },
                        { tag: "datatype", name: "Sr65", id: 0x2f, conformance: "M" },
                        { tag: "datatype", name: "Sr66", id: 0x30, conformance: "M" },
                        { tag: "datatype", name: "Sr67", id: 0x31, conformance: "M" },
                        { tag: "datatype", name: "Sr68", id: 0x32, conformance: "M" },
                        { tag: "datatype", name: "Sr69", id: 0x33, conformance: "M" },
                        { tag: "datatype", name: "Sr516", id: 0x34, conformance: "M" },
                        { tag: "datatype", name: "Sr731", id: 0x35, conformance: "M" },
                        { tag: "datatype", name: "Sr712", id: 0x36, conformance: "M" },
                        { tag: "datatype", name: "Lr932", id: 0x37, conformance: "M" },
                        { tag: "datatype", name: "A5", id: 0x38, conformance: "M" },
                        { tag: "datatype", name: "A10", id: 0x39, conformance: "M" },
                        { tag: "datatype", name: "A13", id: 0x3a, conformance: "M" },
                        { tag: "datatype", name: "A312", id: 0x3b, conformance: "M" },
                        { tag: "datatype", name: "A675", id: 0x3c, conformance: "M" },
                        { tag: "datatype", name: "Ac41E", id: 0x3d, conformance: "M" },
                        { tag: "datatype", name: "10180", id: 0x3e, conformance: "M" },
                        { tag: "datatype", name: "10280", id: 0x3f, conformance: "M" },
                        { tag: "datatype", name: "10440", id: 0x40, conformance: "M" },
                        { tag: "datatype", name: "14250", id: 0x41, conformance: "M" },
                        { tag: "datatype", name: "14430", id: 0x42, conformance: "M" },
                        { tag: "datatype", name: "14500", id: 0x43, conformance: "M" },
                        { tag: "datatype", name: "14650", id: 0x44, conformance: "M" },
                        { tag: "datatype", name: "15270", id: 0x45, conformance: "M" },
                        { tag: "datatype", name: "16340", id: 0x46, conformance: "M" },
                        { tag: "datatype", name: "Rcr123A", id: 0x47, conformance: "M" },
                        { tag: "datatype", name: "17500", id: 0x48, conformance: "M" },
                        { tag: "datatype", name: "17670", id: 0x49, conformance: "M" },
                        { tag: "datatype", name: "18350", id: 0x4a, conformance: "M" },
                        { tag: "datatype", name: "18500", id: 0x4b, conformance: "M" },
                        { tag: "datatype", name: "18650", id: 0x4c, conformance: "M" },
                        { tag: "datatype", name: "19670", id: 0x4d, conformance: "M" },
                        { tag: "datatype", name: "25500", id: 0x4e, conformance: "M" },
                        { tag: "datatype", name: "26650", id: 0x4f, conformance: "M" },
                        { tag: "datatype", name: "32600", id: 0x50, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatApprovedChemistryEnum", type: "enum16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Alkaline", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "LithiumCarbonFluoride", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "LithiumChromiumOxide", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "LithiumCopperOxide", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "LithiumIronDisulfide", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "LithiumManganeseDioxide", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "LithiumThionylChloride", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Magnesium", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "MercuryOxide", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "NickelOxyhydride", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "SilverOxide", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "ZincAir", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "ZincCarbon", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "ZincChloride", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "ZincManganeseDioxide", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "LeadAcid", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "LithiumCobaltOxide", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "LithiumIon", id: 0x12, conformance: "M" },
                        { tag: "datatype", name: "LithiumIonPolymer", id: 0x13, conformance: "M" },
                        { tag: "datatype", name: "LithiumIronPhosphate", id: 0x14, conformance: "M" },
                        { tag: "datatype", name: "LithiumSulfur", id: 0x15, conformance: "M" },
                        { tag: "datatype", name: "LithiumTitanate", id: 0x16, conformance: "M" },
                        { tag: "datatype", name: "NickelCadmium", id: 0x17, conformance: "M" },
                        { tag: "datatype", name: "NickelHydrogen", id: 0x18, conformance: "M" },
                        { tag: "datatype", name: "NickelIron", id: 0x19, conformance: "M" },
                        { tag: "datatype", name: "NickelMetalHydride", id: 0x1a, conformance: "M" },
                        { tag: "datatype", name: "NickelZinc", id: 0x1b, conformance: "M" },
                        { tag: "datatype", name: "SilverZinc", id: 0x1c, conformance: "M" },
                        { tag: "datatype", name: "SodiumIon", id: 0x1d, conformance: "M" },
                        { tag: "datatype", name: "SodiumSulfur", id: 0x1e, conformance: "M" },
                        { tag: "datatype", name: "ZincBromide", id: 0x1f, conformance: "M" },
                        { tag: "datatype", name: "ZincCerium", id: 0x20, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeStateEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "IsCharging", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "IsAtFullCharge", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "IsNotCharging", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeFaultEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "AmbientTooHot", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "AmbientTooCold", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "BatteryTooHot", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "BatteryTooCold", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "BatteryAbsent", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "BatteryOverVoltage", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "BatteryUnderVoltage", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "ChargerOverVoltage", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "ChargerUnderVoltage", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "SafetyTimeout", id: 0xa, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PowerSourceConfiguration", id: 0x2e,
            description: "Power Source Configuration",
            details: "This cluster is used to describe the configuration and capabilities of a Device's power system.",
            children: [{
                tag: "attribute", name: "Sources", id: 0x0, type: "list", conformance: "M", constraint: "max 6",
                children: [{ tag: "datatype", name: "entry", type: "uint8" }]
            }]
        },

        {
            tag: "cluster", name: "PressureMeasurement", id: 0x403, description: "Pressure Measurement",
            details: "Attributes and commands for configuring the measurement of pressure, and reporting pressure " +
                "measurements.",

            children: [
                {
                    tag: "attribute", name: "PressureMeasuredValue", id: 0x0, type: "int16", conformance: "M",
                    quality: "X P"
                },
                {
                    tag: "attribute", name: "PressureMinMeasuredValue", id: 0x1, type: "int16", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PressureMaxMeasuredValue", id: 0x2, type: "int16", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PressureTolerance", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 2048", default: 0
                },
                {
                    tag: "attribute", name: "PressureScaledValue", id: 0x10, type: "int16", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PressureMinScaledValue", id: 0x11, type: "int16", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PressureMaxScaledValue", id: 0x12, type: "int16", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PressureScaledTolerance", id: 0x13, type: "uint16", conformance: "O",
                    constraint: "max 2048", default: 0, quality: "P"
                },
                { tag: "attribute", name: "PressureScale", id: 0x14, type: "int8", conformance: "O", default: 0 }
            ]
        },

        {
            tag: "cluster", name: "ProxyConfiguration", id: 0x42, description: "Proxy Configuration",
            details: "Cluster to control Proxy Configuration"
        },
        {
            tag: "cluster", name: "ProxyDiscovery", id: 0x43, description: "Proxy Discovery",
            details: "Cluster to control Proxy Discovery"
        },
        {
            tag: "cluster", name: "ProxyValid", id: 0x44, description: "Proxy Valid",
            details: "Cluster to control Proxy Valid"
        },

        {
            tag: "cluster", name: "PumpConfigurationAndControl", id: 0x200,
            description: "Pump Configuration and Control",
            details: "An interface for configuring and controlling pumps.",

            children: [
                { tag: "attribute", name: "MaxPressure", id: 0x0, type: "int16", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "MaxSpeed", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "max 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "MaxFlow", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "max 65534", quality: "X"
                },
                { tag: "attribute", name: "MinConstPressure", id: 0x3, type: "int16", conformance: "O", quality: "X" },
                { tag: "attribute", name: "MaxConstPressure", id: 0x4, type: "int16", conformance: "O", quality: "X" },
                { tag: "attribute", name: "MinCompPressure", id: 0x5, type: "int16", conformance: "O", quality: "X" },
                { tag: "attribute", name: "MaxCompPressure", id: 0x6, type: "int16", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "MinConstSpeed", id: 0x7, type: "uint16", conformance: "O",
                    constraint: "max 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "MaxConstSpeed", id: 0x8, type: "uint16", conformance: "O",
                    constraint: "max 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "MinConstFlow", id: 0x9, type: "uint16", conformance: "O",
                    constraint: "max 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "MaxConstFlow", id: 0xa, type: "uint16", conformance: "O",
                    constraint: "max 65534", quality: "X"
                },
                { tag: "attribute", name: "MinConstTemp", id: 0xb, type: "int16", conformance: "O", quality: "X" },
                { tag: "attribute", name: "MaxConstTemp", id: 0xc, type: "int16", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap", conformance: "O",
                    default: 0, quality: "P"
                },
                { tag: "attribute", name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum", conformance: "M" },
                { tag: "attribute", name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum", conformance: "M" },
                {
                    tag: "attribute", name: "Capacity", id: 0x13, type: "int16", conformance: "M", constraint: "min 0",
                    quality: "X P"
                },
                {
                    tag: "attribute", name: "Speed", id: 0x14, type: "uint16", conformance: "O",
                    constraint: "max 65534", quality: "X"
                },
                {
                    tag: "attribute", name: "LifetimeRunningHours", id: 0x15, type: "uint24", access: "RW VM",
                    conformance: "O", default: 0, quality: "X"
                },
                { tag: "attribute", name: "PumpPower", id: 0x16, type: "uint24", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32", access: "RW VM",
                    conformance: "O", default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "OperationMode", id: 0x20, type: "OperationModeEnum", access: "RW VM",
                    conformance: "M", default: 0
                },
                {
                    tag: "attribute", name: "ControlMode", id: 0x21, type: "ControlModeEnum", access: "RW VM",
                    conformance: "O", default: 0
                },
                { tag: "event", name: "SupplyVoltageLow", id: 0x0, conformance: "O", priority: "info" },
                { tag: "event", name: "SupplyVoltageHigh", id: 0x1, conformance: "O", priority: "info" },
                { tag: "event", name: "PowerMissingPhase", id: 0x2, conformance: "O", priority: "info" },
                { tag: "event", name: "SystemPressureLow", id: 0x3, conformance: "O", priority: "info" },
                { tag: "event", name: "SystemPressureHigh", id: 0x4, conformance: "O", priority: "info" },
                { tag: "event", name: "DryRunning", id: 0x5, conformance: "O", priority: "critical" },
                { tag: "event", name: "MotorTemperatureHigh", id: 0x6, conformance: "O", priority: "info" },
                { tag: "event", name: "PumpMotorFatalFailure", id: 0x7, conformance: "O", priority: "critical" },
                { tag: "event", name: "ElectronicTemperatureHigh", id: 0x8, conformance: "O", priority: "info" },
                { tag: "event", name: "PumpBlocked", id: 0x9, conformance: "O", priority: "critical" },
                { tag: "event", name: "SensorFailure", id: 0xa, conformance: "O", priority: "info" },
                { tag: "event", name: "ElectronicNonFatalFailure", id: 0xb, conformance: "O", priority: "info" },
                { tag: "event", name: "ElectronicFatalFailure", id: 0xc, conformance: "O", priority: "critical" },
                { tag: "event", name: "GeneralFault", id: 0xd, conformance: "O", priority: "info" },
                { tag: "event", name: "Leakage", id: 0xe, conformance: "O", priority: "info" },
                { tag: "event", name: "AirDetection", id: 0xf, conformance: "O", priority: "info" },
                { tag: "event", name: "TurbineOperation", id: 0x10, conformance: "O", priority: "info" },

                {
                    tag: "datatype", name: "PumpStatusBitmap", type: "map16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "DeviceFault", constraint: "0" },
                        { tag: "datatype", name: "Supplyfault", constraint: "1" },
                        { tag: "datatype", name: "SpeedLow", constraint: "2" },
                        { tag: "datatype", name: "SpeedHigh", constraint: "3" },
                        { tag: "datatype", name: "LocalOverride", constraint: "4" },
                        { tag: "datatype", name: "Running", constraint: "5" },
                        { tag: "datatype", name: "RemotePressure", constraint: "6" },
                        { tag: "datatype", name: "RemoteFlow", constraint: "7" },
                        { tag: "datatype", name: "remoteTemperature", constraint: "8" }
                    ]
                },

                {
                    tag: "datatype", name: "OperationModeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Normal", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Minimum", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Maximum", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Local", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ControlModeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ConstantSpeed", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "ConstantPressure", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "ProportionalPressure", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "ConstantFlow", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "ConstantTemperature", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Automatic", id: 0x7, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PulseWidthModulation", id: 0x1c, description: "Pulse Width Modulation",
            details: "Cluster to control pulse width modulation"
        },

        {
            tag: "cluster", name: "RelativeHumidityMeasurement", id: 0x405,
            description: "Relative Humidity Measurement",
            details: "Attributes and commands for configuring the measurement of relative humidity, and reporting " +
                "relative humidity measurements.",

            children: [
                {
                    tag: "attribute", name: "RelativeHumidityMeasuredValue", id: 0x0, type: "uint16", conformance: "M",
                    quality: "X P"
                },
                {
                    tag: "attribute", name: "RelativeHumidityMinMeasuredValue", id: 0x1, type: "uint16",
                    conformance: "M", constraint: "max 9999", quality: "X"
                },
                {
                    tag: "attribute", name: "RelativeHumidityMaxMeasuredValue", id: 0x2, type: "uint16",
                    conformance: "M", constraint: "1 to 10000", quality: "X"
                },
                {
                    tag: "attribute", name: "RelativeHumidityTolerance", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 2048"
                }
            ]
        },

        {
            tag: "cluster", name: "Scenes", id: 0x5, description: "Scenes",
            details: "Attributes and commands for scene configuration and manipulation.",

            children: [
                { tag: "attribute", name: "SceneCount", id: 0x0, type: "uint8", conformance: "M", default: 0 },
                { tag: "attribute", name: "CurrentScene", id: 0x1, type: "uint8", conformance: "M", default: 0 },
                { tag: "attribute", name: "CurrentGroup", id: 0x2, type: "group-id", conformance: "M", default: 0 },
                { tag: "attribute", name: "SceneValid", id: 0x3, type: "bool", conformance: "M", default: true },
                { tag: "attribute", name: "SceneNameSupport", id: 0x4, type: "map8", conformance: "M", default: 0 },
                { tag: "attribute", name: "LastConfiguredBy", id: 0x5, type: "node-id", conformance: "O", quality: "X" },

                {
                    tag: "command", name: "AddScene", id: 0x0, access: "R F M", conformance: "M", direction: "request",
                    response: "AddSceneResponse",

                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "SceneName", type: "string", conformance: "M" },
                        {
                            tag: "datatype", name: "ExtensionFieldSets", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "ExtensionFieldSet" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "ViewScene", id: 0x1, access: "R F", conformance: "M", direction: "request",
                    response: "ViewSceneResponse",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "RemoveScene", id: 0x2, access: "R F M", conformance: "M",
                    direction: "request", response: "RemoveSceneResponse",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "RemoveAllScenes", id: 0x3, access: "R F M", conformance: "M",
                    direction: "request", response: "RemoveAllScenesResponse",
                    children: [{ tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }]
                },

                {
                    tag: "command", name: "StoreScene", id: 0x4, access: "R F M", conformance: "M",
                    direction: "request", response: "StoreSceneResponse",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "RecallScene", id: 0x5, access: "R F", conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "O", quality: "X" }
                    ]
                },

                {
                    tag: "command", name: "GetSceneMembership", id: 0x6, access: "R F", conformance: "M",
                    direction: "request", response: "GetSceneMembershipResponse",
                    children: [{ tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }]
                },

                {
                    tag: "command", name: "EnhancedAddScene", id: 0x40, access: "R F", conformance: "O",
                    direction: "request", response: "EnhancedAddSceneResponse",

                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "SceneName", type: "string", conformance: "M" },
                        {
                            tag: "datatype", name: "ExtensionFieldSets", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "ExtensionFieldSet" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedViewScene", id: 0x41, access: "R F", conformance: "O",
                    direction: "request", response: "EnhancedViewSceneResponse",
                    children: [
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "CopyScene", id: 0x42, access: "R F", conformance: "O", direction: "request",
                    response: "CopySceneResponse",

                    children: [
                        { tag: "datatype", name: "Mode", type: "ScenesCopyMode", conformance: "M" },
                        { tag: "datatype", name: "GroupIdentifierFrom", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneIdentifierFrom", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "GroupIdentifierTo", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneIdentifierTo", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",

                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "O" },
                        { tag: "datatype", name: "SceneName", type: "string", conformance: "O" },
                        {
                            tag: "datatype", name: "ExtensionFieldSets", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "ExtensionFieldSet" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GetSceneMembershipResponse", id: 0x6, conformance: "M",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "Capacity", type: "uint8", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        {
                            tag: "datatype", name: "SceneList", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "uint8" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedAddSceneResponse", id: 0x40, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "EnhancedViewSceneResponse", id: 0x41, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "O" },
                        { tag: "datatype", name: "SceneName", type: "string", conformance: "O" },
                        {
                            tag: "datatype", name: "ExtensionFieldSets", type: "list", conformance: "O",
                            children: [{ tag: "datatype", name: "entry", type: "ExtensionFieldSet" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "CopySceneResponse", id: 0x42, conformance: "O", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "GroupIdentifierFrom", type: "group-id", conformance: "M" },
                        { tag: "datatype", name: "SceneIdentifierFrom", type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ExtensionFieldSet", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ClusterId", type: "cluster-id", conformance: "M" },
                        {
                            tag: "datatype", name: "AttributeValueList", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "AttributeValuePair" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AttributeValuePair", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "AttributeId", type: "attrib-id", conformance: "O" },
                        {
                            tag: "datatype", name: "AttributeValue", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "uint8" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ScenesCopyMode", type: "map8", conformance: "M",
                    children: [{ tag: "datatype", name: "CopyAllScenes", constraint: "0" }]
                }
            ]
        },

        {
            tag: "cluster", name: "SoftwareDiagnostics", id: 0x34, description: "Software Diagnostics",
            details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that " +
                "MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",

            children: [
                {
                    tag: "attribute", name: "ThreadMetrics", id: 0x0, type: "list", conformance: "O",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "ThreadMetricsStruct" }]
                },
                { tag: "attribute", name: "CurrentHeapFree", id: 0x1, type: "uint64", conformance: "O", default: 0 },
                { tag: "attribute", name: "CurrentHeapUsed", id: 0x2, type: "uint64", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", conformance: "O",
                    default: 0
                },
                { tag: "command", name: "ResetWatermarks", id: 0x0, conformance: "O", direction: "request" },

                {
                    tag: "event", name: "SoftwareFault", id: 0x0, conformance: "O", priority: "info",
                    children: [
                        { tag: "datatype", name: "Id", id: 0x0, type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8" },
                        { tag: "datatype", name: "FaultRecording", id: 0x2, type: "octstr", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadMetricsStruct", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Id", type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "O", constraint: "max 8" },
                        { tag: "datatype", name: "StackFreeCurrent", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "StackFreeMinimum", type: "uint32", conformance: "O" },
                        { tag: "datatype", name: "StackSize", type: "uint32", conformance: "O" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Switch", id: 0x3b, description: "Switch",

            details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions " +
                "by other devices. Two types of switch devices are supported: latching switch (e.g. rocker switch) " +
                "and momentary switch (e.g. push button), distinguished with their feature flags. Interactions with " +
                "the switch device are exposed as attributes (for the latching switch) and as events (for both types " +
                "of switches). An interested party MAY subscribe to these attributes/events and thus be informed of " +
                "the interactions, and can perform actions based on this, for example by sending commands to perform " +
                "an action such as controlling a light or a window shade.",

            children: [
                {
                    tag: "attribute", name: "NumberOfPositions", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "min 2", default: 2
                },
                { tag: "attribute", name: "CurrentPosition", id: 0x1, type: "uint8", conformance: "M", quality: "P" },
                {
                    tag: "attribute", name: "MultiPressMax", id: 0x2, type: "uint8", conformance: "O",
                    constraint: "min 2", default: 2
                },
                {
                    tag: "event", name: "SwitchLatched", id: 0x0, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M" }]
                },
                {
                    tag: "event", name: "InitialPress", id: 0x1, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M" }]
                },
                {
                    tag: "event", name: "LongPress", id: 0x2, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M" }]
                },
                {
                    tag: "event", name: "ShortRelease", id: 0x3, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M" }]
                },
                {
                    tag: "event", name: "LongRelease", id: 0x4, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M" }]
                },

                {
                    tag: "event", name: "MultiPressOngoing", id: 0x5, conformance: "O", priority: "info",
                    children: [
                        { tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "MultiPressComplete", id: 0x6, conformance: "O", priority: "info",
                    children: [
                        { tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TargetNavigator", id: 0x505, description: "Target Navigator",
            details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
                "endpoint.",

            children: [
                {
                    tag: "attribute", name: "TargetNavigatorList", id: 0x0, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "TargetInfoStruct" }]
                },
                {
                    tag: "attribute", name: "TargetNavigatorCurrentTarget", id: 0x1, type: "uint8", conformance: "O",
                    default: 0
                },

                {
                    tag: "command", name: "NavigateTarget", id: 0x0, conformance: "M", direction: "request",
                    response: "NavigateTargetResponse",
                    children: [
                        { tag: "datatype", name: "Target", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "command", name: "NavigateTargetResponse", id: 0x1, conformance: "M", direction: "response",
                    children: [
                        { tag: "datatype", name: "Status", type: "TargetNavigatorStatusEnum", conformance: "M" },
                        { tag: "datatype", name: "Data", type: "string", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "TargetInfoStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Identifier", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Name", type: "string", conformance: "M", constraint: "max 32" }
                    ]
                },

                {
                    tag: "datatype", name: "TargetNavigatorStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "TargetNotFound", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TemperatureMeasurement", id: 0x402, description: "Temperature Measurement",
            details: "Attributes and commands for configuring the measurement of temperature, and reporting temperature " +
                "measurements.",

            children: [
                { tag: "attribute", name: "TempMeasuredValue", id: 0x0, type: "int16", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "TempMinMeasuredValue", id: 0x1, type: "int16", conformance: "M",
                    constraint: "max 32766", default: 32768, quality: "X"
                },
                {
                    tag: "attribute", name: "TempMaxMeasuredValue", id: 0x2, type: "int16", conformance: "M",
                    default: 32768, quality: "X"
                },
                {
                    tag: "attribute", name: "TempTolerance", id: 0x3, type: "uint16", conformance: "O",
                    constraint: "max 2048", default: 0
                }
            ]
        },

        {
            tag: "cluster", name: "Thermostat", id: 0x201, description: "Thermostat",
            details: "An interface for configuring and controlling the functionality of a thermostat.",

            children: [
                { tag: "attribute", name: "LocalTemperature", id: 0x0, type: "int16", conformance: "M", quality: "X P" },
                { tag: "attribute", name: "OutdoorTemperature", id: 0x1, type: "int16", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "ThermostatOccupancy", id: 0x2, type: "map8", conformance: "O", default: 1,
                    children: [{ tag: "datatype", name: "occupied", constraint: "0" }]
                },
                {
                    tag: "attribute", name: "AbsMinHeatSetpointLimit", id: 0x3, type: "int16", conformance: "O",
                    default: 700
                },
                {
                    tag: "attribute", name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "int16", conformance: "O",
                    default: 3000
                },
                {
                    tag: "attribute", name: "AbsMinCoolSetpointLimit", id: 0x5, type: "int16", conformance: "O",
                    default: 1600
                },
                {
                    tag: "attribute", name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "int16", conformance: "O",
                    default: 3200
                },
                {
                    tag: "attribute", name: "PiCoolingDemand", id: 0x7, type: "uint8", conformance: "O",
                    constraint: "max 100", quality: "P"
                },
                {
                    tag: "attribute", name: "PiHeatingDemand", id: 0x8, type: "uint8", conformance: "O",
                    constraint: "max 100", quality: "P"
                },
                {
                    tag: "attribute", name: "HvacSystemTypeConfiguration", id: 0x9, type: "map8", access: "RW VM",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "LocalTemperatureCalibration", id: 0x10, type: "int8", access: "RW VM",
                    conformance: "O", constraint: "max 25", default: 0
                },
                {
                    tag: "attribute", name: "OccupiedCoolingSetpoint", id: 0x11, type: "int16", access: "RW",
                    conformance: "O", constraint: "min -27315", default: 2600
                },
                {
                    tag: "attribute", name: "OccupiedHeatingSetpoint", id: 0x12, type: "int16", access: "RW",
                    conformance: "O", constraint: "min -27315", default: 2000
                },
                {
                    tag: "attribute", name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "int16", access: "RW",
                    conformance: "O", constraint: "min -27315", default: 2600
                },
                {
                    tag: "attribute", name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "int16", access: "RW",
                    conformance: "O", constraint: "min -27315", default: 2000
                },
                {
                    tag: "attribute", name: "MinHeatSetpointLimit", id: 0x15, type: "int16", access: "RW VM",
                    conformance: "O", constraint: "min -27315", default: 700
                },
                {
                    tag: "attribute", name: "MaxHeatSetpointLimit", id: 0x16, type: "int16", access: "RW VM",
                    conformance: "O", constraint: "min -27315", default: 3000
                },
                {
                    tag: "attribute", name: "MinCoolSetpointLimit", id: 0x17, type: "int16", access: "RW VM",
                    conformance: "O", constraint: "min -27315", default: 1600
                },
                {
                    tag: "attribute", name: "MaxCoolSetpointLimit", id: 0x18, type: "int16", access: "RW VM",
                    conformance: "O", constraint: "min -27315", default: 3200
                },
                {
                    tag: "attribute", name: "MinSetpointDeadBand", id: 0x19, type: "int8", access: "RW VM",
                    conformance: "O", constraint: "0 to 25", default: 25
                },
                {
                    tag: "attribute", name: "RemoteSensing", id: 0x1a, type: "map8", access: "RW VM", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "ControlSequenceOfOperation", id: 0x1b, type: "ThermostatControlSequence",
                    access: "RW VM", conformance: "M", default: 4
                },

                {
                    tag: "attribute", name: "SystemMode", id: 0x1c, type: "enum8", access: "RW VM", conformance: "M",
                    default: 1,

                    children: [
                        { tag: "datatype", name: "Off", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Auto", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Cool", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Heat", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "EmergencyHeat", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Precooling", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "FanOnly", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Dry", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Sleep", id: 0x9, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "ThermostatRunningMode", id: 0x1e, type: "enum8", conformance: "O",
                    children: [
                        { tag: "datatype", name: "Off", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Cool", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Heat", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "StartOfWeek", id: 0x20, type: "enum8", conformance: "O",

                    children: [
                        { tag: "datatype", name: "Sunday", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Monday", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Tuesday", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Wednesday", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Thursday", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Friday", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Saturday", id: 0x6, conformance: "M" }
                    ]
                },

                { tag: "attribute", name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", conformance: "O" },
                { tag: "attribute", name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", conformance: "O" },

                {
                    tag: "attribute", name: "TemperatureSetpointHold", id: 0x23, type: "enum8", access: "RW VM",
                    conformance: "O", default: 0,
                    children: [
                        { tag: "datatype", name: "SetpointHoldOff", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "SetpointHoldOn", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16",
                    access: "RW VM", conformance: "O", constraint: "max 1440", default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "ThermostatProgrammingOperationMode", id: 0x25, type: "map8",
                    access: "RW VM", conformance: "O", default: 0
                },

                {
                    tag: "attribute", name: "ThermostatRunningState", id: 0x29, type: "map16", conformance: "O",

                    children: [
                        { tag: "datatype", name: "HeatStateOn", constraint: "0" },
                        { tag: "datatype", name: "CoolStateOn", constraint: "1" },
                        { tag: "datatype", name: "FanStateOn", constraint: "2" },
                        { tag: "datatype", name: "HeatSecondStageStateOn", constraint: "3" },
                        { tag: "datatype", name: "CoolSecondStageStateOn", constraint: "4" },
                        { tag: "datatype", name: "FanSecondStageStateOn", constraint: "5" },
                        { tag: "datatype", name: "FanThirdStageStateOn", constraint: "6" }
                    ]
                },

                { tag: "attribute", name: "SetpointChangeSource", id: 0x30, type: "enum8", conformance: "O" },
                {
                    tag: "attribute", name: "SetpointChangeAmount", id: 0x31, type: "int16", conformance: "O",
                    default: 32768, quality: "X"
                },
                { tag: "attribute", name: "SetpointChangeSourceTimestamp", id: 0x32, type: "epoch-s", conformance: "O" },
                {
                    tag: "attribute", name: "OccupiedSetback", id: 0x34, type: "uint8", access: "RW VM",
                    conformance: "O", quality: "X"
                },
                { tag: "attribute", name: "OccupiedSetbackMin", id: 0x35, type: "uint8", conformance: "O", quality: "X" },
                { tag: "attribute", name: "OccupiedSetbackMax", id: 0x36, type: "uint8", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "UnoccupiedSetback", id: 0x37, type: "uint8", access: "RW VM",
                    conformance: "O", quality: "X"
                },
                { tag: "attribute", name: "UnoccupiedSetbackMin", id: 0x38, type: "uint8", conformance: "O", quality: "X" },
                { tag: "attribute", name: "UnoccupiedSetbackMax", id: 0x39, type: "uint8", conformance: "O", quality: "X" },
                { tag: "attribute", name: "EmergencyHeatDelta", id: 0x3a, type: "uint8", access: "RW VM", conformance: "O" },
                { tag: "attribute", name: "AcType", id: 0x40, type: "enum8", access: "RW VM", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "AcRefrigerantType", id: 0x42, type: "enum8", access: "RW VM",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AcCompressorType", id: 0x43, type: "enum8", access: "RW VM",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AcErrorCode", id: 0x44, type: "map32", access: "RW VM", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "AcLouverPosition", id: 0x45, type: "enum8", access: "RW VM",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AcCoilTemperature", id: 0x46, type: "int16", conformance: "O",
                    constraint: "min -27315", default: 32768, quality: "X"
                },
                {
                    tag: "attribute", name: "AcCapacityFormat", id: 0x47, type: "enum8", access: "RW VM",
                    conformance: "O", default: 0
                },

                {
                    tag: "command", name: "SetpointRaiseLower", id: 0x0, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "Mode", type: "SetpointAdjustMode", conformance: "M" },
                        { tag: "datatype", name: "Amount", type: "int8", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "SetWeeklySchedule", id: 0x1, access: "R M", conformance: "O",
                    direction: "request",

                    children: [
                        { tag: "datatype", name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" },
                        { tag: "datatype", name: "ModeForSequence", type: "ModeForSequence", conformance: "M" },
                        {
                            tag: "datatype", name: "Transitions", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "ThermostatScheduleTransition" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "GetWeeklySchedule", id: 0x2, conformance: "O", direction: "request",
                    response: "GetWeeklyScheduleResponse",
                    children: [
                        { tag: "datatype", name: "DaysToReturn", type: "DayOfWeek", conformance: "M" },
                        { tag: "datatype", name: "ModeToReturn", type: "ModeForSequence", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "ClearWeeklySchedule", id: 0x3, access: "R M", conformance: "O",
                    direction: "request"
                },

                {
                    tag: "command", name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "O", direction: "response",

                    children: [
                        { tag: "datatype", name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" },
                        { tag: "datatype", name: "ModeForSequence", type: "ModeForSequence", conformance: "M" },
                        {
                            tag: "datatype", name: "Transitions", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "ThermostatScheduleTransition" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatControlSequence", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "CoolingOnly", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "CoolingWithReheat", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "HeatingOnly", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "HeatingWithReheat", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "CoolingAndHeating", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "SetpointAdjustMode", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Heat", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Cool", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Both", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "DayOfWeek", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Sunday", constraint: "0" },
                        { tag: "datatype", name: "Monday", constraint: "1" },
                        { tag: "datatype", name: "Tuesday", constraint: "2" },
                        { tag: "datatype", name: "Wednesday", constraint: "3" },
                        { tag: "datatype", name: "Thursday", constraint: "4" },
                        { tag: "datatype", name: "Friday", constraint: "5" },
                        { tag: "datatype", name: "Saturday", constraint: "6" },
                        { tag: "datatype", name: "Away", constraint: "7" }
                    ]
                },

                {
                    tag: "datatype", name: "ModeForSequence", type: "map8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "HeatSetpointPresent", constraint: "0" },
                        { tag: "datatype", name: "CoolSetpointPresent", constraint: "1" }
                    ]
                },

                {
                    tag: "datatype", name: "ThermostatScheduleTransition", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "TransitionTime", id: 0x0, type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "HeatSetpoint", id: 0x1, type: "int16", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "CoolSetpoint", id: 0x2, type: "int16", conformance: "M", quality: "X" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ThermostatUserInterfaceConfiguration", id: 0x204,
            description: "Thermostat User Interface Configuration",
            details: "An interface for configuring the user interface of a thermostat (which may be remote from the " +
                "thermostat).",

            children: [
                {
                    tag: "attribute", name: "TemperatureDisplayMode", id: 0x0, type: "enum8", access: "RW",
                    conformance: "M", default: 0,
                    children: [
                        { tag: "datatype", name: "Celsius", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Fahrenheit", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "KeypadLockout", id: 0x1, type: "enum8", access: "RW VM", conformance: "M",
                    default: 0,

                    children: [
                        { tag: "datatype", name: "NoLockout", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "LevelOneLockout", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "LevelTwoLockout", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "LevelThreeLockout", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "LevelFourLockout", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "LevelfiveLockout", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "ScheduleProgrammingVisibility", id: 0x2, type: "enum8", access: "RW VM",
                    conformance: "O"
                }
            ]
        },

        {
            tag: "cluster", name: "ThreadNetworkDiagnostics", id: 0x35,
            description: "Thread Network Diagnostics",
            details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
                "that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems",

            children: [
                { tag: "attribute", name: "Channel", id: 0x0, type: "uint16", conformance: "M", quality: "X" },
                { tag: "attribute", name: "RoutingRole", id: 0x1, type: "RoutingRole", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "NetworkName", id: 0x2, type: "string", conformance: "M",
                    constraint: "max 16", default: "", quality: "X"
                },
                { tag: "attribute", name: "DiagPanId", id: 0x3, type: "uint16", conformance: "M", default: 0, quality: "X" },
                {
                    tag: "attribute", name: "DiagExtendedPanId", id: 0x4, type: "uint64", conformance: "M", default: 0,
                    quality: "X"
                },
                { tag: "attribute", name: "MeshLocalPrefix", id: 0x5, type: "octstr", conformance: "M", quality: "X" },
                { tag: "attribute", name: "DiagOverrunCount", id: 0x6, type: "uint64", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "NeighborTable", id: 0x7, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "NeighborTable" }]
                },
                {
                    tag: "attribute", name: "RouteTable", id: 0x8, type: "list", conformance: "M",
                    constraint: "max 254",
                    children: [{ tag: "datatype", name: "entry", type: "RouteTable" }]
                },
                { tag: "attribute", name: "PartitionId", id: 0x9, type: "uint32", conformance: "M", quality: "X" },
                { tag: "attribute", name: "Weighting", id: 0xa, type: "uint8", conformance: "M", quality: "X" },
                { tag: "attribute", name: "DataVersion", id: 0xb, type: "uint8", conformance: "M", quality: "X" },
                { tag: "attribute", name: "StableDataVersion", id: 0xc, type: "uint8", conformance: "M", quality: "X" },
                { tag: "attribute", name: "LeaderRouterId", id: 0xd, type: "uint8", conformance: "M", quality: "X" },
                { tag: "attribute", name: "DetachedRoleCount", id: 0xe, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "ChildRoleCount", id: 0xf, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "RouterRoleCount", id: 0x10, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "LeaderRoleCount", id: 0x11, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "AttachAttemptCount", id: 0x12, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "PartitionIdChangeCount", id: 0x13, type: "uint16", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "BetterPartitionAttachAttemptCount", id: 0x14, type: "uint16",
                    conformance: "O", default: 0
                },
                { tag: "attribute", name: "ParentChangeCount", id: 0x15, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxTotalCount", id: 0x16, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxUnicastCount", id: 0x17, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxBroadcastCount", id: 0x18, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxAckRequestedCount", id: 0x19, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxAckedCount", id: 0x1a, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxNoAckRequestedCount", id: 0x1b, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxDataCount", id: 0x1c, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxDataPollCount", id: 0x1d, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxBeaconCount", id: 0x1e, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxBeaconRequestCount", id: 0x1f, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxOtherCount", id: 0x20, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxRetryCount", id: 0x21, type: "uint32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "TxDirectMaxRetryExpiryCount", id: 0x22, type: "uint32", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "TxIndirectMaxRetryExpiryCount", id: 0x23, type: "uint32", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "TxErrCcaCount", id: 0x24, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxErrAbortCount", id: 0x25, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TxErrBusyChannelCount", id: 0x26, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxTotalCount", id: 0x27, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxUnicastCount", id: 0x28, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxBroadcastCount", id: 0x29, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxDataCount", id: 0x2a, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxDataPollCount", id: 0x2b, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxBeaconCount", id: 0x2c, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxBeaconRequestCount", id: 0x2d, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxOtherCount", id: 0x2e, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxAddressFilteredCount", id: 0x2f, type: "uint32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "RxDestaddrFilteredCount", id: 0x30, type: "uint32", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "RxDuplicatedCount", id: 0x31, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxErrNoFrameCount", id: 0x32, type: "uint32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "RxErrUnknownNeighborCount", id: 0x33, type: "uint32", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "RxErrInvalidSrcAddrCount", id: 0x34, type: "uint32", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "RxErrSecCount", id: 0x35, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxErrFcsCount", id: 0x36, type: "uint32", conformance: "O", default: 0 },
                { tag: "attribute", name: "RxErrOtherCount", id: 0x37, type: "uint32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "ActiveTimestamp", id: 0x38, type: "uint64", conformance: "O", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PendingTimestamp", id: 0x39, type: "uint64", conformance: "O", default: 0,
                    quality: "X"
                },
                { tag: "attribute", name: "Delay", id: 0x3a, type: "uint32", conformance: "O", default: 0, quality: "X" },
                {
                    tag: "attribute", name: "SecurityPolicy", id: 0x3b, type: "SecurityPolicy", conformance: "M",
                    quality: "X"
                },
                { tag: "attribute", name: "DiagChannelMask", id: 0x3c, type: "octstr", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "OperationalDatasetComponents", id: 0x3d,
                    type: "OperationalDatasetComponents", conformance: "M", quality: "X"
                },
                {
                    tag: "attribute", name: "ActiveThreadNetworkFaults", id: 0x3e, type: "list", conformance: "M",
                    constraint: "max 4",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkFault" }]
                },
                { tag: "command", name: "ResetCounts", id: 0x0, conformance: "O", direction: "request" },
                {
                    tag: "event", name: "ConnectionStatus", id: 0x0, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" }]
                },

                {
                    tag: "event", name: "NetworkFaultChange", id: 0x1, conformance: "O", priority: "info",

                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "NetworkFault" }]
                        },
                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "NetworkFault" }]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RoutingRole", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Unassigned", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "SleepyEndDevice", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "EndDevice", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Reed", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Router", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Leader", id: 0x6, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "NeighborTable", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ExtAddress", type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "Age", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "Rloc16", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "LinkFrameCounter", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "MleFrameCounter", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "Lqi", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "AverageRssi", type: "int8", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "LastRssi", type: "int8", conformance: "M", quality: "X" },
                        { tag: "datatype", name: "FrameErrorRate", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "MessageErrorRate", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "RxOnWhenIdle", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "FullThreadDevice", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "FullNetworkData", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "IsChild", type: "bool", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "RouteTable", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ExtAddress", type: "uint64", conformance: "M" },
                        { tag: "datatype", name: "Rloc16", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "RouterId", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "NextHop", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "PathCost", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "LqiIn", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "LqiOut", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Age", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "Allocated", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "LinkEstablished", type: "bool", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "SecurityPolicy", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "RotationTime", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "Flags", type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OperationalDatasetComponents", type: "struct", conformance: "M",

                    children: [
                        { tag: "datatype", name: "ActiveTimestampPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "PendingTimestampPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "MasterKeyPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "NetworkNamePresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "ExtendedPanIdPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "MeshLocalPrefixPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "DelayPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "PanIdPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "ChannelPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "PskcPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "SecurityPolicyPresent", type: "bool", conformance: "M" },
                        { tag: "datatype", name: "ChannelMaskPresent", type: "bool", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkFault", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "LinkDown", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "HardwareFailure", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NetworkJammed", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Connected", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "NotConnected", id: 0x1, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TimeFormatLocalization", id: 0x2c, description: "Time Format Localization",
            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually " +
                "or audibly convey time information need a mechanism by which they can be configured to use a user’s " +
                "preferred format.",

            children: [
                { tag: "attribute", name: "HourFormat", id: 0x0, type: "HourFormatEnum", access: "RW", conformance: "M" },
                {
                    tag: "attribute", name: "ActiveCalendarType", id: 0x1, type: "CalendarTypeEnum", access: "RW",
                    conformance: "O"
                },
                {
                    tag: "attribute", name: "SupportedCalendarTypes", id: 0x2, type: "list", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "CalendarTypeEnum" }]
                },

                {
                    tag: "datatype", name: "HourFormatEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "12Hr", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "24Hr", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "CalendarTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Buddhist", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Chinese", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Coptic", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Ethiopian", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Gregorian", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Hebrew", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Indian", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "Islamic", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "Japanese", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "Korean", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Persian", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "Taiwanese", id: 0xb, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TimeSynchronization", id: 0x38, description: "Time Synchronization",
            details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
                "security materials.",

            children: [
                { tag: "attribute", name: "UtcTime", id: 0x0, type: "epoch-us", conformance: "M", quality: "X" },
                { tag: "attribute", name: "Granularity", id: 0x1, type: "GranularityEnum", conformance: "M", default: 0 },
                { tag: "attribute", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "TrustedTimeNodeId", id: 0x3, type: "node-id", access: "RW VA",
                    conformance: "M", quality: "X"
                },
                {
                    tag: "attribute", name: "DefaultNtp", id: 0x4, type: "string", access: "RW VA", conformance: "O",
                    constraint: "max 128", quality: "X"
                },
                {
                    tag: "attribute", name: "TimeZone", id: 0x5, type: "list", access: "RW VM", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "TimeZoneStruct" }]
                },
                {
                    tag: "attribute", name: "DstOffset", id: 0x6, type: "list", access: "RW VM", conformance: "O",
                    children: [{ tag: "datatype", name: "entry", type: "DstOffsetStruct" }]
                },
                {
                    tag: "attribute", name: "LocalTime", id: 0x7, type: "epoch-us", conformance: "O", default: 0,
                    quality: "X"
                },
                { tag: "attribute", name: "TimeZoneDatabase", id: 0x8, type: "bool", conformance: "O", default: true },
                { tag: "attribute", name: "NtpServerPort", id: 0x9, type: "uint16", conformance: "O", quality: "X" },

                {
                    tag: "command", name: "SetUtcTime", id: 0x0, conformance: "M", direction: "request",
                    children: [
                        { tag: "datatype", name: "UtcTime", type: "epoch-us", conformance: "M" },
                        { tag: "datatype", name: "Granularity", type: "GranularityEnum", conformance: "M" },
                        { tag: "datatype", name: "TimeSource", type: "TimeSourceEnum", conformance: "O" }
                    ]
                },

                {
                    tag: "datatype", name: "GranularityEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "NoTimeGranularity", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "MinutesGranularity", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "SecondsGranularity", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "MillisecondsGranularity", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "MicrosecondsGranularity", id: 0x4, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "TimeSourceEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "None", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Unknown", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Admin", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "NodeTimeCluster", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "NonFabricSntp", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "NonFabricNtp", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "FabricSntp", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "FabricNtp", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "MixedNtp", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "NonFabricSntpNts", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "NonFabricNtpNts", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "FabricSntpNts", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "FabricNtpNts", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "MixedNtpNts", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "CloudSource", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "Ptp", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "Gnss", id: 0x10, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "TimeZoneStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M" },
                        { tag: "datatype", name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M" },
                        { tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "max 64" }
                    ]
                },

                {
                    tag: "datatype", name: "DstOffsetStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M" },
                        { tag: "datatype", name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M" },
                        { tag: "datatype", name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "UnitLocalization", id: 0x2d, description: "Unit Localization",
            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing preferences for the units in which values are conveyed in communication to a " +
                "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
                "by which they can be configured to use a user’s preferred unit.",

            children: [
                { tag: "attribute", name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW", conformance: "O" },

                {
                    tag: "datatype", name: "TempUnitEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Fahrenheit", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Celsius", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Kelvin", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "UserLabel", id: 0x41, description: "User Label",
            details: "The User Label Cluster provides a feature to tag an endpoint with zero or more labels.",

            children: [
                {
                    tag: "attribute", name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M",
                    children: [{ tag: "datatype", name: "entry", type: "LabelStruct" }]
                },

                {
                    tag: "datatype", name: "LabelStruct", type: "struct", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Label", type: "string", conformance: "M", constraint: "max 16" },
                        { tag: "datatype", name: "Value", type: "string", conformance: "M", constraint: "max 16" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "WakeOnLan", id: 0x503, description: "Wake on LAN",
            details: "This cluster provides an interface for managing low power mode on a device that supports the Wake " +
                "On LAN protocol.",
            children: [{
                tag: "attribute", name: "WakeOnLanMacAddress", id: 0x0, type: "string", conformance: "O",
                constraint: "max 32"
            }]
        },

        {
            tag: "cluster", name: "WiFiNetworkDiagnostics", id: 0x36, description: "WiFi Network Diagnostics",
            details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
                "that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",

            children: [
                { tag: "attribute", name: "Bssid", id: 0x0, type: "octstr", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "SecurityType", id: 0x1, type: "SecurityTypeEnum", conformance: "M",
                    quality: "X"
                },
                { tag: "attribute", name: "WifiVersion", id: 0x2, type: "WiFiVersionEnum", conformance: "M", quality: "X" },
                {
                    tag: "attribute", name: "ChannelNumber", id: 0x3, type: "uint16", conformance: "M", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "Rssi", id: 0x4, type: "int8", conformance: "M", constraint: "-120 to 0",
                    quality: "X"
                },
                {
                    tag: "attribute", name: "BeaconLostCount", id: 0x5, type: "uint32", conformance: "O", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "BeaconRxCount", id: 0x6, type: "uint32", conformance: "O", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "PacketMulticastRxCount", id: 0x7, type: "uint32", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PacketMulticastTxCount", id: 0x8, type: "uint32", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PacketUnicastRxCount", id: 0x9, type: "uint32", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "PacketUnicastTxCount", id: 0xa, type: "uint32", conformance: "O",
                    default: 0, quality: "X"
                },
                {
                    tag: "attribute", name: "CurrentMaxRate", id: 0xb, type: "uint64", conformance: "O", default: 0,
                    quality: "X"
                },
                {
                    tag: "attribute", name: "OverrunCount", id: 0xc, type: "uint64", conformance: "O", default: 0,
                    quality: "X"
                },
                { tag: "command", name: "ResetCounts", id: 0x0, conformance: "O", direction: "request" },
                {
                    tag: "event", name: "Disconnection", id: 0x0, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "ReasonCode", id: 0x0, type: "uint16", conformance: "M" }]
                },

                {
                    tag: "event", name: "AssociationFailure", id: 0x1, conformance: "O", priority: "info",

                    children: [
                        {
                            tag: "datatype", name: "AssociationFailure", id: 0x0, type: "AssociationFailureCauseEnum",
                            conformance: "M"
                        },
                        { tag: "datatype", name: "Status", id: 0x1, type: "uint16", conformance: "M" }
                    ]
                },

                {
                    tag: "event", name: "ConnectionStatus", id: 0x2, conformance: "O", priority: "info",
                    children: [{ tag: "datatype", name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" }]
                },

                {
                    tag: "datatype", name: "SecurityTypeEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "None", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Wep", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "Wpa", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Wpa2", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Wpa3", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiVersionEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "A", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "B", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "G", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "N", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Ac", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Ax", id: 0x5, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "AssociationFailureCauseEnum", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Unknown", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "AssociationFailed", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "AuthenticationFailed", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "SsidNotFound", id: 0x3, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum", type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Connected", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "NotConnected", id: 0x1, conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "WindowCovering", id: 0x102, description: "Window Covering",
            details: "Provides an interface for controlling and adjusting automatic window coverings.",

            children: [
                { tag: "attribute", name: "WcType", id: 0x0, type: "Type", conformance: "M", default: 0 },
                {
                    tag: "attribute", name: "WcPhysicalClosedLimitLift", id: 0x1, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcPhysicalClosedLimitTilt", id: 0x2, type: "uint16", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "WcCurrentPositionLift", id: 0x3, type: "uint16", conformance: "O", quality: "X" },
                { tag: "attribute", name: "WcCurrentPositionTilt", id: 0x4, type: "uint16", conformance: "O", quality: "X" },
                {
                    tag: "attribute", name: "WcNumberOfActuationsLift", id: 0x5, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcNumberOfActuationsTilt", id: 0x6, type: "uint16", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "WcConfigStatus", id: 0x7, type: "ConfigStatus", conformance: "M", default: 3 },
                {
                    tag: "attribute", name: "WcCurrentPositionLiftPercentage", id: 0x8, type: "percent",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcCurrentPositionTiltPercentage", id: 0x9, type: "percent",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcOperationalStatus", id: 0xa, type: "OperationalStatus", conformance: "M",
                    default: 0, quality: "P"
                },
                {
                    tag: "attribute", name: "WcTargetPositionLiftPercent100Ths", id: 0xb, type: "percent100ths",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcTargetPositionTiltPercent100Ths", id: 0xc, type: "percent100ths",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcEndProductType", id: 0xd, type: "EndProductType", conformance: "M",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcCurrentPositionLiftPercent100Ths", id: 0xe, type: "percent100ths",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcCurrentPositionTiltPercent100Ths", id: 0xf, type: "percent100ths",
                    conformance: "O", quality: "X P"
                },
                {
                    tag: "attribute", name: "WcInstalledOpenLimitLift", id: 0x10, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcInstalledClosedLimitLift", id: 0x11, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcInstalledOpenLimitTilt", id: 0x12, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "WcInstalledClosedLimitTilt", id: 0x13, type: "uint16", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "WcMode", id: 0x17, type: "Mode", access: "RW VM", conformance: "M", default: 0 },
                {
                    tag: "attribute", name: "WcSafetyStatus", id: 0x1a, type: "SafetyStatus", conformance: "O",
                    default: 0, quality: "P"
                },
                { tag: "command", name: "UpOrOpen", id: 0x0, conformance: "M", direction: "request" },
                { tag: "command", name: "DownOrClose", id: 0x1, conformance: "M", direction: "request" },
                { tag: "command", name: "StopMotion", id: 0x2, conformance: "M", direction: "request" },
                {
                    tag: "command", name: "GoToLiftValue", id: 0x4, conformance: "O", direction: "request",
                    children: [{ tag: "datatype", name: "LiftValue", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "GoToLiftPercentage", id: 0x5, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "LiftPercent100ThsValue", type: "percent100ths", conformance: "M" }
                    ]
                },

                {
                    tag: "command", name: "GoToTiltValue", id: 0x7, conformance: "O", direction: "request",
                    children: [{ tag: "datatype", name: "TiltValue", type: "uint16", conformance: "M" }]
                },

                {
                    tag: "command", name: "GoToTiltPercentage", id: 0x8, conformance: "O", direction: "request",
                    children: [
                        { tag: "datatype", name: "TiltPercent100ThsValue", type: "percent100ths", conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "Type", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "RollerShade", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "RollerShade2Motor", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "RollerShadeExterior", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "RollerShadeExterior2Motor", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "Drapery", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "Awning", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "Shutter", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "TiltBlindTiltOnly", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "TiltBlindLiftAndTilt", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "ProjectorScreen", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "ConfigStatus", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "Operational", constraint: "0" },
                        { tag: "datatype", name: "OnlineReserved", constraint: "1" },
                        { tag: "datatype", name: "LiftMovementReversed", constraint: "2" },
                        { tag: "datatype", name: "LiftPositionAware", constraint: "3" },
                        { tag: "datatype", name: "TiltPositionAware", constraint: "4" },
                        { tag: "datatype", name: "LiftEncoderControlled", constraint: "5" },
                        { tag: "datatype", name: "TiltEncoderControlled", constraint: "6" }
                    ]
                },

                {
                    tag: "datatype", name: "OperationalStatus", type: "map8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Global", constraint: "0 to 2" },
                        { tag: "datatype", name: "Lift", constraint: "2 to 4" },
                        { tag: "datatype", name: "Tilt", constraint: "4 to 6" }
                    ]
                },

                {
                    tag: "datatype", name: "EndProductType", type: "enum8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "RollerShade", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "RomanShade", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "BalloonShade", id: 0x2, conformance: "M" },
                        { tag: "datatype", name: "WovenWood", id: 0x3, conformance: "M" },
                        { tag: "datatype", name: "PleatedShade", id: 0x4, conformance: "M" },
                        { tag: "datatype", name: "CellularShade", id: 0x5, conformance: "M" },
                        { tag: "datatype", name: "LayeredShade", id: 0x6, conformance: "M" },
                        { tag: "datatype", name: "LayeredShade2D", id: 0x7, conformance: "M" },
                        { tag: "datatype", name: "SheerShade", id: 0x8, conformance: "M" },
                        { tag: "datatype", name: "TiltOnlyInteriorBlind", id: 0x9, conformance: "M" },
                        { tag: "datatype", name: "InteriorBlind", id: 0xa, conformance: "M" },
                        { tag: "datatype", name: "VerticalBlindStripCurtain", id: 0xb, conformance: "M" },
                        { tag: "datatype", name: "InteriorVenetianBlind", id: 0xc, conformance: "M" },
                        { tag: "datatype", name: "ExteriorVenetianBlind", id: 0xd, conformance: "M" },
                        { tag: "datatype", name: "LateralLeftCurtain", id: 0xe, conformance: "M" },
                        { tag: "datatype", name: "LateralRightCurtain", id: 0xf, conformance: "M" },
                        { tag: "datatype", name: "CentralCurtain", id: 0x10, conformance: "M" },
                        { tag: "datatype", name: "RollerShutter", id: 0x11, conformance: "M" },
                        { tag: "datatype", name: "ExteriorVerticalScreen", id: 0x12, conformance: "M" },
                        { tag: "datatype", name: "AwningTerracePatio", id: 0x13, conformance: "M" },
                        { tag: "datatype", name: "AwningVerticalScreen", id: 0x14, conformance: "M" },
                        { tag: "datatype", name: "TiltOnlyPergola", id: 0x15, conformance: "M" },
                        { tag: "datatype", name: "SwingingShutter", id: 0x16, conformance: "M" },
                        { tag: "datatype", name: "SlidingShutter", id: 0x17, conformance: "M" },
                        { tag: "datatype", name: "Unknown", id: 0xff, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "Mode", type: "map8", conformance: "M",

                    children: [
                        { tag: "datatype", name: "MotorDirectionReversed", constraint: "0" },
                        { tag: "datatype", name: "CalibrationMode", constraint: "1" },
                        { tag: "datatype", name: "MaintenanceMode", constraint: "2" },
                        { tag: "datatype", name: "LedFeedback", constraint: "3" }
                    ]
                },

                {
                    tag: "datatype", name: "SafetyStatus", type: "map16", conformance: "M",

                    children: [
                        { tag: "datatype", name: "RemoteLockout", constraint: "0" },
                        { tag: "datatype", name: "TamperDetection", constraint: "1" },
                        { tag: "datatype", name: "FailedCommunication", constraint: "2" },
                        { tag: "datatype", name: "PositionFailure", constraint: "3" },
                        { tag: "datatype", name: "ThermalProtection", constraint: "4" },
                        { tag: "datatype", name: "ObstacleDetected", constraint: "5" },
                        { tag: "datatype", name: "Power", constraint: "6" },
                        { tag: "datatype", name: "StopInput", constraint: "7" },
                        { tag: "datatype", name: "MotorJammed", constraint: "8" },
                        { tag: "datatype", name: "HardwareFailure", constraint: "9" },
                        { tag: "datatype", name: "ManualOperation", constraint: "10" },
                        { tag: "datatype", name: "Protection", constraint: "11" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BarrierControl", id: 0x103, description: "Barrier Control",
            details: "This cluster provides control of a barrier (garage door).",

            children: [
                { tag: "attribute", name: "BarrierMovingState", id: 0x1, type: "enum8", conformance: "M" },
                { tag: "attribute", name: "BarrierSafetyStatus", id: 0x2, type: "map16", conformance: "M" },
                { tag: "attribute", name: "BarrierCapabilities", id: 0x3, type: "map8", conformance: "M" },
                {
                    tag: "attribute", name: "BarrierOpenEvents", id: 0x4, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534", default: 0
                },
                {
                    tag: "attribute", name: "BarrierCloseEvents", id: 0x5, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534", default: 0
                },
                {
                    tag: "attribute", name: "BarrierCommandOpenEvents", id: 0x6, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534", default: 0
                },
                {
                    tag: "attribute", name: "BarrierCommandCloseEvents", id: 0x7, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534", default: 0
                },
                {
                    tag: "attribute", name: "BarrierOpenPeriod", id: 0x8, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534"
                },
                {
                    tag: "attribute", name: "BarrierClosePeriod", id: 0x9, type: "uint16", access: "RW",
                    conformance: "O", constraint: "max 65534"
                },
                { tag: "attribute", name: "BarrierPosition", id: 0xa, type: "uint8", conformance: "M" },
                {
                    tag: "command", name: "BarrierControlGoToPercent", id: 0x0, conformance: "M", direction: "request",
                    children: [{ tag: "datatype", name: "PercentOpen", type: "uint8", conformance: "M" }]
                },
                { tag: "command", name: "BarrierControlStop", id: 0x1, conformance: "M", direction: "request" }
            ]
        },

        {
            tag: "cluster", name: "ElectricalMeasurement", id: 0xb04, description: "Electrical Measurement",
            details: "Attributes related to the electrical properties of a device. This cluster is used by power outlets " +
                "and other devices that need to provide instantaneous data as opposed to metrology data which should " +
                "be retrieved from the metering cluster..",

            children: [
                { tag: "attribute", name: "MeasurementType", id: 0x0, type: "map32", conformance: "O", default: 0 },
                { tag: "attribute", name: "DcVoltage", id: 0x100, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcVoltageMin", id: 0x101, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcVoltageMax", id: 0x102, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcCurrent", id: 0x103, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcCurrentMin", id: 0x104, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcCurrentMax", id: 0x105, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcPower", id: 0x106, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcPowerMin", id: 0x107, type: "int16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "DcPowerMax", id: 0x108, type: "int16", conformance: "O", default: 32768 },
                {
                    tag: "attribute", name: "DcVoltageMultiplier", id: 0x200, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcVoltageDivisor", id: 0x201, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcCurrentMultiplier", id: 0x202, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcCurrentDivisor", id: 0x203, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcPowerMultiplier", id: 0x204, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcPowerDivisor", id: 0x205, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                { tag: "attribute", name: "AcFrequency", id: 0x300, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "AcFrequencyMin", id: 0x301, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "AcFrequencyMax", id: 0x302, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "NeutralCurrent", id: 0x303, type: "uint16", conformance: "O", default: 0 },
                { tag: "attribute", name: "TotalActivePower", id: 0x304, type: "int32", conformance: "O", default: 0 },
                { tag: "attribute", name: "TotalReactivePower", id: 0x305, type: "int32", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "TotalApparentPower", id: 0x306, type: "uint32", conformance: "O",
                    constraint: "max 16777215", default: 1
                },
                {
                    tag: "attribute", name: "Measured1StHarmonicCurrent", id: 0x307, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "Measured3RdHarmonicCurrent", id: 0x308, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "Measured5ThHarmonicCurrent", id: 0x309, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "Measured7ThHarmonicCurrent", id: 0x30a, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "Measured9ThHarmonicCurrent", id: 0x30b, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "Measured11ThHarmonicCurrent", id: 0x30c, type: "int16", conformance: "O",
                    default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase1StHarmonicCurrent", id: 0x30d, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase3RdHarmonicCurrent", id: 0x30e, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase5ThHarmonicCurrent", id: 0x30f, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase7ThHarmonicCurrent", id: 0x310, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase9ThHarmonicCurrent", id: 0x311, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "MeasuredPhase11ThHarmonicCurrent", id: 0x312, type: "int16",
                    conformance: "O", default: 32768
                },
                {
                    tag: "attribute", name: "AcFrequencyMultiplier", id: 0x400, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcFrequencyDivisor", id: 0x401, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "PowerMultiplier", id: 0x402, type: "uint32", conformance: "O",
                    constraint: "max 16777215", default: 1
                },
                {
                    tag: "attribute", name: "PowerDivisor", id: 0x403, type: "uint32", conformance: "O",
                    constraint: "max 16777215", default: 1
                },
                {
                    tag: "attribute", name: "HarmonicCurrentMultiplier", id: 0x404, type: "int8", conformance: "O",
                    constraint: "min -127", default: 0
                },
                {
                    tag: "attribute", name: "PhaseHarmonicCurrentMultiplier", id: 0x405, type: "int8", conformance: "O",
                    constraint: "min -127", default: 0
                },
                {
                    tag: "attribute", name: "InstantaneousVoltage", id: 0x500, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "InstantaneousLineCurrent", id: 0x501, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "InstantaneousActiveCurrent", id: 0x502, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "InstantaneousReactiveCurrent", id: 0x503, type: "int16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "InstantaneousPower", id: 0x504, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "RmsVoltage", id: 0x505, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "RmsVoltageMin", id: 0x506, type: "uint16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "RmsVoltageMax", id: 0x507, type: "uint16", conformance: "O", default: 32768 },
                { tag: "attribute", name: "RmsCurrent", id: 0x508, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "RmsCurrentMin", id: 0x509, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "RmsCurrentMax", id: 0x50a, type: "uint16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "ActivePower", id: 0x50b, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "ActivePowerMin", id: 0x50c, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "ActivePowerMax", id: 0x50d, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "ReactivePower", id: 0x50e, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "ApparentPower", id: 0x50f, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "AcPowerFactor", id: 0x510, type: "int8", conformance: "O",
                    constraint: "-100 to 100", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsVoltageMeasurementPeriod", id: 0x511, type: "uint16",
                    access: "RW", conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsUnderVoltageCounter", id: 0x513, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeOverVoltagePeriod", id: 0x514, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeUnderVoltagePeriod", id: 0x515, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSagPeriod", id: 0x516, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSwellPeriod", id: 0x517, type: "uint16", access: "RW",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AcVoltageMultiplier", id: 0x600, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcVoltageDivisor", id: 0x601, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcCurrentMultiplier", id: 0x602, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcCurrentDivisor", id: 0x603, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcPowerMultiplier", id: 0x604, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "AcPowerDivisor", id: 0x605, type: "uint16", conformance: "O",
                    constraint: "min 1", default: 1
                },
                {
                    tag: "attribute", name: "DcOverloadAlarmsMask", id: 0x700, type: "map8", access: "RW",
                    conformance: "O", default: 0
                },
                { tag: "attribute", name: "DcVoltageOverload", id: 0x701, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "DcCurrentOverload", id: 0x702, type: "int16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "AcOverloadAlarmsMask", id: 0x800, type: "map16", access: "RW",
                    conformance: "O", default: 0
                },
                { tag: "attribute", name: "AcVoltageOverload", id: 0x801, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "AcCurrentOverload", id: 0x802, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "AcPowerOverload", id: 0x803, type: "int16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "AcReactivePowerOverload", id: 0x804, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "AverageRmsOverVoltage", id: 0x805, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "AverageRmsUnderVoltage", id: 0x806, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsExtremeOverVoltage", id: 0x807, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsExtremeUnderVoltage", id: 0x808, type: "int16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "RmsVoltageSag", id: 0x809, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "RmsVoltageSwell", id: 0x80a, type: "int16", conformance: "O", default: 65535 },
                { tag: "attribute", name: "LineCurrentPhaseB", id: 0x901, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "ActiveCurrentPhaseB", id: 0x902, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ReactiveCurrentPhaseB", id: 0x903, type: "int16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "RmsVoltagePhaseB", id: 0x905, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "RmsVoltageMinPhaseB", id: 0x906, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsVoltageMaxPhaseB", id: 0x907, type: "uint16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "RmsCurrentPhaseB", id: 0x908, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "RmsCurrentMinPhaseB", id: 0x909, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsCurrentMaxPhaseB", id: 0x90a, type: "uint16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "ActivePowerPhaseB", id: 0x90b, type: "int16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "ActivePowerMinPhaseB", id: 0x90c, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ActivePowerMaxPhaseB", id: 0x90d, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ReactivePowerPhaseB", id: 0x90e, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ApparentPowerPhaseB", id: 0x90f, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "PowerFactorPhaseB", id: 0x910, type: "int8", conformance: "O",
                    constraint: "-100 to 100", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsVoltageMeasurementPeriodPhaseB", id: 0x911, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsOverVoltageCounterPhaseB", id: 0x912, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsUnderVoltageCounterPhaseB", id: 0x913, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeOverVoltagePeriodPhaseB", id: 0x914, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeUnderVoltagePeriodPhaseB", id: 0x915, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSagPeriodPhaseB", id: 0x916, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSwellPeriodPhaseB", id: 0x917, type: "uint16", conformance: "O",
                    default: 0
                },
                { tag: "attribute", name: "LineCurrentPhaseC", id: 0xa01, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "ActiveCurrentPhaseC", id: 0xa02, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ReactiveCurrentPhaseC", id: 0xa03, type: "int16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "RmsVoltagePhaseC", id: 0xa05, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "RmsVoltageMinPhaseC", id: 0xa06, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsVoltageMaxPhaseC", id: 0xa07, type: "uint16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "RmsCurrentPhaseC", id: 0xa08, type: "uint16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "RmsCurrentMinPhaseC", id: 0xa09, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "RmsCurrentMaxPhaseC", id: 0xa0a, type: "uint16", conformance: "O",
                    default: 65535
                },
                { tag: "attribute", name: "ActivePowerPhaseC", id: 0xa0b, type: "int16", conformance: "O", default: 65535 },
                {
                    tag: "attribute", name: "ActivePowerMinPhaseC", id: 0xa0c, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ActivePowerMaxPhaseC", id: 0xa0d, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ReactivePowerPhaseC", id: 0xa0e, type: "int16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "ApparentPowerPhaseC", id: 0xa0f, type: "uint16", conformance: "O",
                    default: 65535
                },
                {
                    tag: "attribute", name: "PowerFactorPhaseC", id: 0xa10, type: "int8", conformance: "O",
                    constraint: "-100 to 100", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsVoltageMeasurementPeriodPhaseC", id: 0xa11, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsOverVoltageCounterPhaseC", id: 0xa12, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "AverageRmsUnderVoltageCounterPhaseC", id: 0xa13, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeOverVoltagePeriodPhaseC", id: 0xa14, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsExtremeUnderVoltagePeriodPhaseC", id: 0xa15, type: "uint16",
                    conformance: "O", default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSagPeriodPhaseC", id: 0xa16, type: "uint16", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "RmsVoltageSwellPeriodPhaseC", id: 0xa17, type: "uint16", conformance: "O",
                    default: 0
                },

                {
                    tag: "command", name: "GetProfileInfoResponseCommand", id: 0x0, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "ProfileCount", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" },
                        { tag: "datatype", name: "MaxNumberOfIntervals", type: "uint8", conformance: "M" },
                        {
                            tag: "datatype", name: "ListOfAttributes", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "uint16" }]
                        }
                    ]
                },

                {
                    tag: "command", name: "GetMeasurementProfileResponseCommand", id: 0x1, conformance: "O",
                    direction: "response",

                    children: [
                        { tag: "datatype", name: "StartTime", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "Status", type: "status", conformance: "M" },
                        { tag: "datatype", name: "ProfileIntervalPeriod", type: "enum8", conformance: "M" },
                        { tag: "datatype", name: "NumberOfIntervalsDelivered", type: "uint8", conformance: "M" },
                        { tag: "datatype", name: "AttributeId", type: "uint16", conformance: "M" },
                        {
                            tag: "datatype", name: "Intervals", type: "list", conformance: "M",
                            children: [{ tag: "datatype", name: "entry", type: "uint8" }]
                        }
                    ]
                },

                { tag: "command", name: "GetProfileInfoCommand", id: 0x0, conformance: "O", direction: "request" },

                {
                    tag: "command", name: "GetMeasurementProfileCommand", id: 0x1, conformance: "O",
                    direction: "request",
                    children: [
                        { tag: "datatype", name: "AttributeId", type: "uint16", conformance: "M" },
                        { tag: "datatype", name: "StartTime", type: "uint32", conformance: "M" },
                        { tag: "datatype", name: "NumberOfIntervals", type: "enum8", conformance: "M" }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BinaryInputBasic", id: 0xf, description: "Binary Input (Basic)",
            details: "An interface for reading the value of a binary measurement and accessing various characteristics of " +
                "that measurement.",

            children: [
                {
                    tag: "attribute", name: "ActiveText", id: 0x4, type: "string", access: "RW", conformance: "O",
                    constraint: "max 16", default: ""
                },
                {
                    tag: "attribute", name: "Description", id: 0x1c, type: "string", access: "RW", conformance: "O",
                    constraint: "max 16", default: ""
                },
                {
                    tag: "attribute", name: "InactiveText", id: 0x2e, type: "string", access: "RW", conformance: "O",
                    constraint: "max 16", default: ""
                },
                {
                    tag: "attribute", name: "OutOfService", id: 0x51, type: "bool", access: "RW", conformance: "M",
                    default: true
                },
                { tag: "attribute", name: "Polarity", id: 0x54, type: "enum8", conformance: "O", default: 0 },
                {
                    tag: "attribute", name: "PresentValue", id: 0x55, type: "bool", access: "RW", conformance: "M",
                    quality: "P"
                },
                {
                    tag: "attribute", name: "Reliability", id: 0x67, type: "enum8", access: "RW", conformance: "O",
                    default: 0
                },
                {
                    tag: "attribute", name: "StatusFlags", id: 0x6f, type: "map8", conformance: "M", default: 0,
                    quality: "P"
                },
                { tag: "attribute", name: "ApplicationType", id: 0x100, type: "uint32", conformance: "O" }
            ]
        },

        {
            tag: "cluster", name: "OnOffSwitchConfiguration", id: 0x7,
            description: "On/off Switch Configuration",
            details: "Attributes and commands for configuring On/Off switching devices.",

            children: [
                {
                    tag: "attribute", name: "SwitchType", id: 0x0, type: "enum8", conformance: "M",
                    children: [
                        { tag: "datatype", name: "Toggle", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Momentary", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "MultiFunction", id: 0x2, conformance: "M" }
                    ]
                },

                {
                    tag: "attribute", name: "SwitchActions", id: 0x10, type: "enum8", access: "RW", conformance: "M",
                    default: 0,
                    children: [
                        { tag: "datatype", name: "On", id: 0x0, conformance: "M" },
                        { tag: "datatype", name: "Off", id: 0x1, conformance: "M" },
                        { tag: "datatype", name: "Toggle", id: 0x2, conformance: "M" }
                    ]
                }
            ]
        }
    ]
};
