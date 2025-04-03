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

export const EthernetNetworkDiagnostics = Cluster(
    {
        name: "EthernetNetworkDiagnostics", id: 0x37, classification: "node", pics: "DGETH", quality: "K",
        details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
            "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
            "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
            "relevant to a potential Ethernet connection to a Node.",
        xref: { document: "core", section: "11.16" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.16.4" } },
        Field({
            name: "PKTCNT", constraint: "0", description: "PacketCounts",
            details: "Node makes available the counts for the number of received and transmitted packets on the ethernet " +
                "interface."
        }),
        Field({
            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
            details: "Node makes available the counts for the number of errors that have occurred during the reception and " +
                "transmission of packets on the ethernet interface."
        })
    ),

    Attribute({
        name: "PhyRate", id: 0x0, type: "PHYRateEnum", access: "R V", conformance: "O", default: null,
        quality: "X",
        details: "The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical " +
            "layer of the Node. A value of null shall indicate that the interface is not currently configured or " +
            "operational.",
        xref: { document: "core", section: "11.16.6.1" }
    }),

    Attribute({
        name: "FullDuplex", id: 0x1, type: "bool", access: "R V", conformance: "O", default: null,
        quality: "X",
        details: "The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating " +
            "mode. A value of null shall indicate that the interface is not currently configured or operational.",
        xref: { document: "core", section: "11.16.6.2" }
    }),

    Attribute({
        name: "PacketRxCount", id: 0x2, type: "uint64", access: "R V", conformance: "PKTCNT", default: 0,
        quality: "C",
        details: "The PacketRxCount attribute shall indicate the number of packets that have been received on the " +
            "ethernet network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the " +
            "Node.",
        xref: { document: "core", section: "11.16.6.3" }
    }),

    Attribute({
        name: "PacketTxCount", id: 0x3, type: "uint64", access: "R V", conformance: "PKTCNT", default: 0,
        quality: "C",
        details: "The PacketTxCount attribute shall indicate the number of packets that have been successfully " +
            "transferred on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon " +
            "a reboot of the Node.",
        xref: { document: "core", section: "11.16.6.4" }
    }),

    Attribute({
        name: "TxErrCount", id: 0x4, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "C",
        details: "The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred " +
            "on the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the " +
            "Node.",
        xref: { document: "core", section: "11.16.6.5" }
    }),

    Attribute({
        name: "CollisionCount", id: 0x5, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "C",
        details: "The CollisionCount attribute shall indicate the number of collisions that have occurred while " +
            "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
            "shall be reset to 0 upon a reboot of the Node.",
        xref: { document: "core", section: "11.16.6.6" }
    }),

    Attribute({
        name: "OverrunCount", id: 0x6, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "C",
        details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
            "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
            "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
        xref: { document: "core", section: "11.16.6.7" }
    }),

    Attribute({
        name: "CarrierDetect", id: 0x7, type: "bool", access: "R V", conformance: "O", default: null,
        quality: "X C",
        details: "The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on " +
            "the ethernet network interface. A value of null shall indicate that the interface is not currently " +
            "configured or operational.",
        xref: { document: "core", section: "11.16.6.8" }
    }),

    Attribute({
        name: "TimeSinceReset", id: 0x8, type: "uint64", access: "R V", conformance: "O", default: 0,
        quality: "C",
        details: "The TimeSinceReset attribute shall indicate the duration of time, in minutes, that it has been since " +
            "the ethernet network interface has reset for any reason.",
        xref: { document: "core", section: "11.16.6.9" }
    }),

    Command({
        name: "ResetCounts", id: 0x0, access: "M", conformance: "PKTCNT | ERRCNT", direction: "request",
        response: "status",

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

        xref: { document: "core", section: "11.16.7.1" }
    }),

    Datatype(
        { name: "PHYRateEnum", type: "enum8", xref: { document: "core", section: "11.16.5.1" } },
        Field({ name: "Rate10M", id: 0x0, conformance: "M", description: "PHY rate is 10Mbps" }),
        Field({ name: "Rate100M", id: 0x1, conformance: "M", description: "PHY rate is 100Mbps" }),
        Field({ name: "Rate1G", id: 0x2, conformance: "M", description: "PHY rate is 1Gbps" }),
        Field({ name: "Rate25G", id: 0x3, conformance: "M", description: "PHY rate is 2.5Gbps" }),
        Field({ name: "Rate5G", id: 0x4, conformance: "M", description: "PHY rate is 5Gbps" }),
        Field({ name: "Rate10G", id: 0x5, conformance: "M", description: "PHY rate is 10Gbps" }),
        Field({ name: "Rate40G", id: 0x6, conformance: "M", description: "PHY rate is 40Gbps" }),
        Field({ name: "Rate100G", id: 0x7, conformance: "M", description: "PHY rate is 100Gbps" }),
        Field({ name: "Rate200G", id: 0x8, conformance: "M", description: "PHY rate is 200Gbps" }),
        Field({ name: "Rate400G", id: 0x9, conformance: "M", description: "PHY rate is 400Gbps" })
    )
);

MatterDefinition.children.push(EthernetNetworkDiagnostics);
