[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](../modules/exports_datatype.md) / NodeId

# Class: NodeId

[exports/datatype](../modules/exports_datatype.md).NodeId

A Node Identifier (Node ID) is a 64-bit number that uniquely identifies an individual Node or a
group of Nodes on a Fabric.

**`See`**

MatterCoreSpecificationV1_0 § 2.5.5

## Table of contents

### Constructors

- [constructor](exports_datatype.NodeId.md#constructor)

### Properties

- [id](exports_datatype.NodeId.md#id)

### Methods

- [toString](exports_datatype.NodeId.md#tostring)
- [getGroupNodeId](exports_datatype.NodeId.md#getgroupnodeid)
- [getRandomOperationalNodeId](exports_datatype.NodeId.md#getrandomoperationalnodeid)

## Constructors

### constructor

• **new NodeId**(`id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `bigint` |

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:15

## Properties

### id

• `Readonly` **id**: `bigint`

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:14

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:16

___

### getGroupNodeId

▸ `Static` **getGroupNodeId**(`groupId`): [`NodeId`](exports_datatype.NodeId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](exports_datatype.NodeId.md)

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:18

___

### getRandomOperationalNodeId

▸ `Static` **getRandomOperationalNodeId**(): [`NodeId`](exports_datatype.NodeId.md)

#### Returns

[`NodeId`](exports_datatype.NodeId.md)

#### Defined in

packages/matter.js/dist/cjs/datatype/NodeId.d.ts:17
