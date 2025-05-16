/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "JointFabricDatastore", classification: "node", pics: "JFDS",
    xref: "core§11.24",

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
        "Administrator Nodes identified using the Administrator CAT.",

    children: [
        {
            tag: "attribute", name: "AnchorRootCa", xref: "core§11.24.6.1",
            details: "This shall indicate the Anchor Root CA used to sign all NOC Issuers in the Joint Fabric. A null " +
                "value indicates that the Joint Fabric is not yet formed."
        },
        {
            tag: "attribute", name: "AnchorNodeId", xref: "core§11.24.6.2",
            details: "This shall indicate the Node identifier of the Joint Fabric Anchor Root CA."
        },
        {
            tag: "attribute", name: "AnchorVendorId", xref: "core§11.24.6.3",
            details: "This shall indicate the Vendor identifier of the Joint Fabric Anchor Root CA."
        },
        {
            tag: "attribute", name: "FriendlyName", xref: "core§11.24.6.4",
            details: "Friendly name for this fabric which can be propagated to nodes."
        },

        {
            tag: "attribute", name: "GroupKeySetList", xref: "core§11.24.6.5",
            details: "This shall indicate the list of GroupKeySetStruct used in the Joint Fabric." +
                "\n" +
                "This attribute shall contain at least one entry, the IPK, which has GroupKeySetID of 0."
        },

        {
            tag: "attribute", name: "GroupList", xref: "core§11.24.6.6",
            details: "This shall indicate the list of groups in the Joint Fabric."
        },
        {
            tag: "attribute", name: "NodeList", xref: "core§11.24.6.7",
            details: "This shall indicate the list of nodes in the Joint Fabric."
        },

        {
            tag: "attribute", name: "AdminList", xref: "core§11.24.6.8",

            details: "This shall indicate the list of administrators in the Joint Fabric." +
                "\n" +
                "Only one Administrator may serve as the Anchor Root CA and Anchor Fabric Administrator and shall " +
                "have index value 0. All other Joint Fabric Administrators shall be referenced at index 1 or greater." +
                "\n" +
                "A null value or empty list indicates that the Joint Fabric is not yet formed."
        },

        {
            tag: "attribute", name: "StatusEntry", xref: "core§11.24.6.9",
            details: "This shall indicate the current state of the Joint Fabric Datastore Cluster." +
                "\n" +
                "The Committed status indicates the DataStore is ready for use. The Pending status indicates that the " +
                "DataStore is not yet ready for use. The DeletePending status indicates that the DataStore is in the " +
                "process of being transferred to another Joint Fabric Anchor Administrator."
        },

        { tag: "command", name: "Section112471", xref: "core§11.24.7" },
        { tag: "command", name: "Section112472", xref: "core§11.24.7" },
        { tag: "command", name: "Section112473", xref: "core§11.24.7" },
        { tag: "command", name: "Section112474", xref: "core§11.24.7" },
        { tag: "command", name: "Section112475", xref: "core§11.24.7" },
        { tag: "command", name: "Section112476", xref: "core§11.24.7" },
        { tag: "command", name: "Section112477", xref: "core§11.24.7" },
        { tag: "command", name: "Section112478", xref: "core§11.24.7" },
        { tag: "command", name: "Section112479", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124710", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124711", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124712", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124713", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124714", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124715", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124716", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124717", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124718", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124719", xref: "core§11.24.7" },
        { tag: "command", name: "Section1124720", xref: "core§11.24.7" },

        {
            tag: "datatype", name: "DatastoreStateEnum", xref: "core§11.24.5.1",
            children: [
                { tag: "field", name: "Pending", description: "Target device operation is pending" },
                { tag: "field", name: "Committed", description: "Target device operation has been committed" },
                { tag: "field", name: "DeletePending", description: "Target device delete operation is pending" }
            ]
        },

        {
            tag: "datatype", name: "DatastoreStatusEntry", xref: "core§11.24.5.2",

            children: [
                {
                    tag: "field", name: "State", xref: "core§11.24.5.2.1",
                    details: "This field shall contain the current state of the target device operation."
                },
                {
                    tag: "field", name: "UpdateTimestamp", xref: "core§11.24.5.2.2",
                    details: "This field shall contain the timestamp of the last update."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreNodeKeyEntry", xref: "core§11.24.5.3",
            children: [{
                tag: "field", name: "StatusEntry", xref: "core§11.24.5.3.2",
                details: "Indicates whether entry in this list is pending, committed, or delete-pending."
            }]
        },

        {
            tag: "datatype", name: "DatastoreGroupInformationEntry", xref: "core§11.24.5.4",

            children: [
                {
                    tag: "field", name: "GroupId", xref: "core§11.24.5.4.1",
                    details: "The unique identifier for the group."
                },
                {
                    tag: "field", name: "FriendlyName", xref: "core§11.24.5.4.2",
                    details: "The friendly name for the group."
                },
                {
                    tag: "field", name: "GroupKeySetId", xref: "core§11.24.5.4.3",
                    details: "The unique identifier for the group key set."
                },
                {
                    tag: "field", name: "GroupCat", xref: "core§11.24.5.4.4",
                    details: "CAT value for this group. This is used for control of individual members of a group (non-broadcast " +
                        "commands)."
                },
                {
                    tag: "field", name: "GroupCatVersion", xref: "core§11.24.5.4.5",
                    details: "Current version number for this CAT."
                },
                {
                    tag: "field", name: "GroupPermission", xref: "core§11.24.5.4.6",
                    details: "The permission level associated with ACL entries for this group. There should be only one " +
                        "Administrator group per fabric, and at most one Manage group per Ecosystem (Vendor Entry)."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreBindingEntry", xref: "core§11.24.5.4.7",

            children: [
                {
                    tag: "field", name: "ListId", xref: "core§11.24.5.4.7.1",
                    details: "The unique identifier for the Binding entry in the Datastore’s list of DatastoreBindingEntry."
                },
                { tag: "field", name: "Binding", xref: "core§11.24.5.4.7.2", details: "The binding target structure." },
                {
                    tag: "field", name: "StatusEntry", xref: "core§11.24.5.4.7.3",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreGroupIDEntry", xref: "core§11.24.5.5",

            children: [
                {
                    tag: "field", name: "GroupId", xref: "core§11.24.5.5.1",
                    details: "The unique identifier for the group."
                },
                {
                    tag: "field", name: "StatusEntry", xref: "core§11.24.5.5.2",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreEndpointEntry", xref: "core§11.24.5.6",

            children: [
                {
                    tag: "field", name: "EndpointId", xref: "core§11.24.5.6.1",
                    details: "The unique identifier for the endpoint."
                },
                {
                    tag: "field", name: "NodeId", xref: "core§11.24.5.6.2",
                    details: "The unique identifier for the node."
                },

                {
                    tag: "field", name: "FriendlyName", xref: "core§11.24.5.6.3",
                    details: "Friendly name for this endpoint which is propagated to nodes. Any changes to Friendly Name or Group " +
                        "Id List (add/remove entry) must follow the pending→committed workflow with current state reflected " +
                        "in the Status Entry."
                },

                {
                    tag: "field", name: "StatusEntry", xref: "core§11.24.5.6.4",
                    details: "Indicates whether changes to Friendly Name are pending or committed."
                },
                {
                    tag: "field", name: "GroupIdList", xref: "core§11.24.5.6.5",
                    details: "List of Group IDs that this endpoint is a member of. Any changes to Group Id List (add/remove entry) " +
                        "must follow the pending→committed workflow with current state reflected in the Status Entry."
                },
                {
                    tag: "field", name: "BindingList", xref: "core§11.24.5.6.6",
                    details: "List of Binding Targets for this endpoint. Any changes to Binding List (add/remove entry) must " +
                        "follow the pending→committed workflow with current state reflected in the Status Entry."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreACLEntry", xref: "core§11.24.5.7",

            children: [
                {
                    tag: "field", name: "ListId", xref: "core§11.24.5.7.1",
                    details: "The unique identifier for the ACL entry in the Datastore’s list of DatastoreACLEntry."
                },
                {
                    tag: "field", name: "AclEntry", xref: "core§11.24.5.7.2",
                    details: "The Access Control Entry structure."
                },
                {
                    tag: "field", name: "StatusEntry", xref: "core§11.24.5.7.3",
                    details: "Indicates whether entry in this list is pending, committed, or delete-pending."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreNodeInformationEntry", xref: "core§11.24.5.8",

            children: [
                {
                    tag: "field", name: "NodeId", xref: "core§11.24.5.8.1",
                    details: "The unique identifier for the node."
                },
                {
                    tag: "field", name: "FriendlyName", xref: "core§11.24.5.8.2",
                    details: "Friendly name for this node which is not propagated to nodes."
                },
                {
                    tag: "field", name: "CommissioningStatusEntry", xref: "core§11.24.5.8.3",
                    details: "Set to pending prior to completing commissioning, and set to completed after commissioning complete " +
                        "is successful."
                },

                {
                    tag: "field", name: "NodeKeySetList", xref: "core§11.24.5.8.4",
                    details: "List of Key Set information for the given Node. Updates to the Group Key List must follow the " +
                        "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                        "entry in the list."
                },

                {
                    tag: "field", name: "AclList", xref: "core§11.24.5.8.5",
                    details: "List of ACL entries. Group membership for this node is inferred from the ACLs. Client access to a " +
                        "Node Information Entry will be determined from the ACL List. Any changes to ACL List (add/remove " +
                        "entry) must follow the pending→committed workflow with current state reflected in the Status Entry " +
                        "for the corresponding entry in the list."
                },

                {
                    tag: "field", name: "EndpointList", xref: "core§11.24.5.8.6",
                    details: "The list of endpoints for this node. Any changes to Endpoint List (add/remove entry) must follow the " +
                        "pending→committed workflow with current state reflected in the Status Entry for the corresponding " +
                        "entry in the list."
                }
            ]
        },

        {
            tag: "datatype", name: "DatastoreAdministratorInformationEntry", xref: "core§11.24.5.9",

            children: [
                {
                    tag: "field", name: "NodeId", xref: "core§11.24.5.9.1",
                    details: "The unique identifier for the node."
                },
                {
                    tag: "field", name: "FriendlyName", xref: "core§11.24.5.9.2",
                    details: "Friendly name for this node which is not propagated to nodes."
                },
                { tag: "field", name: "VendorId", xref: "core§11.24.5.9.3", details: "The Vendor ID for the node." },
                { tag: "field", name: "Icac", xref: "core§11.24.5.9.4", details: "The ICAC used to issue the NOC." }
            ]
        }
    ]
});
