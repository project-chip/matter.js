[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageBackendMemory

# Class: StorageBackendMemory

[storage](../modules/storage.md).StorageBackendMemory

## Implements

- [`Storage`](storage.Storage.md)

## Table of contents

### Constructors

- [constructor](storage.StorageBackendMemory.md#constructor)

### Properties

- [store](storage.StorageBackendMemory.md#store)

### Methods

- [close](storage.StorageBackendMemory.md#close)
- [get](storage.StorageBackendMemory.md#get)
- [initialize](storage.StorageBackendMemory.md#initialize)
- [set](storage.StorageBackendMemory.md#set)

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

[Storage](storage.Storage.md).[close](storage.Storage.md#close)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:12

___

### get

▸ **get**<`T`\>(`context`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[Storage](storage.Storage.md).[get](storage.Storage.md#get)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:13

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage.Storage.md).[initialize](storage.Storage.md#initialize)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:11

___

### set

▸ **set**<`T`\>(`context`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[Storage](storage.Storage.md).[set](storage.Storage.md#set)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageBackendMemory.d.ts:14
