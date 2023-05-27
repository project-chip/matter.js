[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / Storage

# Class: Storage

[storage](../modules/storage.md).Storage

## Implemented by

- [`StorageBackendDisk`](storage.StorageBackendDisk.md)
- [`StorageBackendMemory`](storage.StorageBackendMemory.md)

## Table of contents

### Constructors

- [constructor](storage.Storage.md#constructor)

### Methods

- [close](storage.Storage.md#close)
- [get](storage.Storage.md#get)
- [initialize](storage.Storage.md#initialize)
- [set](storage.Storage.md#set)

## Constructors

### constructor

• **new Storage**()

## Methods

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/storage/Storage.d.ts:9

___

### get

▸ `Abstract` **get**<`T`\>(`context`, `key`): `undefined` \| `T`

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

#### Defined in

packages/matter.js/dist/cjs/storage/Storage.d.ts:10

___

### initialize

▸ `Abstract` **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/storage/Storage.d.ts:8

___

### set

▸ `Abstract` **set**<`T`\>(`context`, `key`, `value`): `void`

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

#### Defined in

packages/matter.js/dist/cjs/storage/Storage.d.ts:11
