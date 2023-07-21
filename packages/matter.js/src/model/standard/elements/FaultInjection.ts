/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "FaultInjection", id: 0xfff1fc06, description: "Fault Injection",
    details: "The Fault Injection Cluster provide a means for a test harness to configure faults(for example " +
        "triggering a fault in the system).",

    children: [
        {
            tag: "command", name: "FailAtFault", id: 0x0, access: "R M", conformance: "M", direction: "request",

            children: [
                { tag: "datatype", name: "Type", type: "FaultType", conformance: "M" },
                { tag: "datatype", name: "Id", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "NumCallsToSkip", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "NumCallsToFail", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "TakeMutex", type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "FailRandomlyAtFault", id: 0x1, access: "R M", conformance: "M",
            direction: "request",
            children: [
                { tag: "datatype", name: "Type", type: "FaultType", conformance: "M" },
                { tag: "datatype", name: "Id", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Percentage", type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "FaultType", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "SystemFault", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "InetFault", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "ChipFault", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "CertFault", id: 0x4, conformance: "M" }
            ]
        }
    ]
});
