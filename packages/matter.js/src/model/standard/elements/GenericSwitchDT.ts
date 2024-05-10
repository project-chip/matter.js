/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const GenericSwitchDT = DeviceType({
    name: "GenericSwitch", id: 0xf, classification: "simple",
    details: "This defines conformance for the Generic Switch device type.",
    xref: { document: "device", section: "6.6" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 15, revision: 3 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        }),
        Requirement({
            name: "Switch", id: 0x3b, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        })
    ]
});

Matter.children.push(GenericSwitchDT);
