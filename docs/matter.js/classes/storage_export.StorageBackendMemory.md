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

- [initialized](storage_export.StorageBackendMemory.md#initialized)
- [store](storage_export.StorageBackendMemory.md#store)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

## Properties

### initialized

• `Protected` **initialized**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L11)

___

### store

• `Protected` **store**: `any` = `{}`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L13)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L51)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L41)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L114)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[close](storage_export.SyncStorage.md#close)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L36)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L96)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L23)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L75)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L45)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

[SyncStorage](storage_export.SyncStorage.md).[initialize](storage_export.SyncStorage.md#initialize)

#### Defined in

[packages/matter.js/src/storage/StorageBackendMemory.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L30)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L81)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L60)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L87)

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

[packages/matter.js/src/storage/StorageBackendMemory.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StorageBackendMemory.ts#L17)
