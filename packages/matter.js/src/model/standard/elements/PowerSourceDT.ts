/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "PowerSource", id: 0x11, classification: "utility",
    xref: { document: "device", section: "2.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 17, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "PowerSource", id: 0x2f, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.2.3" }
        })
    ]
}));
