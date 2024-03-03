/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "OccupancySensor", id: 0x107, classification: "simple",
    details: "An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting " +
        "the occupancy state in a designated area.",
    xref: { document: "device", section: "7.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 263, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.3.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "7.3.4" }
        }),
        Requirement({
            name: "OccupancySensing", id: 0x406, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.3.4" }
        })
    ]
}));
