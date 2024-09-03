/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DeviceEnergyManagementDt = DeviceType({
    name: "DeviceEnergyManagement", id: 0x50d, category: "Utility", classification: "utility",
    details: "A Device Energy Management device provides reporting and optionally adjustment of the electrical " +
        "power planned on being consumed or produced by the device.",
    xref: { document: "device", section: "2.7" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1293, revision: 1 } ], element: "attribute" })]
        }),
        Requirement({
            name: "DeviceEnergyManagement", id: 0x98, conformance: "P, M", element: "serverCluster",
            xref: { document: "device", section: "2.7.3" }
        }),
        Requirement({
            name: "DeviceEnergyManagementMode", id: 0x9f, conformance: "P, M", element: "serverCluster",
            xref: { document: "device", section: "2.7.3" }
        })
    ]
});

Matter.children.push(DeviceEnergyManagementDt);
