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

export const Groups = Cluster(
    {
        name: "Groups", id: 0x4, classification: "endpoint", pics: "G",

        details: "The Groups cluster manages, per endpoint, the content of the node-wide Group Table that is part of " +
            "the underlying interaction layer." +
            "\n" +
            "In a network supporting fabrics, group IDs referenced by attributes or other elements of this " +
            "cluster are scoped to the accessing fabric." +
            "\n" +
            "The Groups cluster is scoped to the endpoint. Groups cluster commands support discovering the " +
            "endpoint membership in a group, adding the endpoint to a group, removing the endpoint from a group, " +
            "removing endpoint membership from all groups. All commands defined in this cluster shall only affect " +
            "groups scoped to the accessing fabric." +
            "\n" +
            "When group names are supported, the server stores a name string, which is set by the client for each " +
            "assigned group and indicated in response to a client request." +
            "\n" +
            "Note that configuration of group addresses for outgoing commands is achieved using the Message Layer " +
            "mechanisms where the Group Table is not involved. Hence this cluster does not play a part in that.",

        xref: { document: "cluster", section: "1.3" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.3.4" } },
        Field({
            name: "GN", constraint: "0", default: 1, description: "GroupNames",
            details: "The Group Names feature indicates the ability to store a name for a group when a group is added.",
            xref: { document: "cluster", section: "1.3.4.1" }
        })
    ),

    Attribute(
        {
            name: "NameSupport", id: 0x0, type: "NameSupportBitmap", access: "R V", conformance: "M",
            constraint: "desc", default: 0, quality: "F",
            details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. " +
                "The most significant bit, bit 7 (GroupNames), shall be equal to bit 0 of the FeatureMap attribute " +
                "(GN Feature). All other bits shall be 0.",
            xref: { document: "cluster", section: "1.3.6.1" }
        },

        Field({ name: "NameSupport", constraint: "7", default: 1 })
    ),

    Command(
        {
            name: "AddGroup", id: 0x0, access: "F M", conformance: "M", direction: "request",
            response: "AddGroupResponse",
            details: "The AddGroup command allows a client to add group membership in a particular group for the server " +
                "endpoint.",
            xref: { document: "cluster", section: "1.3.7.1" }
        },

        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
            details: "This field shall be used to identify the group and any associated key material to which the server " +
                "endpoint is to be added.",
            xref: { document: "cluster", section: "1.3.7.1.1" }
        }),

        Field({
            name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
            details: "This field may be set to a human-readable name for the group. If the client has no name for the " +
                "group, the GroupName field shall be set to the empty string." +
                "\n" +
                "Support of group names is optional and is indicated by the FeatureMap and NameSupport attribute.",
            xref: { document: "cluster", section: "1.3.7.1.2" }
        })
    ),

    Command(
        {
            name: "ViewGroup", id: 0x1, access: "F O", conformance: "M", direction: "request",
            response: "ViewGroupResponse",
            details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse " +
                "command containing the name string for a particular group.",
            xref: { document: "cluster", section: "1.3.7.2" }
        },

        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" })
    ),

    Command(
        {
            name: "GetGroupMembership", id: 0x2, access: "F O", conformance: "M", direction: "request",
            response: "GetGroupMembershipResponse",
            details: "The GetGroupMembership command allows a client to inquire about the group membership of the server " +
                "endpoint, in a number of ways.",
            xref: { document: "cluster", section: "1.3.7.3" }
        },

        Field(
            { name: "GroupList", id: 0x0, type: "list", conformance: "M", constraint: "all[min 1]" },
            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        {
            name: "RemoveGroup", id: 0x3, access: "F M", conformance: "M", direction: "request",
            response: "RemoveGroupResponse",
            details: "The RemoveGroup command allows a client to request that the server removes the membership for the " +
                "server endpoint, if any, in a particular group.",
            xref: { document: "cluster", section: "1.3.7.4" }
        },

        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" })
    ),

    Command({
        name: "RemoveAllGroups", id: 0x4, access: "F M", conformance: "M", direction: "request",
        response: "status",
        details: "The RemoveAllGroups command allows a client to direct the server to remove all group associations " +
            "for the server endpoint.",
        xref: { document: "cluster", section: "1.3.7.5" }
    }),

    Command(
        {
            name: "AddGroupIfIdentifying", id: 0x5, access: "F M", conformance: "M", direction: "request",
            response: "status",

            details: "The AddGroupIfIdentifying command allows a client to add group membership in a particular group for " +
                "the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality " +
                "is controlled using the Identify cluster, (see Identify Cluster)." +
                "\n" +
                "For correct operation of the AddGroupIfIdentifying command, any endpoint that supports the Groups " +
                "server cluster shall also support the Identify server cluster." +
                "\n" +
                "This command might be used to assist configuring group membership in the absence of a commissioning " +
                "tool.",

            xref: { document: "cluster", section: "1.3.7.6" }
        },

        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
            details: "This field shall be used to identify the group and any associated key material to which the server " +
                "endpoint is to be added.",
            xref: { document: "cluster", section: "1.3.7.6.1" }
        }),

        Field({
            name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
            details: "This field may be set to a human-readable name for the group. If the client has no name for the" +
                "\n" +
                "group, the GroupName field shall be set to the empty string." +
                "\n" +
                "Support of group names is optional and is indicated by the FeatureMap and NameSupport attribute.",
            xref: { document: "cluster", section: "1.3.7.6.2" }
        })
    ),

    Command(
        {
            name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
            details: "The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.",
            xref: { document: "cluster", section: "1.3.7.7" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field is set according to the Effect on Receipt section of the AddGroup command.",
            xref: { document: "cluster", section: "1.3.7.7.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
            details: "This field is set to the GroupID field of the received AddGroup command.",
            xref: { document: "cluster", section: "1.3.7.7.2" }
        })
    ),

    Command(
        {
            name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
            details: "The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup " +
                "command.",
            xref: { document: "cluster", section: "1.3.7.8" }
        },

        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field is according to the Effect on Receipt section of the ViewGroup command.",
            xref: { document: "cluster", section: "1.3.7.8.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
            details: "This field is set to the GroupID field of the received ViewGroup command.",
            xref: { document: "cluster", section: "1.3.7.8.2" }
        }),

        Field({
            name: "GroupName", id: 0x2, type: "string", conformance: "M", constraint: "max 16",
            details: "If the status is SUCCESS, and group names are supported, this field is set to the group name " +
                "associated with that group in the Group Table; otherwise it is set to the empty string.",
            xref: { document: "cluster", section: "1.3.7.8.3" }
        })
    ),

    Command(
        {
            name: "GetGroupMembershipResponse", id: 0x2, conformance: "M", direction: "response",
            details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a " +
                "GetGroupMembership command.",
            xref: { document: "cluster", section: "1.3.7.9" }
        },

        Field({
            name: "Capacity", id: 0x0, type: "uint8", conformance: "M", quality: "X",

            details: "This field shall contain the remaining capacity of the Group Table of the node. The following values " +
                "apply:" +
                "\n" +
                "  • 0 - No further groups may be added." +
                "\n" +
                "  • 0 < Capacity < 0xFE - Capacity holds the number of groups that may be added." +
                "\n" +
                "  • 0xFE - At least 1 further group may be added (exact number is unknown)." +
                "\n" +
                "  • null - It is unknown if any further groups may be added.",

            xref: { document: "cluster", section: "1.3.7.9.1" }
        }),

        Field(
            {
                name: "GroupList", id: 0x1, type: "list", conformance: "M", constraint: "all[min 1]",

                details: "The GroupList field shall contain either the group IDs of all the groups in the Group Table for " +
                    "which the server endpoint is a member of the group (in the case where the GroupList field of the " +
                    "received GetGroupMembership command was empty), or the group IDs of all the groups in the Group " +
                    "Table for which the server endpoint is a member of the group and for which the group ID was included " +
                    "in the the GroupList field of the received GetGroupMembership command (in the case where the " +
                    "GroupList field of the received GetGroupMembership command was not empty)." +
                    "\n" +
                    "Zigbee: If the total number of groups will cause the maximum payload length of a frame to be " +
                    "exceeded, then the GroupList field shall contain only as many groups as will fit.",

                xref: { document: "cluster", section: "1.3.7.9.2" }
            },

            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        {
            name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
            details: "The RemoveGroupResponse command is generated by the server in response to the receipt of a " +
                "RemoveGroup command.",
            xref: { document: "cluster", section: "1.3.7.10" }
        },

        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field is according to the Effect on Receipt section of the RemoveGroup command.",
            xref: { document: "cluster", section: "1.3.7.10.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
            details: "This field is set to the GroupID field of the received RemoveGroup command.",
            xref: { document: "cluster", section: "1.3.7.10.2" }
        })
    ),

    Datatype(
        { name: "NameSupportBitmap", type: "map8", xref: { document: "cluster", section: "1.3.5.1" } },
        Field({ name: "GroupNames", constraint: "7", description: "The ability to store a name for a group." })
    )
);

MatterDefinition.children.push(Groups);
