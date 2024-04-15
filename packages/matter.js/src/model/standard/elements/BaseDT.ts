/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    DeviceTypeElement as DeviceType,
    FieldElement as Field,
    RequirementElement as Requirement
} from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "Base", classification: "base",
    xref: { document: "device", section: "1.1" },

    children: [
        Field({
            name: "conditions", type: "enum8",

            children: [
                Field({
                    name: "Zha", description: "Zigbee Home Automation standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "Zse", description: "Zigbee Smart Energy standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "Gp", description: "Zigbee Green Power standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "Zigbee", description: "Zigbee standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "SuZi", description: "Zigbee PRO Sub-GHz standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "Matter", description: "Matter standard",
                    xref: { document: "device", section: "1.1.3.1" }
                }),
                Field({
                    name: "LanguageLocale",
                    description: "The node supports localization for conveying text to the user",
                    xref: { document: "device", section: "1.1.3.3" }
                }),
                Field({
                    name: "TimeLocale", description: "The node supports localization for conveying time to the user",
                    xref: { document: "device", section: "1.1.3.3" }
                }),
                Field({
                    name: "UnitLocale",
                    description: "The node supports localization for conveying units of measure to the user",
                    xref: { document: "device", section: "1.1.3.3" }
                }),
                Field({
                    name: "Sleepy", description: "The node is normally asleep and wakes to perform function",
                    xref: { document: "device", section: "1.1.4" }
                }),
                Field({
                    name: "Awake", description: "The node is always able to communicate",
                    xref: { document: "device", section: "1.1.4" }
                }),
                Field({
                    name: "Simplex", description: "One way communication, client to server",
                    xref: { document: "device", section: "1.1.4" }
                }),
                Field({
                    name: "Node",
                    description: "the device type is classified as a Node device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "App",
                    description: "the device type is classified as an Application device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Simple",
                    description: "the device type is classified as a Simple device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Dynamic",
                    description: "the device type is classified as a Dynamic device type (see Data Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Client", description: "there exists a client application cluster on the endpoint",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Server", description: "there exists a server application cluster on the endpoint",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Composed",
                    description: "the device type is composed of 2 or more device types (see System Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "Multiple",
                    description: "a Composed device type that is composed of 2 or more endpoints with the same device type (see System Model specification)",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "EzInitiator",
                    description: "the endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "EzTarget", description: "the endpoint is a Target for Zigbee EZ-Mode Finding & Binding",
                    xref: { document: "device", section: "1.1.5" }
                }),
                Field({
                    name: "BridgedPowerSourceInfo",
                    description: "the endpoint represents a Bridged Device, for which information about the state of its power source is available to the Bridge",
                    xref: { document: "device", section: "1.1.5" }
                })
            ]
        }),

        Requirement({
            name: "Descriptor", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        }),
        Requirement({
            name: "Binding", conformance: "Simple & Client", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        }),
        Requirement({
            name: "FixedLabel", conformance: "[App & Server & Multiple]", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        }),
        Requirement({
            name: "UserLabel", conformance: "[App & Server & Multiple]", element: "serverCluster",
            xref: { document: "device", section: "1.1.7" }
        })
    ]
}));
