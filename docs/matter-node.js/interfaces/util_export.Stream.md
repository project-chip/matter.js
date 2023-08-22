[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Stream

# Interface: Stream<T\>

[util/export](../modules/util_export.md).Stream

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Queue`](../classes/util_export.Queue.md)

## Table of contents

### Methods

- [read](util_export.Stream.md#read)
- [write](util_export.Stream.md#write)

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
