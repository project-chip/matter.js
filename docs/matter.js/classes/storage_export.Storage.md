[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / Storage

# Class: Storage

[storage/export](../modules/storage_export.md).Storage

## Implemented by

- [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

## Table of contents

### Constructors

- [constructor](storage_export.Storage.md#constructor)

### Methods

- [close](storage_export.Storage.md#close)
- [delete](storage_export.Storage.md#delete)
- [get](storage_export.Storage.md#get)
- [initialize](storage_export.Storage.md#initialize)
- [set](storage_export.Storage.md#set)

## Constructors

### constructor

• **new Storage**()

## Methods

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/Storage.ts#L13)

___

### delete

▸ `Abstract` **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/Storage.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/Storage.ts#L16)

___

### get

▸ `Abstract` **get**<`T`\>(`contexts`, `key`): `undefined` \| `T`

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

#### Defined in

[packages/matter.js/src/storage/Storage.ts:14](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/Storage.ts#L14)

___

### initialize

▸ `Abstract` **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/Storage.ts#L12)

___

### set

▸ `Abstract` **set**<`T`\>(`contexts`, `key`, `value`): `void`

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

#### Defined in

[packages/matter.js/src/storage/Storage.ts:15](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/Storage.ts#L15)
