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

export const JointFabricDatastoreCluster = Cluster(
    {
        name: "JointFabricDatastoreCluster", id: 0x752, classification: "node", pics: "JFDS",

        details: "The Joint Fabric Datastore Cluster is a cluster that provides a mechanism for the Joint Fabric " +
            "Administrators to manage the set of Nodes, Groups, and Group membership among Nodes in the Joint " +
            "Fabric." +
            "\n" +
            "When an Ecosystem Administrator Node is commissioned onto the Joint Fabric, the Ecosystem " +
            "Administrator Node has no knowledge of what Nodes and Groups are present, or what set-up information " +
            "related to the Joint Fabric is provided by the user. To address lack of knowledge, the Joint Fabric " +
            "Datastore provides the information required for all Ecosystem Administrators to maintain a " +
            "consistent view of the Joint Fabric including Nodes, Groups, settings and privileges." +
            "\n" +
            "The Joint Fabric Datastore cluster server shall only be accessible on a Node which is acting as the " +
            "Joint Fabric Anchor Administrator. When not acting as the Joint Fabric Anchor Administrator, the " +
            "Joint Fabric Datastore cluster shall NOT be accessible." +
            "\n" +
            "The Admin level of access to the Joint Fabric Datastore cluster server shall be limited to JF " +
            "Administrator Nodes identified using the Administrator CAT." +
            "\n" +
            "NOTE Support for Joint Fabric Datastore cluster is provisional.",

        xref: { document: "core", section: "11.24" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute({
        name: "AnchorRootCa", id: 0x0, type: "octstr", access: "R S A", conformance: "M",
        details: "This shall indicate the Anchor Root CA used to sign all NOC Issuers in the Joint Fabric. A null " +
            "value indicates that the Joint Fabric is not yet formed.",
        xref: { document: "core", section: "11.24.6.1" }
    }),

    Attribute({
        name: "AnchorNodeId", id: 0x1, type: "node-id", access: "R S A", conformance: "M",
        details: "This shall indicate the Node identifier of the Joint Fabric Anchor Root CA.",
        xref: { document: "core", section: "11.24.6.2" }
    }),
    Attribute({
        name: "AnchorVendorId", id: 0x2, type: "vendor-id", access: "R S A", conformance: "M",
        details: "This shall indicate the Vendor identifier of the Joint Fabric Anchor Root CA.",
        xref: { document: "core", section: "11.24.6.3" }
    }),

    Attribute({
        name: "FriendlyName", id: 0x3, type: "string", access: "R S A", conformance: "M",
        constraint: "max 32",
        details: "Friendly name for this fabric which can be propagated to nodes.",
        xref: { document: "core", section: "11.24.6.4" }
    }),

    Attribute(
        {
            name: "GroupKeySetList", id: 0x4, type: "list", access: "R S A", conformance: "M",
            details: "This shall indicate the list of GroupKeySetStruct used in the Joint Fabric." +
                "\n" +
                "This attribute shall contain at least one entry, the IPK, which has GroupKeySetID of 0.",
            xref: { document: "core", section: "11.24.6.5" }
        },

        Field({ name: "entry", type: "GroupKeyManagement.GroupKeySetStruct" })
    ),

    Attribute(
        {
            name: "GroupList", id: 0x5, type: "list", access: "R S A", conformance: "M",
            details: "This shall indicate the list of groups in the Joint Fabric.",
            xref: { document: "core", section: "11.24.6.6" }
        },
        Field({ name: "entry", type: "DatastoreGroupInformationEntry" })
    ),

    Attribute(
        {
            name: "NodeList", id: 0x6, type: "list", access: "R S A", conformance: "M",
            details: "This shall indicate the list of nodes in the Joint Fabric.",
            xref: { document: "core", section: "11.24.6.7" }
        },
        Field({ name: "entry", type: "DatastoreNodeInformationEntry" })
    ),

    Attribute(
        {
            name: "AdminList", id: 0x7, type: "list", access: "R S A", conformance: "M",

            details: "This shall indicate the list of administrators in the Joint Fabric." +
                "\n" +
                "Only one Administrator may serve as the Anchor Root CA and Anchor Fabric Administrator and shall " +
                "have index value 0. All other Joint Fabric Administrators shall be referenced at index 1 or greater." +
                "\n" +
                "A null value or empty list indicates that the Joint Fabric is not yet formed.",

            xref: { document: "core", section: "11.24.6.8" }
        },

        Field({ name: "entry", type: "DatastoreAdministratorInformationEntry" })
    ),

    Attribute({
        name: "StatusEntry", id: 0x8, type: "DatastoreAdministratorInformationEntry", access: "R S A",
        conformance: "M",
        details: "This shall indicate the current state of the Joint Fabric Datastore Cluster." +
            "\n" +
            "The Committed status indicates the DataStore is ready for use. The Pending status indicates that the " +
            "DataStore is not yet ready for use. The DeletePending status indicates that the DataStore is in the " +
            "process of being transferred to another Joint Fabric Anchor Administrator.",
        xref: { document: "core", section: "11.24.6.9" }
    }),

    Command({
        name: "Section112471", id: 0x0, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112472", id: 0x1, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112473", id: 0x2, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112474", id: 0x3, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112475", id: 0x4, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112476", id: 0x5, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112477", id: 0x6, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112478", id: 0x7, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section112479", id: 0x8, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124710", id: 0x9, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124711", id: 0xa, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124712", id: 0xb, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124713", id: 0xc, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124714", id: 0xd, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124715", id: 0xe, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124716", id: 0xf, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124717", id: 0x10, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124718", id: 0x11, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124719", id: 0x12, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),
    Command({
        name: "Section1124720", id: 0x13, access: "F A", conformance: "M", direction: "request",
        response: "status",
        xref: { document: "core", section: "11.24.7" }
    }),

    Datatype(
        { name: "DatastoreStateEnum", type: "enum8", xref: { document: "core", section: "11.24.5.1" } },
        Field({ name: "Pending", id: 0x0, conformance: "M", description: "Target device operation is pending" }),
        Field({ name: "Committed", id: 0x1, conformance: "M", description: "Target device operation has been committed" }),
        Field({ name: "DeletePending", id: 0x2, conformance: "M", description: "Target device delete operation is pending" })
    ),

    Datatype(
        { name: "DatastoreStatusEntry", type: "struct", xref: { document: "core", section: "11.24.5.2" } },
        Field({
            name: "State", id: 0x0, type: "DatastoreStateEnum", access: "R F V", conformance: "M", default: 0,
            details: "This field shall contain the current state of the target device operation.",
            xref: { document: "core", section: "11.24.5.2.1" }
        }),
        Field({
            name: "UpdateTimestamp", id: 0x1, type: "epoch-s", access: "R F V", conformance: "M", default: null,
            details: "This field shall contain the timestamp of the last update.",
            xref: { document: "core", section: "11.24.5.2.2" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeKeyEntry", type: "struct", xref: { document: "core", section: "11.24.5.3" } },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", access: "R F V", conformance: "M" }),
        Field({
            name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", access: "R F V", conformance: "M",
            details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
            xref: { document: "core", section: "11.24.5.3.2" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupInformationEntry", type: "struct", xref: { document: "core", section: "11.24.5.4" } },
        Field({
            name: "GroupId", id: 0x0, type: "uint64", access: "R F V", conformance: "M",
            details: "The unique identifier for the group.",
            xref: { document: "core", section: "11.24.5.4.1" }
        }),

        Field({
            name: "FriendlyName", id: 0x1, type: "string", access: "R F V", conformance: "M",
            constraint: "max 32",
            details: "The friendly name for the group.",
            xref: { document: "core", section: "11.24.5.4.2" }
        }),

        Field({
            name: "GroupKeySetId", id: 0x2, type: "uint16", access: "R F V", conformance: "M",
            constraint: "1 to 65535",
            details: "The unique identifier for the group key set.",
            xref: { document: "core", section: "11.24.5.4.3" }
        }),

        Field({
            name: "GroupCat", id: 0x3, type: "uint16", access: "R F V", conformance: "M",
            constraint: "1 to 65535",
            details: "CAT value for this group. This is used for control of individual members of a group (non-broadcast " +
                "commands).",
            xref: { document: "core", section: "11.24.5.4.4" }
        }),

        Field({
            name: "GroupCatVersion", id: 0x4, type: "uint16", access: "R F V", conformance: "M",
            constraint: "1 to 65535",
            details: "Current version number for this CAT.",
            xref: { document: "core", section: "11.24.5.4.5" }
        }),

        Field({
            name: "GroupPermission", id: 0x5, type: "AccessControl.AccessControlEntryPrivilegeEnum",
            access: "R F V", conformance: "M",
            details: "The permission level associated with ACL entries for this group. There should be only one " +
                "Administrator group per fabric, and at most one Manage group per Ecosystem (Vendor Entry).",
            xref: { document: "core", section: "11.24.5.4.6" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreBindingEntry", type: "struct", xref: { document: "core", section: "11.24.5.4.7" } },
        Field({
            name: "ListId", id: 0x0, type: "uint16", access: "R F V", conformance: "M",
            details: "The unique identifier for the Binding entry in the Datastore’s list of DatastoreBindingEntry.",
            xref: { document: "core", section: "11.24.5.4.7.1" }
        }),

        Field({
            name: "Binding", id: 0x1, type: "Binding.TargetStruct", access: "R F V", conformance: "M",
            constraint: "desc",
            details: "The binding target structure.",
            xref: { document: "core", section: "11.24.5.4.7.2" }
        }),

        Field({
            name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", access: "R F V", conformance: "M",
            details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
            xref: { document: "core", section: "11.24.5.4.7.3" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreGroupIDEntry", type: "struct", xref: { document: "core", section: "11.24.5.5" } },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", access: "R F V", conformance: "M",
            details: "The unique identifier for the group.",
            xref: { document: "core", section: "11.24.5.5.1" }
        }),
        Field({
            name: "StatusEntry", id: 0x1, type: "DatastoreStatusEntry", access: "R F V", conformance: "M",
            details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
            xref: { document: "core", section: "11.24.5.5.2" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreEndpointEntry", type: "struct", xref: { document: "core", section: "11.24.5.6" } },
        Field({
            name: "EndpointId", id: 0x0, type: "endpoint-no", access: "R F V", conformance: "M",
            details: "The unique identifier for the endpoint.",
            xref: { document: "core", section: "11.24.5.6.1" }
        }),
        Field({
            name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M",
            details: "The unique identifier for the node.",
            xref: { document: "core", section: "11.24.5.6.2" }
        }),

        Field({
            name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M",
            constraint: "max 32",
            details: "Friendly name for this endpoint which is propagated to nodes. Any changes to Friendly Name or Group " +
                "Id List (add/remove entry) must follow the pending→committed workflow with current state reflected " +
                "in the Status Entry.",
            xref: { document: "core", section: "11.24.5.6.3" }
        }),

        Field({
            name: "StatusEntry", id: 0x3, type: "DatastoreStatusEntry", access: "R F V", conformance: "M",
            details: "Indicates whether changes to Friendly Name are pending or committed.",
            xref: { document: "core", section: "11.24.5.6.4" }
        }),

        Field(
            {
                name: "GroupIdList", id: 0x4, type: "list", access: "R F V", conformance: "M",
                details: "List of Group IDs that this endpoint is a member of. Any changes to Group Id List (add/remove entry) " +
                    "must follow the pending→committed workflow with current state reflected in the Status Entry.",
                xref: { document: "core", section: "11.24.5.6.5" }
            },

            Field({ name: "entry", type: "DatastoreGroupIDEntry" })
        ),

        Field(
            {
                name: "BindingList", id: 0x5, type: "list", access: "R F V", conformance: "M",
                details: "List of Binding Targets for this endpoint. Any changes to Binding List (add/remove entry) must " +
                    "follow the pending→committed workflow with current state reflected in the Status Entry.",
                xref: { document: "core", section: "11.24.5.6.6" }
            },

            Field({ name: "entry", type: "DatastoreBindingEntry" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreACLEntry", type: "struct", xref: { document: "core", section: "11.24.5.7" } },
        Field({
            name: "ListId", id: 0x0, type: "uint16", access: "R F V", conformance: "M",
            details: "The unique identifier for the ACL entry in the Datastore’s list of DatastoreACLEntry.",
            xref: { document: "core", section: "11.24.5.7.1" }
        }),

        Field({
            name: "AclEntry", id: 0x1, type: "AccessControl.AccessControlEntryStruct", access: "R F V",
            conformance: "M",
            details: "The Access Control Entry structure.",
            xref: { document: "core", section: "11.24.5.7.2" }
        }),

        Field({
            name: "StatusEntry", id: 0x2, type: "DatastoreStatusEntry", access: "R F V", conformance: "M",
            details: "Indicates whether entry in this list is pending, committed, or delete-pending.",
            xref: { document: "core", section: "11.24.5.7.3" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "DatastoreNodeInformationEntry", type: "struct", xref: { document: "core", section: "11.24.5.8" } },
        Field({
            name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M",
            details: "The unique identifier for the node.",
            xref: { document: "core", section: "11.24.5.8.1" }
        }),

        Field({
            name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M",
            constraint: "max 32",
            details: "Friendly name for this node which is not propagated to nodes.",
            xref: { document: "core", section: "11.24.5.8.2" }
        }),

        Field({
            name: "CommissioningStatusEntry", id: 0x3, type: "DatastoreStatusEntry", access: "R F V",
            conformance: "M",
            details: "Set to pending prior to completing commissioning, and set to completed after commissioning complete " +
                "is successful.",
            xref: { document: "core", section: "11.24.5.8.3" }
        }),

        Field(
            {
                name: "NodeKeySetList", id: 0x4, type: "list", access: "R F V", conformance: "M",
                details: "List of Key Set information for the given Node. Updates to the Group Key List must follow the " +
                    "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                    "entry in the list.",
                xref: { document: "core", section: "11.24.5.8.4" }
            },

            Field({ name: "entry", type: "DatastoreNodeKeyEntry" })
        ),

        Field(
            {
                name: "AclList", id: 0x5, type: "list", access: "R F V", conformance: "M",
                details: "List of ACL entries. Group membership for this node is inferred from the ACLs. Client access to a " +
                    "Node Information Entry will be determined from the ACL List. Any changes to ACL List (add/remove " +
                    "entry) must follow the pending→committed workflow with current state reflected in the Status Entry " +
                    "for the corresponding entry in the list.",
                xref: { document: "core", section: "11.24.5.8.5" }
            },

            Field({ name: "entry", type: "DatastoreACLEntry" })
        ),

        Field(
            {
                name: "EndpointList", id: 0x6, type: "list", access: "R F V", conformance: "M",
                details: "The list of endpoints for this node. Any changes to Endpoint List (add/remove entry) must follow the " +
                    "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                    "entry in the list.",
                xref: { document: "core", section: "11.24.5.8.6" }
            },

            Field({ name: "entry", type: "DatastoreEndpointEntry" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        {
            name: "DatastoreAdministratorInformationEntry", type: "struct",
            xref: { document: "core", section: "11.24.5.9" }
        },
        Field({
            name: "NodeId", id: 0x1, type: "node-id", access: "R F V", conformance: "M",
            details: "The unique identifier for the node.",
            xref: { document: "core", section: "11.24.5.9.1" }
        }),

        Field({
            name: "FriendlyName", id: 0x2, type: "string", access: "R F V", conformance: "M",
            constraint: "max 32",
            details: "Friendly name for this node which is not propagated to nodes.",
            xref: { document: "core", section: "11.24.5.9.2" }
        }),

        Field({
            name: "VendorId", id: 0x3, type: "vendor-id", access: "R F V", conformance: "M",
            details: "The Vendor ID for the node.",
            xref: { document: "core", section: "11.24.5.9.3" }
        }),
        Field({
            name: "Icac", id: 0x4, type: "octstr", access: "R F V", conformance: "M", constraint: "max 400",
            details: "The ICAC used to issue the NOC.",
            xref: { document: "core", section: "11.24.5.9.4" }
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(JointFabricDatastoreCluster);
