/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const DeviceEnergyManagementDt = DeviceType(
    {
        name: "DeviceEnergyManagement", id: 0x50d, category: "Utility", classification: "utility",
        details: "A Device Energy Management device provides reporting and optionally adjustment of the electrical " +
            "power planned on being consumed or produced by the device.",
        xref: { document: "device", section: "2.7" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1293, revision: 2 } ], element: "attribute" })
    ),

    Requirement(
        {
            name: "DeviceEnergyManagement", id: 0x98, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.7.4" }
        },
        Requirement({ name: "POWERADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "STARTTIMEADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "PAUSABLE", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "FORECASTADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "CONSTRAINTBASEDADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" })
    ),

    Requirement({
        name: "DeviceEnergyManagementMode", id: 0x9f, conformance: "ControllableESA, O",
        element: "serverCluster",
        xref: { document: "device", section: "2.7.4" }
    }),

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "ControllableEsa",
            description: "The DEM cluster on this endpoint accepts commands to adjust its energy operation.",
            xref: { document: "device", section: "2.7.3" }
        })
    )
);

MatterDefinition.children.push(DeviceEnergyManagementDt);
