[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / IndexedSet

# Interface: IndexedSet\<T\>

[util/export](../modules/util_export.md).IndexedSet

An interface for index set lookup.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`BasicSet`](../classes/util_export.BasicSet.md)

## Table of contents

### Methods

- [get](util_export.IndexedSet.md#get)

## Methods

### get

▸ **get**\<`F`\>(`field`, `value`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `F` |
| `value` | `T`[`F`] |

#### Returns

`undefined` \| `T`

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:34
