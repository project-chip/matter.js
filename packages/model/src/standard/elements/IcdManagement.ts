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

export const IcdManagement = Cluster(
    {
        name: "IcdManagement", id: 0x46, classification: "node", pics: "ICDM",
        details: "ICD Management Cluster enables configuration of the ICD’s behavior and ensuring that listed clients " +
            "can be notified when an intermittently connected device, ICD, is available for communication." +
            "\n" +
            "The cluster implements the requirements of the Check-In Protocol that enables the ICD Check-In use " +
            "case.",
        xref: { document: "core", section: "9.17" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "9.17.4" } },

        Field({
            name: "CIP", conformance: "LITS, O", constraint: "0", description: "CheckInProtocolSupport",
            details: "When this feature is supported, the device shall support all the associated commands and attributes " +
                "to properly support the Check-In Protocol.",
            xref: { document: "core", section: "9.17.4.1" }
        }),

        Field({
            name: "UAT", conformance: "LITS, O", constraint: "1", description: "UserActiveModeTrigger",
            details: "This feature is supported if and only if the device has a user active mode trigger.",
            xref: { document: "core", section: "9.17.4.2" }
        }),
        Field({
            name: "LITS", conformance: "O", constraint: "2", description: "LongIdleTimeSupport",
            details: "This feature is supported if and only the device is a Long Idle Time ICD.",
            xref: { document: "core", section: "9.17.4.3" }
        }),

        Field({
            name: "DSLS", conformance: "[LITS]", constraint: "3", description: "DynamicSitLitSupport",
            details: "This feature is supported if and only if the device can switch between SIT and LIT operating modes " +
                "even if it has a valid registered client. See the dynamic SIT / LIT operating mode switching for " +
                "more details.",
            xref: { document: "core", section: "9.17.4.4" }
        })
    ),

    Attribute({
        name: "IdleModeDuration", id: 0x0, type: "uint32", access: "R V", conformance: "M",
        constraint: "1 to 64800", default: 1, quality: "F",
        details: "Indicates the maximum interval in seconds the server can stay in idle mode. The IdleModeDuration " +
            "shall NOT be smaller than the ActiveModeDuration.",
        xref: { document: "core", section: "9.17.6.1" }
    }),

    Attribute({
        name: "ActiveModeDuration", id: 0x1, type: "uint32", access: "R V", conformance: "M", default: 300,
        quality: "F",
        details: "Indicates the minimum interval in milliseconds the server typically will stay in active mode after " +
            "initial transition out of idle mode. The ActiveModeDuration does not include the " +
            "ActiveModeThreshold.",
        xref: { document: "core", section: "9.17.6.2" }
    }),

    Attribute({
        name: "ActiveModeThreshold", id: 0x2, type: "uint16", access: "R V", conformance: "M", default: 300,
        quality: "F",
        details: "Indicates the minimum amount of time in milliseconds the server typically will stay active after " +
            "network activity when in active mode.",
        xref: { document: "core", section: "9.17.6.3" }
    }),

    Attribute(
        {
            name: "RegisteredClients", id: 0x3, type: "list", access: "R F A", conformance: "CIP",
            constraint: "desc", default: [], quality: "N",
            details: "This attribute shall contain all clients registered to receive notification if their subscription is " +
                "lost. The maximum number of entries that can be in the list shall be ClientsSupportedPerFabric for " +
                "each fabric supported on the server, as indicated by the value of the SupportedFabrics attribute in " +
                "the Operational Credentials cluster.",
            xref: { document: "core", section: "9.17.6.4" }
        },

        Field({ name: "entry", type: "MonitoringRegistrationStruct" })
    ),

    Attribute({
        name: "IcdCounter", id: 0x4, type: "uint32", access: "R A", conformance: "CIP", default: 0,
        quality: "N C",
        details: "This attribute returns the value of the ICD Counter.",
        xref: { document: "core", section: "9.17.6.5" }
    }),

    Attribute({
        name: "ClientsSupportedPerFabric", id: 0x5, type: "uint16", access: "R V", conformance: "CIP",
        constraint: "min 1", default: 1, quality: "F",
        details: "Indicates the maximum number of entries that the server is able to store for each fabric in the " +
            "RegisteredClients attribute.",
        xref: { document: "core", section: "9.17.6.6" }
    }),

    Attribute({
        name: "UserActiveModeTriggerHint", id: 0x6, type: "UserActiveModeTriggerBitmap", access: "R V",
        conformance: "UAT", constraint: "desc", default: 0, quality: "F",

        details: "Indicates which user action(s) will trigger the ICD to switch to Active mode. If the attribute " +
            "indicates support for a trigger that is dependent on the UserActiveModeTriggerInstruction in the " +
            "UserActiveModeTriggerHint table, the UserActiveModeTriggerInstruction attribute shall be implemented " +
            "and shall provide the required information, unless specified otherwise in the requirement column of " +
            "the UserActiveModeTriggerHint table." +
            "\n" +
            "ActuateSensorLightsBlink, ResetButtonLightsBlink and SetupButtonLightsBlink (i.e. bits 7, 9 and 14) " +
            "have a dependency on the UserActiveModeTriggerInstruction attribute but do not require the attribute " +
            "to be present." +
            "\n" +
            "### An ICD can indicate multiple ways of being put into Active Mode by setting multiple bits in the " +
            "bitmap at the same time. However, a device shall NOT set more than one bit which has a dependency on " +
            "the UserActiveModeTriggerInstruction attribute.",

        xref: { document: "core", section: "9.17.6.7" }
    }),

    Attribute({
        name: "UserActiveModeTriggerInstruction", id: 0x7, type: "string", access: "R V",
        conformance: "desc", constraint: "max 128", default: "", quality: "F",

        details: "The meaning of the attribute is dependent upon the UserActiveModeTriggerHint attribute value, and " +
            "the conformance is in indicated in the \"dependency\" column in UserActiveModeTriggerHint table. The " +
            "UserActiveModeTriggerInstruction attribute may give additional information on how to transition the " +
            "device to Active Mode. If the attribute is present, the value shall be encoded as a valid UTF-8 " +
            "string with a maximum length of 128 bytes. If the UserActiveModeTriggerHint has the " +
            "ActuateSensorSeconds, ActuateSensorTimes, ResetButtonSeconds, ResetButtonTimes, SetupButtonSeconds " +
            "or SetupButtonTimes set, the string shall consist solely of an encoding of N as a decimal unsigned " +
            "integer using the ASCII digits 0-9, and without leading zeros." +
            "\n" +
            "For example, given UserActiveModeTriggerHint=\"2048\", ResetButtonTimes is set which indicates \"Press " +
            "Reset Button for N seconds\". Therefore, a value of UserActiveModeTriggerInstruction=\"10\" would " +
            "indicate that N is 10 in that context." +
            "\n" +
            "When CustomInstruction is set by the UserActiveModeTriggerHint attribute, indicating presence of a " +
            "custom string, the ICD SHOULD perform localization (translation to user’s preferred language, as " +
            "indicated in the Device’s currently configured locale). The Custom Instruction option SHOULD NOT be " +
            "used by an ICD that does not have knowledge of the user’s language preference." +
            "\n" +
            "When the UserActiveModeTriggerHint key indicates a light to blink (ActuateSensorLightsBlink, " +
            "ResetButtonLightsBlink or SetupButtonLightsBlink), information on color of light may be made " +
            "available via the UserActiveModeTriggerInstruction attribute. When using such color indication in " +
            "the UserActiveModeTriggerInstruction attribute, the string shall consist of exactly 6 hexadecimal " +
            "digits using the ASCII characters 0-F and encoding the RGB color value as used in HTML encodings.",

        xref: { document: "core", section: "9.17.6.8" }
    }),

    Attribute({
        name: "OperatingMode", id: 0x8, type: "OperatingModeEnum", access: "R V", conformance: "LITS",
        details: "Indicates the operating mode of the ICD as specified in the OperatingModeEnum." +
            "\n" +
            "  • If the ICD is operating as a LIT ICD, OperatingMode shall be LIT." +
            "\n" +
            "  • If the ICD is operating as a SIT ICD, OperatingMode shall be SIT.",
        xref: { document: "core", section: "9.17.6.9" }
    }),

    Attribute({
        name: "MaximumCheckInBackoff", id: 0x9, type: "uint32", access: "R V", conformance: "CIP",
        constraint: "idleModeDuration to 64800", default: 1, quality: "F",
        details: "Indicates the maximum time in seconds between two Check-In messages when back-off is active. The " +
            "MaximumCheckInBackoff shall NOT be smaller than the IdleModeDuration." +
            "\n" +
            "If the MaximumCheckInBackoff is equal to the IdleModeDuration, it means the ICD does notback- off.",
        xref: { document: "core", section: "9.17.6.10" }
    }),

    Command(
        {
            name: "RegisterClient", id: 0x0, access: "F M", conformance: "CIP", direction: "request",
            response: "RegisterClientResponse",
            details: "This command allows a client to register itself with the ICD to be notified when the device is " +
                "available for communication.",
            xref: { document: "core", section: "9.17.7.1" }
        },

        Field({
            name: "CheckInNodeId", id: 0x0, type: "node-id", conformance: "M",
            details: "This field shall provide the node ID to which a Check-In message will be sent if there are no active " +
                "subscriptions matching MonitoredSubject.",
            xref: { document: "core", section: "9.17.7.1.1" }
        }),

        Field({
            name: "MonitoredSubject", id: 0x1, type: "subject-id", conformance: "M",
            details: "This field shall provide the monitored subject ID.",
            xref: { document: "core", section: "9.17.7.1.2" }
        }),

        Field({
            name: "Key", id: 0x2, type: "octstr", conformance: "M", constraint: "16",
            details: "This field shall provide the shared secret between the client and the ICD to encrypt the Check-In " +
                "message.",
            xref: { document: "core", section: "9.17.7.1.3" }
        }),

        Field({
            name: "VerificationKey", id: 0x3, type: "octstr", conformance: "O", constraint: "16",

            details: "This field shall provide the verification key. The verification key represents the key already " +
                "stored on the server. The verification key provided in this field shall be used by the server to " +
                "guarantee that a client with manage permissions can only modify entries that contain a Key equal to " +
                "the verification key. The verification key shall be provided for clients with manage permissions. " +
                "The verification key SHOULD NOT be provided by clients with administrator permissions for the server " +
                "cluster. The verification key shall be ignored by the server if it is provided by a client with " +
                "administrator permissions for the server cluster.",

            xref: { document: "core", section: "9.17.7.1.4" }
        }),

        Field({
            name: "ClientType", id: 0x4, type: "ClientTypeEnum", conformance: "M",
            details: "This field shall provide the client type of the client registering.",
            xref: { document: "core", section: "9.17.7.1.5" }
        })
    ),

    Command(
        {
            name: "RegisterClientResponse", id: 0x1, conformance: "CIP", direction: "response",
            details: "This command shall be sent by the ICD Management Cluster server in response to a successful " +
                "RegisterClient command.",
            xref: { document: "core", section: "9.17.7.2" }
        },

        Field({ name: "IcdCounter", id: 0x0, type: "uint32", conformance: "M" })
    ),

    Command(
        {
            name: "UnregisterClient", id: 0x2, access: "F M", conformance: "CIP", direction: "request",
            response: "status",
            details: "This command allows a client to unregister itself with the ICD. Example: a client that is leaving " +
                "the network (e.g. running on a phone which is leaving the home) can (and should) remove its " +
                "subscriptions and send this UnregisterClient command before leaving to prevent the burden on the ICD " +
                "of an absent client.",
            xref: { document: "core", section: "9.17.7.3" }
        },

        Field({
            name: "CheckInNodeId", id: 0x0, type: "node-id", conformance: "M",
            details: "This field shall provide the registered client node ID to remove from storage.",
            xref: { document: "core", section: "9.17.7.3.1" }
        }),

        Field({
            name: "VerificationKey", id: 0x1, type: "octstr", conformance: "O", constraint: "16",

            details: "This field shall provide the verification key associated with the CheckInNodeID to remove from " +
                "storage. The verification key represents the key already stored on the server. The verification key " +
                "provided in this field shall be used by the server to guarantee that a client with manage " +
                "permissions can only remove entries that contain a Key equal to the stored key. The verification key " +
                "shall be provided for clients with manage permissions. The verification key SHOULD NOT be provided " +
                "by clients with administrator permissions for the server cluster. The verification key shall be " +
                "ignored by the server if it is provided by a client with administrator permissions for the server " +
                "cluster.",

            xref: { document: "core", section: "9.17.7.3.2" }
        })
    ),

    Command(
        {
            name: "StayActiveRequest", id: 0x3, access: "O", conformance: "LITS, O", direction: "request",
            response: "StayActiveResponse",

            details: "This command allows a client to request that the server stays in active mode for at least a given " +
                "time duration (in milliseconds) from when this command is received." +
                "\n" +
                "This StayActiveDuration may be longer than the ActiveModeThreshold value and would, typically, be " +
                "used by the client to request the server to stay active and responsive for this period to allow a " +
                "sequence of message exchanges during that period. The client may slightly overestimate the duration " +
                "it wants the ICD to be active for, in order to account for network delays.",

            xref: { document: "core", section: "9.17.7.4" }
        },

        Field({ name: "StayActiveDuration", id: 0x0, type: "uint32", conformance: "M" })
    ),

    Command(
        {
            name: "StayActiveResponse", id: 0x4, conformance: "LITS, O", direction: "response",
            details: "This message shall be sent by the ICD in response to the StayActiveRequest command and shall contain " +
                "the computed duration (in milliseconds) that the ICD intends to stay active for.",
            xref: { document: "core", section: "9.17.7.5" }
        },

        Field({
            name: "PromisedActiveDuration", id: 0x0, type: "uint32", conformance: "M", constraint: "desc",

            details: "This field shall provide the actual duration that the ICD server can stay active from the time it " +
                "receives the StayActiveRequest command." +
                "\n" +
                "### Minimum Value for PromisedActiveDuration" +
                "\n" +
                "The minimum value of the PromisedActiveDuration field shall be equal to either 30000 milliseconds or " +
                "StayActiveDuration (from the received StayActiveRequest command), whichever is smaller.",

            xref: { document: "core", section: "9.17.7.5.1" }
        })
    ),

    Datatype(
        {
            name: "UserActiveModeTriggerBitmap", type: "map32",
            details: "See the UserActiveModeTriggerHint table for requirements associated to each bit.",
            xref: { document: "core", section: "9.17.5.1" }
        },
        Field({ name: "PowerCycle", constraint: "0", description: "Power Cycle to transition the device to ActiveMode" }),
        Field({
            name: "SettingsMenu", constraint: "1",
            description: "Settings menu on the device informs how to transition the device to ActiveMode"
        }),
        Field({
            name: "CustomInstruction", constraint: "2",
            description: "Custom Instruction on how to transition the device to ActiveMode"
        }),
        Field({
            name: "DeviceManual", constraint: "3",
            description: "Device Manual informs how to transition the device to ActiveMode"
        }),
        Field({
            name: "ActuateSensor", constraint: "4",
            description: "Actuate Sensor to transition the device to ActiveMode"
        }),
        Field({
            name: "ActuateSensorSeconds", constraint: "5",
            description: "Actuate Sensor for N seconds to transition the device to ActiveMode"
        }),
        Field({
            name: "ActuateSensorTimes", constraint: "6",
            description: "Actuate Sensor N times to transition the device to ActiveMode"
        }),
        Field({
            name: "ActuateSensorLightsBlink", constraint: "7",
            description: "Actuate Sensor until light blinks to transition the device to ActiveMode"
        }),
        Field({
            name: "ResetButton", constraint: "8",
            description: "Press Reset Button to transition the device to ActiveMode"
        }),
        Field({
            name: "ResetButtonLightsBlink", constraint: "9",
            description: "Press Reset Button until light blinks to transition the device to ActiveMode"
        }),
        Field({
            name: "ResetButtonSeconds", constraint: "10",
            description: "Press Reset Button for N seconds to transition the device to ActiveMode"
        }),
        Field({
            name: "ResetButtonTimes", constraint: "11",
            description: "Press Reset Button N times to transition the device to ActiveMode"
        }),
        Field({
            name: "SetupButton", constraint: "12",
            description: "Press Setup Button to transition the device to ActiveMode"
        }),
        Field({
            name: "SetupButtonSeconds", constraint: "13",
            description: "Press Setup Button for N seconds to transition the device to ActiveMode"
        }),
        Field({
            name: "SetupButtonLightsBlink", constraint: "14",
            description: "Press Setup Button until light blinks to transition the device to ActiveMode"
        }),
        Field({
            name: "SetupButtonTimes", constraint: "15",
            description: "Press Setup Button N times to transition the device to ActiveMode"
        }),
        Field({
            name: "AppDefinedButton", constraint: "16",
            description: "Press the N Button to transition the device to ActiveMode"
        })
    ),

    Datatype(
        { name: "ClientTypeEnum", type: "enum8", xref: { document: "core", section: "9.17.5.1.1" } },
        Field({
            name: "Permanent", id: 0x0, conformance: "M",
            description: "The client is typically resident, always-on, fixed infrastructure in the home."
        }),
        Field({
            name: "Ephemeral", id: 0x1, conformance: "M",
            description: "The client is mobile or non-resident or not always-on and may not always be available in the home."
        })
    ),

    Datatype(
        { name: "OperatingModeEnum", type: "enum8", xref: { document: "core", section: "9.17.5.2" } },
        Field({ name: "Sit", id: 0x0, conformance: "M", description: "ICD is operating as a Short Idle Time ICD." }),
        Field({ name: "Lit", id: 0x1, conformance: "M", description: "ICD is operating as a Long Idle Time ICD." })
    ),

    Datatype(
        { name: "MonitoringRegistrationStruct", type: "struct", xref: { document: "core", section: "9.17.5.3" } },

        Field({
            name: "CheckInNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M", quality: "N",
            details: "This field shall indicate the NodeID of the Node to which Check-In messages will be sent when the " +
                "MonitoredSubject is not subscribed.",
            xref: { document: "core", section: "9.17.5.3.1" }
        }),

        Field({
            name: "MonitoredSubject", id: 0x2, type: "subject-id", access: "S", conformance: "M", quality: "N",

            details: "This field shall indicate the monitored Subject ID. This field shall be used to determine if a " +
                "particular client has an active subscription for the given entry. The MonitoredSubject, when it is a " +
                "NodeID, may be the same as the CheckInNodeID. The MonitoredSubject gives the registering client the " +
                "flexibility of having a different CheckInNodeID from the MonitoredSubject. A subscription shall " +
                "count as an active subscription for this entry if:" +
                "\n" +
                "  • It is on the associated fabric of this entry, and" +
                "\n" +
                "  • The subject of this entry matches the ISD of the SubscriptionRequest message that created the " +
                "    subscription. Matching shall be determined using the subject_matches function defined in the " +
                "    Access Control Privilege Granting Algorithm." +
                "\n" +
                "For example, if the MonitoredSubject is Node ID 0x1111_2222_3333_AAAA, and one of the subscribers to " +
                "the server on the entry’s associated fabric bears that Node ID, then the entry matches." +
                "\n" +
                "Another example is if the MonitoredSubject has the value 0xFFFF_FFFD_AA12_0002, and one of the" +
                "\n" +
                "subscribers to the server on the entry’s associated fabric bears the CASE Authenticated TAG value " +
                "0xAA12 and the version 0x0002 or higher within its NOC, then the entry matches.",

            xref: { document: "core", section: "9.17.5.3.2" }
        }),

        Field({ name: "Key", id: 0x3, access: "F", conformance: "D" }),

        Field({
            name: "ClientType", id: 0x4, type: "ClientTypeEnum", access: "S", conformance: "M", default: 0,
            quality: "N",
            details: "This field shall indicate the client’s type to inform the ICD of the availability for communication " +
                "of the client.",
            xref: { document: "core", section: "9.17.5.4" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(IcdManagement);
