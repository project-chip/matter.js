[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / Stream

# Interface: Stream<T\>

[util](../modules/util.md).Stream

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Queue`](../classes/util.Queue.md)

## Table of contents

### Methods

- [read](util.Stream.md#read)
- [write](util.Stream.md#write)

## Methods

### read

▸ **read**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

packages/matter.js/dist/cjs/util/Stream.d.ts:10

___

### write

▸ **write**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/util/Stream.d.ts:11
