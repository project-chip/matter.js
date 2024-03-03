/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "OtaRequestor", id: 0x12, classification: "utility",
    details: "An OTA Requestor is a device that is capable of receiving an OTA software update.",
    xref: { document: "device", section: "2.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 18, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "OtaSoftwareUpdateRequestor", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.3.3" }
        }),
        Requirement({
            name: "OtaSoftwareUpdateProvider", conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "2.3.3" }
        })
    ]
}));
