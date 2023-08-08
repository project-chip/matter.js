/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ControlBridge", id: 0x840, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 2112 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "ColorControl", id: 0x300, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "IlluminanceMeasurement", id: 0x400, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        }
    ]
});
