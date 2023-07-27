/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "NetworkCommissioning", id: 0x31, classification: "node",
    description: "Network Commissioning",

    details: "Network commissioning is part of the overall Node commissioning. The main goal of Network " +
        "Commissioning Cluster is to associate a Node with or manage a Node’s one or more network " +
        "interfaces. These network interfaces can include the following types." +
        "\n" +
        "  • Wi-Fi (IEEE 802.11-2020)" +
        "\n" +
        "  • Ethernet (802.3)" +
        "\n" +
        "  • Thread (802.15.4)" +
        "\n" +
        "An instance of the Network Commissioning Cluster only applies to a single network interface " +
        "instance present. An interface, in this context, is a unique entity that can have an IPv6 address " +
        "assigned to it and ingress and egress IP packets.",

    xref: { document: "core", section: "11.8" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.8.4" },

            children: [
                {
                    tag: "datatype", name: "WI", conformance: "O.a", constraint: "0",
                    description: "WiFiNetworkInterface",
                    details: "Wi-Fi related features"
                },
                {
                    tag: "datatype", name: "TH", conformance: "O.a", constraint: "1",
                    description: "ThreadNetworkInterface",
                    details: "Thread related features"
                },
                {
                    tag: "datatype", name: "ET", conformance: "O.a", constraint: "2",
                    description: "EthernetNetworkInterface",
                    details: "Ethernet related features"
                }
            ]
        },

        {
            tag: "attribute", name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M",
            constraint: "min 1", quality: "F",
            details: "This shall indicate the maximum number of network configuration entries that can be added, based on " +
                "available device resources. The length of the Networks attribute list shall be less than or equal " +
                "to this value.",
            xref: { document: "core", section: "11.8.6.1" }
        },

        {
            tag: "attribute", name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
            constraint: "max MaxNetworks", default: [],

            details: "This attribute shall indicate the network configurations that are usable on the network interface " +
                "represented by this cluster server instance." +
                "\n" +
                "The order of configurations in the list reflects precedence. That is, any time the Node attempts to " +
                "connect to the network it shall attempt to do so using the configurations in Networks Attribute in " +
                "the order as they appear in the list." +
                "\n" +
                "The order of list items shall only be modified by the AddOrUpdateThreadNetwork, " +
                "AddOrUpdateWiFiNetwork and ReorderNetwork commands. In other words, the list shall be stable over" +
                "\n" +
                "time, unless mutated externally." +
                "\n" +
                "Ethernet networks shall be automatically populated by the cluster server. Ethernet Network " +
                "Commissioning Cluster instances shall always have exactly one Section 11.8.5.4, “NetworkInfoStruct” " +
                "instance in their Networks attribute. There shall be no way to add, update or remove Ethernet " +
                "network configurations to those Cluster instances.",

            xref: { document: "core", section: "11.8.6.2" },
            children: [{ tag: "datatype", name: "entry", type: "NetworkInfoStruct" }]
        },

        {
            tag: "attribute", name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", access: "R V",
            conformance: "WI | TH", constraint: "desc", quality: "F",
            details: "This attribute shall indicate the maximum duration taken, in seconds, by the network interface on " +
                "this cluster server instance to provide scan results." +
                "\n" +
                "See Section 11.8.7.1, “ScanNetworks Command” for usage.",
            xref: { document: "core", section: "11.8.6.3" }
        },

        {
            tag: "attribute", name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", access: "R V",
            conformance: "WI | TH", constraint: "desc", quality: "F",
            details: "This attribute shall indicate the maximum duration taken, in seconds, by the network interface on " +
                "this cluster server instance to report a successful or failed network connection indication. This " +
                "maximum time shall account for all operations needed until a successful network connection is " +
                "deemed to have occurred, including, for example, obtaining IP addresses, or the execution of " +
                "necessary internal retries.",
            xref: { document: "core", section: "11.8.6.4" }
        },

        {
            tag: "attribute", name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA",
            conformance: "M", default: true, quality: "N",

            details: "This attribute shall indicate whether the associated network interface is enabled or not. By " +
                "default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set " +
                "to true)." +
                "\n" +
                "It is undefined what happens if InterfaceEnabled is written to false on the same interface as that " +
                "which is used to write the value. In that case, it is possible that the Administrator would have to " +
                "await expiry of the fail-safe, and associated recovery of network configuration to prior safe " +
                "values, before being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe " +
                "Command”)." +
                "\n" +
                "It may be possible to disable Ethernet interfaces but it is implementation-defined. If not " +
                "supported, a write to this attribute with a value of false shall fail with a status of " +
                "INVALID_ACTION. When disabled, an Ethernet interface would longer employ media detection. That is, " +
                "a simple unplug and replug of the cable shall NOT re-enable the interface." +
                "\n" +
                "On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server " +
                "cluster instances with InterfaceEnabled set to true.",

            xref: { document: "core", section: "11.8.6.5" }
        },

        {
            tag: "attribute", name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum",
            access: "R A", conformance: "M", default: null, quality: "X",

            details: "This attribute shall indicate the status of the last attempt either scan or connect to an " +
                "operational network, using this interface, whether by invocation of the ConnectNetwork command or " +
                "by autonomous connection after loss of connectivity or during initial establishment. If no such " +
                "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                "shall be set to null." +
                "\n" +
                "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                "in non-concurrent networking commissioning flows.",

            xref: { document: "core", section: "11.8.6.6" }
        },

        {
            tag: "attribute", name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
            constraint: "1 to 32", default: null, quality: "X",

            details: "This attribute shall indicate the NetworkID used in the last attempt to connect to an operational " +
                "network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous " +
                "connection after loss of connectivity or during initial establishment. If no such attempt was made, " +
                "or no network configurations exist in the Networks attribute, then this attribute shall be set to " +
                "null." +
                "\n" +
                "If a network configuration is removed from the Networks attribute using the RemoveNetwork command " +
                "after a connection attempt, this field may indicate a NetworkID that is no longer configured on the " +
                "Node." +
                "\n" +
                "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                "in non-concurrent networking commissioning flows.",

            xref: { document: "core", section: "11.8.6.7" }
        },

        {
            tag: "attribute", name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A",
            conformance: "M", default: null, quality: "X",

            details: "This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an " +
                "operational network, using this interface, whether by invocation of the ConnectNetwork command or " +
                "by autonomous connection after loss of connectivity or during initial establishment. If no such " +
                "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                "shall be set to null." +
                "\n" +
                "If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus " +
                "attribute, then this field shall be set to null." +
                "\n" +
                "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                "in non-concurrent networking commissioning flows.",

            xref: { document: "core", section: "11.8.6.8" }
        },

        {
            tag: "command", name: "ScanNetworks", id: 0x0, access: "A", conformance: "WI | TH",
            direction: "request", response: "ScanNetworksResponse",

            details: "This command shall scan on the Cluster instance’s associated network interface for either of:" +
                "\n" +
                "  • All available networks (non-directed scanning)" +
                "\n" +
                "  • Specific networks (directed scanning)" +
                "\n" +
                "Scanning for available networks detects all networks of the type corresponding to the cluster " +
                "server instance’s associated network interface that are possible to join, such as all visible Wi-Fi " +
                "access points for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server " +
                "instances, within bounds of the maximum response size." +
                "\n" +
                "Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. " +
                "Wi-Fi SSID) is provided in the command arguments. Directed scanning shall restrict the result set " +
                "to the specified network only." +
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
                "Clients shall be resilient to a server that either does not support or cannot proceed with the " +
                "ScanNetworks command.",

            xref: { document: "core", section: "11.8.7.1" },

            children: [
                {
                    tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "[WI]", constraint: "1 to 32",
                    default: null, quality: "X",
                    details: "This field, if present, shall contain the SSID for a directed scan of that particular Wi-Fi SSID. " +
                        "Otherwise, if the field is absent, or it is null, this shall indicate scanning of all BSSID in " +
                        "range. This field shall be ignored for ScanNetworks invocations on non-Wi-Fi server instances.",
                    xref: { document: "core", section: "11.8.7.1.1" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                    details: "The Breadcrumb field, if present, shall be used to atomically set the Breadcrumb attribute in the " +
                        "General Commissioning cluster on success of the associated command. If the command fails, the " +
                        "Breadcrumb attribute in the General Commissioning cluster shall be left unchanged.",
                    xref: { document: "core", section: "11.8.7.1.2" }
                }
            ]
        },

        {
            tag: "command", name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH",
            direction: "response",

            details: "This command shall contain the status of the last ScanNetworks command, and the associated scan " +
                "results if the operation was successful." +
                "\n" +
                "Results are valid only if NetworkingStatus is Success." +
                "\n" +
                "Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute " +
                "value to the NetworkingStatus matching the response.",

            xref: { document: "core", section: "11.8.7.2" },

            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M", constraint: "desc",

                    details: "The NetworkingStatus field shall indicate the status of the last scan operation, taking one of " +
                        "these values:" +
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

                    xref: { document: "core", section: "11.8.7.2.1" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                    constraint: "max 512",
                    details: "This field, if present and non-empty, may contain error information which may be communicated to " +
                        "the user in case the NetworkingStatus was not Success. Its purpose is to help developers in " +
                        "troubleshooting errors and may go into logs or crash reports.",
                    xref: { document: "core", section: "11.8.7.2.2" }
                },

                {
                    tag: "datatype", name: "WiFiScanResults", id: 0x2, type: "list", conformance: "WI",
                    constraint: "desc",

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
                        "decreasing RSSI order, even if RSSI is not reported in the response, to maximize the likelihood " +
                        "that most likely to be reachable elements are included within the size limits of the response.",

                    xref: { document: "core", section: "11.8.7.2.3" },
                    children: [{ tag: "datatype", name: "entry", type: "WiFiInterfaceScanResultStruct" }]
                },

                {
                    tag: "datatype", name: "ThreadScanResults", id: 0x3, type: "list", conformance: "TH",
                    constraint: "desc",

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

                    xref: { document: "core", section: "11.8.7.2.4" },
                    children: [{ tag: "datatype", name: "entry", type: "ThreadInterfaceScanResultStruct" }]
                }
            ]
        },

        {
            tag: "command", name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "A", conformance: "WI",
            direction: "request", response: "NetworkConfigResponse",

            details: "This command shall be used to add or modify Wi-Fi network configurations." +
                "\n" +
                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                "initiator." +
                "\n" +
                "The Credentials associated with the network are not readable after execution of this command, as " +
                "they do not appear in the Networks attribute list, for security reasons." +
                "\n" +
                "See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” " +
                "for behavior of addition/update." +
                "\n" +
                "This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not " +
                "supported by this cluster.",

            xref: { document: "core", section: "11.8.7.3" },

            children: [
                { tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "M", constraint: "max 32" },

                {
                    tag: "datatype", name: "Credentials", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "max 64",

                    details: "Credentials is the passphrase or PSK for the network (if any is needed)." +
                        "\n" +
                        "Security type, cipher and credential format (passphrase or PSK) shall be contextually auto- " +
                        "selected during execution of the ConnectNetwork Command and during subsequent operational state " +
                        "network connections, based on the most secure Wi-Fi security type available within beacons and " +
                        "probe responses for the set of all discovered BSSIDs for the configured SSID. The type of PSK or " +
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
                        "to achieve successful operation, or if all retry attempts fail." +
                        "\n" +
                        "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

                    xref: { document: "core", section: "11.8.7.3.1" }
                },

                { tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "AddOrUpdateThreadNetwork", id: 0x3, access: "A", conformance: "TH",
            direction: "request", response: "NetworkConfigResponse",

            details: "This command shall be used to add or modify Thread network configurations." +
                "\n" +
                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                "initiator." +
                "\n" +
                "See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” " +
                "for behavior of addition/update." +
                "\n" +
                "The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be " +
                "added or updated." +
                "\n" +
                "If the Networks attribute list does not contain an entry with the same NetworkID as the one " +
                "provided in the OperationalDataset, the operation shall be considered an addition, otherwise, it " +
                "shall be considered an update.",

            xref: { document: "core", section: "11.8.7.4" },

            children: [
                {
                    tag: "datatype", name: "OperationalDataset", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 254",

                    details: "The OperationalDataset field shall contain the Thread Network Parameters, including channel, PAN " +
                        "ID, and Extended PAN ID." +
                        "\n" +
                        "The encoding for the OperationalDataset field is defined in the Thread specification. The client " +
                        "shall pass the OperationalDataset as an opaque octet string." +
                        "\n" +
                        "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

                    xref: { document: "core", section: "11.8.7.4.1" }
                },

                { tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "RemoveNetwork", id: 0x4, access: "A", conformance: "WI | TH",
            direction: "request", response: "NetworkConfigResponse",

            details: "This command shall remove the network configuration from the Cluster if there was already a network " +
                "configuration with the same NetworkID. The relative order of the entries in the Networks attribute " +
                "list shall remain unchanged, except for the removal of the requested network configuration." +
                "\n" +
                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                "initiator." +
                "\n" +
                "If the Networks attribute does not contain a matching entry, the command shall immediately respond " +
                "with NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound." +
                "\n" +
                "On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based " +
                "index of the entry in the Networks attribute that was just removed, and a NetworkingStatus status " +
                "field set to Success." +
                "\n" +
                "This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID" +
                "\n" +
                "for Thread." +
                "\n" +
                "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

            xref: { document: "core", section: "11.8.7.7" },

            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32"
                },
                { tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH",
            direction: "response",

            details: "This response command relates status information for some commands which require it as their " +
                "response command. See each individual cluster server command for the situations that may cause a " +
                "NetworkingStatus different than Success." +
                "\n" +
                "Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute " +
                "value to the NetworkingStatus matching the response." +
                "\n" +
                "Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value " +
                "to the NetworkID that was used in the command for which an invocation caused the response to be " +
                "generated." +
                "\n" +
                "The NetworkingStatus field shall indicate the status of the last operation attempting to modify the " +
                "Networks attribute configuration, taking one of these values:" +
                "\n" +
                "  • Success: Operation succeeded." +
                "\n" +
                "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                "\n" +
                "  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section " +
                "    11.8.6.1, “MaxNetworks Attribute”." +
                "\n" +
                "  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the " +
                "    added network configurations in Networks attribute." +
                "\n" +
                "  • UnknownError: An internal error occurred during the operation." +
                "\n" +
                "See Section 11.8.7.2.2, “DebugText Field” for usage.",

            xref: { document: "core", section: "11.8.7.8" },

            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M", constraint: "desc"
                },
                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                    constraint: "max 512"
                },

                {
                    tag: "datatype", name: "NetworkIndex", id: 0x2, type: "uint8", conformance: "O",
                    details: "When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based " +
                        "index of the entry in the Networks attribute that was last added, updated or removed successfully " +
                        "by the associated request command.",
                    xref: { document: "core", section: "11.8.7.8.1" }
                }
            ]
        },

        {
            tag: "command", name: "ConnectNetwork", id: 0x6, access: "A", conformance: "WI | TH",
            direction: "request", response: "ConnectNetworkResponse",

            details: "This command shall attempt to connect to a network whose configuration was previously added by " +
                "either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by " +
                "its NetworkID." +
                "\n" +
                "This command shall fail with a BUSY status code returned to the initiator if the server is " +
                "currently unable to proceed with such an operation, such as if it is currently attempting to " +
                "connect in the background, or is already proceeding with a prior ConnectNetwork." +
                "\n" +
                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                "initiator." +
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
                "commissioning situations, the client SHOULD allow additional margin of time to account for its " +
                "delay in executing operational discovery of the Node once it is connected to the new network." +
                "\n" +
                "On successful connection, the entry associated with the given Network configuration in the Networks " +
                "attribute shall indicate its Connected field set to true, and all other entries, if any exist, " +
                "shall indicate their Connected field set to false." +
                "\n" +
                "On failure to connect, the entry associated with the given Network configuration in the Networks " +
                "attribute shall indicate its Connected field set to false." +
                "\n" +
                "The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks " +
                "attribute." +
                "\n" +
                "Even after successfully connecting to a network, the configuration shall revert to the prior state" +
                "\n" +
                "of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete " +
                "Command”) is not successfully invoked before expiry of the Fail-Safe timer." +
                "\n" +
                "When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible " +
                "that the only method to determine success of the operation is operational discovery of the Node on " +
                "the new operational network. Therefore, before invoking the ConnectNetwork command, the client " +
                "SHOULD re-invoke the Arm Fail-Safe command with a duration that meets the following:" +
                "\n" +
                "  1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, " +
                "     “ConnectMaxTimeSeconds Attribute”) that may be taken by the server to connect to the desired " +
                "     network." +
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
                "in non-concurrent commissioning situations." +
                "\n" +
                "This field shall contain the NetworkID for the entry used to configure the connection: the SSID for " +
                "Wi-Fi and XPAN ID for Thread." +
                "\n" +
                "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

            xref: { document: "core", section: "11.8.7.9" },

            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32"
                },
                { tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH",
            direction: "response",

            details: "Before generating a ConnectNetworkResponse, the server shall:" +
                "\n" +
                "  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response." +
                "\n" +
                "  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork " +
                "    command which caused the response to be generated." +
                "\n" +
                "  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, " +
                "    including setting it to null if the ErrorValue is not applicable." +
                "\n" +
                "The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of " +
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
                "  • Association errors (see also description of errors in Section 11.8.5.3, " +
                "    “NetworkCommissioningStatusEnum”): AuthFailure, UnsupportedSecurity, OtherConnectionFailure, " +
                "    IPV6Failed, IPBindFailed" +
                "\n" +
                "See Section 11.8.7.2.2, “DebugText Field” for usage.",

            xref: { document: "core", section: "11.8.7.10" },

            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M"
                },
                { tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O" },

                {
                    tag: "datatype", name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X",

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

                    xref: { document: "core", section: "11.8.7.10.1" }
                }
            ]
        },

        {
            tag: "command", name: "ReorderNetwork", id: 0x8, access: "A", conformance: "WI | TH",
            direction: "request", response: "NetworkConfigResponse",

            details: "This command shall set the specific order of the network configuration selected by its NetworkID in " +
                "the Networks attribute list to match the position given by NetworkIndex." +
                "\n" +
                "This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for " +
                "Thread." +
                "\n" +
                "This field shall contain the 0-based index of the new desired position of the entry in the Networks " +
                "attribute." +
                "\n" +
                "See Section 11.8.7.1.2, “Breadcrumb Field” for usage." +
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
                "To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi" +
                "\n" +
                "device:" +
                "\n" +
                "On receiving ReorderNetwork with:" +
                "\n" +
                "  • NetworkId = Home-Guest" +
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
                "  • NetworkId = FancyCat" +
                "\n" +
                "  • NetworkIndex = 3" +
                "\n" +
                "The outcome, after applying to the initial state would be:" +
                "\n" +
                "In the above outcome, BlueDolphin, Home-Guest and WillowTree moved \"up\" and FancyCat became the " +
                "lowest priority network in the list.",

            xref: { document: "core", section: "11.8.7.11" },

            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32"
                },
                { tag: "datatype", name: "NetworkIndex", id: 0x1, type: "uint8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "WiFiSecurityBitmap", type: "map8", conformance: "M",
            details: "WiFiSecurityBitmap encodes the supported Wi-Fi security types present in the Security field of the " +
                "WiFiInterfaceScanResultStruct.",
            xref: { document: "core", section: "11.8.5.1" },

            children: [
                { tag: "datatype", name: "Unencrypted", constraint: "0", description: "Supports unencrypted Wi-Fi" },
                { tag: "datatype", name: "Wep", constraint: "1", description: "Supports Wi-Fi using WEP security" },
                {
                    tag: "datatype", name: "WpaPersonal", constraint: "2",
                    description: "Supports Wi-Fi using WPA-Personal security"
                },
                {
                    tag: "datatype", name: "Wpa2Personal", constraint: "3",
                    description: "Supports Wi-Fi using WPA2-Personal security"
                },
                {
                    tag: "datatype", name: "Wpa3Personal", constraint: "4",
                    description: "Supports Wi-Fi using WPA3-Personal security"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiBandEnum", type: "enum8", conformance: "M",
            details: "WiFiBandEnum encodes a supported Wi-Fi frequency band present in the WiFiBand field of the " +
                "WiFiInterfaceScanResultStruct.",
            xref: { document: "core", section: "11.8.5.2" },

            children: [
                {
                    tag: "datatype", name: "2G4", id: 0x0, conformance: "O.a+",
                    description: "2.4GHz - 2.401GHz to2.495GHz(802.11b/g/n/ax)"
                },
                {
                    tag: "datatype", name: "3G65", id: 0x1, conformance: "O.a+",
                    description: "3.65GHz - 3.655GHz to3.695GHz (802.11y)"
                },
                {
                    tag: "datatype", name: "5G", id: 0x2, conformance: "O.a+",
                    description: "5GHz - 5.150GHz to5.895GHz(802.11a/n/ac/ax)"
                },
                {
                    tag: "datatype", name: "6G", id: 0x3, conformance: "O.a+",
                    description: "6GHz - 5.925GHz to7.125GHz (802.11ax / WiFi 6E)"
                },
                {
                    tag: "datatype", name: "60G", id: 0x4, conformance: "O.a+",
                    description: "60GHz - 57.24GHz to70.20GHz (802.11ad/ay)"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkCommissioningStatusEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.8.5.3" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "OK, no error" },
                { tag: "datatype", name: "OutOfRange", id: 0x1, conformance: "M", description: "Value Outside Range" },
                {
                    tag: "datatype", name: "BoundsExceeded", id: 0x2, conformance: "M",
                    description: "A collection would exceed its size limit"
                },
                {
                    tag: "datatype", name: "NetworkIdNotFound", id: 0x3, conformance: "M",
                    description: "The NetworkID is not among the collection of added networks"
                },
                {
                    tag: "datatype", name: "DuplicateNetworkId", id: 0x4, conformance: "M",
                    description: "The NetworkID is already among the collection of added networks"
                },
                {
                    tag: "datatype", name: "NetworkNotFound", id: 0x5, conformance: "M",
                    description: "Cannot find AP: SSID Not found"
                },
                {
                    tag: "datatype", name: "RegulatoryError", id: 0x6, conformance: "M",
                    description: "Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz"
                },
                {
                    tag: "datatype", name: "AuthFailure", id: 0x7, conformance: "M",
                    description: "Cannot associate due to authentication failure"
                },
                {
                    tag: "datatype", name: "UnsupportedSecurity", id: 0x8, conformance: "M",
                    description: "Cannot associate due to unsupported security mode"
                },
                {
                    tag: "datatype", name: "OtherConnectionFailure", id: 0x9, conformance: "M",
                    description: "Other association failure"
                },
                {
                    tag: "datatype", name: "Ipv6Failed", id: 0xa, conformance: "M",
                    description: "Failure to generate an IPv6 address"
                },
                {
                    tag: "datatype", name: "IpBindFailed", id: 0xb, conformance: "M",
                    description: "Failure to bind Wi-Fi <-> IP interfaces"
                },
                { tag: "datatype", name: "UnknownError", id: 0xc, conformance: "M", description: "Unknown error" }
            ]
        },

        {
            tag: "datatype", name: "NetworkInfoStruct", type: "struct", conformance: "M",
            details: "NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks " +
                "attribute.",
            xref: { document: "core", section: "11.8.5.4" },

            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32",

                    details: "Every network is uniquely identified (for purposes of commissioning) by a NetworkID mapping to the " +
                        "following technology-specific properties:" +
                        "\n" +
                        "  • SSID for Wi-Fi" +
                        "\n" +
                        "  • Extended PAN ID for Thread" +
                        "\n" +
                        "  • Network interface instance name at operating system (or equivalent unique name) for Ethernet." +
                        "\n" +
                        "The semantics of the NetworkID field therefore varies between network types accordingly. It " +
                        "contains SSID for Wi-Fi networks, Extended PAN ID (XPAN ID) for Thread networks and netif name for " +
                        "Ethernet networks." +
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

                    xref: { document: "core", section: "11.8.5.4.1" }
                },

                {
                    tag: "datatype", name: "Connected", id: 0x1, type: "bool", conformance: "M",
                    details: "This field shall indicate the connected status of the associated network, where \"connected\" means " +
                        "currently linked to the network technology (e.g. Associated for a Wi-Fi network, media connected " +
                        "for an Ethernet network).",
                    xref: { document: "core", section: "11.8.5.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiInterfaceScanResultStruct", type: "struct", conformance: "M",
            details: "WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.",
            xref: { document: "core", section: "11.8.5.5" },

            children: [
                { tag: "datatype", name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI" },
                { tag: "datatype", name: "Ssid", id: 0x1, type: "octstr", conformance: "WI", constraint: "max 32" },
                { tag: "datatype", name: "Bssid", id: 0x2, type: "octstr", conformance: "WI", constraint: "6" },
                { tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "WI" },

                {
                    tag: "datatype", name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]",
                    details: "This field, if present, may be used to differentiate overlapping channel number values across " +
                        "different Wi-Fi frequency bands.",
                    xref: { document: "core", section: "11.8.5.5.1" }
                },

                {
                    tag: "datatype", name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]",
                    details: "This field, if present, shall denote the signal strength in dBm of the associated scan result.",
                    xref: { document: "core", section: "11.8.5.5.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ThreadInterfaceScanResultStruct", type: "struct", conformance: "M",
            details: "ThreadInterfaceScanResultStruct represents a single Thread network scan result.",
            xref: { document: "core", section: "11.8.5.6" },

            children: [
                {
                    tag: "datatype", name: "PanId", id: 0x0, type: "uint16", conformance: "TH",
                    constraint: "0 to 65534"
                },
                { tag: "datatype", name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH" },
                {
                    tag: "datatype", name: "NetworkName", id: 0x2, type: "string", conformance: "TH",
                    constraint: "1 to 16"
                },
                { tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "TH" },
                { tag: "datatype", name: "Version", id: 0x4, type: "uint8", conformance: "TH" },
                {
                    tag: "datatype", name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH",
                    details: "ExtendedAddress stands for an IEEE 802.15.4 Extended Address.",
                    xref: { document: "core", section: "11.8.5.6.1" }
                },
                { tag: "datatype", name: "Rssi", id: 0x6, type: "int8", conformance: "TH" },
                { tag: "datatype", name: "Lqi", id: 0x7, type: "uint8", conformance: "TH" }
            ]
        }
    ]
});
