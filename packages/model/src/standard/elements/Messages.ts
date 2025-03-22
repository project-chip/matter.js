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

export const Messages = Cluster(
    {
        name: "Messages", id: 0x97, classification: "application", pics: "MESS",
        details: "This cluster provides an interface for passing messages to be presented by a device.",
        xref: { document: "cluster", section: "1.16" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.16.4" } },

        Field({
            name: "CONF", conformance: "O", constraint: "0", description: "ReceivedConfirmation",
            details: "This feature shall indicate that the device can get confirmation from a user that the message was " +
                "received.",
            xref: { document: "cluster", section: "1.16.4.1" }
        }),

        Field({
            name: "RESP", conformance: "[CONF]", constraint: "1", description: "ConfirmationResponse",
            details: "This feature shall indicate that the device is capable of presenting a list of responses to the user " +
                "and recording the user’s choice of response.",
            xref: { document: "cluster", section: "1.16.4.2" }
        }),

        Field({
            name: "RPLY", conformance: "[CONF]", constraint: "2", description: "ConfirmationReply",
            details: "This feature shall indicate that the device is capable of collecting a free-form text response to a " +
                "message.",
            xref: { document: "cluster", section: "1.16.4.3" }
        }),

        Field({
            name: "PROT", conformance: "O", constraint: "3", description: "ProtectedMessages",
            details: "This feature shall indicate that the device is capable of requiring the user to authenticate before " +
                "viewing a message; e.g. entering a PIN or password before viewing a message with billing " +
                "information.",
            xref: { document: "cluster", section: "1.16.4.4" }
        })
    ),

    Attribute(
        {
            name: "Messages", id: 0x0, type: "list", access: "R F V", conformance: "M", constraint: "max 8",
            default: [],
            details: "Indicates a list of queued messages." +
                "\n" +
                "In addition to filtering based upon fabric, to preserve user privacy, the server may further limit " +
                "the set of messages returned in a read request. At minimum, the server shall return to a client " +
                "those messages that the client itself created/submitted.",
            xref: { document: "cluster", section: "1.16.6.1" }
        },

        Field({ name: "entry", type: "MessageStruct" })
    ),

    Attribute(
        {
            name: "ActiveMessageIDs", id: 0x1, type: "list", access: "R V", conformance: "M",
            constraint: "max 8", default: [],
            details: "Indicates a list of the MessageIDs of the Messages currently being presented. If this list is empty, " +
                "no messages are currently being presented." +
                "\n" +
                "This list shall NOT be fabric-scoped; it shall contain MessageIDs for all Messages being presented, " +
                "no matter what fabric the client that queued them is on.",
            xref: { document: "cluster", section: "1.16.6.2" }
        },

        Field({ name: "entry", type: "MessageID" })
    ),

    Event(
        {
            name: "MessageQueued", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when a message is added to the messages attribute.",
            xref: { document: "cluster", section: "1.16.8.1" }
        },
        Field({
            name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
            details: "This field shall indicate the MessageID for newly added message.",
            xref: { document: "cluster", section: "1.16.8.1.1" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        {
            name: "MessagePresented", id: 0x1, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when the message is presented to the user.",
            xref: { document: "cluster", section: "1.16.8.2" }
        },
        Field({
            name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
            details: "This field shall indicate the MessageID for the message being presented.",
            xref: { document: "cluster", section: "1.16.8.2.1" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        {
            name: "MessageComplete", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when the message is confirmed by the user, or when the Duration of the " +
                "message has elapsed without confirmation.",
            xref: { document: "cluster", section: "1.16.8.3" }
        },

        Field({
            name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
            details: "This field shall indicate the MessageID for the message being confirmed.",
            xref: { document: "cluster", section: "1.16.8.3.1" }
        }),

        Field({
            name: "ResponseId", id: 0x1, type: "uint32", access: "S", conformance: "RESP", default: null,
            quality: "X",
            details: "This field shall indicate the MessageResponseID selected by the user. If there was no response " +
                "before the Duration of the message has elapsed, this field shall be null.",
            xref: { document: "cluster", section: "1.16.8.3.2" }
        }),

        Field({
            name: "Reply", id: 0x2, type: "string", access: "S", conformance: "RPLY", constraint: "max 256",
            default: null, quality: "X",
            details: "This field shall indicate a user-provided reply to the message. If there was no reply, or the " +
                "message did not have the ReplyRequired bit set, this field shall be null.",
            xref: { document: "cluster", section: "1.16.8.3.3" }
        }),

        Field({
            name: "FutureMessagesPreference", id: 0x3, type: "FutureMessagePreferenceEnum", access: "S",
            conformance: "M", default: null, quality: "X"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        {
            name: "PresentMessagesRequest", id: 0x0, access: "F O", conformance: "M", direction: "request",
            response: "status",

            details: "Upon receipt, this shall cause the message in the passed fields to be appended to the Messages " +
                "attribute." +
                "\n" +
                "If appending the message would cause the number of messages to be greater than the capacity of the " +
                "list, the device shall NOT append any message to Messages, and shall return a status code of " +
                "RESOURCE_EXHAUSTED." +
                "\n" +
                "When displaying a message in response to this command, an indication (ex. visual) of the origin node " +
                "of the command shall be provided. This could be in the form of a friendly name label which uniquely " +
                "identifies the node to the user. This friendly name label is typically assigned by the Matter Admin " +
                "at the time of commissioning and, when it’s a device, is often editable by the user. It might be a " +
                "combination of a company name and friendly name, for example, ”Acme” or “Acme Streaming Service on " +
                "Alice’s Phone”." +
                "\n" +
                "NOTE" +
                "\n" +
                "It is currently not specified where the friendly name label can be found on the node, meaning that " +
                "clients SHOULD NOT rely on a certain method they happen to observe in a particular server instance, " +
                "since other instances could employ a different method." +
                "\n" +
                "The device SHOULD make it possible for the user to view which nodes have access to this cluster and " +
                "to individually remove privileges for each node.",

            xref: { document: "cluster", section: "1.16.7.1" }
        },

        Field({
            name: "MessageId", id: 0x0, type: "MessageID", conformance: "M",
            details: "This field shall indicate a globally unique ID for this message. See MessageID.",
            xref: { document: "cluster", section: "1.16.7.1.1" }
        }),
        Field({
            name: "Priority", id: 0x1, type: "MessagePriorityEnum", conformance: "M", default: 0,
            details: "This field shall indicate the priority level for this message. See Priority.",
            xref: { document: "cluster", section: "1.16.7.1.2" }
        }),
        Field({
            name: "MessageControl", id: 0x2, type: "MessageControlBitmap", conformance: "M", default: 0,
            details: "This field shall indicate control information related to the message. See MessageControl.",
            xref: { document: "cluster", section: "1.16.7.1.3" }
        }),

        Field({
            name: "StartTime", id: 0x3, type: "epoch-s", conformance: "M", default: 0, quality: "X",
            details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                "null value shall indicate \"now.\" See StartTime.",
            xref: { document: "cluster", section: "1.16.7.1.4" }
        }),

        Field({
            name: "Duration", id: 0x4, type: "uint64", conformance: "M", default: 0, quality: "X",
            details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                "message is available to be presented. A null value shall indicate \"until changed\". See Duration.",
            xref: { document: "cluster", section: "1.16.7.1.5" }
        }),

        Field({
            name: "MessageText", id: 0x5, type: "string", conformance: "M", constraint: "max 256",
            details: "This field shall indicate a string containing the message to be presented. See MessageText.",
            xref: { document: "cluster", section: "1.16.7.1.6" }
        }),

        Field(
            {
                name: "Responses", id: 0x6, type: "list", conformance: "RESP", constraint: "max 4", default: [],

                details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                    "shall have unique values of MessageResponseID." +
                    "\n" +
                    "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide a " +
                    "generic acknowledgement button, e.g. \"OK\"." +
                    "\n" +
                    "If the ResponseRequired bit is not set on the message, this list shall be ignored. See Responses.",

                xref: { document: "cluster", section: "1.16.7.1.7" }
            },

            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        )
    ),

    Command(
        {
            name: "CancelMessagesRequest", id: 0x1, access: "F O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.16.7.2" }
        },

        Field(
            {
                name: "MessageIDs", id: 0x0, type: "list", conformance: "M", constraint: "max 8",

                details: "This field shall indicate the MessageIDs for the messages being cancelled." +
                    "\n" +
                    "Cancelling a message shall cause it to be removed from Messages, cause its MessageID to be removed " +
                    "from ActiveMessageIDs and cause any active presentation of the message to cease." +
                    "\n" +
                    "Message IDs in this command that indicate messages that do not exist in Messages, or that are not " +
                    "scoped to the fabric of the sender, shall be ignored.",

                xref: { document: "cluster", section: "1.16.7.2.1" }
            },

            Field({ name: "entry", type: "MessageID" })
        )
    ),

    Datatype({
        name: "MessageID", type: "octstr", constraint: "16",
        details: "This data type is an octstr of fixed length 16, containing the binary encoding of a UUID as " +
            "specified in RFC 4122.",
        xref: { document: "cluster", section: "1.16.5.1" }
    }),

    Datatype(
        {
            name: "MessageControlBitmap", type: "map16",
            details: "This data type is derived from map16, and indicates control information related to a message.",
            xref: { document: "cluster", section: "1.16.5.2" }
        },

        Field({
            name: "ConfirmationRequired", constraint: "0",
            description: "Message requires confirmation from user",
            details: "This bit shall indicate that the message originator requests a confirmation of receipt by the user. " +
                "If confirmation is required, the device SHOULD present the message until it is either confirmed by " +
                "the user selecting a confirmation option, or the message expires.",
            xref: { document: "cluster", section: "1.16.5.2.1" }
        }),

        Field({
            name: "ResponseRequired", constraint: "1", description: "Message requires response from user",
            details: "This bit shall indicate that a MessagePresented event SHOULD be generated based on the response of " +
                "the user to the message.",
            xref: { document: "cluster", section: "1.16.5.2.2" }
        }),

        Field({
            name: "ReplyMessage", constraint: "2", description: "Message supports reply message from user",
            details: "This bit shall indicate that a free-form user reply is to be included in the confirmation of " +
                "receipt.",
            xref: { document: "cluster", section: "1.16.5.2.3" }
        }),

        Field({
            name: "MessageConfirmed", constraint: "3", description: "Message has already been confirmed",
            details: "This bit shall indicate the current confirmation state of a message, which is useful in the event " +
                "that there are multiple Messages cluster client devices on a network.",
            xref: { document: "cluster", section: "1.16.5.2.4" }
        }),

        Field({
            name: "MessageProtected", constraint: "4", description: "Message required PIN/password protection",
            details: "This bit shall indicate that user authentication (e.g. by password or PIN) is required before " +
                "viewing a message.",
            xref: { document: "cluster", section: "1.16.5.2.5" }
        })
    ),

    Datatype(
        {
            name: "FutureMessagePreferenceEnum", type: "enum8",
            details: "A display device may include this preference in the MessageComplete event as a hint to clients about " +
                "how to handle future similar messages.",
            xref: { document: "cluster", section: "1.16.5.3" }
        },

        Field({ name: "Allowed", id: 0x0, conformance: "M", description: "Similar messages are allowed" }),
        Field({ name: "Increased", id: 0x1, conformance: "M", description: "Similar messages should be sent more often" }),
        Field({ name: "Reduced", id: 0x2, conformance: "M", description: "Similar messages should be sent less often" }),
        Field({ name: "Disallowed", id: 0x3, conformance: "M", description: "Similar messages should not be sent" }),
        Field({ name: "Banned", id: 0x4, conformance: "M", description: "No further messages should be sent" })
    ),

    Datatype(
        {
            name: "MessagePriorityEnum", type: "enum8",
            details: "Priority SHOULD be used to decide which messages to show when the number of eligible messages is " +
                "larger than the device’s capacity to present them.",
            xref: { document: "cluster", section: "1.16.5.4" }
        },

        Field({
            name: "Low", id: 0x0, conformance: "M",
            description: "Message to be transferred with a low level of importance"
        }),
        Field({
            name: "Medium", id: 0x1, conformance: "M",
            description: "Message to be transferred with a medium level of importance"
        }),
        Field({
            name: "High", id: 0x2, conformance: "M",
            description: "Message to be transferred with a high level of importance"
        }),
        Field({
            name: "Critical", id: 0x3, conformance: "M",
            description: "Message to be transferred with a critical level of importance"
        })
    ),

    Datatype(
        {
            name: "MessageStruct", type: "struct",
            details: "This represents a single message.",
            xref: { document: "cluster", section: "1.16.5.5" }
        },
        Field({
            name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
            details: "This field shall indicate a globally unique ID for this message.",
            xref: { document: "cluster", section: "1.16.5.5.1" }
        }),
        Field({
            name: "Priority", id: 0x1, type: "MessagePriorityEnum", access: "S", conformance: "M", default: 0,
            details: "This field shall indicate the priority level for this message.",
            xref: { document: "cluster", section: "1.16.5.5.2" }
        }),

        Field({
            name: "MessageControl", id: 0x2, type: "MessageControlBitmap", access: "S", conformance: "M",
            default: 0,
            details: "This field shall indicate control information related to the message.",
            xref: { document: "cluster", section: "1.16.5.5.3" }
        }),

        Field({
            name: "StartTime", id: 0x3, type: "epoch-s", access: "S", conformance: "M", default: 0,
            quality: "X",
            details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                "null value shall indicate \"now.\"",
            xref: { document: "cluster", section: "1.16.5.5.4" }
        }),

        Field({
            name: "Duration", id: 0x4, type: "uint64", access: "S", conformance: "M", default: 0, quality: "X",
            details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                "message is available to be presented. A null value shall indicate \"until changed\".",
            xref: { document: "cluster", section: "1.16.5.5.5" }
        }),

        Field({
            name: "MessageText", id: 0x5, type: "string", access: "S", conformance: "M", constraint: "max 256",
            details: "This field shall indicate a string containing the message to be presented.",
            xref: { document: "cluster", section: "1.16.5.5.6" }
        }),

        Field(
            {
                name: "Responses", id: 0x6, type: "list", access: "S", conformance: "RESP", constraint: "max 4",
                default: [],

                details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                    "shall have unique values of MessageResponseID." +
                    "\n" +
                    "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide a " +
                    "generic acknowledgement button, e.g. \"OK\"." +
                    "\n" +
                    "If the ResponseRequired bit is not set on the message, this list shall be ignored.",

                xref: { document: "cluster", section: "1.16.5.5.7" }
            },

            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        {
            name: "MessageResponseOptionStruct", type: "struct",
            details: "This represents a possible response to a message.",
            xref: { document: "cluster", section: "1.16.5.6" }
        },

        Field({
            name: "MessageResponseId", id: 0x0, type: "uint32", conformance: "M", constraint: "min 1",
            details: "This field shall indicate a unique unsigned 32-bit number identifier for this message response " +
                "option.",
            xref: { document: "cluster", section: "1.16.5.6.1" }
        }),

        Field({
            name: "Label", id: 0x1, type: "string", conformance: "M", constraint: "max 32",
            details: "This field shall indicate the text for this option; e.g. \"Yes\", \"No\", etc.",
            xref: { document: "cluster", section: "1.16.5.6.2" }
        })
    )
);

MatterDefinition.children.push(Messages);
