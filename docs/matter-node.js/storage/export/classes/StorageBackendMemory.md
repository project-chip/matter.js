[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / StorageBackendMemory

# Class: StorageBackendMemory

Matter.js uses this key/value API to manage persistent state.

## Extends

- [`SyncStorage`](SyncStorage.md)

## Extended by

- [`StorageBackendJsonFile`](StorageBackendJsonFile.md)

## Constructors

### new StorageBackendMemory()

> **new StorageBackendMemory**(`store`?): [`StorageBackendMemory`](StorageBackendMemory.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `store`? | `any` |

#### Returns

[`StorageBackendMemory`](StorageBackendMemory.md)

#### Overrides

[`SyncStorage`](SyncStorage.md).[`constructor`](SyncStorage.md#constructors)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:12

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:9

***

### createContextKey

> `private` **createContextKey**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:15

***

### isInitialized

> `protected` **isInitialized**: `boolean`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:11

***

### store

> `protected` **store**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:10

## Accessors

### initialized

> `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:13

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:18

***

### clearAll()

> **clearAll**(`contexts`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`clearAll`](SyncStorage.md#clearall)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:25

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`close`](SyncStorage.md#close)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:17

***

### contexts()

> **contexts**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[`SyncStorage`](SyncStorage.md).[`contexts`](SyncStorage.md#contexts)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:24

***

### delete()

> **delete**(`contexts`, `key`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`delete`](SyncStorage.md#delete)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:21

***

### get()

> **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`get`](SyncStorage.md#get)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:19

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`initialize`](SyncStorage.md#initialize)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:16

***

### keys()

> **keys**(`contexts`): `string`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[`SyncStorage`](SyncStorage.md).[`keys`](SyncStorage.md#keys)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:22

***

### set()

> **set**(`contexts`, `keyOrValues`, `value`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `keyOrValues` | `string` \| `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |
| `value`? | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`set`](SyncStorage.md#set)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:20

***

### values()

> **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>

#### Overrides

[`SyncStorage`](SyncStorage.md).[`values`](SyncStorage.md#values)

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:23

***

### create()

> `static` **create**(`store`?): `Promise`\<[`StorageBackendMemory`](StorageBackendMemory.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `store`? | `any` |

#### Returns

`Promise`\<[`StorageBackendMemory`](StorageBackendMemory.md)\>

#### Source

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:14
