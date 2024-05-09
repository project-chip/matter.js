[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / MutableSet

# Interface: MutableSet\<T, AddT\>

[util/export](../modules/util_export.md).MutableSet

A write-only set.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `AddT` | `T` |

## Implemented by

- [`BasicSet`](../classes/util_export.BasicSet.md)
- [`Parts`](../classes/node_export._internal_.Parts.md)
- [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)

## Table of contents

### Methods

- [add](util_export.MutableSet.md#add)
- [clear](util_export.MutableSet.md#clear)
- [delete](util_export.MutableSet.md#delete)

## Methods

### add

▸ **add**(`definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `AddT` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Set.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L22)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/util/Set.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L24)

___

### delete

▸ **delete**(`definition`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/util/Set.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L23)
