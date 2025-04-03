/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterHeaterDt = DeviceType(
    {
        name: "WaterHeater", id: 0x50f, category: "Energy", classification: "simple",
        details: "A water heater is a device that is generally installed in properties to heat water for showers, " +
            "baths etc.",
        xref: { document: "device", section: "14.2" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1295, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.2.6" }
    }),

    Requirement(
        {
            name: "Thermostat", id: 0x201, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "14.2.6" }
        },
        Requirement({ name: "HEATING", conformance: "M", element: "feature" })
    ),

    Requirement({
        name: "WaterHeaterManagement", id: 0x94, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "14.2.6" }
    }),
    Requirement({
        name: "WaterHeaterMode", id: 0x9e, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "14.2.6" }
    })
);

MatterDefinition.children.push(WaterHeaterDt);
