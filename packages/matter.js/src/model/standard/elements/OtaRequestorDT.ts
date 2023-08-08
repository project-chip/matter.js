/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OtaRequestor", id: 0x12, classification: "utility",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 18 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OtaSoftwareUpdateRequestor", element: "serverCluster",
            xref: { document: "device", section: "2.3.3" }
        },
        {
            tag: "requirement", name: "OtaSoftwareUpdateProvider", element: "clientCluster",
            xref: { document: "device", section: "2.3.3" }
        }
    ]
});
