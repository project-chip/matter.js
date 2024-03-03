/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "OtaSoftwareUpdateProvider", id: 0x29, classification: "node",
    description: "OTA Software Update Provider",
    details: "Provides an interface for providing OTA software updates",
    xref: { document: "core", section: "11.19.6" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Command({
            name: "QueryImage", id: 0x0, conformance: "M", direction: "request", response: "QueryImageResponse",
            details: "Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA " +
                "Provider to match the OTA Requestor’s constraints provided in the payload fields.",
            xref: { document: "core", section: "11.19.6.5.1" },

            children: [
                Field({ name: "VendorId", id: 0x0, type: "vendor-id", conformance: "M" }),
                Field({ name: "ProductId", id: 0x1, type: "uint16", conformance: "M" }),
                Field({ name: "SoftwareVersion", id: 0x2, type: "uint32", conformance: "M" }),
                Field({
                    name: "ProtocolsSupported", id: 0x3, type: "list", conformance: "M", constraint: "max 8",
                    children: [Field({ name: "entry", type: "DownloadProtocolEnum" })]
                }),
                Field({ name: "HardwareVersion", id: 0x4, type: "uint16", conformance: "O" }),
                Field({ name: "Location", id: 0x5, type: "string", conformance: "O", constraint: "2" }),
                Field({ name: "RequestorCanConsent", id: 0x6, type: "bool", conformance: "O", default: true }),
                Field({ name: "MetadataForProvider", id: 0x7, type: "octstr", conformance: "O", constraint: "max 512" })
            ]
        }),

        Command({
            name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5.10" },

            children: [
                Field({ name: "Status", id: 0x0, type: "StatusEnum", conformance: "M" }),
                Field({ name: "DelayedActionTime", id: 0x1, type: "uint32", conformance: "O" }),
                Field({ name: "ImageUri", id: 0x2, type: "string", conformance: "O", constraint: "max 256" }),
                Field({ name: "SoftwareVersion", id: 0x3, type: "uint32", conformance: "O" }),
                Field({ name: "SoftwareVersionString", id: 0x4, type: "string", conformance: "O", constraint: "1 to 64" }),
                Field({ name: "UpdateToken", id: 0x5, type: "octstr", conformance: "O", constraint: "8 to 32" }),
                Field({ name: "UserConsentNeeded", id: 0x6, type: "bool", conformance: "O", default: true }),
                Field({ name: "MetadataForRequestor", id: 0x7, type: "octstr", conformance: "O", constraint: "max 512" })
            ]
        }),

        Command({
            name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
            response: "ApplyUpdateResponse",
            details: "This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. " +
                "This field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained " +
                "scheduling of the application of Software Images by OTA Requestors.",
            xref: { document: "core", section: "11.19.6.5.18" },
            children: [
                Field({ name: "UpdateToken", id: 0x0, type: "octstr", conformance: "M", constraint: "8 to 32" }),
                Field({ name: "NewVersion", id: 0x1, type: "uint32", conformance: "M" })
            ]
        }),

        Command({
            name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
            xref: { document: "core", section: "11.19.6.5.20" },
            children: [
                Field({ name: "Action", id: 0x0, type: "ApplyUpdateActionEnum", conformance: "M" }),
                Field({ name: "DelayedActionTime", id: 0x1, type: "uint32", conformance: "M" })
            ]
        }),

        Command({
            name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request", response: "status",

            details: "This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”." +
                "\n" +
                "The SoftwareVersion included in the request payload shall provide the same value as the " +
                "SoftwareVersion attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be " +
                "consistent with the value representing a new version running on the Node invoking the command." +
                "\n" +
                "When Generated" +
                "\n" +
                "The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:" +
                "\n" +
                "  1. An OTA Requestor has just successfully applied a Software Image it had obtained from a " +
                "     previous QueryImage response." +
                "\n" +
                "  2. An OTA Requestor has just successfully applied a Software Image it had obtained through means " +
                "     different than those of this Cluster." +
                "\n" +
                "An OTA Provider may use the state of invocation of this command to help track the progress of " +
                "update for OTA Requestors it knows require a new OTA Software Image. However, due to the " +
                "possibility that an OTA Requestor may never come back (e.g. device removed from Fabric altogether, " +
                "or a critical malfunction), an OTA Provider shall NOT expect every OTA Requestor to invoke this " +
                "command for correct operation of the OTA Provider." +
                "\n" +
                "This command shall be considered optional and shall not result in reduced availability of the OTA " +
                "Provider functionality if OTA Requestors never invoke this command." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "An OTA Provider receiving an invocation of this command may log it internally." +
                "\n" +
                "On receiving this command, an OTA Provider may use the information to update its bookkeeping of " +
                "cached Software Images, or use it for other similar administrative purposes.",

            xref: { document: "core", section: "11.19.6.5.22" },
            children: [
                Field({ name: "UpdateToken", id: 0x0, type: "octstr", conformance: "M", constraint: "8 to 32" }),
                Field({ name: "SoftwareVersion", id: 0x1, type: "uint32", conformance: "M" })
            ]
        }),

        Datatype({
            name: "StatusEnum", type: "enum8", conformance: "M",
            details: "See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.",
            xref: { document: "core", section: "11.19.6.4.1" },

            children: [
                Field({
                    name: "UpdateAvailable", id: 0x0, conformance: "M",
                    description: "Indicates that the OTA Provider has an update available."
                }),
                Field({
                    name: "Busy", id: 0x1, conformance: "M",
                    description: "Indicates OTA Provider may have an update, but it is not ready yet."
                }),
                Field({
                    name: "NotAvailable", id: 0x2, conformance: "M",
                    description: "Indicates that there is definitely no update currently available from the OTA Provider."
                }),
                Field({
                    name: "DownloadProtocolNotSupported", id: 0x3, conformance: "M",
                    description: "Indicates that the requested download protocol is not supported by the OTA Provider."
                })
            ]
        }),

        Datatype({
            name: "ApplyUpdateActionEnum", type: "enum8", conformance: "M",
            details: "See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This " +
                "enumeration is used in the Action field of the ApplyUpdateResponse command. See (Section " +
                "11.19.6.5.4.1, “Action Field”).",
            xref: { document: "core", section: "11.19.6.4.2" },

            children: [
                Field({ name: "Proceed", id: 0x0, conformance: "M", description: "Apply the update." }),
                Field({
                    name: "AwaitNextAction", id: 0x1, conformance: "M",
                    description: "Wait at least the given delay time."
                }),
                Field({
                    name: "Discontinue", id: 0x2, conformance: "M",
                    description: "The OTA Provider is conveying a desire to rescind a previously provided Software Image."
                })
            ]
        }),

        Datatype({
            name: "DownloadProtocolEnum", type: "enum8", conformance: "M",
            details: "Note that only HTTP over TLS (HTTPS) is supported (see RFC 7230). Using HTTP without TLS shall" +
                "\n" +
                "NOT be supported, as there is no way to authenticate the involved participants.",
            xref: { document: "core", section: "11.19.6.4.3" },

            children: [
                Field({
                    name: "BdxSynchronous", id: 0x0, conformance: "M",
                    description: "Indicates support for synchronous BDX."
                }),
                Field({
                    name: "BdxAsynchronous", id: 0x1, conformance: "O",
                    description: "Indicates support for asynchronous BDX."
                }),
                Field({ name: "Https", id: 0x2, conformance: "O", description: "Indicates support for HTTPS." }),
                Field({
                    name: "VendorSpecific", id: 0x3, conformance: "O",
                    description: "Indicates support for vendor specific protocol."
                })
            ]
        })
    ]
}));
