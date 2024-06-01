[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / RecallSceneRequest

# Interface: RecallSceneRequest

Input to the Scenes recallScene command

## See

MatterSpecification.v11.Cluster § 1.4.9.7

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRecallSceneRequest`](../README.md#tlvrecallscenerequest)\>

## Properties

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L258)

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:259](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L259)

***

### transitionTime?

> `optional` **transitionTime**: `null` \| `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L260)
