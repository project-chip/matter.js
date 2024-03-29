[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [Scenes](../modules/cluster_export.Scenes.md) / RemoveSceneRequest

# Interface: RemoveSceneRequest

[cluster/export](../modules/cluster_export.md).[Scenes](../modules/cluster_export.Scenes.md).RemoveSceneRequest

Input to the Scenes removeScene command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 1.4.9.4

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

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:173](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L173)

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:174](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L174)
