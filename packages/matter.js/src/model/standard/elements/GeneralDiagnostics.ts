/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "GeneralDiagnostics", id: 0x33, classification: "node",
    description: "General Diagnostics",
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
        "standardized diagnostics metrics that may be used by a Node to assist a user or Administrator in " +
        "diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics " +
        "that are broadly relevant to the majority of Nodes.",
    xref: { document: "core", section: "11.11" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "NetworkInterfaces", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 8",
            details: "The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network " +
                "interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.11.6.1" },
            children: [{ tag: "datatype", name: "entry", type: "NetworkInterface" }]
        },

        {
            tag: "attribute", name: "RebootCount", id: 0x1, type: "uint16", access: "R V", conformance: "M",
            default: 0, quality: "N",
            details: "The RebootCount attribute shall indicate a best-effort count of the number of times the Node has " +
                "rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The " +
                "RebootCount attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. " +
                "The RebootCount attribute shall only be reset to 0 upon a factory reset of the Node.",
            xref: { document: "core", section: "11.11.6.2" }
        },

        {
            tag: "attribute", name: "UpTime", id: 0x2, type: "uint64", access: "R V", conformance: "O",
            default: 0, quality: "C",
            details: "The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, " +
                "since the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods " +
                "of time that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon " +
                "a device reboot.",
            xref: { document: "core", section: "11.11.6.3" }
        },

        {
            tag: "attribute", name: "TotalOperationalHours", id: 0x3, type: "uint32", access: "R V",
            conformance: "O", default: 0, quality: "N C",
            details: "The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of " +
                "time, in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be " +
                "incremented to account for the periods of time that a Node is in a low-power or sleep state. The" +
                "\n" +
                "TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.",
            xref: { document: "core", section: "11.11.6.4" }
        },

        {
            tag: "attribute", name: "BootReason", id: 0x4, type: "BootReasonEnum", access: "R V",
            conformance: "O",
            details: "The BootReason attribute shall indicate the reason for the Node’s most recent boot.",
            xref: { document: "core", section: "11.11.6.5" }
        },

        {
            tag: "attribute", name: "ActiveHardwareFaults", id: 0x5, type: "list", access: "R V",
            conformance: "O", constraint: "max 11",

            details: "The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be " +
                "added to this list. This list shall NOT contain more than one instance of a specific " +
                "HardwareFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                "cleared, the corresponding HardwareFaultEnum value shall be removed from this list. An empty list " +
                "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                "attribute, or they may subscribe to HardwareFaultChange.",

            xref: { document: "core", section: "11.11.6.6" },
            children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
        },

        {
            tag: "attribute", name: "ActiveRadioFaults", id: 0x6, type: "list", access: "R V", conformance: "O",
            constraint: "max 7",

            details: "The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added " +
                "to this list. This list shall NOT contain more than one instance of a specific RadioFaultEnum " +
                "value. When the Node detects that all conditions contributing to a fault has been cleared, the " +
                "corresponding RadioFaultEnum value shall be removed from this list. An empty list shall indicate " +
                "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                "subscribe to RadioFaultChange.",

            xref: { document: "core", section: "11.11.6.7" },
            children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
        },

        {
            tag: "attribute", name: "ActiveNetworkFaults", id: 0x7, type: "list", access: "R V",
            conformance: "O", constraint: "max 4",

            details: "The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be " +
                "added to this list. This list shall NOT contain more than one instance of a specific " +
                "NetworkFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                "cleared, the corresponding NetworkFaultEnum value shall be removed from this list. An empty list " +
                "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                "attribute, or they may subscribe to NetworkFaultChange.",

            xref: { document: "core", section: "11.11.6.8" },
            children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
        },

        {
            tag: "attribute", name: "TestEventTriggersEnabled", id: 0x8, type: "bool", access: "R V",
            conformance: "M",

            details: "The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger " +
                "configured. When this attribute is true, the Node has been configured with one or more test event " +
                "triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1, " +
                "“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by " +
                "Administrators to detect if a device was inadvertently commissioned with test event trigger mode " +
                "enabled, and take appropriate action (e.g. warn the user and/or offer to remove all fabrics on the " +
                "Node).",

            xref: { document: "core", section: "11.11.6.9" }
        },

        {
            tag: "event", name: "HardwareFaultChange", id: 0x0, access: "V", conformance: "O",
            priority: "critical",
            details: "The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently " +
                "detected by the Node.",
            xref: { document: "core", section: "11.11.8.1" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 11",
                    details: "This field shall represent the set of faults currently detected, as per Section 11.11.4.1, " +
                        "“HardwareFaultEnum”.",
                    xref: { document: "core", section: "11.11.8.1.1" },
                    children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
                },

                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 11",
                    details: "This field shall represent the set of faults detected prior to this change event, as per Section" +
                        "\n" +
                        "11.11.4.1, “HardwareFaultEnum”.",
                    xref: { document: "core", section: "11.11.8.1.2" },
                    children: [{ tag: "datatype", name: "entry", type: "HardwareFaultEnum" }]
                }
            ]
        },

        {
            tag: "event", name: "RadioFaultChange", id: 0x1, access: "V", conformance: "O",
            priority: "critical",

            details: "The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by " +
                "the Node." +
                "\n" +
                "This field shall represent the set of faults currently detected, as per Section 11.11.4.2, " +
                "“RadioFaultEnum”." +
                "\n" +
                "This field shall represent the set of faults detected prior to this change event, as per Section " +
                "11.11.4.2, “RadioFaultEnum”.",

            xref: { document: "core", section: "11.11.8.2" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                    children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 7",
                    children: [{ tag: "datatype", name: "entry", type: "RadioFaultEnum" }]
                }
            ]
        },

        {
            tag: "event", name: "NetworkFaultChange", id: 0x2, access: "V", conformance: "O",
            priority: "critical",

            details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently " +
                "detected by the Node." +
                "\n" +
                "This field shall represent the set of faults currently detected, as per Section 11.11.4.3, " +
                "“NetworkFaultEnum”." +
                "\n" +
                "This field shall represent the set of faults detected prior to this change event, as per Section " +
                "11.11.4.3, “NetworkFaultEnum”.",

            xref: { document: "core", section: "11.11.8.3" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                    children: [{ tag: "datatype", name: "entry", type: "NetworkFaultEnum" }]
                }
            ]
        },

        {
            tag: "event", name: "BootReason", id: 0x3, access: "V", conformance: "M", priority: "critical",
            details: "The BootReason Event shall indicate the reason that caused the device to start-up.",
            xref: { document: "core", section: "11.11.8.4" },
            children: [{
                tag: "datatype", name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M",
                details: "This field shall contain the reason for this BootReason event.",
                xref: { document: "core", section: "11.11.8.4.1" }
            }]
        },

        {
            tag: "command", name: "TestEventTrigger", id: 0x0, access: "M", conformance: "M",
            direction: "request", response: "status",

            details: "This command shall be supported to provide a means for certification tests to trigger some test- " +
                "plan-specific events, necessary to assist in automation of device interactions for some " +
                "certification test cases. This command shall NOT cause any changes to the state of the device that " +
                "persist after the last fabric is removed." +
                "\n" +
                "The fields for the TestEventTrigger command are as follows:",

            xref: { document: "core", section: "11.11.7.1" },

            children: [
                {
                    tag: "datatype", name: "EnableKey", id: 0x0, type: "octstr", conformance: "M", constraint: "16",

                    details: "The EnableKey is a 128 bit value provided by the client in this command, which needs to match a " +
                        "value chosen by the manufacturer and configured on the server using manufacturer-specific means, " +
                        "such as pre-provisioning. The value of all zeroes is reserved to indicate that no EnableKey is set. " +
                        "Therefore, if the EnableKey field is received with all zeroes, this command shall FAIL with a " +
                        "response status of CONSTRAINT_ERROR." +
                        "\n" +
                        "The EnableKey SHOULD be unique per exact set of devices going to a certification test." +
                        "\n" +
                        "Devices not targeted towards going to a certification test event shall NOT have a non-zero " +
                        "EnableKey value configured, so that only devices in test environments are responsive to this " +
                        "command." +
                        "\n" +
                        "In order to prevent unwittingly actuating a particular trigger, this command shall respond with the " +
                        "cluster-specific error status code EnableKeyMismatch if the EnableKey field does not match the " +
                        "a-priori value configured on the device.",

                    xref: { document: "core", section: "11.11.7.1.1" }
                },

                {
                    tag: "datatype", name: "EventTrigger", id: 0x1, type: "uint64", conformance: "M",

                    details: "This field shall indicate the test or test mode which the client wants to trigger." +
                        "\n" +
                        "The expected side-effects of EventTrigger values are out of scope of this specification and will be " +
                        "described within appropriate certification test literature provided to manufacturers by the " +
                        "Connectivity Standards Alliance, in conjunction with certification test cases documentation." +
                        "\n" +
                        "Values of EventTrigger in the range 0xFFFF_FFFF_0000_0000 through 0xFFFF_FFFF_FFFF_FFFF are " +
                        "reserved for testing use by manufacturers and will not appear in CSA certification test literature." +
                        "\n" +
                        "If the value of EventTrigger received is not supported by the receiving Node, this command shall " +
                        "fail with a status code of INVALID_COMMAND." +
                        "\n" +
                        "Otherwise, if the EnableKey value matches the configured internal value for a particular Node, and " +
                        "the EventTrigger value matches a supported test event trigger value, the command shall succeed and " +
                        "execute the expected trigger action." +
                        "\n" +
                        "If no specific test event triggers are required to be supported by certification test requirements " +
                        "for the features that a given product will be certified against, this command may always fail with " +
                        "the INVALID_COMMAND status, equivalent to the situation of receiving an unknown EventTrigger, for " +
                        "all possible EventTrigger values.",

                    xref: { document: "core", section: "11.11.7.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",
            children: [{
                tag: "datatype", name: "EnableKeyMismatch", id: 0x2,
                details: "Provided EnableKey does not match the previously configured value.",
                xref: { document: "core", section: "11.11.5" }
            }]
        },

        {
            tag: "datatype", name: "HardwareFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.11.4.1" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node has encountered an unspecified fault."
                },
                {
                    tag: "datatype", name: "Radio", id: 0x1, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its radios."
                },
                {
                    tag: "datatype", name: "Sensor", id: 0x2, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its sensors."
                },
                {
                    tag: "datatype", name: "ResettableOverTemp", id: 0x3, conformance: "O",
                    description: "The Node has encountered an over-temperature fault that is resettable."
                },
                {
                    tag: "datatype", name: "NonResettableOverTemp", id: 0x4, conformance: "O",
                    description: "The Node has encountered an over-temperature fault that is not resettable."
                },
                {
                    tag: "datatype", name: "PowerSource", id: 0x5, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its power sources."
                },
                {
                    tag: "datatype", name: "VisualDisplayFault", id: 0x6, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its visual displays."
                },
                {
                    tag: "datatype", name: "AudioOutputFault", id: 0x7, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its audio outputs."
                },
                {
                    tag: "datatype", name: "UserInterfaceFault", id: 0x8, conformance: "O",
                    description: "The Node has encountered a fault with at least one of its user interfaces."
                },
                {
                    tag: "datatype", name: "NonVolatileMemoryError", id: 0x9, conformance: "O",
                    description: "The Node has encountered a fault with its non-volatile memory."
                },
                {
                    tag: "datatype", name: "TamperDetected", id: 0xa, conformance: "O",
                    description: "The Node has encountered disallowed physical tampering."
                }
            ]
        },

        {
            tag: "datatype", name: "RadioFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.11.4.2" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node has encountered an unspecified radio fault."
                },
                {
                    tag: "datatype", name: "WiFiFault", id: 0x1, conformance: "O",
                    description: "The Node has encountered a fault with its Wi-Fi radio."
                },
                {
                    tag: "datatype", name: "CellularFault", id: 0x2, conformance: "O",
                    description: "The Node has encountered a fault with its cellular radio."
                },
                {
                    tag: "datatype", name: "ThreadFault", id: 0x3, conformance: "O",
                    description: "The Node has encountered a fault with its802.15.4 radio."
                },
                {
                    tag: "datatype", name: "NfcFault", id: 0x4, conformance: "O",
                    description: "The Node has encountered a fault with its NFC radio."
                },
                {
                    tag: "datatype", name: "BleFault", id: 0x5, conformance: "O",
                    description: "The Node has encountered a fault with its BLE radio."
                },
                {
                    tag: "datatype", name: "EthernetFault", id: 0x6, conformance: "O",
                    description: "The Node has encountered a fault with its Ethernet controller."
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.11.4.3" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node has encountered an unspecified fault."
                },
                {
                    tag: "datatype", name: "HardwareFailure", id: 0x1, conformance: "O",
                    description: "The Node has encountered a network fault as a result of a hardware failure."
                },
                {
                    tag: "datatype", name: "NetworkJammed", id: 0x2, conformance: "O",
                    description: "The Node has encountered a network fault as a result of a jammed network."
                },
                {
                    tag: "datatype", name: "ConnectionFailed", id: 0x3, conformance: "O",
                    description: "The Node has encountered a network fault as a result of a failure to establish a connection."
                }
            ]
        },

        {
            tag: "datatype", name: "InterfaceTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.11.4.4" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "Indicates an interface of an unspecified type."
                },
                {
                    tag: "datatype", name: "WiFi", id: 0x1, conformance: "O",
                    description: "Indicates a Wi-Fi interface."
                },
                {
                    tag: "datatype", name: "Ethernet", id: 0x2, conformance: "O",
                    description: "Indicates a Ethernet interface."
                },
                {
                    tag: "datatype", name: "Cellular", id: 0x3, conformance: "O",
                    description: "Indicates a Cellular interface."
                },
                {
                    tag: "datatype", name: "Thread", id: 0x4, conformance: "O",
                    description: "Indicates a Thread interface."
                }
            ]
        },

        {
            tag: "datatype", name: "BootReasonEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.11.4.5" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node is unable to identify the Power-On reason as one of the other provided enumeration values."
                },
                {
                    tag: "datatype", name: "PowerOnReboot", id: 0x1, conformance: "M",
                    description: "The Node has booted as the result of physical interaction with the device resulting in a reboot."
                },
                {
                    tag: "datatype", name: "BrownOutReset", id: 0x2, conformance: "M",
                    description: "The Node has rebooted as the result of a brown-out of the Node’s power supply."
                },
                {
                    tag: "datatype", name: "SoftwareWatchdogReset", id: 0x3, conformance: "M",
                    description: "The Node has rebooted as the result of a software watchdog timer."
                },
                {
                    tag: "datatype", name: "HardwareWatchdogReset", id: 0x4, conformance: "M",
                    description: "The Node has rebooted as the result of a hardware watchdog timer."
                },
                {
                    tag: "datatype", name: "SoftwareUpdateCompleted", id: 0x5, conformance: "M",
                    description: "The Node has rebooted as the result of a completed software update."
                },
                {
                    tag: "datatype", name: "SoftwareReset", id: 0x6, conformance: "M",
                    description: "The Node has rebooted as the result of a software initiated reboot."
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkInterface", type: "struct", conformance: "M",
            details: "This structure describes a network interface supported by the Node, as provided in the " +
                "NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.11.4.6" },

            children: [
                {
                    tag: "datatype", name: "Name", id: 0x0, type: "string", access: "R V", conformance: "M",
                    constraint: "max 32",
                    details: "This field shall indicate a human-readable (displayable) name for the network interface, that is " +
                        "different from all other interfaces.",
                    xref: { document: "core", section: "11.11.4.6.1" }
                },

                {
                    tag: "datatype", name: "IsOperational", id: 0x1, type: "bool", access: "R V", conformance: "M",
                    details: "This field shall indicate if the Node is currently advertising itself operationally on this network " +
                        "interface and is capable of successfully receiving incoming traffic from other Nodes.",
                    xref: { document: "core", section: "11.11.4.6.2" }
                },

                {
                    tag: "datatype", name: "OffPremiseServicesReachableIPv4", id: 0x2, type: "bool", access: "R V",
                    conformance: "M", default: null, quality: "X",
                    details: "This field shall indicate whether the Node is currently able to reach off-premise services it uses " +
                        "by utilizing IPv4. The value shall be null if the Node does not use such services or does not know " +
                        "whether it can reach them.",
                    xref: { document: "core", section: "11.11.4.6.3" }
                },

                {
                    tag: "datatype", name: "OffPremiseServicesReachableIPv6", id: 0x3, type: "bool", access: "R V",
                    conformance: "M", default: null, quality: "X",
                    details: "This field shall indicate whether the Node is currently able to reach off-premise services it uses " +
                        "by utilizing IPv6. The value shall be null if the Node does not use such services or does not know " +
                        "whether it can reach them.",
                    xref: { document: "core", section: "11.11.4.6.4" }
                },

                {
                    tag: "datatype", name: "HardwareAddress", id: 0x4, type: "hwadr", access: "R V", conformance: "M",
                    details: "This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network " +
                        "interface and contain the current extended MAC address for a 802.15.4 interface. The byte order of " +
                        "the octstr shall be in wire byte order. For addresses values less than 64 bits, the first two bytes " +
                        "shall be zero.",
                    xref: { document: "core", section: "11.11.4.6.5" }
                },

                {
                    tag: "datatype", name: "IPv4Addresses", id: 0x5, type: "list", access: "R V", conformance: "M",
                    constraint: "max 4",
                    details: "This field shall provide a list of the IPv4 addresses that are currently assigned to the network " +
                        "interface.",
                    xref: { document: "core", section: "11.11.4.6.6" },
                    children: [{ tag: "datatype", name: "entry", type: "ipv4adr" }]
                },

                {
                    tag: "datatype", name: "IPv6Addresses", id: 0x6, type: "list", access: "R V", conformance: "M",
                    constraint: "max 8",
                    details: "This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the " +
                        "network interface. This list shall include the Node’s link-local address and SHOULD include any " +
                        "assigned GUA and ULA addresses. This list shall NOT include any multicast group addresses to which " +
                        "the Node is subscribed.",
                    xref: { document: "core", section: "11.11.4.6.7" },
                    children: [{ tag: "datatype", name: "entry", type: "ipv6adr" }]
                },

                {
                    tag: "datatype", name: "Type", id: 0x7, type: "InterfaceTypeEnum", access: "R V", conformance: "M",
                    details: "This field shall indicate the type of the interface using the InterfaceTypeEnum.",
                    xref: { document: "core", section: "11.11.4.6.8" }
                }
            ]
        }
    ]
});
