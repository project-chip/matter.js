/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "FaultInjection", id: 0xfff1fc06, description: "Fault Injection",
    details: "The Fault Injection Cluster provide a means for a test harness to configure faults(for example " +
        "triggering a fault in the system).",

    children: [
        Command({
            name: "FailAtFault", id: 0x0, access: "R M", conformance: "M", direction: "request",

            children: [
                Field({ name: "Type", type: "FaultType", conformance: "M" }),
                Field({ name: "Id", type: "uint32", conformance: "M" }),
                Field({ name: "NumCallsToSkip", type: "uint32", conformance: "M" }),
                Field({ name: "NumCallsToFail", type: "uint32", conformance: "M" }),
                Field({ name: "TakeMutex", type: "bool", conformance: "M" })
            ]
        }),

        Command({
            name: "FailRandomlyAtFault", id: 0x1, access: "R M", conformance: "M", direction: "request",
            children: [
                Field({ name: "Type", type: "FaultType", conformance: "M" }),
                Field({ name: "Id", type: "uint32", conformance: "M" }),
                Field({ name: "Percentage", type: "uint8", conformance: "M" })
            ]
        }),

        Datatype({
            name: "FaultType", type: "enum8", conformance: "M",

            children: [
                Field({ name: "Unspecified", id: 0x0, conformance: "M" }),
                Field({ name: "SystemFault", id: 0x1, conformance: "M" }),
                Field({ name: "InetFault", id: 0x2, conformance: "M" }),
                Field({ name: "ChipFault", id: 0x3, conformance: "M" }),
                Field({ name: "CertFault", id: 0x4, conformance: "M" })
            ]
        })
    ]
}));
