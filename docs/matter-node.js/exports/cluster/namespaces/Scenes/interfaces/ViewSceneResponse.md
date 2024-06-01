[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / ViewSceneResponse

# Interface: ViewSceneResponse

## See

MatterSpecification.v11.Cluster § 1.4.9.13

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvViewSceneResponse`](../README.md#tlvviewsceneresponse)\>

## Properties

### extensionFieldSets?

> `optional` **extensionFieldSets**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.extensionFieldSets`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:170

***

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:166

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:167

***

### sceneName?

> `optional` **sceneName**: `string`

#### Inherited from

`TypeFromSchema.sceneName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:169

***

### status

> **status**: [`StatusCode`](../../../../interaction/enumerations/StatusCode.md)

#### Inherited from

`TypeFromSchema.status`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:165

***

### transitionTime?

> `optional` **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:168
