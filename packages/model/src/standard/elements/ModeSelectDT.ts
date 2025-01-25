/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ModeSelectDt = DeviceType(
    {
        name: "ModeSelect", id: 0x27, category: "Generic", classification: "simple",
        details: "This defines conformance to the Mode Select device type.",
        xref: { document: "device", section: "11.1" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 39, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "ModeSelect", id: 0x50, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "11.1.4" }
    })
);

MatterDefinition.children.push(ModeSelectDt);
