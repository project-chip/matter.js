[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageContext

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:11

## Properties

### contexts

• `Private` `Readonly` **contexts**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:10

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:9

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:16

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:15

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:12

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:13

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:14
