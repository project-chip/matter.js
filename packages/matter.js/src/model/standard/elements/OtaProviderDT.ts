/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "OtaProvider", id: 0x14, classification: "utility",
    details: "An OTA Provider is a node that is capable of providing an OTA software update to other nodes on the " +
        "same fabric.",
    xref: { document: "device", section: "2.4" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 20, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "OtaSoftwareUpdateRequestor", conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "2.4.3" }
        }),
        Requirement({
            name: "OtaSoftwareUpdateProvider", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.4.3" }
        })
    ]
}));
