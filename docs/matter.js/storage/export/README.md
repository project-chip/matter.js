[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / storage/export

# storage/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Classes

- [MaybeAsyncStorage](classes/MaybeAsyncStorage.md)
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

[packages/matter.js/src/storage/Storage.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/Storage.ts#L61)

***

### SupportedStorageTypes

> **SupportedStorageTypes**: [`SupportedStorageBaseTypes`](-internal-/README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](-internal-/README.md#supportedcomplexstoragetypes)

#### Source

[packages/matter.js/src/storage/StringifyTools.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StringifyTools.ts#L60)

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

[packages/matter.js/src/storage/StringifyTools.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StringifyTools.ts#L98)

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

[packages/matter.js/src/storage/StringifyTools.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StringifyTools.ts#L68)
