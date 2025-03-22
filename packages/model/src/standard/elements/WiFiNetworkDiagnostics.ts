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

export const WiFiNetworkDiagnostics = Cluster(
    {
        name: "WiFiNetworkDiagnostics", id: 0x36, classification: "node", pics: "DGWIFI", quality: "K",
        details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
            "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
            "Wi-Fi Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
            "potential Wi-Fi radio running on a Node.",
        xref: { document: "core", section: "11.15" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.15.4" } },
        Field({
            name: "PKTCNT", constraint: "0", description: "PacketCounts",
            details: "Node makes available the counts for the number of received and transmitted packets on the Wi-Fi " +
                "interface."
        }),
        Field({
            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
            details: "Node makes available the counts for the number of errors that have occurred during the reception and " +
                "transmission of packets on the Wi-Fi interface."
        })
    ),

    Attribute({
        name: "Bssid", id: 0x0, type: "octstr", access: "R V", conformance: "M", constraint: "6",
        default: null, quality: "X",
        details: "The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently " +
            "connected.",
        xref: { document: "core", section: "11.15.6.1" }
    }),

    Attribute({
        name: "SecurityType", id: 0x1, type: "SecurityTypeEnum", access: "R V", conformance: "M",
        default: null, quality: "X",
        details: "The SecurityType attribute shall indicate the current type of Wi-Fi security used.",
        xref: { document: "core", section: "11.15.6.2" }
    }),

    Attribute({
        name: "WiFiVersion", id: 0x2, type: "WiFiVersionEnum", access: "R V", conformance: "M",
        default: null, quality: "X",
        details: "The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per " +
            "the table below.",
        xref: { document: "core", section: "11.15.6.3" }
    }),

    Attribute({
        name: "ChannelNumber", id: 0x3, type: "uint16", access: "R V", conformance: "M", default: null,
        quality: "X",
        details: "The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently " +
            "operating on.",
        xref: { document: "core", section: "11.15.6.4" }
    }),

    Attribute({
        name: "Rssi", id: 0x4, type: "int8", access: "R V", conformance: "M", constraint: "-120 to 0",
        default: null, quality: "X C",
        details: "The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.",
        xref: { document: "core", section: "11.15.6.5" }
    }),

    Attribute({
        name: "BeaconLostCount", id: 0x5, type: "uint32", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "X C",
        details: "The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has " +
            "detected. If the Node does not have an ability to count beacons expected and not received, this " +
            "value may remain set to zero.",
        xref: { document: "core", section: "11.15.6.6" }
    }),

    Attribute({
        name: "BeaconRxCount", id: 0x6, type: "uint32", access: "R V", conformance: "PKTCNT", default: 0,
        quality: "X C",
        details: "The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total " +
            "number of expected beacons that could have been received during the interval since association " +
            "SHOULD match the sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to " +
            "report count of beacons received, this value may remain set to zero.",
        xref: { document: "core", section: "11.15.6.7" }
    }),

    Attribute({
        name: "PacketMulticastRxCount", id: 0x7, type: "uint32", access: "R V", conformance: "PKTCNT",
        default: 0, quality: "X C",
        details: "The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by the " +
            "Node.",
        xref: { document: "core", section: "11.15.6.8" }
    }),

    Attribute({
        name: "PacketMulticastTxCount", id: 0x8, type: "uint32", access: "R V", conformance: "PKTCNT",
        default: 0, quality: "X C",
        details: "The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by " +
            "the Node.",
        xref: { document: "core", section: "11.15.6.9" }
    }),

    Attribute({
        name: "PacketUnicastRxCount", id: 0x9, type: "uint32", access: "R V", conformance: "PKTCNT",
        default: 0, quality: "X C",
        details: "The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the " +
            "Node.",
        xref: { document: "core", section: "11.15.6.10" }
    }),

    Attribute({
        name: "PacketUnicastTxCount", id: 0xa, type: "uint32", access: "R V", conformance: "PKTCNT",
        default: 0, quality: "X C",
        details: "The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the " +
            "Node.",
        xref: { document: "core", section: "11.15.6.11" }
    }),

    Attribute({
        name: "CurrentMaxRate", id: 0xb, type: "uint64", access: "R V", conformance: "O", default: 0,
        quality: "X C",
        details: "The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in " +
            "bits-per-second.",
        xref: { document: "core", section: "11.15.6.12" }
    }),

    Attribute({
        name: "OverrunCount", id: 0xc, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
        quality: "X C",
        details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
            "due to lack of buffer memory to retain all packets on the network interface. The OverrunCount " +
            "attribute shall be reset to 0 upon a reboot of the Node.",
        xref: { document: "core", section: "11.15.6.13" }
    }),

    Event(
        {
            name: "Disconnection", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a " +
                "result of de-authenticated or dis-association and indicates the reason.",
            xref: { document: "core", section: "11.15.8.1" }
        },

        Field({
            name: "ReasonCode", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall contain the Reason Code field value for the Disassociation or Deauthentication " +
                "event that caused the disconnection and the value shall align with Table 9-49 \"Reason codes\" of IEEE " +
                "802.11-2020.",
            xref: { document: "core", section: "11.15.8.1.1" }
        })
    ),

    Event(
        {
            name: "AssociationFailure", id: 0x1, access: "V", conformance: "O", priority: "info",
            details: "The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a " +
                "Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all " +
                "internal retries of its supplicant.",
            xref: { document: "core", section: "11.15.8.2" }
        },

        Field({
            name: "AssociationFailureCause", id: 0x0, type: "AssociationFailureCauseEnum", conformance: "M",
            details: "The Status field shall be set to a value from the AssociationFailureCauseEnum.",
            xref: { document: "core", section: "11.15.8.2.1" }
        }),

        Field({
            name: "Status", id: 0x1, type: "uint16", conformance: "M",

            details: "The Status field shall be set to the Status Code value that was present in the last frame related to " +
                "association where Status Code was not equal to zero and which caused the failure of a last trial " +
                "attempt, if this last failure was due to one of the following Management frames:" +
                "\n" +
                "  • Association Response (Type 0, Subtype 1)" +
                "\n" +
                "  • Reassociation Response (Type 0, Subtype 3)" +
                "\n" +
                "  • Authentication (Type 0, Subtype 11)" +
                "\n" +
                "Table 9-50 \"Status codes\" of IEEE 802.11-2020 contains a description of all values possible.",

            xref: { document: "core", section: "11.15.8.2.2" }
        })
    ),

    Event(
        {
            name: "ConnectionStatus", id: 0x2, access: "V", conformance: "O", priority: "info",
            details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has " +
                "changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is " +
                "successfully associated to a Wi-Fi Access Point.",
            xref: { document: "core", section: "11.15.8.3" }
        },

        Field({ name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" })
    ),

    Command({
        name: "ResetCounts", id: 0x0, access: "O", conformance: "ERRCNT", direction: "request",
        response: "status",

        details: "Reception of this command shall reset the following attributes to 0:" +
            "\n" +
            "  • BeaconLostCount" +
            "\n" +
            "  • BeaconRxCount" +
            "\n" +
            "  • PacketMulticastRxCount" +
            "\n" +
            "  • PacketMulticastTxCount" +
            "\n" +
            "  • PacketUnicastRxCount" +
            "\n" +
            "  • PacketUnicastTxCount" +
            "\n" +
            "This command has no associated data.",

        xref: { document: "core", section: "11.15.7.1" }
    }),

    Datatype(
        { name: "SecurityTypeEnum", type: "enum8", xref: { document: "core", section: "11.15.5.1" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "Indicate the usage of an unspecified Wi-Fi security type"
        }),
        Field({ name: "None", id: 0x1, conformance: "M", description: "Indicate the usage of no Wi-Fi security" }),
        Field({ name: "Wep", id: 0x2, conformance: "M", description: "Indicate the usage of WEP Wi-Fi security" }),
        Field({ name: "Wpa", id: 0x3, conformance: "M", description: "Indicate the usage of WPA Wi-Fi security" }),
        Field({ name: "Wpa2", id: 0x4, conformance: "M", description: "Indicate the usage of WPA2 Wi-Fi security" }),
        Field({ name: "Wpa3", id: 0x5, conformance: "M", description: "Indicate the usage of WPA3 Wi-Fi security" })
    ),

    Datatype(
        { name: "WiFiVersionEnum", type: "enum8", xref: { document: "core", section: "11.15.5.2" } },
        Field({
            name: "A", id: 0x0, conformance: "M",
            description: "Indicate the network interface is currently using 802.11a against the wireless access point."
        }),
        Field({
            name: "B", id: 0x1, conformance: "M",
            description: "Indicate the network interface is currently using 802.11b against the wireless access point."
        }),
        Field({
            name: "G", id: 0x2, conformance: "M",
            description: "Indicate the network interface is currently using 802.11g against the wireless access point."
        }),
        Field({
            name: "N", id: 0x3, conformance: "M",
            description: "Indicate the network interface is currently using 802.11n against the wireless access point."
        }),
        Field({
            name: "Ac", id: 0x4, conformance: "M",
            description: "Indicate the network interface is currently using 802.11ac against the wireless access point."
        }),
        Field({
            name: "Ax", id: 0x5, conformance: "M",
            description: "Indicate the network interface is currently using 802.11ax against the wireless access point."
        }),
        Field({
            name: "Ah", id: 0x6, conformance: "M",
            description: "Indicate the network interface is currently using 802.11ah against the wireless access point."
        })
    ),

    Datatype(
        { name: "AssociationFailureCauseEnum", type: "enum8", xref: { document: "core", section: "11.15.5.3" } },
        Field({ name: "Unknown", id: 0x0, conformance: "M", description: "The reason for the failure is unknown." }),
        Field({ name: "AssociationFailed", id: 0x1, conformance: "M", description: "An error occurred during association." }),
        Field({
            name: "AuthenticationFailed", id: 0x2, conformance: "M",
            description: "An error occurred during authentication."
        }),
        Field({ name: "SsidNotFound", id: 0x3, conformance: "M", description: "The specified SSID could not be found." })
    ),

    Datatype(
        { name: "ConnectionStatusEnum", type: "enum8", xref: { document: "core", section: "11.15.5.4" } },
        Field({ name: "Connected", id: 0x0, conformance: "M", description: "Indicate the node is connected" }),
        Field({ name: "NotConnected", id: 0x1, conformance: "M", description: "Indicate the node is not connected" })
    )
);

MatterDefinition.children.push(WiFiNetworkDiagnostics);
