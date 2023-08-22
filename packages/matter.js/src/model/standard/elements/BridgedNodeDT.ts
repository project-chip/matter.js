/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "BridgedNode", id: 0x13, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 19 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "BridgedDeviceBasicInformation", element: "serverCluster",
            xref: { document: "device", section: "2.6.4" }
        },
        {
            tag: "requirement", name: "PowerSourceConfiguration", element: "serverCluster",
            xref: { document: "device", section: "2.6.4" }
        },
        {
            tag: "requirement", name: "PowerSource", element: "serverCluster",
            xref: { document: "device", section: "2.6.4" }
        }
    ]
});
