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
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node",
    description: "OTA Software Update Requestor",
    details: "Provides an interface for downloading and applying OTA software updates",
    xref: { document: "core", section: "11.19.7" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW F VA", conformance: "M",
            constraint: "desc", default: [],

            details: "This field is a list of ProviderLocationStruct whose entries shall be set by Administrators, either " +
                "during Commissioning or at a later time, to set the Provider Location for the default OTA Provider " +
                "Node to use for software updates on a given Fabric." +
                "\n" +
                "There shall NOT be more than one entry per Fabric. On a list update that would introduce more than " +
                "one entry per fabric, the write shall fail with CONSTRAINT_ERROR status code." +
                "\n" +
                "Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in " +
                "the DefaultOTAProviders attribute.",

            xref: { document: "core", section: "11.19.7.5.1" },
            children: [Field({ name: "entry", type: "ProviderLocationStruct" })]
        }),

        Attribute({
            name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M", default: true,
            details: "This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it " +
                "shall be set to False in case of any condition preventing update being possible, such as " +
                "insufficient capacity of an internal battery. This field is merely informational for diagnostics " +
                "purposes and shall NOT affect the responses provided by an OTA Provider to an OTA Requestor.",
            xref: { document: "core", section: "11.19.7.5.2" }
        }),

        Attribute({
            name: "UpdateState", id: 0x2, type: "UpdateStateEnum", access: "R V", conformance: "M", default: 0,
            details: "This field shall reflect the current state of the OTA Requestor with regards to obtaining software " +
                "updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values." +
                "\n" +
                "This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.",
            xref: { document: "core", section: "11.19.7.5.3" }
        }),

        Attribute({
            name: "UpdateStateProgress", id: 0x3, type: "uint8", access: "R V", conformance: "M",
            constraint: "0 to 100", default: null, quality: "X",

            details: "This field shall reflect the percentage value of progress, relative to the current UpdateState, if " +
                "applicable to the state." +
                "\n" +
                "The value of this field shall be null if a progress indication does not apply to the current state." +
                "\n" +
                "A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate " +
                "completion." +
                "\n" +
                "This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting " +
                "progress when this attribute is part of a subscription.",

            xref: { document: "core", section: "11.19.7.5.4" }
        }),

        Event({
            name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when a change of the UpdateState attribute occurs due to an OTA " +
                "Requestor moving through the states necessary to query for updates.",
            xref: { document: "core", section: "11.19.7.7.1" },

            children: [
                Field({ name: "PreviousState", id: 0x0, type: "UpdateStateEnum", conformance: "M", default: 0 }),
                Field({ name: "NewState", id: 0x1, type: "UpdateStateEnum", conformance: "M" }),
                Field({ name: "Reason", id: 0x2, type: "ChangeReasonEnum", conformance: "M" }),
                Field({
                    name: "TargetSoftwareVersion", id: 0x3, type: "uint32", conformance: "M", default: null,
                    quality: "X"
                })
            ]
        }),

        Event({
            name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
            details: "This event shall be generated whenever a new version starts executing after being applied due to a " +
                "software update. This event SHOULD be generated even if a software update was done using means " +
                "outside of this cluster.",
            xref: { document: "core", section: "11.19.7.7.6" },
            children: [
                Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
                Field({ name: "ProductId", id: 0x1, type: "uint16", conformance: "M" })
            ]
        }),

        Event({
            name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated whenever an error occurs during OTA Requestor download operation.",
            xref: { document: "core", section: "11.19.7.7.9" },

            children: [
                Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
                Field({ name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M" }),
                Field({
                    name: "ProgressPercent", id: 0x2, type: "uint8", conformance: "M", constraint: "0 to 100",
                    default: null, quality: "X"
                }),
                Field({ name: "PlatformCode", id: 0x3, type: "int64", conformance: "M", default: null, quality: "X" })
            ]
        }),

        Command({
            name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O", direction: "request",
            response: "status",
            details: "This command may be invoked by Administrators to announce the presence of a particular OTA Provider." +
                "\n" +
                "This command shall be scoped to the accessing fabric." +
                "\n" +
                "If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.",
            xref: { document: "core", section: "11.19.7.6.1" },

            children: [
                Field({ name: "ProviderNodeId", id: 0x0, type: "node-id", access: "F", conformance: "M" }),
                Field({ name: "VendorId", id: 0x1, type: "vendor-id", access: "F", conformance: "M" }),
                Field({
                    name: "AnnouncementReason", id: 0x2, type: "AnnouncementReasonEnum", access: "F", conformance: "M"
                }),
                Field({
                    name: "MetadataForNode", id: 0x3, type: "octstr", access: "F", conformance: "O",
                    constraint: "max 512"
                }),
                Field({ name: "Endpoint", id: 0x4, type: "endpoint-no", access: "F", conformance: "M" }),
                Field({
                    name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                    constraint: "1 to 254"
                })
            ]
        }),

        Datatype({
            name: "AnnouncementReasonEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.1" },

            children: [
                Field({
                    name: "SimpleAnnouncement", id: 0x0, conformance: "M",
                    description: "An OTA Provider is announcing its presence."
                }),
                Field({
                    name: "UpdateAvailable", id: 0x1, conformance: "M",
                    description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available."
                }),
                Field({
                    name: "UrgentUpdateAvailable", id: 0x2, conformance: "M",
                    description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available, which contains an update that needs to be applied urgently."
                })
            ]
        }),

        Datatype({
            name: "UpdateStateEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.5" },

            children: [
                Field({ name: "Unknown", id: 0x0, conformance: "M", description: "Current state is not yet determined." }),
                Field({
                    name: "Idle", id: 0x1, conformance: "M",
                    description: "Indicate a Node not yet in the process of software update."
                }),
                Field({
                    name: "Querying", id: 0x2, conformance: "M",
                    description: "Indicate a Node in the process of querying an OTA Provider."
                }),
                Field({
                    name: "DelayedOnQuery", id: 0x3, conformance: "M",
                    description: "Indicate a Node waiting after a Busy response."
                }),
                Field({
                    name: "Downloading", id: 0x4, conformance: "M",
                    description: "Indicate a Node currently in the process of downloading a software update."
                }),
                Field({
                    name: "Applying", id: 0x5, conformance: "M",
                    description: "Indicate a Node currently in the process of verifying and applying a software update."
                }),
                Field({
                    name: "DelayedOnApply", id: 0x6, conformance: "M",
                    description: "Indicate a Node waiting caused by AwaitNextAction response."
                }),
                Field({
                    name: "RollingBack", id: 0x7, conformance: "M",
                    description: "Indicate a Node in the process of recovering to a previous version."
                }),
                Field({
                    name: "DelayedOnUserConsent", id: 0x8, conformance: "M",
                    description: "Indicate a Node is capable of user consent."
                })
            ]
        }),

        Datatype({
            name: "ChangeReasonEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.19.7.4.15" },

            children: [
                Field({
                    name: "Unknown", id: 0x0, conformance: "M",
                    description: "The reason for a state change is unknown."
                }),
                Field({
                    name: "Success", id: 0x1, conformance: "M",
                    description: "The reason for a state change is the success of a prior operation."
                }),
                Field({
                    name: "Failure", id: 0x2, conformance: "M",
                    description: "The reason for a state change is the failure of a prior operation."
                }),
                Field({
                    name: "TimeOut", id: 0x3, conformance: "M",
                    description: "The reason for a state change is a time-out."
                }),
                Field({
                    name: "DelayByProvider", id: 0x4, conformance: "O",
                    description: "The reason for a state change is a request by the OTA Provider to wait."
                })
            ]
        }),

        Datatype({
            name: "ProviderLocationStruct", type: "struct", access: "R F", conformance: "M",
            details: "This structure encodes a fabric-scoped location of an OTA provider on a given fabric.",
            xref: { document: "core", section: "11.19.7.4.21" },

            children: [
                Field({ name: "ProviderNodeId", id: 0x1, type: "node-id", access: "F", conformance: "M" }),
                Field({ name: "Endpoint", id: 0x2, type: "endpoint-no", access: "F", conformance: "M" }),
                Field({
                    name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                    constraint: "1 to 254"
                })
            ]
        })
    ]
}));
