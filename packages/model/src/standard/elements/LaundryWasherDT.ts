/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const LaundryWasherDt = DeviceType(
    {
        name: "LaundryWasher", id: 0x73, category: "Appliances", classification: "simple",
        details: "A Laundry Washer represents a device that is capable of laundering consumer items. Any laundry " +
            "washer product may utilize this device type." +
            "\n" +
            "A Laundry Washer shall be composed of at least one endpoint with the Laundry Washer device type.",
        xref: { document: "device", section: "13.1" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 115, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.1.4" }
    }),

    Requirement(
        {
            name: "LaundryWasherMode", id: 0x51, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.1.4" }
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.1.4" }
        },
        Requirement({ name: "DEADFRONTBEHAVIOR", conformance: "M", element: "feature" })
    ),

    Requirement({
        name: "LaundryWasherControls", id: 0x53, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.1.4" }
    }),
    Requirement({
        name: "TemperatureControl", id: 0x56, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.1.4" }
    }),
    Requirement({
        name: "OperationalState", id: 0x60, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "13.1.4" }
    })
);

MatterDefinition.children.push(LaundryWasherDt);
