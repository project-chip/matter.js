/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RefrigeratorDt = DeviceType({
    name: "Refrigerator", id: 0x70, classification: "simple",
    details: "A refrigerator represents a device that contains one or more cabinets that are capable of chilling " +
        "or freezing food. Examples of consumer products that may make use of this device type include " +
        "refrigerators, freezers, and wine coolers.",
    xref: { document: "device", section: "13.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 112, revision: 1 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.2.6" }
        }),

        Requirement({
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, conformance: "O",
            element: "serverCluster",
            xref: { document: "device", section: "13.2.6" },
            children: [
                Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
                Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
            ]
        }),

        Requirement({
            name: "RefrigeratorAlarm", id: 0x57, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.2.6" }
        })
    ]
});

Matter.children.push(RefrigeratorDt);
