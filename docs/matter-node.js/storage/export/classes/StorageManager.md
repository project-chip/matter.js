[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / StorageManager

# Class: StorageManager\<S\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../interfaces/Storage.md) | `any` |

## Constructors

### new StorageManager()

> **new StorageManager**\<`S`\>(`storage`): [`StorageManager`](StorageManager.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | `S` |

#### Returns

[`StorageManager`](StorageManager.md)\<`S`\>

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:12

## Properties

### initialized

> `private` **initialized**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:11

***

### storage

> `private` **storage**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:10

## Methods

### close()

> **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:14

***

### createContext()

> **createContext**(`context`): [`StorageContext`](StorageContext.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](StorageContext.md)\<`S`\>

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:15

***

### initialize()

> **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/storage/StorageManager.d.ts:13
