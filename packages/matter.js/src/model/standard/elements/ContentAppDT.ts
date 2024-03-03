/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

Matter.children.push(DeviceType({
    name: "ContentApp", id: 0x24, classification: "simple",
    details: "This defines conformance to the Content App device type." +
        "\n" +
        "A Content App is usually an application built by a Content Provider. A Casting Video Player with a " +
        "Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
    xref: { document: "device", section: "10.5" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [
                Requirement({ name: "DeviceTypeList", default: [ { deviceType: 36, revision: 1 } ], element: "attribute" })
            ]
        }),

        Requirement({
            name: "Channel", id: 0x504, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "TargetNavigator", id: 0x505, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "MediaPlayback", id: 0x506, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "KeypadInput", id: 0x509, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "ContentLauncher", id: 0x50a, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "ApplicationLauncher", id: 0x50c, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" },
            children: [Requirement({ name: "APPLICATIONPLATFORM", conformance: "Shall, NOT, AP", element: "feature" })]
        }),
        Requirement({
            name: "ApplicationBasic", id: 0x50d, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }),
        Requirement({
            name: "AccountLogin", id: 0x50e, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        })
    ]
}));
