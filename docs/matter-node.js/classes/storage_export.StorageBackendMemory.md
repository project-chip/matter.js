[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendMemory

# Class: StorageBackendMemory

[storage/export](../modules/storage_export.md).StorageBackendMemory

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- [`SyncStorage`](storage_export.SyncStorage.md)

  ↳ **`StorageBackendMemory`**

  ↳↳ [`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendMemory.md#constructor)

### Properties

- [#private](storage_export.StorageBackendMemory.md##private)
- [createContextKey](storage_export.StorageBackendMemory.md#createcontextkey)
- [initialized](storage_export.StorageBackendMemory.md#initialized)
- [store](storage_export.StorageBackendMemory.md#store)

### Methods

- [clear](storage_export.StorageBackendMemory.md#clear)
- [clearAll](storage_export.StorageBackendMemory.md#clearall)
- [close](storage_export.StorageBackendMemory.md#close)
- [contexts](storage_export.StorageBackendMemory.md#contexts)
- [delete](storage_export.StorageBackendMemory.md#delete)
- [get](storage_export.StorageBackendMemory.md#get)
- [initialize](storage_export.StorageBackendMemory.md#initialize)
- [keys](storage_export.StorageBackendMemory.md#keys)
- [set](storage_export.StorageBackendMemory.md#set)
- [values](storage_export.StorageBackendMemory.md#values)
- [create](storage_export.StorageBackendMemory.md#create)

## Constructors

### constructor

• **new StorageBackendMemory**(`store?`): [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store?` | `any` |

#### Returns

[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[constructor](storage_export.SyncStorage.md#constructor)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:12

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:9

___

### createContextKey

• `Private` **createContextKey**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:14

___

### initialized

• `Protected` **initialized**: `boolean`

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:11

___

### store

• `Protected` **store**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:10

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:17

___

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[clearAll](storage_export.SyncStorage.md#clearall)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:24

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[close](storage_export.SyncStorage.md#close)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:16

___

### contexts

▸ **contexts**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[contexts](storage_export.SyncStorage.md#contexts)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:23

___

### delete

▸ **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[delete](storage_export.SyncStorage.md#delete)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:20

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[get](storage_export.SyncStorage.md#get)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:18

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[initialize](storage_export.SyncStorage.md#initialize)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:15

___

### keys

▸ **keys**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[keys](storage_export.SyncStorage.md#keys)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:21

___

### set

▸ **set**(`contexts`, `keyOrValues`, `value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `keyOrValues` | `string` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |
| `value?` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[set](storage_export.SyncStorage.md#set)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:19

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[values](storage_export.SyncStorage.md#values)

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:22

___

### create

▸ **create**(`store?`): `Promise`\<[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `store?` | `any` |

#### Returns

`Promise`\<[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageBackendMemory.d.ts:13
