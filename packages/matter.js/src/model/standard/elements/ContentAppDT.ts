/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ContentApp", id: 0x24, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 36 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Channel", id: 0x504, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "TargetNavigator", id: 0x505, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "MediaPlayback", id: 0x506, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "KeypadInput", id: 0x509, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "ContentLauncher", id: 0x50a, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "ApplicationLauncher", id: 0x50c, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" },
            children: [{ tag: "requirement", name: "ApplicationPlatform", element: "feature" }]
        },
        {
            tag: "requirement", name: "ApplicationBasic", id: 0x50d, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "AccountLogin", id: 0x50e, element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }
    ]
});
