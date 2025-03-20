/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const BatteryStorageDt = DeviceType(
    {
        name: "BatteryStorage", id: 0x18, category: "Energy", classification: "simple",
        details: "A Battery Storage device is a device that allows a DC battery, which can optionally be comprised of " +
            "a set parallel strings of battery packs and associated controller, and an AC inverter, to be " +
            "monitored and controlled by an Energy Management System in order to manage the peaks and troughs of " +
            "supply and demand, and/or to optimize cost of the energy consumed in premises. It is not intended to " +
            "be used for a UPS directly supplying a set of appliances, nor for portable battery storage devices.",
        xref: { document: "device", section: "14.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 24, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "14.4.6" }
    })
);

MatterDefinition.children.push(BatteryStorageDt);
