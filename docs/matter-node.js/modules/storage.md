[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / storage

# Module: storage

## Table of contents

### Classes

- [Storage](../classes/storage.Storage.md)
- [StorageBackendDisk](../classes/storage.StorageBackendDisk.md)
- [StorageBackendMemory](../classes/storage.StorageBackendMemory.md)
- [StorageContext](../classes/storage.StorageContext.md)
- [StorageManager](../classes/storage.StorageManager.md)

### Type Aliases

- [SupportedStorageTypes](storage.md#supportedstoragetypes)

### Functions

- [fromJson](storage.md#fromjson)
- [toJson](storage.md#tojson)

## Type Aliases

### SupportedStorageTypes

Ƭ **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](index._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](index._internal_.md#supportedcomplexstoragetypes)

#### Defined in

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:23

## Functions

### fromJson

▸ **fromJson**(`json`): [`SupportedStorageTypes`](storage.md#supportedstoragetypes)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`SupportedStorageTypes`](storage.md#supportedstoragetypes)

#### Defined in

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:25

___

### toJson

▸ **toJson**(`object`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`SupportedStorageTypes`](storage.md#supportedstoragetypes) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/storage/StringifyTools.d.ts:24
