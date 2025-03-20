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

export const GroupKeyManagement = Cluster(
    {
        name: "GroupKeyManagement", id: 0x3f, classification: "node", pics: "GRPKEY",

        details: "The Group Key Management cluster manages group keys for the node. The cluster is scoped to the node " +
            "and is a singleton for the node. This cluster maintains a list of groups supported by the node. Each " +
            "group list entry supports a single group, with a single group ID and single group key. Duplicate " +
            "groups are not allowed in the list. Additions or removal of a group entry are performed via " +
            "modifications of the list. Such modifications require Administer privilege." +
            "\n" +
            "Each group entry includes a membership list of zero of more endpoints that are members of the group " +
            "on the node. Modification of this membership list is done via the Groups cluster, which is" +
            "\n" +
            "scoped to an endpoint. Please see the System Model specification for more information on groups.",

        xref: { document: "core", section: "11.2" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.2.4" } },
        Field({
            name: "CS", conformance: "P", constraint: "0", description: "CacheAndSync",
            details: "The ability to support CacheAndSync security policy and MCSP."
        })
    ),

    Attribute(
        {
            name: "GroupKeyMap", id: 0x0, type: "list", access: "RW F VM", conformance: "M", constraint: "desc",
            default: [], quality: "N",
            details: "This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with " +
                "a particular group key set.",
            xref: { document: "core", section: "11.2.6.1" }
        },

        Field({ name: "entry", type: "GroupKeyMapStruct" })
    ),

    Attribute(
        {
            name: "GroupTable", id: 0x1, type: "list", access: "R F V", conformance: "M", constraint: "desc",
            default: [],

            details: "This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information " +
                "about how a given logical Group ID maps to a particular set of endpoints, and a name for the group." +
                "\n" +
                "The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is " +
                "in general terms referred to as the 'node-wide Group Table'." +
                "\n" +
                "The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If " +
                "a RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped " +
                "endpoint, the entire GroupTable entry for that given GroupId shall be removed.",

            xref: { document: "core", section: "11.2.6.2" }
        },

        Field({ name: "entry", type: "GroupInfoMapStruct" })
    ),

    Attribute({
        name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", access: "R V", conformance: "M", default: 0,
        quality: "F",
        details: "Indicates the maximum number of groups that this node supports per fabric. The value of this " +
            "attribute shall be set to be no less than the required minimum supported groups as specified in " +
            "Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the " +
            "value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.",
        xref: { document: "core", section: "11.2.6.3" }
    }),

    Attribute({
        name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", access: "R V", conformance: "M",
        constraint: "1 to 65535", default: 1, quality: "F",
        details: "Indicates the maximum number of group key sets this node supports per fabric. The value of this " +
            "attribute shall be set according to the minimum number of group key sets to support as specified in " +
            "Group Limits.",
        xref: { document: "core", section: "11.2.6.4" }
    }),

    Command(
        {
            name: "KeySetWrite", id: 0x0, access: "F A", conformance: "M", direction: "request",
            response: "status",

            details: "This command is used by Administrators to set the state of a given Group Key Set, including " +
                "atomically updating the state of all epoch keys." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "The following validations shall be done against the content of the GroupKeySet field:" +
                "\n" +
                "  • If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this " +
                "    command shall fail with an INVALID_COMMAND status code responded to the client." +
                "\n" +
                "  • If the EpochKey0 field’s length is not exactly 16 bytes, then this command shall fail with a " +
                "    CONSTRAINT_ERROR status code responded to the client." +
                "\n" +
                "  • If the EpochStartTime0 is set to 0, then this command shall fail with an INVALID_COMMAND status " +
                "    code responded to the client. Note that internally, a GroupKeySetStruct’s EpochStartTime0 may be " +
                "    set to zero, due to the behavior of the AddNOC command which synthesizes a GroupKeySetStruct " +
                "    (see IPKValue). However, the value 0 is illegal in the GroupKeySet field sent by a client." +
                "\n" +
                "  • If the EpochKey1 field is not null, then the EpochKey0 field shall NOT be null. Otherwise this " +
                "    command shall fail with an INVALID_COMMAND status code responded to the client." +
                "\n" +
                "  • If the EpochKey1 field is not null, and the field’s length is not exactly 16 bytes, then this " +
                "    command shall fail with a CONSTRAINT_ERROR status code responded to the client." +
                "\n" +
                "  • If the EpochKey1 field is not null, its associated EpochStartTime1 field shall NOT be null and " +
                "    shall contain a later epoch start time than the epoch start time found in the EpochStartTime0 " +
                "    field. Otherwise this command shall fail with an INVALID_COMMAND status code responded to the " +
                "    client." +
                "\n" +
                "  • If exactly one of the EpochKey1 or EpochStartTime1 is null, rather than both being null, or " +
                "    neither being null, then this command shall fail with an INVALID_COMMAND status code responded " +
                "    to the client." +
                "\n" +
                "  • If the EpochKey2 field is not null, then the EpochKey1 and EpochKey0 fields shall NOT be null. " +
                "    Otherwise this command shall fail with an INVALID_COMMAND status code responded to the client." +
                "\n" +
                "  • If the EpochKey2 field is not null, and the field’s length is not exactly 16 bytes, then this " +
                "    command shall fail with a CONSTRAINT_ERROR status code responded to the client." +
                "\n" +
                "  • If the EpochKey2 field is not null, its associated EpochStartTime2 field shall NOT be null and " +
                "    shall contain a later epoch start time than the epoch start time found in the EpochStartTime1 " +
                "    field. Otherwise this command shall fail with an INVALID_COMMAND status code responded to the " +
                "    client." +
                "\n" +
                "  • If exactly one of the EpochKey2 or EpochStartTime2 is null, rather than both being null, or " +
                "    neither being null, then this command shall fail with an INVALID_COMMAND status code responded " +
                "    to the client." +
                "\n" +
                "If there exists a Group Key Set associated with the accessing fabric which has the same " +
                "GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set " +
                "shall be" +
                "\n" +
                "replaced. A replacement shall be done by executing the equivalent of entirely removing the previous " +
                "Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set with the " +
                "provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a new Group " +
                "Key Set associated with the accessing fabric shall be created with the provided data. The Group Key " +
                "Set shall be written to non-volatile storage." +
                "\n" +
                "Upon completion, this command shall send a status code back to the initiator:" +
                "\n" +
                "  • If the Group Key Set was properly installed or updated on the Node, the status code shall be set " +
                "    to SUCCESS." +
                "\n" +
                "  • If there are insufficient resources on the receiver to store an additional Group Key Set, the " +
                "    status code shall be set to RESOURCE_EXHAUSTED (see group key limits);" +
                "\n" +
                "  • Otherwise, this status code shall be set to FAILURE.",

            xref: { document: "core", section: "11.2.7.1" }
        },

        Field({ name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetRead", id: 0x1, access: "F A", conformance: "M", direction: "request",
            response: "KeySetReadResponse",

            details: "This command is used by Administrators to read the state of a given Group Key Set." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "If there exists a Group Key Set associated with the accessing fabric which has the same " +
                "GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set " +
                "shall be sent in a KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 " +
                "fields replaced by null." +
                "\n" +
                "Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing " +
                "fabric, then this command shall fail with a NOT_FOUND status code.",

            xref: { document: "core", section: "11.2.7.2" }
        },

        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
            details: "This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was " +
                "found. It shall contain the configuration of the requested Group Key Set, with the EpochKey0, " +
                "EpochKey1 and EpochKey2 key contents replaced by null.",
            xref: { document: "core", section: "11.2.7.3" }
        },

        Field({ name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetRemove", id: 0x3, access: "F A", conformance: "M", direction: "request",
            response: "status",

            details: "This command is used by Administrators to remove all state of a given Group Key Set." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "If there exists a Group Key Set associated with the accessing fabric which has the same " +
                "GroupKeySetID as that provided in the GroupKeySetID field, then the contents of that Group Key Set " +
                "shall be removed, including all epoch keys it contains." +
                "\n" +
                "If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to " +
                "the GroupKeySetID just removed, then these entries shall be removed from that list." +
                "\n" +
                "This command shall fail with an INVALID_COMMAND status code back to the initiator if the " +
                "GroupKeySetID being removed is 0, which is the Key Set associated with the Identity Protection Key " +
                "(IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation which " +
                "causes the equivalent of a RemoveFabric to occur by side-effect." +
                "\n" +
                "This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the " +
                "GroupKeySetID requested did not exist.",

            xref: { document: "core", section: "11.2.7.4" }
        },

        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetReadAllIndices", id: 0x4, access: "F A", conformance: "M", direction: "request",
            response: "KeySetReadAllIndicesResponse",

            details: "This command is used by Administrators to query a list of all Group Key Sets associated with the " +
                "accessing fabric." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing " +
                "fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID " +
                "values from those structs.",

            xref: { document: "core", section: "11.2.7.5" }
        },

        Field({ name: "DoNotUse", id: 0x0, conformance: "X" })
    ),

    Command(
        {
            name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M", direction: "response",
            details: "This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of " +
                "GroupKeySetID for all Group Key Sets associated with the scoped Fabric.",
            xref: { document: "core", section: "11.2.7.6" }
        },

        Field(
            {
                name: "GroupKeySetIDs", id: 0x0, type: "list", conformance: "M",
                details: "This field references the set of group keys that generate operational group keys for use with the " +
                    "accessing fabric." +
                    "\n" +
                    "Each entry in GroupKeySetIDs is a GroupKeySetID field.",
                xref: { document: "core", section: "11.2.7.6.1" }
            },

            Field({ name: "entry", type: "uint16" })
        )
    ),

    Datatype(
        { name: "GroupKeySecurityPolicyEnum", type: "enum8", xref: { document: "core", section: "11.2.5.1" } },
        Field({
            name: "TrustFirst", id: 0x0, conformance: "M",
            description: "Message counter synchronization using trust-first"
        }),
        Field({
            name: "CacheAndSync", id: 0x1, conformance: "CS",
            description: "Message counter synchronization using cache-and-sync"
        })
    ),

    Datatype(
        { name: "GroupKeyMulticastPolicyEnum", type: "enum8", xref: { document: "core", section: "11.2.5.2" } },

        Field({
            name: "PerGroupId", id: 0x0, conformance: "M",
            description: "Indicates filtering of multicast messages for a specific Group ID",
            details: "The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.",
            xref: { document: "core", section: "11.2.5.2.1" }
        }),

        Field({
            name: "AllNodes", id: 0x1, conformance: "M",
            description: "Indicates not filtering of multicast messages",
            details: "The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.",
            xref: { document: "core", section: "11.2.5.2.2" }
        })
    ),

    Datatype(
        { name: "GroupKeyMapStruct", type: "struct", xref: { document: "core", section: "11.2.5.3" } },
        Field({
            name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M",
            details: "This field uniquely identifies the group within the scope of the given Fabric.",
            xref: { document: "core", section: "11.2.5.3.1" }
        }),

        Field({
            name: "GroupKeySetId", id: 0x2, type: "uint16", access: "F", conformance: "M",
            constraint: "1 to 65535",
            details: "This field references the set of group keys that generate operational group keys for use with this " +
                "group, as specified in Section 4.17.3.5.1, “Group Key Set ID”." +
                "\n" +
                "A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.",
            xref: { document: "core", section: "11.2.5.3.2" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "GroupKeySetStruct", type: "struct", xref: { document: "core", section: "11.2.5.4" } },

        Field({
            name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M",
            details: "This field shall provide the fabric-unique index for the associated group key set, as specified in " +
                "Section 4.17.3.5.1, “Group Key Set ID”.",
            xref: { document: "core", section: "11.2.5.4.1" }
        }),

        Field({
            name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum", access: "S",
            conformance: "M",
            details: "This field shall provide the security policy for an operational group key set." +
                "\n" +
                "When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set " +
                "CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.",
            xref: { document: "core", section: "11.2.5.4.2" }
        }),

        Field({
            name: "EpochKey0", id: 0x2, type: "octstr", access: "S", conformance: "M", constraint: "16",
            quality: "X",
            details: "This field, if not null, shall be the root credential used in the derivation of an operational group " +
                "key for epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 shall NOT " +
                "be null.",
            xref: { document: "core", section: "11.2.5.4.3" }
        }),

        Field({
            name: "EpochStartTime0", id: 0x3, type: "epoch-us", access: "S", conformance: "M", quality: "X",
            details: "This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.17.3, " +
                "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
            xref: { document: "core", section: "11.2.5.4.4" }
        }),

        Field({
            name: "EpochKey1", id: 0x4, type: "octstr", access: "S", conformance: "M", constraint: "16",
            quality: "X",
            details: "This field, if not null, shall be the root credential used in the derivation of an operational group " +
                "key for epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 shall NOT " +
                "be null.",
            xref: { document: "core", section: "11.2.5.4.5" }
        }),

        Field({
            name: "EpochStartTime1", id: 0x5, type: "epoch-us", access: "S", conformance: "M", quality: "X",
            details: "This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.17.3, " +
                "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
            xref: { document: "core", section: "11.2.5.4.6" }
        }),

        Field({
            name: "EpochKey2", id: 0x6, type: "octstr", access: "S", conformance: "M", constraint: "16",
            quality: "X",
            details: "This field, if not null, shall be the root credential used in the derivation of an operational group " +
                "key for epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 shall NOT " +
                "be null.",
            xref: { document: "core", section: "11.2.5.4.7" }
        }),

        Field({
            name: "EpochStartTime2", id: 0x7, type: "epoch-us", access: "S", conformance: "M", quality: "X",
            details: "This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.17.3, " +
                "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
            xref: { document: "core", section: "11.2.5.4.8" }
        }),

        Field({
            name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum", access: "S",
            conformance: "O", default: 0,

            details: "This field specifies how the IPv6 Multicast Address shall be formed for groups using this " +
                "operational group key set." +
                "\n" +
                "The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive " +
                "only multicast messages for groups to which they are subscribed." +
                "\n" +
                "The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to " +
                "subscribe." +
                "\n" +
                "NOTE" +
                "\n" +
                "Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by " +
                "value PerGroupID.",

            xref: { document: "core", section: "11.2.5.4.9" }
        })
    ),

    Datatype(
        { name: "GroupInfoMapStruct", type: "struct", xref: { document: "core", section: "11.2.5.5" } },
        Field({
            name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M",
            details: "This field uniquely identifies the group within the scope of the given Fabric.",
            xref: { document: "core", section: "11.2.5.5.1" }
        }),

        Field(
            {
                name: "Endpoints", id: 0x2, type: "list", access: "F", conformance: "M", constraint: "min 1",
                details: "This field provides the list of Endpoint IDs on the Node to which messages to this group shall be " +
                    "forwarded.",
                xref: { document: "core", section: "11.2.5.5.2" }
            },

            Field({ name: "entry", type: "endpoint-no" })
        ),

        Field({
            name: "GroupName", id: 0x3, type: "string", access: "F", conformance: "O", constraint: "max 16",
            details: "This field provides a name for the group. This field shall contain the last GroupName written for a " +
                "given GroupId on any Endpoint via the Groups cluster.",
            xref: { document: "core", section: "11.2.5.5.3" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(GroupKeyManagement);
