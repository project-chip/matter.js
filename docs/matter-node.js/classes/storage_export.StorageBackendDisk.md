[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendDisk

# Class: StorageBackendDisk

[storage/export](../modules/storage_export.md).StorageBackendDisk

## Implements

- [`Storage`](storage_export.Storage.md)

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendDisk.md#constructor)

### Properties

- [localStorage](storage_export.StorageBackendDisk.md#localstorage)

### Methods

- [buildStorageKey](storage_export.StorageBackendDisk.md#buildstoragekey)
- [close](storage_export.StorageBackendDisk.md#close)
- [delete](storage_export.StorageBackendDisk.md#delete)
- [get](storage_export.StorageBackendDisk.md#get)
- [initialize](storage_export.StorageBackendDisk.md#initialize)
- [set](storage_export.StorageBackendDisk.md#set)

## Constructors

### constructor

• **new StorageBackendDisk**(`path`, `clear?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | `string` | `undefined` |
| `clear` | `boolean` | `false` |

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L14)

## Properties

### localStorage

• `Private` `Readonly` **localStorage**: `any`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L12)

## Methods

### buildStorageKey

▸ **buildStorageKey**(`contexts`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L27)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[close](storage_export.Storage.md#close)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L23)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L52)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L40)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Storage](storage_export.Storage.md).[initialize](storage_export.Storage.md#initialize)

#### Defined in

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L19)

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

[packages/matter-node.js/src/storage/StorageBackendDisk.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node.js/src/storage/StorageBackendDisk.ts#L47)
