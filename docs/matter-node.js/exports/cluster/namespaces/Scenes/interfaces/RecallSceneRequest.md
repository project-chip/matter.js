[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / RecallSceneRequest

# Interface: RecallSceneRequest

Input to the Scenes recallScene command

## See

MatterSpecification.v11.Cluster § 1.4.9.7

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvRecallSceneRequest`](../README.md#tlvrecallscenerequest)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:288

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:289

***

### transitionTime?

> `optional` **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:290
