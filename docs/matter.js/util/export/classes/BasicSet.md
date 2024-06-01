[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / BasicSet

# Class: BasicSet\<T, AddT\>

A generic set implementation supporting all interfaces in this module.

Unused features have minimal performance impact.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | - |
| `AddT` | `T` |

## Implements

- [`ImmutableSet`](../interfaces/ImmutableSet.md)\<`T`\>
- [`MutableSet`](../interfaces/MutableSet.md)\<`T`, `AddT`\>
- [`ObservableSet`](../interfaces/ObservableSet.md)\<`T`\>
- [`IndexedSet`](../interfaces/IndexedSet.md)\<`T`\>

## Constructors

### new BasicSet()

> **new BasicSet**\<`T`, `AddT`\>(): [`BasicSet`](BasicSet.md)\<`T`, `AddT`\>

#### Returns

[`BasicSet`](BasicSet.md)\<`T`, `AddT`\>

## Properties

### #added?

> `private` `optional` **#added**: [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

[packages/matter.js/src/util/Set.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L49)

***

### #deleted?

> `private` `optional` **#deleted**: [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

[packages/matter.js/src/util/Set.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L50)

***

### #entries

> `private` **#entries**: `Set`\<`T`\>

#### Source

[packages/matter.js/src/util/Set.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L48)

***

### #indices?

> `private` `optional` **#indices**: \{ \[field in string \| number \| symbol\]?: Map\<any, T\> \}

#### Source

[packages/matter.js/src/util/Set.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L51)

## Accessors

### added

> `get` **added**(): [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

[packages/matter.js/src/util/Set.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L142)

***

### deleted

> `get` **deleted**(): [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

[packages/matter.js/src/util/Set.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L149)

***

### size

> `get` **size**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/util/Set.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L59)

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Implementation of

[`ImmutableSet`](../interfaces/ImmutableSet.md).[`[iterator]`](../interfaces/ImmutableSet.md#%5Biterator%5D)

#### Source

[packages/matter.js/src/util/Set.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L55)

***

### add()

> **add**(`item`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `item` | `AddT` |

#### Returns

`void`

#### Implementation of

[`MutableSet`](../interfaces/MutableSet.md).[`add`](../interfaces/MutableSet.md#add)

#### Source

[packages/matter.js/src/util/Set.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L67)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Implementation of

[`MutableSet`](../interfaces/MutableSet.md).[`clear`](../interfaces/MutableSet.md#clear)

#### Source

[packages/matter.js/src/util/Set.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L138)

***

### create()

> `protected` **create**(`definition`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | `AddT` |

#### Returns

`T`

#### Source

[packages/matter.js/src/util/Set.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L156)

***

### delete()

> **delete**(`item`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Implementation of

[`MutableSet`](../interfaces/MutableSet.md).[`delete`](../interfaces/MutableSet.md#delete)

#### Source

[packages/matter.js/src/util/Set.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L114)

***

### get()

> **get**\<`F`\>(`field`, `value`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `field` | `F` |
| `value` | `T`\[`F`\] |

#### Returns

`undefined` \| `T`

#### Implementation of

[`IndexedSet`](../interfaces/IndexedSet.md).[`get`](../interfaces/IndexedSet.md#get)

#### Source

[packages/matter.js/src/util/Set.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L95)

***

### has()

> **has**(`item`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Implementation of

[`ImmutableSet`](../interfaces/ImmutableSet.md).[`has`](../interfaces/ImmutableSet.md#has)

#### Source

[packages/matter.js/src/util/Set.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L63)
