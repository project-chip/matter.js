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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

Matter.children.push(Cluster({
    name: "Scenes", id: 0x5, classification: "application", description: "Scenes",

    details: "The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene " +
        "corresponds to a set of stored values of specified attributes for one or more clusters on the same " +
        "end point as the Scenes cluster." +
        "\n" +
        "In most cases scenes are associated with a particular group identifier. Scenes may also exist " +
        "without a group, in which case the value 0 replaces the group identifier. Note that extra care is " +
        "required in these cases to avoid a scene identifier collision, and that commands related to scenes " +
        "without a group may only be unicast, i.e., they may not be multicast or broadcast." +
        "\n" +
        "In a network supporting fabrics, scenes are scoped to the accessing fabric. When storing scene " +
        "information, implementations need to take care of this." +
        "\n" +
        "NOTE Support for Scenes cluster is provisional.",

    xref: { document: "cluster", section: "1.4" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

        Attribute({
            name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.4.4" },
            children: [Field({
                name: "SN", constraint: "0", default: 1, description: "SceneNames",
                details: "The ability to store a name for a scene."
            })]
        }),

        Attribute({
            name: "SceneCount", id: 0x0, type: "uint8", access: "R V", conformance: "M", default: 0,
            details: "The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.",
            xref: { document: "cluster", section: "1.4.7.1" }
        }),
        Attribute({
            name: "CurrentScene", id: 0x1, type: "uint8", access: "R V", conformance: "M", default: 0,
            details: "The CurrentScene attribute holds the scene identifier of the scene last invoked.",
            xref: { document: "cluster", section: "1.4.7.2" }
        }),

        Attribute({
            name: "CurrentGroup", id: 0x2, type: "group-id", access: "R V", conformance: "M", default: 0,
            details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene " +
                "last invoked is not associated with a group.",
            xref: { document: "cluster", section: "1.4.7.3" }
        }),

        Attribute({
            name: "SceneValid", id: 0x3, type: "bool", access: "R V", conformance: "M", default: true,

            details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated " +
                "with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, " +
                "FALSE indicates that they are not valid." +
                "\n" +
                "Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful " +
                "StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the " +
                "state of the server is modified, this attribute is set to FALSE.",

            xref: { document: "cluster", section: "1.4.7.4" }
        }),

        Attribute({
            name: "NameSupport", id: 0x4, type: "map8", access: "R V", conformance: "M", constraint: "desc",
            default: 0,
            details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. " +
                "The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other " +
                "bits shall be 0.",
            xref: { document: "cluster", section: "1.4.7.5" },
            children: [Field({
                name: "NameSupport", constraint: "7", default: 1,
                description: "The ability to store a name for a scene."
            })]
        }),

        Attribute({
            name: "LastConfiguredBy", id: 0x5, type: "node-id", access: "R V", conformance: "O", default: null,
            quality: "X",
            details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node " +
                "that last configured the Scene Table." +
                "\n" +
                "The null value indicates that the server has not been configured, or that the identifier of the " +
                "node that last configured the Scenes cluster is not known.",
            xref: { document: "cluster", section: "1.4.7.6" }
        }),

        Command({
            name: "AddScene", id: 0x0, access: "M", conformance: "M", direction: "request",
            response: "AddSceneResponse",
            details: "It is not mandatory for an extension field set to be included in the command for every cluster on " +
                "that endpoint that has a defined extension field set. Extension field sets may be omitted, " +
                "including the case of no extension field sets at all.",
            xref: { document: "cluster", section: "1.4.9.2" },

            children: [
                Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }),
                Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M" }),
                Field({ name: "SceneName", id: 0x3, type: "string", conformance: "M", constraint: "max 16" }),
                Field({
                    name: "ExtensionFieldSets", id: 0x4, type: "list", conformance: "M",
                    children: [Field({ name: "entry", type: "ExtensionFieldSet" })]
                })
            ]
        }),

        Command({
            name: "ViewScene", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "ViewSceneResponse",
            xref: { document: "cluster", section: "1.4.9.3" },
            children: [
                Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "RemoveScene", id: 0x2, access: "M", conformance: "M", direction: "request",
            response: "RemoveSceneResponse",
            xref: { document: "cluster", section: "1.4.9.4" },
            children: [
                Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "RemoveAllScenes", id: 0x3, access: "M", conformance: "M", direction: "request",
            response: "RemoveAllScenesResponse",
            xref: { document: "cluster", section: "1.4.9.5" },
            children: [Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" })]
        }),

        Command({
            name: "StoreScene", id: 0x4, access: "M", conformance: "M", direction: "request",
            response: "StoreSceneResponse",
            xref: { document: "cluster", section: "1.4.9.6" },
            children: [
                Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "RecallScene", id: 0x5, access: "O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.4.9.7" },
            children: [
                Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }),
                Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "O", quality: "X" })
            ]
        }),

        Command({
            name: "GetSceneMembership", id: 0x6, access: "O", conformance: "M", direction: "request",
            response: "GetSceneMembershipResponse",
            details: "The GetSceneMembership command can be used to find an unused scene identifier within a certain " +
                "group when no commissioning tool is in the network, or for a commissioning tool to get the used " +
                "scene identifiers within a certain group, for the endpoint that implements this cluster.",
            xref: { document: "cluster", section: "1.4.9.8" },
            children: [Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" })]
        }),

        Command({
            name: "EnhancedAddScene", id: 0x40, type: "AddScene", access: "M", conformance: "O",
            direction: "request", response: "EnhancedAddSceneResponse",

            details: "The EnhancedAddScene command allows a scene to be added using a finer scene transition time than " +
                "the AddScene command." +
                "\n" +
                "This command shall have the same data fields as the AddScene command, with the following difference:" +
                "\n" +
                "The TransitionTime data field shall be measured in tenths of a second rather than in seconds.",

            xref: { document: "cluster", section: "1.4.9.9" }
        }),

        Command({
            name: "EnhancedViewScene", id: 0x41, type: "ViewScene", access: "O", conformance: "O",
            direction: "request", response: "EnhancedViewSceneResponse",
            details: "The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time " +
                "than the ViewScene command." +
                "\n" +
                "This command shall have the same data fields as the ViewScene command.",
            xref: { document: "cluster", section: "1.4.9.10" }
        }),

        Command({
            name: "CopyScene", id: 0x42, access: "M", conformance: "O", direction: "request",
            response: "CopySceneResponse",
            details: "The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier " +
                "pair to another group/scene identifier pair.",
            xref: { document: "cluster", section: "1.4.9.11" },

            children: [
                Field({
                    name: "Mode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",

                    details: "The Mode field contains information of how the scene copy is to proceed. This field shall be " +
                        "formatted as illustrated in Format of the Mode Field of the CopyScene Command." +
                        "\n" +
                        "The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If " +
                        "this value is set to 1, all scenes are to be copied and the SceneIdentifierFrom and " +
                        "SceneIdentifierTo fields shall be ignored. Otherwise this field is set to 0.",

                    xref: { document: "cluster", section: "1.4.9.11.1" },
                    children: [
                        Field({ name: "CopyAllScenes", constraint: "0" }),
                        Field({ name: "Reserved", constraint: "1 to 8" })
                    ]
                }),

                Field({
                    name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be " +
                        "copied. Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to " +
                        "copy from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.2" }
                }),

                Field({
                    name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be " +
                        "copied. Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to " +
                        "copy from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.3" }
                }),

                Field({
                    name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be " +
                        "copied. Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy " +
                        "to the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.4" }
                }),

                Field({
                    name: "SceneIdentifierTo", id: 0x4, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be " +
                        "copied. Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy " +
                        "to the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.5" }
                })
            ]
        }),

        Command({
            name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.12" },
            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x2, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.13" },

            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x2, type: "uint8", conformance: "M" }),
                Field({ name: "TransitionTime", id: 0x3, type: "uint16", conformance: "desc" }),
                Field({ name: "SceneName", id: 0x4, type: "string", conformance: "desc", constraint: "max 16" }),
                Field({
                    name: "ExtensionFieldSets", id: 0x5, type: "list", conformance: "desc",
                    children: [Field({ name: "entry", type: "ExtensionFieldSet" })]
                })
            ]
        }),

        Command({
            name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.14" },
            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x2, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.15" },
            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" })
            ]
        }),

        Command({
            name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.16" },
            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
                Field({ name: "SceneId", id: 0x2, type: "uint8", conformance: "M" })
            ]
        }),

        Command({
            name: "GetSceneMembershipResponse", id: 0x6, conformance: "M", direction: "response",

            details: "The fields of the get scene membership response command have the following semantics:" +
                "\n" +
                "The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all " +
                "groups). The following values apply:" +
                "\n" +
                "  • 0 - No further scenes may be added." +
                "\n" +
                "  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added." +
                "\n" +
                "  • 0xfe - At least 1 further scene may be added (exact number is unknown)." +
                "\n" +
                "  • null - It is unknown if any further scenes may be added." +
                "\n" +
                "The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the " +
                "group) as appropriate." +
                "\n" +
                "The GroupID field shall be set to the corresponding field of the received GetSceneMembership " +
                "command." +
                "\n" +
                "If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field " +
                "shall contain the identifiers of all the scenes in the Scene Table with the corresponding Group ID." +
                "\n" +
                "Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload " +
                "length of a frame to be exceeded, then the SceneList field shall contain only as many scenes as " +
                "will fit.",

            xref: { document: "cluster", section: "1.4.9.17" },

            children: [
                Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                Field({ name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X" }),
                Field({ name: "GroupId", id: 0x2, type: "group-id", conformance: "M" }),
                Field({
                    name: "SceneList", id: 0x3, type: "list", conformance: "O",
                    children: [Field({ name: "entry", type: "uint8" })]
                })
            ]
        }),

        Command({
            name: "EnhancedAddSceneResponse", id: 0x40, type: "AddSceneResponse", conformance: "O",
            direction: "response",
            details: "The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see " +
                "EnhancedAddScene Command." +
                "\n" +
                "This command shall have the same data fields as the AddSceneResponse command.",
            xref: { document: "cluster", section: "1.4.9.18" }
        }),

        Command({
            name: "EnhancedViewSceneResponse", id: 0x41, type: "ViewSceneResponse", conformance: "O",
            direction: "response",

            details: "The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command " +
                "using a finer scene transition time." +
                "\n" +
                "This command shall have the same data fields as the ViewSceneResponse command, with the following " +
                "difference:" +
                "\n" +
                "The TransitionTime field shall be measured in tenths of a second rather than in seconds.",

            xref: { document: "cluster", section: "1.4.9.19" }
        }),

        Command({
            name: "CopySceneResponse", id: 0x42, conformance: "O", direction: "response",
            details: "The CopySceneResponse command allows a server to respond to a CopyScene command.",
            xref: { document: "cluster", section: "1.4.9.20" },

            children: [
                Field({
                    name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                    details: "The Status field contains the status of the copy scene attempt. This field shall be set to one of " +
                        "the non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.",
                    xref: { document: "cluster", section: "1.4.9.20.1" }
                }),

                Field({
                    name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierFrom field specifies the identifier of the group from which the scene was " +
                        "copied, as specified in the CopyScene command. Together with the SceneIdentifierFrom field, this " +
                        "field uniquely identifies the scene that was copied from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.20.2" }
                }),

                Field({
                    name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was " +
                        "copied, as specified in the CopyScene command. Together with the GroupIdentifierFrom field, this " +
                        "field uniquely identifies the scene that was copied from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.20.3" }
                })
            ]
        }),

        Datatype({
            name: "AttributeValuePair", type: "struct", conformance: "M",
            details: "This data type indicates a combination of an identifier and the value of an attribute.",
            xref: { document: "cluster", section: "1.4.6.1" },

            children: [
                Field({
                    name: "AttributeId", id: 0x0, type: "attrib-id", access: "RW", conformance: "O",
                    details: "This field shall be present or not present, for all instances in the Scenes cluster. If this field " +
                        "is not present, then the data type of AttributeValue shall be determined by the order and data type " +
                        "defined in the cluster specification. Otherwise the data type of AttributeValue shall be the data " +
                        "type of the attribute indicated by AttributeID.",
                    xref: { document: "cluster", section: "1.4.6.1.1" }
                }),

                Field({
                    name: "AttributeValue", id: 0x1, type: "any", access: "RW", conformance: "M",
                    details: "This is the attribute value as part of an extension field set. See AttributeID to determine the " +
                        "data type for this field.",
                    xref: { document: "cluster", section: "1.4.6.1.2" },
                    children: [Field({ name: "entry", type: "uint8" })]
                })
            ]
        }),

        Datatype({
            name: "ExtensionFieldSet", type: "struct", conformance: "M",
            details: "This data type indicates for a given cluster a set of attributes and their values. Only attributes " +
                "which have the \"S\" designation in the Quality column of the cluster specification shall be used in " +
                "the AttributeValueList field.",
            xref: { document: "cluster", section: "1.4.6.2" },

            children: [
                Field({ name: "ClusterId", id: 0x0, type: "cluster-id", access: "RW", conformance: "M" }),
                Field({
                    name: "AttributeValueList", id: 0x1, type: "list", access: "RW", conformance: "M",
                    children: [Field({ name: "entry", type: "AttributeValuePair" })]
                })
            ]
        })
    ]
}));
