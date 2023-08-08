/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DimmablePlugInUnit", id: 0x10b, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 267 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [
                { tag: "requirement", name: "Query", element: "feature" },
                { tag: "requirement", name: "TriggerEffect", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "5.2.4" }
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [
                { tag: "requirement", name: "EnhancedAddScene", element: "command" },
                { tag: "requirement", name: "EnhancedViewScene", element: "command" },
                { tag: "requirement", name: "CopyScene", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [{ tag: "requirement", name: "Lt", element: "feature" }]
        },

        {
            tag: "requirement", name: "LevelControl", id: 0x8, element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },

            children: [
                { tag: "requirement", name: "Oo", element: "feature" },
                { tag: "requirement", name: "Lt", element: "feature" },
                { tag: "requirement", name: "CurrentLevel", element: "attribute" },
                { tag: "requirement", name: "MinLevel", element: "attribute" },
                { tag: "requirement", name: "MaxLevel", element: "attribute" }
            ]
        }
    ]
});
