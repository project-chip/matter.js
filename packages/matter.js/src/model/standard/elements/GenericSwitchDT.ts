/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "GenericSwitch", id: 0xf, classification: "simple",
    details: "This defines conformance for the Generic Switch device type.",
    xref: { document: "device", section: "6.6" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 15, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Identify", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        }),
        Requirement({
            name: "Switch", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        }),
        Requirement({
            name: "FixedLabel", conformance: "desc", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        })
    ]
}));
