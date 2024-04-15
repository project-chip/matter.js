[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / AddSceneRequest

# Interface: AddSceneRequest

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).AddSceneRequest

Input to the Scenes addScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAddSceneRequest`](../modules/exports_cluster.Scenes.md#tlvaddscenerequest)\>

  ↳ **`AddSceneRequest`**

## Table of contents

### Properties

- [extensionFieldSets](exports_cluster.Scenes.AddSceneRequest.md#extensionfieldsets)
- [groupId](exports_cluster.Scenes.AddSceneRequest.md#groupid)
- [sceneId](exports_cluster.Scenes.AddSceneRequest.md#sceneid)
- [sceneName](exports_cluster.Scenes.AddSceneRequest.md#scenename)
- [transitionTime](exports_cluster.Scenes.AddSceneRequest.md#transitiontime)

## Properties

### extensionFieldSets

• **extensionFieldSets**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `attributeValue`: [`FieldType`](exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\>  }\>[]

#### Inherited from

TypeFromSchema.extensionFieldSets

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:103

___

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:99

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:100

___

### sceneName

• **sceneName**: `string`

#### Inherited from

TypeFromSchema.sceneName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:102

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:101
