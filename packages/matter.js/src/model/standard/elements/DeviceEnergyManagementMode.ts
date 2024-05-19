/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DeviceEnergyManagementMode = Cluster({
    name: "DeviceEnergyManagementMode", id: 0x9f, type: "ModeBase", classification: "application",
    pics: "DEMM",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for Device Energy Management devices." +
        "\n" +
        "NOTE Support for Device Energy Management Mode cluster is provisional.",
    xref: { document: "cluster", section: "9.6" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: { document: "cluster", section: "9.6.4.1" }
        })
    ]
});

Matter.children.push(DeviceEnergyManagementMode);
