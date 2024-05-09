[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / storage/export

# Module: storage/export

## Table of contents

### Modules

- [\<internal\>](storage_export._internal_.md)

### Classes

- [MaybeAsyncStorage](../classes/storage_export.MaybeAsyncStorage.md)
- [StorageBackendMemory](../classes/storage_export.StorageBackendMemory.md)
- [StorageContext](../classes/storage_export.StorageContext.md)
- [StorageError](../classes/storage_export.StorageError.md)
- [StorageManager](../classes/storage_export.StorageManager.md)
- [SyncStorage](../classes/storage_export.SyncStorage.md)

### Interfaces

- [Storage](../interfaces/storage_export.Storage.md)

### Type Aliases

- [StorageOperationResult](storage_export.md#storageoperationresult)
- [SupportedStorageTypes](storage_export.md#supportedstoragetypes)

### Functions

- [fromJson](storage_export.md#fromjson)
- [toJson](storage_export.md#tojson)

## Type Aliases

### StorageOperationResult

Ƭ **StorageOperationResult**\<`S`, `T`\>: `S` extends [`SyncStorage`](../classes/storage_export.SyncStorage.md) ? `T` : `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) |
| `T` | `void` |

#### Defined in

[packages/matter.js/src/storage/Storage.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/Storage.ts#L58)

___

### SupportedStorageTypes

Ƭ **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes)

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StringifyTools.ts#L60)

## Functions

### fromJson

▸ **fromJson**(`json`): [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StringifyTools.ts#L98)

___

### toJson

▸ **toJson**(`object`, `spaces?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes) |
| `spaces?` | `number` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StringifyTools.ts#L68)
