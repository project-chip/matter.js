[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / storage/export

# Module: storage/export

## Table of contents

### Classes

- [Storage](../classes/storage_export.Storage.md)
- [StorageBackendDisk](../classes/storage_export.StorageBackendDisk.md)
- [StorageBackendJsonFile](../classes/storage_export.StorageBackendJsonFile.md)
- [StorageBackendMemory](../classes/storage_export.StorageBackendMemory.md)
- [StorageContext](../classes/storage_export.StorageContext.md)
- [StorageError](../classes/storage_export.StorageError.md)
- [StorageManager](../classes/storage_export.StorageManager.md)

### Type Aliases

- [SupportedStorageTypes](storage_export.md#supportedstoragetypes)

### Functions

- [fromJson](storage_export.md#fromjson)
- [toJson](storage_export.md#tojson)

## Type Aliases

### SupportedStorageTypes

Ƭ **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](export._internal_.md#supportedcomplexstoragetypes)

#### Defined in

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:23

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

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:25

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

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:24
