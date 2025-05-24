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
    { name: "DeviceEnergyManagement", id: 0x50d },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1293, revision: 2 } ], element: "attribute" })
    ),

    Requirement(
        { name: "DeviceEnergyManagement", id: 0x98, conformance: "M", element: "serverCluster" },
        Requirement({ name: "POWERADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "STARTTIMEADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "PAUSABLE", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "FORECASTADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" }),
        Requirement({ name: "CONSTRAINTBASEDADJUSTMENT", conformance: "Controllable, ESA.a+", element: "feature" })
    ),

    Requirement(
        { name: "DeviceEnergyManagementMode", id: 0x9f, conformance: "ControllableESA, O", element: "serverCluster" }
    ),
    Field({ name: "conditions", type: "enum8" }, Field({ name: "ControllableEsa" }))
);

MatterDefinition.children.push(DeviceEnergyManagementDt);
