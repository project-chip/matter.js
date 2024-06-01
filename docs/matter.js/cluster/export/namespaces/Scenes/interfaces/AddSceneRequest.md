[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / AddSceneRequest

# Interface: AddSceneRequest

Input to the Scenes addScene command

## See

MatterSpecification.v11.Cluster § 1.4.9.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddSceneRequest`](../README.md#tlvaddscenerequest)\>

## Properties

### extensionFieldSets

> **extensionFieldSets**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.extensionFieldSets`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L111)

***

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L107)

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L108)

***

### sceneName

> **sceneName**: `string`

#### Inherited from

`TypeFromSchema.sceneName`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L110)

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L109)
