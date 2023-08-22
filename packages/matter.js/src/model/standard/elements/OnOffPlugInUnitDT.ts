/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OnOffPlugInUnit", id: 0x10a, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 266 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        }
    ]
});
