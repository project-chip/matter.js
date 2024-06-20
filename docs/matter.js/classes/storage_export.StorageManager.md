[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageManager

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

[packages/matter.js/src/storage/StorageManager.ts:14](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L14)

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:12](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L12)

___

### storage

• `Private` **storage**: `S`

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:14](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L14)

## Methods

### close

▸ **close**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:28](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L28)

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

[packages/matter.js/src/storage/StorageManager.ts:33](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L33)

___

### initialize

▸ **initialize**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:16](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/storage/StorageManager.ts#L16)
