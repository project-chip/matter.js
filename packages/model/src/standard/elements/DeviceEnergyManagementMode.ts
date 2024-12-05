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

export const DeviceEnergyManagementMode = Cluster(
    {
        name: "DeviceEnergyManagementMode", id: 0x9f, type: "ModeBase", classification: "application",
        pics: "DEMM",
        details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
            "enumerated values for Device Energy Management devices." +
            "\n" +
            "NOTE Support for Device Energy Management Mode cluster is provisional.",
        xref: { document: "cluster", section: "9.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Datatype({
        name: "ModeOptionStruct", type: "ModeOptionStruct",
        details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
            "ModeOptionStruct type. A blank field indicates no change.",
        xref: { document: "cluster", section: "9.6.4.1" }
    }),

    Datatype(
        { name: "ModeTag", type: "enum16" },

        Field({
            name: "NoOptimization", id: 0x4000,
            details: "The device prohibits optimization of energy usage management: its energy usage is determined only " +
                "by the user configuration and internal device needs. This tag cannot be included with any of the " +
                "other tags defined below in a mode.",
            xref: { document: "cluster", section: "9.6.5.1.1" }
        }),

        Field({
            name: "DeviceOptimization", id: 0x4001,
            details: "The device is permitted to manage its own energy usage. For example, using tariff information it " +
                "may obtain.",
            xref: { document: "cluster", section: "9.6.5.1.2" }
        }),

        Field({
            name: "LocalOptimization", id: 0x4002,
            details: "The device permits management of energy usage by an energy manager to optimize the local energy " +
                "usage.",
            xref: { document: "cluster", section: "9.6.5.1.3" }
        }),

        Field({
            name: "GridOptimization", id: 0x4003,
            details: "The device permits management of energy usage by an energy manager to optimize the grid energy " +
                "usage.",
            xref: { document: "cluster", section: "9.6.5.1.4" }
        })
    )
);

MatterDefinition.children.push(DeviceEnergyManagementMode);
