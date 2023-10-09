[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendMemory

# Class: StorageBackendMemory

[storage/export](../modules/storage_export.md).StorageBackendMemory

## Implements

- [`Storage`](storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendMemory.md#constructor)

### Properties

- [store](storage_export.StorageBackendMemory.md#store)

### Methods

- [clear](storage_export.StorageBackendMemory.md#clear)
- [close](storage_export.StorageBackendMemory.md#close)
- [createContextKey](storage_export.StorageBackendMemory.md#createcontextkey)
- [delete](storage_export.StorageBackendMemory.md#delete)
- [get](storage_export.StorageBackendMemory.md#get)
- [initialize](storage_export.StorageBackendMemory.md#initialize)
- [set](storage_export.StorageBackendMemory.md#set)

## Constructors

### constructor

• **new StorageBackendMemory**(`store?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:11

## Properties

### store

• `Protected` **store**: `any` = `{}`

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:11

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:28

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[close](storage_export.Storage.md#close)

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:24

___

### createContextKey

▸ `Private` **createContextKey**(`contexts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:13

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

#### Implementation of

[Storage](storage_export.Storage.md).[delete](storage_export.Storage.md#delete)

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:46

___

### get

▸ **get**<`T`\>(`contexts`, `key`): `undefined` \| `T`

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

#### Implementation of

[Storage](storage_export.Storage.md).[get](storage_export.Storage.md#get)

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:32

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[initialize](storage_export.Storage.md#initialize)

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:20

___

### set

▸ **set**<`T`\>(`contexts`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[Storage](storage_export.Storage.md).[set](storage_export.Storage.md#set)

#### Defined in

packages/matter.js/src/storage/StorageBackendMemory.ts:37
