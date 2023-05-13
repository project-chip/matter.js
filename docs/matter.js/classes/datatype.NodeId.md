[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype](../modules/datatype.md) / NodeId

# Class: NodeId

[datatype](../modules/datatype.md).NodeId

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 2.5.5

## Table of contents

### Constructors

- [constructor](datatype.NodeId.md#constructor)

### Properties

- [id](datatype.NodeId.md#id)

### Methods

- [toString](datatype.NodeId.md#tostring)
- [getGroupNodeId](datatype.NodeId.md#getgroupnodeid)
- [getRandomOperationalNodeId](datatype.NodeId.md#getrandomoperationalnodeid)

## Constructors

### constructor

• **new NodeId**(`id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `bigint` |

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L24)

## Properties

### id

• `Readonly` **id**: `bigint`

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L25)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L28)

___

### getGroupNodeId

▸ `Static` **getGroupNodeId**(`groupId`): [`NodeId`](datatype.NodeId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L43)

___

### getRandomOperationalNodeId

▸ `Static` **getRandomOperationalNodeId**(): [`NodeId`](datatype.NodeId.md)

#### Returns

[`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/datatype/NodeId.ts#L34)
