/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ClientMonitoring", id: 0x1046, description: "Client Monitoring",
    details: "Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions " +
        "on the server.",

    children: [
        {
            tag: "attribute", name: "IdleModeInterval", id: 0x0, type: "uint32", conformance: "M",
            constraint: "300 to 86400000", default: 18
        },
        {
            tag: "attribute", name: "ActiveModeInterval", id: 0x1, type: "uint32", conformance: "M",
            constraint: "300 to 86400000", default: 18
        },
        {
            tag: "attribute", name: "ActiveModeThreshold", id: 0x2, type: "uint16", conformance: "M",
            constraint: "300 to 60000", default: 0
        },
        {
            tag: "attribute", name: "ExpectedClients", id: 0x3, type: "list", conformance: "M",
            constraint: "max 4",
            children: [{ tag: "datatype", name: "entry", type: "MonitoringRegistration" }]
        },

        {
            tag: "command", name: "RegisterClientMonitoring", id: 0x0, access: "R M", conformance: "M",
            direction: "request",
            children: [
                { tag: "datatype", name: "ClientNodeId", type: "node-id", conformance: "M" },
                { tag: "datatype", name: "ICid", type: "uint64", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "UnregisterClientMonitoring", id: 0x1, access: "R M", conformance: "M",
            direction: "request",
            children: [
                { tag: "datatype", name: "ClientNodeId", type: "node-id", conformance: "M" },
                { tag: "datatype", name: "ICid", type: "uint64", conformance: "M" }
            ]
        },

        { tag: "command", name: "StayAwakeRequest", id: 0x2, access: "R M", conformance: "O", direction: "request" },

        {
            tag: "datatype", name: "MonitoringRegistration", type: "struct", access: "R F", conformance: "M",
            children: [
                { tag: "datatype", name: "ClientNodeId", id: 0x1, type: "node-id", conformance: "M" },
                { tag: "datatype", name: "ICid", id: 0x2, type: "uint64", conformance: "M" }
            ]
        }
    ]
});
