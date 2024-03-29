[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / storage/export

# Module: storage/export

## Table of contents

### Modules

- [\<internal\>](storage_export._internal_.md)

### Classes

- [MaybeAsyncStorage](../classes/storage_export.MaybeAsyncStorage.md)
- [StorageBackendDisk](../classes/storage_export.StorageBackendDisk.md)
- [StorageBackendJsonFile](../classes/storage_export.StorageBackendJsonFile.md)
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

packages/matter.js/dist/esm/storage/Storage.d.ts:50

___

### SupportedStorageTypes

Ƭ **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes)

#### Defined in

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:29

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

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:31

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

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:30
