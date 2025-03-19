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

export const ScenesManagement = Cluster(
    {
        name: "ScenesManagement", id: 0x62, classification: "application", pics: "S",

        details: "The Scenes Management cluster provides attributes and commands for setting up and recalling scenes. " +
            "Each scene corresponds to a set of stored values of specified attributes for one or more clusters on " +
            "the same end point as the Scenes Management cluster." +
            "\n" +
            "In most cases scenes are associated with a particular group identifier. Scenes may also exist " +
            "without a group, in which case the value 0 replaces the group identifier. Note that extra care is " +
            "required in these cases to avoid a scene identifier collision, and that commands related to scenes " +
            "without a group may only be unicast, i.e., they shall NOT be multicast or broadcast." +
            "\n" +
            "NOTE Support for Scenes Management cluster is provisional.",

        xref: { document: "cluster", section: "1.4" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.4.4" } },
        Field({
            name: "SN", conformance: "O", constraint: "0", description: "SceneNames",
            details: "This feature indicates the ability to store a name for a scene when a scene is added.",
            xref: { document: "cluster", section: "1.4.4.1" }
        })
    ),

    Attribute({
        name: "LastConfiguredBy", id: 0x0, type: "node-id", access: "R V", conformance: "O", default: null,
        quality: "X",

        details: "Indicates the Node ID of the node that last configured the Scene Table." +
            "\n" +
            "The null value indicates that the server has not been configured, or that the identifier of the node " +
            "that last configured the Scenes Management cluster is not known." +
            "\n" +
            "The Node ID is scoped to the accessing fabric.",

        xref: { document: "cluster", section: "1.4.8.1" }
    }),

    Attribute({
        name: "SceneTableSize", id: 0x1, type: "uint16", access: "R V", conformance: "M",
        constraint: "desc", default: 16, quality: "F",
        details: "Indicates the number of entries in the Scene Table on this endpoint. This is the total across all " +
            "fabrics; note that a single fabric cannot use all those entries (see Handling of fabric- scoping). " +
            "The minimum size of this table, (i.e., the minimum number of scenes to support across all fabrics " +
            "per endpoint) shall be 16, unless a device type in which this cluster is used, defines a larger " +
            "value in the device type definition.",
        xref: { document: "cluster", section: "1.4.8.2" }
    }),

    Attribute(
        {
            name: "FabricSceneInfo", id: 0x2, type: "list", access: "R F V", conformance: "M",
            constraint: "desc",
            details: "Indicates a list of fabric scoped information about scenes on this endpoint." +
                "\n" +
                "The number of list entries for this attribute shall NOT exceed the number of supported fabrics by " +
                "the device.",
            xref: { document: "cluster", section: "1.4.8.3" }
        },

        Field({ name: "entry", type: "SceneInfoStruct" })
    ),

    Command(
        {
            name: "AddScene", id: 0x0, access: "F M", conformance: "M", direction: "request",
            response: "AddSceneResponse",
            details: "It is not mandatory for an extension field set to be included in the command for every cluster on " +
                "that endpoint that has a defined extension field set. Extension field sets may be omitted, including " +
                "the case of no extension field sets at all.",
            xref: { document: "cluster", section: "1.4.9.2" }
        },

        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.2.1" }
        }),
        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the scene identifier in the Scene Table.",
            xref: { document: "cluster", section: "1.4.9.2.2" }
        }),
        Field({
            name: "TransitionTime", id: 0x2, type: "uint32", conformance: "M", constraint: "max 60000000",
            details: "This field shall indicate the transition time of the scene, measured in milliseconds.",
            xref: { document: "cluster", section: "1.4.9.2.3" }
        }),
        Field({
            name: "SceneName", id: 0x3, type: "string", conformance: "M", constraint: "max 16",
            details: "This field shall indicate the name of the scene.",
            xref: { document: "cluster", section: "1.4.9.2.4" }
        }),

        Field(
            {
                name: "ExtensionFieldSetStructs", id: 0x4, type: "list", conformance: "M", constraint: "desc",
                details: "This field shall contains the list of extension fields.",
                xref: { document: "cluster", section: "1.4.9.2.5" }
            },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        {
            name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.3" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for AddScene command.",
            xref: { document: "cluster", section: "1.4.9.3.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
            details: "The GroupID field shall be set to the corresponding field of the received AddScene command.",
            xref: { document: "cluster", section: "1.4.9.3.2" }
        }),
        Field({
            name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "The SceneID field shall be set to the corresponding field of the received AddScene command.",
            xref: { document: "cluster", section: "1.4.9.3.3" }
        })
    ),

    Command(
        {
            name: "ViewScene", id: 0x1, access: "F O", conformance: "M", direction: "request",
            response: "ViewSceneResponse",
            xref: { document: "cluster", section: "1.4.9.4" }
        },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.4.1" }
        }),
        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the scene identifier in the Scene Table.",
            xref: { document: "cluster", section: "1.4.9.4.2" }
        })
    ),

    Command(
        {
            name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.5" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for ViewScene command.",
            xref: { document: "cluster", section: "1.4.9.5.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
            details: "The GroupID field shall be set to the corresponding field of the received ViewScene command.",
            xref: { document: "cluster", section: "1.4.9.5.2" }
        }),
        Field({
            name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "The SceneID field shall be set to the corresponding field of the received ViewScene command.",
            xref: { document: "cluster", section: "1.4.9.5.3" }
        }),

        Field({
            name: "TransitionTime", id: 0x3, type: "uint32", conformance: "desc", constraint: "max 60000000",
            details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene Table " +
                "entry, otherwise it shall be omitted.",
            xref: { document: "cluster", section: "1.4.9.5.4" }
        }),

        Field({
            name: "SceneName", id: 0x4, type: "string", conformance: "desc", constraint: "max 16",
            details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene Table " +
                "entry, otherwise it shall be omitted.",
            xref: { document: "cluster", section: "1.4.9.5.5" }
        }),

        Field(
            {
                name: "ExtensionFieldSetStructs", id: 0x5, type: "list", conformance: "desc",
                details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene Table " +
                    "entry, otherwise it shall be omitted.",
                xref: { document: "cluster", section: "1.4.9.5.6" }
            },

            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        {
            name: "RemoveScene", id: 0x2, access: "F M", conformance: "M", direction: "request",
            response: "RemoveSceneResponse",
            xref: { document: "cluster", section: "1.4.9.6" }
        },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.6.1" }
        }),
        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the scene identifier in the Scene Table.",
            xref: { document: "cluster", section: "1.4.9.6.2" }
        })
    ),

    Command(
        {
            name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.7" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for RemoveScene command.",
            xref: { document: "cluster", section: "1.4.9.7.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
            details: "The GroupID field shall be set to the corresponding field of the received RemoveScene command.",
            xref: { document: "cluster", section: "1.4.9.7.2" }
        }),
        Field({
            name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "The SceneID field shall be set to the corresponding field of the received RemoveScene command.",
            xref: { document: "cluster", section: "1.4.9.7.3" }
        })
    ),

    Command(
        {
            name: "RemoveAllScenes", id: 0x3, access: "F M", conformance: "M", direction: "request",
            response: "RemoveAllScenesResponse",
            xref: { document: "cluster", section: "1.4.9.8" }
        },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.8.1" }
        })
    ),

    Command(
        {
            name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.9" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for RemoveAllScenes command.",
            xref: { document: "cluster", section: "1.4.9.9.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
            details: "The GroupID field shall be set to the corresponding field of the received RemoveAllScenes command.",
            xref: { document: "cluster", section: "1.4.9.9.2" }
        })
    ),

    Command(
        {
            name: "StoreScene", id: 0x4, access: "F M", conformance: "M", direction: "request",
            response: "StoreSceneResponse",
            xref: { document: "cluster", section: "1.4.9.10" }
        },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.10.1" }
        }),
        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the scene identifier in the Scene Table.",
            xref: { document: "cluster", section: "1.4.9.10.2" }
        })
    ),

    Command(
        {
            name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.11" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for StoreScene command.",
            xref: { document: "cluster", section: "1.4.9.11.1" }
        }),
        Field({
            name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
            details: "The GroupID field shall be set to the corresponding field of the received StoreScene command.",
            xref: { document: "cluster", section: "1.4.9.11.2" }
        }),
        Field({
            name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "The SceneID field shall be set to the corresponding field of the received StoreScene command.",
            xref: { document: "cluster", section: "1.4.9.11.3" }
        })
    ),

    Command(
        {
            name: "RecallScene", id: 0x5, access: "F O", conformance: "M", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.4.9.12" }
        },
        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.12.1" }
        }),
        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the scene identifier in the Scene Table.",
            xref: { document: "cluster", section: "1.4.9.12.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint32", conformance: "O", constraint: "max 60000000",
            quality: "X",
            details: "This field shall indicate the transition time of the scene, measured in milliseconds.",
            xref: { document: "cluster", section: "1.4.9.12.3" }
        })
    ),

    Command(
        {
            name: "GetSceneMembership", id: 0x6, access: "F O", conformance: "M", direction: "request",
            response: "GetSceneMembershipResponse",
            details: "This command can be used to get the used scene identifiers within a certain group, for the endpoint " +
                "that implements this cluster.",
            xref: { document: "cluster", section: "1.4.9.13" }
        },

        Field({
            name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field shall indicate the group identifier in the Group Table.",
            xref: { document: "cluster", section: "1.4.9.13.1" }
        })
    ),

    Command(
        {
            name: "GetSceneMembershipResponse", id: 0x6, conformance: "M", direction: "response",
            xref: { document: "cluster", section: "1.4.9.14" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for GetSceneMembership command.",
            xref: { document: "cluster", section: "1.4.9.14.1" }
        }),

        Field({
            name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X",

            details: "This field shall contain the remaining capacity of the Scene Table of the server (for all groups for " +
                "the accessing fabric). The following values apply:" +
                "\n" +
                "  • 0 - No further scenes may be added." +
                "\n" +
                "  • 0 < Capacity < 0xFE - Capacity holds the number of scenes that may be added." +
                "\n" +
                "  • 0xFE - At least 1 further scene may be added (exact number is unknown)." +
                "\n" +
                "  • null - It is unknown if any further scenes may be added.",

            xref: { document: "cluster", section: "1.4.9.14.2" }
        }),

        Field({
            name: "GroupId", id: 0x2, type: "group-id", conformance: "M",
            details: "This field shall be set to the corresponding field of the received GetSceneMembership command.",
            xref: { document: "cluster", section: "1.4.9.14.3" }
        }),

        Field(
            {
                name: "SceneList", id: 0x3, type: "list", conformance: "Status == Success",
                details: "If the status is not SUCCESS then this field shall be omitted, else this field shall contain the " +
                    "identifiers of all the scenes in the Scene Table with the corresponding Group ID.",
                xref: { document: "cluster", section: "1.4.9.14.4" }
            },

            Field({ name: "entry", type: "uint8" })
        )
    ),

    Command(
        {
            name: "CopyScene", id: 0x40, access: "F M", conformance: "O", direction: "request",
            response: "CopySceneResponse",
            details: "This command allows a client to efficiently copy scenes from one group/scene identifier pair to " +
                "another group/scene identifier pair.",
            xref: { document: "cluster", section: "1.4.9.15" }
        },

        Field({
            name: "Mode", id: 0x0, type: "CopyModeBitmap", conformance: "M", constraint: "desc",
            details: "This field shall contain the information of how the scene copy is to proceed." +
                "\n" +
                "The CopyAllScenes bit of the Mode indicates whether all scenes are to be copied. If this value is " +
                "set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields shall " +
                "be ignored. Otherwise this bit is set to 0.",
            xref: { document: "cluster", section: "1.4.9.15.1" }
        }),

        Field({
            name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
            details: "This field shall indicate the identifier of the group from which the scene is to be copied. Together " +
                "with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene " +
                "Table.",
            xref: { document: "cluster", section: "1.4.9.15.2" }
        }),

        Field({
            name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the identifier of the scene from which the scene is to be copied. Together " +
                "with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene " +
                "Table.",
            xref: { document: "cluster", section: "1.4.9.15.3" }
        }),

        Field({
            name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M",
            details: "This field shall indicate the identifier of the group to which the scene is to be copied. Together " +
                "with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene " +
                "Table.",
            xref: { document: "cluster", section: "1.4.9.15.4" }
        }),

        Field({
            name: "SceneIdentifierTo", id: 0x4, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall indicate the identifier of the scene to which the scene is to be copied. Together " +
                "with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene " +
                "Table.",
            xref: { document: "cluster", section: "1.4.9.15.5" }
        })
    ),

    Command(
        {
            name: "CopySceneResponse", id: 0x40, conformance: "CopyScene", direction: "response",
            xref: { document: "cluster", section: "1.4.9.16" }
        },
        Field({
            name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
            details: "This field shall be set according to the Effect on Receipt section for the CopyScene command.",
            xref: { document: "cluster", section: "1.4.9.16.1" }
        }),

        Field({
            name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
            details: "This field shall be set to the same values as in the corresponding fields of the received CopyScene " +
                "command.",
            xref: { document: "cluster", section: "1.4.9.16.2" }
        }),

        Field({
            name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field shall be set to the same values as in the corresponding fields of the received CopyScene " +
                "command.",
            xref: { document: "cluster", section: "1.4.9.16.3" }
        })
    ),

    Datatype(
        { name: "CopyModeBitmap", type: "map8", xref: { document: "cluster", section: "1.4.7.1" } },
        Field({ name: "CopyAllScenes", constraint: "0", description: "Copy all scenes in the scene table" })
    ),

    Datatype(
        { name: "SceneInfoStruct", type: "struct", xref: { document: "cluster", section: "1.4.7.2" } },

        Field({
            name: "SceneCount", id: 0x0, type: "uint8", access: "F", conformance: "M", default: 0,
            details: "This field shall indicate the number of scenes currently used in the server’s Scene Table on the " +
                "endpoint where the Scenes Management cluster appears." +
                "\n" +
                "This only includes the count for the associated fabric.",
            xref: { document: "cluster", section: "1.4.7.2.1" }
        }),

        Field({
            name: "CurrentScene", id: 0x1, type: "uint8", access: "S", conformance: "M", constraint: "desc",
            default: 255,
            details: "This field shall indicate the scene identifier of the scene last invoked on the associated fabric. " +
                "If no scene has been invoked, the value of this field shall be 0xFF, the undefined scene identifier.",
            xref: { document: "cluster", section: "1.4.7.2.2" }
        }),

        Field({
            name: "CurrentGroup", id: 0x2, type: "group-id", access: "S", conformance: "M", default: 0,
            details: "This field shall indicate the group identifier of the scene last invoked on the associated fabric, " +
                "or 0 if the scene last invoked is not associated with a group.",
            xref: { document: "cluster", section: "1.4.7.2.3" }
        }),

        Field({
            name: "SceneValid", id: 0x3, type: "bool", access: "S", conformance: "M", default: false,

            details: "This field shall indicate whether the state of the server corresponds to that associated with the " +
                "CurrentScene and CurrentGroup fields of the SceneInfoStruct they belong to. TRUE indicates that " +
                "these fields are valid, FALSE indicates that they are not valid." +
                "\n" +
                "This field shall be set to False for all other fabrics when an attribute with the Scenes (\"S\") " +
                "designation in the Quality column of another cluster present on the same endpoint is modified or " +
                "when the current scene is modified by a fabric through the RecallScene or StoreScene commands, " +
                "regardless of the fabric-scoped access quality of the command." +
                "\n" +
                "In the event where the SceneValid field is set to False for a fabric, the CurrentScene and " +
                "CurrentGroup fields shall be the last invoked scene and group for that fabric. In the event where no " +
                "scene was previously invoked for that fabric, the CurrentScene and CurrentGroup fields shall be " +
                "their default values.",

            xref: { document: "cluster", section: "1.4.7.2.4" }
        }),

        Field({
            name: "RemainingCapacity", id: 0x4, type: "uint8", access: "F", conformance: "M",
            constraint: "max 253",
            details: "This field shall indicate the remaining capacity of the Scene Table on this endpoint for the " +
                "accessing fabric. Note that this value may change between reads, even if no entries are added or " +
                "deleted on the accessing fabric, due to other clients associated with other fabrics adding or " +
                "deleting entries that impact the resource usage on the device.",
            xref: { document: "cluster", section: "1.4.7.2.5" }
        }),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        {
            name: "AttributeValuePairStruct", type: "struct",
            details: "This data type indicates a combination of an identifier and the value of an attribute.",
            xref: { document: "cluster", section: "1.4.7.3" }
        },

        Field({
            name: "AttributeId", id: 0x0, type: "attrib-id", conformance: "M",

            details: "This field shall be present for all instances in a given ExtensionFieldSetStruct." +
                "\n" +
                "Which Value* field is used shall be determined based on the data type of the attribute indicated by " +
                "AttributeID, as described in the Value* Fields subsection." +
                "\n" +
                "The AttributeID field shall NOT refer to an attribute without the Scenes (\"S\") designation in the " +
                "Quality column of the cluster specification." +
                "\n" +
                "### 1.4.7.3.2. ValueUnsigned8, ValueSigned8, ValueUnsigned16, ValueSigned16, ValueUnsigned32, " +
                "ValueSigned32, ValueUnsigned64, ValueSigned64 Fields" +
                "\n" +
                "These fields shall indicate the attribute value as part of an extension field set, associated with a " +
                "given AttributeID under an ExtensionFieldSetStruct’s ClusterID. Which of the fields is used shall" +
                "\n" +
                "be determined by the type of the attribute indicated by AttributeID as follows:" +
                "\n" +
                "  • Data types bool, map8, and uint8 shall map to ValueUnsigned8." +
                "\n" +
                "  • Data types int8 shall map to ValueSigned8." +
                "\n" +
                "  • Data types map16 and uint16 shall map to ValueUnsigned16." +
                "\n" +
                "  • Data types int16 shall map to ValueSigned16." +
                "\n" +
                "  • Data types map32, uint24, and uint32 shall map to ValueUnsigned32." +
                "\n" +
                "  • Data types int24 and int32 shall map to ValueSigned32." +
                "\n" +
                "  • Data types map64, uint40, uint48, uint56 and uint64 shall map to ValueUnsigned64." +
                "\n" +
                "  • Data types int40, int48, int56 and int64 shall map to ValueSigned64." +
                "\n" +
                "  • For derived types, the mapping shall be based on the base type. For example, an attribute of " +
                "    type percent shall be treated as if it were of type uint8, whereas an attribute of type " +
                "    percent100ths shall be treated as if it were of type uint16." +
                "\n" +
                "  • For boolean nullable attributes, any value that is not 0 or 1 shall be considered to have the " +
                "    null value." +
                "\n" +
                "  • For boolean non-nullable attributes, any value that is not 0 or 1 shall be considered to have " +
                "    the value FALSE." +
                "\n" +
                "  • For non-boolean nullable attributes, any value that is not a valid numeric value for the " +
                "    attribute’s type after accounting for range reductions due to being nullable and constraints " +
                "    shall be considered to have the null value for the type." +
                "\n" +
                "  • For non-boolean non-nullable attributes, any value that is not a valid numeric value for the " +
                "    attribute’s type after accounting for constraints shall be considered to be the valid attribute " +
                "    value that is closest to the provided value." +
                "\n" +
                "    ◦ In the event that an invalid provided value is of equal numerical distance to the two closest " +
                "      valid values, the lowest of those values shall be considered the closest valid attribute " +
                "      value." +
                "\n" +
                "If the used field does not match the data type of the attribute indicated by AttributeID, the " +
                "AttributeValuePairStruct shall be considered invalid." +
                "\n" +
                "Examples of processing are:" +
                "\n" +
                "  • ColorControl cluster CurrentX (AttributeID 0x0003) has a type of uint16 and is not nullable." +
                "\n" +
                "    ◦ ValueUnsigned16 of 0xAB12 would be used as-is, as it is in range." +
                "\n" +
                "    ◦ ValueUnsigned16 of 0xFF80 is outside of the range allowed for attribute CurrentX, and would be " +
                "      saturated to the closest valid value, which is the maximum of the attribute’s constraint " +
                "      range: 0xFEFF." +
                "\n" +
                "  • LevelControl cluster CurrentLevel (AttributeID 0x0000) has a type of uint8 and is nullable." +
                "\n" +
                "    ◦ ValueUnsigned8 of 0xA1 would be used as-is, as it is in range." +
                "\n" +
                "    ◦ ValueUnsigned8 of 0xFF is outside the range allowed for nullable attribute CurrentLevel, and " +
                "      would be considered as the null value.",

            xref: { document: "cluster", section: "1.4.7.3.1" }
        }),

        Field({ name: "ValueUnsigned8", id: 0x1, type: "uint8", conformance: "O.a" }),
        Field({ name: "ValueSigned8", id: 0x2, type: "int8", conformance: "O.a" }),
        Field({ name: "ValueUnsigned16", id: 0x3, type: "uint16", conformance: "O.a" }),
        Field({ name: "ValueSigned16", id: 0x4, type: "int16", conformance: "O.a" }),
        Field({ name: "ValueUnsigned32", id: 0x5, type: "uint32", conformance: "O.a" }),
        Field({ name: "ValueSigned32", id: 0x6, type: "int32", conformance: "O.a" }),
        Field({ name: "ValueUnsigned64", id: 0x7, type: "uint64", conformance: "O.a" }),
        Field({ name: "ValueSigned64", id: 0x8, type: "int64", conformance: "O.a" })
    ),

    Datatype(
        {
            name: "ExtensionFieldSetStruct", type: "struct",
            details: "This data type indicates for a given cluster a set of attributes and their values.",
            xref: { document: "cluster", section: "1.4.7.4" }
        },

        Field({
            name: "ClusterId", id: 0x0, type: "cluster-id", conformance: "M",
            details: "This field shall indicate the cluster-id of the cluster whose attributes are in the " +
                "AttributeValueList field.",
            xref: { document: "cluster", section: "1.4.7.4.1" }
        }),

        Field(
            {
                name: "AttributeValueList", id: 0x1, type: "list", conformance: "M", constraint: "desc",
                details: "This field shall indicate a set of attributes and their values which are stored as part of a scene." +
                    "\n" +
                    "Attributes which do not have the Scenes (\"S\") designation in the Quality column of their cluster " +
                    "specification shall NOT be used in the AttributeValueList field.",
                xref: { document: "cluster", section: "1.4.7.4.2" }
            },

            Field({ name: "entry", type: "AttributeValuePairStruct" })
        )
    ),

    Datatype(
        {
            name: "LogicalSceneTable", type: "struct",

            details: "The Scene Table is used to store information for each scene capable of being invoked on the server. " +
                "Each scene is defined for a particular group. The Scene Table is defined here as a conceptual " +
                "illustration to assist in understanding the underlying data to be stored when scenes are defined. " +
                "Though the Scene Table is defined here using the data model architecture rules and format, the " +
                "design is not normative." +
                "\n" +
                "The Scene table is logically a list of fabric-scoped structs. The logical fields of each Scene Table " +
                "entry struct are illustrated below. An ExtensionFieldSetStruct may be present for each " +
                "Scenes-supporting cluster implemented on the same endpoint.",

            xref: { document: "cluster", section: "1.4.7.5" }
        },

        Field({
            name: "SceneGroupId", id: 0x0, type: "group-id", conformance: "M",
            details: "This field is the group identifier for which this scene applies, or 0 if the scene is not associated " +
                "with a group.",
            xref: { document: "cluster", section: "1.4.7.5.1" }
        }),

        Field({
            name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
            details: "This field is unique within this group, which is used to identify this scene.",
            xref: { document: "cluster", section: "1.4.7.5.2" }
        }),

        Field({
            name: "SceneName", id: 0x2, type: "string", conformance: "SN", constraint: "max 16",
            details: "The field is the name of the scene." +
                "\n" +
                "If scene names are not supported, any commands that write a scene name shall simply discard the " +
                "name, and any command that returns a scene name shall return an empty string.",
            xref: { document: "cluster", section: "1.4.7.5.3" }
        }),

        Field({
            name: "SceneTransitionTime", id: 0x3, type: "uint32", conformance: "M", constraint: "max 60000000",
            default: 0,
            details: "This field is the amount of time, in milliseconds, it will take for a cluster to change from its " +
                "current state to the requested state.",
            xref: { document: "cluster", section: "1.4.7.5.4" }
        }),

        Field(
            {
                name: "ExtensionFields", id: 0x4, type: "list", conformance: "M", default: [],
                details: "See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension shall " +
                    "only use attributes with the Scene quality. Each ExtensionFieldSetStruct holds a set of values of " +
                    "these attributes for a cluster implemented on the same endpoint where the Scene (\"S\") designation " +
                    "appears in the quality column. A scene is the aggregate of all such fields across all clusters on " +
                    "the endpoint.",
                xref: { document: "cluster", section: "1.4.7.5.5" }
            },

            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    )
);

MatterDefinition.children.push(ScenesManagement);
