/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "WindowCovering", id: 0x202, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 514 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        },

        {
            tag: "requirement", name: "WindowCovering", id: 0x102, element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },

            children: [
                { tag: "requirement", name: "AbsolutePosition", element: "feature" },
                { tag: "requirement", name: "GoToLiftPercentageLiftPercentageValue", element: "commandField" },
                { tag: "requirement", name: "GoToTiltPercentageTiltPercentageValue", element: "commandField" },
                { tag: "requirement", name: "GoToLiftPercentageLiftPercent100thsValue", element: "commandField" },
                { tag: "requirement", name: "GoToTiltPercentageTiltPercent100thsValue", element: "commandField" }
            ]
        }
    ]
});
