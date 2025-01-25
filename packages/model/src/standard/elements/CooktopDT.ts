/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CooktopDt = DeviceType(
    {
        name: "Cooktop", id: 0x78, category: "Appliances", classification: "simple",
        details: "A cooktop is a cooking surface that heats food either by transferring currents from an " +
            "electromagnetic field located below the glass surface directly to the magnetic induction cookware " +
            "placed above or through traditional gas or electric burners.",
        xref: { document: "device", section: "13.8" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 120, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.8.5" }
    }),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "13.8.5" }
        },
        Requirement({ name: "OFFONLY", conformance: "M", element: "feature" })
    )
);

MatterDefinition.children.push(CooktopDt);
