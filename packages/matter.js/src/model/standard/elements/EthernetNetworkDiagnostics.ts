/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "EthernetNetworkDiagnostics", id: 0x37, classification: "node",
    description: "Ethernet Network Diagnostics",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
        "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
        "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
        "relevant to a potential Ethernet connection to a Node.",
    xref: { document: "core", section: "11.15" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.15.4" },

            children: [
                {
                    tag: "datatype", name: "PKTCNT", constraint: "0", description: "PacketCounts",
                    details: "Node makes available the counts for the number of received and transmitted packets on the ethernet " +
                        "interface."
                },
                {
                    tag: "datatype", name: "ERRCNT", constraint: "1", description: "ErrorCounts",
                    details: "Node makes available the counts for the number of errors that have occurred during the reception " +
                        "and transmission of packets on the ethernet interface."
                }
            ]
        },

        {
            tag: "attribute", name: "PhyRate", id: 0x0, type: "PHYRateEnum", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical " +
                "layer of the Node. A value of null shall indicate that the interface is not currently configured or " +
                "operational.",
            xref: { document: "core", section: "11.15.6.1" }
        },

        {
            tag: "attribute", name: "FullDuplex", id: 0x1, type: "bool", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex " +
                "operating mode. A value of null shall indicate that the interface is not currently configured or " +
                "operational.",
            xref: { document: "core", section: "11.15.6.2" }
        },

        {
            tag: "attribute", name: "PacketRxCount", id: 0x2, type: "uint64", access: "R V",
            conformance: "PKTCNT", default: 0,
            details: "The PacketRxCount attribute shall indicate the number of packets that have been received on the " +
                "ethernet network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the " +
                "Node.",
            xref: { document: "core", section: "11.15.6.3" }
        },

        {
            tag: "attribute", name: "PacketTxCount", id: 0x3, type: "uint64", access: "R V",
            conformance: "PKTCNT", default: 0, quality: "C",
            details: "The PacketTxCount attribute shall indicate the number of packets that have been successfully " +
                "transferred on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon " +
                "a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.4" }
        },

        {
            tag: "attribute", name: "TxErrCount", id: 0x4, type: "uint64", access: "R V", conformance: "ERRCNT",
            default: 0, quality: "C",
            details: "The TxErrCount attribute shall indicate the number of failed packet transmissions that have " +
                "occurred on the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a " +
                "reboot of the Node.",
            xref: { document: "core", section: "11.15.6.5" }
        },

        {
            tag: "attribute", name: "CollisionCount", id: 0x5, type: "uint64", access: "R V",
            conformance: "ERRCNT", default: 0, quality: "C",
            details: "The CollisionCount attribute shall indicate the number of collisions that have occurred while " +
                "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                "shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.6" }
        },

        {
            tag: "attribute", name: "OverrunCount", id: 0x6, type: "uint64", access: "R V",
            conformance: "ERRCNT", default: 0, quality: "C",
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or " +
                "egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.7" }
        },

        {
            tag: "attribute", name: "CarrierDetect", id: 0x7, type: "bool", access: "R V", conformance: "O",
            default: null, quality: "X C",
            details: "The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present " +
                "on the ethernet network interface. A value of null shall indicate that the interface is not " +
                "currently configured or operational.",
            xref: { document: "core", section: "11.15.6.8" }
        },

        {
            tag: "attribute", name: "TimeSinceReset", id: 0x8, type: "uint64", access: "R V", conformance: "O",
            default: 0, quality: "C",
            xref: { document: "core", section: "11.15.6" }
        },

        {
            tag: "command", name: "ResetCounts", id: 0x0, access: "M", conformance: "PKTCNT | ERRCNT",
            direction: "request", response: "status",

            details: "Reception of this command shall reset the following attributes to 0:" +
                "\n" +
                "  • PacketRxCount" +
                "\n" +
                "  • PacketTxCount" +
                "\n" +
                "  • TxErrCount" +
                "\n" +
                "  • CollisionCount" +
                "\n" +
                "  • OverrunCount" +
                "\n" +
                "This command has no associated data.",

            xref: { document: "core", section: "11.15.7.1" }
        },

        {
            tag: "datatype", name: "PHYRateEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.15.5.1" },

            children: [
                { tag: "datatype", name: "Rate10M", id: 0x0, conformance: "M", description: "PHY rate is 10Mbps" },
                { tag: "datatype", name: "Rate100M", id: 0x1, conformance: "M", description: "PHY rate is 100Mbps" },
                { tag: "datatype", name: "Rate1G", id: 0x2, conformance: "M", description: "PHY rate is 1Gbps" },
                { tag: "datatype", name: "Rate25G", id: 0x3, conformance: "M", description: "PHY rate is 2.5Gbps" },
                { tag: "datatype", name: "Rate5G", id: 0x4, conformance: "M", description: "PHY rate is 5Gbps" },
                { tag: "datatype", name: "Rate10G", id: 0x5, conformance: "M", description: "PHY rate is 10Gbps" },
                { tag: "datatype", name: "Rate40G", id: 0x6, conformance: "M", description: "PHY rate is 40Gbps" },
                { tag: "datatype", name: "Rate100G", id: 0x7, conformance: "M", description: "PHY rate is 100Gbps" },
                { tag: "datatype", name: "Rate200G", id: 0x8, conformance: "M", description: "PHY rate is 200Gbps" },
                { tag: "datatype", name: "Rate400G", id: 0x9, conformance: "M", description: "PHY rate is 400Gbps" }
            ]
        }
    ]
});
