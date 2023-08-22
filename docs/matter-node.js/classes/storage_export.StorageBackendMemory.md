[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendMemory

# Class: StorageBackendMemory

[storage/export](../modules/storage_export.md).StorageBackendMemory

## Hierarchy

- **`StorageBackendMemory`**

  ↳ [`StorageBackendJsonFile`](storage_export.StorageBackendJsonFile.md)

## Implements

- [`Storage`](storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendMemory.md#constructor)

### Properties

- [createContextKey](storage_export.StorageBackendMemory.md#createcontextkey)
- [store](storage_export.StorageBackendMemory.md#store)

### Methods

- [close](storage_export.StorageBackendMemory.md#close)
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
| `store?` | `any` |

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:10

## Properties

### createContextKey

• `Private` **createContextKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:11

___

### store

• `Protected` **store**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:9

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[close](storage_export.Storage.md#close)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:13

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

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:16

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

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:14

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[initialize](storage_export.Storage.md#initialize)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:12

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

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:15
