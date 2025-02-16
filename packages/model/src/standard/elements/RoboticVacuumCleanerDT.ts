/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoboticVacuumCleanerDt = DeviceType(
    {
        name: "RoboticVacuumCleaner", id: 0x74, category: "Robotic", classification: "simple",
        details: "This defines conformance for the Robotic Vacuum Cleaner device type.",
        xref: { document: "device", section: "12.1" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 116, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "12.1.4" }
    }),
    Requirement({
        name: "RvcRunMode", id: 0x54, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "12.1.4" }
    }),
    Requirement({
        name: "RvcCleanMode", id: 0x55, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "12.1.4" }
    }),
    Requirement({
        name: "RvcOperationalState", id: 0x61, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "12.1.4" }
    }),
    Requirement({
        name: "ServiceArea", id: 0x150, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "12.1.4" }
    })
);

MatterDefinition.children.push(RoboticVacuumCleanerDt);
