/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "CastingVideoPlayer", id: 0x23, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 35 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 1 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "WakeOnLan", id: 0x503, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "Channel", id: 0x504, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "TargetNavigator", id: 0x505, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "MediaPlayback", id: 0x506, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "MediaInput", id: 0x507, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "LowPower", id: 0x508, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "KeypadInput", id: 0x509, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "ContentLauncher", id: 0x50a, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "AudioOutput", id: 0x50b, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },
        {
            tag: "requirement", name: "ApplicationLauncher", id: 0x50c, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" },
            children: [{ tag: "requirement", name: "ApplicationPlatform", element: "feature" }]
        },
        {
            tag: "requirement", name: "AccountLogin", id: 0x50e, element: "serverCluster",
            xref: { document: "device", section: "10.3.4" }
        },

        {
            tag: "datatype", name: "conditions", type: "enum8",

            children: [
                {
                    tag: "datatype", name: "ContentAppPlatform",
                    description: "The device includes a Content App Platform. A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
                    xref: { document: "device", section: "10.3.3" }
                },
                {
                    tag: "datatype", name: "PhysicalInputs", description: "The device has physical inputs for media.",
                    xref: { document: "device", section: "10.3.3" }
                }
            ]
        }
    ]
});
