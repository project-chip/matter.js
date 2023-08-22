[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Scenes

# Namespace: Scenes

[exports/cluster](exports_cluster.md).Scenes

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.Scenes.Feature.md)

### Type Aliases

- [Extension](exports_cluster.Scenes.md#extension)

### Variables

- [Base](exports_cluster.Scenes.md#base)
- [Cluster](exports_cluster.Scenes.md#cluster)
- [Mode](exports_cluster.Scenes.md#mode)
- [NameSupport](exports_cluster.Scenes.md#namesupport)
- [TlvAddSceneRequest](exports_cluster.Scenes.md#tlvaddscenerequest)
- [TlvAddSceneResponse](exports_cluster.Scenes.md#tlvaddsceneresponse)
- [TlvAttributeValuePair](exports_cluster.Scenes.md#tlvattributevaluepair)
- [TlvCopySceneRequest](exports_cluster.Scenes.md#tlvcopyscenerequest)
- [TlvCopySceneResponse](exports_cluster.Scenes.md#tlvcopysceneresponse)
- [TlvExtensionFieldSet](exports_cluster.Scenes.md#tlvextensionfieldset)
- [TlvGetSceneMembershipRequest](exports_cluster.Scenes.md#tlvgetscenemembershiprequest)
- [TlvGetSceneMembershipResponse](exports_cluster.Scenes.md#tlvgetscenemembershipresponse)
- [TlvRecallSceneRequest](exports_cluster.Scenes.md#tlvrecallscenerequest)
- [TlvRemoveAllScenesRequest](exports_cluster.Scenes.md#tlvremoveallscenesrequest)
- [TlvRemoveAllScenesResponse](exports_cluster.Scenes.md#tlvremoveallscenesresponse)
- [TlvRemoveSceneRequest](exports_cluster.Scenes.md#tlvremovescenerequest)
- [TlvRemoveSceneResponse](exports_cluster.Scenes.md#tlvremovesceneresponse)
- [TlvStoreSceneRequest](exports_cluster.Scenes.md#tlvstorescenerequest)
- [TlvStoreSceneResponse](exports_cluster.Scenes.md#tlvstoresceneresponse)
- [TlvViewSceneRequest](exports_cluster.Scenes.md#tlvviewscenerequest)
- [TlvViewSceneResponse](exports_cluster.Scenes.md#tlvviewsceneresponse)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.Scenes.md#base), `SF`\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:1095

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `currentGroup`: [`Attribute`](exports_cluster.md#attribute)<[`GroupId`](exports_datatype.md#groupid), `any`\> ; `currentScene`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `lastConfiguredBy`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/datatype/NodeId"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_datatype_NodeId_.md) \| ``null``, `any`\> ; `nameSupport`: [`Attribute`](exports_cluster.md#attribute)<[`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `nameSupport`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, `any`\> ; `sceneCount`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `sceneValid`: [`Attribute`](exports_cluster.md#attribute)<`boolean`, `any`\>  }, { `addScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all Scenes clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:362

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, { `sceneNames`: ``true``  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `addScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `copyScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `enhancedAddScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `enhancedViewScene`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `getSceneMembership`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `recallScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `removeAllScenes`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `removeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `storeScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `viewScene`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.Scenes.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `sceneNames`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Scenes

The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene corresponds
to a set of stored values of specified attributes for one or more clusters on the same end point as the Scenes
cluster.

In most cases scenes are associated with a particular group identifier. Scenes may also exist without a group,
in which case the value 0 replaces the group identifier. Note that extra care is required in these cases to
avoid a scene identifier collision, and that commands related to scenes without a group may only be unicast,
i.e., they may not be multicast or broadcast.

In a network supporting fabrics, scenes are scoped to the accessing fabric. When storing scene information,
implementations need to take care of this.

NOTE Support for Scenes cluster is provisional.

ScenesCluster supports optional features that you can enable with the ScenesCluster.with() factory method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:731

___

### Mode

• `Const` **Mode**: `Object`

The value of Scenes.mode

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.11.1

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copyAllScenes` | [`BitFlag`](exports_schema.md#bitflag-1) |
| `reserved` | [`BitField`](exports_schema.md#bitfield-1) |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:259

___

### NameSupport

• `Const` **NameSupport**: `Object`

The value of the Scenes nameSupport attribute

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.7.5

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nameSupport` | [`BitFlag`](exports_schema.md#bitflag-1) | The ability to store a name for a scene. |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:17

___

### TlvAddSceneRequest

• `Const` **TlvAddSceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes addScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:79

___

### TlvAddSceneResponse

• `Const` **TlvAddSceneResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.12

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:109

___

### TlvAttributeValuePair

• `Const` **TlvAttributeValuePair**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This data type indicates a combination of an identifier and the value of an attribute.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.6.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:28

___

### TlvCopySceneRequest

• `Const` **TlvCopySceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes copyScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:268

___

### TlvCopySceneResponse

• `Const` **TlvCopySceneResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The CopySceneResponse command allows a server to respond to a CopyScene command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.20

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:321

___

### TlvExtensionFieldSet

• `Const` **TlvExtensionFieldSet**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This data type indicates for a given cluster a set of attributes and their values. Only attributes which have
the "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList
field.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:53

___

### TlvGetSceneMembershipRequest

• `Const` **TlvGetSceneMembershipRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes getSceneMembership command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:218

___

### TlvGetSceneMembershipResponse

• `Const` **TlvGetSceneMembershipResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

The fields of the get scene membership response command have the following semantics:

The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
following values apply:

  • 0 - No further scenes may be added.

  • 0 < Capacity < 0xfe - Capacity holds the number of scenes that may be added.

  • 0xfe - At least 1 further scene may be added (exact number is unknown).

  • null - It is unknown if any further scenes may be added.

The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as
appropriate.

The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.

If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain
the identifiers of all the scenes in the Scene Table with the corresponding Group ID.

Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a
frame to be exceeded, then the SceneList field shall contain only as many scenes as will fit.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.17

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:248

___

### TlvRecallSceneRequest

• `Const` **TlvRecallSceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes recallScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.7

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:208

___

### TlvRemoveAllScenesRequest

• `Const` **TlvRemoveAllScenesRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes removeAllScenes command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.5

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:176

___

### TlvRemoveAllScenesResponse

• `Const` **TlvRemoveAllScenesResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.15

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:182

___

### TlvRemoveSceneRequest

• `Const` **TlvRemoveSceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes removeScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:159

___

### TlvRemoveSceneResponse

• `Const` **TlvRemoveSceneResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.14

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:166

___

### TlvStoreSceneRequest

• `Const` **TlvStoreSceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes storeScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:191

___

### TlvStoreSceneResponse

• `Const` **TlvStoreSceneResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.16

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:198

___

### TlvViewSceneRequest

• `Const` **TlvViewSceneRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the Scenes viewScene command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:119

___

### TlvViewSceneResponse

• `Const` **TlvViewSceneResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.4.9.13

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ScenesCluster.d.ts:126
