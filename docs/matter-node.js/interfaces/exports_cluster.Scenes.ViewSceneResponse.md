[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / ViewSceneResponse

# Interface: ViewSceneResponse

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).ViewSceneResponse

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.13

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvViewSceneResponse`](../modules/exports_cluster.Scenes.md#tlvviewsceneresponse)\>

  ↳ **`ViewSceneResponse`**

## Table of contents

### Properties

- [extensionFieldSets](exports_cluster.Scenes.ViewSceneResponse.md#extensionfieldsets)
- [groupId](exports_cluster.Scenes.ViewSceneResponse.md#groupid)
- [sceneId](exports_cluster.Scenes.ViewSceneResponse.md#sceneid)
- [sceneName](exports_cluster.Scenes.ViewSceneResponse.md#scenename)
- [status](exports_cluster.Scenes.ViewSceneResponse.md#status)
- [transitionTime](exports_cluster.Scenes.ViewSceneResponse.md#transitiontime)

## Properties

### extensionFieldSets

• `Optional` **extensionFieldSets**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `attributeValue`: [`FieldType`](exports_tlv.FieldType.md)\<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](exports_tlv.FieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\>  }\>[]

#### Inherited from

TypeFromSchema.extensionFieldSets

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:170

___

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:166

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:167

___

### sceneName

• `Optional` **sceneName**: `string`

#### Inherited from

TypeFromSchema.sceneName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:169

___

### status

• **status**: [`StatusCode`](../enums/exports_interaction.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:165

___

### transitionTime

• `Optional` **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:168
