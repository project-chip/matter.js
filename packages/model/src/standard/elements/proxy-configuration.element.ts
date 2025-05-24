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

export const ProxyConfiguration = Cluster(
    { name: "ProxyConfiguration", id: 0x42 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [], quality: "N" },
        Field({ name: "entry", type: "ConfigurationStruct" })
    ),

    Datatype(
        { name: "ConfigurationStruct", type: "struct" },
        Field({
            name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M", constraint: "desc",
            default: false
        }),

        Field(
            {
                name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M", constraint: "desc",
                default: []
            },
            Field({ name: "entry", type: "node-id" })
        )
    )
);

MatterDefinition.children.push(ProxyConfiguration);
