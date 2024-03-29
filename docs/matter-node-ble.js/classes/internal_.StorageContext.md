[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / StorageContext

# Class: StorageContext\<S\>

[\<internal\>](../modules/internal_.md).StorageContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](internal_.StorageContext.md#constructor)

### Properties

- [storage](internal_.StorageContext.md#storage)
- [thisContexts](internal_.StorageContext.md#thiscontexts)

### Methods

- [clear](internal_.StorageContext.md#clear)
- [clearAll](internal_.StorageContext.md#clearall)
- [contexts](internal_.StorageContext.md#contexts)
- [createContext](internal_.StorageContext.md#createcontext)
- [delete](internal_.StorageContext.md#delete)
- [get](internal_.StorageContext.md#get)
- [has](internal_.StorageContext.md#has)
- [keys](internal_.StorageContext.md#keys)
- [set](internal_.StorageContext.md#set)
- [values](internal_.StorageContext.md#values)

## Constructors

### constructor

• **new StorageContext**\<`S`\>(`storage`, `thisContexts`): [`StorageContext`](internal_.StorageContext.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | `S` |
| `thisContexts` | `string`[] |

#### Returns

[`StorageContext`](internal_.StorageContext.md)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:11

## Properties

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:9

___

### thisContexts

• `Readonly` **thisContexts**: `string`[]

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:10

## Methods

### clear

▸ **clear**(): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

Clears all keys in this context

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:22

___

### clearAll

▸ **clearAll**(): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

Clears all keys in this context and all created sub-contexts.

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:24

___

### contexts

▸ **contexts**(): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:20

___

### createContext

▸ **createContext**(`context`): [`StorageContext`](internal_.StorageContext.md)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`StorageContext`](internal_.StorageContext.md)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:17

___

### delete

▸ **delete**(`key`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:16

___

### get

▸ **get**\<`T`\>(`key`, `defaultValue?`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `T`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:12

___

### has

▸ **has**(`key`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `boolean`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:13

___

### keys

▸ **keys**(): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:18

___

### set

▸ **set**(`key`, `value`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:14

▸ **set**(`values`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:15

___

### values

▸ **values**(): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\>

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\>\>

#### Defined in

matter.js/dist/esm/storage/StorageContext.d.ts:19
