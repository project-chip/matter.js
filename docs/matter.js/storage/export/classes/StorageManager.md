[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / StorageManager

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

[packages/matter.js/src/storage/StorageManager.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L14)

## Properties

### initialized

> `private` **initialized**: `boolean` = `false`

#### Source

[packages/matter.js/src/storage/StorageManager.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L12)

***

### storage

> `private` **storage**: `S`

#### Source

[packages/matter.js/src/storage/StorageManager.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L14)

## Methods

### close()

> **close**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/StorageManager.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L28)

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

[packages/matter.js/src/storage/StorageManager.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L33)

***

### initialize()

> **initialize**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/storage/StorageManager.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageManager.ts#L16)
