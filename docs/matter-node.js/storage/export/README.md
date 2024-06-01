[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / storage/export

# storage/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Classes

- [MaybeAsyncStorage](classes/MaybeAsyncStorage.md)
- [StorageBackendDisk](classes/StorageBackendDisk.md)
- [StorageBackendJsonFile](classes/StorageBackendJsonFile.md)
- [StorageBackendMemory](classes/StorageBackendMemory.md)
- [StorageContext](classes/StorageContext.md)
- [StorageError](classes/StorageError.md)
- [StorageManager](classes/StorageManager.md)
- [SyncStorage](classes/SyncStorage.md)

### Interfaces

- [Storage](interfaces/Storage.md)

## Type Aliases

### StorageOperationResult\<S, T\>

> **StorageOperationResult**\<`S`, `T`\>: `S` *extends* [`SyncStorage`](classes/SyncStorage.md) ? `T` : `Promise`\<`T`\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](interfaces/Storage.md) | - |
| `T` | `void` |

#### Source

packages/matter.js/dist/esm/storage/Storage.d.ts:53

***

### SupportedStorageTypes

> **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](-internal-/README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](-internal-/README.md#supportedcomplexstoragetypes)

#### Source

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:29

## Functions

### fromJson()

> **fromJson**(`json`): [`SupportedStorageTypes`](README.md#supportedstoragetypes)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

[`SupportedStorageTypes`](README.md#supportedstoragetypes)

#### Source

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:31

***

### toJson()

> **toJson**(`object`, `spaces`?): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `object` | [`SupportedStorageTypes`](README.md#supportedstoragetypes) |
| `spaces`? | `number` |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:30
