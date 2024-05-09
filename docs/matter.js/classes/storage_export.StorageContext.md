[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageContext

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

[packages/matter.js/src/storage/StorageContext.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L12)

## Properties

### storage

• `Private` `Readonly` **storage**: `S`

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L13)

___

### thisContexts

• `Readonly` **thisContexts**: `string`[]

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L14)

## Methods

### clear

▸ **clear**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

Clears all keys in this context

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L87)

___

### clearAll

▸ **clearAll**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

Clears all keys in this context and all created sub-contexts.

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L108)

___

### contexts

▸ **contexts**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L82)

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

[packages/matter.js/src/storage/StorageContext.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L65)

___

### delete

▸ **delete**(`key`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L61)

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

[packages/matter.js/src/storage/StorageContext.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L17)

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

[packages/matter.js/src/storage/StorageContext.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L41)

___

### keys

▸ **keys**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `string`[]\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L71)

___

### set

▸ **set**(`key`, `value`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L52)

▸ **set**(`values`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `void`\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L53)

___

### values

▸ **values**(): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\>

#### Defined in

[packages/matter.js/src/storage/StorageContext.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageContext.ts#L75)
