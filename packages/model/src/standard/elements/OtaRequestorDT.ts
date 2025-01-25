/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OtaRequestorDt = DeviceType(
    {
        name: "OtaRequestor", id: 0x12, category: "Utility", classification: "utility",
        details: "An OTA Requestor is a device that is capable of receiving an OTA software update.",
        xref: { document: "device", section: "2.3" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 18, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "OtaSoftwareUpdateRequestor", id: 0x2a, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "2.3.3" }
    }),
    Requirement({
        name: "OtaSoftwareUpdateProvider", id: 0x29, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "2.3.3" }
    })
);

MatterDefinition.children.push(OtaRequestorDt);
