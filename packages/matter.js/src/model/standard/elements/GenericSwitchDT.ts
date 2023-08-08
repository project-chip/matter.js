/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "GenericSwitch", id: 0xf, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 15 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        },
        {
            tag: "requirement", name: "Switch", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        },
        {
            tag: "requirement", name: "FixedLabel", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        }
    ]
});
