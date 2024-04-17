[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [Scenes](../modules/exports_cluster.Scenes.md) / RecallSceneRequest

# Interface: RecallSceneRequest

[exports/cluster](../modules/exports_cluster.md).[Scenes](../modules/exports_cluster.Scenes.md).RecallSceneRequest

Input to the Scenes recallScene command

**`See`**

MatterSpecification.v11.Cluster § 1.4.9.7

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvRecallSceneRequest`](../modules/exports_cluster.Scenes.md#tlvrecallscenerequest)\>

  ↳ **`RecallSceneRequest`**

## Table of contents

### Properties

- [groupId](exports_cluster.Scenes.RecallSceneRequest.md#groupid)
- [sceneId](exports_cluster.Scenes.RecallSceneRequest.md#sceneid)
- [transitionTime](exports_cluster.Scenes.RecallSceneRequest.md#transitiontime)

## Properties

### groupId

• **groupId**: [`GroupId`](../modules/exports_datatype.md#groupid)

#### Inherited from

TypeFromSchema.groupId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:288

___

### sceneId

• **sceneId**: `number`

#### Inherited from

TypeFromSchema.sceneId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:289

___

### transitionTime

• `Optional` **transitionTime**: ``null`` \| `number`

#### Inherited from

TypeFromSchema.transitionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:290
