/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DeviceEnergyManagementMode = Cluster(
    {
        name: "DeviceEnergyManagementMode", id: 0x9f, type: "ModeBase", classification: "application",
        pics: "DEMM",
        details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
            "enumerated values for Device Energy Management devices.",
        xref: { document: "cluster", section: "9.8" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "9.8.4" } },
        Field({
            name: "DEPONOFF", conformance: "X", constraint: "0", description: "OnOff",
            details: "Dependency with the OnOff cluster"
        })
    ),

    Attribute({
        name: "SupportedModes", id: 0x0,

        details: "At least one entry in the SupportedModes attribute shall include the NoOptimization mode tag in the " +
            "ModeTags field." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the LocalOptimization mode tag in " +
            "the ModeTags field list." +
            "\n" +
            "At least one entry in the SupportedModes attribute shall include the GridOptimization mode tag in " +
            "the ModeTags field list." +
            "\n" +
            "An entry in the SupportedModes attribute that includes one of an DeviceOptimization, " +
            "LocalOptimization, or GridOptimization tags shall NOT also include NoOptimization tag.",

        xref: { document: "cluster", section: "9.8.6.1" }
    }),

    Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "9.8.6" } }),
    Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "9.8.6" } }),
    Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "9.8.6" } }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "9.8.5.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "9.8.7.1" } }),
        Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "9.8.7.1" } }),

        Field({
            name: "NoOptimization", id: 0x4000,
            details: "The device prohibits optimization of energy usage management: its energy usage is determined only by " +
                "the user configuration and internal device needs.",
            xref: { document: "cluster", section: "9.8.7.1.1" }
        }),

        Field({
            name: "DeviceOptimization", id: 0x4001,
            details: "The device is permitted to manage its own energy usage. For example, using tariff information it may " +
                "obtain.",
            xref: { document: "cluster", section: "9.8.7.1.2" }
        }),

        Field({
            name: "LocalOptimization", id: 0x4002,
            details: "The device permits management of energy usage by an energy manager to optimize the local energy " +
                "usage.",
            xref: { document: "cluster", section: "9.8.7.1.3" }
        }),

        Field({
            name: "GridOptimization", id: 0x4003,
            details: "The device permits management of energy usage by an energy manager to optimize the grid energy " +
                "usage.",
            xref: { document: "cluster", section: "9.8.7.1.4" }
        })
    )
);

MatterDefinition.children.push(DeviceEnergyManagementMode);
