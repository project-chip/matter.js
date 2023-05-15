[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageContext

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

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:11

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:10

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:9

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
| `T` | extends [`SupportedStorageTypes`](../modules/storage.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageContext.d.ts:14
