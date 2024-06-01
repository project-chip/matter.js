[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [Scenes](../README.md) / AddSceneRequest

# Interface: AddSceneRequest

Input to the Scenes addScene command

## See

MatterSpecification.v11.Cluster § 1.4.9.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAddSceneRequest`](../README.md#tlvaddscenerequest)\>

## Properties

### extensionFieldSets

> **extensionFieldSets**: [`TypeFromFields`](../../../../tlv/README.md#typefromfieldsf)\<`object`\>[]

#### Inherited from

`TypeFromSchema.extensionFieldSets`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:103

***

### groupId

> **groupId**: [`GroupId`](../../../../datatype/README.md#groupid)

#### Inherited from

`TypeFromSchema.groupId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:99

***

### sceneId

> **sceneId**: `number`

#### Inherited from

`TypeFromSchema.sceneId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:100

***

### sceneName

> **sceneName**: `string`

#### Inherited from

`TypeFromSchema.sceneName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:102

***

### transitionTime

> **transitionTime**: `number`

#### Inherited from

`TypeFromSchema.transitionTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ScenesCluster.d.ts:101
