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
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "ClientMonitoring", id: 0x1046, description: "Client Monitoring",
    details: "Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions " +
        "on the server.",

    children: [
        Attribute({
            name: "IdleModeInterval", id: 0x0, type: "uint32", conformance: "M", constraint: "300 to 86400000",
            default: 18
        }),
        Attribute({
            name: "ActiveModeInterval", id: 0x1, type: "uint32", conformance: "M",
            constraint: "300 to 86400000", default: 18
        }),
        Attribute({
            name: "ActiveModeThreshold", id: 0x2, type: "uint16", conformance: "M", constraint: "300 to 60000",
            default: 0
        }),
        Attribute({
            name: "ExpectedClients", id: 0x3, type: "list", conformance: "M", constraint: "max 4",
            children: [Field({ name: "entry", type: "MonitoringRegistration" })]
        }),

        Command({
            name: "RegisterClientMonitoring", id: 0x0, access: "R M", conformance: "M", direction: "request",
            children: [
                Field({ name: "ClientNodeId", type: "node-id", conformance: "M" }),
                Field({ name: "ICid", type: "uint64", conformance: "M" })
            ]
        }),

        Command({
            name: "UnregisterClientMonitoring", id: 0x1, access: "R M", conformance: "M", direction: "request",
            children: [
                Field({ name: "ClientNodeId", type: "node-id", conformance: "M" }),
                Field({ name: "ICid", type: "uint64", conformance: "M" })
            ]
        }),

        Command({ name: "StayAwakeRequest", id: 0x2, access: "R M", conformance: "O", direction: "request" }),

        Datatype({
            name: "MonitoringRegistration", type: "struct", access: "R F", conformance: "M",
            children: [
                Field({ name: "ClientNodeId", id: 0x1, type: "node-id", conformance: "M" }),
                Field({ name: "ICid", id: 0x2, type: "uint64", conformance: "M" })
            ]
        })
    ]
}));
