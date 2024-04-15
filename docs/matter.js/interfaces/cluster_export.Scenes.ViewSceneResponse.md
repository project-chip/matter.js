[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / ViewSceneResponse

# Interface: ViewSceneResponse

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).ViewSceneResponse

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.13

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvViewSceneResponse`](../modules/cluster_export.Scenes.md#tlvviewsceneresponse)\>

  ↳ **`ViewSceneResponse`**

## Table of contents

### Properties

- [extensionFieldSets](cluster_export.Scenes.ViewSceneResponse.md#extensionfieldsets)
- [groupId](cluster_export.Scenes.ViewSceneResponse.md#groupid)
- [sceneId](cluster_export.Scenes.ViewSceneResponse.md#sceneid)
- [sceneName](cluster_export.Scenes.ViewSceneResponse.md#scenename)
- [status](cluster_export.Scenes.ViewSceneResponse.md#status)
- [transitionTime](cluster_export.Scenes.ViewSceneResponse.md#transitiontime)

## Properties

### extensionFieldSets

• `Optional` **extensionFieldSets**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeValueList`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `attributeValue`: [`FieldType`](tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\>  }\>[]\> ; `clusterId`: [`FieldType`](tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\>  }\>[]

#### Inherited from

TypeFromSchema.extensionFieldSets

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L158)

___

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L154)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:155](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L155)

___

### sceneName

• `Optional` **sceneName**: `string`

#### Inherited from

TypeFromSchema.sceneName

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:157](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L157)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L153)

___

### transitionTime

• `Optional` **transitionTime**: `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L156)
