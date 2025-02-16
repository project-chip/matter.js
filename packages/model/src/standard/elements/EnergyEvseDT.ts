/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const EnergyEvseDt = DeviceType(
    {
        name: "EnergyEvse", id: 0x50c, category: "Energy", classification: "simple",
        details: "An EVSE (Electric Vehicle Supply Equipment) is a device that allows an EV (Electric Vehicle) to be " +
            "connected to the mains electricity supply to allow it to be charged (or discharged in case of " +
            "Vehicle to Grid / Vehicle to Home applications).",
        xref: { document: "device", section: "14.1" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1292, revision: 2 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.1.6" }
    }),
    Requirement({
        name: "EnergyEvse", id: 0x99, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "14.1.6" }
    }),
    Requirement({
        name: "EnergyEvseMode", id: 0x9d, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "14.1.6" }
    }),
    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.1.6" }
    })
);

MatterDefinition.children.push(EnergyEvseDt);
