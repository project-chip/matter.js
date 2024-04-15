[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / AddSceneRequest

# Interface: AddSceneRequest

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).AddSceneRequest

Input to the Scenes addScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddSceneRequest`](../modules/cluster_export.Scenes.md#tlvaddscenerequest)\>

  ↳ **`AddSceneRequest`**

## Table of contents

### Properties

- [extensionFieldSets](cluster_export.Scenes.AddSceneRequest.md#extensionfieldsets)
- [groupId](cluster_export.Scenes.AddSceneRequest.md#groupid)
- [sceneId](cluster_export.Scenes.AddSceneRequest.md#sceneid)
- [sceneName](cluster_export.Scenes.AddSceneRequest.md#scenename)
- [transitionTime](cluster_export.Scenes.AddSceneRequest.md#transitiontime)

## Properties

### extensionFieldSets

• **extensionFieldSets**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]

#### Inherited from

TypeFromSchema.extensionFieldSets

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L111)

___

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L107)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L108)

___

### sceneName

• **sceneName**: `string`

#### Inherited from

TypeFromSchema.sceneName

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L110)

___

### transitionTime

• **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L109)
