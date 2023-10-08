[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageManager

# Class: StorageManager

[storage/export](../modules/storage_export.md).StorageManager

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

• **new StorageManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`Storage`](storage_export.Storage.md) |

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:13

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:11

___

### storage

• `Private` **storage**: [`Storage`](storage_export.Storage.md)

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:13

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:20

___

### createContext

▸ **createContext**(`context`): [`StorageContext`](storage_export.StorageContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](storage_export.StorageContext.md)

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:24

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/storage/StorageManager.ts:15
