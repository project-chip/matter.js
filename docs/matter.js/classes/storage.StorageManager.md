[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage](../modules/storage.md) / StorageManager

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

[packages/matter.js/src/storage/StorageManager.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L13)

## Properties

### initialized

• `Private` **initialized**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L11)

___

### storage

• `Private` **storage**: [`Storage`](storage.Storage.md)

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L14)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L22)

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

[packages/matter.js/src/storage/StorageManager.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L26)

___

### initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/storage/StorageManager.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/storage/StorageManager.ts#L17)
