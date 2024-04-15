[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / AddSceneResponse

# Interface: AddSceneResponse

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).AddSceneResponse

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.12

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddSceneResponse`](../modules/cluster_export.Scenes.md#tlvaddsceneresponse)\>

  ↳ **`AddSceneResponse`**

## Table of contents

### Properties

- [groupId](cluster_export.Scenes.AddSceneResponse.md#groupid)
- [sceneId](cluster_export.Scenes.AddSceneResponse.md#sceneid)
- [status](cluster_export.Scenes.AddSceneResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L126)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L127)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L125)
