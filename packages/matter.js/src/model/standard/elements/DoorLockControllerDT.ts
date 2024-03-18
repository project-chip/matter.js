/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "DoorLockController", id: 0xb, classification: "simple",
    details: "A Door Lock Controller is a device capable of controlling a door lock.",
    xref: { document: "device", section: "8.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 11, revision: 2 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Identify", id: 0x3, conformance: "[EZ, Target]", element: "serverCluster",
            xref: { document: "device", section: "8.2.3" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "[EZ, Initiator]", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "Zigbee", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        }),
        Requirement({
            name: "Scenes", id: 0x5, conformance: "Zigbee", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        }),
        Requirement({
            name: "DoorLock", id: 0x101, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        }),
        Requirement({
            name: "TimeSync", id: 0x38, conformance: "P, O", element: "serverCluster",
            xref: { document: "device", section: "8.2.3" }
        })
    ]
}));
