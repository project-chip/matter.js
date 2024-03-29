[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / MutableSet

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

packages/matter.js/dist/esm/util/Set.d.ts:19

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:21

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

packages/matter.js/dist/esm/util/Set.d.ts:20
