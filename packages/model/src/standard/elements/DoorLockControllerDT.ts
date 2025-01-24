/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockControllerDt = DeviceType(
    {
        name: "DoorLockController", id: 0xb, category: "Closure", classification: "simple",
        details: "A Door Lock Controller is a device capable of controlling a door lock.",
        xref: { document: "device", section: "8.2" }
    },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 11, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
        xref: { document: "device", section: "8.2.4" }
    }),
    Requirement({
        name: "ScenesManagement", id: 0x62, conformance: "P, O", element: "clientCluster",
        xref: { document: "device", section: "8.2.4" }
    }),
    Requirement({
        name: "TimeSynchronization", id: 0x38, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "8.2.4" }
    }),
    Requirement({
        name: "DoorLock", id: 0x101, conformance: "M", element: "clientCluster",
        xref: { document: "device", section: "8.2.4" }
    })
);

MatterDefinition.children.push(DoorLockControllerDt);
