[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ImmutableSet

# Interface: ImmutableSet\<T\>

[util/export](../modules/util_export.md).ImmutableSet

A read-only set.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`BasicSet`](../classes/util_export.BasicSet.md)

## Table of contents

### Properties

- [[iterator]](util_export.ImmutableSet.md#[iterator])

### Accessors

- [size](util_export.ImmutableSet.md#size)

### Methods

- [has](util_export.ImmutableSet.md#has)

## Properties

### [iterator]

• **[iterator]**: () => `Iterator`\<`T`, `undefined`, `undefined`\>

#### Type declaration

▸ (): `Iterator`\<`T`, `undefined`, `undefined`\>

##### Returns

`Iterator`\<`T`, `undefined`, `undefined`\>

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:11

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:13

## Methods

### has

▸ **has**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/util/Set.d.ts:12
