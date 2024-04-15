[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / ImmutableSet

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

[packages/matter.js/src/util/Set.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L13)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/util/Set.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L15)

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

[packages/matter.js/src/util/Set.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L14)
