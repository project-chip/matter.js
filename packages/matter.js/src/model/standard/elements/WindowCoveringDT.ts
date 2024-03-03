/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "WindowCovering", id: 0x202, classification: "simple",
    details: "This defines conformance to the Window Covering device type.",
    xref: { document: "device", section: "8.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 514, revision: 2 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },
            children: [Requirement({ name: "QUERY", conformance: "!Matter", element: "feature" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "Awake, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        }),
        Requirement({
            name: "Scenes", id: 0x5, conformance: "Awake, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        }),

        Requirement({
            name: "WindowCovering", id: 0x102, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },

            children: [
                Requirement({ name: "ABSOLUTEPOSITION", conformance: "!Matter", element: "feature" }),
                Requirement({
                    name: "GoToLiftPercentageLiftPercentageValue", conformance: "!Matter", element: "commandField"
                }),
                Requirement({
                    name: "GoToTiltPercentageTiltPercentageValue", conformance: "!Matter", element: "commandField"
                }),
                Requirement({
                    name: "GoToLiftPercentageLiftPercent100thsValue", conformance: "Matter", element: "commandField"
                }),
                Requirement({
                    name: "GoToTiltPercentageTiltPercent100thsValue", conformance: "Matter", element: "commandField"
                })
            ]
        })
    ]
}));
