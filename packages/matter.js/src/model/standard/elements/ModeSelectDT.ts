/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ModeSelectDt = DeviceType({
    name: "ModeSelect", id: 0x27, classification: "simple",
    details: "This defines conformance to the Mode Select device type.",
    xref: { document: "device", section: "11.1" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 39, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "ModeSelect", id: 0x50, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "11.1.4" }
        })
    ]
});

Matter.children.push(ModeSelectDt);
