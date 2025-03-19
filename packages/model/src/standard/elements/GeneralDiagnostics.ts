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

export const GeneralDiagnostics = Cluster(
    {
        name: "GeneralDiagnostics", id: 0x33, classification: "node", pics: "DGGEN",
        details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
            "standardized diagnostics metrics that may be used by a Node to assist a user or Administrator in " +
            "diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics " +
            "that are broadly relevant to the majority of Nodes.",
        xref: { document: "core", section: "11.12" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.12.4" } },

        Field({
            name: "DMTEST", conformance: "desc", constraint: "0", description: "DataModelTest",
            details: "This feature indicates support for extended Data Model testing commands, which are required in some " +
                "situations." +
                "\n" +
                "This feature shall be supported if the MaxPathsPerInvoke attribute of the Basic Information Cluster " +
                "has a value > 1.",
            xref: { document: "core", section: "11.12.4.1" }
        })
    ),

    Attribute(
        {
            name: "NetworkInterfaces", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 8",
            details: "The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network " +
                "interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.12.6.1" }
        },

        Field({ name: "entry", type: "NetworkInterface" })
    ),

    Attribute({
        name: "RebootCount", id: 0x1, type: "uint16", access: "R V", conformance: "M", quality: "N",
        details: "The RebootCount attribute shall indicate a best-effort count of the number of times the Node has " +
            "rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The " +
            "RebootCount attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. " +
            "The RebootCount attribute shall only be reset to 0 upon a factory reset of the Node.",
        xref: { document: "core", section: "11.12.6.2" }
    }),

    Attribute({
        name: "UpTime", id: 0x2, type: "uint64", access: "R V", conformance: "M", quality: "C",
        details: "The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, " +
            "since the Node’s last reboot. This attribute SHOULD be incremented to account for the periods of " +
            "time that a Node is in a low-power or sleep state. This attribute shall only be reset upon a device " +
            "reboot. This attribute shall be based on the same System Time source as those used to fulfill any " +
            "usage of the system-us and system-ms data types within the server.",
        xref: { document: "core", section: "11.12.6.3" }
    }),

    Attribute({
        name: "TotalOperationalHours", id: 0x3, type: "uint32", access: "R V", conformance: "O",
        quality: "N C",
        details: "The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of " +
            "time, in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be " +
            "incremented to account for the periods of time that a Node is in a low-power or sleep state. The " +
            "TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.",
        xref: { document: "core", section: "11.12.6.4" }
    }),

    Attribute({
        name: "BootReason", id: 0x4, type: "BootReasonEnum", access: "R V", conformance: "O",
        details: "The BootReason attribute shall indicate the reason for the Node’s most recent boot.",
        xref: { document: "core", section: "11.12.6.5" }
    }),

    Attribute(
        {
            name: "ActiveHardwareFaults", id: 0x5, type: "list", access: "R V", conformance: "O",
            constraint: "max 11",

            details: "The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be " +
                "added to this list. This list shall NOT contain more than one instance of a specific " +
                "HardwareFaultEnum value. When the Node detects that all conditions contributing to a fault has been" +
                "\n" +
                "cleared, the corresponding HardwareFaultEnum value shall be removed from this list. An empty list " +
                "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                "attribute, or they may subscribe to HardwareFaultChange.",

            xref: { document: "core", section: "11.12.6.6" }
        },

        Field({ name: "entry", type: "HardwareFaultEnum" })
    ),

    Attribute(
        {
            name: "ActiveRadioFaults", id: 0x6, type: "list", access: "R V", conformance: "O",
            constraint: "max 7",

            details: "The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added " +
                "to this list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. " +
                "When the Node detects that all conditions contributing to a fault has been cleared, the " +
                "corresponding RadioFaultEnum value shall be removed from this list. An empty list shall indicate " +
                "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                "subscribe to RadioFaultChange.",

            xref: { document: "core", section: "11.12.6.7" }
        },

        Field({ name: "entry", type: "RadioFaultEnum" })
    ),

    Attribute(
        {
            name: "ActiveNetworkFaults", id: 0x7, type: "list", access: "R V", conformance: "O",
            constraint: "max 4",

            details: "The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. " +
                "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added " +
                "to this list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum " +
                "value. When the Node detects that all conditions contributing to a fault has been cleared, the " +
                "corresponding NetworkFaultEnum value shall be removed from this list. An empty list shall indicate " +
                "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                "subscribe to NetworkFaultChange.",

            xref: { document: "core", section: "11.12.6.8" }
        },

        Field({ name: "entry", type: "NetworkFaultEnum" })
    ),

    Attribute({
        name: "TestEventTriggersEnabled", id: 0x8, type: "bool", access: "R V", conformance: "M",

        details: "The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger " +
            "configured. When this attribute is true, the Node has been configured with one or more test event " +
            "triggers by virtue of the internally programmed EnableKey value (see TestEventTrigger) being set to " +
            "a non-zero value. This attribute can be used by Administrators to detect if a device was " +
            "inadvertently commissioned with test event trigger mode enabled, and take appropriate action (e.g. " +
            "warn the user and/or offer to remove all fabrics on the Node).",

        xref: { document: "core", section: "11.12.6.9" }
    }),

    Attribute({ name: "DoNotUse", id: 0x9, conformance: "X", xref: { document: "core", section: "11.12.6" } }),

    Event(
        {
            name: "HardwareFaultChange", id: 0x0, access: "V", conformance: "O", priority: "critical",
            details: "The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently " +
                "detected by the Node.",
            xref: { document: "core", section: "11.12.8.1" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 11",
                details: "This field shall represent the set of faults currently detected, as per HardwareFaultEnum.",
                xref: { document: "core", section: "11.12.8.1.1" }
            },
            Field({ name: "entry", type: "HardwareFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 11",
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "HardwareFaultEnum.",
                xref: { document: "core", section: "11.12.8.1.2" }
            },

            Field({ name: "entry", type: "HardwareFaultEnum" })
        )
    ),

    Event(
        {
            name: "RadioFaultChange", id: 0x1, access: "V", conformance: "O", priority: "critical",
            details: "The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by " +
                "the Node.",
            xref: { document: "core", section: "11.12.8.2" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                details: "This field shall represent the set of faults currently detected, as per RadioFaultEnum.",
                xref: { document: "core", section: "11.12.8.2.1" }
            },
            Field({ name: "entry", type: "RadioFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 7",
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "RadioFaultEnum.",
                xref: { document: "core", section: "11.12.8.2.2" }
            },

            Field({ name: "entry", type: "RadioFaultEnum" })
        )
    ),

    Event(
        {
            name: "NetworkFaultChange", id: 0x2, access: "V", conformance: "O", priority: "critical",
            details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected " +
                "by the Node.",
            xref: { document: "core", section: "11.12.8.3" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                details: "This field shall represent the set of faults currently detected, as per NetworkFaultEnum.",
                xref: { document: "core", section: "11.12.8.3.1" }
            },
            Field({ name: "entry", type: "NetworkFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "NetworkFaultEnum.",
                xref: { document: "core", section: "11.12.8.3.2" }
            },

            Field({ name: "entry", type: "NetworkFaultEnum" })
        )
    ),

    Event(
        {
            name: "BootReason", id: 0x3, access: "V", conformance: "M", priority: "critical",
            details: "The BootReason Event shall indicate the reason that caused the device to start-up.",
            xref: { document: "core", section: "11.12.8.4" }
        },
        Field({
            name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M",
            details: "This field shall contain the reason for this BootReason event.",
            xref: { document: "core", section: "11.12.8.4.1" }
        })
    ),

    Command(
        {
            name: "TestEventTrigger", id: 0x0, access: "M", conformance: "M", direction: "request",
            response: "status",

            details: "This command shall be supported to provide a means for certification tests to trigger some test- " +
                "plan-specific events, necessary to assist in automation of device interactions for some " +
                "certification test cases. This command shall NOT cause any changes to the state of the device that " +
                "persist after the last fabric is removed." +
                "\n" +
                "The fields for the TestEventTrigger command are as follows:",

            xref: { document: "core", section: "11.12.7.1" }
        },

        Field({
            name: "EnableKey", id: 0x0, type: "octstr", conformance: "M", constraint: "16",

            details: "The EnableKey is a 128 bit value provided by the client in this command, which needs to match a " +
                "value chosen by the manufacturer and configured on the server using manufacturer-specific means, " +
                "such as pre-provisioning. The value of all zeroes is reserved to indicate that no EnableKey is set. " +
                "Therefore, if the EnableKey field is received with all zeroes, this command shall FAIL with a " +
                "response status of CONSTRAINT_ERROR." +
                "\n" +
                "The EnableKey SHOULD be unique per exact set of devices going to a certification test." +
                "\n" +
                "Devices not targeted towards going to a certification test event shall NOT have a non-zero EnableKey " +
                "value configured, so that only devices in test environments are responsive to this command." +
                "\n" +
                "In order to prevent unwittingly actuating a particular trigger, this command shall respond with a " +
                "response status of CONSTRAINT_ERROR if the EnableKey field does not match the a-priori value " +
                "configured on the device.",

            xref: { document: "core", section: "11.12.7.1.1" }
        }),

        Field({
            name: "EventTrigger", id: 0x1, type: "uint64", conformance: "M",

            details: "This field shall indicate the test or test mode which the client wants to trigger." +
                "\n" +
                "The expected side-effects of EventTrigger values are out of scope of this specification and will be " +
                "described within appropriate certification test literature provided to manufacturers by the " +
                "Connectivity Standards Alliance, in conjunction with certification test cases documentation." +
                "\n" +
                "Values of EventTrigger in the range 0xFFFF_FFFF_0000_0000 through 0xFFFF_FFFF_FFFF_FFFF are reserved " +
                "for testing use by manufacturers and will not appear in CSA certification test literature." +
                "\n" +
                "If the value of EventTrigger received is not supported by the receiving Node, this command shall" +
                "\n" +
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

            xref: { document: "core", section: "11.12.7.1.2" }
        })
    ),

    Command({
        name: "TimeSnapshot", id: 0x1, access: "O", conformance: "M", direction: "request",
        response: "TimeSnapshotResponse",

        details: "This command may be used by a client to obtain a correlated view of both System Time, and, if " +
            "currently synchronized and supported, \"wall clock time\" of the server. This can help clients " +
            "establish time correlation between their concept of time and the server’s concept of time. This is " +
            "especially useful when processing event histories where some events only contain System Time." +
            "\n" +
            "Upon command invocation, the server shall respond with a TimeSnapshotResponse.",

        xref: { document: "core", section: "11.12.7.2" }
    }),

    Command(
        {
            name: "TimeSnapshotResponse", id: 0x2, conformance: "M", direction: "response",

            details: "This command shall be generated in response to a TimeSnapshot command." +
                "\n" +
                "When generating this response, all fields shall be gathered as close together in time as possible, " +
                "so that the time jitter between the values is minimized." +
                "\n" +
                "If the Time Synchronization cluster is supported by the node, the PosixTimeMs field shall NOT be " +
                "null unless the UTCTime attribute in the Time Synchronization cluster is also null.",

            xref: { document: "core", section: "11.12.7.3" }
        },

        Field({
            name: "SystemTimeMs", id: 0x0, type: "systime-ms", conformance: "M",
            details: "This shall indicate the current System Time in milliseconds (type system-ms), with the value taken " +
                "at the time of processing of the TimeSnapshot command that generated this response." +
                "\n" +
                "The value shall be taken from the same clock which populates the Timestamp field in events when " +
                "using System Time for the field.",
            xref: { document: "core", section: "11.12.7.3.1" }
        }),

        Field({
            name: "PosixTimeMs", id: 0x1, type: "posix-ms", conformance: "M", default: null, quality: "X",

            details: "This shall indicate the current time in POSIX Time in milliseconds, with the value taken from the " +
                "same source that could populate the Timestamp field of events. This value shall only be null when " +
                "any the following are true:" +
                "\n" +
                "  • The node doesn’t support the Time Synchronization cluster." +
                "\n" +
                "  • The node’s Time Synchronization cluster instance’s UTCTime attribute is null.",

            xref: { document: "core", section: "11.12.7.3.2" }
        })
    ),

    Command(
        {
            name: "PayloadTestRequest", id: 0x3, access: "M", conformance: "DMTEST", direction: "request",
            response: "PayloadTestResponse",

            details: "This command provides a means for certification tests or manufacturer’s internal tests to validate " +
                "particular command handling and encoding constraints by generating a response of a given size." +
                "\n" +
                "This command shall use the same EnableKey behavior as the TestEventTrigger command, whereby " +
                "processing of the command is only enabled when the TestEventTriggersEnabled field is true, which " +
                "shall NOT be true outside of certification testing or manufacturer’s internal tests." +
                "\n" +
                "The fields for the PayloadTestRequest command are as follows:",

            xref: { document: "core", section: "11.12.7.4" }
        },

        Field({
            name: "EnableKey", id: 0x0, type: "octstr", conformance: "M", constraint: "16",
            details: "This field shall have the same meaning and usage as the TestEventTrigger EnableKey field.",
            xref: { document: "core", section: "11.12.7.4.1" }
        }),
        Field({
            name: "Value", id: 0x1, type: "uint8", conformance: "M",
            details: "This field shall indicate the value to use in every byte of the PayloadTestResponse’s Payload field.",
            xref: { document: "core", section: "11.12.7.4.2" }
        }),

        Field({
            name: "Count", id: 0x2, type: "uint16", conformance: "M", constraint: "max 2048",

            details: "This field shall indicate the number of times to repeat the Value in the PayloadTestResponse’s " +
                "Payload field." +
                "\n" +
                "Effect upon receipt" +
                "\n" +
                "This command shall respond with a response status of CONSTRAINT_ERROR if either:" +
                "\n" +
                "  • The EnableKey field does not match the a-priori value configured on the device." +
                "\n" +
                "  • The TestEventTriggersEnabled field is currently false." +
                "\n" +
                "Otherwise, the server shall respond with a PayloadTestResponse command with a Payload field value " +
                "containing Count instances of the Value byte. If the response is too large to send, the server shall " +
                "fail the command and respond with a response status of RESOURCE_EXHAUSTED." +
                "\n" +
                "For example:" +
                "\n" +
                "  • If Value is 0x55 and the Count is zero, then the PayloadTestResponse would have the Payload " +
                "    field set to an empty octet string." +
                "\n" +
                "  • If Value is 0xA5 and the Count is 10, the PayloadTestResponse would have the Payload field set" +
                "\n" +
                "to a content whose hexadecimal representation would be A5A5A5A5A5A5A5A5A5A5, and base64 " +
                "representation would be paWlpaWlpaWlpQ==.",

            xref: { document: "core", section: "11.12.7.4.3" }
        })
    ),

    Command(
        {
            name: "PayloadTestResponse", id: 0x4, conformance: "DMTEST", direction: "response",
            details: "This command is sent by the server on receipt of the PayloadTestRequest command.",
            xref: { document: "core", section: "11.12.7.5" }
        },
        Field({
            name: "Payload", id: 0x0, type: "octstr", conformance: "M", constraint: "max 2048",
            details: "This field shall contain the computed response of the PayloadTestRequest command.",
            xref: { document: "core", section: "11.12.7.5.1" }
        })
    ),

    Datatype(
        { name: "HardwareFaultEnum", type: "enum8", xref: { document: "core", section: "11.12.5.1" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node has encountered an unspecified fault."
        }),
        Field({
            name: "Radio", id: 0x1, conformance: "O",
            description: "The Node has encountered a fault with at least one of its radios."
        }),
        Field({
            name: "Sensor", id: 0x2, conformance: "O",
            description: "The Node has encountered a fault with at least one of its sensors."
        }),
        Field({
            name: "ResettableOverTemp", id: 0x3, conformance: "O",
            description: "The Node has encountered an over-temperature fault that is resettable."
        }),
        Field({
            name: "NonResettableOverTemp", id: 0x4, conformance: "O",
            description: "The Node has encountered an over-temperature fault that is not resettable."
        }),
        Field({
            name: "PowerSource", id: 0x5, conformance: "O",
            description: "The Node has encountered a fault with at least one of its power sources."
        }),
        Field({
            name: "VisualDisplayFault", id: 0x6, conformance: "O",
            description: "The Node has encountered a fault with at least one of its visual displays."
        }),
        Field({
            name: "AudioOutputFault", id: 0x7, conformance: "O",
            description: "The Node has encountered a fault with at least one of its audio outputs."
        }),
        Field({
            name: "UserInterfaceFault", id: 0x8, conformance: "O",
            description: "The Node has encountered a fault with at least one of its user interfaces."
        }),
        Field({
            name: "NonVolatileMemoryError", id: 0x9, conformance: "O",
            description: "The Node has encountered a fault with its non-volatile memory."
        }),
        Field({
            name: "TamperDetected", id: 0xa, conformance: "O",
            description: "The Node has encountered disallowed physical tampering."
        })
    ),

    Datatype(
        { name: "RadioFaultEnum", type: "enum8", xref: { document: "core", section: "11.12.5.2" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node has encountered an unspecified radio fault."
        }),
        Field({
            name: "WiFiFault", id: 0x1, conformance: "O",
            description: "The Node has encountered a fault with its Wi-Fi radio."
        }),
        Field({
            name: "CellularFault", id: 0x2, conformance: "O",
            description: "The Node has encountered a fault with its cellular radio."
        }),
        Field({
            name: "ThreadFault", id: 0x3, conformance: "O",
            description: "The Node has encountered a fault with its802.15.4 radio."
        }),
        Field({
            name: "NfcFault", id: 0x4, conformance: "O",
            description: "The Node has encountered a fault with its NFC radio."
        }),
        Field({
            name: "BleFault", id: 0x5, conformance: "O",
            description: "The Node has encountered a fault with its BLE radio."
        }),
        Field({
            name: "EthernetFault", id: 0x6, conformance: "O",
            description: "The Node has encountered a fault with its Ethernet controller."
        })
    ),

    Datatype(
        { name: "NetworkFaultEnum", type: "enum8", xref: { document: "core", section: "11.12.5.3" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node has encountered an unspecified fault."
        }),
        Field({
            name: "HardwareFailure", id: 0x1, conformance: "O",
            description: "The Node has encountered a network fault as a result of a hardware failure."
        }),
        Field({
            name: "NetworkJammed", id: 0x2, conformance: "O",
            description: "The Node has encountered a network fault as a result of a jammed network."
        }),
        Field({
            name: "ConnectionFailed", id: 0x3, conformance: "O",
            description: "The Node has encountered a network fault as a result of a failure to establish a connection."
        })
    ),

    Datatype(
        { name: "InterfaceTypeEnum", type: "enum8", xref: { document: "core", section: "11.12.5.4" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "Indicates an interface of an unspecified type."
        }),
        Field({ name: "WiFi", id: 0x1, conformance: "O", description: "Indicates a Wi-Fi interface." }),
        Field({ name: "Ethernet", id: 0x2, conformance: "O", description: "Indicates a Ethernet interface." }),
        Field({ name: "Cellular", id: 0x3, conformance: "O", description: "Indicates a Cellular interface." }),
        Field({ name: "Thread", id: 0x4, conformance: "O", description: "Indicates a Thread interface." })
    ),

    Datatype(
        { name: "BootReasonEnum", type: "enum8", xref: { document: "core", section: "11.12.5.5" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node is unable to identify the Power-On reason as one of the other provided enumeration values."
        }),
        Field({
            name: "PowerOnReboot", id: 0x1, conformance: "M",
            description: "The Node has booted as the result of physical interaction with the device resulting in a reboot."
        }),
        Field({
            name: "BrownOutReset", id: 0x2, conformance: "M",
            description: "The Node has rebooted as the result of a brown-out of the Node’s power supply."
        }),
        Field({
            name: "SoftwareWatchdogReset", id: 0x3, conformance: "M",
            description: "The Node has rebooted as the result of a software watchdog timer."
        }),
        Field({
            name: "HardwareWatchdogReset", id: 0x4, conformance: "M",
            description: "The Node has rebooted as the result of a hardware watchdog timer."
        }),
        Field({
            name: "SoftwareUpdateCompleted", id: 0x5, conformance: "M",
            description: "The Node has rebooted as the result of a completed software update."
        }),
        Field({
            name: "SoftwareReset", id: 0x6, conformance: "M",
            description: "The Node has rebooted as the result of a software initiated reboot."
        })
    ),

    Datatype(
        {
            name: "NetworkInterface", type: "struct",
            details: "This structure describes a network interface supported by the Node, as provided in the " +
                "NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.12.5.6" }
        },

        Field({
            name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall indicate a human-readable (displayable) name for the network interface, that is " +
                "different from all other interfaces.",
            xref: { document: "core", section: "11.12.5.6.1" }
        }),

        Field({
            name: "IsOperational", id: 0x1, type: "bool", conformance: "M",
            details: "This field shall indicate if the Node is currently advertising itself operationally on this network " +
                "interface and is capable of successfully receiving incoming traffic from other Nodes.",
            xref: { document: "core", section: "11.12.5.6.2" }
        }),

        Field({
            name: "OffPremiseServicesReachableIPv4", id: 0x2, type: "bool", conformance: "M", default: null,
            quality: "X",
            details: "This field shall indicate whether the Node is currently able to reach off-premise services it uses " +
                "by utilizing IPv4. The value shall be null if the Node does not use such services or does not know " +
                "whether it can reach them.",
            xref: { document: "core", section: "11.12.5.6.3" }
        }),

        Field({
            name: "OffPremiseServicesReachableIPv6", id: 0x3, type: "bool", conformance: "M", default: null,
            quality: "X",
            details: "This field shall indicate whether the Node is currently able to reach off-premise services it uses " +
                "by utilizing IPv6. The value shall be null if the Node does not use such services or does not know " +
                "whether it can reach them.",
            xref: { document: "core", section: "11.12.5.6.4" }
        }),

        Field({
            name: "HardwareAddress", id: 0x4, type: "hwadr", conformance: "M",
            details: "This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network" +
                "\n" +
                "interface and contain the current extended MAC address for a 802.15.4 interface. The byte order of " +
                "the octstr shall be in wire byte order. For addresses values less than 64 bits, the first two bytes " +
                "shall be zero.",
            xref: { document: "core", section: "11.12.5.6.5" }
        }),

        Field(
            {
                name: "IPv4Addresses", id: 0x5, type: "list", conformance: "M", constraint: "max 4",
                details: "This field shall provide a list of the IPv4 addresses that are currently assigned to the network " +
                    "interface.",
                xref: { document: "core", section: "11.12.5.6.6" }
            },

            Field({ name: "entry", type: "ipv4adr" })
        ),

        Field(
            {
                name: "IPv6Addresses", id: 0x6, type: "list", conformance: "M", constraint: "max 8",
                details: "This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the " +
                    "network interface. This list shall include the Node’s link-local address and SHOULD include any " +
                    "assigned GUA and ULA addresses. This list shall NOT include any multicast group addresses to which " +
                    "the Node is subscribed.",
                xref: { document: "core", section: "11.12.5.6.7" }
            },

            Field({ name: "entry", type: "ipv6adr" })
        ),

        Field({
            name: "Type", id: 0x7, type: "InterfaceTypeEnum", conformance: "M",
            details: "This field shall indicate the type of the interface using the InterfaceTypeEnum.",
            xref: { document: "core", section: "11.12.5.6.8" }
        })
    )
);

MatterDefinition.children.push(GeneralDiagnostics);
