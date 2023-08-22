/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Base", classification: "base",

    children: [
        {
            tag: "datatype", name: "conditions", type: "enum8",

            children: [
                {
                    tag: "datatype", name: "Zha", description: "Zigbee Home Automation standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "Zse", description: "Zigbee Smart Energy standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "Gp", description: "Zigbee Green Power standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "Zigbee", description: "Zigbee standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "SuZi", description: "Zigbee PRO Sub-GHz standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "Matter", description: "Matter standard",
                    xref: { document: "device", section: "1.1.3" }
                },
                {
                    tag: "datatype", name: "Sleepy",
                    description: "The node is normally asleep and wakes to perform function",
                    xref: { document: "device", section: "1.1.4" }
                },
                {
                    tag: "datatype", name: "Awake", description: "The node is always able to communicate",
                    xref: { document: "device", section: "1.1.4" }
                },
                {
                    tag: "datatype", name: "Simplex", description: "One way communication, client to server",
                    xref: { document: "device", section: "1.1.4" }
                },
                {
                    tag: "datatype", name: "Node",
                    description: "the device type is classified as a Node device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "App",
                    description: "the device type is classified as an Application device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Simple",
                    description: "the device type is classified as a Simple device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Dynamic",
                    description: "the device type is classified as a Dynamic device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Client",
                    description: "there exists a client application cluster on the endpoint",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Server",
                    description: "there exists a server application cluster on the endpoint",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Composed",
                    description: "the device type is composed of 2 or more device types (see System Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "Multiple",
                    description: "a Composed device type that is composed of 2 or more endpoints with the same device type (see System Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "EzInitiator",
                    description: "the endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "EzTarget",
                    description: "the endpoint is a Target for Zigbee EZ-Mode Finding & Binding",
                    xref: { document: "device", section: "1.1.5" }
                },
                {
                    tag: "datatype", name: "BridgedPowerSourceInfo",
                    description: "the endpoint represents a Bridged Device, for which information about the state of its power source is available to the Bridge",
                    xref: { document: "device", section: "1.1.5" }
                }
            ]
        },

        {
            tag: "requirement", name: "Descriptor", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        },
        {
            tag: "requirement", name: "Binding", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        },
        {
            tag: "requirement", name: "FixedLabel", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        },
        {
            tag: "requirement", name: "UserLabel", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        }
    ]
});
