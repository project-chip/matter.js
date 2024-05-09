[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / BasicSet

# Class: BasicSet\<T, AddT\>

[util/export](../modules/util_export.md).BasicSet

A generic set implementation supporting all interfaces in this module.

Unused features have minimal performance impact.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `AddT` | `T` |

## Implements

- [`ImmutableSet`](../interfaces/util_export.ImmutableSet.md)\<`T`\>
- [`MutableSet`](../interfaces/util_export.MutableSet.md)\<`T`, `AddT`\>
- [`ObservableSet`](../interfaces/util_export.ObservableSet.md)\<`T`\>
- [`IndexedSet`](../interfaces/util_export.IndexedSet.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](util_export.BasicSet.md#constructor)

### Properties

- [#added](util_export.BasicSet.md##added)
- [#deleted](util_export.BasicSet.md##deleted)
- [#entries](util_export.BasicSet.md##entries)
- [#indices](util_export.BasicSet.md##indices)

### Accessors

- [added](util_export.BasicSet.md#added)
- [deleted](util_export.BasicSet.md#deleted)
- [size](util_export.BasicSet.md#size)

### Methods

- [[iterator]](util_export.BasicSet.md#[iterator])
- [add](util_export.BasicSet.md#add)
- [clear](util_export.BasicSet.md#clear)
- [create](util_export.BasicSet.md#create)
- [delete](util_export.BasicSet.md#delete)
- [get](util_export.BasicSet.md#get)
- [has](util_export.BasicSet.md#has)

## Constructors

### constructor

• **new BasicSet**\<`T`, `AddT`\>(): [`BasicSet`](util_export.BasicSet.md)\<`T`, `AddT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `AddT` | `T` |

#### Returns

[`BasicSet`](util_export.BasicSet.md)\<`T`, `AddT`\>

## Properties

### #added

• `Private` `Optional` **#added**: [`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Defined in

[packages/matter.js/src/util/Set.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L49)

___

### #deleted

• `Private` `Optional` **#deleted**: [`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Defined in

[packages/matter.js/src/util/Set.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L50)

___

### #entries

• `Private` **#entries**: `Set`\<`T`\>

#### Defined in

[packages/matter.js/src/util/Set.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L48)

___

### #indices

• `Private` `Optional` **#indices**: \{ [field in string \| number \| symbol]?: Map\<any, T\> }

#### Defined in

[packages/matter.js/src/util/Set.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L51)

## Accessors

### added

• `get` **added**(): [`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Implementation of

ObservableSet.added

#### Defined in

[packages/matter.js/src/util/Set.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L142)

___

### deleted

• `get` **deleted**(): [`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[`T`], `void`\>

#### Implementation of

ObservableSet.deleted

#### Defined in

[packages/matter.js/src/util/Set.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L149)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

ImmutableSet.size

#### Defined in

[packages/matter.js/src/util/Set.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L59)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Implementation of

[ImmutableSet](../interfaces/util_export.ImmutableSet.md).[[iterator]](../interfaces/util_export.ImmutableSet.md#[iterator])

#### Defined in

[packages/matter.js/src/util/Set.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L55)

___

### add

▸ **add**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `AddT` |

#### Returns

`void`

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[add](../interfaces/util_export.MutableSet.md#add)

#### Defined in

[packages/matter.js/src/util/Set.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L67)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[clear](../interfaces/util_export.MutableSet.md#clear)

#### Defined in

[packages/matter.js/src/util/Set.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L138)

___

### create

▸ **create**(`definition`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `AddT` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/util/Set.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L156)

___

### delete

▸ **delete**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[delete](../interfaces/util_export.MutableSet.md#delete)

#### Defined in

[packages/matter.js/src/util/Set.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L114)

___

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

#### Implementation of

[IndexedSet](../interfaces/util_export.IndexedSet.md).[get](../interfaces/util_export.IndexedSet.md#get)

#### Defined in

[packages/matter.js/src/util/Set.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L95)

___

### has

▸ **has**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Implementation of

[ImmutableSet](../interfaces/util_export.ImmutableSet.md).[has](../interfaces/util_export.ImmutableSet.md#has)

#### Defined in

[packages/matter.js/src/util/Set.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Set.ts#L63)
