[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / Stream

# Interface: Stream\<T\>

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

▸ **read**(): `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/util/Stream.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Stream.ts#L12)

___

### write

▸ **write**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/util/Stream.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Stream.ts#L13)
