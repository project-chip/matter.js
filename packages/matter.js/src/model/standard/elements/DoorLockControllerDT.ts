/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DoorLockController", id: 0xb, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 11 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "clientCluster",
            xref: { document: "device", section: "8.2.3" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "DoorLock", id: 0x101, element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, element: "serverCluster",
            xref: { document: "device", section: "8.2.3" }
        }
    ]
});
