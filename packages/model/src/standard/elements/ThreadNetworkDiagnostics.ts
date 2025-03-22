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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ThreadNetworkDiagnostics = Cluster(
    {
        name: "ThreadNetworkDiagnostics", id: 0x35, classification: "node", pics: "DGTHREAD", quality: "K",
        details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
            "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
            "Thread Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
            "potential Thread radio running on a Node.",
        xref: { document: "core", section: "11.14" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.14.4" } },
        Field({
            name: "PKTCNT", constraint: "0", description: "PacketCounts",
            details: "Server supports the counts for the number of received and transmitted packets on the Thread " +
                "interface."
        }),
        Field({
            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
            details: "Server supports the counts for the number of errors that have occurred during the reception and " +
                "transmission of packets on the Thread interface."
        }),
        Field({
            name: "MLECNT", constraint: "2", description: "MleCounts",
            details: "Server supports the counts for various MLE layer happenings."
        }),
        Field({
            name: "MACCNT", constraint: "3", description: "MacCounts",
            details: "Server supports the counts for various MAC layer happenings."
        })
    ),

    Attribute({
        name: "Channel", id: 0x0, type: "uint16", access: "R V", conformance: "M", quality: "X",
        details: "The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread " +
            "interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall " +
            "indicate that the Thread interface is not currently configured or operational.",
        xref: { document: "core", section: "11.14.6.1" }
    }),

    Attribute({
        name: "RoutingRole", id: 0x1, type: "RoutingRoleEnum", access: "R V", conformance: "M",
        quality: "X",
        details: "The RoutingRole attribute shall indicate the role that this Node has within the routing of messages " +
            "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined" +
            "\n" +
            "in the following table. A value of null shall indicate that the Thread interface is not currently " +
            "configured or operational.",
        xref: { document: "core", section: "11.14.6.2" }
    }),

    Attribute({
        name: "NetworkName", id: 0x2, type: "string", access: "R V", conformance: "M", constraint: "max 16",
        quality: "X",
        details: "The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network " +
            "that the Node has been configured to join to. A value of null shall indicate that the Thread " +
            "interface is not currently configured or operational.",
        xref: { document: "core", section: "11.14.6.3" }
    }),

    Attribute({
        name: "PanId", id: 0x3, type: "uint16", access: "R V", conformance: "M", quality: "X",
        details: "The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value " +
            "of null shall indicate that the Thread interface is not currently configured or operational.",
        xref: { document: "core", section: "11.14.6.4" }
    }),

    Attribute({
        name: "ExtendedPanId", id: 0x4, type: "uint64", access: "R V", conformance: "M", quality: "X",
        details: "The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread " +
            "network. A value of null shall indicate that the Thread interface is not currently configured or " +
            "operational.",
        xref: { document: "core", section: "11.14.6.5" }
    }),

    Attribute({
        name: "MeshLocalPrefix", id: 0x5, type: "ipv6pre", access: "R V", conformance: "M", quality: "X",
        details: "The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that " +
            "the Node has been configured to join to. A value of null shall indicate that the Thread interface is " +
            "not currently configured or operational.",
        xref: { document: "core", section: "11.14.6.6" }
    }),

    Attribute({
        name: "OverrunCount", id: 0x6, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "C",
        details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
            "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
            "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
        xref: { document: "core", section: "11.14.6.7" }
    }),

    Attribute(
        {
            name: "NeighborTable", id: 0x7, type: "list", access: "R V", conformance: "M", default: [],
            details: "The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor " +
                "table on the Node.",
            xref: { document: "core", section: "11.14.6.8" }
        },

        Field({ name: "entry", type: "NeighborTableStruct" })
    ),

    Attribute(
        {
            name: "RouteTable", id: 0x8, type: "list", access: "R V", conformance: "M", default: [],
            details: "The RouteTable attribute shall indicate the current list of router capable Nodes for which routes " +
                "have been established.",
            xref: { document: "core", section: "11.14.6.9" }
        },

        Field({ name: "entry", type: "RouteTableStruct" })
    ),

    Attribute({
        name: "PartitionId", id: 0x9, type: "uint32", access: "R V", conformance: "M", quality: "X",
        details: "The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to " +
            "which the Node is joined. Null if not attached to a Thread network.",
        xref: { document: "core", section: "11.14.6.10" }
    }),

    Attribute({
        name: "Weighting", id: 0xa, type: "uint16", access: "R V", conformance: "M", constraint: "max 255",
        quality: "X",
        details: "The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader " +
            "role. Null if not attached to a Thread network.",
        xref: { document: "core", section: "11.14.6.11" }
    }),

    Attribute({
        name: "DataVersion", id: 0xb, type: "uint16", access: "R V", conformance: "M",
        constraint: "max 255", quality: "X",
        details: "The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. Null " +
            "if not attached to a Thread network.",
        xref: { document: "core", section: "11.14.6.12" }
    }),

    Attribute({
        name: "StableDataVersion", id: 0xc, type: "uint16", access: "R V", conformance: "M",
        constraint: "max 255", quality: "X",
        details: "The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of " +
            "data the Node currently uses. Null if not attached to a Thread network.",
        xref: { document: "core", section: "11.14.6.13" }
    }),

    Attribute({
        name: "LeaderRouterId", id: 0xd, type: "uint8", access: "R V", conformance: "M",
        constraint: "max 62", quality: "X",
        details: "The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to " +
            "utilize upon becoming a router or leader on the Thread network. Null if not attached to a Thread " +
            "network.",
        xref: { document: "core", section: "11.14.6.14" }
    }),

    Attribute({
        name: "DetachedRoleCount", id: 0xe, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The DetachedRoleCount attribute shall indicate the number of times the Node entered the " +
            "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.15" }
    }),

    Attribute({
        name: "ChildRoleCount", id: 0xf, type: "uint16", access: "R V", conformance: "[MLECNT]", default: 0,
        quality: "C",
        details: "The ChildRoleCount attribute shall indicate the number of times the Node entered the " +
            "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.16" }
    }),

    Attribute({
        name: "RouterRoleCount", id: 0x10, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The RouterRoleCount attribute shall indicate the number of times the Node entered the " +
            "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.17" }
    }),

    Attribute({
        name: "LeaderRoleCount", id: 0x11, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The LeaderRoleCount attribute shall indicate the number of times the Node entered the " +
            "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.18" }
    }),

    Attribute({
        name: "AttachAttemptCount", id: 0x12, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The AttachAttemptCount attribute shall indicate the number of attempts that have been made to attach " +
            "to a Thread network while the Node was detached from all Thread networks. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.19" }
    }),

    Attribute({
        name: "PartitionIdChangeCount", id: 0x13, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The PartitionIdChangeCount attribute shall indicate the number of times that the Thread network that " +
            "the Node is connected to has changed its Partition ID. This value shall only be reset upon a Node " +
            "reboot.",
        xref: { document: "core", section: "11.14.6.20" }
    }),

    Attribute({
        name: "BetterPartitionAttachAttemptCount", id: 0x14, type: "uint16", access: "R V",
        conformance: "[MLECNT]", default: 0, quality: "C",
        details: "The BetterPartitionAttachAttemptCount attribute shall indicate the number of times a Node has " +
            "attempted to attach to a different Thread partition that it has determined is better than the " +
            "partition it is currently attached to. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.21" }
    }),

    Attribute({
        name: "ParentChangeCount", id: 0x15, type: "uint16", access: "R V", conformance: "[MLECNT]",
        default: 0, quality: "C",
        details: "The ParentChangeCount attribute shall indicate the number of times a Node has changed its parent. " +
            "This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.22" }
    }),

    Attribute({
        name: "TxTotalCount", id: 0x16, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxTotalCount attribute shall indicate the total number of unique MAC frame transmission " +
            "requests. The TxTotalCount attribute shall only be incremented by 1 for each MAC transmission " +
            "request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value " +
            "shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.23" }
    }),

    Attribute({
        name: "TxUnicastCount", id: 0x17, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxUnicastCount attribute shall indicate the total number of unique unicast MAC frame " +
            "transmission requests. The TxUnicastCount attribute shall only be incremented by 1 for each unicast " +
            "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
            "retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.24" }
    }),

    Attribute({
        name: "TxBroadcastCount", id: 0x18, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxBroadcastCount attribute shall indicate the total number of unique broadcast MAC frame " +
            "transmission requests. The TxBroadcastCount attribute shall only be incremented by 1 for each " +
            "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
            "retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.25" }
    }),

    Attribute({
        name: "TxAckRequestedCount", id: 0x19, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission " +
            "requests with requested acknowledgment. The TxAckRequestedCount attribute shall only be incremented " +
            "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of CCA " +
            "failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.26" }
    }),

    Attribute({
        name: "TxAckedCount", id: 0x1a, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxAckedCount attribute shall indicate the total number of unique MAC frame transmission requests " +
            "that were acked. The TxAckedCount attribute shall only be incremented by 1 for each MAC transmission " +
            "request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or " +
            "retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.27" }
    }),

    Attribute({
        name: "TxNoAckRequestedCount", id: 0x1b, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxNoAckRequestedCount attribute shall indicate the total number of unique MAC frame" +
            "\n" +
            "transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute shall " +
            "only be incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
            "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
        xref: { document: "core", section: "11.14.6.28" }
    }),

    Attribute({
        name: "TxDataCount", id: 0x1c, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxDataCount attribute shall indicate the total number of unique MAC Data frame transmission " +
            "requests. The TxDataCount attribute shall only be incremented by 1 for each MAC Data frame " +
            "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. " +
            "This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.29" }
    }),

    Attribute({
        name: "TxDataPollCount", id: 0x1d, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxDataPollCount attribute shall indicate the total number of unique MAC Data Poll frame " +
            "transmission requests. The TxDataPollCount attribute shall only be incremented by 1 for each MAC " +
            "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
            "retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.30" }
    }),

    Attribute({
        name: "TxBeaconCount", id: 0x1e, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxBeaconCount attribute shall indicate the total number of unique MAC Beacon frame transmission " +
            "requests. The TxBeaconCount attribute shall only be incremented by 1 for each MAC Beacon frame " +
            "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
        xref: { document: "core", section: "11.14.6.31" }
    }),

    Attribute({
        name: "TxBeaconRequestCount", id: 0x1f, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxBeaconRequestCount attribute shall indicate the total number of unique MAC Beacon Request " +
            "frame transmission requests. The TxBeaconRequestCount attribute shall only be incremented by 1 for " +
            "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
            "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.32" }
    }),

    Attribute({
        name: "TxOtherCount", id: 0x20, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxOtherCount attribute shall indicate the total number of unique MAC frame transmission requests " +
            "that are not counted by any other attribute. The TxOtherCount attribute shall only be incremented by " +
            "1 for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
            "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.33" }
    }),

    Attribute({
        name: "TxRetryCount", id: 0x21, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxRetryCount attribute shall indicate the total number of MAC retransmission attempts. The " +
            "TxRetryCount attribute shall only be incremented by 1 for each retransmission attempt that may be " +
            "triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
            "value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.34" }
    }),

    Attribute({
        name: "TxDirectMaxRetryExpiryCount", id: 0x22, type: "uint32", access: "R V",
        conformance: "[MACCNT]", default: 0, quality: "C",

        details: "The TxDirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC" +
            "\n" +
            "transmission packets that meet maximal retry limit for direct packets. The " +
            "TxDirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
            "transmission packets that meets the maximal retry limit for direct packets. This value shall only be " +
            "reset upon a Node reboot.",

        xref: { document: "core", section: "11.14.6.35" }
    }),

    Attribute({
        name: "TxIndirectMaxRetryExpiryCount", id: 0x23, type: "uint32", access: "R V",
        conformance: "[MACCNT]", default: 0, quality: "C",
        details: "The TxIndirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC " +
            "transmission packets that meet maximal retry limit for indirect packets. The " +
            "TxIndirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
            "transmission packets that meets the maximal retry limit for indirect packets. This value shall only " +
            "be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.36" }
    }),

    Attribute({
        name: "TxErrCcaCount", id: 0x24, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The TxErrCcaCount attribute shall indicate the total number of CCA failures. The TxErrCcaCount " +
            "attribute shall only be incremented by 1 for each instance of a CCA failure. This value shall only " +
            "be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.37" }
    }),

    Attribute({
        name: "TxErrAbortCount", id: 0x25, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxErrAbortCount attribute shall indicate the total number of unique MAC transmission request " +
            "failures caused by an abort error. The TxErrAbortCount attribute shall only be incremented by 1 for " +
            "each unique MAC transmission request failure caused by an abort error.",
        xref: { document: "core", section: "11.14.6.38" }
    }),

    Attribute({
        name: "TxErrBusyChannelCount", id: 0x26, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The TxErrBusyChannelCount attribute shall indicate the total number of unique MAC transmission " +
            "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
            "TxErrBusyChannelCount attribute shall only be incremented by 1 for each unique MAC transmission " +
            "request failure caused by a busy channel such as a CSMA/CA failure.",
        xref: { document: "core", section: "11.14.6.39" }
    }),

    Attribute({
        name: "RxTotalCount", id: 0x27, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxTotalCount attribute shall indicate the total number of received unique MAC frames. This value " +
            "shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.40" }
    }),

    Attribute({
        name: "RxUnicastCount", id: 0x28, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxUnicastCount attribute shall indicate the total number of received unique unicast MAC frames. " +
            "This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.41" }
    }),

    Attribute({
        name: "RxBroadcastCount", id: 0x29, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxBroadcastCount attribute shall indicate the total number of received unique broadcast MAC " +
            "frames. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.42" }
    }),

    Attribute({
        name: "RxDataCount", id: 0x2a, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxDataCount attribute shall indicate the total number of received unique MAC Data frames." +
            "\n" +
            "This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.43" }
    }),

    Attribute({
        name: "RxDataPollCount", id: 0x2b, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxDataPollCount attribute shall indicate the total number of received unique MAC Data Poll " +
            "frames. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.44" }
    }),

    Attribute({
        name: "RxBeaconCount", id: 0x2c, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxBeaconCount attribute shall indicate the total number of received unique MAC Beacon frames. " +
            "This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.45" }
    }),

    Attribute({
        name: "RxBeaconRequestCount", id: 0x2d, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxBeaconRequestCount attribute shall indicate the total number of received unique MAC Beacon " +
            "Request frames. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.46" }
    }),

    Attribute({
        name: "RxOtherCount", id: 0x2e, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
            "that are not counted by any other attribute. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.47" }
    }),

    Attribute({
        name: "RxAddressFilteredCount", id: 0x2f, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxAddressFilteredCount attribute shall indicate the total number of received unique MAC frame " +
            "requests that have been dropped as a result of MAC filtering. This value shall only be reset upon a " +
            "Node reboot.",
        xref: { document: "core", section: "11.14.6.48" }
    }),

    Attribute({
        name: "RxDestAddrFilteredCount", id: 0x30, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxDestAddrFilteredCount attribute shall indicate the total number of received unique MAC frame " +
            "requests that have been dropped as a result of a destination address check. This value shall only be " +
            "reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.49" }
    }),

    Attribute({
        name: "RxDuplicatedCount", id: 0x31, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxDuplicatedCount attribute shall indicate the total number of received MAC frame requests that " +
            "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
            "value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.50" }
    }),

    Attribute({
        name: "RxErrNoFrameCount", id: 0x32, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxErrNoFrameCount attribute shall indicate the total number of received unique MAC frame " +
            "requests that have been dropped as a result of missing or malformed frame contents. This value shall " +
            "only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.51" }
    }),

    Attribute({
        name: "RxErrUnknownNeighborCount", id: 0x33, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxErrUnknownNeighborCount attribute shall indicate the total number of received unique MAC frame " +
            "requests that have been dropped as a result of originating from an unknown neighbor" +
            "\n" +
            "device. This value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.52" }
    }),

    Attribute({
        name: "RxErrInvalidSrcAddrCount", id: 0x34, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxErrInvalidSrcAddrCount attribute shall indicate the total number of received unique MAC frame " +
            "requests that have been dropped as a result of containing an invalid source address. This value " +
            "shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.53" }
    }),

    Attribute({
        name: "RxErrSecCount", id: 0x35, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxErrSecCount attribute shall indicate the total number of received unique MAC frame requests " +
            "that have been dropped as a result of an error with the security of the received frame. This value " +
            "shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.54" }
    }),

    Attribute({
        name: "RxErrFcsCount", id: 0x36, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
        quality: "C",
        details: "The RxErrFcsCount attribute shall indicate the total number of received unique MAC frame requests " +
            "that have been dropped as a result of an error with the FCS of the received frame. This value shall " +
            "only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.55" }
    }),

    Attribute({
        name: "RxErrOtherCount", id: 0x37, type: "uint32", access: "R V", conformance: "[MACCNT]",
        default: 0, quality: "C",
        details: "The RxErrOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
            "that have been dropped as a result of an error that is not counted by any other attribute. This " +
            "value shall only be reset upon a Node reboot.",
        xref: { document: "core", section: "11.14.6.56" }
    }),

    Attribute({
        name: "ActiveTimestamp", id: 0x38, type: "uint64", access: "R V", conformance: "O", default: 0,
        quality: "X",
        details: "Null when there is no dataset configured.",
        xref: { document: "core", section: "11.14.6.57" }
    }),

    Attribute({
        name: "PendingTimestamp", id: 0x39, type: "uint64", access: "R V", conformance: "O", default: 0,
        quality: "X",
        details: "Null when there is no dataset configured.",
        xref: { document: "core", section: "11.14.6.58" }
    }),

    Attribute({
        name: "Delay", id: 0x3a, type: "uint32", access: "R V", conformance: "O", default: 0, quality: "X",
        details: "Null when there is no dataset configured.",
        xref: { document: "core", section: "11.14.6.59" }
    }),

    Attribute({
        name: "SecurityPolicy", id: 0x3b, type: "SecurityPolicy", access: "R V", conformance: "M",
        quality: "X",
        details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
            "which a Node is connected. Null when there is no dataset configured.",
        xref: { document: "core", section: "11.14.6.60" }
    }),

    Attribute({
        name: "ChannelPage0Mask", id: 0x3c, type: "octstr", access: "R V", conformance: "M",
        constraint: "4", quality: "X",
        details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. " +
            "The channels are represented in most significant bit order, with bit value 1 meaning selected, bit " +
            "value 0 meaning unselected. For example, the most significant bit of the left-most byte indicates " +
            "channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. Null when there " +
            "is no dataset configured.",
        xref: { document: "core", section: "11.14.6.61" }
    }),

    Attribute({
        name: "OperationalDatasetComponents", id: 0x3d, type: "OperationalDatasetComponents", access: "R V",
        conformance: "M", quality: "X",
        details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
            "various operationally acquired values.",
        xref: { document: "core", section: "11.14.6.62" }
    }),

    Attribute(
        {
            name: "ActiveNetworkFaultsList", id: 0x3e, type: "list", access: "R V", conformance: "M",
            constraint: "max 4",
            xref: { document: "core", section: "11.14.6" }
        },
        Field({ name: "entry", type: "NetworkFaultEnum" })
    ),

    Attribute({
        name: "ExtAddress", id: 0x3f, type: "uint64", access: "R V", conformance: "P, M", quality: "X",
        xref: { document: "core", section: "11.14.6" }
    }),
    Attribute({
        name: "Rloc16", id: 0x40, type: "uint16", access: "R V", conformance: "P, M", quality: "X",
        xref: { document: "core", section: "11.14.6" }
    }),

    Event(
        {
            name: "ConnectionStatus", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has " +
                "changed.",
            xref: { document: "core", section: "11.14.8.2" }
        },

        Field({ name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" })
    ),

    Event(
        {
            name: "NetworkFaultChange", id: 0x1, access: "V", conformance: "O", priority: "info",
            details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected " +
                "by the Node.",
            xref: { document: "core", section: "11.14.8.1" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                details: "This field shall represent the set of faults currently detected, as per Section 11.14.5.1, " +
                    "“NetworkFaultEnum Type”.",
                xref: { document: "core", section: "11.14.8.1.1" }
            },

            Field({ name: "entry", type: "NetworkFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                details: "This field shall represent the set of faults detected prior to this change event, as per Section " +
                    "11.14.5.1, “NetworkFaultEnum Type”.",
                xref: { document: "core", section: "11.14.8.1.2" }
            },

            Field({ name: "entry", type: "NetworkFaultEnum" })
        )
    ),

    Command({
        name: "ResetCounts", id: 0x0, access: "M", conformance: "ERRCNT", direction: "request",
        response: "status",

        details: "Reception of this command shall reset the following attributes to 0:" +
            "\n" +
            "  • OverrunCount" +
            "\n" +
            "This command has no associated data. Upon completion, this command shall send a status code set to a " +
            "value of SUCCESS back to the initiator.",

        xref: { document: "core", section: "11.14.7.1" }
    }),

    Datatype(
        { name: "NetworkFaultEnum", type: "enum8", xref: { document: "core", section: "11.14.5.1" } },
        Field({ name: "Unspecified", id: 0x0, conformance: "M", description: "Indicates an unspecified fault." }),
        Field({ name: "LinkDown", id: 0x1, conformance: "M", description: "Indicates the Thread link is down." }),
        Field({
            name: "HardwareFailure", id: 0x2, conformance: "M",
            description: "Indicates there has been Thread hardware failure."
        }),
        Field({ name: "NetworkJammed", id: 0x3, conformance: "M", description: "Indicates the Thread network is jammed." })
    ),

    Datatype(
        { name: "ConnectionStatusEnum", type: "enum8", xref: { document: "core", section: "11.14.5.2" } },
        Field({ name: "Connected", id: 0x0, conformance: "M", description: "Node is connected" }),
        Field({ name: "NotConnected", id: 0x1, conformance: "M", description: "Node is not connected" })
    ),

    Datatype(
        { name: "RoutingRoleEnum", type: "enum8", xref: { document: "core", section: "11.14.5.3" } },
        Field({ name: "Unspecified", id: 0x0, conformance: "M", description: "Unspecified routing role." }),
        Field({
            name: "Unassigned", id: 0x1, conformance: "M",
            description: "The Node does not currently have a role as a result of the Thread interface not currently being configured or operational."
        }),
        Field({
            name: "SleepyEndDevice", id: 0x2, conformance: "M",
            description: "The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior."
        }),
        Field({
            name: "EndDevice", id: 0x3, conformance: "M",
            description: "The Node acts as an End Device without RX- off-when-idle sleepy radio behavior."
        }),
        Field({ name: "Reed", id: 0x4, conformance: "M", description: "The Node acts as an Router Eligible End Device." }),
        Field({ name: "Router", id: 0x5, conformance: "M", description: "The Node acts as a Router Device." }),
        Field({ name: "Leader", id: 0x6, conformance: "M", description: "The Node acts as a Leader Device." })
    ),

    Datatype(
        { name: "NeighborTableStruct", type: "struct", xref: { document: "core", section: "11.14.5.4" } },
        Field({
            name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M",
            details: "This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.",
            xref: { document: "core", section: "11.14.5.4.1" }
        }),

        Field({
            name: "Age", id: 0x1, type: "uint32", conformance: "M",
            details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                "neighboring Node.",
            xref: { document: "core", section: "11.14.5.4.2" }
        }),

        Field({
            name: "Rloc16", id: 0x2, type: "uint16", conformance: "M",
            details: "This field shall specify the RLOC16 of the neighboring Node.",
            xref: { document: "core", section: "11.14.5.4.3" }
        }),

        Field({
            name: "LinkFrameCounter", id: 0x3, type: "uint32", conformance: "M",
            details: "This field shall specify the number of link layer frames that have been received from the " +
                "neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.14.5.4.4" }
        }),

        Field({
            name: "MleFrameCounter", id: 0x4, type: "uint32", conformance: "M",
            details: "This field shall specify the number of Mesh Link Establishment frames that have been received from " +
                "the neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.14.5.4.5" }
        }),

        Field({
            name: "Lqi", id: 0x5, type: "uint8", conformance: "M", constraint: "0 to 255",
            details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                "indicators, scaled from 0 to 255.",
            xref: { document: "core", section: "11.14.5.4.6" }
        }),

        Field({
            name: "AverageRssi", id: 0x6, type: "int8", conformance: "M", constraint: "-128 to 0",
            default: null, quality: "X",
            details: "This field SHOULD specify the average RSSI across all received frames from the neighboring Node " +
                "since the receiving Node’s last reboot. If there is no known received frames this field SHOULD have " +
                "the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.",
            xref: { document: "core", section: "11.14.5.4.7" }
        }),

        Field({
            name: "LastRssi", id: 0x7, type: "int8", conformance: "M", constraint: "-128 to 0", default: null,
            quality: "X",
            details: "This field shall specify the RSSI of the most recently received frame from the neighboring Node. If " +
                "there is no known last received frame the LastRssi field SHOULD have the value of null. This field " +
                "shall have the units of dBm, having the range -128 dBm to 0 dBm.",
            xref: { document: "core", section: "11.14.5.4.8" }
        }),

        Field({
            name: "FrameErrorRate", id: 0x8, type: "uint8", conformance: "M", constraint: "0 to 100",
            default: 0,
            details: "This field shall specify the percentage of received frames from the neighboring Node that have " +
                "resulted in errors.",
            xref: { document: "core", section: "11.14.5.4.9" }
        }),

        Field({
            name: "MessageErrorRate", id: 0x9, type: "uint8", conformance: "M", constraint: "0 to 100",
            default: 0,
            details: "This field shall specify the percentage of received messages from the neighboring Node that have " +
                "resulted in errors.",
            xref: { document: "core", section: "11.14.5.4.10" }
        }),

        Field({
            name: "RxOnWhenIdle", id: 0xa, type: "bool", conformance: "M",
            details: "This field shall specify if the neighboring Node is capable of receiving frames while the Node is in " +
                "an idle state.",
            xref: { document: "core", section: "11.14.5.4.11" }
        }),

        Field({
            name: "FullThreadDevice", id: 0xb, type: "bool", conformance: "M",
            details: "This field shall specify if the neighboring Node is a full Thread device.",
            xref: { document: "core", section: "11.14.5.4.12" }
        }),

        Field({
            name: "FullNetworkData", id: 0xc, type: "bool", conformance: "M",
            details: "This field shall specify if the neighboring Node requires the full Network Data. If set to False, " +
                "the neighboring Node only requires the stable Network Data.",
            xref: { document: "core", section: "11.14.5.4.13" }
        }),

        Field({
            name: "IsChild", id: 0xd, type: "bool", conformance: "M",
            details: "This field shall specify if the neighboring Node is a direct child of the Node reporting the " +
                "NeighborTable attribute.",
            xref: { document: "core", section: "11.14.5.4.14" }
        })
    ),

    Datatype(
        { name: "RouteTableStruct", type: "struct", xref: { document: "core", section: "11.14.5.5" } },

        Field({
            name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M",
            details: "This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table " +
                "entry corresponds.",
            xref: { document: "core", section: "11.14.5.5.1" }
        }),

        Field({
            name: "Rloc16", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall specify the RLOC16 for the Node for which this route table entry corresponds.",
            xref: { document: "core", section: "11.14.5.5.2" }
        }),
        Field({
            name: "RouterId", id: 0x2, type: "uint8", conformance: "M",
            details: "This field shall specify the Router ID for the Node for which this route table entry corresponds.",
            xref: { document: "core", section: "11.14.5.5.3" }
        }),

        Field({
            name: "NextHop", id: 0x3, type: "uint8", conformance: "M",
            details: "This field shall specify the Router ID for the next hop in the route to the Node for which this " +
                "route table entry corresponds.",
            xref: { document: "core", section: "11.14.5.5.4" }
        }),

        Field({
            name: "PathCost", id: 0x4, type: "uint8", conformance: "M",
            details: "This Field shall specify the cost of the route to the Node for which this route table entry " +
                "corresponds.",
            xref: { document: "core", section: "11.14.5.5.5" }
        }),

        Field({
            name: "LqiIn", id: 0x5, type: "uint8", conformance: "M",
            details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                "indicators, scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.",
            xref: { document: "core", section: "11.14.5.5.6" }
        }),

        Field({
            name: "LqiOut", id: 0x6, type: "uint8", conformance: "M",
            details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                "indicators, scaled from 0 to 255, from the perspective of the Node specified within the NextHop " +
                "field.",
            xref: { document: "core", section: "11.14.5.5.7" }
        }),

        Field({
            name: "Age", id: 0x7, type: "uint8", conformance: "M",
            details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                "Node for which this route table entry corresponds.",
            xref: { document: "core", section: "11.14.5.5.8" }
        }),

        Field({
            name: "Allocated", id: 0x8, type: "bool", conformance: "M",
            details: "This field shall specify if the router ID as defined within the RouterId field has been allocated.",
            xref: { document: "core", section: "11.14.5.5.9" }
        }),

        Field({
            name: "LinkEstablished", id: 0x9, type: "bool", conformance: "M",
            details: "This field shall specify if a link has been established to the Node for which this route table entry " +
                "corresponds.",
            xref: { document: "core", section: "11.14.5.5.10" }
        })
    ),

    Datatype(
        { name: "SecurityPolicy", type: "struct", xref: { document: "core", section: "11.14.5.6" } },

        Field({
            name: "RotationTime", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall specify the interval of time, in hours, that Thread security keys are rotated. Null " +
                "when there is no dataset configured.",
            xref: { document: "core", section: "11.14.5.6.1" }
        }),

        Field({
            name: "Flags", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. Null when there " +
                "is no dataset configured.",
            xref: { document: "core", section: "11.14.5.6.2" }
        })
    ),

    Datatype(
        { name: "OperationalDatasetComponents", type: "struct", xref: { document: "core", section: "11.14.5.7" } },
        Field({
            name: "ActiveTimestampPresent", id: 0x0, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has an active timestamp present, else False.",
            xref: { document: "core", section: "11.14.5.7.1" }
        }),
        Field({
            name: "PendingTimestampPresent", id: 0x1, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has a pending timestamp is present, else False.",
            xref: { document: "core", section: "11.14.5.7.2" }
        }),
        Field({
            name: "MasterKeyPresent", id: 0x2, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has the Thread master key, else False.",
            xref: { document: "core", section: "11.14.5.7.3" }
        }),
        Field({
            name: "NetworkNamePresent", id: 0x3, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has the Thread network’s name, else False.",
            xref: { document: "core", section: "11.14.5.7.4" }
        }),
        Field({
            name: "ExtendedPanIdPresent", id: 0x4, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has an extended Pan ID, else False.",
            xref: { document: "core", section: "11.14.5.7.5" }
        }),
        Field({
            name: "MeshLocalPrefixPresent", id: 0x5, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has the mesh local prefix, else False.",
            xref: { document: "core", section: "11.14.5.7.6" }
        }),
        Field({
            name: "DelayPresent", id: 0x6, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has the Thread network delay set, else False.",
            xref: { document: "core", section: "11.14.5.7.7" }
        }),
        Field({
            name: "PanIdPresent", id: 0x7, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has a Pan ID, else False.",
            xref: { document: "core", section: "11.14.5.7.8" }
        }),

        Field({
            name: "ChannelPresent", id: 0x8, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has configured an operational channel for the Thread network, " +
                "else False.",
            xref: { document: "core", section: "11.14.5.7.9" }
        }),

        Field({
            name: "PskcPresent", id: 0x9, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has been configured with the Thread network Pskc, else False.",
            xref: { document: "core", section: "11.14.5.7.10" }
        }),

        Field({
            name: "SecurityPolicyPresent", id: 0xa, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has been configured with the Thread network security policies, " +
                "else False.",
            xref: { document: "core", section: "11.14.5.7.11" }
        }),

        Field({
            name: "ChannelMaskPresent", id: 0xb, type: "bool", conformance: "M",
            details: "This field shall be True if the Node has available a mask of available channels, else False.",
            xref: { document: "core", section: "11.14.5.7.12" }
        })
    )
);

MatterDefinition.children.push(ThreadNetworkDiagnostics);
