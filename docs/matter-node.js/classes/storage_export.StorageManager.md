[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageManager

# Class: StorageManager\<S\>

[storage/export](../modules/storage_export.md).StorageManager

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](storage_export.StorageManager.md#constructor)

### Properties

- [initialized](storage_export.StorageManager.md#initialized)
- [storage](storage_export.StorageManager.md#storage)

### Methods

- [close](storage_export.StorageManager.md#close)
- [createContext](storage_export.StorageManager.md#createcontext)
- [initialize](storage_export.StorageManager.md#initialize)

## Constructors

### constructor

• **new StorageManager**\<`S`\>(`storage`): [`StorageManager`](storage_export.StorageManager.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `S` |

#### Returns

[`StorageManager`](storage_export.StorageManager.md)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:12

## Properties

### initialized

• `Private` **initialized**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:11

___

### storage

• `Private` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:10

## Methods

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:14

___

### createContext

▸ **createContext**(`context`): [`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:15

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageManager.d.ts:13
