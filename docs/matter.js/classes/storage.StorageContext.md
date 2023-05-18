[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageContext

# Class: StorageContext

[storage](../modules/storage.md).StorageContext

## Table of contents

### Constructors

- [constructor](storage.StorageContext.md#constructor)

### Properties

- [context](storage.StorageContext.md#context)
- [storage](storage.StorageContext.md#storage)

### Methods

- [get](storage.StorageContext.md#get)
- [has](storage.StorageContext.md#has)
- [set](storage.StorageContext.md#set)

## Constructors

### constructor

• **new StorageContext**(`storage`, `context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`Storage`](storage.Storage.md) |
| `context` | `string` |

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L11)

## Properties

### context

• `Private` `Readonly` **context**: `string`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L13)

___

### storage

• `Private` `Readonly` **storage**: [`Storage`](storage.Storage.md)

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L12)

## Methods

### get

▸ **get**<`T`\>(`key`, `defaultValue?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L16)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L25)

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageContext.ts#L29)
