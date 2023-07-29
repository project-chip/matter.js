/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "GroupKeyManagement", id: 0x3f, classification: "node",
    description: "Group Key Management",
    details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",
    xref: { document: "core", section: "11.2" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.2.5" },
            children: [{
                tag: "datatype", name: "CS", constraint: "0", description: "CacheAndSync",
                details: "The ability to support CacheAndSync security policy and MCSP."
            }]
        },

        {
            tag: "attribute", name: "GroupKeyMap", id: 0x0, type: "list", access: "RW F VM", conformance: "M",
            constraint: "max 254", default: [], quality: "N",
            details: "This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id " +
                "with a particular group key set.",
            xref: { document: "core", section: "11.2.7.1" },
            children: [{ tag: "datatype", name: "entry", type: "GroupKeyMapStruct" }]
        },

        {
            tag: "attribute", name: "GroupTable", id: 0x1, type: "list", access: "R F", conformance: "M",
            constraint: "max 254", default: [],

            details: "This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information " +
                "about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. " +
                "The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and " +
                "is in general terms referred to as the 'node-wide Group Table'." +
                "\n" +
                "The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If " +
                "a RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped " +
                "endpoint, the entire GroupTable entry for that given GroupId shall be removed.",

            xref: { document: "core", section: "11.2.7.2" },
            children: [{ tag: "datatype", name: "entry", type: "GroupInfoMapStruct" }]
        },

        {
            tag: "attribute", name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", conformance: "M", default: 0,
            quality: "F",
            details: "This attribute shall indicate the maximum number of groups that this node supports per fabric. The " +
                "value of this attribute shall be set to be no less than the required minimum supported groups as " +
                "specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT " +
                "exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.",
            xref: { document: "core", section: "11.2.7.3" }
        },

        {
            tag: "attribute", name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", conformance: "M",
            constraint: "1 to 65535", default: 1, quality: "F",
            details: "This attribute shall indicate the maximum number of group key sets this node supports per fabric. " +
                "The value of this attribute shall be set according to the minimum number of group key sets to " +
                "support as specified in Group Limits.",
            xref: { document: "core", section: "11.2.7.4" }
        },

        {
            tag: "command", name: "KeySetWrite", id: 0x0, access: "F A", conformance: "M", direction: "request",
            response: "status",

            details: "This command is used by Administrators to set the state of a given Group Key Set, including " +
                "atomically updating the state of all epoch keys." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command " +
                "shall fail with an INVALID_COMMAND status code sent back to the initiator." +
                "\n" +
                "If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later " +
                "epoch start time than the epoch start time found in the EpochStartTime0 field. Otherwise this " +
                "command shall fail with an INVALID_COMMAND status code sent back to the initiator." +
                "\n" +
                "If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this " +
                "command shall fail with an INVALID_COMMAND status code sent back to the initiator." +
                "\n" +
                "If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later " +
                "epoch start time than the epoch start time found in the EpochStartTime1 field. Otherwise this " +
                "command shall fail with an INVALID_COMMAND status code sent back to the initiator." +
                "\n" +
                "If there exists a Group Key Set associated with the accessing fabric which has the same " +
                "GroupKeySetID as that provided in the GroupKeySet field, then the contents of that group key set " +
                "shall be replaced. A replacement shall be done by executing the equivalent of entirely removing the " +
                "previous Group Key Set with the given GroupKeySetID, followed by an addition of a Group Key Set " +
                "with the provided configuration. Otherwise, if the GroupKeySetID did not match an existing entry, a " +
                "new Group Key Set associated with the accessing fabric shall be created with the provided data. The " +
                "Group Key Set shall be written to non-volatile storage." +
                "\n" +
                "Upon completion, this command shall send a status code back to the initiator:" +
                "\n" +
                "  • If the Group Key Set was properly installed or updated on the Node, the status code shall be " +
                "    set to SUCCESS." +
                "\n" +
                "  • If there are insufficient resources on the receiver to store an additional Group Key Set, the " +
                "    status code shall be set to RESOURCE_EXHAUSTED (see group key limits);" +
                "\n" +
                "  • Otherwise, this status code shall be set to FAILURE.",

            xref: { document: "core", section: "11.2.8.1" },
            children: [{ tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" }]
        },

        {
            tag: "command", name: "KeySetRead", id: 0x1, access: "F A", conformance: "M", direction: "request",
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

            xref: { document: "core", section: "11.2.8.2" },
            children: [{ tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" }]
        },

        {
            tag: "command", name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
            details: "This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was " +
                "found. It shall contain the configuration of the requested Group Key Set, with the EpochKey0, " +
                "EpochKey1 and EpochKey2 key contents replaced by null.",
            xref: { document: "core", section: "11.2.8.3" },
            children: [{ tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" }]
        },

        {
            tag: "command", name: "KeySetRemove", id: 0x3, access: "F A", conformance: "M",
            direction: "request", response: "status",

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
                "(IPK). The only method to remove the IPK is usage of the RemoveFabric command or any operation " +
                "which causes the equivalent of a RemoveFabric to occur by side-effect." +
                "\n" +
                "This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the " +
                "GroupKeySetID requested did not exist.",

            xref: { document: "core", section: "11.2.8.4" },
            children: [{ tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" }]
        },

        {
            tag: "command", name: "KeySetReadAllIndices", id: 0x4, access: "F A", conformance: "M",
            direction: "request", response: "KeySetReadAllIndicesResponse",

            details: "This command is used by Administrators to query a list of all Group Key Sets associated with the " +
                "accessing fabric." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing " +
                "fabric and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID " +
                "values from those structs.",

            xref: { document: "core", section: "11.2.8.5" },
            children: [{
                tag: "datatype", name: "GroupKeySetIDs", id: 0x1, type: "list", conformance: "X",
                children: [{ tag: "datatype", name: "entry", type: "uint16" }]
            }]
        },

        {
            tag: "command", name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M",
            direction: "response",

            details: "This command shall be generated in response to KeySetReadAllIndices and it shall contain the list " +
                "of GroupKeySetID for all Group Key Sets associated with the scoped Fabric." +
                "\n" +
                "GroupKeySetIDs" +
                "\n" +
                "This field references the set of group keys that generate operational group keys for use with the " +
                "accessing fabric." +
                "\n" +
                "Each entry in GroupKeySetIDs is a GroupKeySetID field.",

            xref: { document: "core", section: "11.2.8.6" },
            children: [{
                tag: "datatype", name: "GroupKeySetIDs", id: 0x0, type: "list", conformance: "M",
                children: [{ tag: "datatype", name: "entry", type: "uint16" }]
            }]
        },

        {
            tag: "datatype", name: "GroupKeySecurityPolicyEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.2.6.1" },

            children: [
                {
                    tag: "datatype", name: "TrustFirst", id: 0x0, conformance: "M",
                    description: "Message counter synchronization using trust-first"
                },
                {
                    tag: "datatype", name: "CacheAndSync", id: 0x1, conformance: "CS",
                    description: "Message counter synchronization using cache-and-sync"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeyMulticastPolicyEnum", type: "enum8",
            xref: { document: "core", section: "11.2.6.2" },

            children: [
                {
                    tag: "datatype", name: "PerGroupId", id: 0x0, conformance: "M",
                    description: "Indicates filtering of multicast messages for a specific Group ID",
                    details: "The 16-bit Group Identifier of the Multicast Address shall be the Group ID of the group.",
                    xref: { document: "core", section: "11.2.6.2.1" }
                },

                {
                    tag: "datatype", name: "AllNodes", id: 0x1, conformance: "M",
                    description: "Indicates not filtering of multicast messages",
                    details: "The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF.",
                    xref: { document: "core", section: "11.2.6.2.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeyMapStruct", type: "struct", access: "R F", conformance: "M",
            xref: { document: "core", section: "11.2.6.3" },

            children: [
                {
                    tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M",
                    details: "This field uniquely identifies the group within the scope of the given Fabric.",
                    xref: { document: "core", section: "11.2.6.3.1" }
                },

                {
                    tag: "datatype", name: "GroupKeySetId", id: 0x2, type: "uint16", access: "F", conformance: "M",
                    constraint: "1 to 65535",
                    details: "This field references the set of group keys that generate operational group keys for use with this" +
                        "\n" +
                        "group, as specified in Section 4.15.3.5.1, “Group Key Set ID”." +
                        "\n" +
                        "A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK.",
                    xref: { document: "core", section: "11.2.6.3.2" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V",
                    conformance: "M", constraint: "1 to 254"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeySetStruct", type: "struct", conformance: "M",
            details: "This field shall provide the fabric-unique index for the associated group key set, as specified in " +
                "Section 4.15.3.5.1, “Group Key Set ID”.",
            xref: { document: "core", section: "11.2.6.4" },

            children: [
                { tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum",
                    access: "S", conformance: "M",
                    details: "This field shall provide the security policy for an operational group key set." +
                        "\n" +
                        "When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set " +
                        "CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.",
                    xref: { document: "core", section: "11.2.6.4.1" }
                },

                {
                    tag: "datatype", name: "EpochKey0", id: 0x2, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X",
                    details: "This field, if not null, shall be the root credential used in the derivation of an operational " +
                        "group key for epoch slot 0 of the given group key set. If EpochKey0 is not null, EpochStartTime0 " +
                        "shall NOT be null.",
                    xref: { document: "core", section: "11.2.6.4.2" }
                },

                {
                    tag: "datatype", name: "EpochStartTime0", id: 0x3, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X",
                    details: "This field, if not null, shall define when EpochKey0 becomes valid as specified by Section 4.15.3, " +
                        "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
                    xref: { document: "core", section: "11.2.6.4.3" }
                },

                {
                    tag: "datatype", name: "EpochKey1", id: 0x4, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X",
                    details: "This field, if not null, shall be the root credential used in the derivation of an operational " +
                        "group key for epoch slot 1 of the given group key set. If EpochKey1 is not null, EpochStartTime1 " +
                        "shall NOT be null.",
                    xref: { document: "core", section: "11.2.6.4.4" }
                },

                {
                    tag: "datatype", name: "EpochStartTime1", id: 0x5, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X",
                    details: "This field, if not null, shall define when EpochKey1 becomes valid as specified by Section 4.15.3, " +
                        "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
                    xref: { document: "core", section: "11.2.6.4.5" }
                },

                {
                    tag: "datatype", name: "EpochKey2", id: 0x6, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X",
                    details: "This field, if not null, shall be the root credential used in the derivation of an operational " +
                        "group key for epoch slot 2 of the given group key set. If EpochKey2 is not null, EpochStartTime2 " +
                        "shall NOT be null.",
                    xref: { document: "core", section: "11.2.6.4.6" }
                },

                {
                    tag: "datatype", name: "EpochStartTime2", id: 0x7, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X",
                    details: "This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, " +
                        "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation.",
                    xref: { document: "core", section: "11.2.6.4.7" }
                },

                {
                    tag: "datatype", name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum",
                    access: "S", conformance: "P, M",

                    details: "This field specifies how the IPv6 Multicast Address shall be formed for groups using this " +
                        "operational group key set." +
                        "\n" +
                        "The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive " +
                        "only multicast messages for groups to which they are subscribed." +
                        "\n" +
                        "The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to " +
                        "subscribe." +
                        "\n" +
                        "NOTE Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied " +
                        "by value PerGroupID.",

                    xref: { document: "core", section: "11.2.6.4.8" }
                }
            ]
        },

        {
            tag: "datatype", name: "GroupInfoMapStruct", type: "struct", access: "R F", conformance: "M",
            details: "This field uniquely identifies the group within the scope of the given Fabric.",
            xref: { document: "core", section: "11.2.6.5" },

            children: [
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "R F", conformance: "M" },

                {
                    tag: "datatype", name: "Endpoints", id: 0x2, type: "list", access: "R F", conformance: "M",
                    constraint: "min 1",
                    details: "This field provides the list of Endpoint IDs on the Node to which messages to this group shall be " +
                        "forwarded.",
                    xref: { document: "core", section: "11.2.6.5.1" },
                    children: [{ tag: "datatype", name: "entry", type: "endpoint-no" }]
                },

                {
                    tag: "datatype", name: "GroupName", id: 0x3, type: "string", access: "R F", conformance: "O",
                    constraint: "max 16",
                    details: "This field provides a name for the group. This field shall contain the last GroupName written for a " +
                        "given GroupId on any Endpoint via the Groups cluster.",
                    xref: { document: "core", section: "11.2.6.5.2" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V",
                    conformance: "M", constraint: "1 to 254"
                }
            ]
        }
    ]
});
