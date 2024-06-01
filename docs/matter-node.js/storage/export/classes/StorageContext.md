[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / StorageContext

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

packages/matter.js/dist/esm/storage/StorageContext.d.ts:11

## Properties

### storage

> `private` `readonly` **storage**: `any`

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:9

***

### thisContexts

> `readonly` **thisContexts**: `string`[]

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:10

## Methods

### clear()

> **clear**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

Clears all keys in this context

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:22

***

### clearAll()

> **clearAll**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

Clears all keys in this context and all created sub-contexts.

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:24

***

### contexts()

> **contexts**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:20

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

packages/matter.js/dist/esm/storage/StorageContext.d.ts:17

***

### delete()

> **delete**(`key`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:16

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

packages/matter.js/dist/esm/storage/StorageContext.d.ts:12

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

packages/matter.js/dist/esm/storage/StorageContext.d.ts:13

***

### keys()

> **keys**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `string`[]\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:18

***

### set()

#### set(key, value)

> **set**(`key`, `value`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

##### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

##### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:14

#### set(values)

> **set**(`values`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

##### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`\>

##### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:15

***

### values()

> **values**(): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\>\>

#### Source

packages/matter.js/dist/esm/storage/StorageContext.d.ts:19
