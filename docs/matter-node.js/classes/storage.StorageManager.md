[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageManager

# Class: StorageManager

[storage](../modules/storage.md).StorageManager

## Table of contents

### Constructors

- [constructor](storage.StorageManager.md#constructor)

### Properties

- [initialized](storage.StorageManager.md#initialized)
- [storage](storage.StorageManager.md#storage)

### Methods

- [close](storage.StorageManager.md#close)
- [createContext](storage.StorageManager.md#createcontext)
- [initialize](storage.StorageManager.md#initialize)

## Constructors

### constructor

• **new StorageManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`Storage`](storage.Storage.md) |

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:11

## Properties

### initialized

• `Private` **initialized**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:10

___

### storage

• `Private` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:9

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:13

___

### createContext

▸ **createContext**(`context`): [`StorageContext`](storage.StorageContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](storage.StorageContext.md)

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:14

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/storage/StorageManager.d.ts:12
