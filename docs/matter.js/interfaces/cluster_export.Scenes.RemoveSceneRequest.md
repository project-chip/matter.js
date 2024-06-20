[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / RemoveSceneRequest

# Interface: RemoveSceneRequest

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).RemoveSceneRequest

Input to the Scenes removeScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvRemoveSceneRequest`](../modules/cluster_export.Scenes.md#tlvremovescenerequest)\>

  ↳ **`RemoveSceneRequest`**

## Table of contents

### Properties

- [groupId](cluster_export.Scenes.RemoveSceneRequest.md#groupid)
- [sceneId](cluster_export.Scenes.RemoveSceneRequest.md#sceneid)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/datatype_export.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:172](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L172)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:173](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L173)
