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

export const NetworkCommissioning = Cluster(
    {
        name: "NetworkCommissioning", id: 0x31, classification: "node", pics: "CNET",

        details: "Network commissioning is part of the overall Node commissioning. The main goal of Network " +
            "Commissioning Cluster is to associate a Node with or manage a Node’s one or more network interfaces. " +
            "These network interfaces can include the following types." +
            "\n" +
            "  • Wi-Fi (IEEE 802.11-2020)" +
            "\n" +
            "  • Ethernet (802.3)" +
            "\n" +
            "  • Thread (802.15.4)" +
            "\n" +
            "An instance of the Network Commissioning Cluster only applies to a single network interface instance " +
            "present. An interface, in this context, is a unique entity that can have an IPv6 address assigned to " +
            "it and ingress and egress IP packets.",

        xref: { document: "core", section: "11.9" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.9.4" } },
        Field({
            name: "WI", conformance: "O.a", constraint: "0", description: "WiFiNetworkInterface",
            details: "Wi-Fi related features"
        }),
        Field({
            name: "TH", conformance: "O.a", constraint: "1", description: "ThreadNetworkInterface",
            details: "Thread related features"
        }),
        Field({
            name: "ET", conformance: "O.a", constraint: "2", description: "EthernetNetworkInterface",
            details: "Ethernet related features"
        })
    ),

    Attribute({
        name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M", constraint: "min 1",
        quality: "F",
        details: "This shall indicate the maximum number of network configuration entries that can be added, based on " +
            "available device resources. The length of the Networks attribute shall be less than or equal to this " +
            "value.",
        xref: { document: "core", section: "11.9.6.1" }
    }),

    Attribute(
        {
            name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
            constraint: "max maxNetworks", default: [],

            details: "Indicates the network configurations that are usable on the network interface represented by this " +
                "cluster server instance." +
                "\n" +
                "The order of configurations in the list reflects precedence. That is, any time the Node attempts to " +
                "connect to the network it shall attempt to do so using the configurations in Networks Attribute in " +
                "the order as they appear in the list." +
                "\n" +
                "The order of list items shall only be modified by the AddOrUpdateThreadNetwork, " +
                "AddOrUpdateWiFiNetwork and ReorderNetwork commands. In other words, the list shall be stable over " +
                "time, unless mutated externally." +
                "\n" +
                "Ethernet networks shall be automatically populated by the cluster server. Ethernet Network " +
                "Commissioning Cluster instances shall always have exactly one NetworkInfoStruct instance in their " +
                "Networks attribute. There shall be no way to add, update or remove Ethernet network configurations " +
                "to those Cluster instances.",

            xref: { document: "core", section: "11.9.6.2" }
        },

        Field({ name: "entry", type: "NetworkInfoStruct" })
    ),

    Attribute({
        name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", access: "R V", conformance: "WI | TH",
        constraint: "desc", quality: "F",
        details: "Indicates the maximum duration taken, in seconds, by the network interface on this cluster server " +
            "instance to provide scan results." +
            "\n" +
            "See ScanNetworks for usage.",
        xref: { document: "core", section: "11.9.6.3" }
    }),

    Attribute({
        name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", access: "R V", conformance: "WI | TH",
        constraint: "desc", quality: "F",

        details: "Indicates the maximum duration taken, in seconds, by the network interface on this cluster server " +
            "instance to report a successful or failed network connection indication. This maximum time shall " +
            "account for all operations needed until a successful network connection is" +
            "\n" +
            "deemed to have occurred, including, for example, obtaining IP addresses, or the execution of " +
            "necessary internal retries.",

        xref: { document: "core", section: "11.9.6.4" }
    }),

    Attribute({
        name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA", conformance: "M", default: true,
        quality: "N",

        details: "Indicates whether the associated network interface is enabled or not. By default all network " +
            "interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true)." +
            "\n" +
            "It is undefined what happens if InterfaceEnabled is written to false on the same interface as that " +
            "which is used to write the value. In that case, it is possible that the Administrator would have to " +
            "await expiry of the fail-safe, and associated recovery of network configuration to prior safe " +
            "values, before being able to communicate with the node again (see ArmFailSafe)." +
            "\n" +
            "It may be possible to disable Ethernet interfaces but it is implementation-defined. If not " +
            "supported, a write to this attribute with a value of false shall fail with a status of " +
            "INVALID_ACTION. When disabled, an Ethernet interface would longer employ media detection. That is, a " +
            "simple unplug and replug of the cable shall NOT re-enable the interface." +
            "\n" +
            "On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server " +
            "cluster instances with InterfaceEnabled set to true.",

        xref: { document: "core", section: "11.9.6.5" }
    }),

    Attribute({
        name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum", access: "R A",
        conformance: "M", default: null, quality: "X",

        details: "Indicates the status of the last attempt either scan or connect to an operational network, using " +
            "this interface, whether by invocation of the ConnectNetwork command or by autonomous connection " +
            "after loss of connectivity or during initial establishment. If no such attempt was made, or no " +
            "network configurations exist in the Networks attribute, then this attribute shall be set to null." +
            "\n" +
            "This attribute is present to assist with error recovery during Network commissioning and to assist " +
            "in non-concurrent networking commissioning flows.",

        xref: { document: "core", section: "11.9.6.6" }
    }),

    Attribute({
        name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
        constraint: "1 to 32", default: null, quality: "X",

        details: "Indicates the NetworkID used in the last attempt to connect to an operational network, using this " +
            "interface, whether by invocation of the ConnectNetwork command or by autonomous connection after " +
            "loss of connectivity or during initial establishment. If no such attempt was made, or no network " +
            "configurations exist in the Networks attribute, then this attribute shall be set to null." +
            "\n" +
            "If a network configuration is removed from the Networks attribute using the RemoveNetwork command " +
            "after a connection attempt, this field may indicate a NetworkID that is no longer configured on the " +
            "Node." +
            "\n" +
            "This attribute is present to assist with error recovery during Network commissioning and to assist " +
            "in non-concurrent networking commissioning flows.",

        xref: { document: "core", section: "11.9.6.7" }
    }),

    Attribute({
        name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A", conformance: "M",
        default: null, quality: "X",

        details: "Indicates the ErrorValue used in the last failed attempt to connect to an operational network, using " +
            "this interface, whether by invocation of the ConnectNetwork command or by autonomous connection " +
            "after loss of connectivity or during initial establishment. If no such attempt was made, or no " +
            "network configurations exist in the Networks attribute, then this attribute shall be set to null." +
            "\n" +
            "If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus " +
            "attribute, then this field shall be set to null." +
            "\n" +
            "This attribute is present to assist with error recovery during Network commissioning and to assist " +
            "in non-concurrent networking commissioning flows.",

        xref: { document: "core", section: "11.9.6.8" }
    }),

    Attribute(
        {
            name: "SupportedWiFiBands", id: 0x8, type: "list", access: "R V", conformance: "WI",
            constraint: "min 1", quality: "F",
            details: "Indicates all the frequency bands supported by the Wi-Fi interface configured by the cluster " +
                "instance.",
            xref: { document: "core", section: "11.9.6.9" }
        },

        Field({ name: "entry", type: "WiFiBandEnum" })
    ),

    Attribute({
        name: "SupportedThreadFeatures", id: 0x9, type: "ThreadCapabilitiesBitmap", access: "R V",
        conformance: "TH", quality: "F",

        details: "Indicates all of the Thread features supported by the Thread interface configured by the cluster " +
            "instance." +
            "\n" +
            "This attribute is primarily used to determine the most important general capabilities of the Thread " +
            "interface associated with the cluster instance, as opposed to the current runtime dynamic " +
            "configuration. Note that most run-time details of the actual Thread interface are found in the " +
            "Thread Network Diagnostics cluster, if supported.",

        xref: { document: "core", section: "11.9.6.10" }
    }),

    Attribute({
        name: "ThreadVersion", id: 0xa, type: "uint16", access: "R V", conformance: "TH", quality: "F",
        details: "Indicates the Thread version supported by the Thread interface configured by the cluster instance." +
            "\n" +
            "The format shall match the value mapping found in the \"Version TLV\" section of Thread specification. " +
            "For example, Thread 1.3.0 would have ThreadVersion set to 4.",
        xref: { document: "core", section: "11.9.6.11" }
    }),

    Command(
        {
            name: "ScanNetworks", id: 0x0, access: "A", conformance: "WI | TH", direction: "request",
            response: "ScanNetworksResponse",

            details: "This command shall scan on the Cluster instance’s associated network interface for either of:" +
                "\n" +
                "  • All available networks (non-directed scanning)" +
                "\n" +
                "  • Specific networks (directed scanning)" +
                "\n" +
                "Scanning for available networks detects all networks of the type corresponding to the cluster server " +
                "instance’s associated network interface that are possible to join, such as all visible Wi-Fi access " +
                "points for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server instances, " +
                "within bounds of the maximum response size." +
                "\n" +
                "Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. " +
                "Wi-Fi SSID) is provided in the command arguments. Directed scanning shall restrict the result set to " +
                "the specified network only." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "The client shall NOT expect the server to be done scanning and have responded with " +
                "ScanNetworksResponse before ScanMaxTimeSeconds seconds have elapsed. Enough transport time " +
                "affordances for retries SHOULD be expected before a client determines the operation to have " +
                "timed-out." +
                "\n" +
                "This command shall fail with a status code of BUSY if the server determines that it will fail to " +
                "reliably send a response due to changes of networking interface configuration at runtime for the " +
                "interface over which the command was invoked, or if it is currently unable to proceed with such an " +
                "operation." +
                "\n" +
                "For Wi-Fi-supporting servers (WI feature) the server shall always honor directed scans, and attempt " +
                "to provide all matching BSSID which are reachable on the bands which would otherwise be attempted if " +
                "a ConnectNetwork having the specified SSID were to take place. This command is useful for clients to " +
                "determine reachability capabilities as seen by the server’s own radios." +
                "\n" +
                "For Wi-Fi-supporting servers the server shall always scan on all bands supported by the interface " +
                "associated with the cluster instance on which the command was invoked." +
                "\n" +
                "If the command was invoked over the same link whose configuration is managed by a given server " +
                "cluster instance, there may be an impact on other communication from the invoking client, as well as " +
                "other clients, while the network interface is processing the scan. Clients SHOULD NOT use this " +
                "command unless actively in the process of re-configuring network connectivity.",

            xref: { document: "core", section: "11.9.7.1" }
        },

        Field({
            name: "Ssid", id: 0x0, type: "octstr", conformance: "[WI]", constraint: "1 to 32", default: null,
            quality: "X",
            details: "This field, if present, shall contain the SSID for a directed scan of that particular Wi-Fi SSID. " +
                "Otherwise, if the field is absent, or if it is null, this shall indicate scanning of all BSSID in " +
                "range. This field shall be ignored for ScanNetworks invocations on non-Wi-Fi server instances.",
            xref: { document: "core", section: "11.9.7.1.1" }
        }),

        Field({
            name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
            details: "The Breadcrumb field, if present, shall be used to atomically set the Breadcrumb attribute in the " +
                "General Commissioning cluster on success of the associated command. If the command fails, the " +
                "Breadcrumb attribute in the General Commissioning cluster shall be left unchanged.",
            xref: { document: "core", section: "11.9.7.1.2" }
        })
    ),

    Command(
        {
            name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH", direction: "response",

            details: "This command shall contain the status of the last ScanNetworks command, and the associated scan " +
                "results if the operation was successful." +
                "\n" +
                "Results are valid only if NetworkingStatus is Success." +
                "\n" +
                "Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute " +
                "value to the NetworkingStatus matching the response.",

            xref: { document: "core", section: "11.9.7.2" }
        },

        Field({
            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M",
            constraint: "desc",

            details: "The NetworkingStatus field shall indicate the status of the last scan operation, taking one of these " +
                "values:" +
                "\n" +
                "  • Success: Scanning succeeded." +
                "\n" +
                "  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the " +
                "    scan. This error cannot occur if no network identifier was provided, such as when scanning for " +
                "    all available networks." +
                "\n" +
                "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                "\n" +
                "  • RegulatoryError: Could not scan on any bands due to lack of regulatory configuration." +
                "\n" +
                "  • UnknownError: An internal error occurred during scanning.",

            xref: { document: "core", section: "11.9.7.2.1" }
        }),

        Field({
            name: "DebugText", id: 0x1, type: "string", conformance: "O", constraint: "max 512",
            details: "This field, if present and non-empty, may contain error information which may be communicated to the " +
                "user in case the NetworkingStatus was not Success. Its purpose is to help developers in " +
                "troubleshooting errors and may go into logs or crash reports.",
            xref: { document: "core", section: "11.9.7.2.2" }
        }),

        Field(
            {
                name: "WiFiScanResults", id: 0x2, type: "list", conformance: "WI", constraint: "desc",

                details: "If NetworkingStatus was Success, this field shall contain the Wi-Fi network scan results. The list " +
                    "may be empty if none were found in range on the bands supported by the interface, or if directed " +
                    "scanning had been used and the desired SSID was not found in range." +
                    "\n" +
                    "The maximum number of results present in the result list supported may depend on memory and may " +
                    "contain a subset of possibilities, to avoid memory exhaustion on the cluster server and avoid " +
                    "crossing the maximum command response size supported (see Section 4.4.4, “Message Size " +
                    "Requirements”)." +
                    "\n" +
                    "The order in which results are reported is implementation-specific. Results SHOULD be reported in " +
                    "decreasing RSSI order, even if RSSI is not reported in the response, to maximize the likelihood that " +
                    "most likely to be reachable elements are included within the size limits of the response.",

                xref: { document: "core", section: "11.9.7.2.3" }
            },

            Field({ name: "entry", type: "WiFiInterfaceScanResultStruct" })
        ),

        Field(
            {
                name: "ThreadScanResults", id: 0x3, type: "list", conformance: "TH", constraint: "desc",

                details: "If NetworkingStatus was Success, this field shall contain the Thread network scan results. The list " +
                    "may be empty if none were found in range on the bands supported by the interface." +
                    "\n" +
                    "The maximum number of results present in the result list supported may depend on memory and may " +
                    "contain a subset of possibilities, to avoid memory exhaustion on the cluster server and avoid " +
                    "crossing the maximum command response size supported (see Section 4.4.4, “Message Size " +
                    "Requirements”)." +
                    "\n" +
                    "The order in which results are reported is implementation-specific. Results SHOULD be reported in " +
                    "decreasing LQI order, to maximize the likelihood that most likely to be reachable elements are " +
                    "included within the size limits of the response.",

                xref: { document: "core", section: "11.9.7.2.4" }
            },

            Field({ name: "entry", type: "ThreadInterfaceScanResultStruct" })
        )
    ),

    Command(
        {
            name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "A", conformance: "WI", direction: "request",
            response: "NetworkConfigResponse",

            details: "This command shall be used to add or modify Wi-Fi network configurations." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "The Credentials associated with the network are not readable after execution of this command, as " +
                "they do not appear in the Networks attribute, for security reasons." +
                "\n" +
                "If this command contains a ClientIdentifier, and the Networks list does not contain an entry with a " +
                "matching ClientIdentifier, then this command shall fail with a status of NOT_FOUND." +
                "\n" +
                "See Section 11.9.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for " +
                "behavior of addition/update.",

            xref: { document: "core", section: "11.9.7.3" }
        },

        Field({
            name: "Ssid", id: 0x0, type: "octstr", conformance: "M", constraint: "max 32",
            details: "This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not " +
                "supported by this cluster.",
            xref: { document: "core", section: "11.9.7.3.1" }
        }),

        Field({
            name: "Credentials", id: 0x1, type: "octstr", conformance: "M", constraint: "max 64",

            details: "Credentials is the passphrase or PSK for the network (if any is needed)." +
                "\n" +
                "Security type, cipher and credential format (passphrase or PSK) shall be contextually auto- selected " +
                "during execution of the ConnectNetwork Command and during subsequent operational state network " +
                "connections, based on the most secure Wi-Fi security type available within beacons and probe " +
                "responses for the set of all discovered BSSIDs for the configured SSID. The type of PSK or " +
                "passphrase used shall be inferred based on the length and contents of the Credentials field " +
                "provided, matching the security type chosen." +
                "\n" +
                "Valid Credentials length are:" +
                "\n" +
                "  • 0 bytes: Unsecured (open) connection" +
                "\n" +
                "  • 5 bytes: WEP-64 passphrase" +
                "\n" +
                "  • 10 hexadecimal ASCII characters: WEP-64 40-bit hex raw PSK" +
                "\n" +
                "  • 13 bytes: WEP-128 passphrase" +
                "\n" +
                "  • 26 hexadecimal ASCII characters: WEP-128 104-bit hex raw PSK" +
                "\n" +
                "  • 8..63 bytes: WPA/WPA2/WPA3 passphrase" +
                "\n" +
                "  • 64 bytes: WPA/WPA2/WPA3 raw hex PSK" +
                "\n" +
                "These lengths shall be contextually interpreted based on the security type of the BSSID where " +
                "connection will occur." +
                "\n" +
                "When the length of Credentials and available set of BSSID admits more than one option, such as the " +
                "presence of both WPA2 and WPA security type within the result set, WPA2 shall be considered more " +
                "secure." +
                "\n" +
                "Note that it may occur that a station cannot connect to a particular access point with higher " +
                "security and selects a lower security connectivity type if the link quality is deemed to be too low " +
                "to achieve successful operation, or if all retry attempts fail.",

            xref: { document: "core", section: "11.9.7.3.2" }
        }),

        Field({
            name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",
            details: "See Breadcrumb for usage.",
            xref: { document: "core", section: "11.9.7.3.3" }
        })
    ),

    Command(
        {
            name: "AddOrUpdateThreadNetwork", id: 0x3, access: "A", conformance: "TH", direction: "request",
            response: "NetworkConfigResponse",

            details: "This command shall be used to add or modify Thread network configurations." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "See Section 11.9.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for " +
                "behavior of addition/update." +
                "\n" +
                "The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be " +
                "added or updated." +
                "\n" +
                "If the Networks attribute does not contain an entry with the same NetworkID as the one provided in " +
                "the OperationalDataset, the operation shall be considered an addition, otherwise, it shall be " +
                "considered an update.",

            xref: { document: "core", section: "11.9.7.4" }
        },

        Field({
            name: "OperationalDataset", id: 0x0, type: "octstr", conformance: "M", constraint: "max 254",
            details: "The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN ID, " +
                "and Extended PAN ID." +
                "\n" +
                "The encoding for the OperationalDataset field is defined in the Thread specification. The client " +
                "shall pass the OperationalDataset as an opaque octet string.",
            xref: { document: "core", section: "11.9.7.4.1" }
        }),

        Field({
            name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
            details: "See Breadcrumb for usage.",
            xref: { document: "core", section: "11.9.7.4.2" }
        })
    ),

    Command(
        {
            name: "RemoveNetwork", id: 0x4, access: "A", conformance: "WI | TH", direction: "request",
            response: "NetworkConfigResponse",

            details: "This command shall remove the network configuration from the Cluster if there was already a network " +
                "configuration with the same NetworkID. The relative order of the entries in the Networks" +
                "\n" +
                "attribute shall remain unchanged, except for the removal of the requested network configuration." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "If the Networks attribute does not contain a matching entry, the command shall immediately respond " +
                "with NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound." +
                "\n" +
                "On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based " +
                "index of the entry in the Networks attribute that was just removed, and a NetworkingStatus status " +
                "field set to Success.",

            xref: { document: "core", section: "11.9.7.6" }
        },

        Field({
            name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32",
            details: "This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID for " +
                "Thread.",
            xref: { document: "core", section: "11.9.7.6.1" }
        }),

        Field({
            name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
            details: "See Breadcrumb for usage.",
            xref: { document: "core", section: "11.9.7.6.2" }
        })
    ),

    Command(
        {
            name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH", direction: "response",

            details: "This response command relates status information for some commands which require it as their " +
                "response command. See each individual cluster server command for the situations that may cause a " +
                "NetworkingStatus different than Success." +
                "\n" +
                "Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute " +
                "value to the NetworkingStatus matching the response." +
                "\n" +
                "Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to " +
                "the NetworkID that was used in the command for which an invocation caused the response to be " +
                "generated.",

            xref: { document: "core", section: "11.9.7.7" }
        },

        Field({
            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M",
            constraint: "desc",

            details: "The NetworkingStatus field shall indicate the status of the last operation attempting to modify the " +
                "Networks attribute configuration, taking one of these values:" +
                "\n" +
                "  • Success: Operation succeeded." +
                "\n" +
                "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                "\n" +
                "  • BoundsExceeded: Adding this network configuration would exceed the limit defined by MaxNetworks." +
                "\n" +
                "  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the " +
                "    added network configurations in Networks attribute." +
                "\n" +
                "  • UnknownError: An internal error occurred during the operation.",

            xref: { document: "core", section: "11.9.7.7.1" }
        }),

        Field({
            name: "DebugText", id: 0x1, type: "string", conformance: "O", constraint: "max 512",
            details: "See DebugText for usage.",
            xref: { document: "core", section: "11.9.7.7.2" }
        }),

        Field({
            name: "NetworkIndex", id: 0x2, type: "uint8", conformance: "O", constraint: "max maxNetworks - 1",
            details: "When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based " +
                "index of the entry in the Networks attribute that was last added, updated or removed successfully by " +
                "the associated request command.",
            xref: { document: "core", section: "11.9.7.7.3" }
        })
    ),

    Command(
        {
            name: "ConnectNetwork", id: 0x6, access: "A", conformance: "WI | TH", direction: "request",
            response: "ConnectNetworkResponse",

            details: "This command shall attempt to connect to a network whose configuration was previously added by " +
                "either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its " +
                "NetworkID." +
                "\n" +
                "This command shall fail with a BUSY status code returned to the initiator if the server is currently " +
                "unable to proceed with such an operation, such as if it is currently attempting to connect in the " +
                "background, or is already proceeding with a prior ConnectNetwork." +
                "\n" +
                "If this command is received without an armed fail-safe context (see ArmFailSafe), then this command " +
                "shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator." +
                "\n" +
                "Before connecting to the new network, the Node shall disconnect the operational network connections " +
                "managed by any other Network Commissioning cluster instances (whether under the Root Node or a " +
                "Secondary Network Interface), where those connections are not represented by an entry in the " +
                "Networks attribute of the corresponding cluster instance. This ensures that an Administrator or " +
                "Commissioner can reliably reconfigure the operational network connection of a device that has one or " +
                "more Secondary Network interfaces, for example by removing the active network configuration from one " +
                "cluster instance, followed by adding a new configuration and calling ConnectNetwork on a different " +
                "cluster instance." +
                "\n" +
                "Success or failure of this command shall be communicated by the ConnectNetworkResponse command, " +
                "unless some data model validations caused a FAILURE status to be sent prior to finishing execution " +
                "of the command. The ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus " +
                "field on successful connection. On failure to connect, the ConnectNetworkResponse shall contain an " +
                "appropriate NetworkingStatus, DebugText and ErrorValue indicating the reason for failure." +
                "\n" +
                "The amount of time needed to determine successful or failing connectivity on the cluster server’s " +
                "associated interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider " +
                "the connection to have timed-out until at least that duration has taken place. For non-concurrent " +
                "commissioning situations, the client SHOULD allow additional margin of time to account for its delay " +
                "in executing operational discovery of the Node once it is connected to the new network." +
                "\n" +
                "On successful connection, the entry associated with the given Network configuration in the Networks " +
                "attribute shall indicate its Connected field set to true, and all other entries, if any exist, shall " +
                "indicate their Connected field set to false." +
                "\n" +
                "On failure to connect, the entry associated with the given Network configuration in the Networks " +
                "attribute shall indicate its Connected field set to false." +
                "\n" +
                "The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks " +
                "attribute." +
                "\n" +
                "Even after successfully connecting to a network, the configuration shall revert to the prior state " +
                "of configuration if the CommissioningComplete command (see CommissioningComplete) is not " +
                "successfully invoked before expiry of the Fail-Safe timer." +
                "\n" +
                "When non-concurrent commissioning is being used by a Commissioner or Administrator, the Con" +
                "\n" +
                "nectNetworkResponse shall be sent with the NetworkingStatus field set to Success prior to closing " +
                "the commissioning channel, even if not yet connected to the operational network, unless the device " +
                "would be incapable of joining that network, in which case the usual failure path described in the " +
                "prior paragraphs shall be followed. Once the commissioning channel is closed, the operational " +
                "channel will be started. It is possible that the only method to determine success of the operation " +
                "is operational discovery of the Node on the new operational network. Therefore, before invoking the " +
                "ConnectNetwork command, the client SHOULD re-invoke the Arm Fail-Safe command with a duration that " +
                "meets the following:" +
                "\n" +
                "  1. Sufficient time to meet the minimum required time (see ConnectMaxTimeSeconds) that may be taken " +
                "     by the server to connect to the desired network." +
                "\n" +
                "  2. Sufficient time to account for possible message-layer retries when a response is requested." +
                "\n" +
                "  3. Sufficient time to allow operational discovery on the new network by a Commissioner or " +
                "     Administrator." +
                "\n" +
                "  4. Sufficient time to establish a CASE session after operational discovery" +
                "\n" +
                "  5. Not so long that, in error situations, the delay to reverting back to being discoverable for " +
                "     commissioning with a previous configuration would cause significant user-perceived delay." +
                "\n" +
                "Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or " +
                "OpenBasicCommissioningWindow command may impact the total time available to proceed with error " +
                "recovery after a connection failure." +
                "\n" +
                "The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client " +
                "in determining the reason for a failure after reconnecting over a Commissioning channel, especially " +
                "in non-concurrent commissioning situations.",

            xref: { document: "core", section: "11.9.7.8" }
        },

        Field({
            name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32",
            details: "This field shall contain the NetworkID for the entry used to configure the connection: the SSID for " +
                "Wi-Fi and XPAN ID for Thread.",
            xref: { document: "core", section: "11.9.7.8.1" }
        }),

        Field({
            name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
            details: "See Breadcrumb for usage.",
            xref: { document: "core", section: "11.9.7.8.2" }
        })
    ),

    Command(
        {
            name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH", direction: "response",

            details: "Before generating a ConnectNetworkResponse, the server shall:" +
                "\n" +
                "  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response." +
                "\n" +
                "  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork " +
                "    command which caused the response to be generated." +
                "\n" +
                "  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including " +
                "    setting it to null if the ErrorValue is not applicable.",

            xref: { document: "core", section: "11.9.7.9" }
        },

        Field({
            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M",

            details: "The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of " +
                "these values:" +
                "\n" +
                "  • Success: Connection succeeded." +
                "\n" +
                "  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the " +
                "    attempt to join the network." +
                "\n" +
                "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                "\n" +
                "  • NetworkIdNotFound: The network identifier was not found among the added network configurations " +
                "    in Networks attribute." +
                "\n" +
                "  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration." +
                "\n" +
                "  • UnknownError: An internal error occurred during the operation." +
                "\n" +
                "  • Association errors (see also description of errors in NetworkCommissioningStatusEnum): " +
                "    AuthFailure, UnsupportedSecurity, OtherConnectionFailure, IPV6Failed, IPBindFailed",

            xref: { document: "core", section: "11.9.7.9.1" }
        }),

        Field({
            name: "DebugText", id: 0x1, type: "string", conformance: "O",
            details: "See DebugText for usage.",
            xref: { document: "core", section: "11.9.7.9.2" }
        }),

        Field({
            name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X",

            details: "  • ErrorValue interpretation for Wi-Fi association errors:" +
                "\n" +
                "    ◦ On any association failure during enabling of a network, the ErrorValue field shall be set to " +
                "      the Status Code value that was present in the last frame related to association where Status " +
                "      Code was not equal to zero and which caused the failure of a final retry attempt, if this " +
                "      final failure was due to one of the following Management frames:" +
                "\n" +
                "      ▪ Association Response (Type 0, Subtype 1)" +
                "\n" +
                "      ▪ Reassociation Response (Type 0, Subtype 3)" +
                "\n" +
                "      ▪ Authentication (Type 0, Subtype 11)" +
                "\n" +
                "    ◦ Table 9-50 \"Status Codes\" in IEEE 802.11-2020 contains a description of all values possible, " +
                "      which can unambiguously be used to determine the cause, such as an invalid security type, " +
                "      unsupported rate, etc." +
                "\n" +
                "  • Otherwise, the ErrorValue field shall contain an implementation-dependent value which may be " +
                "    used by a reader of the structure to record, report or diagnose the failure.",

            xref: { document: "core", section: "11.9.7.9.3" }
        })
    ),

    Command(
        {
            name: "ReorderNetwork", id: 0x8, access: "A", conformance: "WI | TH", direction: "request",
            response: "NetworkConfigResponse",
            details: "This command shall set the specific order of the network configuration selected by its NetworkID in " +
                "the Networks attribute to match the position given by NetworkIndex.",
            xref: { document: "core", section: "11.9.7.10" }
        },

        Field({
            name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32",
            details: "This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for " +
                "Thread.",
            xref: { document: "core", section: "11.9.7.10.1" }
        }),

        Field({
            name: "NetworkIndex", id: 0x1, type: "uint8", conformance: "M", constraint: "desc",
            details: "This field shall contain the 0-based index of the new desired position of the entry in the Networks " +
                "attribute.",
            xref: { document: "core", section: "11.9.7.10.2" }
        }),

        Field(
            {
                name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",

                details: "See Breadcrumb for usage." +
                    "\n" +
                    "Effect when received" +
                    "\n" +
                    "If the Networks attribute does not contain a matching entry, the command shall immediately respond " +
                    "with NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound." +
                    "\n" +
                    "If the NetworkIndex field has a value larger or equal to the current number of entries in the " +
                    "Networks attribute, the command shall immediately respond with NetworkConfigResponse having " +
                    "NetworkingStatus status field set to OutOfRange." +
                    "\n" +
                    "On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based " +
                    "index of the entry in the Networks attribute that was just updated, matching the incoming " +
                    "NetworkIndex, and a NetworkingStatus status field set to Success." +
                    "\n" +
                    "The entry selected shall be inserted at the new position in the list. All other entries, if any " +
                    "exist, shall be moved to allow the insertion, in a way that they all retain their existing relative " +
                    "order between each other, with the exception of the newly re-ordered entry." +
                    "\n" +
                    "Re-ordering to the same NetworkIndex as the current location shall be considered as a success and " +
                    "yield no visible changes of the Networks attribute." +
                    "\n" +
                    "Examples of re-ordering" +
                    "\n" +
                    "To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi " +
                    "device:" +
                    "\n" +
                    "On receiving ReorderNetwork with:" +
                    "\n" +
                    "  • NetworkID = Home-Guest" +
                    "\n" +
                    "  • NetworkIndex = 0" +
                    "\n" +
                    "The outcome, after applying to the initial state would be:" +
                    "\n" +
                    "In the above outcome, FancyCat and BlueDolphin moved \"down\" and Home-Guest became the highest " +
                    "priority network in the list." +
                    "\n" +
                    "On receiving ReorderNetwork with:" +
                    "\n" +
                    "  • NetworkID = FancyCat" +
                    "\n" +
                    "  • NetworkIndex = 3" +
                    "\n" +
                    "The outcome, after applying to the initial state would be:" +
                    "\n" +
                    "In the above outcome, BlueDolphin, Home-Guest and WillowTree moved \"up\" and FancyCat became the " +
                    "lowest priority network in the list.",

                xref: { document: "core", section: "11.9.7.10.3" }
            }
        )
    ),

    Datatype(
        {
            name: "WiFiSecurityBitmap", type: "map8",
            details: "WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the " +
                "WiFiInterfaceScanResultStruct.",
            xref: { document: "core", section: "11.9.5.1" }
        },

        Field({ name: "Unencrypted", constraint: "0", description: "Supports unencrypted Wi-Fi" }),
        Field({ name: "Wep", constraint: "1", description: "Supports Wi-Fi using WEP security" }),
        Field({ name: "WpaPersonal", constraint: "2", description: "Supports Wi-Fi using WPA-Personal security" }),
        Field({ name: "Wpa2Personal", constraint: "3", description: "Supports Wi-Fi using WPA2-Personal security" }),
        Field({ name: "Wpa3Personal", constraint: "4", description: "Supports Wi-Fi using WPA3-Personal security" })
    ),

    Datatype(
        {
            name: "ThreadCapabilitiesBitmap", type: "map16",

            details: "The ThreadCapabilitiesBitmap encodes the supported Thread features and capabilities of a Thread- " +
                "enabled network interface." +
                "\n" +
                "NOTE" +
                "\n" +
                "The valid combinations of capabilities are restricted and dependent on Thread version.",

            xref: { document: "core", section: "11.9.5.2" }
        },

        Field({
            name: "IsBorderRouterCapable", constraint: "0",
            description: "Thread Border Router functionality is present"
        }),
        Field({
            name: "IsRouterCapable", constraint: "1",
            description: "Router mode is supported (interface could be in router or REED mode)"
        }),
        Field({ name: "IsSleepyEndDeviceCapable", constraint: "2", description: "Sleepy end-device mode is supported" }),
        Field({
            name: "IsFullThreadDevice", constraint: "3",
            description: "Device is a full Thread device (opposite of Minimal Thread Device)"
        }),
        Field({
            name: "IsSynchronizedSleepyEndDeviceCapable", constraint: "4",
            description: "Synchronized sleepy end-device mode is supported"
        })
    ),

    Datatype(
        {
            name: "WiFiBandEnum", type: "enum8",
            details: "WiFiBandEnum encodes a supported Wi-Fi frequency band present in the WiFiBand field of the " +
                "WiFiInterfaceScanResultStruct.",
            xref: { document: "core", section: "11.9.5.3" }
        },

        Field({ name: "2G4", id: 0x0, conformance: "O.b+", description: "2.4GHz - 2.401GHz to2.495GHz(802.11b/g/n/ax)" }),
        Field({ name: "3G65", id: 0x1, conformance: "O.b+", description: "3.65GHz - 3.655GHz to3.695GHz (802.11y)" }),
        Field({ name: "5G", id: 0x2, conformance: "O.b+", description: "5GHz - 5.150GHz to5.895GHz(802.11a/n/ac/ax)" }),
        Field({ name: "6G", id: 0x3, conformance: "O.b+", description: "6GHz - 5.925GHz to7.125GHz (802.11ax / Wi-Fi 6E)" }),
        Field({ name: "60G", id: 0x4, conformance: "O.b+", description: "60GHz - 57.24GHz to70.20GHz (802.11ad/ay)" }),
        Field({ name: "1G", id: 0x5, conformance: "O.b+", description: "Sub-1GHz - 755MHz to 931MHz (802.11ah)" })
    ),

    Datatype(
        { name: "NetworkCommissioningStatusEnum", type: "enum8", xref: { document: "core", section: "11.9.5.4" } },
        Field({ name: "Success", id: 0x0, conformance: "M", description: "OK, no error" }),
        Field({ name: "OutOfRange", id: 0x1, conformance: "M", description: "Value Outside Range" }),
        Field({ name: "BoundsExceeded", id: 0x2, conformance: "M", description: "A collection would exceed its size limit" }),
        Field({
            name: "NetworkIdNotFound", id: 0x3, conformance: "M",
            description: "The NetworkID is not among the collection of added networks"
        }),
        Field({
            name: "DuplicateNetworkId", id: 0x4, conformance: "M",
            description: "The NetworkID is already among the collection of added networks"
        }),
        Field({ name: "NetworkNotFound", id: 0x5, conformance: "M", description: "Cannot find AP: SSID Not found" }),
        Field({
            name: "RegulatoryError", id: 0x6, conformance: "M",
            description: "Cannot find AP: Mismatch on band/channels/regulatory domain/ 2.4GHz vs 5GHz"
        }),
        Field({
            name: "AuthFailure", id: 0x7, conformance: "M",
            description: "Cannot associate due to authentication failure"
        }),
        Field({
            name: "UnsupportedSecurity", id: 0x8, conformance: "M",
            description: "Cannot associate due to unsupported security mode"
        }),
        Field({ name: "OtherConnectionFailure", id: 0x9, conformance: "M", description: "Other association failure" }),
        Field({ name: "Ipv6Failed", id: 0xa, conformance: "M", description: "Failure to generate an IPv6 address" }),
        Field({ name: "IpBindFailed", id: 0xb, conformance: "M", description: "Failure to bind Wi-Fi <-> IP interfaces" }),
        Field({ name: "UnknownError", id: 0xc, conformance: "M", description: "Unknown error" })
    ),

    Datatype(
        {
            name: "NetworkInfoStruct", type: "struct",
            details: "NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks " +
                "attribute.",
            xref: { document: "core", section: "11.9.5.5" }
        },

        Field({
            name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32",

            details: "Every network is uniquely identified (for purposes of commissioning) by a NetworkID mapping to the " +
                "following technology-specific properties:" +
                "\n" +
                "  • SSID for Wi-Fi" +
                "\n" +
                "  • Extended PAN ID for Thread" +
                "\n" +
                "  • Network interface instance name at operating system (or equivalent unique name) for Ethernet." +
                "\n" +
                "The semantics of the NetworkID field therefore varies between network types accordingly. It contains " +
                "SSID for Wi-Fi networks, Extended PAN ID (XPAN ID) for Thread networks and netif name for Ethernet " +
                "networks." +
                "\n" +
                "NOTE" +
                "\n" +
                "SSID in Wi-Fi is a collection of 1-32 bytes, the text encoding of which is not specified. " +
                "Implementations must be careful to support reporting byte strings without requiring a particular " +
                "encoding for transfer. Only the commissioner should try to potentially decode the bytes. The most " +
                "common encoding is UTF-8, however this is just a convention. Some configurations may use Latin-1 or " +
                "other character sets. A commissioner may decode using UTF-8, replacing encoding errors with \"?\" at " +
                "the application level while retaining the underlying representation." +
                "\n" +
                "XPAN ID is a big-endian 64-bit unsigned number, represented on the first 8 octets of the octet " +
                "string.",

            xref: { document: "core", section: "11.9.5.5.1" }
        }),

        Field({
            name: "Connected", id: 0x1, type: "bool", conformance: "M",
            details: "This field shall indicate the connected status of the associated network, where \"connected\" means " +
                "currently linked to the network technology (e.g. Associated for a Wi-Fi network, media connected for " +
                "an Ethernet network).",
            xref: { document: "core", section: "11.9.5.5.2" }
        })
    ),

    Datatype(
        {
            name: "WiFiInterfaceScanResultStruct", type: "struct",
            details: "WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.",
            xref: { document: "core", section: "11.9.5.6" }
        },
        Field({ name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI" }),
        Field({ name: "Ssid", id: 0x1, type: "octstr", conformance: "WI", constraint: "max 32" }),
        Field({ name: "Bssid", id: 0x2, type: "octstr", conformance: "WI", constraint: "6" }),
        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "WI" }),

        Field({
            name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]",
            details: "This field, if present, may be used to differentiate overlapping channel number values across " +
                "different Wi-Fi frequency bands.",
            xref: { document: "core", section: "11.9.5.6.1" }
        }),

        Field({
            name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]",
            details: "This field, if present, shall denote the signal strength in dBm of the associated scan result.",
            xref: { document: "core", section: "11.9.5.6.2" }
        })
    ),

    Datatype(
        {
            name: "ThreadInterfaceScanResultStruct", type: "struct",
            details: "ThreadInterfaceScanResultStruct represents a single Thread network scan result.",
            xref: { document: "core", section: "11.9.5.7" }
        },
        Field({ name: "PanId", id: 0x0, type: "uint16", conformance: "TH", constraint: "max 65534" }),
        Field({ name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH" }),
        Field({ name: "NetworkName", id: 0x2, type: "string", conformance: "TH", constraint: "1 to 16" }),
        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "TH" }),
        Field({ name: "Version", id: 0x4, type: "uint8", conformance: "TH" }),
        Field({
            name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH",
            details: "ExtendedAddress stands for an IEEE 802.15.4 Extended Address.",
            xref: { document: "core", section: "11.9.5.7.1" }
        }),
        Field({ name: "Rssi", id: 0x6, type: "int8", conformance: "TH" }),
        Field({ name: "Lqi", id: 0x7, type: "uint8", conformance: "TH" })
    )
);

MatterDefinition.children.push(NetworkCommissioning);
