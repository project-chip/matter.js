[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / StorageContext

# Class: StorageContext\<S\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../interfaces/Storage.md) | `any` |

## Constructors

### new StorageContext()

> **new StorageContext**\<`S`\>(`storage`, `thisContexts`): [`StorageContext`](StorageContext.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `storage` | `S` |
| `thisContexts` | `string`[] |

#### Returns

[`StorageContext`](StorageContext.md)\<`S`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L12)

## Properties

### storage

> `private` `readonly` **storage**: `S`

#### Source

[packages/matter.js/src/storage/StorageContext.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L13)

***

### thisContexts

> `readonly` **thisContexts**: `string`[]

#### Source

[packages/matter.js/src/storage/StorageContext.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L14)

## Methods

### clear()

> **clear**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

Clears all keys in this context

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L87)

***

### clearAll()

> **clearAll**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

Clears all keys in this context and all created sub-contexts.

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L108)

***

### contexts()

> **contexts**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L82)

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

[packages/matter.js/src/storage/StorageContext.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L65)

***

### delete()

> **delete**(`key`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L61)

***

### get()

> **get**\<`T`\>(`key`, `defaultValue`?): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `T`\>

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue`? | `T` |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `T`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L17)

***

### has()

> **has**(`key`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `boolean`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `boolean`\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L41)

***

### keys()

> **keys**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L71)

***

### set()

#### set(key, value)

> **set**(`key`, `value`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

##### Source

[packages/matter.js/src/storage/StorageContext.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L52)

#### set(values)

> **set**(`values`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `void`\>

##### Source

[packages/matter.js/src/storage/StorageContext.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L53)

***

### values()

> **values**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Source

[packages/matter.js/src/storage/StorageContext.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StorageContext.ts#L75)
