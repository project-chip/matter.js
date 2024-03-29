[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageContext

# Class: StorageContext\<S\>

[storage/export](../modules/storage_export.md).StorageContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](storage_export.StorageContext.md#constructor)

### Properties

- [storage](storage_export.StorageContext.md#storage)
- [thisContexts](storage_export.StorageContext.md#thiscontexts)

### Methods

- [clear](storage_export.StorageContext.md#clear)
- [clearAll](storage_export.StorageContext.md#clearall)
- [contexts](storage_export.StorageContext.md#contexts)
- [createContext](storage_export.StorageContext.md#createcontext)
- [delete](storage_export.StorageContext.md#delete)
- [get](storage_export.StorageContext.md#get)
- [has](storage_export.StorageContext.md#has)
- [keys](storage_export.StorageContext.md#keys)
- [set](storage_export.StorageContext.md#set)
- [values](storage_export.StorageContext.md#values)

## Constructors

### constructor

• **new StorageContext**\<`S`\>(`storage`, `thisContexts`): [`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `S` |
| `thisContexts` | `string`[] |

#### Returns

[`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:11

## Properties

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:9

___

### thisContexts

• `Readonly` **thisContexts**: `string`[]

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:10

## Methods

### clear

▸ **clear**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

Clears all keys in this context

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:22

___

### clearAll

▸ **clearAll**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

Clears all keys in this context and all created sub-contexts.

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:24

___

### contexts

▸ **contexts**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:20

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

packages/matter.js/dist/esm/storage/StorageContext.d.ts:17

___

### delete

▸ **delete**(`key`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:16

___

### get

▸ **get**\<`T`\>(`key`, `defaultValue?`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `T`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:12

___

### has

▸ **has**(`key`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `boolean`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:13

___

### keys

▸ **keys**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:18

___

### set

▸ **set**(`key`, `value`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:14

▸ **set**(`values`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:15

___

### values

▸ **values**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Defined in

packages/matter.js/dist/esm/storage/StorageContext.d.ts:19
