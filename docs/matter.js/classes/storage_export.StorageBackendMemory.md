[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](../modules/storage_export.md) / StorageBackendMemory

# Class: StorageBackendMemory

[storage/export](../modules/storage_export.md).StorageBackendMemory

Matter.js uses this key/value API to manage persistent state.

## Hierarchy

- [`SyncStorage`](storage_export.SyncStorage.md)

  ↳ **`StorageBackendMemory`**

## Table of contents

### Constructors

- [constructor](storage_export.StorageBackendMemory.md#constructor)

### Properties

- [isInitialized](storage_export.StorageBackendMemory.md#isinitialized)
- [store](storage_export.StorageBackendMemory.md#store)

### Accessors

- [initialized](storage_export.StorageBackendMemory.md#initialized)

### Methods

- [#setKey](storage_export.StorageBackendMemory.md##setkey)
- [clear](storage_export.StorageBackendMemory.md#clear)
- [clearAll](storage_export.StorageBackendMemory.md#clearall)
- [close](storage_export.StorageBackendMemory.md#close)
- [contexts](storage_export.StorageBackendMemory.md#contexts)
- [createContextKey](storage_export.StorageBackendMemory.md#createcontextkey)
- [delete](storage_export.StorageBackendMemory.md#delete)
- [get](storage_export.StorageBackendMemory.md#get)
- [initialize](storage_export.StorageBackendMemory.md#initialize)
- [keys](storage_export.StorageBackendMemory.md#keys)
- [set](storage_export.StorageBackendMemory.md#set)
- [values](storage_export.StorageBackendMemory.md#values)
- [create](storage_export.StorageBackendMemory.md#create)

## Constructors

### constructor

• **new StorageBackendMemory**(`store?`): [`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |

#### Returns

[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[constructor](storage_export.SyncStorage.md#constructor)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

## Properties

### isInitialized

• `Protected` **isInitialized**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:11](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L11)

___

### store

• `Protected` **store**: `any` = `{}`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

## Accessors

### initialized

• `get` **initialized**(): `boolean`

#### Returns

`boolean`

#### Overrides

SyncStorage.initialized

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:17](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L17)

## Methods

### #setKey

▸ **#setKey**(`contexts`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:55](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L55)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:45](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L45)

___

### clearAll

▸ **clearAll**(`contexts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[clearAll](storage_export.SyncStorage.md#clearall)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:118](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L118)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[close](storage_export.SyncStorage.md#close)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:40](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L40)

___

### contexts

▸ **contexts**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[contexts](storage_export.SyncStorage.md#contexts)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:100](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L100)

___

### createContextKey

▸ **createContextKey**(`contexts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:27](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L27)

___

### delete

▸ **delete**(`contexts`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[delete](storage_export.SyncStorage.md#delete)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:79](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L79)

___

### get

▸ **get**\<`T`\>(`contexts`, `key`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `key` | `string` |

#### Returns

`undefined` \| `T`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[get](storage_export.SyncStorage.md#get)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:49](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L49)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[initialize](storage_export.SyncStorage.md#initialize)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:34](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L34)

___

### keys

▸ **keys**(`contexts`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`string`[]

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[keys](storage_export.SyncStorage.md#keys)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:85](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L85)

___

### set

▸ **set**(`contexts`, `keyOrValues`, `value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |
| `keyOrValues` | `string` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |
| `value?` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[set](storage_export.SyncStorage.md#set)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:64](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L64)

___

### values

▸ **values**(`contexts`): `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contexts` | `string`[] |

#### Returns

`Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[values](storage_export.SyncStorage.md#values)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:91](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L91)

___

### create

▸ **create**(`store?`): `Promise`\<[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `any` |

#### Returns

`Promise`\<[`StorageBackendMemory`](storage_export.StorageBackendMemory.md)\>

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:21](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/storage/StorageBackendMemory.ts#L21)
