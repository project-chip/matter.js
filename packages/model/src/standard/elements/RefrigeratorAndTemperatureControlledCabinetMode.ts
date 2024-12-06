/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const RefrigeratorAndTemperatureControlledCabinetMode = Cluster(
    {
        name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, type: "ModeBase",
        classification: "application", pics: "TCCM",
        details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
            "enumerated values for refrigerator and temperature controlled cabinet devices.",
        xref: { document: "cluster", section: "8.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute({ name: "SupportedModes", id: 0x0, conformance: "M", xref: { document: "cluster", section: "8.7.5" } }),
    Attribute({ name: "CurrentMode", id: 0x1, conformance: "M", xref: { document: "cluster", section: "8.7.5" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "P", xref: { document: "cluster", section: "8.7.5" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "P", xref: { document: "cluster", section: "8.7.5" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the Auto mode tag in the ModeTags " +
            "field list.",
        xref: { document: "cluster", section: "8.7.4.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({
            name: "RapidCool", id: 0x4000,
            details: "This mode reduces the temperature rapidly, typically above freezing grade.",
            xref: { document: "cluster", section: "8.7.6.1.1" }
        }),
        Field({
            name: "RapidFreeze", id: 0x4001,
            details: "This mode reduces the temperature rapidly, below freezing grade.",
            xref: { document: "cluster", section: "8.7.6.1.2" }
        })
    )
)

MatterDefinition.children.push(RefrigeratorAndTemperatureControlledCabinetMode);
