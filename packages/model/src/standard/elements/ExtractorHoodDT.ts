/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ExtractorHoodDt = DeviceType(
    {
        name: "ExtractorHood", id: 0x7a, category: "Appliances", classification: "simple",

        details: "An Extractor Hood is a device that is generally installed above a cooking surface in residential " +
            "kitchens. An Extractor Hood’s primary purpose is to reduce odors that arise during the cooking " +
            "process by either extracting the air above the cooking surface or by recirculating and filtering it. " +
            "It may also contain a light for illuminating the cooking surface." +
            "\n" +
            "Extractor Hoods may also be known by the following names:" +
            "\n" +
            "  • Hoods" +
            "\n" +
            "  • Extractor Fans" +
            "\n" +
            "  • Extractors" +
            "\n" +
            "  • Range Hoods" +
            "\n" +
            "  • Telescoping Hoods" +
            "\n" +
            "  • Telescoping Extractors",

        xref: { document: "device", section: "13.10" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 122, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.10.5" }
    }),
    Requirement({
        name: "HepaFilterMonitoring", id: 0x71, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.10.5" }
    }),
    Requirement({
        name: "ActivatedCarbonFilterMonitoring", id: 0x72, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.10.5" }
    }),

    Requirement(
        {
            name: "FanControl", id: 0x202, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "13.10.5" }
        },
        Requirement({ name: "ROCKING", conformance: "X", element: "feature" }),
        Requirement({ name: "WIND", conformance: "X", element: "feature" }),
        Requirement({ name: "AIRFLOWDIRECTION", conformance: "X", element: "feature" })
    )
);

MatterDefinition.children.push(ExtractorHoodDt);
