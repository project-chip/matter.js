/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const GenericSwitchDt = DeviceType(
    {
        name: "GenericSwitch", id: 0xf, category: "Switches and Controls", classification: "simple",
        details: "This defines conformance for the Generic Switch device type.",
        xref: { document: "device", section: "6.6" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 15, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "6.6.4" }
    }),
    Requirement({
        name: "Switch", id: 0x3b, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "6.6.4" }
    })
);

MatterDefinition.children.push(GenericSwitchDt);
