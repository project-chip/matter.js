/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "VideoRemoteControl", id: 0x2a, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 42 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "Level", id: 0x8, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "WakeOnLan", id: 0x503, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "Channel", id: 0x504, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "TargetNavigator", id: 0x505, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "MediaPlayback", id: 0x506, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "MediaInput", id: 0x507, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "LowPower", id: 0x508, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "KeypadInput", id: 0x509, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "ContentLauncher", id: 0x50a, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "AudioOutput", id: 0x50b, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "ApplicationLauncher", id: 0x50c, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "AccountLogin", id: 0x50e, element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        }
    ]
});
