[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [Scenes](../README.md) / ViewSceneResponse

# Interface: ViewSceneResponse

## See

MatterSpecification.v11.Cluster § 1.4.9.13

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvViewSceneResponse`](../README.md#tlvviewsceneresponse)\>

## Properties

### extensionFieldSets?

> `optional` **extensionFieldSets**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.extensionFieldSets`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L158)

***

### groupId

> **groupId**: [`GroupId`](../../../../../datatype/export/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L154)

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L155)

***

### sceneName?

> `optional` **sceneName**: `string`

#### Inherited from

`TypeFromSchema.sceneName`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L157)

***

### status

> **status**: [`StatusCode`](../../../../../protocol/interaction/export/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L153)

***

### transitionTime?

> `optional` **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

[packages/matter.js/src/cluster/definitions/ScenesCluster.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ScenesCluster.ts#L156)
