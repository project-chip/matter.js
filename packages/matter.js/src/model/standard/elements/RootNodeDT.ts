/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "RootNode", id: 0x16, classification: "node",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 22 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "BasicInformation", id: 0x28, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "AccessControl", id: 0x1f, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "PowerSourceConfiguration", id: 0x2e, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "TimeSynchronization", id: 0x38, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "GroupKeyManagement", id: 0x3f, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "GeneralCommissioning", id: 0x30, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "NetworkCommissioning", id: 0x31, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "AdministratorCommissioning", id: 0x3c, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "NodeOperationalCredentials", id: 0x3e, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "LocalizationConfiguration", id: 0x2b, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "TimeFormatLocalization", id: 0x2c, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "UnitLocalization", id: 0x2d, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "GeneralDiagnostics", id: 0x33, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "DiagnosticLogs", id: 0x32, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "SoftwareDiagnostics", id: 0x34, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "EthernetNetworkDiagnostics", id: 0x37, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "WiFiNetworkDiagnostics", id: 0x36, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },
        {
            tag: "requirement", name: "ThreadNetworkDiagnostics", id: 0x35, element: "serverCluster",
            xref: { document: "device", section: "2.1.4" }
        },

        {
            tag: "datatype", name: "conditions", type: "enum8",
            children: [{
                tag: "datatype", name: "CustomNetworkConfig",
                description: "The node only supports out-of-band-configured networking (e.g. rich user interface, manufacturer-specific means, custom commissioning flows, or future IP-compliant network technology not yet directly supported by NetworkCommissioning cluster).",
                xref: { document: "device", section: "2.1.3" }
            }]
        }
    ]
});
