/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Speaker", id: 0x22, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 34 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "serverCluster",
            xref: { document: "device", section: "10.4.4" }
        },
        {
            tag: "requirement", name: "Level", id: 0x8, element: "serverCluster",
            xref: { document: "device", section: "10.4.4" }
        }
    ]
});
