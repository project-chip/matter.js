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

export const OtaSoftwareUpdateRequestor = Cluster(
    {
        name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node", pics: "OTAR",
        xref: { document: "core", section: "11.20.7" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW F VA", conformance: "M",
            constraint: "desc", default: [], quality: "N",

            details: "This field is a list of ProviderLocation whose entries shall be set by Administrators, either during " +
                "Commissioning or at a later time, to set the ProviderLocation for the default OTA Provider Node to " +
                "use for software updates on a given Fabric." +
                "\n" +
                "There shall NOT be more than one entry per Fabric. On a list update that would introduce more than " +
                "one entry per fabric, the write shall fail with CONSTRAINT_ERROR status code." +
                "\n" +
                "Provider Locations obtained using the AnnounceOTAProvider command shall NOT overwrite values set in " +
                "the DefaultOTAProviders attribute.",

            xref: { document: "core", section: "11.20.7.5.1" }
        },

        Field({ name: "entry", type: "ProviderLocation" })
    ),

    Attribute({
        name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M", default: true,
        details: "This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it " +
            "shall be set to False in case of any condition preventing update being possible, such as " +
            "insufficient capacity of an internal battery. This field is merely informational for diagnostics " +
            "purposes and shall NOT affect the responses provided by an OTA Provider to an OTA Requestor.",
        xref: { document: "core", section: "11.20.7.5.2" }
    }),

    Attribute({
        name: "UpdateState", id: 0x2, type: "UpdateStateEnum", access: "R V", conformance: "M", default: 0,
        details: "This field shall reflect the current state of the OTA Requestor with regards to obtaining software " +
            "updates. See Section 11.20.7.4.2, “UpdateStateEnum Type” for possible values." +
            "\n" +
            "This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.",
        xref: { document: "core", section: "11.20.7.5.3" }
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

        xref: { document: "core", section: "11.20.7.5.4" }
    }),

    Event(
        {
            name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when a change of the UpdateState attribute occurs due to an OTA " +
                "Requestor moving through the states necessary to query for updates.",
            xref: { document: "core", section: "11.20.7.7.1" }
        },

        Field({
            name: "PreviousState", id: 0x0, type: "UpdateStateEnum", conformance: "M", default: 0,
            details: "This field shall be set to the state that preceded the transition causing this event to be " +
                "generated, if such a state existed. If no previous state exists, the value shall be Unknown.",
            xref: { document: "core", section: "11.20.7.7.1.1" }
        }),

        Field({
            name: "NewState", id: 0x1, type: "UpdateStateEnum", conformance: "M",
            details: "This field shall be set to the state now in effect through the transition causing this event to be " +
                "generated.",
            xref: { document: "core", section: "11.20.7.7.1.2" }
        }),

        Field({
            name: "Reason", id: 0x2, type: "ChangeReasonEnum", conformance: "M",
            details: "This field shall be set to the reason why this event was generated.",
            xref: { document: "core", section: "11.20.7.7.1.3" }
        }),

        Field({
            name: "TargetSoftwareVersion", id: 0x3, type: "uint32", conformance: "M", default: null,
            quality: "X",
            details: "This field shall be set to the target SoftwareVersion which is the subject of the operation, " +
                "whenever the NewState is Downloading, Applying or RollingBack. Otherwise TargetSoftwareVersion shall " +
                "be null.",
            xref: { document: "core", section: "11.20.7.7.1.4" }
        })
    ),

    Event(
        {
            name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
            details: "This event shall be generated whenever a new version starts executing after being applied due to a " +
                "software update. This event SHOULD be generated even if a software update was done using means " +
                "outside of this cluster.",
            xref: { document: "core", section: "11.20.7.7.2" }
        },

        Field({
            name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall be set to the same value as the one available in the Software Version attribute of " +
                "the Basic Information Cluster for the newly executing version.",
            xref: { document: "core", section: "11.20.7.7.2.1" }
        }),

        Field({
            name: "ProductId", id: 0x1, type: "uint16", conformance: "M",
            details: "This field shall be set to the ProductID applying to the executing version, as reflected by the " +
                "Basic Information Cluster. This can be used to detect a product updating its definition due to a " +
                "large-scale functional update that may impact aspects of the product reflected in the DeviceModel " +
                "schema of the Distributed Compliance Ledger.",
            xref: { document: "core", section: "11.20.7.7.2.2" }
        })
    ),

    Event(
        {
            name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated whenever an error occurs during OTA Requestor download operation.",
            xref: { document: "core", section: "11.20.7.7.3" }
        },

        Field({
            name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
            details: "This field shall be set to the value of the SoftwareVersion being downloaded, matching the " +
                "SoftwareVersion field of the QueryImageResponse that caused the failing download to take place.",
            xref: { document: "core", section: "11.20.7.7.3.1" }
        }),

        Field({
            name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M",
            details: "This field shall be set to the number of bytes that have been downloaded during the failing transfer " +
                "that caused this event to be generated.",
            xref: { document: "core", section: "11.20.7.7.3.2" }
        }),

        Field({
            name: "ProgressPercent", id: 0x2, type: "uint8", conformance: "M", constraint: "0 to 100",
            default: null, quality: "X",
            details: "This field shall be set to the nearest integer percent value reflecting how far within the transfer " +
                "the failure occurred during the failing transfer that caused this event to be generated, unless the " +
                "total length of the transfer is unknown, in which case it shall be null.",
            xref: { document: "core", section: "11.20.7.7.3.3" }
        }),

        Field({
            name: "PlatformCode", id: 0x3, type: "int64", conformance: "M", default: null, quality: "X",
            details: "This field SHOULD be set to some internal product-specific error code, closest in " +
                "temporal/functional proximity to the failure that caused this event to be generated. Otherwise, it " +
                "shall be null. This event field may be used for debugging purposes and no uniform definition exists " +
                "related to its meaning.",
            xref: { document: "core", section: "11.20.7.7.3.4" }
        })
    ),

    Command(
        {
            name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O", direction: "request",
            response: "status",
            details: "This command may be invoked by Administrators to announce the presence of a particular OTA Provider." +
                "\n" +
                "This command shall be scoped to the accessing fabric." +
                "\n" +
                "If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.",
            xref: { document: "core", section: "11.20.7.6.1" }
        },

        Field({
            name: "ProviderNodeId", id: 0x0, type: "node-id", access: "F", conformance: "M",
            details: "This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the " +
                "accessing fabric.",
            xref: { document: "core", section: "11.20.7.6.1.1" }
        }),

        Field({
            name: "VendorId", id: 0x1, type: "vendor-id", access: "F", conformance: "M",
            details: "This field shall contain the assigned Vendor ID of the Node invoking this command, as it would " +
                "appear in that Node’s Basic Information Cluster VendorID attribute.",
            xref: { document: "core", section: "11.20.7.6.1.2" }
        }),

        Field({
            name: "AnnouncementReason", id: 0x2, type: "AnnouncementReasonEnum", access: "F", conformance: "M",
            details: "This field shall contain a value expressing the reason for the announcement.",
            xref: { document: "core", section: "11.20.7.6.1.3" }
        }),

        Field({
            name: "MetadataForNode", id: 0x3, type: "octstr", access: "F", conformance: "O",
            constraint: "max 512",

            details: "This optional field, if present, shall consist of a top-level anonymous list; each list element " +
                "shall have a profile-specific tag encoded in fully-qualified form. Each list element shall contain a " +
                "manufacturer-specific payload, which the Node invoking this command wants to expose to the receiving " +
                "Node. This payload may be used for any purpose and SHOULD be as small as practical, especially if " +
                "invoked to groups, in order to reduce networking burden of these payloads." +
                "\n" +
                "This field SHOULD only be included if the sending OTA Provider has knowledge that some recipient can " +
                "make use of it.",

            xref: { document: "core", section: "11.20.7.6.1.4" }
        }),

        Field({
            name: "Endpoint", id: 0x4, type: "endpoint-no", access: "F", conformance: "M",

            details: "This field shall contain the endpoint number which has the OTA Provider device type and OTA Software " +
                "Update Provider cluster server on the ProviderNodeID. This is provided to avoid having to do " +
                "discovery of the location of that endpoint by walking over all endpoints and checking their " +
                "Descriptor Cluster." +
                "\n" +
                "When Generated" +
                "\n" +
                "An OTA Provider may invoke this command directly to an OTA Requestor, to announce its presence as an " +
                "OTA Provider on the Fabric." +
                "\n" +
                "These announcements, if made, SHOULD be made at most once every 24 hours for any given target Node, " +
                "to assist OTA Requestors in discovering available OTA Provider resources, unless the " +
                "AnnouncementReason is UrgentUpdateAvailable, in which case this command may be more frequent." +
                "\n" +
                "Any invocation shall be made with a delay of at least 1 second between invocations from a given OTA " +
                "Provider, to reduce burden on the networking infrastructure and affect a form of serialized jitter. " +
                "It is recommended to offset the first announcement of a round (i.e. new set of announcements after a " +
                "previous complete set) by a random delay time with a distribution span of >= 60 seconds to jitter " +
                "announcement schedules over time." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "On receipt of this command, an OTA Requestor SHOULD consider the new ProviderNodeID and " +
                "AnnouncementReason to possibly query for new software sooner than it would have with its default " +
                "behavior." +
                "\n" +
                "The OTA Requestor SHOULD NOT update entries in the DefaultOTAProviders list based on announcements." +
                "\n" +
                "The receiving Node may ignore the content of the announcement if it is unable or unwilling to " +
                "further query OTA Providers temporarily, or if its provider list is full. If the announcement is " +
                "ignored, the response SHOULD be SUCCESS." +
                "\n" +
                "Depending on the value of the AnnouncementReason field, the OTA Requestor may have to query the OTA " +
                "Provider. See Section 11.20.7.6.1.3, “AnnouncementReason Field” for the different values and their " +
                "meaning." +
                "\n" +
                "If present, the MetadataForNode field’s may be used by a receiving OTA Requestor in any way it deems " +
                "satisfactory. The MetadataForNode field SHOULD be empty under most normal operational circumstance, " +
                "but can be useful in environments such as field trials or integration test environments to hint at " +
                "additional capabilities which OTA Requestors may use in a particular Vendor-specific context.",

            xref: { document: "core", section: "11.20.7.6.1.5" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "AnnouncementReasonEnum", type: "enum8", xref: { document: "core", section: "11.20.7.4.1" } },

        Field({
            name: "SimpleAnnouncement", id: 0x0, conformance: "M",
            description: "An OTA Provider is announcing its presence.",
            details: "An OTA Provider is announcing its presence, but there is no implication that an OTA Requestor would " +
                "have a new Software Image available if it queried immediately.",
            xref: { document: "core", section: "11.20.7.4.1.1" }
        }),

        Field({
            name: "UpdateAvailable", id: 0x1, conformance: "M",
            description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available.",
            details: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software " +
                "Image may be available. The details may only be obtained by executing a OTA Software Update Query " +
                "procedure. A receiving OTA Requestor SHOULD only query the indicated OTA Provider at the " +
                "ProviderLocation at its next upcoming OTA Provider query.",
            xref: { document: "core", section: "11.20.7.4.1.2" }
        }),

        Field({
            name: "UrgentUpdateAvailable", id: 0x2, conformance: "M",
            description: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY be available, which contains an update that needs to be applied urgently.",

            details: "An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software " +
                "Image may be available, which contains an update that needs to be applied urgently. The details may " +
                "only be obtained by executing a OTA Software Update Query procedure. A receiving OTA Requestor " +
                "SHOULD query the indicated OTA Provider at the ProviderLocation after a random jitter delay between " +
                "1 and 600 seconds. This particular reason SHOULD only be employed when an urgent update is " +
                "available, such as an important security update, or just after initial commissioning of a device, to " +
                "assist OTA Requestors in more rapidly obtaining updated software.",

            xref: { document: "core", section: "11.20.7.4.1.3" }
        })
    ),

    Datatype(
        { name: "UpdateStateEnum", type: "enum8", xref: { document: "core", section: "11.20.7.4.2" } },

        Field({
            name: "Unknown", id: 0x0, conformance: "M", description: "Current state is not yet determined.",
            details: "This value shall indicate that the current state is not yet determined. Nodes SHOULD attempt a " +
                "better state reporting.",
            xref: { document: "core", section: "11.20.7.4.2.1" }
        }),

        Field({
            name: "Idle", id: 0x1, conformance: "M",
            description: "Indicate a Node not yet in the process of software update.",
            details: "This value shall indicate a Node not yet in the process of software update, for example because it " +
                "is awaiting the moment when a query will be made.",
            xref: { document: "core", section: "11.20.7.4.2.2" }
        }),

        Field({
            name: "Querying", id: 0x2, conformance: "M",
            description: "Indicate a Node in the process of querying an OTA Provider.",
            details: "This value shall indicate a Node in the process of querying an OTA Provider with QueryImage command, " +
                "including during the process of awaiting a response to that command.",
            xref: { document: "core", section: "11.20.7.4.2.3" }
        }),

        Field({
            name: "DelayedOnQuery", id: 0x3, conformance: "M",
            description: "Indicate a Node waiting after a Busy response.",
            details: "This value shall indicate a Node waiting because it received a prior QueryImageResponse with a " +
                "Status field indicating Busy.",
            xref: { document: "core", section: "11.20.7.4.2.4" }
        }),

        Field({
            name: "Downloading", id: 0x4, conformance: "M",
            description: "Indicate a Node currently in the process of downloading a software update.",
            details: "This value shall indicate a Node currently in the process of downloading a software update.",
            xref: { document: "core", section: "11.20.7.4.2.5" }
        }),

        Field({
            name: "Applying", id: 0x5, conformance: "M",
            description: "Indicate a Node currently in the process of verifying and applying a software update.",
            details: "This value shall indicate a Node currently in the process of verifying and applying a software " +
                "update.",
            xref: { document: "core", section: "11.20.7.4.2.6" }
        }),

        Field({
            name: "DelayedOnApply", id: 0x6, conformance: "M",
            description: "Indicate a Node waiting caused by AwaitNextAction response.",
            details: "This value shall indicate a Node waiting because it received a prior ApplyUpdateResponse with an " +
                "Action field set to AwaitNextAction.",
            xref: { document: "core", section: "11.20.7.4.2.7" }
        }),

        Field({
            name: "RollingBack", id: 0x7, conformance: "M",
            description: "Indicate a Node in the process of recovering to a previous version.",
            details: "This value shall indicate a Node in the process of recovering to a previous version from a new " +
                "version that was applied, but that could not remain in force, for reasons such as invalid data " +
                "detected on boot, or significant runtime issues such as reboot loops. Eventually, the next state " +
                "seen SHOULD be Unknown or Idle.",
            xref: { document: "core", section: "11.20.7.4.2.8" }
        }),

        Field({
            name: "DelayedOnUserConsent", id: 0x8, conformance: "M",
            description: "Indicate a Node is capable of user consent."
        })
    ),

    Datatype(
        { name: "ChangeReasonEnum", type: "enum8", xref: { document: "core", section: "11.20.7.4.3" } },

        Field({
            name: "Unknown", id: 0x0, conformance: "M",
            description: "The reason for a state change is unknown.",
            details: "This value shall indicate that the reason for a state change is unknown.",
            xref: { document: "core", section: "11.20.7.4.3.1" }
        }),

        Field({
            name: "Success", id: 0x1, conformance: "M",
            description: "The reason for a state change is the success of a prior operation.",
            details: "This value shall indicate that the reason for a state change is the success of a prior operation.",
            xref: { document: "core", section: "11.20.7.4.3.2" }
        }),

        Field({
            name: "Failure", id: 0x2, conformance: "M",
            description: "The reason for a state change is the failure of a prior operation.",
            details: "This value shall indicate that the reason for a state change is the failure of a prior operation.",
            xref: { document: "core", section: "11.20.7.4.3.3" }
        }),

        Field({
            name: "TimeOut", id: 0x3, conformance: "M",
            description: "The reason for a state change is a time-out.",
            details: "This value shall indicate that the reason for a state change is a time-out condition as determined " +
                "by the OTA Requestor.",
            xref: { document: "core", section: "11.20.7.4.3.4" }
        }),

        Field({
            name: "DelayByProvider", id: 0x4, conformance: "O",
            description: "The reason for a state change is a request by the OTA Provider to wait.",
            details: "This value shall indicate that the reason for a state change is a request by the OTA Provider to " +
                "await for a delay.",
            xref: { document: "core", section: "11.20.7.4.3.5" }
        })
    ),

    Datatype(
        {
            name: "ProviderLocation", type: "struct",
            details: "This structure encodes a fabric-scoped location of an OTA provider on a given fabric.",
            xref: { document: "core", section: "11.20.7.4.4" }
        },

        Field({
            name: "ProviderNodeId", id: 0x1, type: "node-id", access: "F", conformance: "M",
            details: "This field shall contain the Node ID of the OTA Provider to contact within the Fabric identified by " +
                "the FabricIndex.",
            xref: { document: "core", section: "11.20.7.4.4.1" }
        }),

        Field({
            name: "Endpoint", id: 0x2, type: "endpoint-no", access: "F", conformance: "M",
            details: "This field shall contain the endpoint number which has the OTA Provider device type and OTA Software " +
                "Update Provider cluster server on the ProviderNodeID. This is provided to avoid having to do " +
                "discovery of the location of that endpoint by walking over all endpoints and checking their " +
                "Descriptor Cluster.",
            xref: { document: "core", section: "11.20.7.4.4.2" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(OtaSoftwareUpdateRequestor);
