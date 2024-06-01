[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / StorageBackendMemory

# Class: StorageBackendMemory

Matter.js uses this key/value API to manage persistent state.

## Extends

- [`SyncStorage`](SyncStorage.md)

## Constructors

### new StorageBackendMemory()

> **new StorageBackendMemory**(`store`): [`StorageBackendMemory`](StorageBackendMemory.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `store` | `any` |

#### Returns

[`StorageBackendMemory`](StorageBackendMemory.md)

#### Overrides

[`SyncStorage`](SyncStorage.md).[`constructor`](SyncStorage.md#constructors)

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

## Properties

### isInitialized

> `protected` **isInitialized**: `boolean` = `false`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L11)

***

### store

> `protected` **store**: `any` = `{}`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

## Accessors

### initialized

> `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L17)

## Methods

### #setKey()

> `private` **#setKey**(`contexts`, `key`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Returns

`void`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L55)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L45)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L118)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`close`](SyncStorage.md#close)

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L40)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L100)

***

### createContextKey()

> `private` **createContextKey**(`contexts`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L27)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L79)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L49)

***

### initialize()

> **initialize**(): `void`

#### Returns

`void`

#### Overrides

[`SyncStorage`](SyncStorage.md).[`initialize`](SyncStorage.md#initialize)

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L34)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L85)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L64)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L91)

***

### create()

> `static` **create**(`store`): `Promise`\<[`StorageBackendMemory`](StorageBackendMemory.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `store` | `any` |

#### Returns

`Promise`\<[`StorageBackendMemory`](StorageBackendMemory.md)\>

#### Source

[packages/matter.js/src/storage/StorageBackendMemory.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageBackendMemory.ts#L21)
