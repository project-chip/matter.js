/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "Fan", id: 0x2b, classification: "simple",
    details: "This defines conformance to the Fan device type." +
        "\n" +
        "NOTE Support for Fan device type is provisional.",
    xref: { document: "device", section: "9.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 43, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" }
        }),

        Requirement({
            name: "FanControl", id: 0x202, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" },
            children: [
                Requirement({ name: "FanModeSequence", access: "R VO", conformance: "Matter", element: "attribute" })
            ]
        })
    ]
}));
