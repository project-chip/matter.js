[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageBackendDisk

# Class: StorageBackendDisk

[storage](../modules/storage.md).StorageBackendDisk

## Implements

- [`Storage`](storage.Storage.md)

## Table of contents

### Constructors

- [constructor](storage.StorageBackendDisk.md#constructor)

### Properties

- [localStorage](storage.StorageBackendDisk.md#localstorage)

### Methods

- [buildStorageKey](storage.StorageBackendDisk.md#buildstoragekey)
- [close](storage.StorageBackendDisk.md#close)
- [get](storage.StorageBackendDisk.md#get)
- [initialize](storage.StorageBackendDisk.md#initialize)
- [set](storage.StorageBackendDisk.md#set)

## Constructors

### constructor

• **new StorageBackendDisk**(`path`, `clear?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `clear` | `boolean` | `false` |

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L14)

## Properties

### localStorage

• `Private` `Readonly` **localStorage**: `any`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L12)

## Methods

### buildStorageKey

▸ **buildStorageKey**(`context`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L30)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage.Storage.md).[close](storage.Storage.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L26)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:34](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L34)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage.Storage.md).[initialize](storage.Storage.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L22)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L41)
