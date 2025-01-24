/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DishwasherDt = DeviceType(
    {
        name: "Dishwasher", id: 0x75, category: "Appliances", classification: "simple",
        details: "A dishwasher is a device that is generally installed in residential homes and is capable of washing " +
            "dishes, cutlery, and other items associate with food preparation and consumption. The device can be " +
            "permanently installed or portable and can have variety of filling and draining methods.",
        xref: { document: "device", section: "13.5" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 117, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.5.4" }
    }),

    Requirement(
        {
            name: "OnOff", id: 0x6, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.5.4" }
        },
        Requirement({ name: "DEADFRONTBEHAVIOR", conformance: "M", element: "feature" })
    ),

    Requirement({
        name: "TemperatureControl", id: 0x56, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.5.4" }
    }),

    Requirement(
        {
            name: "DishwasherMode", id: 0x59, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.5.4" }
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement({
        name: "DishwasherAlarm", id: 0x5d, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.5.4" }
    }),
    Requirement({
        name: "OperationalState", id: 0x60, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "13.5.4" }
    })
);

MatterDefinition.children.push(DishwasherDt);
