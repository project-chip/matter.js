[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageContext

# Class: StorageContext

[storage/export](../modules/storage_export.md).StorageContext

## Table of contents

### Constructors

- [constructor](storage_export.StorageContext.md#constructor)

### Properties

- [contexts](storage_export.StorageContext.md#contexts)
- [storage](storage_export.StorageContext.md#storage)

### Methods

- [createContext](storage_export.StorageContext.md#createcontext)
- [delete](storage_export.StorageContext.md#delete)
- [get](storage_export.StorageContext.md#get)
- [has](storage_export.StorageContext.md#has)
- [set](storage_export.StorageContext.md#set)

## Constructors

### constructor

• **new StorageContext**(`storage`, `contexts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`Storage`](storage_export.Storage.md) |
| `contexts` | `string`[] |

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L11)

## Properties

### contexts

• `Private` `Readonly` **contexts**: `string`[]

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L13)

___

### storage

• `Private` `Readonly` **storage**: [`Storage`](storage_export.Storage.md)

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L12)

## Methods

### createContext

▸ **createContext**(`context`): [`StorageContext`](storage_export.StorageContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L39)

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L35)

___

### get

▸ **get**<`T`\>(`key`, `defaultValue?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L16)

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

[packages/matter.js/src/storage/StorageContext.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L27)

___

### set

▸ **set**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/storage/StorageContext.ts#L31)
