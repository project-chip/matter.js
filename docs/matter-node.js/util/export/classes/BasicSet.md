[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / BasicSet

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

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:42

## Accessors

### added

> `get` **added**(): [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:50

***

### deleted

> `get` **deleted**(): [`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[`T`], `void`\>

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:51

***

### size

> `get` **size**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:44

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Implementation of

[`ImmutableSet`](../interfaces/ImmutableSet.md).[`[iterator]`](../interfaces/ImmutableSet.md#%5Biterator%5D)

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:43

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

packages/matter.js/dist/esm/util/Set.d.ts:46

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Implementation of

[`MutableSet`](../interfaces/MutableSet.md).[`clear`](../interfaces/MutableSet.md#clear)

#### Source

packages/matter.js/dist/esm/util/Set.d.ts:49

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

packages/matter.js/dist/esm/util/Set.d.ts:52

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

packages/matter.js/dist/esm/util/Set.d.ts:48

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

packages/matter.js/dist/esm/util/Set.d.ts:47

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

packages/matter.js/dist/esm/util/Set.d.ts:45
