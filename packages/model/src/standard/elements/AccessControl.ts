/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AccessControl = Cluster(
    {
        name: "AccessControl", id: 0x1f, classification: "node", pics: "ACL",

        details: "The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which " +
            "codifies the rules used to manage and enforce Access Control for the Node’s endpoints and their " +
            "associated cluster instances. Access to this Access Control Cluster itself requires a special " +
            "Administer privilege level, such that only Nodes granted such privilege (hereafter termed " +
            "\"Administrators\") can manage the Access Control Cluster." +
            "\n" +
            "The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT " +
            "be present on any other Endpoint of any Node.",

        xref: { document: "core", section: "9.10" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "Acl", id: 0x0, type: "list", access: "RW F A", conformance: "M", constraint: "desc",

            details: "An attempt to add an Access Control Entry when no more entries are available shall result in a " +
                "RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry added to it. " +
                "See access control limits." +
                "\n" +
                "See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per " +
                "fabric supported by the server." +
                "\n" +
                "Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the " +
                "Access Control Privilege Granting algorithm to determine if a subject has privilege to interact " +
                "with targets on the Node.",

            xref: { document: "core", section: "9.10.5.3" }
        },

        Field({ name: "entry", type: "AccessControlEntryStruct" })
    ),

    Attribute(
        {
            name: "Extension", id: 0x1, type: "list", access: "RW F A", conformance: "O", constraint: "desc",
            details: "If present, the Access Control Extensions may be used by Administrators to store arbitrary data " +
                "related to fabric’s Access Control Entries." +
                "\n" +
                "The Access Control Extension list shall support a single extension entry per supported fabric.",
            xref: { document: "core", section: "9.10.5.4" }
        },

        Field({ name: "entry", type: "AccessControlExtensionStruct" })
    ),

    Attribute({
        name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16", access: "R V", conformance: "M",
        constraint: "min 4", default: 4, quality: "F",

        details: "This attribute shall provide the minimum number of Subjects per entry that are supported by this " +
            "server." +
            "\n" +
            "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
            "NOT decrease across time as software updates occur that could impact this value. If this is a " +
            "concern for a given implementation, it is recommended to only use the minimum value required and " +
            "avoid reporting a higher value than the required minimum.",

        xref: { document: "core", section: "9.10.5.5" }
    }),

    Attribute({
        name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16", access: "R V", conformance: "M",
        constraint: "min 3", default: 3, quality: "F",

        details: "This attribute shall provide the minimum number of Targets per entry that are supported by this " +
            "server." +
            "\n" +
            "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
            "NOT decrease across time as software updates occur that could impact this value. If this is a " +
            "concern for a given implementation, it is recommended to only use the minimum value required and " +
            "avoid reporting a higher value than the required minimum.",

        xref: { document: "core", section: "9.10.5.6" }
    }),

    Attribute({
        name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16", access: "R V", conformance: "M",
        constraint: "min 4", default: 4, quality: "F",

        details: "This attribute shall provide the minimum number of ACL Entries per fabric that are supported by " +
            "this server." +
            "\n" +
            "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
            "NOT decrease across time as software updates occur that could impact this value. If this is a " +
            "concern for a given implementation, it is recommended to only use the minimum value required and " +
            "avoid reporting a higher value than the required minimum.",

        xref: { document: "core", section: "9.10.5.7" }
    }),

    Event(
        {
            name: "AccessControlEntryChanged", id: 0x0, access: "S A", conformance: "M", priority: "info",

            details: "The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed " +
                "by an Administrator." +
                "\n" +
                "  • Each added entry shall generate an event with ChangeType Added." +
                "\n" +
                "  • Each changed entry shall generate an event with ChangeType Changed." +
                "\n" +
                "  • Each removed entry shall generate an event with ChangeType Removed.",

            xref: { document: "core", section: "9.10.7.1" }
        },

        Field({
            name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M", constraint: "desc",
            quality: "X",
            details: "The Node ID of the Administrator that made the change, if the change occurred via a CASE session." +
                "\n" +
                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                "occurred via a CASE or PASE session; the other shall be null.",
            xref: { document: "core", section: "9.10.7.1.1" }
        }),

        Field({
            name: "AdminPasscodeId", id: 0x2, type: "uint16", access: "S", conformance: "M", constraint: "desc",
            quality: "X",

            details: "The Passcode ID of the Administrator that made the change, if the change occurred via a PASE " +
                "session. Non-zero values are reserved for future use (see PasscodeId generation in " +
                "PBKDFParamRequest)." +
                "\n" +
                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                "occurred via a CASE or PASE session; the other shall be null.",

            xref: { document: "core", section: "9.10.7.1.2" }
        }),

        Field({
            name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
            details: "The type of change as appropriate.",
            xref: { document: "core", section: "9.10.7.1.3" }
        }),

        Field({
            name: "LatestValue", id: 0x4, type: "AccessControlEntryStruct", access: "S", conformance: "M",
            quality: "X",
            details: "The latest value of the changed entry." +
                "\n" +
                "This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if " +
                "resources are scarce.",
            xref: { document: "core", section: "9.10.7.1.4" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        {
            name: "AccessControlExtensionChanged", id: 0x1, access: "S A", conformance: "M", priority: "info",

            details: "The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data " +
                "is changed by an Administrator." +
                "\n" +
                "  • Each added extension shall generate an event with ChangeType Added." +
                "\n" +
                "  • Each changed extension shall generate an event with ChangeType Changed." +
                "\n" +
                "  • Each removed extension shall generate an event with ChangeType Removed.",

            xref: { document: "core", section: "9.10.7.2" }
        },

        Field({
            name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M", constraint: "desc",
            quality: "X",
            details: "The Node ID of the Administrator that made the change, if the change occurred via a CASE session." +
                "\n" +
                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                "occurred via a CASE or PASE session; the other shall be null.",
            xref: { document: "core", section: "9.10.7.2.1" }
        }),

        Field({
            name: "AdminPasscodeId", id: 0x2, type: "uint16", access: "S", conformance: "M", constraint: "desc",
            quality: "X",

            details: "The Passcode ID of the Administrator that made the change, if the change occurred via a PASE " +
                "session. Non-zero values are reserved for future use (see PasscodeId generation in " +
                "PBKDFParamRequest)." +
                "\n" +
                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                "occurred via a CASE or PASE session; the other shall be null.",

            xref: { document: "core", section: "9.10.7.2.2" }
        }),

        Field({
            name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
            details: "The type of change as appropriate.",
            xref: { document: "core", section: "9.10.7.2.3" }
        }),

        Field({
            name: "LatestValue", id: 0x4, type: "AccessControlExtensionStruct", access: "S", conformance: "M",
            quality: "X",
            details: "The latest value of the changed extension." +
                "\n" +
                "This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if " +
                "resources are scarce.",
            xref: { document: "core", section: "9.10.7.2.4" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "ChangeTypeEnum", type: "enum8", xref: { document: "core", section: "9.10.4.1" } },
        Field({ name: "Changed", id: 0x0, conformance: "M", description: "Entry or extension was changed" }),
        Field({ name: "Added", id: 0x1, conformance: "M", description: "Entry or extension was added" }),
        Field({ name: "Removed", id: 0x2, conformance: "M", description: "Entry or extension was removed" })
    ),

    Datatype(
        {
            name: "AccessControlEntryPrivilegeEnum", type: "enum8",
            details: "Proxy View Value" +
                "\n" +
                "This value implicitly grants View privileges",
            xref: { document: "core", section: "9.10.4.2" }
        },

        Field({
            name: "View", id: 0x1, conformance: "M",
            description: "Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)"
        }),
        Field({
            name: "ProxyView", id: 0x2, conformance: "P, M",
            description: "Can read and observe all (as seen by a Proxy)"
        }),

        Field({
            name: "Operate", id: 0x3, conformance: "M",
            description: "View privileges, and can perform the primary function of this Node (except Access Control Cluster)",
            details: "This value implicitly grants View privileges",
            xref: { document: "core", section: "9.10.4.2.1" }
        }),

        Field({
            name: "Manage", id: 0x4, conformance: "M",
            description: "Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)",
            details: "This value implicitly grants Operate & View privileges",
            xref: { document: "core", section: "9.10.4.2.2" }
        }),

        Field({
            name: "Administer", id: 0x5, conformance: "M",
            description: "Manage privileges, and can observe and modify the Access Control Cluster",
            details: "This value implicitly grants Manage, Operate, Proxy View & View privileges",
            xref: { document: "core", section: "9.10.4.2.3" }
        })
    ),

    Datatype(
        { name: "AccessControlEntryAuthModeEnum", type: "enum8", xref: { document: "core", section: "9.10.4.3" } },
        Field({ name: "Pase", id: 0x1, conformance: "M", description: "Passcode authenticated session" }),
        Field({ name: "Case", id: 0x2, conformance: "M", description: "Certificate authenticated session" }),
        Field({ name: "Group", id: 0x3, conformance: "M", description: "Group authenticated session" })
    ),

    Datatype(
        { name: "AccessControlTargetStruct", type: "struct", xref: { document: "core", section: "9.10.4.4" } },
        Field({ name: "Cluster", id: 0x0, type: "cluster-id", conformance: "M", quality: "X" }),
        Field({ name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M", quality: "X" }),
        Field({ name: "DeviceType", id: 0x2, type: "devtype-id", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "AccessControlEntryStruct", type: "struct", xref: { document: "core", section: "9.10.4.5" } },

        Field({
            name: "Privilege", id: 0x1, type: "AccessControlEntryPrivilegeEnum", access: "S", conformance: "M",

            details: "The privilege field shall specify the level of privilege granted by this Access Control Entry." +
                "\n" +
                "NOTE The Proxy View privilege is provisional." +
                "\n" +
                "Each privilege builds upon its predecessor, expanding the set of actions that can be performed upon " +
                "a Node. Administer is the highest privilege, and is special as it pertains to the administration of " +
                "privileges itself, via the Access Control Cluster." +
                "\n" +
                "When a Node is granted a particular privilege, it is also implicitly granted all logically lower " +
                "privilege levels as well. The following diagram illustrates how the higher privilege levels subsume " +
                "the lower privilege levels:" +
                "\n" +
                "Figure 43. Access Control Privilege Levels" +
                "\n" +
                "Individual clusters shall define whether attributes are readable, writable, or both readable and " +
                "writable. Clusters also shall define which privilege is minimally required to be able to perform a " +
                "particular read or write action on those attributes, or invoke particular commands. Device type " +
                "specifications may further restrict the privilege required." +
                "\n" +
                "The Access Control Cluster shall require the Administer privilege to observe and modify the Access " +
                "Control Cluster itself. The Administer privilege shall NOT be used on Access Control Entries which " +
                "use the Group auth mode.",

            xref: { document: "core", section: "9.10.4.5.1" }
        }),

        Field({
            name: "AuthMode", id: 0x2, type: "AccessControlEntryAuthModeEnum", access: "S", conformance: "M",
            details: "The AuthMode field shall specify the authentication mode required by this Access Control Entry.",
            xref: { document: "core", section: "9.10.4.5.2" }
        }),

        Field(
            {
                name: "Subjects", id: 0x3, type: "list", access: "S", conformance: "M",
                constraint: "max subjectsPerAccessControlEntry", quality: "X",

                details: "The subjects field shall specify a list of Subject IDs, to which this Access Control Entry grants " +
                    "access." +
                    "\n" +
                    "Device types may impose additional constraints on the minimum number of subjects per Access Control " +
                    "Entry." +
                    "\n" +
                    "An attempt to create an entry with more subjects than the node can support shall result in a " +
                    "RESOURCE_EXHAUSTED error and the entry shall NOT be created." +
                    "\n" +
                    "### Subject ID shall be of type uint64 with semantics depending on the entry’s AuthMode as follows:" +
                    "\n" +
                    "Subject Semantics" +
                    "\n" +
                    "An empty subjects list indicates a wildcard; that is, this entry shall grant access to any Node " +
                    "that successfully authenticates via AuthMode. The subjects list shall NOT be empty if the entry’s " +
                    "AuthMode is PASE." +
                    "\n" +
                    "The PASE AuthMode is reserved for future use (see Section 6.6.2.8, “Bootstrapping of the Access " +
                    "Control Cluster”). An attempt to write an entry with AuthMode set to PASE shall fail with a status " +
                    "code of CONSTRAINT_ERROR." +
                    "\n" +
                    "For PASE authentication, the Passcode ID identifies the required passcode verifier, and shall be 0 " +
                    "for the default commissioning passcode." +
                    "\n" +
                    "For CASE authentication, the Subject ID is a distinguished name within the Operational Certificate " +
                    "shared during CASE session establishment, the type of which is determined by its range to be one of:" +
                    "\n" +
                    "  • a Node ID, which identifies the required source node directly (by ID)" +
                    "\n" +
                    "  • a CASE Authenticated Tag, which identifies the required source node indirectly (by tag)" +
                    "\n" +
                    "For Group authentication, the Group ID identifies the required group, as defined in the Group Key " +
                    "Management Cluster.",

                xref: { document: "core", section: "9.10.4.5.3" }
            },

            Field({ name: "entry", type: "subject-id" })
        ),

        Field(
            {
                name: "Targets", id: 0x4, type: "list", access: "S", conformance: "M",
                constraint: "max targetsPerAccessControlEntry", quality: "X",

                details: "The targets field shall specify a list of AccessControlTargetStruct, which define the clusters on " +
                    "this Node to which this Access Control Entry grants access." +
                    "\n" +
                    "Device types may impose additional constraints on the minimum number of targets per Access Control " +
                    "Entry." +
                    "\n" +
                    "An attempt to create an entry with more targets than the node can support shall result in a " +
                    "RESOURCE_EXHAUSTED error and the entry shall NOT be created." +
                    "\n" +
                    "A single target shall contain at least one field (Cluster, Endpoint, or DeviceType), and shall NOT " +
                    "contain both an Endpoint field and a DeviceType field." +
                    "\n" +
                    "A target grants access based on the presence of fields as follows:" +
                    "\n" +
                    "Target Semantics" +
                    "\n" +
                    "An empty targets list indicates a wildcard: that is, this entry shall grant access to all cluster " +
                    "instances on all endpoints on this Node.",

                xref: { document: "core", section: "9.10.4.5.4" }
            },

            Field({ name: "entry", type: "AccessControlTargetStruct" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "AccessControlExtensionStruct", type: "struct", xref: { document: "core", section: "9.10.4.6" } },

        Field({
            name: "Data", id: 0x1, type: "octstr", access: "S", conformance: "M", constraint: "max 128",

            details: "This field may be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s " +
                "Access Control Entries." +
                "\n" +
                "The contents shall consist of a top-level anonymous list; each list element shall include a " +
                "profile-specific tag encoded in fully-qualified form." +
                "\n" +
                "Administrators may iterate over this list of elements, and interpret selected elements at their " +
                "discretion. The content of each element is not specified, but may be coordinated among " +
                "manufacturers at their discretion.",

            xref: { document: "core", section: "9.10.4.6.1" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(AccessControl);
