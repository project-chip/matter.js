/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    FieldElement as Field
} from "../../elements/index.js";

export const TemperatureControlledCabinetDt = DeviceType(
    {
        name: "TemperatureControlledCabinet", id: 0x71, category: "Appliances", classification: "simple",
        details: "A Temperature Controlled Cabinet only exists composed as part of another device type. It represents " +
            "a single cabinet that is capable of having its temperature controlled. Such a cabinet may be " +
            "chilling or freezing food, for example as part of a refrigerator, freezer, wine chiller, or other " +
            "similar device. Equally, such a cabinet may be warming or heating food, for example as part of an " +
            "oven, range, or similar device.",
        xref: { document: "device", section: "13.4" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 113, revision: 3 } ], element: "attribute" })
    ),
    Requirement({
        name: "TemperatureControl", id: 0x56, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "13.4.4" }
    }),
    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "13.4.4" }
    }),

    Requirement(
        {
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, conformance: "[Cooler]",
            element: "serverCluster",
            xref: { document: "device", section: "13.4.4" }
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement(
        {
            name: "OvenMode", id: 0x49, conformance: "[Heater]", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" }
        },
        Requirement({ name: "StartUpMode", conformance: "X", element: "attribute" }),
        Requirement({ name: "ONOFF", conformance: "X", element: "feature" })
    ),

    Requirement(
        {
            name: "OvenCavityOperationalState", id: 0x48, conformance: "[Heater]", element: "serverCluster",
            xref: { document: "device", section: "13.4.4" }
        },
        Requirement({ name: "Pause", conformance: "X", element: "command" }),
        Requirement({ name: "Resume", conformance: "X", element: "command" })
    ),

    Field(
        { name: "conditions", type: "enum8" },
        Field({
            name: "Cooler", description: "The device has cooling functionality.",
            xref: { document: "device", section: "13.4.3" }
        }),
        Field({
            name: "Heater", description: "The device has heating functionality.",
            xref: { document: "device", section: "13.4.3" }
        })
    )
);

MatterDefinition.children.push(TemperatureControlledCabinetDt);
