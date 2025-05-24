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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ValidProxies = Cluster(
    { name: "ValidProxies", id: 0x44 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "ValidProxyList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [], quality: "N F" },
        Field({ name: "entry", type: "ValidProxyStruct" })
    ),
    Command({
        name: "GetValidProxiesRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
        response: "GetValidProxiesResponse"
    }),

    Command(
        { name: "GetValidProxiesResponse", id: 0x1, conformance: "M", direction: "response" },
        Field(
            { name: "ProxyNodeIdList", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "node-id" })
        )
    ),

    Datatype(
        { name: "ValidProxyStruct", type: "struct" },
        Field({ name: "NodeId", id: 0x1, type: "node-id", access: "RW", conformance: "M" })
    )
);

MatterDefinition.children.push(ValidProxies);
