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
    FieldElement as Field
} from "../../elements/index.js";

export const PowerTopology = Cluster(
    {
        name: "PowerTopology", id: 0x9c, classification: "application", pics: "PWRTL",
        details: "The Power Topology Cluster provides a mechanism for expressing how power is flowing between " +
            "endpoints.",
        xref: { document: "core", section: "11.8" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.8.4" } },
        Field({
            name: "NODE", conformance: "O.a", constraint: "0", description: "NodeTopology",
            details: "This endpoint provides or consumes power to/from the entire node"
        }),
        Field({
            name: "TREE", conformance: "O.a", constraint: "1", description: "TreeTopology",
            details: "This endpoint provides or consumes power to/from itself and its child endpoints"
        }),
        Field({
            name: "SET", conformance: "O.a", constraint: "2", description: "SetTopology",
            details: "This endpoint provides or consumes power to/from a specified set of endpoints"
        }),
        Field({
            name: "DYPF", conformance: "[SET]", constraint: "3", description: "DynamicPowerFlow",
            details: "The specified set of endpoints may change"
        })
    ),

    Attribute(
        {
            name: "AvailableEndpoints", id: 0x0, type: "list", access: "R V", conformance: "SET",
            constraint: "max 20", quality: "F",
            details: "Indicates the list of endpoints capable of providing power to and/or consuming power from the " +
                "endpoint hosting this server.",
            xref: { document: "core", section: "11.8.5.1" }
        },

        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            name: "ActiveEndpoints", id: 0x1, type: "list", access: "R V", conformance: "DYPF",
            constraint: "max 20", quality: "N",
            details: "Indicates the current list of endpoints currently providing or consuming power to or from the " +
                "endpoint hosting this server. This list shall be a subset of the value of the AvailableEndpoints " +
                "attribute.",
            xref: { document: "core", section: "11.8.5.2" }
        },

        Field({ name: "entry", type: "endpoint-no" })
    )
);

MatterDefinition.children.push(PowerTopology);
