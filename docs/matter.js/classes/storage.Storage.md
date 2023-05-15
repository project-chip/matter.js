[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / Storage

# Class: Storage

[storage](../modules/storage.md).Storage

## Implemented by

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

[packages/matter.js/src/storage/Storage.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/Storage.ts#L10)

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

[packages/matter.js/src/storage/Storage.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/Storage.ts#L11)

___

### initialize

▸ `Abstract` **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/storage/Storage.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/Storage.ts#L9)

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

[packages/matter.js/src/storage/Storage.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/Storage.ts#L12)
