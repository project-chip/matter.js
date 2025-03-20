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

export const Binding = Cluster(
    {
        name: "Binding", id: 0x1e, classification: "endpoint", pics: "BIND",

        details: "NOTE" +
            "\n" +
            "This scope of this document is the Binding cluster as part of the Cluster Library. The Binding " +
            "cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the " +
            "binding table." +
            "\n" +
            "A binding represents a persistent relationship between an endpoint and one or more other local or " +
            "remote endpoints. A binding does not require that the relationship exists. It is up to the node " +
            "application to set up the relationship." +
            "\n" +
            "A binding is used to inform a client endpoint of one or more targets for a potential interaction. " +
            "For example: a light switch that controls one or more light bulbs, needs to be told the nodes and " +
            "endpoints of the bulbs, or told a group in which the bulbs are members. For example: A client that " +
            "needs to subscribe to an occupancy sensor, needs to know the node and endpoint of the sensor." +
            "\n" +
            "In such cases, a binding is used to direct a local endpoint to a target. The existence of the " +
            "Binding cluster on the client endpoint, allows the creation of one or more binding entries " +
            "(bindings) in the Binding cluster." +
            "\n" +
            "Each binding indicates another endpoint or cluster on another endpoint. Multiple bindings are " +
            "allowed, depending on the interaction." +
            "\n" +
            "A binding is either a unicast binding, where the target is a single endpoint on a single node, or a " +
            "groupcast binding, where the target is a group, which may indicate multiple endpoints on multiple " +
            "nodes. The binding may also target a single cluster on the target endpoint(s)." +
            "\n" +
            "When a client cluster requires a target for an interaction, the Binding cluster shall exist on the " +
            "same endpoint." +
            "\n" +
            "Once a binding entry is created on the Binding cluster, the client endpoint may initiate " +
            "interactions to the binding target.",

        xref: { document: "core", section: "9.6" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "Binding", id: 0x0, type: "list", access: "RW F VM", conformance: "M", constraint: "desc",
            default: [], quality: "N",
            details: "Each entry shall represent a binding.",
            xref: { document: "core", section: "9.6.6.1" }
        },

        Field({ name: "entry", type: "TargetStruct" })
    ),

    Datatype(
        { name: "TargetStruct", type: "struct", xref: { document: "core", section: "9.6.5.1" } },

        Field({
            name: "Node", id: 0x1, type: "node-id", access: "F", conformance: "Endpoint",
            details: "This field is the remote target node ID. If the Endpoint field is present, this field shall be " +
                "present.",
            xref: { document: "core", section: "9.6.5.1.1" }
        }),

        Field({
            name: "Group", id: 0x2, type: "group-id", access: "F", conformance: "!Endpoint",
            constraint: "min 1",
            details: "This field is the target group ID that represents remote endpoints. If the Endpoint field is " +
                "present, this field shall NOT be present.",
            xref: { document: "core", section: "9.6.5.1.2" }
        }),

        Field({
            name: "Endpoint", id: 0x3, type: "endpoint-no", access: "F", conformance: "!Group",
            details: "This field is the remote endpoint that the local endpoint is bound to. If the Group field is " +
                "present, this field shall NOT be present.",
            xref: { document: "core", section: "9.6.5.1.3" }
        }),

        Field({
            name: "Cluster", id: 0x4, type: "cluster-id", access: "F", conformance: "O",
            details: "This field is the cluster ID (client & server) on the local and target endpoint(s). If this field is " +
                "present, the client cluster shall also exist on this endpoint (with this Binding cluster). If this " +
                "field is present, the target shall be this cluster on the target endpoint(s).",
            xref: { document: "core", section: "9.6.5.1.4" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(Binding);
