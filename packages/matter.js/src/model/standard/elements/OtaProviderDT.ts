/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OtaProvider", id: 0x14, classification: "utility",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 20 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OtaSoftwareUpdateRequestor", element: "clientCluster",
            xref: { document: "device", section: "2.4.3" }
        },
        {
            tag: "requirement", name: "OtaSoftwareUpdateProvider", element: "serverCluster",
            xref: { document: "device", section: "2.4.3" }
        }
    ]
});
