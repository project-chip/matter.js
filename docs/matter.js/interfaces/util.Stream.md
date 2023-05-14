[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util](../modules/util.md) / Stream

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

[packages/matter.js/src/util/Stream.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Stream.ts#L11)

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

[packages/matter.js/src/util/Stream.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/Stream.ts#L12)
