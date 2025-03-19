/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DoorLockDt = DeviceType(
    {
        name: "DoorLock", id: 0xa, category: "Closure", classification: "simple",
        details: "A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by means " +
            "of a manual or a remote method.",
        xref: { document: "device", section: "8.1" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 10, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "8.1.4" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "X", element: "serverCluster",
        xref: { document: "device", section: "8.1.4" }
    }),
    Requirement({
        name: "ScenesManagement", id: 0x62, conformance: "X", element: "serverCluster",
        xref: { document: "device", section: "8.1.4" }
    }),

    Requirement(
        {
            name: "DoorLock", id: 0x101, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.1.4" }
        },
        Requirement({ name: "USER", conformance: "Matter & (PIN | RID | FPG | FACE | ALIRO)", element: "feature" }),
        Requirement({ name: "RFIDCREDENTIAL", conformance: "P, O", element: "feature" }),
        Requirement({ name: "AlarmMask", conformance: "[Alarms]", element: "attribute" })
    )
);

MatterDefinition.children.push(DoorLockDt);
