/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OvenDt = DeviceType(
    {
        name: "Oven", id: 0x7b, category: "Appliances", classification: "simple",
        details: "An oven represents a device that contains one or more cabinets, and optionally a single cooktop, " +
            "that are all capable of heating food. Examples of consumer products implementing this device type " +
            "include ovens, wall ovens, convection ovens, etc.",
        xref: { document: "device", section: "13.9" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 123, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.9.6" }
    })
);

MatterDefinition.children.push(OvenDt);
