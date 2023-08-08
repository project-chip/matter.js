/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Pump", id: 0x303, classification: "simple",

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",

            children: [{
                tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                children: [
                    { tag: "datatype", name: "DeviceType", type: "devtype-id", default: 771 },
                    { tag: "datatype", name: "Revision", type: "uint16", default: 2 }
                ]
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "PumpConfigurationAndControl", id: 0x200, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Identify", id: 0x3, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" },
            children: [{ tag: "requirement", name: "Query", element: "feature" }]
        },
        {
            tag: "requirement", name: "Level", id: 0x8, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "PressureMeasurement", id: 0x403, element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "FlowMeasurement", id: 0x404, element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        }
    ]
});
