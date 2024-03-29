[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / RemoveSceneResponse

# Interface: RemoveSceneResponse

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).RemoveSceneResponse

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.14

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRemoveSceneResponse`](../modules/cluster_export.Scenes.md#tlvremovesceneresponse)\>

  ↳ **`RemoveSceneResponse`**

## Table of contents

### Properties

- [groupId](cluster_export.Scenes.RemoveSceneResponse.md#groupid)
- [sceneId](cluster_export.Scenes.RemoveSceneResponse.md#sceneid)
- [status](cluster_export.Scenes.RemoveSceneResponse.md#status)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:189](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L189)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:190](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L190)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:188](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L188)
